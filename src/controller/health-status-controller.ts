import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const HealthStatusController = async(fastify: FastifyInstance) => {
	fastify.get('/', (_req: FastifyRequest, reply: FastifyReply) => {
		reply.send({status: "ok"});
	});
}