import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [opsi, teks] = text.split ` `
let listopsi = `Opsi Mobsi:
Masuk
Pulang
`.trim()

    if (!opsi) return conn.reply(m.chat, listopsi, m)
    if (!teks) return conn.reply(m.chat, 'tulis juga Dev ID nya\nContoh: .mobsi pulang 256719cfac87abf0', m)
   m.react(rwait)
await m.reply('Siap!!Donasi anda adalah nyawa bot ini.\nSalam hangat, @burhansyam_')
//   m.react(rwait)
let res = await fetch(`https://api.beetv.my.id/bot/mobsi/?ayo=${opsi}&id=${teks}`)
let json = await res.json()
let { presensi, status, waktu, nama, nip, opd, jarak, koordinat } = json.result

let kaslak = `🦉 *Rincian Presensi* ${presensi}
❗ *Status   :* ${status}
🥷🏽 *Nama ASN :* ${nama}
⏲ *Waktu    :* ${waktu}
🚏 *NIP :* ${nip}
🏢 *Alamat OPD :* ${opd}
🎯 *Jarak :* ${jarak}
🗺 *Koordinat :* ${koordinat}
⏳ *Silakan cek di riwayat presensi Anda :*
https://bkad.my.id/mobsi/riwayat/?nip=${nip}`

conn.reply(m.chat, kaslak, m)
   m.react(done) 
}

handler.help = ['mobsi <Opsi DevId>']
handler.tags = ['bkad']
handler.command = /^(mobsi)$/i
handler.premium = false

export default handler
