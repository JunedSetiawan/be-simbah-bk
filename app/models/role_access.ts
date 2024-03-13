import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class RoleAccess extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare role_id: number

  @column()
  declare feature_id: number

  @column()
  declare access: '0' | '1' | '2'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
