import xa from 'xfarr-api'

let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan text`
   let res = await xa.tools.obfuscatorjs(text)
   conn.reply(m.chat, res.result, m)
}

handler.help = ['encsc','encscrip','obf']
handler.tags = ['tools']
handler.premium = true
handler.command = /^(encscrip|encsc|obf)$/i
export default handler