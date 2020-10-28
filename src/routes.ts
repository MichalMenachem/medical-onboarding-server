import { AgeController } from "./controller/AgeController";
import { GenderController } from "./controller/GenderController";
import { LanguageController } from "./controller/LanguageController";
import { PatientController } from "./controller/PatientController";
import { SurgeryController } from "./controller/SurgeryController";

export const Routes = [
  {
    method: "get",
    route: "/age",
    controller: AgeController,
    action: "all",
  },
  {
    method: "get",
    route: "/gender",
    controller: GenderController,
    action: "all",
  },
  {
    method: "get",
    route: "/language",
    controller: LanguageController,
    action: "all",
  },
  {
    method: "get",
    route: "/surgery",
    controller: SurgeryController,
    action: "all",
  },
  {
    method: "post",
    route: "/patients",
    controller: PatientController,
    action: "save",
  },
];
