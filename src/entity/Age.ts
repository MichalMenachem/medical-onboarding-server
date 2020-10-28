import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Age {
  @PrimaryColumn()
  range: string;

  @Column()
  iconPath: string;
}
