import {ESliStatus} from "../enums/ESliStatus";

export interface IServiceLevelIndicator {
  name: string
  nebulaStatus: ESliStatus,
  gcpStatus: ESliStatus
}
