import cheerio from 'cheerio'
import axios from 'axios'

async function twitterStalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://instalker.org/'+user)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let tweets = []
            $('div.activity-posts').each(function (a, b) {
                tweets.push({
                    author: {
                        username: $(b).find('div.user-text3 > h4 > span').text(),
                        nickname: $(b).find('div.user-text3 > h4').text().split('@')[0] || $(b).find('div.user-text3 > h4').text().trim(),
                        profile_pic: $(b).find('img').attr('src') || $(b).find('img').attr('onerror'),
                        upload_at: $(b).find('div.user-text3 > span').text()
                    },
                    title: $(b).find('div.activity-descp > p').text() || '',
                    media: $(b).find('div.activity-descp > div > a').attr('href') || $(b).find('div.activity-descp > p > video').attr('src') || $(b).find('div.activity-descp > div > a > img').attr('src') || $(b).find('div.activity-descp > div > a > video').attr('src') || 'No Media Upload',
                    retweet: $(b).find('div.like-comment-view > div > a:nth-child(1) > span').text().replace('Download Image', ''),
                    likes: $(b).find('div.like-comment-view > div > a:nth-child(2) > span').text()
                })
            })
            let hasil = {
                username: $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > h3 > span').text(),
                nickname: $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > h3').text().split('@')[0] || $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > h3').text(),
                background: $('body > main > div.dash-todo-thumbnail-area1 > div.todo-thumb1.dash-bg-image1.dash-bg-overlay').attr('style').split('url(')[1].split(')')[0],
                profile: $('body > main > div.dash-todo-thumbnail-area1 > div.dash-todo-header1 > div > div > div > div > div > a > img').attr('src') || $('body > main > div.dash-todo-thumbnail-area1 > div.dash-todo-header1 > div > div > div > div > div > a').attr('href'),
                desc_text: $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(2)').text() || '',
                join_at: $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(3)').text() || $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(5)').text(),
                map: $('body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(4)').text() || '',
                tweets_count: $('body > main > div.dash-dts > div > div > div:nth-child(2) > ul > li:nth-child(1) > div > div.dscun-numbr').text(),
                followers: $('body > main > div.dash-dts > div > div > div:nth-child(2) > ul > li:nth-child(2) > div > div.dscun-numbr').text(),
                following: $('body > main > div.dash-dts > div > div > div:nth-child(2) > ul > li:nth-child(3) > div > div.dscun-numbr').text(),
                media_count: tweets.length,
                media: tweets || 'No Media Upload'
            }
            resolve(hasil)
        })
    })
}

async function instagramStalk(user) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://www.instagram.com/' + user + "/?__a=1",
            method: "GET",
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
                'cookie': 'crsftoken=au1sbQzCDp2Ri5TZF688kVeWOfvaa3Ox; ds_user_id=26641471282; ig_did=54AA06C9-3A86-4F53-A7F6-C9127DC153AC; ig_nrcb=1; mid=YU0dFwALAAHPggeAvlvEiV8DP9zM; sessionid=26641471282%3AnPDRQn9Qe628rm%3A26'
            }
        }).then((data) => {
            const Format = {
                full_name: data.data.graphql.user.full_name,
                user_name: data.data.graphql.user.username,
                user_id: data.data.graphql.user.id,
                followers: data.data.graphql.user.edge_follow.count,
                following: data.data.graphql.user.edge_followed_by.count,
                bussines: data.data.graphql.user.is_business_account,
                profesional: data.data.graphql.user.is_professional_account,
                verified: data.data.graphql.user.is_verified,
                private: data.data.graphql.user.is_private,
                biography: data.data.graphql.user.biography,
                bio_url: data.data.graphql.user.external_url,
                profile_ed: data.data.graphql.user.profile_pic_url,
                profile_hd: data.data.graphql.user.profile_pic_url_hd
            }
            resolve(Format)
        })
    })
}

