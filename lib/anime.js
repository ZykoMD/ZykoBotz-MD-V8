import axios from 'axios'
import cheerio from 'cheerio'


async function otakudesuSearch(title) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://otakudesu.info/?s='+title+'&post_type=anime',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let search = []
            $('#venkonten > div > div.venser > div > div > ul > li').each(function (a, b) {
                search.push($(b).find('h2 > a').attr('href'))
                let url = search[Math.floor(Math.random() * search.length)]
                axios({
                    url,
                    method: 'GET',
                    headers: {
                        "user-agent": "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36"
                    }
                }).then(({ data }) => {
                    let $ = cheerio.load(data)
                    let link_eps = []
                    $('#venkonten > div.venser > div.episodelist > ul > li').each(function (a, b) {
                        link_eps.push({ episode: $(b).find('span > a').text(), upload_at: $(b).find('span.zeebr').text(), link: $(b).find('span > a').attr('href') })
                    })
                    let hasil = {
                        title: { 
                            indonesia: $('#venkonten > div.venser > div.jdlrx > h1').text(),
                            synonym: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().replace('Judul: ', ''),
                            japanese: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().replace('Japanese: ', '')
                        },
                        score: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().replace('Skor: ', ''),
                        producer: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().replace('Produser: ', ''),
                        type: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().replace('Tipe: ', ''),
                        status: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().replace('Status: ', ''),
                        total_eps: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().replace('Total Episode: ', ''),
                        duration: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().replace('Durasi: ', ''),
                        release: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().replace('Tanggal Rilis: ', ''),
                        studio: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().replace('Studio: ', ''),
                        genre: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(11) > span').text().replace('Genre: ', ''),
                        synopsis: $('#venkonten > div.venser > div.fotoanime > div.sinopc > p').text(),
                        link_eps: link_eps
                    }
                    resolve(hasil)
                })
            })
        })
    })
}

async function otakudesuDetail(url) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let link_eps = []
            $('#venkonten > div.venser > div.episodelist > ul > li').each(function (a, b) {
                link_eps.push({ episode: $(b).find('span > a').text(), upload_at: $(b).find('span.zeebr').text(), link: $(b).find('span > a').attr('href') })
            })
            let hasil = {
                title: { 
                    indonesia: $('#venkonten > div.venser > div.jdlrx > h1').text(),
                    anonym: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().replace('Judul: ', ''),
                    japanese: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().replace('Japanese: ', '')
                },
                score: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().replace('Skor: ', ''),
                producer: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().replace('Produser: ', ''),
                type: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().replace('Tipe: ', ''),
                status: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().replace('Status: ', ''),
                total_eps: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().replace('Total Episode: ', ''),
                duration: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().replace('Durasi: ', ''),
                release: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().replace('Tanggal Rilis: ', ''),
                studio: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().replace('Studio: ', ''),
                genre: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(11) > span').text().replace('Genre: ', ''),
                synopsis: $('#venkonten > div.venser > div.fotoanime > div.sinopc > p').text(),
                link_eps: link_eps
            }
            resolve(hasil)
        })
    })
}

async function otakudesuDownload(url) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let mp4 = []
            $('#venkonten > div.venser > div.venutama > div.download > ul:nth-child(2) > li').each(function (a, b) {
                $(b).find('a').each(function (c, d) {
                    mp4.push({ resolusi: $(b).find('strong').text(), size: $(b).find('i').text(), type: $(d).text(), link: $(d).attr('href') })
                })
            })
            let mkv = []
            $('#venkonten > div.venser > div.venutama > div.download > ul:nth-child(3) > li').each(function (a, b) {
                $(b).find('a').each(function (c, d) {
                    mkv.push({ resolusi: $(b).find('strong').text(), size: $(b).find('i').text(), type: $(d).text(), link: $(d).attr('href') })
                })
            })
            let hasil = {
                title: $('#venkonten > div.venser > div.venutama > h1').text(),
                post: $('#venkonten > div.venser > div.venutama > div.kategoz > span:nth-child(2)').text().replace('Posted by ', ''),
                release: $('#venkonten > div.venser > div.venutama > div.kategoz > span:nth-child(4)').text().replace('Release on ', ''),
                credit: $('#venkonten > div.venser > div.cukder > div.infozin > div > p:nth-child(1)').text().replace('Credit: ', ''),
                encoder: $('#venkonten > div.venser > div.cukder > div.infozin > div > p:nth-child(2)').text().replace('Encoder: ', ''),
                genres: $('#venkonten > div.venser > div.cukder > div.infozin > div > p:nth-child(3)').text().replace('Genres: ', ''),
                duration: $('#venkonten > div.venser > div.cukder > div.infozin > div > p:nth-child(4)').text().replace('Duration: ', ''),
                type: $('#venkonten > div.venser > div.cukder > div.infozin > div > p:nth-child(5)').text().replace('Tipe: ', ''),
                image: $('#venkonten > div.venser > div.cukder > img').attr('src'),
                link_mp4: mp4,
                link_mkv: mkv
            }
            resolve(hasil)
        })
    })
}

