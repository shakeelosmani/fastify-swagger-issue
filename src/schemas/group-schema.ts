import { Static, Type } from '@sinclair/typebox'

export const GroupSchema = Type.Object({
	id: Type.Optional(Type.Number({description: "The id of the group", examples:[1]})),
  name: Type.String({description: "Name of the group", examples:["Test1"]})
})

export const GroupsSchema = Type.Array(GroupSchema);

export type GroupType = Static<typeof GroupSchema>