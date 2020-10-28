import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Surgery {
  @PrimaryColumn()
  name: string;
}