async function tiktokStalk(user) {
    return new Promise((resolve, reject) => {
        let User = user.startsWith('@') ? user : '@' + user
        axios({
            url: `https://www.tiktok.com/${User}?lang=id`,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
		'Cookie': 'tt_csrf_token=psXax5iA3QxSpE_LI2j6iHU0; ttwid=1%7Cfpftinh7CEhYgKNa0Zi6Tg8okKrRQQej6DsUM8Bym-M%7C1640705402%7C7837ecf88b4283018f0b3bc91eef9e42af9fc4a68e64eea290eb3fb13539fa47; _abck=EBA03DEC357EB172FA758A935B33C888~-1~YAAQt3/3SLKkT919AQAA7kGpAQfZl7orSpqNkGxpXGcM0UZcExmPHHWIMV11g1ixLjDwfQ44s7VLGsfSc7A9UlHmuRsCv8JTcypSAWOAQB4fy3pTTTcuMD1vsc9raahBXw7HjHqBLUxy+GOb3AkbggZpldZIJTm9+CDo3XIs6JyMTgF/YIzlC2u4uDK0fX2AYbRTl2J/FdR/GuRXCW/whXmk7zQ9ZECfPM6sYpSQyXMKnSMwEZXl0LkSZ3wRE5Bj2uRJbxRk0fEuwyOSkN6FyS0lDU3EKoQpAvu2MhS98YdKjeX7dXbCNRYbgSMGJa++Pr2cIuwyZfBI4X/glj5dWW4JtVHW2NBxpuJrkG1cOFN3gz1LJepTuVv8BmtHSM7YTpoTbW3oJ4XabQ==~-1~-1~-1; bm_sz=E65E8E40342F6F53DEA6389742304A35~YAAQt3/3SLOkT919AQAA7kGpAQ4Ix9bfuKB/TNEc7AzfgEouOWl9EUtetDzyJWjxZ/u8OoNJm/LH3ahXONGH4/RBzfapPYF1Xw/lY/if6nlx4yaJl8LfIU1iVBz+Y0WOcJ9tOlg15Sn/fTu2VsGOMsGr1sx0FplV6VkJPd4xA4Oc5UVGM46e9gwWLLnVU9K6NeYhfynfXv0sa4ljpfOBrDL0YlVB0wOP3d9cNoUptyImzHbURICOLWMz7hy7NsQ3z5yra5d06fW0jSTa8ujpX/TRpI0raskHtOYoW83WqgRD0UU=~3291202~3688002'
            }
        }).then((data) => {
            let $ = cheerio.load(data.data)
            let res = $('body').find('#__NEXT_DATA__').get()[0].children[0]
			let result = JSON.parse(res.data).props.pageProps.userInfo
            resolve(result)
        })
    })
}

async function npmStalk(package) {
    return new Promise((resolve, reject) => {
        axios.get('https://npmjs.com/package/'+package)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let keywords = []
            let info = []
            let collaborator = []
            $('#tabpanel-readme > div.pv4 > ul > li').each(function (a, b) {
                keywords.push($(b).text())
            })
            $('div._702d723c.dib.w-50.bb.b--black-10.pr2').each(function (a, b) {
                info.push({ type: $(b).find('h3').text(), result: $(b).find('p').text() || $(b).find('a').text() })
            })
            $('#top > div.fdbf4038.w-third-l.mt3.w-100.ph3.ph4-m.pv3.pv0-l > div.w-100 > ul > li').each(function (a, b) {
                collaborator.push({ name: $(b).find('a').attr('href').replace('/~', ''), url: 'https://www.npmjs.com'+$(b).find('a').attr('href') })
            })
            let hasil = {
                title: $('#top > div.w-100.ph0-l.ph3.ph4-m > h2 > span').text(),
                language: $('#top > div.w-100.ph0-l.ph3.ph4-m > h2 > div').text() || 'Default',
                publish: $('#top > div.w-100.ph0-l.ph3.ph4-m > span:nth-child(4)').text(),
                readme: $('#readme').text() || '',
                explore: $('#package-tab-explore > span').text().replace(' Explore ', '') || '',
                dependencies: $('#package-tab-dependencies > span').text().replace(' Dependencies', '') || '',
                dependents: $('#package-tab-dependents > span').text().replace(' Dependents', '') || '',
                version_count: $('#package-tab-versions > span').text().replace(' Versions', '') || '',
                keywords: keywords || [],
                install: $('#top > div.fdbf4038.w-third-l.mt3.w-100.ph3.ph4-m.pv3.pv0-l > p > code > span').text(),
                info,
                collaborator
            }
            resolve(hasil)
        })
    })
}

