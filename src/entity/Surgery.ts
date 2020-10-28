import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Surgery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
