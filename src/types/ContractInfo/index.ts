import { IdentificationInfo } from './identificationInfo'

type ContractInfo = {
    blocked: boolean
    contractId: number
    creationDate: string
    features: any[]
    identificationInfo: IdentificationInfo
}

export { ContractInfo, IdentificationInfo }
