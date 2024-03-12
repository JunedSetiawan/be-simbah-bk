import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async register({ request }: HttpContext) {}

  public async login({ request }: HttpContext) {}

  public async logout({ request }: HttpContext) {}

  async refreshToken({ request }: HttpContext) {}
}
