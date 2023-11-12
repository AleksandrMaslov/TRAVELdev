import { IAuthUser, IDBResponse, IObject, IUser } from 'src/models'

import { Config } from './http'

export default class AuthorizationService {
  public static async login(email: string, password: string): Promise<IUser> {
    const body = { login: { email, password } }
    const response: IDBResponse<IUser> = await AuthorizationService.post(body)
    const { data }: { data: IUser } = response

    return data
  }

  public static async checkAuth(token: string) {
    const body = { authentication: token }
    const response: IDBResponse<IAuthUser> =
      await AuthorizationService.post(body)
    const { data }: { data: IAuthUser } = response

    return data
  }

  private static async post<T>(body: {
    [key: string]: string | null | IObject
  }): Promise<IDBResponse<T>> {
    // fetch with redirect is important to solve Google Apps CORS
    // header Authentication: `Bearer ${localStorage.getItem('token')}` affects with the same problem

    const response: Response = await fetch(Config.Url, {
      redirect: 'follow',
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
    })

    return response.json()
  }
}
