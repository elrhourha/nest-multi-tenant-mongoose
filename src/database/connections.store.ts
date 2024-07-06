import mongoose, { Connection } from 'mongoose';
import { Logger } from '@nestjs/common';
const connections = new Map<string, Connection>();

export const getConnection = (dbName: string) => {
  if (connections.has(dbName)) {
    return connections.get(dbName);
  }
};

export const setConnection = (dbName: string, connection: Connection) => {
  connections.set(dbName, connection);
};

export const createConnection = async (dbName: string) => {
  const logger = new Logger();
  if (connections.has(dbName)) {
    return connections.get(dbName);
  }
  logger.log(`Creating connection for database ${dbName}`);

  const connection = mongoose.createConnection(`${process.env.MONGO_HOST}`, {
    dbName,
  });

  connection.on('error', (error) => {
    logger.error(`Error in connection ${dbName}`, error);
  });

  connection.on('connected', () => {
    logger.log(`Connected to ${dbName}`);
  });

  await connection.asPromise();
  setConnection(dbName, connection);
  return connection;
};
