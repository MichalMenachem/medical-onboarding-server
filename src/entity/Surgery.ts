import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Surgery {
  @PrimaryColumn()
  name: string;
}
