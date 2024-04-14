import User from '#models/user'
import { registerValidator, loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async register({ request, response }: HttpContext) {
    // Implement the register logic here
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)
    console.log(user)

    return response.created(data)
  }

  public async login({ request, response }: HttpContext) {
    const { username, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(username, password)
    const token = await User.accessTokens.create(user)

    console.log({
      token: token,
      ...user.serialize(),
    })

    return response.ok({
      token: token,
      ...user.serialize(),
    })
  }

  public async logout({ auth, response }: HttpContext) {
    // Implement the logout logic here
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier

    if (!token) {
      return response.badRequest({ message: 'Token not found' })
    }

    await User.accessTokens.delete(user, token)
    return response.ok({ message: 'Logged out' })
  }

  async refreshToken({ request }: HttpContext) {}
}
