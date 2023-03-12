import * as types from './types'

class QiwiApi {
    apiUrl: string = 'https://edge.qiwi.com'
    apiKey: string
    wallet: string

    constructor(apiKey: string, wallet: string) {
        this.apiKey = apiKey
        this.wallet = wallet
    }

    async getUserProfile(): Promise<types.UserProfile> {
        return (await this.sendRequest(
            '/person-profile/v1/profile/current'
        )) as types.UserProfile
    }

    async getIdentification(): Promise<types.Identification> {
        return (await this.sendRequest(
            `/identification/v1/persons/${this.wallet}/identification`
        )) as types.Identification
    }

    async getLimits(): Promise<types.Limits> {
        return (await this.sendRequest(
            `/qw-limits/v1/persons/${this.wallet}/actual-limits`
        )) as types.Limits
    }

    async sendRequest(
        endpoint: string,
        method: string = 'GET',
        data: any | null = null
    ): Promise<any> {
        const requestOptions: RequestInit = {
            method: method,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        if (method !== 'GET' && data !== null) {
            requestOptions.body = JSON.stringify(data)
        }

        const response = await fetch(this.apiUrl + endpoint, requestOptions)
        const json = await response.json()

        return json
    }
}

export { QiwiApi, types }
