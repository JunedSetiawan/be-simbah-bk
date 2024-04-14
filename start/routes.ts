/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import AuthController from '#controllers/auth_controller'
import UsersController from '#controllers/users_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
// routes for authentication
router
  .group(() => {
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
    router.post('/logout', [AuthController, 'logout']).use(middleware.auth())
    router.post('/refresh-token', [AuthController, 'refreshToken'])

    router
      .group(() => {
        // routes for users
        router.get('/users', [UsersController, 'index'])
        router.get('/users/:id', [UsersController, 'show'])
        router.post('/users', [UsersController, 'store'])
        router.put('/users/:id', [UsersController, 'update'])
        router.delete('/users/:id', [UsersController, 'destroy'])
      })
      .use(middleware.auth())
  })
  .prefix('api')
