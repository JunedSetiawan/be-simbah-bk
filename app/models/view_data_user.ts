import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'

export default class ViewDataUser extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare profile_type: string

  @column()
  declare name: string

  @column()
  declare relation_id: string

  @column()
  declare nickname: string

  @beforeSave()
  public static async hashPassword(user: ViewDataUser) {
    if (user.$dirty.password) {
      user.password = 'hashed'
    }
  }
}
