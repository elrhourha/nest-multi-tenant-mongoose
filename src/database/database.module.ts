import { DynamicModule, Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import mongoose, { connection, Connection } from 'mongoose';
import { createConnection } from 'src/database/connections.store';
import { Logger } from '@nestjs/common';

const logger = new Logger('DatabaseModule');
export const CONNECTION = Symbol('CONNECTION');

export interface ContextPayload {
  tenantId: string;
}

/**
 * This provider is used to create a connection to the database based on the tenantId.
 * It's a request-scoped provider, but it's durable, meaning that it will be reused for the same tenantId, not
 * only this provider but also all the providers that depend on it.
 */
export const mongooseConnectionProvider = {
  provide: CONNECTION,
  scope: Scope.REQUEST,
  durable: true,
  useFactory: async ({ tenantId }: ContextPayload): Promise<Connection> => {
    if (!tenantId) {
      logger.log('No tenantId provided, using default connection');
      return connection;
    }
    return createConnection(`db-${tenantId}`);
  },
  inject: [REQUEST],
};

@Global()
@Module({})
export class DatabaseModule {
  static async registerAsync(): Promise<DynamicModule> {
    await mongoose.connect(`${process.env.MONGO_HOST}`);
    logger.log('Connected to main database');
    return {
      module: DatabaseModule,
      providers: [mongooseConnectionProvider],
      exports: [mongooseConnectionProvider],
    };
  }
}
