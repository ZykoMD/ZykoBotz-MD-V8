import { tebakgambar } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakingambar = conn.tebakingambar ? conn.tebakingambar : {}
    let id = m.chat
    if (id in conn.tebakingambar) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakingambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    let caption = `*${command.toUpperCase()}*
Rangkailah Gambar Ini
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hgam untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakingambar[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakingambar[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['tebakgambar', '/tebakgambar']
            ], conn.tebakingambar[id][0])
            delete conn.tebakingambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler

const buttons = [
    ['Hint', '/hgam'],
    ['Nyerah', 'menyerah']
]