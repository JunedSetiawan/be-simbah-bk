import App from '#models/app'
import Feature from '#models/feature'
import Role from '#models/role'
import RoleAccess from '#models/role_access'
import User from '#models/user'
import UserRole from '#models/user_role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  // async run() {
  //   /**
  //    * truncating prev data
  //    */
  //   const app = await App.query().where({ code: 'VK' }).first()
  //   await Role.query().where({ app_id: app?.id }).delete()
  //   /**
  //    * Setup var
  //    */
  //   const roles = {
  //     'Super Admin': {
  //       'show-self-virtual-rapor@VK': '0',
  //       'show-all-data-class@VK': '2',
  //       'show-data-class-taughted@VK': '2',
  //       'grading-all-student-lesson@VK': '2',
  //       'grading-student-lesson-taughted@VK': '2',
  //       'grading-all-student-excul@VK': '2',
  //       'grading-student-excul-taughted@VK': '2',
  //       'promote-all-student-class@VK': '2',
  //       'promote-student-class-taughted@VK': '2',
  //     },
  //     'Guru': {
  //       'show-self-virtual-rapor@VK': '0',
  //       'show-all-data-class@VK': '0',
  //       'show-data-class-taughted@VK': '2',
  //       'grading-all-student-lesson@VK': '0',
  //       'grading-student-lesson-taughted@VK': '2',
  //       'grading-all-student-excul@VK': '0',
  //       'grading-student-excul-taughted@VK': '2',
  //       'promote-all-student-class@VK': '0',
  //       'promote-student-class-taughted@VK': '2',
  //     },
  //     'Siswa': {
  //       'show-self-virtual-rapor@VK': '1',
  //       'show-all-data-class@VK': '0',
  //       'show-data-class-taughted@VK': '0',
  //       'grading-all-student-lesson@VK': '0',
  //       'grading-student-lesson-taughted@VK': '0',
  //       'grading-all-student-excul@VK': '0',
  //       'grading-student-excul-taughted@VK': '0',
  //       'promote-all-student-class@VK': '0',
  //       'promote-student-class-taughted@VK': '0',
  //     },
  //     'Orang Tua': {
  //       'show-self-virtual-rapor@VK': '1',
  //       'show-all-data-class@VK': '0',
  //       'show-data-class-taughted@VK': '0',
  //       'grading-all-student-lesson@VK': '0',
  //       'grading-student-lesson-taughted@VK': '0',
  //       'grading-all-student-excul@VK': '0',
  //       'grading-student-excul-taughted@VK': '0',
  //       'promote-all-student-class@VK': '0',
  //       'promote-student-class-taughted@VK': '0',
  //     },
  //   }
  //   for (const [roleName, dataRoleAccess] of Object.entries(roles)) {
  //     /**
  //      * Insert role
  //      */
  //     const role = await Role.create({
  //       code: roleName.replace(' ', '').toLowerCase() + '@VK',
  //       name: roleName,
  //       app_id: app?.id,
  //     })
  //     /**
  //      * Insert access
  //      */
  //     for (const [featureCode, access] of Object.entries(dataRoleAccess)) {
  //       const feature = await Feature.query().where({ code: featureCode }).first()
  //       await RoleAccess.create({
  //         role_id: role.id,
  //         feature_id: feature?.id,
  //         access: access as any,
  //       })
  //     }
  //   }
  //   /**
  //    *
  //    * Create Role From Some User
  //    *
  //    */
  //   const teacher = await User.query().where({ profile_type: 'Guru' }).first()
  //   const teacher_roles_er = await Role.query()
  //     .where({ code: 'guru@VK' })
  //     .andWhere({ app_id: app?.id })
  //     .first()
  //   await UserRole.create({
  //     user_id: teacher?.id,
  //     role_id: teacher_roles_er?.id,
  //   })
  //   const student = await User.query().where({ profile_type: 'Siswa' }).first()
  //   const student_roles_er = await Role.query()
  //     .where({ code: 'siswa@VK' })
  //     .andWhere({ app_id: app?.id })
  //     .first()
  //   await UserRole.create({
  //     user_id: student?.id,
  //     role_id: student_roles_er?.id,
  //   })
  //   const admin = await User.query().where({ profile_type: 'Umum' }).first()
  //   const admin_roles_er = await Role.query()
  //     .where({ code: 'superadmin@VK' })
  //     .andWhere({ app_id: app?.id })
  //     .first()
  //   await UserRole.create({
  //     user_id: admin?.id,
  //     role_id: admin_roles_er?.id,
  //   })
  //   const ortu = await User.query().where({ profile_type: 'Orang Tua' }).first()
  //   const ortu_roles_er = await Role.query()
  //     .where({ code: 'orangtua@VK' })
  //     .andWhere({ app_id: app?.id })
  //     .first()
  //   await UserRole.create({
  //     user_id: ortu?.id,
  //     role_id: ortu_roles_er?.id,
  //   })
  // }
}
