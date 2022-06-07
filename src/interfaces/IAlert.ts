export interface IAlert {
  labels: {
    alertname: string
  },
  annotations: {
    "__dashboardUid__": string,
    "__panelId__": string,
  }
  state: string,
  activeAt: string,
  value: string
}
