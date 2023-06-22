export interface DeviceStatusInfo {
    bearing: number,
    currentStateDuration: string,
    exceptionEvents: [],
    isDeviceCommunicating: boolean,
    isDriving: boolean,
    latitude: number,
    longitude: number,
    speed: number,
    dateTime: string,
    device: {
        id: string
    },
    driver: string,
    isHistoricLastDriver: boolean,
    groups: [{
        children: [],
        id: string
    }]
}