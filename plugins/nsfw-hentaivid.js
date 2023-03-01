import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { text, args, usedPrefix, command }) => {
m.reply(wait)
if (!text) throw `Use example .${command} 1153`
let tek = await xhentai(text)
    let listSections = []
	Object.values(tek).map((v, index) => {
	listSections.push([cmenub + ' Result: ' + ++index, [
          ['Video 1', usedPrefix + 'get ' + v.video_1, '\nLink ' + v.link + '\ncategory ' + v.category + '\nshare_count ' + v.share_count + '\nviews_count ' + v.views_count + '\ntype ' + v.type + '\nvideo_1 ' + v.video_1 + '\nvideo_2 ' + v.video_2],
          ['Video 2', usedPrefix + 'get ' + v.video_2, '\nLink ' + v.link + '\ncategory ' + v.category + '\nshare_count ' + v.share_count + '\nviews_count ' + v.views_count + '\ntype ' + v.type + '\nvideo_1 ' + v.video_1 + '\nvideo_2 ' + v.video_2]
        ]]) 
	})
	return conn.sendList(m.chat, htki + ' Hentai Search ' + htka, ` Silakan pilih Hentai Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, botdate, `Click Here`, listSections, m)
}
handler.help = ['vidhentai']
handler.command = /^(vidhentai)$/i
handler.tags = ['nsfw']
handler.premium = true
handler.limit = true
export default handler

async function xhentai(page) {
    return new Promise((resolve, reject) => {
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}