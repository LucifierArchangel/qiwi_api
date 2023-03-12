import { BankAlias } from '../BankAlias'
import { IdentificationLevel } from '../IdentificationLevel'

type IdentificationInfoObject = {
    bankAlias: BankAlias
    identificationLevel: IdentificationLevel
    passportExpired: boolean
}

export { IdentificationInfoObject }
