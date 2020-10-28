import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Age } from "./Age";
import { Gender } from "./Gender";
import { Language } from "./Language";
import { Surgery } from "./Surgery";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Gender)
  @JoinColumn()
  gender: Gender;

  @OneToOne(() => Age)
  @JoinColumn()
  age: Age;

  @OneToOne(() => Language)
  @JoinColumn()
  language: Language;

  @OneToOne(() => Surgery)
  @JoinColumn()
  surgery: Surgery;
}
