
# SIMPLICY Secret Service

## Description


## Installation

```bash
$ yarn install
```

## Docker compose
only mongodb
```bash
$ docker-compose -f docker-compose.mongo.yml --env-file .env up -d
```

simplicy-secret-service + mongodb
```bash
$ docker-compose --env-file .env up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
