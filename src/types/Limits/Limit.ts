import { Interval } from './Interval'
import { LimitTypes } from './LimitsType'

type Limit = {
    type: LimitTypes
    currency: number
    max: number
    spent: number
    rest: number
    interval: Interval
}

export { Limit }
