import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`${global.stiker_wait}`)
let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.help = ['stickhoppai', 'hoppai']
handler.tags = ['sticker', 'premium']
handler.command = /^(stickhoppai|hoppai)$/i
handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [

'https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg',
'https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg',
'https://telegra.ph/file/1d886f66a44871205335f.jpg',
'https://telegra.ph/file/54d19a9094dc509370bf9.jpg',
'https://telegra.ph/file/e649475bcde78a9977ee5.jpg',
'https://telegra.ph/file/32ba20b6139b129c559c8.jpg',
'https://telegra.ph/file/948434cda49e4af5d9f11.jpg',
'https://telegra.ph/file/6f353c68533283fe79871.jpg',
'https://telegra.ph/file/de268ca9b01101acf2b8a.jpg',
'https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg',
'https://telegra.ph/file/efb70bb0988640f841742.jpg',
'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg',
'https://telegra.ph/file/6e4623464a659dd8d902b.jpg',
'https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg',
'https://telegra.ph/file/10454b9ad693e1eefea58.jpg',
'https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg',
'https://telegra.ph/file/8d7c4eadb7a4722747074.jpg',
'https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg',
'https://telegra.ph/file/95f4b43439d7888f15ea5.jpg',
'https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg',
'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg',
'https://telegra.ph/file/3a5231aade245665633bd.jpg',
'https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg',
'https://telegra.ph/file/dabb70983b4e833d98344.jpg',
'https://telegra.ph/file/75193a893e38fc580afe6.jpg',
'https://telegra.ph/file/217aa0f4ec76273808aa4.jpg',
'https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg',
'https://telegra.ph/file/092df720701575a7ceaaa.jpg',
'https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg',
'https://telegra.ph/file/140eff27be983e0cd6781.jpg',
'https://telegra.ph/file/1581b791e16d0029e16b5.jpg',
'https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg',
'https://telegra.ph/file/093caff422f194f00bc6c.jpg',
'https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg',
'https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg',
'https://telegra.ph/file/a78443f0ee887f46808d7.jpg',
'https://telegra.ph/file/1889878933264d16c58bf.jpg',
'https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg',
'https://telegra.ph/file/fcf861516db09dda164e0.jpg',
'https://telegra.ph/file/355d96d7e06d109435f67.jpg'
]