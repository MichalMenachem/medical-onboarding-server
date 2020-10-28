import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Language {
  @PrimaryColumn()
  name: string;

  @Column()
  iconPath: string;
}
