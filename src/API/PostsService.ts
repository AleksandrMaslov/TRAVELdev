import axios from 'axios'

import { IDBResponse, IPost } from 'src/models'

import { Config } from './http'

export default class PostsService {
  public static async getAll(): Promise<IPost[]> {
    const response = await axios.get<IDBResponse<IPost[]>>(
      `${Config.Url}?posts=all`,
    )
    return response.data.data
  }

  public static async getPostById(id: string): Promise<IPost> {
    const response = await axios.get<IDBResponse<IPost>>(
      `${Config.Url}?post=${id}`,
    )

    if (!response.data.data) throw new Error('Requested Post is missing...')

    return response.data.data
  }
}
