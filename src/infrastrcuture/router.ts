import { FastifyInstance } from "fastify";
import { HealthStatusController } from '../controller/health-status-controller';
import { GroupController } from '../controller/group/group-controller';

export const Router = async(fastify: FastifyInstance) => {
  fastify.register(HealthStatusController, {prefix: '/api/v1/health-status'});
	fastify.register(GroupController, {prefix: '/api/v1/group'});
}