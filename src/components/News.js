import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "The Star Online"
            },
            "author": "The Star Online",
            "title": "Govt trying to slice RM1.5bil onion import bill",
            "description": "MALAYSIANS consume onions worth more than RM1bil a year, said Datuk Seri Mohamad Sabu (pic).“In 2022, Malaysia imported a total of 687,000 metric tonnes of onions worth RM1.58bil.“Of this, 38 tonnes comprised shallots worth RM81.5mil to meet domestic demand,”…",
            "url": "https://www.thestar.com.my/news/nation/2024/02/29/govt-trying-to-slice-rm15bil-onion-import-bill",
            "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/02/29/2567485.jpg",
            "publishedAt": "2024-02-28T16:00:00Z",
            "content": "MALAYSIANS consume onions worth more than RM1bil a year, said Datuk Seri Mohamad Sabu (pic).In 2022, Malaysia imported a total of 687,000 metric tonnes of onions worth RM1.58bil.Of this, 38 tonnes co… [+1649 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nrc.nl"
            },
            "author": "Koen Marée",
            "title": "OM vervolgt twee Pakistanen die opriepen Wilders te vermoorden",
            "description": "Bedreiging: De twee Pakistaanse mannen genieten aanzien bij hun volgelingen door hun posities als politiek en religieus leider. Omdat Nederland geen rechtshulpverdrag heeft met Pakistan, is het maar de vraag of ze voor hun proces naar Nederland komen.",
            "url": "https://www.nrc.nl/nieuws/2024/02/28/om-vervolgt-twee-pakistanen-die-opriepen-wilders-te-vermoorden-a4191551",
            "urlToImage": "https://images.nrc.nl/7HAQjqUNXxxWCgCzl8KiduR-EqA=/1200x627/smart/filters:no_upscale()/s3/static.nrc.nl/wp-content/uploads/2024/02/web-2802binwilders.jpg",
            "publishedAt": "2024-02-28T15:51:48Z",
            "content": "Het Openbaar Ministerie vervolgt twee Pakistanen die in bijeenkomsten en op sociale media hun volgelingen opriepen tot het vermoorden van PVV-leider Geert Wilders. Het gaat om een politiek en een rel… [+1057 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Internazionale.it"
            },
            "author": "Internazionale",
            "title": "Comincia il ritiro dei caschi blu dalla Repubblica Democratica del Congo",
            "description": "La missione delle Nazioni Unite nella Repubblica Democratica del Congo (Monusco) ha cominciato il suo ritiro dal paese. Leggi",
            "url": "https://www.internazionale.it/ultime-notizie/2024/02/28/ritiro-onu-repubblica-democratica-del-congo",
            "urlToImage": "https://media.internazionale.it/images/2024/02/28/213121-sd.jpeg",
            "publishedAt": "2024-02-28T15:30:06Z",
            "content": "È cominciato il ritiro della missione delle Nazioni Unite nella Repubblica Democratica del Congo (Monusco), come richiesto dal governo di Kinshasa, che la ritiene inefficace. La prima tappa è stata l… [+3677 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Ex-Pak premier Nawaz Sharif officially nominates younger brother Shehbaz for PM's post",
            "description": "The PML-N nominated Shehbaz Sharif as prime minister to lead a coalition government. The party endorsed Shehbaz's name and expressed confidence in Nawaz's leadership. The National Assembly session was called by Raja Pervaiz Ashraf after President Dr Arif Alvi…",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/ex-pak-premier-nawaz-sharif-officially-nominates-younger-brother-shehbaz-for-pms-post/articleshow/108081029.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108081034,width-1200,height-630,imgsize-56924,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T15:29:42Z",
            "content": "Islamabad/Lahore, The parliamentary party of the PML-N headed by three-time former Pakistan premier Nawaz Sharif on Wednesday formally nominated his younger brother Shehbaz Sharif for the post of pri… [+2823 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Govt bans 2 JK-based groups for anti-India activities, asking people not to take part in elections",
            "description": "The Indian government has banned two factions of the Muslim Conference Jammu and Kashmir for five years due to their anti-India and pro-Pakistan propaganda, involvement in supporting terrorist activities, and generating feelings of hatred and disaffection aga…",
            "url": "https://economictimes.indiatimes.com/news/india/govt-bans-2-jk-based-groups-for-anti-india-activities-asking-people-not-to-take-part-in-elections/articleshow/108081003.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108081114,width-1200,height-630,imgsize-38196,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T15:26:54Z",
            "content": "The government Wednesday banned two factions of the Muslim Conference Jammu and Kashmir for five years for their anti-India and pro-Pakistan propaganda, and asking people to refrain from taking part … [+5153 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Diplomat"
            },
            "author": "Khyati Singh and Gaurav Sen",
            "title": "India’s Anti-Piracy Missions Were Years in the Making",
            "description": "The recent uptick in activity is the culmination of a long-term shift that has largely gone unnoticed.",
            "url": "https://thediplomat.com/2024/02/indias-anti-piracy-missions-were-years-in-the-making/",
            "urlToImage": "https://thediplomat.com/wp-content/uploads/2024/02/sizes/td-story-s-2/thediplomat_2024-02-28-152318.jpg",
            "publishedAt": "2024-02-28T15:19:00Z",
            "content": "India seems to have a considerable amount of influence in the Indian Ocean, even though Chinas assertive advancements have placed India under a substantial amount of pressure. Today, the Gulf of Aden… [+14073 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI World Desk",
            "title": "PML-N formally nominates Shehbaz Sharif for Prime Minister",
            "description": "The parliamentary party of the Pakistan Muslim League-Nawaz nominated Shehbaz Sharif for Prime Minister. The surprise nomination came after Nawaz Sharif's elder brother was eyeing the position. The National Assembly session is scheduled to discuss the nominat…",
            "url": "https://timesofindia.indiatimes.com/world/pakistan/pml-n-formally-nominates-shehbaz-sharif-for-prime-minister/articleshow/108080799.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108080794,width-1070,height-580,imgsize-35852,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T15:12:32Z",
            "content": "10 types of Indian chaat to try"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nu.nl"
            },
            "author": null,
            "title": "Twee Pakistanen die opriepen om Wilders te vermoorden worden vervolgd",
            "description": "Het Openbaar Ministerie gaat twee Pakistaanse mannen vervolgen die opriepen PVV-leider Geert Wilders te vermoorden. Het gaat om een religieus leider en een politiek leider. De oproep deden zij tijdens bijeenkomsten, maar ook op sociale media.",
            "url": "https://www.nu.nl/politiek/6303287/twee-pakistanen-die-opriepen-om-wilders-te-vermoorden-worden-vervolgd.html",
            "urlToImage": "https://media.nu.nl/m/udkxav1as7sw_wd1280/twee-pakistanen-die-opriepen-om-wilders-te-vermoorden-worden-vervolgd.jpg",
            "publishedAt": "2024-02-28T15:01:53Z",
            "content": "Het Openbaar Ministerie gaat twee Pakistaanse mannen vervolgen die opriepen PVV-leider Geert Wilders te vermoorden. Het gaat om een religieus leider en een politiek leider. De oproep deden zij tijden… [+1049 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Hộ chiếu Việt Nam gần cuối bảng Đông Nam Á; nhiều người 'tậu' quốc tịch thứ hai",
            "description": "Hộ chiếu Việt Nam xếp thứ 92/199 trong bảng xếp hạng về quyền lực hộ chiếu năm 2024 và đứng gần cuối bảng tại khu vực Đông Nam Á.",
            "url": "https://www.bbc.com/vietnamese/articles/cp0783pyr07o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_vietnamese/5306/live/c3cac6b0-d62e-11ee-b7c8-95dbbbd5ab25.jpg",
            "publishedAt": "2024-02-28T15:00:08Z",
            "content": "Chp li hình nh, H chiu Vit Nam xp th 92/199 trong bng xp hng quyn lc h chiu nm 2024\r\nH chiu Vit Nam xp th 92/199 trong bng xp hng quyn lc h chiu nm 2024, theo công ty chuyên u t v di c Henley &amp; P… [+4804 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.ad.nl"
            },
            "author": "Binnenlandredactie",
            "title": "Politiek leider en religieus leider uit Pakistan roepen op Geert Wilders te vermoorden, OM stelt vervolging in",
            "description": "Het Openbaar Ministerie vervolgt een religieus leider en een politiek leider uit Pakistan die hun volgelingen hebben opgeroepen Tweede Kamerlid Geert Wilders te vermoorden. Volgens het OM deden de twee Pakistaanse mannen hun oproepen mondeling tijdens bijeenk…",
            "url": "https://www.ad.nl/binnenland/politiek-leider-en-religieus-leider-uit-pakistan-roepen-op-geert-wilders-te-vermoorden-om-stelt-vervolging-in~a038cbea/",
            "urlToImage": "https://images0.persgroep.net/rcs/s5yFIVmyCEgC8TCS_TwbYI0GPt4/diocontent/241138996/_focus/0.62/0.47/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
            "publishedAt": "2024-02-28T14:51:00Z",
            "content": "Het Openbaar Ministerie vervolgt een religieus leider en een politiek leider uit Pakistan die hun volgelingen opriepen Tweede Kamerlid Geert Wilders te vermoorden. Volgens het OM deden de twee Pakist… [+106 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Diplomat"
            },
            "author": "Shannon",
            "title": "Why India Became Indispensable to US Foreign Policy and Pakistan Was Left Behind",
            "description": "Democracy and “shared values” play a major role in diplomacy – something that Pakistan seems to have overlooked.",
            "url": "https://thediplomat.com/2024/02/why-india-became-indispensable-to-us-foreign-policy-and-pakistan-was-left-behind/",
            "urlToImage": "https://thediplomat.com/wp-content/uploads/2023/12/sizes/td-story-s-2/thediplomat_2023-12-28-155658.jpg",
            "publishedAt": "2024-02-28T14:44:31Z",
            "content": "In recent years, Indian officials and analysts have tried to make it unambiguously clear that, despite close cooperation with Washington, India will not play second fiddle to the United States in its… [+16677 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Associated Press",
            "title": "EU watchdog calls for overhaul of search and rescue rules after hundreds of migrants drown in Greece",
            "description": "The European Union’s watchdog has called for a change to search and rescue rules after investigating the sinking of a fishing boat carrying hundreds of migrants from Libya.",
            "url": "https://www.foxnews.com/world/eu-watchdog-calls-overhaul-search-rescue-rules-hundreds-migrants-drown-greece",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Migrant-Boat.jpg",
            "publishedAt": "2024-02-28T14:31:14Z",
            "content": "<ul><li>The European Union's watchdog has called for a change in search and rescue rules after the sinking of the Adriana, a fishing boat carrying migrants.</li><li>The Adriana sank off Greece with u… [+3944 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Express News Service",
            "title": "‘Pakistan Zindabad’ sloganeering charge against Congress MP’s supporters rocks Karnataka Assembly",
            "description": "While Opposition leader R Ashok questions the decision to field Syed Nasir Hussain, a Congress national leader dismisses the slogan claim as BJP’s ‘favourite set of lowly lies’",
            "url": "https://indianexpress.com/article/cities/bangalore/pakistan-zindabad-sloganeering-charge-congress-mp-supporters-karnataka-assembly-9186699/",
            "urlToImage": "https://images.indianexpress.com/2024/02/karnataka-assembly-sloganeering.jpg",
            "publishedAt": "2024-02-28T14:26:30Z",
            "content": "Karnataka Opposition leader R Ashoks allegation that Congress leader Syed Nasir Hussains supporters chanted Pakistan Zindabad after his election to the Rajya Sabha and Home Minister G Parameshwaras r… [+2374 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sputnikglobe.com"
            },
            "author": "Sputnik International",
            "title": "China Vows ‘Necessary Measures’ in Response to Western Sanctions Targeting Chinese Firms",
            "description": "China's Ministry of Foreign Affairs and Ministry of Commerce (MOFCOM) vowed on Monday in separate statements to take the \"necessary measures\" to firmly safeguard the legitimate rights and interests of Chinese companies, in response to some  Western countries'…",
            "url": "https://sputnikglobe.com/20240228/china-vows-necessary-measures-in-response-to-western-sanctions-targeting-chinese-firms-1117039261.html",
            "urlToImage": "https://cdn1.img.sputnikglobe.com/images/sharing/article/eng/1117039261.jpg?10938407011709128926",
            "publishedAt": "2024-02-28T14:02:05Z",
            "content": "Find top stories and features from Asia and the Pacific region. Keep updated on major political stories and analyses from Asia and the Pacific. All you want to know about China, Japan, North and Sout… [+7461 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kevinmd.com"
            },
            "author": "P. Dileep Kumar, MD, MBA",
            "title": "Beyond medical vs. N95: strategic masking for COVID protection",
            "description": "Do masks prevent COVID-19 infections? You might be thinking that it is a bit late to ponder these questions. But better late than never! As shown in the following graph provided by the CDC, COVID is here to stay with us, at least for the time being. Even thou…",
            "url": "https://www.kevinmd.com/2024/02/beyond-medical-vs-n95-strategic-masking-for-covid-protection.html",
            "urlToImage": "https://www.kevinmd.com/wp-content/uploads/shutterstock_1629206608-1.jpg",
            "publishedAt": "2024-02-28T14:00:23Z",
            "content": "Do masks prevent COVID-19 infections? You might be thinking that it is a bit late to ponder these questions. But better late than never! As shown in the following graph provided by the CDC, COVID is … [+6512 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lavenir.net"
            },
            "author": "Caroline Poulain",
            "title": "Une fausse attestation de réussite du permis de conduire remis à l’administration cominoise",
            "description": "Un homme originaire du Pakistan a remis un faux document à l’administration communal qui était censé lui procurer le permis de conduire. Prévenu pour faux, l’individu se dit victime d’une escroquerie. ...",
            "url": "https://www.lavenir.net/regions/wallonie-picarde/comines-warneton/2024/02/28/une-fausse-attestation-de-reussite-du-permis-de-conduire-remis-a-ladministration-cominoise-J3BIK6ZBPVHFBD5T35LODZ6PIY/",
            "urlToImage": "https://www.lavenir.net/resizer/bqynCuFfidXzScPTVlFnbNjz4rs=/1200x630/filters:format(jpeg):focal(1939x1301:1949x1291):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/UFVD77VYQZHRHBUO5OR7E7I6TY.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/7LN77MOHANCHXOH54HLGXGMEJE.jpg",
            "publishedAt": "2024-02-28T14:00:00Z",
            "content": "Mon ami ma dit quil connaissait quelquun qui travaillait dans une autoécole et quil pourrait mapprendre à conduire et me faire obtenir le permis en seulement cinq heures si je le payais en cash la so… [+1865 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI News Desk",
            "title": "Fixing Pak's economy will be top priority: Nawaz Sharif",
            "description": "Former prime minister of Pakistan Nawaz Sharif prioritizes addressing the struggling economy for his party's upcoming government. Emphasizing economic challenges' interconnectedness with national issues, he aims to fix the economy, advocating for full constit…",
            "url": "https://timesofindia.indiatimes.com/world/pakistan/fixing-pakistans-economy-top-priority-for-nawaz-sharif/articleshow/108078858.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108078867,width-1070,height-580,imgsize-596804,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T13:58:39Z",
            "content": "10 types of Indian chaat to try"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": null,
            "title": "Imran Khan's party urges IMF to consider Pakistan's instability in talks - sources",
            "description": "(marketscreener.com) ISLAMABAD -The party of Pakistan's jailed former prime minister, Imran Khan, has asked the International Monetary Fund to factor in the country's political stability in any further bailout talks, two people familiar with the matter said o…",
            "url": "https://www.marketscreener.com/quote/stock/HE-GROUP-164990281/news/Imran-Khan-s-party-urges-IMF-to-consider-Pakistan-s-instability-in-talks-sources-46048623/",
            "urlToImage": "https://www.marketscreener.com/images/reuters/2024-02/2024-02-09T165227Z_1_LYNXMPEK180LF_RTROPTP_3_PAKISTAN-ELECTION-KHAN.JPG",
            "publishedAt": "2024-02-28T13:06:45Z",
            "content": "ISLAMABAD (Reuters) -The party of Pakistan's jailed former prime minister, Imran Khan, has asked the International Monetary Fund to factor in the country's political stability in any further bailout … [+1955 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Spacewar.com"
            },
            "author": null,
            "title": "Massive leak shows Chinese firm hacked foreign govts, activists: analysts",
            "description": "Beijing (AFP) Feb 22, 2024 -\n\n A Chinese tech security firm was able to breach foreign governments, infiltrate social media accounts and hack personal computers, a massive data leak analysed by experts this week revealed.\n\nThe trove of documents from I-Soon, …",
            "url": "https://www.spacewar.com/reports/Massive_leak_shows_Chinese_firm_hacked_foreign_govts_activists_analysts_999.html",
            "urlToImage": "https://www.spxdaily.com/images-hg/china-internet-keyboard-hg.jpg",
            "publishedAt": "2024-02-28T13:05:37Z",
            "content": "Massive leak shows Chinese firm hacked foreign govts, activists: analystsBy Oliver Hotham with Jing Xuan Teng in ShanghaiBeijing (AFP) Feb 22, 2024\r\nA Chinese tech security firm was able to breach fo… [+4644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Spacewar.com"
            },
            "author": null,
            "title": "Hackers for sale: what we've learned from China's massive cyber leak",
            "description": "Beijing (AFP) Feb 23, 2024 -\n\n A massive data leak from Chinese cybersecurity firm I-Soon has offered a rare glimpse into the inner workings of Beijing-linked hackers.\n\nI-Soon is yet to confirm the leak is genuine and has not responded to a request for commen…",
            "url": "https://www.spacewar.com/reports/Hackers_for_sale_what_weve_learned_from_Chinas_massive_cyber_leak_999.html",
            "urlToImage": "https://www.spxdaily.com/images-hg/china-internet-keyboard-hg.jpg",
            "publishedAt": "2024-02-28T13:05:37Z",
            "content": "Hackers for sale: what we've learned from China's massive cyber leakby AFP Staff WritersBeijing (AFP) Feb 23, 2024\r\nA massive data leak from Chinese cybersecurity firm I-Soon has offered a rare glimp… [+4655 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "International Business Times"
            },
            "author": "Ricky OMBENI",
            "title": "UN Peacekeepers Begin Pullout From War-torn East DR Congo",
            "description": "The United Nations on Wednesday kicked off the withdrawal of MONUSCO peacekeeping forces from the Democratic Republic of Congo by handing over a first UN base to national police, an AFP team saw.",
            "url": "https://www.ibtimes.com/un-peacekeepers-begin-pullout-war-torn-east-dr-congo-3725800",
            "urlToImage": "https://d.ibtimes.com/en/full/4514596/six-million-people-have-been-displaced-conflict-drc.jpg",
            "publishedAt": "2024-02-28T13:00:28Z",
            "content": "The United Nations on Wednesday kicked off the withdrawal of MONUSCO peacekeeping forces from the Democratic Republic of Congo by handing over a first UN base to national police, an AFP team saw.\r\nDu… [+3733 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "LORNE COOK Associated Press",
            "title": "EU watchdog wants new search and rescue rules after hundreds of migrants drown off Greece",
            "description": "The European Union’s own watchdog wants changes to Europe’s search and rescue rules following an inquiry into the sinking of a boat carrying hundreds of migrants last year",
            "url": "https://abcnews.go.com/International/wireStory/eu-watchdog-new-search-rescue-rules-after-hundreds-107627157",
            "urlToImage": "https://i.abcnewsfe.com/a/29853af8-3f09-41be-809d-ace646a0f5fb/wirestory_c7e7b4a7f161d9a6a0d9ad1f3efd816d_16x9.jpg?w=1600",
            "publishedAt": "2024-02-28T12:54:27Z",
            "content": "BRUSSELS -- The European Unions administrative watchdog called Wednesday for a change to Europes search and rescue rules following an inquiry into last year's sinking of a rusty fishing boat, the Adr… [+3447 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI News Desk",
            "title": "Pro-Pak slogans in Karnataka House: BJP says Congress 'anti-national'",
            "description": "BJP's Gaurav Bhatia criticizes Congress for 'Pakistan Zindabad' chants post Rajya Sabha win. He accuses Congress of anti-nationalism, demanding an apology from Mallikarjun Kharge. Karnataka BJP files complaint alleging Hussain's supporters chanted. Congress d…",
            "url": "https://timesofindia.indiatimes.com/india/pro-pak-slogans-in-karnataka-house-bjp-says-congress-anti-national/articleshow/108076954.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108077540,width-1070,height-580,imgsize-550764,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T12:48:29Z",
            "content": "10 types of Indian chaat to try"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "From forests to fear: How national security is killing ecology in border regions",
            "description": "Existential threats to endangered animals, forests and people are being ignored as governments focus on state interests instead of climate Read Full Article at RT.com",
            "url": "https://www.rt.com/india/593268-trump-ecological-concerns-biodiversity/",
            "urlToImage": "https://mf.b37mrtl.ru/files/2024.02/article/65df193d85f5402b585e8827.jpg",
            "publishedAt": "2024-02-28T12:45:09Z",
            "content": "From the US-Mexico border and the Poland-Belarus border to India’s Andaman and Nicobar Islands, governments across the world are pushing mega-development projects at the cost of environmental and cli… [+11178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Minneapolis Star Tribune"
            },
            "author": "LORNE COOK",
            "title": "EU watchdog wants new search and rescue rules after hundreds of migrants drown off Greece",
            "description": "The European Union's administrative watchdog called Wednesday for a change to Europe's search and rescue rules following an inquiry into last year's sinking of a rusty fishing boat, the Adriana, carrying hundreds of migrants while traveling from Libya to Ital…",
            "url": "https://www.startribune.com/eu-watchdog-wants-new-search-and-rescue-rules-after-hundreds-of-migrants-drown-off-greece/600346716/",
            "urlToImage": "https://www.startribune.com/static/img/branding/logos/strib-social-card.png?d=1709066656",
            "publishedAt": "2024-02-28T12:39:04Z",
            "content": "BRUSSELS The European Union's administrative watchdog called Wednesday for a change to Europe's search and rescue rules following an inquiry into last year's sinking of a rusty fishing boat, the Adri… [+3482 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Tass.ru"
            },
            "author": "ТАСС",
            "title": "Суд оправдал Имрана Хана по делу об организации беспорядков в мае 2023 года",
            "description": "По данным Daily Pakistan, суд также оправдал еще семь членов руководства ДЗС, признав, что \"все они могли быть привлечены к ответственности по политическим мотивам, в то время как суд не располагает свидетельскими показаниями, доказывающими вину обвиняемых\"",
            "url": "https://tass.ru/mezhdunarodnaya-panorama/20106409",
            "urlToImage": "https://cdn-storage-media.tass.ru/thumb/ru/mezhdunarodnaya-panorama/20106409?u=2024-02-28T12:27:53.119927",
            "publishedAt": "2024-02-28T12:27:53Z",
            "content": ", 28 . //. -- (\" \", ) - 2023 .\r\n  Daily Pakistan, , , \" , , \".\r\n , , 10 14 . , 71- - . , 100 , .\r\n , 9 . \" \" , , 50 ( $175,5 ), , 2018-2022   .\r\n , , , , , , , . , . , 50 , 120 , 1 200 1 300 ."
        },
        {
            "source": {
                "id": null,
                "name": "Bitcoinist"
            },
            "author": "Scott Matherson",
            "title": "Bitcoin Is Unstoppable: BTC Price Hits New All-Time Highs In 14 Countries",
            "description": "Bitcoin continues to prove its worth as the ultimate store of value, gaining widespread adoption in hundreds of countries globally. This pioneer cryptocurrency has successfully surpassed previous records to achieve new all-time highs in 14 different countries…",
            "url": "https://bitcoinist.com/bitcoin-btc-price-all-time-highs/",
            "urlToImage": null,
            "publishedAt": "2024-02-28T12:15:23Z",
            "content": "Bitcoin continues to prove its worth as the ultimate store of value, gaining widespread adoption in hundreds of countries globally. This pioneer cryptocurrency has successfully surpassed previous rec… [+3337 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "FRANCE24",
            "title": "RDC : coup d'envoi du retrait progressif de la force de l'ONU",
            "description": "Au cours d'une cérémonie à la base de Kamanyola, tout près des frontières rwandaise et burundaise, les drapeaux des Nations unies et du Pakistan, pays d'origine des Casques bleus qui en avaient la responsabilité, ont été remplacés par celui de la RDC, a const…",
            "url": "https://www.france24.com/fr/info-en-continu/20240228-rdc-coup-d-envoi-du-retrait-progressif-de-la-force-de-l-onu",
            "urlToImage": "https://s.france24.com/media/display/bbb4f3ca-d632-11ee-8769-005056a97e36/w:1280/p:16x9/f41f1520baae8a4a87bbf6edd43c6b87c9a02b83.jpg",
            "publishedAt": "2024-02-28T12:13:08Z",
            "content": "Kamanyola (RD Congo) (AFP) La Mission de l'ONU en République démocratique du Congo (Monusco) a amorcé mercredi son retrait du pays, réclamé par Kinshasa qui la juge inefficace, avec la remise officie… [+3886 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Bureau",
            "title": "Priyank Kharge calls MoS Rajeev's comments on Nasir Hussain as attempt to secure Cabinet berth",
            "description": "\"The Minister of IT is resorting to desperate measures to gain the PM's attention, even at the expense of rupturing the state's social fabric, despite gaining everything from it. These kinds are the real anti-nationals and anti-Kannadigas,\" Kharge said, addin…",
            "url": "https://economictimes.indiatimes.com/news/politics-and-nation/priyank-kharge-calls-mos-rajeevs-comments-on-nasir-hussain-as-attempt-to-secure-cabinet-berth/articleshow/108076302.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108076356,width-1200,height-630,imgsize-26056,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T12:10:07Z",
            "content": "Karnataka IT/BT Minister Priyank Kharge on Wednesday termed Union MoS (MeitY) Rajeev Chandrasekhar's comments on Rajya Sabha member Syed Naseer Hussain as an attempt to secure a cabinet berth and fav… [+2187 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Star Online"
            },
            "author": "Asif Shahzad",
            "title": "Imran Khan's party urges IMF to consider Pakistan's instability in talks - sources",
            "description": "ISLAMABAD (Reuters) - The party of Pakistan's jailed former prime minister, Imran Khan, has asked the International Monetary Fund to factor in the country's political stability in any further bailout talks, two people familiar with the matter said on Wednesda…",
            "url": "https://www.thestar.com.my/news/world/2024/02/28/imran-khan039s-party-urges-imf-to-consider-pakistan039s-instability-in-talks---sources",
            "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/02/28/2567124.jpg",
            "publishedAt": "2024-02-28T12:03:00Z",
            "content": "ISLAMABAD (Reuters) - The party of Pakistan's jailed former prime minister, Imran Khan, has asked the International Monetary Fund to factor in the country's political stability in any further bailout… [+1470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "20 Minutes"
            },
            "author": "Manon Minaca (20 Minutes)",
            "title": "Le succès à double tranchant du programme spatial chinois, entre performance et isolement",
            "description": "En menant des programmes habités, lunaires et martiens, la Chine développe un programme spatial impressionnant et très performant.Ce succès fulgurant place les Chinois en compétition directe avec les Américains, mais l’empire du milieu est lourdement hand",
            "url": "https://www.20minutes.fr/sciences/4078470-20240227-succes-double-tranchant-programme-spatial-chinois-entre-performance-isolement",
            "urlToImage": "https://img.20mn.fr/WZB5kfd4QlWJydoz7saeFik/1444x920_230522-jiuquan-may-22-2023-xinhua-the-combination-of-the-shenzhou-16-crewed-spaceship-and-a-long-march-2f-carrier-rocket-is-being-transferred-to-the-launching-area-in-jiuquan-satellite-launch-center-in-northwest-china-may-22-2023-the-combination-of-the-shenzhou-16-crewed-spaceship-and-a-long-march-2f-carrier-rocket-was-transferred-to-the-launching-area-on-monday-the-china-manned-space-agency-cmsa-said-the-facilities-and-equipment-at-the-launch-site-are-in-good-condition-and-various-pre-launch-function-checks-and-joint-tests-will-be-carried-out-as-planned-said-the-cmsa-the-spaceship-will-be-launched-in-the-near-future-at-an-appropriate-time-photo-by-wang-jiangbo-xinhua-liu-fang-chinenouvelle-xxjpbe-e007517-20230522-pepfn0a001-credit-chine-nouvelle-sipa-2305221557",
            "publishedAt": "2024-02-28T12:00:30Z",
            "content": "«La Chine a un but de longue date : devenir une puissance spatiale majeure. » Et la trajectoire actuelle de lempire du milieu dans le domaine spatial ne pas contredira Marc Julienne, directeur du cen… [+8615 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Bureau",
            "title": "Pro Pak Slogan: Karnataka CM Siddaramaiah promises action after FSL report",
            "description": "A war of words broke out between the Congress and BJP-JDS combine over visuals of people shouting 'Pakistan Zindabad' after Naseer Hussain's victory. The government vowed not to go soft and the Congress launched a counter attack.",
            "url": "https://economictimes.indiatimes.com/news/politics-and-nation/pro-pak-slogan-karnataka-cm-siddaramaiah-promises-action-after-fsl-report/articleshow/108075723.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108075664,width-1200,height-630,imgsize-58266,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T11:45:56Z",
            "content": "Chief Minister on Wednesday promised action against those who allegedly raised pro-Pakistan slogans Tuesday night after the Rajya Sabha poll results were announced amid the BJP and JDS escalating the… [+2201 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "When Sania Mirza teased Shoaib Malik: 'India or Pakistan, whom do you support?'",
            "description": "Shoaib Malik, former Pakistani cricket captain, made headlines with his second marriage to actress Sana Javed in Karachi. Following his divorce from Sania Mirza, he shared a photograph on social media with his new wife. Reports of differences between Shoaib a…",
            "url": "https://economictimes.indiatimes.com/magazines/panache/when-sania-mirza-teased-shoaib-malik-india-or-pakistan-whom-do-you-support/articleshow/108074420.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108074709,width-1200,height-630,imgsize-2022696,overlay-etpanache/photo.jpg",
            "publishedAt": "2024-02-28T11:28:11Z",
            "content": "Former Pakistani cricket captain Shoaib Malik made headlines last month with the announcement of his second marriage to popular Pakistani actress Sana Javed in Karachi, following his divorce from Ind… [+2561 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Resilience"
            },
            "author": "El Habib Ben Amara",
            "title": "Despite the precipitation, drought is lurking unless urgent measures are taken",
            "description": "Will we finally pick up a shovel and create conditions on our properties, neighborhoods, towns, and villages so that not a drop of rainwater is lost without use? It is a vibrant and enthusiastic call; we can only seriously consider the question of rainwater r…",
            "url": "https://www.resilience.org/stories/2024-02-28/despite-the-precipitation-drought-is-lurking-unless-urgent-measures-are-taken/",
            "urlToImage": "https://www.resilience.org/wp-content/uploads/2024/02/Rainwater_Harvesting.jpg",
            "publishedAt": "2024-02-28T11:16:40Z",
            "content": "It has rained across the country (Algeria) in recent weeks. It’s a pity that all this water will go to waste, not without causing damage by flooding our cities and villages, and eroding, ravaging, an… [+27371 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nakedcapitalism.com"
            },
            "author": "Yves Smith",
            "title": "How Revillaging and Natural Building Are Increasing Climate Resilience",
            "description": "Some grass roots initiatives by architects and community members to increase climate resilience by improving building and local planning.",
            "url": "https://www.nakedcapitalism.com/2024/02/how-revillaging-and-natural-building-are-increasing-climate-resilience.html",
            "urlToImage": null,
            "publishedAt": "2024-02-28T11:16:39Z",
            "content": "Yves here. This post describes some approaches to building housing and designing communities to reduce their environmental impact. However, this sort of thinking is long overdue. Even though many of … [+20072 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Star Online"
            },
            "author": "MARTIN CARVALHO, GERARD GIMINO, TEH ATHIRA YUSOF",
            "title": "Eye-watering: Malaysians consume over RM1bil worth of onions, garlic a year, says Mat Sabu",
            "description": "KUALA LUMPUR: Malaysians consume over RM1bil worth of onions and garlic a year, says Datuk Seri Mohamad Sabu. Read full story",
            "url": "https://www.thestar.com.my/news/nation/2024/02/28/eye-watering-malaysians-consume-over-rm1bil-worth-of-onions-garlic-a-year-says-mat-sabu",
            "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/02/28/2567064.jpg",
            "publishedAt": "2024-02-28T11:12:00Z",
            "content": "KUALA LUMPUR: Malaysians consume over RM1bil worth of onions and garlic a year, says Datuk Seri Mohamad Sabu.\r\n\"In 2022, Malaysia imported a total of 687 metric tons of onion worth RM1.58bil.\r\n\"Of th… [+2128 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Radio Free Europe/ Radio Liberty"
            },
            "author": "Reid Standish",
            "title": "China In Eurasia Briefing: Is China The Winner From The War In Ukraine?",
            "description": "After two years of war in Ukraine, some analysts see China feeling emboldened.",
            "url": "https://www.rferl.org/a/china-winner-ukraine-war/32840603.html",
            "urlToImage": "https://gdb.rferl.org/B27411CF-D751-485E-B9FD-80452A4E3683.jpg",
            "publishedAt": "2024-02-28T10:49:00Z",
            "content": "Welcome back to the China In Eurasia Briefing, an RFE/RL newsletter tracking China's resurgent influence from Eastern Europe to Central Asia.\r\nLooking ahead, we'll be changing up the newsletter later… [+8588 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Trendhunter.com"
            },
            "author": null,
            "title": "Marriage Audio Assistants - easypaisa Launches the Audio Nikahnama Service (TrendHunter.com)",
            "description": "(TrendHunter.com) easypaisa, a comprehensive digital financial platform that aims to simplify everyday transactions for its users in Pakistan, has launched a special feature that appears somewhat outside of its...",
            "url": "https://www.trendhunter.com/trends/easypaisa",
            "urlToImage": "https://cdn.trendhunterstatic.com/thumbs/527/easypaisa.jpeg?auto=webp",
            "publishedAt": "2024-02-28T10:47:03Z",
            "content": "easypaisa, a comprehensive digital financial platform that aims to simplify everyday transactions for its users in Pakistan, has launched a special feature that appears somewhat outside of its immedi… [+918 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.hln.be"
            },
            "author": "Fleur Broeders",
            "title": "Beroemde talkshowhost Jon Stewart barst op tv in tranen uit om overlijden van zijn hondje",
            "description": "De beroemde Amerikaanse talkshowhost Jon Stewart is deze week opvallend emotioneel geworden in ‘The Daily Show’. Voor het oog van de kijkers prees hij zijn overleden hond Dipper. Het duurde niet lang tot de presentator in tranen uitbarstte, maar liefst twee m…",
            "url": "https://www.hln.be/tv/beroemde-talkshowhost-jon-stewart-barst-op-tv-in-tranen-uit-om-overlijden-van-zijn-hondje~a05c0d52/",
            "urlToImage": "https://images0.persgroep.net/rcs/OuXzh3EYIK33D1qtHIHaEVvU0x0/diocontent/241134334/_focus/0.54/0.4/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
            "publishedAt": "2024-02-28T10:35:42Z",
            "content": "Jon Stewart is al jaren één van de bekendste talkshowpresentatoren van Amerika. De cabaretier, die meestal over politiek praat, had het deze keer over zijn hond Dipper. Stewart begon met de herinneri… [+1810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.hln.be"
            },
            "author": "Fleur Broeders",
            "title": "Beroemde talkshowhost Jon Stewart barst op tv in tranen uit na overlijden van zijn hond",
            "description": "De beroemde Amerikaanse talkshowhost Jon Stewart is deze week opvallend emotioneel geworden in ‘The Daily Show’. Voor het oog van de kijkers prees hij zijn overleden hond Dipper. Het duurde niet lang tot de presentator in tranen uitbarstte, maar liefst twee m…",
            "url": "https://www.hln.be/tv/beroemde-talkshowhost-jon-stewart-barst-op-tv-in-tranen-uit-na-overlijden-van-zijn-hond~a05c0d52/",
            "urlToImage": "https://images0.persgroep.net/rcs/6kzC-qM-O0hVRbfSmU8a4di57xM/diocontent/241139945/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
            "publishedAt": "2024-02-28T10:35:00Z",
            "content": "Jon Stewart is al jaren één van de bekendste talkshowpresentatoren van Amerika. De cabaretier, die meestal over politiek praat, had het deze keer over zijn hond Dipper. Stewart begon met de herinneri… [+1839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AllAfrica - Top Africa News"
            },
            "author": null,
            "title": "Southern Africa: South Africa Urgently Needs a Debt Ceiling",
            "description": "[The Herald] A debt ceiling 'of around 64 percent of gross domestic product would be appropriate for South Africa, along with some unpopular decisions to get it down from the current 74 percent",
            "url": "https://allafrica.com/stories/202402280255.html",
            "urlToImage": "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
            "publishedAt": "2024-02-28T10:33:15Z",
            "content": "A debt ceiling 'of around 64 percent of gross domestic product would be appropriate for South Africa, along with some unpopular decisions to get it down from the current 74 percent\r\nBudget 2024 annou… [+3115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "coinpedia.org",
            "title": "Price To Hit $60K Anytime Soon",
            "description": "Price To Hit $60K Anytime Soon appeared first on Coinpedia Fintech News Bitcoin’s (BTC) price has been hitting new 25-month highs for the past three days, thus signaling the bulls are in control. The flagship coin rallied more than 5 percent in the past 24 ho…",
            "url": "https://biztoc.com/x/d3a3f13165e78c97",
            "urlToImage": "https://c.biztoc.com/p/d3a3f13165e78c97/s.webp",
            "publishedAt": "2024-02-28T10:14:23Z",
            "content": "Price To Hit $60K Anytime Soon appeared first on Coinpedia Fintech NewsBitcoins (BTC) price has been hitting new 25-month highs for the past three days, thus signaling the bulls are in control. The f… [+282 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Globalsecurity.org"
            },
            "author": "John Pike",
            "title": "IP Gas pipeline project gets go-ahead by caretaker cabinet: Pak media",
            "description": "The caretaker federal cabinet committee has approved the Pak-Iran gas pipeline project with plans to complete it in a year, marking it a major development with hopes for boosting the country's energy security, a Pakistani media, Geotv reported on Tuesday.",
            "url": "https://www.globalsecurity.org/wmd/library/news/pakistan/2024/pakistan-240227-irna01.htm",
            "urlToImage": null,
            "publishedAt": "2024-02-28T10:09:26Z",
            "content": "IRNA - Islamic Republic News Agency\r\nFeb 27, 2024\r\nTehran, IRNA -- The caretaker federal cabinet committee has approved the Pak-Iran gas pipeline project with plans to complete it in a year, marking … [+2929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Globalsecurity.org"
            },
            "author": "John Pike",
            "title": "Pakistani Court Indicts Ex-PM Khan, Wife in Graft Case",
            "description": "An anti-corruption court in Pakistan indicted former Prime Minister Imran Khan and his wife Tuesday on charges that he had received land as a bribe while in office.",
            "url": "https://www.globalsecurity.org/wmd/library/news/pakistan/2024/pakistan-240227-voa01.htm",
            "urlToImage": null,
            "publishedAt": "2024-02-28T10:01:01Z",
            "content": "By Ayaz Gul February 27, 2024\r\nAn anti-corruption court in Pakistan indicted former Prime Minister Imran Khan and his wife Tuesday on charges that he had received land as a bribe while in office.\r\nTh… [+4479 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forecastinternational.com"
            },
            "author": "Derek Bisaccio, Forecast International",
            "title": "Is Azerbaijan buying Pakistani fighter jets?",
            "description": "Neither Baku nor Islamabad has confirmed a reported purchase of JF-17s.",
            "url": "https://dsm.forecastinternational.com/2024/02/27/azerbaijan-jf-17-rumors-resurface/?utm_source=feedly&amp;utm_medium=rss&amp;utm_campaign=azerbaijan-jf-17-rumors-resurface&amp;utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=azerbaijan-jf-17-rumors-resurface",
            "urlToImage": "https://cdn.defenseone.com/media/img/cd/2024/02/27/Military_officials_l_2500/open-graph.jpg",
            "publishedAt": "2024-02-28T10:00:00Z",
            "content": "Azerbaijans Air Force may be taking steps to fill a long-standing requirement for fighter aircraft. On February 22, Azernews reported that Azerbaijans Air Force inked a $1.6 billion deal with Pakista… [+4903 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nzz.ch"
            },
            "author": "Ulrich Speck (usp)",
            "title": "Wie ein neues Gleichgewicht des Schreckens aussehen könnte",
            "description": "Mit der Wahl von Trump könnte die Epoche der erweiterten nuklearen Abschreckung durch Amerika zu Ende gehen. Die Zahl der Atomwaffenstaaten würde erheblich ansteigen.",
            "url": "https://www.nzz.ch/pro-global/wie-ein-neues-gleichgewicht-des-schreckens-aussehen-koennte-ld.1819730",
            "urlToImage": "https://img.nzz.ch/2024/01/08/b722ef9b-025c-47a4-8984-edb4e033fc09.jpeg?width=1200&height=674&fit=bound&quality=75&auto=webp&crop=5835,3278,x0,y648&wmark=nzz",
            "publishedAt": "2024-02-28T10:00:00Z",
            "content": "Kaum ein Monat vergeht, in dem Putin den Westen nicht an sein Atomarsenal erinnert nuklear bestückbare Interkontinentalrakete Jars bei einer Parade in Moskau, 9. Mai 2023.\r\nDer russische Präsident Pu… [+8753 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Haber7.com"
            },
            "author": "Emrullah Koçin",
            "title": "KAAN-KIZILELMA-ANKA-3 üçgeninde dünyaya damga vuracak konsept! Türkiye çıtayı yükseltti",
            "description": "5'inci nesil taktik askeri havacılık kabiliyeti olarak tasarlanan KAAN, Türkiye’yi farklı bir kulübün üyesi yapmaya aday. KAAN, yalnızca bir savunma sanayii kilometre taşı değil, aynı zamanda jeopolitik olarak kritik bir anahtar.",
            "url": "https://ekonomi.haber7.com/ekonomi/haber/3394749-kaan-kizilelma-anka-3-ucgeninde-dunyaya-damga-vuracak-konsept-turkiye-citayi-yukseltti",
            "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/09/kaan_kizilelma_anka_3_ucgeninde_dunyaya_damga_vuracak_konsept_turkiye_citayi_yukseltti_1709112474_8649.jpg",
            "publishedAt": "2024-02-28T09:28:00Z",
            "content": "Dr. Can Kasapolu, milli muharip uçak KAAN'n Türk savunma sanayii için önemini ve uluslararas rekabeti nasl etkileyeceini AA Analiz için kaleme ald.\r\n5'inci nesil taktik askeri havaclk kabiliyeti olar… [+7173 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Star Online"
            },
            "author": "The Star Online",
            "title": "Immigration rounds up 14,361 undocumented migrants within two months",
            "description": "PUTRAJAYA: The Immigration Department has conducted a total of 2,528 operations from Jan 1 to Feb 23 and arrested 14,361 undocumented migrants, says director-general Datuk Ruslin Jusoh. Read full story",
            "url": "https://www.thestar.com.my/news/nation/2024/02/28/immigration-rounds-up-14361-undocumented-migrants-within-two-months",
            "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/02/28/2566793.jpg",
            "publishedAt": "2024-02-28T09:25:00Z",
            "content": "PUTRAJAYA: The Immigration Department has conducted a total of 2,528 operations from Jan 1 to Feb 23 and arrested 14,361 undocumented migrants, says director-general Datuk Ruslin Jusoh.\r\nHe said that… [+1803 chars]"
        },
        {
            "source": {
                "id": "ansa",
                "name": "ANSA.it"
            },
            "author": null,
            "title": "Italiani in Pakistan per formare guide di alta montagna",
            "description": "E' stato inaugurato in Pakistan il corso per la formazione di guide d'alta quota altamente specializzate nell'organizzazione e nell'accompagnamento di spedizioni e gruppi sulle montagne del Karakorum. (ANSA)",
            "url": "https://www.ansa.it/valledaosta/notizie/2024/02/28/italiani-in-pakistan-per-formare-guide-di-alta-montagna_97d21bd6-bee1-4f7a-ac10-0118d88b0448.html",
            "urlToImage": "https://www.ansa.it/webimages/img_700/2024/2/28/edd08c311cc09b2de3571986a542b864.jpg",
            "publishedAt": "2024-02-28T09:06:56Z",
            "content": "E' stato inaugurato in Pakistan il corso per la formazione di guide d'alta quota altamente specializzate nell'organizzazione e nell'accompagnamento di spedizioni e gruppi sulle montagne del Karakorum… [+1446 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "scmp.com",
            "title": "Alibaba’s South Asian e-commerce unit Daraz to conduct new round of lay-offs",
            "description": "“Despite our efforts to explore different solutions, our cost structure continues to fall short of our financial targets,” he said. “Facing unprecedented challenges in the market, we must take swift action to ensure our company’s long-term sustainability and …",
            "url": "https://biztoc.com/x/b22ad4f29c94d51c",
            "urlToImage": "https://c.biztoc.com/p/b22ad4f29c94d51c/s.webp",
            "publishedAt": "2024-02-28T09:02:07Z",
            "content": "Despite our efforts to explore different solutions, our cost structure continues to fall short of our financial targets, he said. Facing unprecedented challenges in the market, we must take swift act… [+282 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Emerce.nl"
            },
            "author": "Samsung Electronics",
            "title": "Samsung Knox krijgt CC-certificering voor hoge beveiliging op TV’s in 2024",
            "description": "Schiphol, 28 februari 2024 – Samsung Knox, de betrouwbare beveiligingssoftware die is geïntegreerd in de Samsung TV’s van 2024, heeft […]",
            "url": "https://www.emerce.nl/wire/samsung-knox-krijgt-cccertificering-hoge-beveiliging-tvs-2024",
            "urlToImage": "https://www.emerce.nl/content/uploads/2024/02/Samsung-Knox-afb.jpg",
            "publishedAt": "2024-02-28T08:53:14Z",
            "content": "Schiphol, 28 februari 2024 Samsung Knox, de betrouwbare beveiligingssoftware die is geïntegreerd in de Samsung TVs van 2024, heeft vóór de productlancering de Common Criteria (CC)-certificering behaa… [+3049 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ANI",
            "title": "Pakistan: GDA, JI and JUI-F reject February 8 polls, demand fresh elections",
            "description": "Three Opposition parties in Pakistan, including the Grand Democratic Alliance (GDA), Jamaat-i-Islami (JI), and Jamiat Ulema-i-Islam-Fazl (JUI-F), rejected the results of the February 8 elections, alleging manipulation and rigging. They demanded fresh polls an…",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/pakistan-gda-ji-and-jui-f-reject-february-8-polls-demand-fresh-elections/articleshow/108068932.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108069031,width-1200,height-630,imgsize-8978,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T08:38:45Z",
            "content": "Three Opposition parties - the Grand Democratic Alliance (GDA), Jamaat-i-Islami (JI) and Jamiat Ulema-i-Islam-Fazl (JUI-F) on Tuesday rejected the results of elections held in Pakistan on February 8 … [+3656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Atlantico.fr"
            },
            "author": "Yves Roucaute",
            "title": "Écologie positive : une stratégie de progrès, de croissance et de puissance pour le retour de la France (épisode 7)",
            "description": "Septième épisode de la série d'Yves Roucaute consacrée à l'écologie.",
            "url": "https://atlantico.fr/article/decryptage/ecologie-positive-une-strategie-de-progres-de-croissance-et-de-puissance-pour-le-retour-de-la-france-episode-7-yves-roucaute",
            "urlToImage": "https://atlantico-media.s3.eu-west-3.amazonaws.com/000_uv2vy_1391a9ff27.jpg",
            "publishedAt": "2024-02-28T08:34:30Z",
            "content": "(Notes à partir desquelles a été prononcée la conférence du 9 septembre 2023 prononcée pour la formation du parti Les républicains, après la publication de LObscurantisme vert. La véritable de la con… [+6998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Statetimes.in"
            },
            "author": "statetimes_editor",
            "title": "Homestays introduced near IB to boost border tourism in Samba",
            "description": "Samba (J-K): Former Sarpanch Mohan Singh Bhatti is ready to receive tourists at his homestay near the International Border (IB) in Jammu and Kashmir’s Samba district, a visible change in the ground situation after the renewed ceasefire between India and Pakis…",
            "url": "https://statetimes.in/homestays-introduced-near-ib-to-boost-border-tourism-in-samba/",
            "urlToImage": "https://statetimes.in/wp-content/uploads/2024/02/Baba.jpg",
            "publishedAt": "2024-02-28T08:28:18Z",
            "content": "Samba (J-K): Former Sarpanch Mohan Singh Bhatti is ready to receive tourists at his homestay near the International Border (IB) in Jammu and Kashmir’s Samba district, a visible change in the ground s… [+4839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "asia.nikkei.com",
            "title": "Clash with Pakistan shows Iran must take its neighbors more seriously",
            "description": "Vali Kaleji is a senior research fellow with the Institute for Iran-Eurasia Studies in Tehran. Amid heightened tensions with both Israel and the U.S., particularly over its support for Houthi forces in Yemen that had been attacking shipping in the Red Sea, Ir…",
            "url": "https://biztoc.com/x/f42b8a33430cdf7a",
            "urlToImage": "https://c.biztoc.com/p/f42b8a33430cdf7a/s.webp",
            "publishedAt": "2024-02-28T08:10:09Z",
            "content": "Vali Kaleji is a senior research fellow with the Institute for Iran-Eurasia Studies in Tehran.Amid heightened tensions with both Israel and the U.S., particularly over its support for Houthi forces i… [+272 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Allegations of pro-Pakistan slogan: Karnataka CM Siddaramaiah says strict action if found true",
            "description": "India News: Karnataka chief minister Siddaramaiah said on Wednesday serious action would be taken against those who allegedly raised 'Pakistan zindabad' slogan inside the 'Vidhana Soudha' if the investigation found the charge to be true.",
            "url": "https://timesofindia.indiatimes.com/india/allegations-of-pro-pakistan-slogan-karnataka-cm-says-strict-action-if-found-true/articleshow/108067173.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108067349,width-1070,height-580,imgsize-963964,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T08:00:36Z",
            "content": "10 types of Indian chaat to try"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol Hindi",
            "title": "कर्नाटक विधानसभा में लगे 'पाकिस्तान जिंदाबाद' के नारे, CM सिद्धारमैया बोले- 'कड़ी कार्रवाई की जाएगी'",
            "description": "BJP की शिकायत में कहा गया है, \"विधान सौध (कर्नाटक विधानसभा) में 27 फरवरी को हुए राज्यसभा चुनाव के बाद नसीर हुसैन और उनके कई समर्थक शाम को मतगणना क्षेत्र के पास एकत्र हुए थे। पता चला कि शाम करीब 7 बजे रिटर्निंग ऑफिसर ने घोषणा की कि नसीर हुसैन विधिवत निर्वाचित …",
            "url": "https://hindi.moneycontrol.com/news/india/trends/siddaramaiah-says-forensics-examining-pakistan-zindabad-video-amid-bjp-protests-bengaluru-police-examine-viral-video-1812831.html",
            "urlToImage": "https://images.moneycontrol.com/static-hindinews/2024/02/Siddaramaiah-637x435.jpg",
            "publishedAt": "2024-02-28T07:42:08Z",
            "content": "\" (Pakistan Zindabad)\" , 3 - \" \" \" \" \r\nCM - ' '\r\n (Siddaramaiah) (BJP) CM , \" ' ' \"\r\n, , \" , 11 \"\r\n , (27 ) \" \" \r\n ?\r\n ' ' MLC . \r\n , \" ( ) 27 7 \"\r\n - - ' '"
        },
        {
            "source": {
                "id": null,
                "name": "Inter Press Service"
            },
            "author": "Neena Bhandari",
            "title": "‘I Haven’t Forgotten Where I Came From,’ says Yvonne Pinto, Incoming IRRI Chief",
            "description": "Growing up on a small farming station in Holetta (Ethiopia), Yvonne Pinto would accompany her agriculturist father to the farm, where she would spend her time cross-fertilizing plants. Her tiny fingers making the task easier, as she would marvel at the end pr…",
            "url": "https://www.ipsnews.net/2024/02/i-havent-forgotten-where-i-came-from-says-yvonne-pinto-incoming-irri-chief/",
            "urlToImage": "https://www.ipsnews.net/Library/2024/02/Yvonne-Pinto.jpg",
            "publishedAt": "2024-02-28T07:35:34Z",
            "content": "Africa, Asia-Pacific, Biodiversity, Development &amp; Aid, Editors' Choice, Environment, Featured, Food and Agriculture, Food Security and Nutrition, Food Sustainability, Headlines, Health, Humanitar… [+6466 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "netzwelt"
            },
            "author": "Gerrit Gerbig",
            "title": "WhatsApp-Anruf aus Indien: Wer steckt hinter der 091-Nummer?",
            "description": "Auf WhatsApp klingelt ständig eine Nummer mit der Vorwahl 091 bei euch durch? Wir verraten euch, was es mit dem Anruf aus Indien auf sich hat und warum ihr besser nicht rangehen solltet.\nDieser Artikel wurde einsortiert unter \nDownload,WhatsApp,Aktuelle Betru…",
            "url": "https://www.netzwelt.de/news/227379-whatsapp-anruf-indien-steckt-hinter-091-nummer.html",
            "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw2000_sh1125_sx0_sy0_sr16x9_nu2/picture/original/2024/02/whatsapp-anruf-indien-395344.png",
            "publishedAt": "2024-02-28T07:22:00Z",
            "content": "WHATSAPP\r\nAuf WhatsApp klingelt ständig eine Nummer mit der Vorwahl 091 bei euch durch? Wir verraten euch, was es mit dem Anruf aus Indien auf sich hat und warum ihr besser nicht rangehen solltet.\r\nU… [+2835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Christiantoday.com"
            },
            "author": "David Robertson",
            "title": "Islamism in Britain Part 2: is there an answer?",
            "description": "In Part 1, I delved into the question of whether there was a problem with Islamism in the UK and concluded that there is. Here I explore some possible responses.",
            "url": "https://www.christiantoday.com/article/islamism.in.britain.part.2.is.there.an.answer/141434.htm",
            "urlToImage": "https://christiantoday-4cf9.kxcdn.com/en/full/82932/birmingham-england.jpg?p=141434&w=760&l=46&t=55",
            "publishedAt": "2024-02-28T07:05:00Z",
            "content": "(Photo: Getty/iStock)\r\nIn Part 1, I delved into the question of whether there was a problem with Islamism in the UK and concluded that there is.\r\nBefore I begin with Part 2, it is important to remind… [+11250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "Manjeet Negi, Arvind Ojha",
            "title": "Historic drug bust: 3,300 kg of charas, meth seized off Gujarat coast",
            "description": "An Indian Navy mission-deployed ship which was at sea for two days stopped the suspicious boat as it entered Indian territorial waters, inputs from a  a surveillance aircraft showed.",
            "url": "https://www.businesstoday.in/latest/trends/story/historic-drug-bust-3300-kg-of-charas-meth-seized-off-gujarat-coast-419289-2024-02-28",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65dedac44e1fa-according-to-the-agencies--the-international-market-value-of-the-drugs-seized-is-estimated-to-be-mor-280330891-16x9.jpg",
            "publishedAt": "2024-02-28T07:03:59Z",
            "content": "The Narcotics Control Bureau (NCB) has seized 3,300 kg of drugs from a boat manned by suspected Pakistani crew members off the coast of Gujarat. The operation was carried out with assistance from the… [+1371 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The BMJ"
            },
            "author": "Badacho, A. S., Mahomed, O. H.",
            "title": "Lived experiences of people living with HIV and hypertension or diabetes access to care in Ethiopia: a phenomenological study",
            "description": "Background People living with HIV (PLWH) are more likely to develop hypertension and diabetes than people without HIV. Previous studies have shown that HIV stigma, discrimination and exclusion make it difficult for PLWH to access care for hypertension and dia…",
            "url": "https://bmjopen.bmj.com/content/14/2/e078036",
            "urlToImage": "https://bmjopen.bmj.com/pages/wp-content/uploads/sites/7/2019/07/bmjopen-default-cover.png",
            "publishedAt": "2024-02-28T07:02:41Z",
            "content": "Background\r\nMore than 38.4million people worldwide were living with HIV in 2021, with an estimated two-thirds (25.6million) residing in Africa.1 2 The sub-Saharan Africa (SSA) region is the most seve… [+17616 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sputnikglobe.com"
            },
            "author": "Sputnik International",
            "title": "Japan Starts 4th Round of Treated Water Release From Fukushima NPP",
            "description": "TOKYO (Sputnik) - Japan on Wednesday started releasing a new batch of treated water from the Fukushima nuclear power plant (NPP) in a fourth cycle that is scheduled to run through March 16, according to data from the Tokyo Electric Power Company (TEPCO).",
            "url": "https://sputnikglobe.com/20240228/japan-starts-4th-round-of-treated-water-release-from-fukushima-npp-1117032951.html",
            "urlToImage": "https://cdn1.img.sputnikglobe.com/images/sharing/article/eng/1117032951.jpg?11166410691709104188",
            "publishedAt": "2024-02-28T06:59:09Z",
            "content": "Find top stories and features from Asia and the Pacific region. Keep updated on major political stories and analyses from Asia and the Pacific. All you want to know about China, Japan, North and Sout… [+2076 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CounterPunch"
            },
            "author": "April M. Short",
            "title": "The Inspiring Movement to Build for Climate Resiliency",
            "description": "The way we build our structures and organize our cities can have a significant impact on the way we live, interact, and even survive these complex times on our planet. As the realities of climate change increase the frequency and scale of natural disasters in…",
            "url": "https://www.counterpunch.org/2024/02/28/the-inspiring-movement-to-build-for-climate-resiliency/",
            "urlToImage": "https://www.counterpunch.org/wp-content/uploads/2024/02/Screenshot-2024-02-27-at-6.03.42-PM-1-898x630.png",
            "publishedAt": "2024-02-28T06:55:44Z",
            "content": "The way we build our structures and organize our cities can have a significant impact on the way we live, interact, and even survive these complex times on our planet. As the realities of climate cha… [+18676 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "शैलेश कुमार शुक्ला",
            "title": "भारत की मदद से तालिबान ने पाकिस्‍तान को सिखाया सबक, मुनीर की चाल फेल, 20 हजार की नौकरी पर खतरा",
            "description": "Taliban India Chabahar Port Pakistan: अफगानिस्‍तान की तालिबान सरकार ने पाकिस्‍तानी सेना की नापाक चाल को भारत की मदद से फेल कर दिया है। तालिबानी सरकार ईरान के चाबहार पोर्ट से माल मंगा रही है जिसे भारत ने बनाया है। इससे पाक‍िस्‍तान के रास्‍ते अफगानिस्‍ता के व्‍…",
            "url": "https://navbharattimes.indiatimes.com/world/pakistan/india-taliban-news-afghanistan-usage-india-built-iran-chabahar-port-setback-to-pakistan-amid-ttp-threat/articleshow/108064629.cms",
            "urlToImage": "https://static.langimg.com/photo/imgsize-98538,msid-108064689/navbharat-times.jpg",
            "publishedAt": "2024-02-28T06:53:53Z",
            "content": ": , - 70 , 70 \r\n 20 !\r\n20 , , , \r\n<ul><li> IPL 5 , </li><li></li><li>Adv: , , , 65% </li><li> 10 , ! SC </li><li> , , </li><li> 7 , 5,990 </li><li> , BJP ?</li><li> , </li><li> , , </li><li> ?</li><l… [+182 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Army opens fire on Pakistani drone in J&K",
            "description": "India News: Indian Army troops guarding the Line of Control fired at a Pakistani drone that intruded into Indian territory in Poonch district of Jammu and Kashmir. The drone managed to return to Pakistan-occupied Kashmir after hovering briefly over some forwa…",
            "url": "https://timesofindia.indiatimes.com/india/indian-army-opens-fire-on-pakistani-drone-in-jammu-and-kashmir/articleshow/108062156.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108063738,width-1070,height-580,imgsize-1514388,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T06:22:46Z",
            "content": "10 types of Indian chaat to try"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "“Pakistan Zindabad” slogan in Karnataka: BJP alleges Congress indulged in ‘blasphemy’. All you need to know",
            "description": "Following the election of Congress party leader Syed Nasir Hussain as a Rajya Sabha member in Karnataka, drama ensued when allegations surfaced that some Congress members raised 'Pakistan Zindabad' slogans at the Vidhana Soudha. Police registered a suo motu F…",
            "url": "https://economictimes.indiatimes.com/news/politics-and-nation/pakistan-zindabad-slogan-in-karnataka-bjp-alleges-congress-indulged-in-blasphemy-all-you-need-to-know/articleshow/108062913.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108063124,width-1200,height-630,imgsize-20964,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T06:09:50Z",
            "content": "Drama continues to unfold in Karnataka after the Bharatiya Janata Party alleged that certain members of the Congress party raised Pakistan Zindabad slogan at the Vidhana Soudha after the latter party… [+4370 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": null,
            "title": "China steers solar module export stream towards Asia: Maguire",
            "description": "(marketscreener.com) China maintained\nits dominant grip on the export of solar panels and modules in\n2023, boosting global shipments by over a third from 2022's\ntotals, according to data compiled by energy think tank Ember.\n Total solar module exports by Chin…",
            "url": "https://www.marketscreener.com/news/latest/China-steers-solar-module-export-stream-towards-Asia-Maguire-46045156/",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
            "publishedAt": "2024-02-28T06:00:00Z",
            "content": "LITTLETON, Colorado, Feb 28 (Reuters) - China maintained\r\nits dominant grip on the export of solar panels and modules in\r\n2023, boosting global shipments by over a third from 2022's\r\ntotals, accordin… [+3305 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "योगेंद्र मिश्रा",
            "title": "चंद्रयान के बाद अब गगनयान बना पाकिस्तान का नया दर्द, अपनी सरकार पर भड़के पाकिस्तानी, ये रहा रिएक्शन",
            "description": "Pakistan Space News: भारत को अंतरिक्ष में एक नई कामयाबी मिलने वाली है। भारत अपने गगनयान मिशन के जरिए चार अंतरिक्ष यात्रियों को स्पेस में भेजेगा। इसकी खबर सामने आने के बाद पाकिस्तानी अपनी सरकार को कोस रहे हैं। वह एक बार फिर अपनी सरकार से कह रहे हैं कि उन्हें भ…",
            "url": "https://navbharattimes.indiatimes.com/world/pakistan/pakistani-reaction-on-gaganyaan-mission-india-isro-vs-suparco-chandrayaan-moon-landing/articleshow/108062301.cms",
            "urlToImage": "https://static.langimg.com/photo/imgsize-64986,msid-108062967/navbharat-times.jpg",
            "publishedAt": "2024-02-28T05:58:52Z",
            "content": ": -2 3 , (SUPARCO) , , ? 100 \r\n , ' ' , , , ' 100 '\r\n , ' , ' , ' ' \r\n<ul><li> , BJP ?</li><li></li><li>Adv: , , , 65% </li><li> , PM </li><li> , , </li><li> 7 , 5,990 </li><li> , ... MLA BJP </li><l… [+231 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Les-crises.fr"
            },
            "author": "Les-crises.fr DT",
            "title": "Imran Khan condamné à 10 ans de prison pour avoir divulgué des secrets d’État",
            "description": "L’ancien Premier ministre pakistanais a qualifié son procès de « plaisanterie » dans un contexte de répression contre son parti politique à l’approche des élections. Source : The Guardian, Hannah Ellis-PetersenTraduit par les lecteurs du site Les-Crises L’anc…",
            "url": "https://www.les-crises.fr/imran-khan-condamne-a-10-ans-de-prison-pour-avoir-divulgue-des-secrets-d-etat/",
            "urlToImage": "https://www.les-crises.fr/wp-content/uploads/2024/02/0-8.jpeg",
            "publishedAt": "2024-02-28T05:55:19Z",
            "content": "L’ancien Premier ministre pakistanais a qualifié son procès de « plaisanterie » dans un contexte de répression contre son parti politique à l’approche des élections.\r\nSource : The Guardian, Hannah El… [+6598 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Statetimes.in"
            },
            "author": "statetimes_editor",
            "title": "Army opens fire on Pakistani drone in J&K",
            "description": "Mendhar/Jammu, Feb 28 (PTI) Army troops guarding the Line of Control fired nearly two dozen rounds at a Pakistani drone after it intruded into Indian territory in Poonch district of Jammu and Kashmir, officials said on Wednesday. However, the drone managed to…",
            "url": "https://statetimes.in/army-opens-fire-on-pakistani-drone-in-jk/",
            "urlToImage": "https://statetimes.in/wp-content/uploads/2022/06/Drone.jpg",
            "publishedAt": "2024-02-28T05:43:36Z",
            "content": "Mendhar/Jammu, Feb 28 (PTI) Army troops guarding the Line of Control fired nearly two dozen rounds at a Pakistani drone after it intruded into Indian territory in Poonch district of Jammu and Kashmir… [+656 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "अचलेंद्र कटियार",
            "title": "गुजरात में पाेरबंदर के पास पकड़ा गया 3100 किलोग्राम ड्रग, भारतीय समंदर में अब तक की सबसे बड़ी बरामदगी",
            "description": "​Indian Navy News: भारतीय नौसेना ने गुजरात एटीएस, भारतीय कोस्टगार्ड और एनसीबी के साथ मिलकर गुजरात के पोरबंदर में ड्रग की बड़ी खेप पकड़ी है। ज्वाइंट ऑपरेशन में 3100 किलोग्राम ड्रग्स पकड़ा गया है। एजेंसियों के अनुसार यह भारतीय उपमहाद्वीप में नशीले पदार्थों की अब …",
            "url": "https://navbharattimes.indiatimes.com/state/gujarat/ahmedabad/india-navy-seizes-3100-kg-drug-in-joint-operation-with-gujarat-ats-near-porbandar-coast/articleshow/108060943.cms",
            "urlToImage": "https://static.langimg.com/photo/imgsize-100912,msid-108061031/navbharat-times.jpg",
            "publishedAt": "2024-02-28T05:17:07Z",
            "content": ": 3100 2000 , \r\n, , , 5 , , ?5 'Produce of Pakistan' 2950 (Hashish), 160 Methamphetamine , 25 Morphine , , \r\n<ul><li> , 9 </li><li></li><li>Adv: , 55% </li><li>, BJP ! , </li><li>\r\n15 10 , </li><li> … [+198 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Juancole.com"
            },
            "author": "Juan Cole",
            "title": "Four Ways AI could Help us Respond to Climate Change",
            "description": "By Lakshmi Babu Saheer, Anglia Ruskin University | - Advanced AI systems are coming under increasing critcism for how much energy they use. But it’s important to remember that AI could also contribute in various ways to our response to climate change. Climate…",
            "url": "https://www.juancole.com/2024/02/respond-climate-change.html",
            "urlToImage": "https://media.juancole.com/images/2024/02/IMG_1814-750x492-1.jpg",
            "publishedAt": "2024-02-28T05:06:31Z",
            "content": "By Lakshmi Babu Saheer, Anglia Ruskin University | – \r\nAdvanced AI systems are coming under increasing critcism for how much energy they use. But its important to remember that AI could also contribu… [+4122 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Juancole.com"
            },
            "author": "Andrea Mazzarino",
            "title": "The October 7th America has Forgotten: and the War Deaths we no Longer Protest (or Even Think About)",
            "description": "(Tomdispatch.com ) - We Americans have been at war now since October 7th, 2001. That was when our military first launched air strikes against the Taliban in Afghanistan in response to al-Qaeda’s September 11th terrorist attacks in New York and Washington, D.C…",
            "url": "https://www.juancole.com/2024/02/october-america-forgotten.html",
            "urlToImage": "https://media.juancole.com/images/2021/07/1Screen-Shot-2021-01-19-at-12.38.38-PM.png",
            "publishedAt": "2024-02-28T05:02:57Z",
            "content": "(Tomdispatch.com ) – We Americans have been at war now since October 7th, 2001. That was when our military first launched air strikes against the Taliban in Afghanistan in response to al-Qaeda’s Sept… [+12249 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cdc.gov"
            },
            "author": null,
            "title": "Crimean-Congo Hemorrhagic Fever Virus Diversity and Reassortment, Pakistan, 2017–2020",
            "description": "Crimean-Congo Hemorrhagic Fever Virus, Pakistan",
            "url": "https://wwwnc.cdc.gov/eid/article/30/4/23-1155_article",
            "urlToImage": "https://wwwnc.cdc.gov/eid/images/og-eid-logo-2.jpg",
            "publishedAt": "2024-02-28T05:00:00Z",
            "content": "Disclaimer: Early release articles are not considered as final versions. Any changes will be reflected in the online version in the month the article is officially released.Crimean-Congo hemorrhagic … [+20499 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AllAfrica - Top Africa News"
            },
            "author": null,
            "title": "Former Army Chief Gen Nyamvumba Appointed Envoy to Tanzania",
            "description": "[New Times] Former army chief and Minister of Internal Security Gen Patrick Nyamvumba has been appointed High Commissioner of Rwanda to Tanzania pending approvals.",
            "url": "https://allafrica.com/stories/202402280025.html",
            "urlToImage": "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
            "publishedAt": "2024-02-28T04:47:02Z",
            "content": "Former army chief and Minister of Internal Security Gen Patrick Nyamvumba has been appointed High Commissioner of Rwanda to Tanzania pending approvals.\r\nA cabinet meeting on Tuesday, February 27, mad… [+1377 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "Associated Press",
            "title": "Pakistani ex-Premier Nawaz Sharif’s daughter takes over top provincial post. Rivals boycott her",
            "description": "The eldest daughter and close aide of Pakistan’s former Prime Minister Nawaz Sharif on Monday became the country’s first-ever female chief minister in eastern Punjab province.",
            "url": "https://www.businesstoday.in/latest/world/story/pakistani-ex-premier-nawaz-sharifs-daughter-takes-over-top-provincial-post-rivals-boycott-her-419250-2024-02-28",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65deb8078eb95-mariam-nawaz-makes-history-as-pakistans-first-female-chief-minister-in-punjab-amid-accusations-of-283517981-16x9.jpg",
            "publishedAt": "2024-02-28T04:35:57Z",
            "content": "The eldest daughter and close aide of Pakistans former Prime Minister Nawaz Sharif on Monday became the countrys first-ever female chief minister in eastern Punjab province. Her rivals accused author… [+2632 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Yudhvir Rana",
            "title": "Maryam Nawaz's rise revives hope for Guru Nanak chair",
            "description": "Renewed hope for the revival of the Baba Guru Nanak research chair at Punjab University in Lahore. Sarbat Da Bhala Charitable Trust plans to cover the cost of running the chair and conduct philanthropic activities in Pakistan. Maryam Nawaz's help is sought to…",
            "url": "https://timesofindia.indiatimes.com/city/amritsar/maryam-nawazs-rise-revives-hope-for-guru-nanak-chair/articleshow/108059524.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108059588,width-1070,height-580,imgsize-33264,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T04:12:38Z",
            "content": "15 Bollywood celebrities who own restaurants in Mumbai"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Pro-Pakistan slogans at Vidhan Soudha: 'Let the police investigate it', Dr Syed Naseer Hussain issues clarification",
            "description": "Bengaluru: While speaking on the complaint filed by Karnataka BJP alleging that the supporters of Dr Syed Naseer Hussain raised the Pro-Pakistan slogans at Vidhana Soudha, Congress leader Dr Syed Naseer Hussain issued a clarification and said that he never he…",
            "url": "https://economictimes.indiatimes.com/news/politics-and-nation/pro-pakistan-slogans-at-vidhan-soudha-let-the-police-investigate-it-dr-syed-naseer-hussain-issues-clarification/videoshow/108059445.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108059445,width-1070,height-580,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T04:06:11Z",
            "content": "Bengaluru: While speaking on the complaint filed by Karnataka BJP alleging that the supporters of Dr Syed Naseer Hussain raised the Pro-Pakistan slogans at Vidhana Soudha, Congress leader Dr Syed Nas… [+223 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Courrier International"
            },
            "author": null,
            "title": "Ces modérateurs de contenu pakistanais qui rêvent de changer de carrière",
            "description": "Largement popularisé pendant la pandémie, le métier de modérateur de contenu pour des plateformes chinoises est une source d’emploi importante au Pakistan. Pourtant, les travailleurs se plaignent d’un travail éprouvant et difficile à quitter.",
            "url": "https://www.courrierinternational.com/article/travail-ces-moderateurs-de-contenu-pakistanais-qui-revent-de-changer-de-carriere",
            "urlToImage": "https://focus.courrierinternational.com/2024/02/23/0/0/1620/1080/1200/630/60/0/bbec6e9_1708697368826-075-arriens-notitle230311-npxq3-1.jpg",
            "publishedAt": "2024-02-28T04:00:18Z",
            "content": "Ils sont diplômés en ingénierie, en sciences de lenvironnement, ou en gestion dentreprise, et ils visaient des carrières dans le monde de la tech. Faute de perspectives professionnelles dans leur pay… [+2009 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Mir creates PSL history with six-wicket haul as Multan crush Lahore",
            "description": "Usama Mir became the first spinner to achieve a six-wicket haul in the Pakistan Super League, leading Multan Sultans to a historic victory over Lahore Qalandars. Despite resting key players, the Sultans posted the highest score of the season, thanks to Usman …",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/usama-mir-creates-psl-history-with-six-wicket-haul-as-multan-sultans-crush-lahore-qalandars/articleshow/108058793.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108058966,width-1070,height-580,imgsize-42206,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T03:49:38Z",
            "content": "Neeraj, Shami headline Times of India Sports Awards"
        },
        {
            "source": {
                "id": null,
                "name": "Aajtak.in"
            },
            "author": "aajtak.in",
            "title": "Aaj Ki Taza Khabar: पढ़ें 28 फरवरी 2024 की सुबह की टॉप खबरें और अन्य समाचार",
            "description": "आज सुबह की ताजा खबर (Aaj Ki Taza Khabar), 28 फरवरी 2024 की खबरें और समाचार: हिमाचल प्रदेश में क्रॉस वोटिंग होने के कारण बीजेपी का उम्मीदवार जीतने में कामयाब रहा और कांग्रेस के अभिषेक मनु सिंघवी राज्यसभा चुनाव हार गए. वहीं, गुजरात के कच्छ से सेना और गुजरात एटी…",
            "url": "https://www.aajtak.in/india/news/story/aaj-ki-taza-khabar-28-february-2024-latest-taaja-samachar-live-news-updates-in-hindi-ntc-1888392-2024-02-28",
            "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202402/65deaa8cd80cf-abhishek-manu-singhvi-283747585-16x9.jpg",
            "publishedAt": "2024-02-28T03:32:18Z",
            "content": ". , . , 5 ...\r\n1. ?\r\n , . - . . 6 . 68 35 . 40 25. 6 . . .\r\n2. ' , ', \r\n . . .\r\n3. 3100 , 2000 ... \r\n . . 'Produce of Pakistan' . 2950 (Hashish), 160 (Methamphetamine), 25kg (Morphine) .\r\n4. , BJP \r\n… [+68 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Samsung.com"
            },
            "author": "Samsung Newsroom",
            "title": "Samsung Knox Receives CC Certification for High Security Standards on 2024 TVs",
            "description": "Samsung Electronics today announced that Samsung Knox, the trusted security solution integrated into its 2024 TVs, has achieved Common Criteria (CC)",
            "url": "https://news.samsung.com/global/samsung-knox-receives-cc-certification-for-high-security-standards-on-2024-tvs",
            "urlToImage": "https://img.global.news.samsung.com/global/wp-content/uploads/2024/02/Samsung-Knox-CC-Certification_thumb728.jpg",
            "publishedAt": "2024-02-28T03:08:49Z",
            "content": "Samsung Electronics today announced that Samsung Knox, the trusted security solution integrated into its 2024 TVs, has achieved Common Criteria (CC) certification ahead of product launch.\r\nThe CC cer… [+2470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Khabarhub.com"
            },
            "author": "Khabarhub",
            "title": "Pakistani court indicts ex-PM Khan, wife in graft case",
            "description": "ISLAMABAD: An anti-corruption court in Pakistan indicted former Prime Minister Imran Khan and his wife Tuesday on charges that he had received land as a bribe while in office. The trial was conducted in a prison center near the capital, Islamabad, where Khan …",
            "url": "https://english.khabarhub.com/2024/28/343198/",
            "urlToImage": "https://english.khabarhub.com/wp-content/uploads/2024/02/Screenshot-2024-02-28-082622.jpg",
            "publishedAt": "2024-02-28T02:42:09Z",
            "content": "FILE - Pakistan's former Prime Minister Imran Khan, right, and his wife, Bushra Bibi, speak to the media at a court in Lahore, Pakistan, July 17, 2023. A Pakistani court on Feb. 27, 2024, indicted Kh… [+4608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nep123.com"
            },
            "author": "Editor",
            "title": "Controversial Question: Are ancient events of the Indian subcontinent part of our history?",
            "description": "Hi everyone, I am curious to know your opinions on a very sensitive and controversial topic mentioned above. Some of the ancient events of the Indian subcontinent, such as the Indus Valley Civilization, the arrival of Indo-Iranian people from Central Asia, th…",
            "url": "https://nep123.com/controversial-question-are-ancient-events-of-the-indian-subcontinent-part-of-our-history/",
            "urlToImage": "https://i0.wp.com/nep123.com/wp-content/uploads/2023/01/Deafult_Featured_Nepal123.png",
            "publishedAt": "2024-02-28T02:39:42Z",
            "content": "Hi everyone, I am curious to know your opinions on a very sensitive and controversial topic mentioned above.\r\nSome of the ancient events of the Indian subcontinent, such as the Indus Valley Civilizat… [+1936 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Statetimes.in"
            },
            "author": "statetimes_editor",
            "title": "Entire terror ecosystem in J&K will soon be completely dismantled: LG",
            "description": "‘Today, in Kashmir youth play guitar on Jhelum banks, Pattharbazi thing of past’ STATE TIMES NEWS New Delhi: Exuding confidence that entire terror ecosystem will be completely dismantled soon, Lieutenant Governor Manoj Sinha on Tuesday said that the people wi…",
            "url": "https://statetimes.in/entire-terror-ecosystem-in-jk-will-soon-be-completely-dismantled-lg/",
            "urlToImage": "https://statetimes.in/wp-content/uploads/2024/02/LGGGGGG.jpeg",
            "publishedAt": "2024-02-28T02:38:22Z",
            "content": "STATE TIMES NEWS\r\nNew Delhi: Exuding confidence that entire terror ecosystem will be completely dismantled soon, Lieutenant Governor Manoj Sinha on Tuesday said that the people will see that Jammu an… [+4777 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aajtak.in"
            },
            "author": "कौशिक कांठेचा, ब्रिजेश दोशी",
            "title": "3100 किलो ड्रग्स, 2000 करोड़ कीमत... गुजरात के समंदर से पकड़ी गई सबसे बड़ी खेप, Pakistan से भी कनेक्शन",
            "description": "गुजरात के समंदर से ड्रग्स की बड़ी खेप पकड़ी गई है. इस खेप की अंतरराष्ट्रीय बाजार में कीमत दो हजार करोड़ रुपए है. पकड़े गए ड्रग्स के जखीरे पर 'Produce of Pakistan' लिखा हुआ है. इसमें 2950 किलो हशीश (Hashish), 160 किलो मेथमफेटामाइन (Methamphetamine), 25kg मॉर्फ…",
            "url": "https://www.aajtak.in/india/news/story/gujarat-kutch-largest-seizure-of-narcotics-in-the-indian-subcontinent-ntc-1888379-2024-02-28",
            "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202402/65dea479dd3b9-seizure-of-narcotics-281152607-16x9.png",
            "publishedAt": "2024-02-28T02:32:51Z",
            "content": ", . 3100 . . 2000 . .\r\n . . . . . 5 . , .\r\n2950 \r\n . , . 'Produce of Pakistan' . 2950 (Hashish), 160 (Methamphetamine), 25kg (Morphine) .\r\n. , ."
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ANI",
            "title": "Karnataka: Naseer Hussain calls for inqury into alleged pro-Pak sloganeering by Congress supporters in Vidhana Soudha",
            "description": "Syed Naseer Hussain clarifies pro-Pakistan sloganeering video. Supporters raised slogans like 'Naseer Hussain Zindabad', 'Naseer Khan Zindabad', 'Naseer Sahab Zindabad', 'Congress Party Zindabad'. Police investigation requested. Union Minister Pralhad Joshi c…",
            "url": "https://economictimes.indiatimes.com/news/politics-and-nation/karnataka-naseer-hussain-calls-for-inqury-into-alleged-pro-pak-sloganeering-by-congress-supporters-in-vidhana-soudha/articleshow/108056752.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108056754,width-1200,height-630,imgsize-20964,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-28T02:31:42Z",
            "content": "Rajya Sabha member Syed Naseer Hussain posted a video in 'clarification' of alleged pro-Pakistan sloganeering in the state's Vidhana Soudha by his supporters during celebration following his victory … [+4512 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Man held in Rajasthan for sharing info with Pakistan woman spies",
            "description": "India News: Rajasthan police's intelligence wing, in collaboration with military intelligence Bikaner, has arrested an individual on charges of spying for a Pakistani intelligence agency. Vikram Singh (31) was arrested from Upper Ka Bas village. He was sharin…",
            "url": "https://timesofindia.indiatimes.com/india/man-held-in-rajasthan-for-sharing-info-with-pakistan-woman-spies/articleshow/108056677.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T02:26:59Z",
            "content": "10 body language cues to know if someone is lying, as per psychology"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Man booked for 'Pakistan zindabad' slogan in Vidhana Soudha",
            "description": "Police registered an FIR against an unidentified man for shouting 'Pakistan zindabad' in Vidhana Soudha. BJP MLC filed a complaint against Congress MP Hussain alleging his supporters shouted. Police registered a case under IPC sections 505 and 153B.",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/man-booked-for-shouting-pakistan-zindabad-in-vidhana-soudha/articleshow/108056604.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108056643,width-1070,height-580,imgsize-26852,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T02:24:27Z",
            "content": "Intriguing facts about Rishab Shetty's 'Kantara'"
        },
        {
            "source": {
                "id": null,
                "name": "Peoplesreview.com.np"
            },
            "author": "peoples_12ad",
            "title": "Democracy, election, and global politics",
            "description": "By Deepak Joshi Pokhrel\n  \nThe year 2024 has been dubbed the global year of elections. More than 50 countries will exercise their democratic franchise, with elections in some countries being held. Over three billion people, or more than 40 percent global popu…",
            "url": "https://www.peoplesreview.com.np/2024/02/28/democracy-election-and-global-politics/",
            "urlToImage": "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2022/03/Deepak-Joshi.jpg?fit=102%2C134&ssl=1",
            "publishedAt": "2024-02-28T01:38:26Z",
            "content": "By Deepak Joshi Pokhrel\r\nThe year 2024 has been dubbed the global year of elections. More than 50 countries will exercise their democratic franchise, with elections in some countries being held. Over… [+5660 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rlsbb.ru"
            },
            "author": "Robotnico",
            "title": "On Assignment S11E02 1080p HDTV H264-DARKFLiX",
            "description": "Season 11, Episode 02 – Rageh Omaar returns to Lithuania to speak to the citizens of the country offering unwavering support to Ukraine two years on from Russia's invasion. Louise Scott is in Sardinia to investigate how low birth rates are contributing to Ita…",
            "url": "https://rlsbb.ru/on-assignment-s11e02-1080p-hdtv-h264-darkflix/",
            "urlToImage": null,
            "publishedAt": "2024-02-28T01:31:48Z",
            "content": "Season 11, Episode 02 Rageh Omaar returns to Lithuania to speak to the citizens of the country offering unwavering support to Ukraine two years on from Russia's invasion. Louise Scott is in Sardinia … [+519 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rlsbb.cc"
            },
            "author": "saamaan1@yahoo.com (Master), Master",
            "title": "On Assignment S11E02 1080p HDTV H264-DARKFLiX",
            "description": "Season 11, Episode 02 – Rageh Omaar returns to Lithuania to speak to the citizens of the country offering unwavering support to Ukraine two years on from Russia's invasion. Louise Scott is in Sardinia to investigate how low birth rates are contributing to Ita…",
            "url": "https://rlsbb.cc/on-assignment-s11e02-1080p-hdtv-h264-darkflix/",
            "urlToImage": null,
            "publishedAt": "2024-02-28T01:31:48Z",
            "content": "Season 11, Episode 02 Rageh Omaar returns to Lithuania to speak to the citizens of the country offering unwavering support to Ukraine two years on from Russia's invasion. Louise Scott is in Sardinia … [+519 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Sarah Rumpf-Whitten",
            "title": "Sneaky rat scurries onboard commercial plane, disrupting travel for days",
            "description": "SriLankan Airlines officials said that an airplane was grounded for three days after a stowaway rat was found onboard during a flight.",
            "url": "https://www.foxnews.com/world/sneaky-rat-scurries-onboard-commercial-plane-disrupting-travel-days",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/s1.jpg",
            "publishedAt": "2024-02-28T01:05:47Z",
            "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+2130 chars]"
        },
        {
            "source": {
                "id": "the-jerusalem-post",
                "name": "The Jerusalem Post"
            },
            "author": "BY ARSHAD MEHMOOD/THE MEDIA LINE",
            "title": "X remains banned in Pakistan following controversial elections",
            "description": "Despite a High Court order and widespread international criticism, Pakistani authorities have not yet lifted the ban on X.",
            "url": "https://www.jpost.com/middle-east/article-789274",
            "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/577496",
            "publishedAt": "2024-02-28T00:49:26Z",
            "content": "The social media platform X, formerly known as Twitter, remains largely inaccessible in Pakistan as the government’s ban on the platform continues for a 10th day.\r\nFor more stories from The Media Lin… [+6054 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Omer Farooq",
            "title": "Pakistan court indicts Imran, his wife in land graft case",
            "description": "Pakistan's anti-corruption court indicted Imran Khan and his wife, Bushra Bibi, in the Al Qadir Trust case. They were accused of obtaining cash and land for an educational institute in exchange for legal cover for misused money.",
            "url": "https://timesofindia.indiatimes.com/world/pakistan/pakistan-court-indicts-imran-his-wife-in-land-graft-case/articleshow/108055811.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108055828,width-1070,height-580,imgsize-1373646,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-28T00:43:24Z",
            "content": "Shruti Haasan's fashion game is all about this gold and black contrast outfits"
        },
        {
            "source": {
                "id": null,
                "name": "New Zealand Herald"
            },
            "author": "Lillie Rohan",
            "title": "Newshub presenter shock: Ryan Bridge, Samantha Hayes, Mike McRoberts and staff learn of closure",
            "description": "Will Newshubs most high-profile names lose their jobs?",
            "url": "https://www.nzherald.co.nz/entertainment/newshub-presenter-shock-ryan-bridge-samantha-hayes-mike-mcroberts-and-staff-learn-of-closure/HC6BBRWN6BEADGWCKQLYP4Q53Q/",
            "urlToImage": "https://www.nzherald.co.nz/resizer/UnFoAKD89I-fWpWKYVS1MxyflVk=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/HDRVD2R2QFDHTK7RKS57EOW5WM.jpg",
            "publishedAt": "2024-02-28T00:38:06Z",
            "content": "Patrick Gower, Samantha Hayes and Ryan Bridge are just three of the well respected journalists who could lose their jobs following the closure of Newshub. Photo / Warner Bros DiscoveryWarner Bros Dis… [+7566 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Navneeta Nandan, Ratna Bhushan, Sagar Malviya",
            "title": "The 10-minute challenge: Quick-commerce becomes the villain for neighbourhood kirana stores",
            "description": "Quick commerce companies now make up 40-50% of all e-commerce sales of FMCG firms and they pose an existential threat to both neighbourhood kirana stores as well as big e-comm players. Here’s what makes them tick.",
            "url": "https://economictimes.indiatimes.com/tech/technology/the-10-minute-challenge-quick-commerce-becomes-the-villain-for-neighbourhood-kirana-stores/articleshow/108051948.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108051985,width-1200,height-630,imgsize-192538,overlay-ettech/photo.jpg",
            "publishedAt": "2024-02-28T00:30:00Z",
            "content": "Naresh Singh Shekhawat runs a grocery store NMart in one of the upscale condominiums of Gurgaon. He hadrelocated from his home state of Rajasthan to the National Capital Region (NCR) in search of a f… [+6893 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            data: this.articles
        }
    }
    render() {

        return (
            <div className='container'>
                <div className="row my-3 d-flex justify-content-between">
                    {this.state.data.map((data) => {
                        return <div className="col-md-3" key={data.url}>
                            <NewsItem title={data.title} description={data.description} url={data.url} urlToImage={data.urlToImage} />
                        </div>
                    })}
                </div>

            </div>
        )
    }
}
export default News
