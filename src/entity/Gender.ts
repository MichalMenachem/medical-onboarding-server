import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Gender {
  @PrimaryColumn()
  name: string;

  @Column()
  iconPath: string;
}
