import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Patient } from "./entity/Patient";
import { Age } from "./entity/Age";
import { Gender } from "./entity/Gender";
import { Language } from "./entity/Language";
import { Surgery } from "./entity/Surgery";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    const age = await connection.manager.findOne(Age, {
      where: {
        range: "0-8",
      },
    });
    const gender = await connection.manager.findOne(Gender, {
      where: {
        name: "Female",
      },
    });
    const language = await connection.manager.findOne(Language, {
      where: {
        name: "Hebrew",
      },
    });
    const surgery = await connection.manager.findOne(Surgery, {
      where: {
        name: "Leg Surgery",
      },
    });

    // insert new patients for test
    await connection.manager.save(
      connection.manager.create(Patient, {
        age: age,
        gender: gender,
        language: language,
        surgery: surgery,
      })
    );

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
