import { IObject } from '.'

interface ITrip extends IObject {
  id: string
  year: string
  month: string
  place: string
  country: string
  description: string
}

export default ITrip