async function anime(q) {
    return new Promise((resolve, reject) => {
        axios.get('https://myanimelist.net/anime.php?cat=anime&q='+q)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let anime = []
            $('#content > div.js-categories-seasonal.js-block-list.list > table > tbody > tr').each(function (a, b) {
                anime.push($(b).find('td:nth-child(1) > div > a').attr('href') || '')
            })
            let random = anime[Math.floor(Math.random() * anime.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let related = []
                $$('#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(3) > td > table > tbody > tr').each(function (a, b) {
                    related.push({ type: $$(b).find('td:nth-child(1)').text(), name: $$(b).find('td:nth-child(2)').text() })
                })
                let character = []
                $$('#content > table > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(3) > td > div.detail-characters-list.clearfix').eq(0).find('table').each(function (a, b) {
                    character.push({
                        character: {
                            name: $$(b).find('tbody > tr > td:nth-child(2) > h3').text(),
                            status: $$(b).find('tbody > tr > td:nth-child(2) > div > small').text(),
                            detail: $$(b).find('tbody > tr > td:nth-child(2) > h3 > a').attr('href'),
                            image: $$(b).find('tbody > tr > td.ac.borderClass > div > a > img').attr('data-src') || $$(b).find('tbody > tr > td.ac.borderClass > div > a > img').attr('src')
                        },
                        voice_actor: {
                            name: $$(b).find('tbody > tr > td:nth-child(3) > table > tbody > tr > td.va-t.ar.pl4.pr4 > a').text(),
                            origin: $$(b).find('tbody > tr > td:nth-child(3) > table > tbody > tr > td.va-t.ar.pl4.pr4 > small').text(),
                            detail: $$(b).find('tbody > tr > td:nth-child(3) > table > tbody > tr > td.va-t.ar.pl4.pr4 > a').attr('href'),
                            image: $$(b).find('table > tbody > tr > td:nth-child(2) > div > a > img').attr('data-src') || $$(b).find('table > tbody > tr > td:nth-child(2) > div > a > img').attr('src')
                        }
                    })
                })
                let staff = []
                $$('#content > table > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(3) > td > div.detail-characters-list.clearfix').eq(1).find('table').each(function (a, b) {
                    staff.push({
                        name: $$(b).find('tbody > tr > td:nth-child(2) > a').text(),
                        status: $$(b).find('tbody > tr > td:nth-child(2) > div > small').text(),
                        detail: $$(b).find('tbody > tr > td:nth-child(2) > a').attr('href'),
                        image: $$(b).find('tbody > tr > td.ac.borderClass > div > a > img').attr('data-src') || $$(b).find('tbody > tr > td.ac.borderClass > div > a > img').attr('src')
                    })
                })
                let info = []
                $$('#content > table > tbody > tr > td.borderClass > div > div.spaceit_pad').each(function (a, b) {
                    info.push({ type: $$(b).text().split(':')[0].trim().split('\n')[0] || $$(b).text().split(':')[0].trim() || '', result: $$(b).text().split(':')[1].trim().split('\n')[0] || $$(b).text().split(':')[1].trim() || '' })
                })
                let hasil = {
                    title: $$('#contentWrapper > div:nth-child(1) > div > div.h1-title > div > h1').text(),
                    info: info,
                    image: $$('#content > table > tbody > tr > td.borderClass > div > div:nth-child(1) > a > img').attr('data-src') || $$('#content > table > tbody > tr > td.borderClass > div > div:nth-child(1) > a > img').attr('src'),
                    trailer: $$('div.anime-detail-header-video.di-tc.va-t.pl16 > div.video-promotion > a').attr('href'),
                    synopsis: $$('#content > table > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(1) > td > p').text(),
                    related,
                    character,
                    staff
                }
                resolve(hasil)
            })
        })
    })
}

