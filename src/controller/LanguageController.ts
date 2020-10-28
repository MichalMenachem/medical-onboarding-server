import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Language } from "../entity/Language";

export class LanguageController {
  private languageRepository = getRepository(Language);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.languageRepository.find();
  }
}
