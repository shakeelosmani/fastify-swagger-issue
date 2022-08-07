import fastify from "fastify";
import { Router } from "./router";
import { config } from "dotenv";
import orm from "fastify-typeorm";
import fastifySwagger from '@fastify/swagger';

//configure dotenv
config();

const server = fastify({
  logger: !!(process.env.NODE_ENV !== "development"),
});

// routers
server.register(Router);

// ORM registration
server.register(orm, {
  type: "better-sqlite3",
  database: "./database/db.sql",
  entities: ["./dist/entities/*.js"],
  migrations: ["./src/migrations/*.ts"],
  synchronize: true
});

// swagger registration
server.register(fastifySwagger, {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'API documentation for IT core Twitter backend',
      description: 'Swagger docs for the API',
      version: '1.0.0'
    },
    schemes: ['http']
  },
  exposeRoute:true
});

export { server };
