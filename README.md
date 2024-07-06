# Tenant-Based NestJS Application

This repository contains a NestJS application that supports multi-tenancy with dedicated MongoDB databases for each tenant. The application provides two API endpoints and uses a durable subtree pattern to manage tenant-specific logic.

## Features

- **Multi-tenancy**: Each tenant has a dedicated MongoDB database.
- **Durable Subtree Pattern**: Ensures tenant-specific controllers, services, and Mongoose models are isolated.
- **API Endpoints**:
    - `POST /controller-a`
    - `POST /controller-b`
- **Logging**: Logs are generated every time a component instance (controller, service, or Mongoose model) is created to help understand the durable subtree pattern.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setting Up MongoDB

The application uses MongoDB as its database. A `docker-compose.yml` file is provided at the root of the repository to help you quickly start a MongoDB instance.

1. **Start MongoDB**:

    ```sh
    docker-compose up -d
    ```

   This will start a MongoDB instance with the following configuration:
    - MongoDB will be accessible on port `27017`.
    - Default root username: `root`
    - Default root password: `example`

2. **Verify MongoDB**:

   Ensure MongoDB is running by accessing it via a MongoDB client or by using the following command:

    ```sh
    docker ps
    ```

   You should see a container named `mongodb` running.

### Environment Variables

Create a `.env` file in the root of the project and add the following variable:

```env
MONGO_HOST="mongodb://root:example@localhost:27017"
```

### Installing Dependencies

To install the necessary dependencies, use the following command:

- npm install

### Running the Application

To start the NestJS application, execute the following command:

- npm run start

After starting the application, it will be accessible at http://localhost:3000.

### Sending a Curl Request

To interact with the API endpoints using `curl`, follow these steps:

**Controller A Endpoint**

Send a POST request to `http://localhost:3000/controller-a` with the following payload:
```json
{
    "propertyA": "value"
}
```
Example:
```
curl -X POST http://localhost:3000/controller-a -H "Content-Type: application/json" -d '{"propertyA":"value"}'
```

**Controller B Endpoint**

Send a POST request to `http://localhost:3000/controller-b` with a sample payload.
Example:
```
curl -X POST http://localhost:3000/controller-b -H "Content-Type: application/json" -d '{"propertyB":"sample"}'
```

### Verifying Logs

Logs are generated every time a component instance (controller, service, or Mongoose model) is created.

To help understand the durable subtree pattern, inspect the logs generated by the application.
### Checking Multi-Tenant Database

Each tenant has a dedicated MongoDB database. To verify the multi-tenant functionality:

- **Access MongoDB Instance**: Connect to the MongoDB instance running on `localhost:27017` (default port).

- **Check Databases**: Verify that each tenant has its own database based on the tenant's identifier or another distinguishing factor.

- **Inspect Collections**: Inside each tenant's database, inspect the collections to ensure data isolation.