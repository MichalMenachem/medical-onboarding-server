import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Age {
  @PrimaryColumn()
  range: string;

  @Column()
  iconPath: string;

  @Column()
  min: number;

  @Column()
  max: number;
}
