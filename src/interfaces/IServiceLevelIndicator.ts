import {ESliStatus} from "../enums/ESliStatus";

export interface IServiceLevelIndicator {
  id?: string,
  name: string,
  nebulaStatus: ESliStatus,
  gcpStatus: ESliStatus
}
