import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.users ? JSON.parse(localStorage.users) : [
      {
        username: 'Admin',
        password: 'Esmad_2122',
        type: 'admin'
      },
      {
        username: 'User',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'pt',
        points: 70,
        favorites: [],
        watchedFilms: [],
        watchedSeries: []
      },
      {
        username: 'User1',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'fr',
        points: 60,
        photo: 'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/01/31/timotheechalamet.jpg',
        favorites: [],
        watchedFilms: [],
        watchedSeries: []
      },
      {
        username: 'User2',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'it',
        points: 50,
        photo: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/8/9/f/6/89f6af6c672801fbcf9cfce8c69e217a.jpg',
        favorites: [],
        watchedFilms: [],
        watchedSeries: []
      },
    ],
    loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
    films: localStorage.films ? JSON.parse(localStorage.films) : [
      {
        id: 1,
        title: '007: No Time to Die',
        year: 2021,
        time: '2h 43m',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/vw2FOYjCz38',
        imdbScore: '7.4',
        genre: ['Action', 'Adventure', 'Thriller'],
        sipnose: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
        director: [{
          id: 1,
          name: 'Cary Joji Fukunaga',
        }],
        actors: [{
          id: 1,
          name: 'Daniel Craig',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg'
        }, {
          id: 2,
          name: 'Rami Malek',
          photo: 'https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_UY1200_CR88,0,630,1200_AL_.jpg'
        }, {
          id: 3,
          name: 'Léa Seydoux',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjM3MTczNzY1MF5BMl5BanBnXkFtZTgwNjgwODgzNDE@._V1_.jpg'
        }, {
          id: 4,
          name: 'Lashana Lynch',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjI0ZGE0ZTYtYmY1MS00MGU0LWEwMDQtMzYxMDFmMmFjZjUyXkEyXkFqcGdeQXVyMzczOTY5ODk@._V1_.jpg'
        }, {
          id: 5,
          name: 'Ana de Armas',
          photo: 'https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR585,0,630,1200_AL_.jpg'
        },],
        whereWatch: [{ Where_to_watch: 'Amazon' }],
      },
      {
        id: 2,
        title: 'Knives Out',
        year: 2019,
        time: '2h 10m',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/xi-1NchUqMA',
        imdbScore: '7.9',
        genre: ['Comedy', 'Crime', 'Drama'],
        sipnose: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        director: [{
          id: 2,
          name: 'Rian Johnson',
        }],
        actors: [{
          id: 1,
          name: 'Daniel Craig',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg'
        }, {
          id: 5,
          name: 'Ana de Armas',
          photo: 'https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR585,0,630,1200_AL_.jpg'
        }, {
          id: 6,
          name: 'Chris Evans',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY1200_CR112,0,630,1200_AL_.jpg'
        }, {
          id: 7,
          name: 'Jamie Lee Curtis',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjI0MTI0MDk2OV5BMl5BanBnXkFtZTgwODQ4MTE0NDE@._V1_UY1200_CR136,0,630,1200_AL_.jpg'
        }, {
          id: 8,
          name: 'Michael Shannon',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjE0NzM5MTc5OF5BMl5BanBnXkFtZTgwMjc3ODYxODE@._V1_.jpg',
        },],
        whereWatch: [{ Where_to_watch: 'Amazon' }],
      },
      {
        id: 3,
        title: 'The Karate Kid',
        year: 1984,
        time: '2h 06m',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/embed/xlnm0NtPoVs',
        imdbScore: '7.3',
        genre: ['Action', 'Family', 'Drama'],
        sipnose: "A martial arts master agrees to teach karate to a bullied teenager.",
        director: [{
          id: 3,
          name: 'John G. Avildsen',
        }],
        actors: [{
          id: 9,
          name: 'Ralph Macchio',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjExMjk0NTA5MF5BMl5BanBnXkFtZTcwMjM4MzU1Mw@@._V1_UY1200_CR103,0,630,1200_AL_.jpg'
        }, {
          id: 10,
          name: 'Pat Morita',
          photo: 'https://m.media-amazon.com/images/M/MV5BODIyNzYwNjE4NV5BMl5BanBnXkFtZTcwNzA3MzQ3Mw@@._V1_UY1200_CR99,0,630,1200_AL_.jpg'
        }, {
          id: 11,
          name: 'William Zabka',
          photo: 'https://m.media-amazon.com/images/M/MV5BMzlkODQ0ODMtYmQ5NS00MWZhLTlkMjAtYTMwYzg5MjNkNmFmXkEyXkFqcGdeQXVyMjUwNzgxNjk@._V1_UY1200_CR174,0,630,1200_AL_.jpg'
        }, {
          id: 12,
          name: 'Elisabeth Shue',
          photo: 'https://static.tvtropes.org/pmwiki/pub/images/elizabeth_shue_2012.jpeg'
        }, {
          id: 13,
          name: 'Martin Kove',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Martin_Kove_%2844524134200%29.jpg',
        },],
        whereWatch: [{ Where_to_watch: 'Netflix' }],
      },
      {
        id: 4,
        title: 'Matrix',
        year: 1999,
        time: '2h 16m',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/embed/m8e-FF8MsqU',
        imdbScore: '8.7',
        genre: ['Action', 'Sci-Fi'],
        sipnose: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        director: [{
          id: 4,
          name: 'Lana Wachowski',
        }, {
          id: 5,
          name: 'Lily Wachowski'
        }],
        actors: [{
          id: 14,
          name: 'Keanu Reeves',
          photo: 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg'
        }, {
          id: 15,
          name: 'Laurence Fishburne',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTc0NjczNDc1MV5BMl5BanBnXkFtZTYwMDU0Mjg1._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          id: 16,
          name: 'Carrie-Anne Moss',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTYxMjgwNzEwOF5BMl5BanBnXkFtZTcwNTQ0NzI5Ng@@._V1_UY1200_CR138,0,630,1200_AL_.jpg'
        }, {
          id: 17,
          name: 'Hugo Weaving',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjAxMzAyNDQyMF5BMl5BanBnXkFtZTcwOTM4ODcxMw@@._V1_UY1200_CR106,0,630,1200_AL_.jpg'
        }, {
          id: 18,
          name: 'Joe Pantoliano',
          photo: 'https://m.media-amazon.com/images/M/MV5BODBlYWY1MWUtZDdmYS00Y2VkLThmNDEtNGE4ZDAzNjk5NmI1XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UY1200_CR170,0,630,1200_AL_.jpg',
        },],
        whereWatch: [{ Where_to_watch: 'HBO' }],
      },
      {
        id: 5,
        title: 'Encanto',
        year: 2021,
        time: '1h 42m',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/togmdDHG3Pw',
        imdbScore: '7.3',
        genre: ['Animation', 'Adventure', 'Comedy'],
        sipnose: "A young Colombian girl has to face the frustration of being the only member of her family without magical powers.",
        director: [{
          id: 6,
          name: 'Jared Bush',
        }, {
          id: 7,
          name: 'Byron Howard'
        }],
        actors: [{
          id: 19,
          name: 'Stephanie Beatriz',
          photo: 'https://m.media-amazon.com/images/M/MV5BYWY3ZGQ0OGUtZDNjYi00MmRkLWE4YmMtYzk3MzAwZjQxMDRlXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR557,0,630,1200_AL_.jpg'
        }, {
          id: 20,
          name: 'María Cecilia Botero',
          photo: 'https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/335575/335575_173x253.jpg'
        }, {
          id: 21,
          name: 'John Leguizamo',
          photo: 'https://m.media-amazon.com/images/M/MV5BNTEyMjMxNDg5NF5BMl5BanBnXkFtZTcwNzczOTY4MQ@@._V1_UY1200_CR172,0,630,1200_AL_.jpg'
        }, {
          id: 22,
          name: 'Wilmer Valderrama',
          photo: 'https://m.media-amazon.com/images/M/MV5BY2U2NDkyMGYtNzg3YS00YmU0LTkyNzEtNWE5YzM0NmM1NzI2XkEyXkFqcGdeQXVyNTE0Mzg0MzM@._V1_UY1200_CR127,0,630,1200_AL_.jpg'
        }, {
          id: 23,
          name: 'Jessica Darrow',
          photo: 'https://m.media-amazon.com/images/M/MV5BZDBkOWZjNTMtNTE0OC00ODI1LThkNDEtNzI5Nzg3OTlkMTMxXkEyXkFqcGdeQXVyNzE4Njc3NjQ@._V1_UY1200_CR165,0,630,1200_AL_.jpg',
        },],
        whereWatch: [{ Where_to_watch: 'Disney+' }],
      },
      {
        id: 6,
        title: 'Ricki and the Flash',
        year: 2015,
        time: '1h 41m',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/x8PVK6Hky2A',
        imdbScore: '5.9',
        genre: ['Comedy', 'Drama', 'Music'],
        sipnose: "A musician who gave up everything for her dream of rock-and-roll stardom returns home, looking to make things right with her family.",
        director: [{
          id: 8,
          name: 'Jonathan Demme',
        }],
        actors: [{
          id: 24,
          name: 'Meryl Streep',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg'
        }, {
          id: 25,
          name: 'Kevin Kline',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTMxMjcxMzMzMV5BMl5BanBnXkFtZTcwNjQzOTQ4Mg@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          id: 26,
          name: 'Mamie Gummer',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTc2MDk3MTI1N15BMl5BanBnXkFtZTcwMDM0NjM1Mg@@._V1_UY1200_CR93,0,630,1200_AL_.jpg'
        }, {
          id: 27,
          name: 'Sebastian Stan',
          photo: 'https://m.media-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY1200_CR146,0,630,1200_AL_.jpg'
        }, {
          id: 28,
          name: 'Rick Springfield',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjAzMzkxMzAwOF5BMl5BanBnXkFtZTcwMDk1MzMxMw@@._V1_.jpg',
        },],
        whereWatch: [{ Where_to_watch: 'Amazon' }],
      },
    ],
    series: localStorage.series ? JSON.parse(localStorage.series) : [
      {
        id: 7,
        title: 'Friends',
        year: '1994 - 2004',
        time: '22m',
        seasons: 10,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/embed/nnn02NDIEiE',
        imdbScore: '8.8',
        genre: ['Comedy', 'Romance'],
        sipnose: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
        director: [{
          id: 9,
          name: 'David Crane',
        }, {
          id: 10,
          name: 'Marta Kauffman',
        }],
        actors: [{
          id: 29,
          name: 'Jennifer Anniston',
          photo: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY1200_CR103,0,630,1200_AL_.jpg'
        }, {
          id: 30,
          name: 'Courteney Cox',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_.jpg'
        }, {
          id: 31,
          name: 'Lisa Kudrow',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY264_CR7,0,178,264_AL_.jpg'
        }, {
          id: 32,
          name: 'Matt LeBlanc',
          photo: 'https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UY1200_CR54,0,630,1200_AL_.jpg'
        }, {
          id: 33,
          name: 'Matthew Perry',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY1200_CR156,0,630,1200_AL_.jpg'
        }, {
          id: 34,
          name: 'David Schwimmer',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_.jpg'
        }],
        whereWatch: [{ Where_to_watch: 'HBO' }],
      },
      {
        id: 8,
        title: 'Bad and Crazy',
        year: '2021 -',
        time: '1h 10m',
        seasons: 1,
        poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/vLOQkT2B_rk',
        imdbScore: '8.7',
        genre: ['Action', 'Crime', 'Fantasy'],
        sipnose: 'A heroic drama that follows capable but bad cop Ryoo Soo-yeol regaining his humanity after meeting the righteous but crazy "K".',
        director: [{
          id: 11,
          name: 'Yoo Seon-dong',
        },],
        actors: [{
          id: 35,
          name: 'Lee Dong-Wook',
          photo: 'https://m.media-amazon.com/images/M/MV5BYTc1ZTA1YmItMTIwZS00ZDczLTk1NzEtMTE4OWNkNzE5MzQyXkEyXkFqcGdeQXVyMjMxNTAxNDk@._V1_.jpg'
        }, {
          id: 36,
          name: 'Han Ji-Eun',
          photo: 'https://m.media-amazon.com/images/M/MV5BNGFjYjQyZGMtOWNkMC00ZWM3LWFhNjgtYWFlYWJjOGM4ZDU1XkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          id: 37,
          name: 'Cha Hak-yeon',
          photo: 'https://1739752386.rsc.cdn77.org/data/images/full/246914/cha-hak-yeon.jpg'
        }, {
          id: 38,
          name: 'Wi Ha-Joon',
          photo: 'https://i.mydramalist.com/xzdP0_5f.jpg'
        }, {
          id: 39,
          name: 'Kim Hieora',
          photo: 'https://asianwiki.com/images/0/03/Kim_Hieora-1989-p1.jpg'
        },],
        whereWatch: [{ Where_to_watch: 'iQIYI' }],
      },
      {
        id: 9,
        title: 'Euphoria',
        year: '2019 -',
        time: '55m',
        seasons: 2,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/embed/cajLoaFl2Zo',
        imdbScore: '8.4',
        genre: ['Drama'],
        sipnose: 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.',
        director: [{
          id: 12,
          name: 'Sam Levinson'
        }],
        actors: [{
          id: 40,
          name: 'Hunter Schafer',
          photo: 'https://m.media-amazon.com/images/M/MV5BYTE4ZmU3NTQtMWY0OC00YmQ5LThlOTEtMTc3NjcwZjMwN2QzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        }, {
          id: 41,
          name: 'Zendaya',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_UY1200_CR135,0,630,1200_AL_.jpg'
        }, {
          id: 42,
          name: 'Angus Cloud',
          photo: 'https://m.media-amazon.com/images/M/MV5BZmI3MjMxYTQtOGVlNi00MjJkLTkzYjctMWU2ZmEyZTczZjFiXkEyXkFqcGdeQXVyMTI1MTQ4MTM3._V1_.jpg'
        }, {
          id: 43,
          name: 'Sydney Sweeney',
          photo: 'https://m.media-amazon.com/images/M/MV5BOTVjOTkxNjMtNDJiYS00YzEzLThmZTItZjJhM2E4NWQyM2Q2XkEyXkFqcGdeQXVyNzM1NTU0NA@@._V1_.jpg'
        }, {
          id: 44,
          name: 'Jacob Elordi',
          photo: 'https://i.pinimg.com/originals/ed/03/d6/ed03d6c2b7225c2d8be27fabb06a7b8d.jpg'
        }],
        whereWatch: [{ Where_to_watch: 'HBO' }],
      },
      {
        id: 10,
        title: 'Peaky Blinders',
        year: '2013 - 2022',
        time: '1h',
        seasons: 5,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/2nsT9uQPIrk',
        imdbScore: '8.8',
        genre: ['Drama', 'Crime'],
        sipnose: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
        director: [{
          id: 13,
          name: 'Steven Knight',
        }],
        actors: [{
          id: 45,
          name: 'Cillian Murphy',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTMyODk0MDUyOF5BMl5BanBnXkFtZTcwNzQyODU2Mw@@._V1_.jpg'
        }, {
          id: 46,
          name: 'Paul Anderson',
          photo: 'https://m.media-amazon.com/images/M/MV5BNzQ5ZTk5MGUtYjRmYi00NTIzLWFlYjMtZjk5MGFlNTg5ODViXkEyXkFqcGdeQXVyMzIzNjk4NzM@._V1_.jpg'
        }, {
          id: 47,
          name: 'Helen McCrory',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ2MDM2OTU0MV5BMl5BanBnXkFtZTgwMDk2MTIzNTE@._V1_UY1200_CR580,0,630,1200_AL_.jpg'
        }, {
          id: 48,
          name: 'Sophie Rundle',
          photo: 'https://m.media-amazon.com/images/M/MV5BMzIwODI2NzY2OV5BMl5BanBnXkFtZTgwNDk5Mjc0ODE@._V1_.jpg'
        }, {
          id: 49,
          name: 'Ned Dennehy',
          photo: 'https://m.media-amazon.com/images/M/MV5BYzYyNjY3MTUtZWQ4MC00MjQ4LTliNTItMDMwNDczYjQyZDIzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg'
        }],
        whereWatch: [{ Where_to_watch: 'Netflix' }],
      },
      {
        id: 11,
        title: 'Killing Eve',
        year: '2018 - 2022',
        time: '42m',
        seasons: 4,
        poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/XVTZhOLpXjI',
        imdbScore: '8.8',
        genre: ['Drama', 'Action', 'Adventure'],
        sipnose: 'After a series of events, the lives of a security operative and an assassin become inextricably linked.',
        director: [{
          id: 14,
          name: 'Phoebe Waller-Bridge',
        }],
        actors: [{
          id: 50,
          name: 'Jodie Comer',
          photo: 'https://m.media-amazon.com/images/M/MV5BZmViMjQxYTUtZDExNy00NjU1LWI4MmEtY2RhODRkMzNkODM1XkEyXkFqcGdeQXVyNjkwNzEwMzY@._V1_.jpg'
        }, {
          id: 51,
          name: 'Sandra Oh',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTMyNzYyNDE4MV5BMl5BanBnXkFtZTcwOTkxMDQ2NA@@._V1_.jpg'
        }, {
          id: 52,
          name: 'Fiona Shaw',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjA0OTE5OTU2MV5BMl5BanBnXkFtZTcwNTk3NTc1NA@@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        }, {
          id: 53,
          name: 'Kim Bodnia',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjA1NzYzNzYwMl5BMl5BanBnXkFtZTgwOTY3NjI3NTM@._V1_UY1200_CR584,0,630,1200_AL_.jpg'
        }, {
          id: 54,
          name: 'Owen McDonnell',
          photo: 'https://m.media-amazon.com/images/M/MV5BOThkM2VkNzgtYjMwYi00ZmY0LTkzMTMtMWVlN2NmOWQxNGU0XkEyXkFqcGdeQXVyNDU2NjExMjg@._V1_UY1200_CR165,0,630,1200_AL_.jpg'
        }],
        whereWatch: [{ Where_to_watch: 'HBO' }],
      },
      {
        id: 12,
        title: 'Snowdrop',
        year: '2021 -',
        time: '1h 10m',
        seasons: 1,
        poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/embed/2xcdOQUOEZE',
        imdbScore: '8.8',
        genre: ['Drama', 'Romance'],
        sipnose: 'Adapted from the handwritten notes of a man who escaped from a political prison camp in North Korea, Snowdrop is set against the backdrop of the 1987 Democracy Movement in South Korea.',
        director: [{
          id: 15,
          name: 'Jo Hyun-tak',
        }],
        actors: [{
          id: 55,
          name: 'Jung Hae-In',
          photo: 'https://m.media-amazon.com/images/M/MV5BNDkyOWNkZDEtYmQ4NC00Njc0LTlhMzMtNDliMTU2ZGU0YjA4XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg'
        }, {
          id: 56,
          name: 'Kim Ji-soo',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kim_Ji-soo_at_the_Dior_Pop-Up_Store_Opening_Event_on_August_19%2C_2019_%285%29.png/220px-Kim_Ji-soo_at_the_Dior_Pop-Up_Store_Opening_Event_on_August_19%2C_2019_%285%29.png'
        }, {
          id: 57,
          name: 'Yoo In-Na',
          photo: 'https://m.media-amazon.com/images/M/MV5BZjI3ZmQ1YzktYzNjMi00NmZjLWI0ZGQtZDFiOGI1YjYxYTQ2XkEyXkFqcGdeQXVyMjMxNTAxNDk@._V1_UY1200_CR196,0,630,1200_AL_.jpg'
        }, {
          id: 58,
          name: 'Yoon Se-ah',
          photo: 'https://m.media-amazon.com/images/M/MV5BMWQwNmQzMzEtZDZhNC00YmRmLWEyOWEtMjNmMmNiYzQwOTdlXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg'
        }, {
          id: 59,
          name: 'Kim Jung-nan',
          photo: 'https://m.media-amazon.com/images/M/MV5BNGQyYjYwZTQtZmE5OS00NWI3LWFkZTMtMDZhMjVmNmI3Y2I5XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }],
        whereWatch: [{ Where_to_watch: 'Disney+' }],
      },
    ],
    actors: localStorage.actors ? JSON.parse(localStorage.actors) : [
      {
        id: 1,
        title: 'Daniel Craig',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg',
        films: [{
          id: 1,
          title: '007: No Time to Die',
          poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        }, {
          id: 2,
          title: 'Knives Out',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        }],
      }, {
        id: 2,
        title: 'Rami Malek',
        poster: 'https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_UY1200_CR88,0,630,1200_AL_.jpg',
        films: [{
          id: 1,
          title: '007: No Time to Die',
          poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        },]
      }, {
        id: 3,
        title: 'Léa Seydoux',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MTczNzY1MF5BMl5BanBnXkFtZTgwNjgwODgzNDE@._V1_.jpg',
        films: [{
          id: 1,
          title: '007: No Time to Die',
          poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        },]
      }, {
        id: 4,
        title: 'Lashana Lynch',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjI0ZGE0ZTYtYmY1MS00MGU0LWEwMDQtMzYxMDFmMmFjZjUyXkEyXkFqcGdeQXVyMzczOTY5ODk@._V1_.jpg',
        films: [{
          id: 1,
          title: '007: No Time to Die',
          poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        },]
      }, {
        id: 5,
        title: 'Ana de Armas',
        poster: 'https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR585,0,630,1200_AL_.jpg',
        films: [{
          id: 1,
          title: '007: No Time to Die',
          poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        }, {
          id: 2,
          title: 'Knives Out',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        }]
      }, {
        id: 6,
        title: 'Chris Evans',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY1200_CR112,0,630,1200_AL_.jpg',
        films: [{
          id: 2,
          title: 'Knives Out',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        }]
      }, {
        id: 7,
        title: 'Jamie Lee Curtis',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjI0MTI0MDk2OV5BMl5BanBnXkFtZTgwODQ4MTE0NDE@._V1_UY1200_CR136,0,630,1200_AL_.jpg',
        films: [{
          id: 2,
          title: 'Knives Out',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        }]
      }, {
        id: 8,
        title: 'Michael Shannon',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjE0NzM5MTc5OF5BMl5BanBnXkFtZTgwMjc3ODYxODE@._V1_.jpg',
        films: [{
          id: 2,
          title: 'Knives Out',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        }]
      }, {
        id: 9,
        title: 'Ralph Macchio',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjExMjk0NTA5MF5BMl5BanBnXkFtZTcwMjM4MzU1Mw@@._V1_UY1200_CR103,0,630,1200_AL_.jpg',
        films: [{
          id: 3,
          title: 'The Karate Kid',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 10,
        title: 'Pat Morita',
        poster: 'https://m.media-amazon.com/images/M/MV5BODIyNzYwNjE4NV5BMl5BanBnXkFtZTcwNzA3MzQ3Mw@@._V1_UY1200_CR99,0,630,1200_AL_.jpg',
        films: [{
          id: 3,
          title: 'The Karate Kid',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 11,
        title: 'William Zabka',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzlkODQ0ODMtYmQ5NS00MWZhLTlkMjAtYTMwYzg5MjNkNmFmXkEyXkFqcGdeQXVyMjUwNzgxNjk@._V1_UY1200_CR174,0,630,1200_AL_.jpg',
        films: [{
          id: 3,
          title: 'The Karate Kid',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 12,
        title: 'Elisabeth Shue',
        poster: 'https://static.tvtropes.org/pmwiki/pub/images/elizabeth_shue_2012.jpeg',
        films: [{
          id: 3,
          title: 'The Karate Kid',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 13,
        title: 'Martin Kove',
        poster: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Martin_Kove_%2844524134200%29.jpg',
        films: [{
          id: 3,
          title: 'The Karate Kid',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 14,
        title: 'Keanu Reeves',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 15,
        title: 'Laurence Fishburne',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc0NjczNDc1MV5BMl5BanBnXkFtZTYwMDU0Mjg1._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 16,
        title: 'Carrie-Anne Moss',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTYxMjgwNzEwOF5BMl5BanBnXkFtZTcwNTQ0NzI5Ng@@._V1_UY1200_CR138,0,630,1200_AL_.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 17,
        title: 'Hugo Weaving',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzAyNDQyMF5BMl5BanBnXkFtZTcwOTM4ODcxMw@@._V1_UY1200_CR106,0,630,1200_AL_.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 18,
        title: 'Joe Pantoliano',
        poster: 'https://m.media-amazon.com/images/M/MV5BODBlYWY1MWUtZDdmYS00Y2VkLThmNDEtNGE4ZDAzNjk5NmI1XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UY1200_CR170,0,630,1200_AL_.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 19,
        title: 'Stephanie Beatriz',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWY3ZGQ0OGUtZDNjYi00MmRkLWE4YmMtYzk3MzAwZjQxMDRlXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR557,0,630,1200_AL_.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },]
      }, {
        id: 20,
        title: 'María Cecilia Botero',
        poster: 'https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/335575/335575_173x253.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },]
      }, {
        id: 21,
        title: 'John Leguizamo',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTEyMjMxNDg5NF5BMl5BanBnXkFtZTcwNzczOTY4MQ@@._V1_UY1200_CR172,0,630,1200_AL_.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },]
      }, {
        id: 22,
        title: 'Wilmer Valderrama',
        poster: 'https://m.media-amazon.com/images/M/MV5BY2U2NDkyMGYtNzg3YS00YmU0LTkyNzEtNWE5YzM0NmM1NzI2XkEyXkFqcGdeQXVyNTE0Mzg0MzM@._V1_UY1200_CR127,0,630,1200_AL_.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },]
      }, {
        id: 23,
        title: 'Jessica Darrow',
        poster: 'https://m.media-amazon.com/images/M/MV5BZDBkOWZjNTMtNTE0OC00ODI1LThkNDEtNzI5Nzg3OTlkMTMxXkEyXkFqcGdeQXVyNzE4Njc3NjQ@._V1_UY1200_CR165,0,630,1200_AL_.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },]
      }, {
        id: 24,
        title: 'Meryl Streep',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg',
        films: [{
          id: 6,
          title: 'Ricki and the Flash',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        },]
      }, {
        id: 25,
        title: 'Kevin Kline',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMxMjcxMzMzMV5BMl5BanBnXkFtZTcwNjQzOTQ4Mg@@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        films: [{
          id: 6,
          title: 'Ricki and the Flash',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        },]
      }, {
        id: 26,
        title: 'Mamie Gummer',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc2MDk3MTI1N15BMl5BanBnXkFtZTcwMDM0NjM1Mg@@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
        films: [{
          id: 6,
          title: 'Ricki and the Flash',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        },]
      }, {
        id: 27,
        title: 'Sebastian Stan',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY1200_CR146,0,630,1200_AL_.jpg',
        films: [{
          id: 6,
          title: 'Ricki and the Flash',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        },]
      }, {
        id: 28,
        title: 'Rick Springfield',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAzMzkxMzAwOF5BMl5BanBnXkFtZTcwMDk1MzMxMw@@._V1_.jpg',
        films: [{
          id: 6,
          title: 'Ricki and the Flash',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        },]
      }, {
        id: 29,
        title: 'Jennifer Anniston',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY1200_CR103,0,630,1200_AL_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 30,
        title: 'Courteney Cox',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 31,
        title: 'Lisa Kudrow',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY264_CR7,0,178,264_AL_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 32,
        title: 'Matt LeBlanc',
        poster: 'https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UY1200_CR54,0,630,1200_AL_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 33,
        title: 'Matthew Perry',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY1200_CR156,0,630,1200_AL_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 34,
        title: 'David Schwimmer',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 35,
        title: 'Lee Dong-Wook',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTc1ZTA1YmItMTIwZS00ZDczLTk1NzEtMTE4OWNkNzE5MzQyXkEyXkFqcGdeQXVyMjMxNTAxNDk@._V1_.jpg',
        films: [{
          id: 8,
          title: 'Bad and Crazy',
          poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        },]
      }, {
        id: 36,
        title: 'Han Ji-Eun',
        poster: 'https://m.media-amazon.com/images/M/MV5BNGFjYjQyZGMtOWNkMC00ZWM3LWFhNjgtYWFlYWJjOGM4ZDU1XkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        films: [{
          id: 8,
          title: 'Bad and Crazy',
          poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        },]
      }, {
        id: 37,
        title: 'Cha Hak-yeon',
        poster: 'https://1739752386.rsc.cdn77.org/data/images/full/246914/cha-hak-yeon.jpg',
        films: [{
          id: 8,
          title: 'Bad and Crazy',
          poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        },]
      }, {
        id: 38,
        title: 'Wi Ha-Joon',
        poster: 'https://i.mydramalist.com/xzdP0_5f.jpg',
        films: [{
          id: 8,
          title: 'Bad and Crazy',
          poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        },]
      }, {
        id: 39,
        title: 'Kim Hieora',
        poster: 'https://asianwiki.com/images/0/03/Kim_Hieora-1989-p1.jpg',
        films: [{
          id: 8,
          title: 'Bad and Crazy',
          poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        },]
      }, {
        id: 40,
        title: 'Hunter Schafer',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTE4ZmU3NTQtMWY0OC00YmQ5LThlOTEtMTc3NjcwZjMwN2QzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
        films: [{
          id: 9,
          title: 'Euphoria',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 41,
        title: 'Zendaya',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_UY1200_CR135,0,630,1200_AL_.jpg',
        films: [{
          id: 9,
          title: 'Euphoria',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 42,
        title: 'Angus Cloud',
        poster: 'https://m.media-amazon.com/images/M/MV5BZmI3MjMxYTQtOGVlNi00MjJkLTkzYjctMWU2ZmEyZTczZjFiXkEyXkFqcGdeQXVyMTI1MTQ4MTM3._V1_.jpg',
        films: [{
          id: 9,
          title: 'Euphoria',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 43,
        title: 'Sydney Sweeney',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTVjOTkxNjMtNDJiYS00YzEzLThmZTItZjJhM2E4NWQyM2Q2XkEyXkFqcGdeQXVyNzM1NTU0NA@@._V1_.jpg',
        films: [{
          id: 9,
          title: 'Euphoria',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 44,
        title: 'Jacob Elordi',
        poster: 'https://i.pinimg.com/originals/ed/03/d6/ed03d6c2b7225c2d8be27fabb06a7b8d.jpg',
        films: [{
          id: 9,
          title: 'Euphoria',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 45,
        title: 'Cillian Murphy',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMyODk0MDUyOF5BMl5BanBnXkFtZTcwNzQyODU2Mw@@._V1_.jpg',
        films: [{
          id: 10,
          title: 'Peaky Blinders',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        },]
      }, {
        id: 46,
        title: 'Paul Anderson',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQ5ZTk5MGUtYjRmYi00NTIzLWFlYjMtZjk5MGFlNTg5ODViXkEyXkFqcGdeQXVyMzIzNjk4NzM@._V1_.jpg',
        films: [{
          id: 10,
          title: 'Peaky Blinders',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        },]
      }, {
        id: 47,
        title: 'Helen McCrory',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2MDM2OTU0MV5BMl5BanBnXkFtZTgwMDk2MTIzNTE@._V1_UY1200_CR580,0,630,1200_AL_.jpg',
        films: [{
          id: 10,
          title: 'Peaky Blinders',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        },]
      }, {
        id: 48,
        title: 'Sophie Rundle',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzIwODI2NzY2OV5BMl5BanBnXkFtZTgwNDk5Mjc0ODE@._V1_.jpg',
        films: [{
          id: 10,
          title: 'Peaky Blinders',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        },]
      }, {
        id: 49,
        title: 'Ned Dennehy',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzYyNjY3MTUtZWQ4MC00MjQ4LTliNTItMDMwNDczYjQyZDIzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
        films: [{
          id: 10,
          title: 'Peaky Blinders',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        },]
      }, {
        id: 50,
        title: 'Jodie Comer',
        poster: 'https://m.media-amazon.com/images/M/MV5BZmViMjQxYTUtZDExNy00NjU1LWI4MmEtY2RhODRkMzNkODM1XkEyXkFqcGdeQXVyNjkwNzEwMzY@._V1_.jpg',
        films: [{
          id: 11,
          title: 'Killing Eve',
          poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        },]
      }, {
        id: 51,
        title: 'Sandra Oh',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMyNzYyNDE4MV5BMl5BanBnXkFtZTcwOTkxMDQ2NA@@._V1_.jpg',
        films: [{
          id: 11,
          title: 'Killing Eve',
          poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        },]
      }, {
        id: 52,
        title: 'Fiona Shaw',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA0OTE5OTU2MV5BMl5BanBnXkFtZTcwNTk3NTc1NA@@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
        films: [{
          id: 11,
          title: 'Killing Eve',
          poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        },]
      }, {
        id: 53,
        title: 'Kim Bodnia',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA1NzYzNzYwMl5BMl5BanBnXkFtZTgwOTY3NjI3NTM@._V1_UY1200_CR584,0,630,1200_AL_.jpg',
        films: [{
          id: 11,
          title: 'Killing Eve',
          poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        },]
      }, {
        id: 54,
        title: 'Owen McDonnell',
        poster: 'https://m.media-amazon.com/images/M/MV5BOThkM2VkNzgtYjMwYi00ZmY0LTkzMTMtMWVlN2NmOWQxNGU0XkEyXkFqcGdeQXVyNDU2NjExMjg@._V1_UY1200_CR165,0,630,1200_AL_.jpg',
        films: [{
          id: 11,
          title: 'Killing Eve',
          poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        },]
      }, {
        id: 55,
        title: 'Jung Hae-In',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDkyOWNkZDEtYmQ4NC00Njc0LTlhMzMtNDliMTU2ZGU0YjA4XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
        films: [{
          id: 12,
          title: 'Snowdrop',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 56,
        title: 'Kim Ji-soo',
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kim_Ji-soo_at_the_Dior_Pop-Up_Store_Opening_Event_on_August_19%2C_2019_%285%29.png/220px-Kim_Ji-soo_at_the_Dior_Pop-Up_Store_Opening_Event_on_August_19%2C_2019_%285%29.png',
        films: [{
          id: 12,
          title: 'Snowdrop',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 57,
        title: 'Yoo In-Na',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjI3ZmQ1YzktYzNjMi00NmZjLWI0ZGQtZDFiOGI1YjYxYTQ2XkEyXkFqcGdeQXVyMjMxNTAxNDk@._V1_UY1200_CR196,0,630,1200_AL_.jpg',
        films: [{
          id: 12,
          title: 'Snowdrop',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 58,
        title: 'Yoon Se-ah',
        poster: 'https://m.media-amazon.com/images/M/MV5BMWQwNmQzMzEtZDZhNC00YmRmLWEyOWEtMjNmMmNiYzQwOTdlXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg',
        films: [{
          id: 12,
          title: 'Snowdrop',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        },]
      }, {
        id: 59,
        title: 'Kim Jung-nan',
        poster: 'https://m.media-amazon.com/images/M/MV5BNGQyYjYwZTQtZmE5OS00NWI3LWFkZTMtMDZhMjVmNmI3Y2I5XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        films: [{
          id: 12,
          title: 'Snowdrop',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        },]
      }
    ],
    directors: localStorage.directors ? JSON.parse(localStorage.directors) : [
      {
        id: 1,
        title: 'Cary Joji Fukunaga',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU4MTY2ODExMV5BMl5BanBnXkFtZTcwMzEwNzY2NA@@._V1_.jpg',
        films: [{
          id: 1,
          title: '007: No Time to Die',
          poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        },],
      }, {
        id: 2,
        title: 'Rian Johnson',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA3MTQwNjYyM15BMl5BanBnXkFtZTcwNTI5ODUwNQ@@._V1_.jpg',
        films: [{
          id: 2,
          title: 'Knives Out',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        },],
      }, {
        id: 3,
        title: 'John G. Avildsen',
        poster: 'https://resizing.flixster.com/whdN6imeI1BettyM7wHvljuGsxY=/218x280/v2/https://flxt.tmsimg.com/assets/75909_v9_ba.jpg',
        films: [{
          id: 3,
          title: 'The Karate Kid',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        },],
      }, {
        id: 4,
        title: 'Lana Wachowski',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjEzMTc2MDQ5OV5BMl5BanBnXkFtZTcwNjkzNDY0OA@@._V1_.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },],
      }, {
        id: 5,
        title: 'Lily Wachowski',
        poster: 'https://image.tmdb.org/t/p/w300/9sxE10LUA7TGlS1pHw2RM6mckHp.jpg',
        films: [{
          id: 4,
          title: 'Matrix',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
        },],
      }, {
        id: 6,
        title: 'Jared Bush',
        poster: 'https://cdn.celpox.com/bby_uploads/celeb/bbb156c6d2a394a2b7b10216a75c384b.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },],
      }, {
        id: 7,
        title: 'Byron Howard',
        poster: 'https://yankeetv.com/wiki/wp-content/uploads/2021/04/Byron-Howard.jpg',
        films: [{
          id: 5,
          title: 'Encanto',
          poster: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        },],
      }, {
        id: 8,
        title: 'Jonathan Demme',
        poster: 'https://fr.web.img5.acsta.net/pictures/15/07/27/16/51/247397.jpg',
        films: [{
          id: 6,
          title: 'Ricki and the Flash',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_.jpg',
        },],
      }, {
        id: 9,
        title: 'David Crane',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDAxODQxMTM0OF5BMl5BanBnXkFtZTcwODg2MDg5Nw@@._V1_.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },],
      }, {
        id: 10,
        title: 'Marta Kauffman',
        poster: 'https://br.web.img3.acsta.net/pictures/18/01/20/23/12/2024485.jpg',
        films: [{
          id: 7,
          title: 'Friends',
          poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        },],
      }, {
        id: 11,
        title: 'Yoo Seon-dong',
        poster: 'https://i.mydramalist.com/Wm5m5f.jpg',
        films: [{
          id: 8,
          title: 'Bad and Crazy',
          poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        },],
      }, {
        id: 12,
        title: 'Sam Levinson',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIxNDc1MTMyNF5BMl5BanBnXkFtZTgwNjA3ODI2NDM@._V1_.jpg',
        films: [{
          id: 9,
          title: 'Euphoria',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        },],
      }, {
        id: 13,
        title: 'Steven Knight',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjE4ODQwODcxN15BMl5BanBnXkFtZTgwNjU0MzcxMDE@._V1_.jpg',
        films: [{
          id: 10,
          title: 'Peaky Blinders',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
        },],
      }, {
        id: 14,
        title: 'Phoebe Waller-Bridge',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjQxNzYxODg4NF5BMl5BanBnXkFtZTgwNzE1NzYzMjI@._V1_.jpg',
        films: [{
          id: 11,
          title: 'Killing Eve',
          poster: 'https://m.media-amazon.com/images/M/MV5BOThjOGFmYzctMmI5Ni00ZjdhLWI2ZDktMjUyYjVlMDEzN2UyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        },],
      }, {
        id: 15,
        title: 'Jo Hyun-tak',
        poster: 'https://www.themoviedb.org/t/p/w235_and_h235_face/dyeNlVJGKxjHFfOPPBROe8xy1Bt.jpg',
        films: [{
          id: 12,
          title: 'Snowdrop',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWJhZWVjYjgtZWVhNy00ZWZlLWFlODMtMDFhYzUyMmJkY2ZjXkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_FMjpg_UX1000_.jpg',
        },],
      },
    ],
    countries: localStorage.countries ? JSON.parse(localStorage.countries) : [
      { value: "af", text: "Afghanistan" },
      { value: "al", text: "Albania" },
      { value: "dz", text: "Algeria" },
      { value: "as", text: "American Samoa" },
      { value: "ad", text: "Andorra" },
      { value: "ao", text: "Angola" },
      { value: "ai", text: "Anguilla" },
      { value: "aq", text: "Antarctica" },
      { value: "ag", text: "Antigua and Barbuda" },
      { value: "ar", text: "Argentina" },
      { value: "am", text: "Armenia" },
      { value: "aw", text: "Aruba" },
      { value: "au", text: "Australia" },
      { value: "at", text: "Austria" },
      { value: "az", text: "Azerbaijan" },
      { value: "bs", text: "Bahamas" },
      { value: "bh", text: "Bahrain" },
      { value: "bd", text: "Bangladesh" },
      { value: "bb", text: "Barbados" },
      { value: "by", text: "Belarus" },
      { value: "be", text: "Belgium" },
      { value: "bz", text: "Belize" },
      { value: "bj", text: "Benin" },
      { value: "bm", text: "Bermuda" },
      { value: "bt", text: "Bhutan" },
      { value: "bo", text: "Bolivia" },
      { value: "bq", text: "Bonaire, Sint Eustatius and Saba" },
      { value: "ba", text: "Bosnia and Herzegovina" },
      { value: "bw", text: "Botswana" },
      { value: "bv", text: "Bouvet Island" },
      { value: "br", text: "Brazil" },
      { value: "io", text: "British Indian Ocean Territory" },
      { value: "bn", text: "Brunei Darussalam" },
      { value: "bg", text: "Bulgaria" },
      { value: "bf", text: "Burkina Faso" },
      { value: "bi", text: "Burundi" },
      { value: "cv", text: "Cabo Verde" },
      { value: "kh", text: "Cambodia" },
      { value: "cm", text: "Cameroon" },
      { value: "ca", text: "Canada" },
      { value: "ky", text: "Cayman Islands" },
      { value: "cf", text: "Central African Republic" },
      { value: "td", text: "Chad" },
      { value: "cl", text: "Chile" },
      { value: "cn", text: "China" },
      { value: "cx", text: "Christmas Island" },
      { value: "co", text: "Colombia" },
      { value: "km", text: "Comoros" },
      { value: "cd", text: "Congo (the Democratic Republic of the)" },
      { value: "cg", text: "Congo" },
      { value: "ck", text: "Cook Islands" },
      { value: "cr", text: "Costa Rica" },
      { value: "hr", text: "Croatia" },
      { value: "cu", text: "Cuba" },
      { value: "cw", text: "Curaçao" },
      { value: "cy", text: "Cyprus" },
      { value: "cz", text: "Czechia" },
      { value: "ci", text: "Côte d'Ivoire" },
      { value: "dk", text: "Denmark" },
      { value: "dj", text: "Djibouti" },
      { value: "dm", text: "Dominica" },
      { value: "do", text: "Dominican Republic" },
      { value: "ec", text: "Ecuador" },
      { value: "eg", text: "Egypt" },
      { value: "sv", text: "El Salvador" },
      { value: "gq", text: "Equatorial Guinea" },
      { value: "er", text: "Eritrea" },
      { value: "ee", text: "Estonia" },
      { value: "sz", text: "Eswatini" },
      { value: "et", text: "Ethiopia" },
      { value: "fk", text: "Falkland Islands [Malvinas]" },
      { value: "fo", text: "Faroe Islands" },
      { value: "fj", text: "Fiji" },
      { value: "fi", text: "Finland" },
      { value: "fr", text: "France" },
      { value: "gf", text: "French Guiana" },
      { value: "pf", text: "French Polynesia" },
      { value: "tf", text: "French Southern Territories" },
      { value: "ga", text: "Gabon" },
      { value: "gm", text: "Gambia" },
      { value: "ge", text: "Georgia" },
      { value: "de", text: "Germany" },
      { value: "gh", text: "Ghana" },
      { value: "gi", text: "Gibraltar" },
      { value: "gr", text: "Greenland" },
      { value: "gl", text: "Congo" },
      { value: "gd", text: "Grenada" },
      { value: "gp", text: "Guadeloupe" },
      { value: "gu", text: "Guam" },
      { value: "gt", text: "Guatemala" },
      { value: "gg", text: "Guernsey" },
      { value: "gn", text: "Guinea" },
      { value: "gw", text: "Guinea-Bissau" },
      { value: "gy", text: "Guyana" },
      { value: "ht", text: "Haiti" },
      { value: "hm", text: "Heard Island and McDonald Islands" },
      { value: "va", text: "Holy See" },
      { value: "hn", text: "Honduras" },
      { value: "hk", text: "Hong Kong" },
      { value: "hu", text: "Hungary" },
      { value: "is", text: "Iceland" },
      { value: "in", text: "India" },
      { value: "id", text: "Indonesia" },
      { value: "ir", text: "Iran (Islamic Republic of)" },
      { value: "iq", text: "Iraq" },
      { value: "ie", text: "Ireland" },
      { value: "im", text: "Isle of Man" },
      { value: "il", text: "Israel" },
      { value: "it", text: "Italy" },
      { value: "jm", text: "Jamaica" },
      { value: "jp", text: "Japan" },
      { value: "je", text: "Jersey" },
      { value: "jo", text: "Jordan" },
      { value: "kz", text: "Kazakhstan" },
      { value: "ke", text: "Kenya" },
      { value: "ki", text: "Kiribati" },
      { value: "kp", text: "Korea (the Democratic People's Republic of)" },
      { value: "kr", text: "Korea (the Republic of)" },
      { value: "kw", text: "Kuwait" },
      { value: "kg", text: "Kyrgyzstan" },
      { value: "la", text: "Lao People's Democratic Republic" },
      { value: "lv", text: "Latvia" },
      { value: "lb", text: "Lebanon" },
      { value: "ls", text: "Lesotho" },
      { value: "lr", text: "Liberia" },
      { value: "ly", text: "Libya" },
      { value: "li", text: "Liechtenstein" },
      { value: "lt", text: "Lithuania" },
      { value: "lu", text: "Luxembourg" },
      { value: "mo", text: "Macao" },
      { value: "mg", text: "Madagascar" },
      { value: "mw", text: "Malawi" },
      { value: "my", text: "Malaysia" },
      { value: "mv", text: "Maldives" },
      { value: "ml", text: "Mali" },
      { value: "mt", text: "Malta" },
      { value: "mh", text: "Marshall Islands" },
      { value: "mq", text: "Martinique" },
      { value: "mr", text: "Mauritania" },
      { value: "mu", text: "Mauritius" },
      { value: "yt", text: "Mayotte" },
      { value: "mx", text: "Mexico" },
      { value: "fm", text: "Micronesia (Federated States of)" },
      { value: "md", text: "Moldova (the Republic of)" },
      { value: "mc", text: "Monaco" },
      { value: "mn", text: "Mongolia" },
      { value: "me", text: "Montenegro" },
      { value: "ms", text: "Montserrat" },
      { value: "ma", text: "Morocco" },
      { value: "mz", text: "Mozambique" },
      { value: "mm", text: "Myanmar" },
      { value: "na", text: "Namibia" },
      { value: "nr", text: "Nauru" },
      { value: "np", text: "Nepal" },
      { value: "nl", text: "Netherlands" },
      { value: "nc", text: "New Caledonia" },
      { value: "nz", text: "New Zealand" },
      { value: "ni", text: "Nicaragua" },
      { value: "ne", text: "Niger" },
      { value: "ng", text: "Nigeria" },
      { value: "nu", text: "Niue" },
      { value: "nf", text: "Norfolk Island" },
      { value: "mp", text: "Northern Mariana Islands" },
      { value: "no", text: "Norway" },
      { value: "om", text: "Oman" },
      { value: "pk", text: "Pakistan" },
      { value: "pw", text: "Palau" },
      { value: "ps", text: "Palestine, State of" },
      { value: "pa", text: "Panama" },
      { value: "pg", text: "Papua New Guinea" },
      { value: "py", text: "Paraguay" },
      { value: "pe", text: "Peru" },
      { value: "ph", text: "Philippines" },
      { value: "pn", text: "Pitcairn" },
      { value: "pl", text: "Poland" },
      { value: "pt", text: "Portugal" },
      { value: "pr", text: "Puerto Rico" },
      { value: "qa", text: "Qatar" },
      { value: "mk", text: "Republic of North Macedonia" },
      { value: "ro", text: "Romania" },
      { value: "ru", text: "Russian Federation" },
      { value: "rw", text: "Rwanda" },
      { value: "re", text: "Réunion" },
      { value: "bl", text: "Saint Barthélemy" },
      { value: "sh", text: "Saint Helena, Ascension and Tristan da Cunha" },
      { value: "kn", text: "Saint Kitts and Nevis" },
      { value: "lc", text: "Saint Lucia" },
      { value: "mf", text: "Saint Martin (French part)" },
      { value: "pm", text: "Saint Pierre and Miquelon" },
      { value: "vc", text: "Saint Vincent and the Grenadines" },
      { value: "ws", text: "Samoa" },
      { value: "sm", text: "San Marino" },
      { value: "st", text: "Sao Tome and Principe" },
      { value: "sa", text: "Saudi Arabia" },
      { value: "sn", text: "Senegal" },
      { value: "rs", text: "Serbia" },
      { value: "sc", text: "Seychelles" },
      { value: "sl", text: "Sierra Leone" },
      { value: "sg", text: "Singapore" },
      { value: "sx", text: "Sint Maarten (Dutch part)" },
      { value: "sk", text: "Slovakia" },
      { value: "si", text: "Slovenia" },
      { value: "sb", text: "Solomon Islands" },
      { value: "so", text: "Somalia" },
      { value: "za", text: "South Africa" },
      { value: "gs", text: "South Georgia and the South Sandwich Islands" },
      { value: "ss", text: "South Sudan" },
      { value: "es", text: "Spain" },
      { value: "lk", text: "Sri Lanka" },
      { value: "sd", text: "Sudan" },
      { value: "sr", text: "Suriname" },
      { value: "sj", text: "Svalbard and Jan Mayen" },
      { value: "se", text: "Sweden" },
      { value: "ch", text: "Switzerland" },
      { value: "sy", text: "Syrian Arab Republic" },
      { value: "tw", text: "Taiwan" },
      { value: "tj", text: "Tajikistan" },
      { value: "tz", text: "Tanzania, United Republic of" },
      { value: "th", text: "Thailand" },
      { value: "tl", text: "Timor-Leste" },
      { value: "tg", text: "Togo" },
      { value: "tk", text: "Tokelau" },
      { value: "to", text: "Tonga" },
      { value: "tt", text: "Trinidad and Tobago" },
      { value: "tn", text: "Tunisia" },
      { value: "tr", text: "Turkey" },
      { value: "tm", text: "Turkmenistan" },
      { value: "tc", text: "Turks and Caicos Islands" },
      { value: "tv", text: "Tuvalu" },
      { value: "ug", text: "Uganda" },
      { value: "ua", text: "Ukraine" },
      { value: "ae", text: "United Arab Emirates" },
      { value: "gb", text: "United Kingdom of Great Britain and Northern Ireland" },
      { value: "um", text: "United States Minor Outlying Islands" },
      { value: "us", text: "United States of America" },
      { value: "uy", text: "Uruguay" },
      { value: "uz", text: "Uzbekistan" },
      { value: "vu", text: "Vanuatu" },
      { value: "ve", text: "Venezuela (Bolivarian Republic of)" },
      { value: "vn", text: "Viet Nam" },
      { value: "vg", text: "Virgin Islands (British)" },
      { value: "vi", text: "Virgin Islands (U.S.)" },
      { value: "wf", text: "Wallis and Futuna" },
      { value: "eh", text: "Western Sahara" },
      { value: "ye", text: "Yemen" },
      { value: "zm", text: "Zambia" },
      { value: "zw", text: "Zimbabwe" },
      { value: "ax", text: "Åland Islands" },
    ],
    game: localStorage.game ? JSON.parse(localStorage.game) : [
      {
        id: 1,
        trailer:
          "https://nerdcultnews.com/wp-content/uploads/2022/01/bad-and-crazy-1_169.jpg",
        name: "Bad and Crazy",
      },
      {
        id: 2,
        trailer:
          "https://i.pinimg.com/736x/47/b9/7c/47b97c4a2fdd19ef59d1a4f468b11511.jpg",
        name: "Frozen",
      },
      {
        id: 3,
        trailer:
          "https://cabanadoleitor.com.br/wp-content/uploads/2021/08/Kingsman_Origem_20th_Century_Studios_Filme_CDL_1920x1080_01.jpg",
        name: "The King's Man",
      },
      {
        id: 4,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BOWFkYzFkYmEtMzAwNy00ZDM2LTgxZTMtZWQ2YTRmNzU2MTU5XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL75_UX500_CR0,0,500,281_.jpg",
        name: "The Witcher",
      },
      {
        id: 5,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BMjE4NDY2MTAyNV5BMl5BanBnXkFtZTgwNjQwNTA2NDE@._V1_.jpg",
        name: "Chappie",
      },
      {
        id: 6,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BMjM4NDA5MjYyNl5BMl5BanBnXkFtZTgwMDI0ODAzMzE@._V1_QL75_UY281_CR88,0,500,281_.jpg",
        name: "Harry Potter and the Deathly Hallows  Part 1",
      },
      {
        id: 7,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BMTI2OTk3NDEwMF5BMl5BanBnXkFtZTYwMTA3NzY3._V1_.jpg",
        name: "Spider-Man 2",
      },
      {
        id: 8,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BMTcyNTIyNjc4MV5BMl5BanBnXkFtZTcwNTg2NDk0NA@@._V1_.jpg",
        name: "007 Live and Let Die",
      },
      {
        id: 9,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BMTk1MDMzNDg2Nl5BMl5BanBnXkFtZTgwODg5MzA4MTE@._V1_.jpg",
        name: "The Karate Kid",
      },
      {
        id: 10,
        trailer:
          "https://m.media-amazon.com/images/M/MV5BMTM1OTU3NDk1NF5BMl5BanBnXkFtZTcwMjc1MDUyNw@@._V1_.jpg",
        name: "Police Academy",
      },
    ],
    quizz: localStorage.quizz ? JSON.parse(localStorage.quizz) : [
      {
        id: 1,
        sipnose: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
        name: "Captain America The Winter Soldier",
      },
      {
        id: 2,
        sipnose:
          "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        name: "007 No Time to Die",
      },
      {
        id: 3,
        sipnose:
          "A martial arts master agrees to teach karate to a bullied teenager.",
        name: "The Karate Kid",
      },
      {
        id: 4,
        sipnose:
          "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth the life he knows is the elaborate deception of an evil cyber-intelligence.",
        name: "Matrix",
      },
      {
        id: 5,
        sipnose:
          "A heroic drama that follows capable but bad cop Ryoo Soo-yeol regaining his humanity after meeting the righteous but crazy 'K'.",
        name: "Bad and Crazy",
      },
      {
        id: 6,
        sipnose:
          "After a series of events, the lives of a security operative and an assassin become inextricably linked.",
        name: "Killing Eve",
      },
      {
        id: 7,
        sipnose:
          "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
        name: "Die Hard",
      },
      {
        id: 8,
        sipnose:
          "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
        name: "Fast and Furious 9",
      },
      {
        id: 9,
        sipnose:
          "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
        name: "Hunger Games",
      },
      {
        id: 10,
        sipnose:
          "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        name: "John Wick",
      },
    ],
    currentQuestion: 0,
    points: 0,
    pointsQuizz: 0,
    questions: [],
    questionsQuizz: [],
    comments: [],
    commentsSeries: []

  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password),
    isUsernameAvailable: (state) => (username) => state.users.every((user) => user.username !== username),
    // isPasswordRight: (state) => (password, passwordConfirm) => state.users.every((user) =>user.password !== password),
    getLoggedUser: (state) => state.loggedUser,
    getMovies: (state) => state.films,
    getSeries: (state) => state.series,
    getCountries: (state) => state.countries,
    getUsers: (state) => state.users,
    // Para jogos
    getPoints: (state) => state.points,
    getPointsQuizz: (state) => state.pointsQuizz,
    getGame: (state) => state.game,
    getQuizz: (state) => state.quizz,
    getCurrentQuestion: (state) => state.currentQuestion,
    isMovie: (state) => (answer) => state.questions.some(
      (question) => question.name === answer),
    isFilm: (state) => (answer) => state.questionsQuizz.some(
      (question) => question.name === answer),
    getQuestions: (state) => state.questions,
    getQuestionsQuizz: (state) => state.questionsQuizz,
    getFilm: (state) => (id) => state.films.find((film) => film.id == id),
    getShow: (state) => (id) => state.series.find((serie) => serie.id == id),
    getActor: (state) => (id) => state.actors.find((actor) => actor.id == id),
    getDirector: (state) => (id) => state.directors.find((director) => director.id == id),
    //Comentários
    getComments: (state) => state.comments,
    getCommentsSeries: (state) => state.commentsSeries,
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload)
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload)
    },
    SET_EDIT(state, payload) {
      state.loggedUser.photo = state.loggedUser.photo.filter((photo) => photo == payload.photo),
        state.loggedUser.username = state.loggedUser.username.filter((user) => user == payload.username),
        state.loggedUser.password = state.loggedUser.username.filter((pass) => pass == payload.password)
    },
    SET_LOGOUT(state) {
      state.loggedUser = null
    },
    SET_MOVIE(state, payload) {
      state.questions.map((question) => question.name !== payload.name)
    },
    SET_CURRENT_QUESTION(state, payload) {
      state.currentQuestion = payload
    },
    SET_POINTS(state, payload) {
      state.points += payload;
      localStorage.points = JSON.stringify(state.points)
    },
    SET_POINTS_QUIZZ(state, payload) {
      state.pointsQuizz += payload;
      localStorage.pointsQuizz = JSON.stringify(state.pointsQuizz)
    },
    SET_QUESTION(state, payload) {
      state.questions.push(payload);
      localStorage.questions = JSON.stringify(state.questions);
    },
    SET_QUESTION_QUIZZ(state, payload) {
      state.questionsQuizz.push(payload);
      localStorage.questionsQuizz = JSON.stringify(state.questionsQuizz);
    },
    SET_GAME(state, payload) {
      state.game.push(payload);
      localStorage.game = JSON.stringify(state.game);
      state.points = 0;
      localStorage.points = JSON.stringify(state.points);
      state.currentQuestion = 0;
      localStorage.currentQuestion = JSON.stringify(state.currentQuestion);
      state.questions = [];
      localStorage.questions = JSON.stringify(state.questions);
    },
    SET_QUIZZ(state, payload) {
      state.quizz.push(payload);
      localStorage.quizz = JSON.stringify(state.quizz);
      state.pointsQuizz = 0;
      localStorage.pointsQuizz = JSON.stringify(state.pointsQuizz);
      state.currentQuestion = 0;
      localStorage.currentQuestion = JSON.stringify(state.currentQuestion);
      state.questionsQuizz = [];
      localStorage.questionsQuizz = JSON.stringify(state.questionsQuizz);
    },
    //Comentários
    SET_COMMENTS(state, payload) {
      state.comments.push(payload);
      localStorage.comments = JSON.stringify(state.comments);
    },
    SET_COMMENTS_SERIES(state, payload) {
      state.commentsSeries.push(payload);
      localStorage.commentsSeries = JSON.stringify(state.commentsSeries);
    },
    //Favoritos
    SET_FAVORITES_FILM(state, payload) {
      state.films.map((film) => {
        if (film.id === payload) {
          state.loggedUser.favorites.push(film)
        }
      })
    },
    SET_FAVORITES_SERIE(state, payload) {
      state.series.map((serie) => {
        if (serie.id === payload) {
          state.loggedUser.favorites.push(serie)
        }
      })
    },
    SET_FAVORITES_ACTOR(state, payload) {
      state.actors.map((actor) => {
        if (actor.id === payload) {
          state.loggedUser.favorites.push(actor)
        }
      })
    },
    SET_FAVORITES_DIRECTOR(state, payload) {
      state.directors.map((director) => {
        if (director.id === payload) {
          state.loggedUser.favorites.push(director)
        }
      })
    },
    SET_REMOVE_FAVORITE(state, payload) {
      state.loggedUser.favorites = state.loggedUser.favorites.filter((favorite) =>
        favorite.title != payload)
    },
    //Vistos
    SET_WATCHED_FILM(state, payload) {
      state.films.map((film) => {
        if (film.id === payload) {
          state.loggedUser.watchedFilms.push(film)
        }
      })
    },
    SET_WATCHED_SERIE(state, payload) {
      state.series.map((serie) => {
        if (serie.id === payload) {
          state.loggedUser.watchedSeries.push(serie)
        }
      })
    },
  },
  actions: {
    setLogin({ commit }) {
      commit('SET_LOGOUT')
    }
  },
  modules: {
  }
})
