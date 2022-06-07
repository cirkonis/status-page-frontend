import {IAlert} from "./IAlert";

export interface IAlertRules {
  status: string,
  data: {
    alerts: IAlert[]
  }
}
