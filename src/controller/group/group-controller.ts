import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { Group } from "../../entities/group";
import { GroupSchema, GroupsSchema, GroupType } from "../../schemas/group-schema";

export const GroupController = async (fastify: FastifyInstance) => {
  fastify.get(
    "/",
    {
      schema: {
        description: 'Get all Groups in the database',
        summary: 'Get Groups',
        response: { 200: GroupsSchema },
      },
    },
    async (_req: FastifyRequest, reply: FastifyReply) => {
      const groups = await fastify.orm
        .getRepository(Group)
        .createQueryBuilder("Group")
        .getMany();
      return reply.send(groups);
    }
  );

  fastify.post<{ Body: GroupType }>(
    "/",
    { schema: { body: GroupSchema, response: { 201: GroupSchema } } },
    async (_req, reply) => {
      const group = new Group();
      group.name = _req.body.name;
      const result = await fastify.orm.getRepository(Group).save(group);
      return reply.status(201).send(result);
    }
  );
};
