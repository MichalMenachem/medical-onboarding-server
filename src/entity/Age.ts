import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Age {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  range: string;

  @Column()
  iconPath: string;
}
