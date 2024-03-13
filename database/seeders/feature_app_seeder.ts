import App from '#models/app'
import Feature from '#models/feature'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await App.query().where({ code: 'VK' }).delete()

    const app = await App.create({
      code: 'VK',
      name: 'virtual konseling',
    })

    await Feature.createMany([
      {
        app_id: app.id,
        code: `show-self-virtual-rapor@${app.code}`,
        name: `Melihat virtual rapor miliknya`,
      },

      // data class
      {
        app_id: app.id,
        code: `show-all-data-class@${app.code}`,
        name: `Melihat data semua anggota kelas`,
      },
      {
        app_id: app.id,
        code: `show-data-class-taughted@${app.code}`,
        name: `Melihat data anggota kelas yang diammpu`,
      },
      {
        app_id: app.id,
        code: `promote-student-class-taughted@${app.code}`,
        name: `Mengatur kenaikan kelas siswa yang diampu`,
      },
      {
        app_id: app.id,
        code: `promote-all-student-class@${app.code}`,
        name: `Mengatur kenaikan kelas semua siswa`,
      },

      // lesson
      {
        app_id: app.id,
        code: `grading-all-student-lesson@${app.code}`,
        name: `Memberi nilai mata pelajaran semua siswa`,
      },
      {
        app_id: app.id,
        code: `grading-student-lesson-taughted@${app.code}`,
        name: `Memberi nilai mata pelajaran siswa yang diampu`,
      },

      // excul
      {
        app_id: app.id,
        code: `grading-all-student-excul@${app.code}`,
        name: `Memberi nilai ekstrakurikuler semua siswa`,
      },
      {
        app_id: app.id,
        code: `grading-student-excul-taughted@${app.code}`,
        name: `Memberi nilai ekstrakurikuler siswa yang diampu`,
      },
    ])
  }
}
