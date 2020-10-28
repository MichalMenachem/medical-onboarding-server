import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Patient } from "../entity/Patient";

export class PatientController {
  private patientRepository = getRepository(Patient);

  //   async all(request: Request, response: Response, next: NextFunction) {
  //   return this.patientRepository.find();
  //   }

  //   async one(request: Request, response: Response, next: NextFunction) {
  //     return this.patientRepository.findOne(request.params.id);
  //   }

  async save(request: Request, response: Response, next: NextFunction) {
    const { age, gender, surgery, language } = request.body;
    return this.patientRepository.save({
      age: { range: age },
      gender: { name: gender },
      surgery: { name: surgery },
      language: { name: language },
    });
  }

  //   async remove(request: Request, response: Response, next: NextFunction) {
  //     let userToRemove = await this.patientRepository.findOne(request.params.id);
  //     await this.patientRepository.remove(userToRemove);
  //   }
}
