import { PatientController } from "./controller/PatientController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: PatientController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: PatientController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: PatientController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: PatientController,
    action: "remove",
  },
];
