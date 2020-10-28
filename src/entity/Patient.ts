import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Age } from "./Age";
import { Gender } from "./Gender";
import { Language } from "./Language";
import { Surgery } from "./Surgery";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Gender)
  @JoinColumn()
  gender: Gender;

  @ManyToOne(() => Age)
  @JoinColumn()
  age: Age;

  @ManyToOne(() => Language)
  @JoinColumn()
  language: Language;

  @ManyToOne(() => Surgery)
  @JoinColumn()
  surgery: Surgery;
}
