import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return User.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = request.only(['username', 'email', 'password'])
    return User.create(data)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return User.find(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.find(params.id)
    if (!user) {
      return 'User not found'
    }
    user.merge(data)
    await user.save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.find(params.id)
    if (!user) {
      return 'User not found'
    }
    await user.delete()
    return 'User deleted'
  }
}
