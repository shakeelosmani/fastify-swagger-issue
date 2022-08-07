import { server } from "./infrastrcuture/app";

const FASTIFY_PORT = Number(process.env.PORT) || 3006;

server.listen({ port: FASTIFY_PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
});
