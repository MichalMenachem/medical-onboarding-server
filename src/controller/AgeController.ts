import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Age } from "../entity/Age";

export class AgeController {
  private ageRepository = getRepository(Age);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.ageRepository.find();
  }
}