async function manga(q) {
    return new Promise((resolve, reject) => {
        axios.get('https://myanimelist.net/manga.php?cat=manga&q='+q)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let manga = []
            $('#content > div.js-categories-seasonal.js-block-list.list > table > tbody > tr').each(function (a, b) {
                manga.push($(b).find('td:nth-child(2) > a').attr('href') || '')
            })
            let random = manga[Math.floor(Math.random() * manga.length)]
            axios.get(random)
            .then((res)=> {
                let $$ = cheerio.load(res.data)
                let related = []
                $$('#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(3) > td > table > tbody > tr').each(function (a, b) {
                    related.push({ type: $$(b).find('td:nth-child(1)').text(), name: $$(b).find('td:nth-child(2) > a').text(), url: 'https://myanimelist.net'+$$(b).find('td:nth-child(2) > a').attr('href') })
                })
                let info = []
                $$('#content > table > tbody > tr > td.borderClass > div > div.spaceit_pad').each(function (a, b) {
                    info.push({ type: $$(b).text().split(':')[0].trim() || '', result: $$(b).text().split(':')[1].trim() })
                })
                let character = []
                $$('#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(3) > td > div.detail-characters-list.clearfix > div.left-column.fl-l.divider > table').each(function (a, b) {
                    character.push({
                        character: {
                            name: $$(b).find('tbody > tr > td:nth-child(2) > a').text(),
                            status: $$(b).find('tbody > tr > td:nth-child(2) > div > small').text().trim(),
                            detail: $$(b).find('tbody > tr > td:nth-child(2) > a').attr('href'),
                            image: $$(b).find('tbody > tr > td.ac.borderClass > div > a > img').attr('data-src') || $$(b).find('tbody > tr > td.ac.borderClass > div > a > img').attr('src')
                        }
                    })
                })
                let hasil = {
                    title: $$('#contentWrapper > div:nth-child(1) > h1').text().trim(),
                    info: info,
                    image: $$('#content > table > tbody > tr > td.borderClass > div > div:nth-child(1) > a > img').attr('data-src') || $$('#content > table > tbody > tr > td.borderClass > div > div:nth-child(1) > a > img').attr('src'),
                    synopsis: $$('#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > span').text(),
                    related,
                    character
                }
                resolve(hasil)
            })
        })
    })
}

async function wibu(q) {
    return new Promise((resolve, reject) => {
        axios.get('https://myanimelist.net/character.php?cat=character&q='+q)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let character = []
            $('#content > table > tbody > tr').each(function (a, b) {
                character.push($(b).find('td:nth-child(2) > a').attr('href'))
            })
            let random = character[Math.floor(Math.random() * character.length)]
            axios.get(random+'/pics')
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = []
                $$('#content > table > tbody > tr > td:nth-child(2) > table > tbody > tr').each(function (a, b) {
                    hasil.push({ name: $$(b).find('img').attr('alt'), image: $$(b).find('a').attr('href') ||$(b).find('img').attr('src') || $$(b).find('img').attr('data-src') })
                })
                resolve(hasil)
            })
        })
    })
}

async function fandom(q) {
    return new Promise((resolve, reject) => {
        axios.get(`https://jump.fandom.com/wiki/Special:Search?query=${q}&scope=internal&navigationSearch=true`)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let getres = []
            $('#mw-content-text > section > div > div.unified-search__layout__main > ul > li').each(function (a, b) {
                getres.push($(b).find('article > h1 > a').attr('href'))
            })
            let random = "https://jump.fandom.com/wiki/JoJo%27s_Bizarre_Adventure"
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let part = []
                $$('#mw-content-text > div > ul > li').each(function (a, b) {
                    part.push({ part: $$(b).text().trim(), url: random.split('/')[0]+$$(b).find('a').attr('href') })
                })
                let info = []
                $$('#mw-content-text > div > table > tbody > tr').each(function (a, b) {
                    info.push({ type: $$(b).find('td:nth-child(1)').text().trim(), result: $$(b).find('td:nth-child(2)').text() })
                })
                let hasil = {
                    title: $$('body > div.main-container > div.resizable-container > div.page.has-right-rail > main > div.page-header > div.page-header__bottom > div.page-header__title-wrapper > h1').text().trim(),
                    info: $$('#mw-content-text > div > p:nth-child(2)').text(),
                    plot: $$('#mw-content-text > div > p:nth-child(6)').text(),
                    image: $$('#mw-content-text > div > table > tbody > tr:nth-child(1) > td > a').attr('href') || $$('#mw-content-text > div > table > tbody > tr:nth-child(1) > td > a > img').attr('src'),
                    part,
                    info,
                    lisensi: $$('body > div.main-container > div.resizable-container > div.page.has-right-rail > main > div.page-footer > div.license-description').text()
                }
                resolve(hasil || $$('body > div.main-container > div.resizable-container > div.page.has-right-rail > main').text())
            })
        })
    })
}

