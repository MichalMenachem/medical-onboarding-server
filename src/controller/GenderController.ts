import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Gender } from "../entity/Gender";

export class GenderController {
  private genderRepository = getRepository(Gender);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.genderRepository.find();
  }
}
