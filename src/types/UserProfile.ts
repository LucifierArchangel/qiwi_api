import { AuthInfo } from './AuthInfo'
import { ContractInfo } from './ContractInfo'
import { UserInfo } from './UserInfo'

type UserProfile = {
    authInfo?: AuthInfo
    contractInfo?: ContractInfo
    userInfo?: UserInfo
}

export { UserProfile }