async function character(q) {
    return new Promise((resolve, reject) => {
        axios.get('https://myanimelist.net/character.php?cat=character&q='+q)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let character = []
            $('#content > table > tbody > tr').each(function (a, b) {
                character.push($(b).find('td:nth-child(2) > a').attr('href'))
            })
            let random = character[Math.floor(Math.random() * character.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let voice = []
                $$('#content > table > tbody > tr > td:nth-child(2) > table').each(function (a, b) {
                    voice.push({ name: $$(b).find('td:nth-child(2) > a').text(), origin: $$(b).find('td:nth-child(2) > div > small').text(), detail: $$(b).find('td:nth-child(2) > a').attr('href'), image: $$(b).find('td:nth-child(1) > div > a > img').attr('data-src') || $$(b).find('td:nth-child(1) > div > a > img').attr('src') })
                })
                let animeography = []
                $$('#content > table > tbody > tr > td.borderClass > table:nth-child(6) > tbody > tr').each(function (a, b) {
                    animeography.push({ name: $$(b).find('td:nth-child(2) > a').text(), status: $$(b).find('td:nth-child(2) > div > small').text(), detail: $$(b).find('td:nth-child(2) > a').attr('href'), image: $$(b).find('td:nth-child(1) > div > a > img').attr('data-src') || $$(b).find('td:nth-child(1) > div > a > img').attr('src') })
                })
                let mangaography = []
                $$('#content > table > tbody > tr > td.borderClass > table:nth-child(9) > tbody > tr').each(function (a, b) {
                    mangaography.push({ name: $$(b).find('td:nth-child(2) > a').text(), status: $$(b).find('td:nth-child(2) > div > small').text(), detail: $$(b).find('td:nth-child(2) > a').attr('href'), image: $$(b).find('td:nth-child(1) > div > a > img').attr('data-src') || $$(b).find('td:nth-child(1) > div > a > img').attr('src') })
                })
                let hasil = {
                    name: $$('#contentWrapper > div:nth-child(1) > div > div.h1-title > h1').text(),
                    image: $$('#content > table > tbody > tr > td.borderClass > div:nth-child(1) > a > img').attr('data-src') || $$('#content > table > tbody > tr > td.borderClass > div:nth-child(1) > a > img').attr('src'),
                    detail: $$('#content > table > tbody > tr > td:nth-child(2)').text().split('Characters')[1].split('Voice Actors')[0].trim(),
                    voice_actor: voice,
                    animeography,
                    mangaography
                }
                resolve(hasil)
            })
        })
    })
}

async function topAnime(type = 'anime') {
    return new Promise((resolve, reject) => {
        // type = 1. airing, 2. upcoming, 3. tv, 4. movie, 5. ova, 6. ona, 7. special, 8. bypopularity, 9. favorite
        axios.get('https://myanimelist.net/topanime.php?type='+type)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('tr.ranking-list').each(function (a, b) {
                hasil.push({
                    rank: $(b).find('td.rank.ac > span').text(),
                    title: $(b).find('td.title.al.va-t.word-break > div > div.di-ib.clearfix > h3').text(),
                    info: $(b).find('td.title.al.va-t.word-break > div > div.information.di-ib.mt4').text().trim(),
                    rating: $(b).find('td.score.ac.fs14 > div').text(),
                    detail: $(b).find('td.title.al.va-t.word-break > div > div.di-ib.clearfix > h3 > a').attr('href'),
                    image: $(b).find('td.title.al.va-t.word-break > a > img').attr('data-src') || $(b).find('td.title.al.va-t.word-break > a > img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

async function topManga(type = 'manga') {
    // type = 1. manga, 2. oneshots, 3. doujin, 4. lightnovels, 5. novels, 6. manhwa, 7.manhua, 8. bypopularity, 9. favorite
    return new Promise((resolve, reject) => {
        axios.get('https://myanimelist.net/topmanga.php?type='+type)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('tr.ranking-list').each(function (a, b) {
                hasil.push({
                    rank: $(b).find('td.rank.ac > span').text(),
                    title: $(b).find('td.title.al.va-t.clearfix.word-break > div > h3').text(),
                    info: $(b).find('td.title.al.va-t.clearfix.word-break > div > div.information.di-ib.mt4').text().trim(),
                    rating: $(b).find('td.score.ac.fs14 > div').text(),
                    detail: $(b).find('td.title.al.va-t.clearfix.word-break > div > h3 > a').attr('href'),
                    image: $(b).find('td.title.al.va-t.clearfix.word-break > a > img').attr('data-src') || $(b).find('td.title.al.va-t.clearfix.word-break > a > img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

export { 
otakudesuSearch, 
otakudesuDetail, 
otakudesuDownload, 
anime, 
manga, 
wibu, 
fandom, 
character, 
topAnime, 
topManga 
}