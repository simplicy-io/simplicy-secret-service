FROM node:18.15.0 AS builder

ARG PORT

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

EXPOSE 8080
CMD [ "yarn", "start:dev" ]