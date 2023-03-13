FROM node:18.15.0 AS builder

ARG APP_PORT

# Create app directory
WORKDIR /app

COPY . .

# Install app dependencies
RUN yarn install


RUN yarn build

FROM node:18.15.0-slim

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/tsconfig.build.json ./

EXPOSE ${APP_PORT}
CMD [ "yarn", "start" ]