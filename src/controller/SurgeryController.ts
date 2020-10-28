import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Surgery } from "../entity/Surgery";

export class SurgeryController {
  private surgeryRepository = getRepository(Surgery);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.surgeryRepository.find();
  }
}
