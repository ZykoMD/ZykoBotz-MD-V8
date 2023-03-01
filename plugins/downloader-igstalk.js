import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} kabulsaputra21`
let f = await fetch(`https://violetics.pw/api/stalk/instagram?apikey=beta&username=${text}`)
let x = await f.json()
     let cap = `${cmenub} Usename : @${x.result.username}
${cmenub} Name : ${x.result.full_name}
${cmenub} Total Media : ${x.result.edge_owner_to_timeline_media.count} Foto / Video
${cmenub} Followers : ${x.result.edge_followed_by.count}
${cmenub} Following : ${x.result.edge_follow.count}
 ${cmenuf}
📑 Bio : 
${x.result.biography}
 
${botdate}`
   let ucp =  `${cmenut} Info Detail Instagram ${htka}`
conn.sendHydrated2(m.chat, ucp, cap, `${x.result.profile_pic_url}`, 'https://youtu.be/E1Cb97Rb-8U', 's ᴄ ʀ ɪ ᴘ ᴛ', 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [['Profile', `.profile`],
  ['Donasi', `.donasi`],['Sewa', `.sewa`]], m)
  }
  handler.help = ['igstalk'].map(v => v + ' <username>')
  handler.tags = ['downloader']

  handler.command = /^(igstalk)$/i

   export default handler
