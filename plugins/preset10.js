import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 10 」*
https://alight.link/UNgUAHjxoZdxnGT8A
`.trim()
  m.reply(caption)
}

handler.command = /^(p10)$/i
handler.limit = true

export default handler
