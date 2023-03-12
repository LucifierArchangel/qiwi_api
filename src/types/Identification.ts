import { IdentificationLevel } from './IdentificationLevel'

type Identification = {
    id: number
    type: IdentificationLevel
    birthDate: string
    firstName: string
    middleName: string
    lastName: string
    passport: string
    inn: string
    snils: string
    oms: string
}

export { Identification }
