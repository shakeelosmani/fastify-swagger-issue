import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'group'})
export class Group {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		length: 50
	})
	name: string
}