async function githubStalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
}

async function tgstat(user) {
    return new Promise((resolve, reject) => {
        let User = user.startsWith('@') ? user : '@' + user
        axios({
            url: 'https://in.tgstat.com/channel/'+User,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
                'cookie': '_ga=GA1.2.2145921501.1640416771; _gat=1; _gid=GA1.2.1701284558.1640416771; _ym_d=1640416774; _yn_uid=1640416774851926759; tgstat_sirk=se5opc311gme57h03vl7q72r44'
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = {
                nickname: $('div.small-12.medium-5.large-5.columns > h1').text(),
                username: $('div.small-12.medium-5.large-5.columns > a:nth-child(3) > span:nth-child(2)').text(),
                channel_url: $('div.small-12.medium-5.large-5.columns > a:nth-child(3)').attr('href'),
                likes: $('div.small-12.medium-5.large-5.columns > a.btn.btn-default.btn-sm.btn-heart.not-hover.popup_ajax > span').text().replace('Like', ''),
                description: $('div.small-12.medium-5.large-5.columns > div:nth-child(8)').text().trim(),
                channel_geo_lang: $('div.medium-4.large-4.columns.hide-for-small-only > div:nth-child(1) > div:nth-child(1)').text().replace(`Channel's geo & Language`, '').trim(),
                channel_category: $('div.medium-4.large-4.columns.hide-for-small-only > div:nth-child(1) > div:nth-child(2)').text().replace('Category', '').trim(),
                members: $('body > div.wrap > div > div.row.margin-top15.small-no-padding > div:nth-child(1) > div > div:nth-child(1)').text().trim(),
                post_reach: $('body > div.wrap > div > div.row.margin-top15.small-no-padding > div:nth-child(2) > div > div:nth-child(1)').text().trim(),
                daily_reach: $('body > div.wrap > div > div.row.margin-top15.small-no-padding > div:nth-child(3) > div > div:nth-child(1)').text().trim(),
                post_per_day: $('body > div.wrap > div > div.row.margin-top15.small-no-padding > div:nth-child(4) > div > div:nth-child(1)').text().trim(),
                err: $('body > div.wrap > div > div.row.margin-top15.small-no-padding > div:nth-child(5) > div > div:nth-child(1)').text(),
                citation_index: $('body > div.wrap > div > div.row.margin-top15.small-no-padding > div:nth-child(6) > div > div:nth-child(1)').text(),
                mentions_of_channel: $('div.columns.large-4.medium-12.small-12 > b').text(),
                post_mentions: $('div.columns.large-5.medium-12.small-12 > b').text(),
                forwards: $('div.columns.large-3.medium-12.small-12 > b').text(),
                profile_pic: 'https:'+$('body > div.wrap > div > div.row.small-collapse.medium-uncollapse.sticky-canceller-container.margin-bottom15 > div.small-12.medium-3.large-3.columns > div > img').attr('data-src') || $("meta[property='og:image']").attr('content')
            }
            resolve(hasil)
        })
    })
}

async function stalkff(text) {
  var datap = {
    "voucherPricePoint.id": 8050,
    "voucherPricePoint.price": "",
    "voucherPricePoint.variablePrice": "",
    "email": "",
    "n": "",
    "userVariablePrice": "",
    "order.data.profile": "",
    "user.userId": text,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "shopLang": "in_ID",
  }
  var epep = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": datap
  })
  return {
    id: text,
    nickname: epep.data["confirmationFields"]["roles"][0]["role"]
  }
}

export { 
twitterStalk, 
instagramStalk, 
tiktokStalk, 
npmStalk, 
githubStalk, 
tgstat, 
stalkff 
}