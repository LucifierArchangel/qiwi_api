import { MobilePinInfo } from './MobilePinInfo'
import { PassInfo } from './PassInfo'
import { PinInfo } from './PinInfo'

type AuthInfo = {
    personId: number
    registrationDate: string
    boundEmail: string
    ip: string
    lastLoginDate: string
    mobilePinInfo: MobilePinInfo
    passInfo: PassInfo
    pinInfo: PinInfo
}

export { AuthInfo, MobilePinInfo, PassInfo, PinInfo }
