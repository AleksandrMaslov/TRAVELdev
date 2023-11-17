import axios from 'axios'

import { IDBResponse, ITrip } from 'src/models'

import { GASUrl } from './GoogleAppsScript'

export default class AlbumsService {
  private static TRIPS_ID =
    'AKfycbyRBeGDS9YecpOxbDXHSe_fXEbnPz0fAssfuzhqF5-VawHQ1mjRNDz9lLMpXcNLqcx8'

  public static async getAllTrips(): Promise<IDBResponse<ITrip[]>> {
    const url = `${GASUrl(AlbumsService.TRIPS_ID)}?trips=all`
    const response = await axios.get<IDBResponse<ITrip[]>>(url)
    return response.data
  }

  public static async getTripById(id: string): Promise<IDBResponse<ITrip>> {
    const url = `${GASUrl(AlbumsService.TRIPS_ID)}?trip=${id}`
    const response = await axios.get<IDBResponse<ITrip>>(url)
    return response.data
  }
}
