import { InputTypes } from "./enums/input-types";

export type InputTypeProps =
  | InputTypes.EMAIL
  | InputTypes.PASSWORD
  | InputTypes.USER
  | InputTypes.DEFAULT
  | InputTypes.TEXT
  | InputTypes.SEARCH
  | InputTypes.FILE
  | InputTypes.NUMBER
  | InputTypes.CHECKBOX;
