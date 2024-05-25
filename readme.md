# NestJS (code first) GraphQL

This is a simple deployment of GraphQL using the NestJS framework

## Directory Structure

. ├── src │ ├── app │ ├── data │ ├── graph │ ├── service │ └── testData ├── Dockerfile ├── docker-compose.yml └── README.md

### `src/`

This is the main source directory of the project. It contains all the source code files.

#### `src/app`

This directory contains the main application files. This is where the main logic of the application resides.

#### `src/data`

This directory contains the data source files. These files interact with the database or other data sources.

#### `src/graph`

This directory contains the GraphQL schema definitions and resolvers. This is where the GraphQL API is defined.

#### `src/service`

This directory contains the service files. These files contain the business logic of the application.

#### `src/testData`

This directory contains test data for the application. This data is used during testing to simulate real data.

### `Dockerfile`

This file contains the Docker instructions for building a Docker image of the application. This image can be run in any environment that supports Docker.

### `docker-compose.yml`

This file is used for defining and running multi-container Docker applications. With this file, you can run your app in an isolated environment with Docker Compose.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

    git clone https://github.com/username/repository.git

cd repository

    npm install

Then, you can run the application:

    npm run start

Docker
To build a Docker image of the application, run:

    docker build -t my-app ..

Then, you can run the application in a Docker container:

    docker run -p 3500:3500 my-app

This will start the application and make it available at http://localhost:3500.

Docker Compose
To run your app with Docker Compose, make sure you have the docker-compose.yml file in your project root, then run:

    docker-compose up

This will build your Docker image if it hasn't been built already, then run your app. Your app should now be accessible at http://localhost:3500.
