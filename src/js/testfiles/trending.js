// to import object => import { TRENDING_TEST } from './testfiles/trending';
// https://developers.themoviedb.org/3/getting-started/images
// to jest to co otrzymujemy z https://api.themoviedb.org/3/trending/movie/day?api_key=64cb7e9375c055230d64b013c4bca79f
// aby tego użyć wstawiamy zmienną TRENDING_TEST w miejsce obiektu który miałby przyjść z fetcha (do testowania mark up)
export const TRENDING_TEST = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg',
      id: 948713,
      title: 'The Last Kingdom: Seven Kings Must Die',
      original_language: 'en',
      original_title: 'The Last Kingdom: Seven Kings Must Die',
      overview:
        "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      poster_path: '/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg',
      media_type: 'movie',
      genre_ids: [28, 18, 10752],
      popularity: 58.727,
      release_date: '2023-04-14',
      video: false,
      vote_average: 7.8,
      vote_count: 11,
    },
    {
      adult: false,
      backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
      id: 594767,
      title: 'Shazam! Fury of the Gods',
      original_language: 'en',
      original_title: 'Shazam! Fury of the Gods',
      overview:
        'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      poster_path: '/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      media_type: 'movie',
      genre_ids: [28, 35, 14],
      popularity: 8158.349,
      release_date: '2023-03-15',
      video: false,
      vote_average: 6.985,
      vote_count: 783,
    },
    {
      adult: false,
      backdrop_path: '/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg',
      id: 76600,
      title: 'Avatar: The Way of Water',
      original_language: 'en',
      original_title: 'Avatar: The Way of Water',
      overview:
        'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      media_type: 'movie',
      genre_ids: [878, 12, 28],
      popularity: 4630.156,
      release_date: '2022-12-14',
      video: false,
      vote_average: 7.743,
      vote_count: 7017,
    },
    {
      adult: false,
      backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
      id: 700391,
      title: '65',
      original_language: 'en',
      original_title: '65',
      overview:
        '65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.',
      poster_path: '/rzRb63TldOKdKydCvWJM8B6EkPM.jpg',
      media_type: 'movie',
      genre_ids: [878, 12, 53, 28],
      popularity: 2686.048,
      release_date: '2023-03-02',
      video: false,
      vote_average: 6.362,
      vote_count: 475,
    },
    {
      adult: false,
      backdrop_path: '/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
      id: 502356,
      title: 'The Super Mario Bros. Movie',
      original_language: 'en',
      original_title: 'The Super Mario Bros. Movie',
      overview:
        'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      media_type: 'movie',
      genre_ids: [16, 12, 10751, 14, 35],
      popularity: 8979.744,
      release_date: '2023-04-05',
      video: false,
      vote_average: 7.518,
      vote_count: 740,
    },
    {
      adult: false,
      backdrop_path: '/qElNES0sHVQcbzvGrTx7ccpGzij.jpg',
      id: 842675,
      title: 'The Wandering Earth II',
      original_language: 'zh',
      original_title: '流浪地球2',
      overview:
        'Humans built huge engines on the surface of the earth to find a new home. But the road to the universe is perilous. In order to save earth, young people once again have to step forward to start a race against time for life and death.',
      poster_path: '/pR858ihc6Ls9xohpdRJVjV787ml.jpg',
      media_type: 'movie',
      genre_ids: [878, 28, 18],
      popularity: 38.932,
      release_date: '2023-01-22',
      video: false,
      vote_average: 7.7,
      vote_count: 123,
    },
    {
      adult: false,
      backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
      id: 603692,
      title: 'John Wick: Chapter 4',
      original_language: 'en',
      original_title: 'John Wick: Chapter 4',
      overview:
        'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
      media_type: 'movie',
      genre_ids: [28, 53, 80],
      popularity: 1779.862,
      release_date: '2023-03-22',
      video: false,
      vote_average: 7.997,
      vote_count: 998,
    },
    {
      adult: false,
      backdrop_path: '/8KfFlxtewZTulj6oklTVZQMaPGV.jpg',
      id: 1073413,
      title: 'Phenomena',
      original_language: 'es',
      original_title: 'Fenómenas',
      overview:
        'Three middle-aged women who investigate paranormal events are put to the test when their leader Father Pilón disappears. Inspired by the real Hepta Group.',
      poster_path: '/gxIpw7oewZ17zOZUOk31KB0eel4.jpg',
      media_type: 'movie',
      genre_ids: [27, 9648],
      popularity: 33.834,
      release_date: '2023-04-14',
      video: false,
      vote_average: 4.5,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
      id: 640146,
      title: 'Ant-Man and the Wasp: Quantumania',
      original_language: 'en',
      original_title: 'Ant-Man and the Wasp: Quantumania',
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
      media_type: 'movie',
      genre_ids: [878, 12, 28],
      popularity: 829.665,
      release_date: '2023-02-15',
      video: false,
      vote_average: 6.313,
      vote_count: 1248,
    },
    {
      adult: false,
      backdrop_path: '/hj5aUZEGCwoik8B3R61DgMEaO1O.jpg',
      id: 1110586,
      title: 'Weathering',
      original_language: 'en',
      original_title: 'Weathering',
      overview:
        'After losing her baby and nearly her life during labor, a journalist unravels amid disturbing visions and chilling attacks as she grieves alone at home.',
      poster_path: '/5L3ZdfHBeDdDgYblbJDPNF0vuNP.jpg',
      media_type: 'movie',
      genre_ids: [53],
      popularity: 7.531,
      release_date: '2023-04-13',
      video: false,
      vote_average: 6.0,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: '/sGRJa0QGgbOgKxwhng6KOdHtnhq.jpg',
      id: 1101799,
      title: 'Queens on the Run',
      original_language: 'es',
      original_title: 'Fuga de Reinas',
      overview:
        "When four women finally take the road trip they planned in high school, they have no idea of the things they'll bump into sometimes literally.",
      poster_path: '/pufQnUSzjrf70cHR3mGxG0eXHem.jpg',
      media_type: 'movie',
      genre_ids: [28, 35],
      popularity: 57.448,
      release_date: '2023-04-14',
      video: false,
      vote_average: 5.0,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: '/aityu1Gma509jInlspHstEt8Jg0.jpg',
      id: 736790,
      title: 'Chupa',
      original_language: 'en',
      original_title: 'Chupa',
      overview:
        "While visiting family in Mexico, a lonely boy befriends a mythical creature hiding on his grandfather's ranch and embarks on the adventure of a lifetime.",
      poster_path: '/ra3xm8KFAkwK0CdbPRkfYADJYTB.jpg',
      media_type: 'movie',
      genre_ids: [12, 14, 10751],
      popularity: 529.649,
      release_date: '2023-04-07',
      video: false,
      vote_average: 6.479,
      vote_count: 94,
    },
    {
      adult: false,
      backdrop_path: '/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg',
      id: 739405,
      title: 'Operation Fortune: Ruse de Guerre',
      original_language: 'en',
      original_title: 'Operation Fortune: Ruse de Guerre',
      overview:
        "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
      poster_path: '/cOaQU5o7mznZTFb4Xs9c1QlwTze.jpg',
      media_type: 'movie',
      genre_ids: [28, 35, 12],
      popularity: 210.996,
      release_date: '2023-01-04',
      video: false,
      vote_average: 6.643,
      vote_count: 442,
    },
    {
      adult: false,
      backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
      id: 677179,
      title: 'Creed III',
      original_language: 'en',
      original_title: 'Creed III',
      overview:
        'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.',
      poster_path: '/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
      media_type: 'movie',
      genre_ids: [18, 28],
      popularity: 4804.812,
      release_date: '2023-03-01',
      video: false,
      vote_average: 7.282,
      vote_count: 958,
    },
    {
      adult: false,
      backdrop_path: '/bLZ1WGb59JXFRYRFgknOwwiPJ0l.jpg',
      id: 800787,
      title: 'A Good Person',
      original_language: 'en',
      original_title: 'A Good Person',
      overview:
        "Allison's life falls apart following her involvement in a fatal accident. The unlikely relationship she forms with her would-be father-in-law helps her live a life worth living.",
      poster_path: '/6toz74j1OgbQrsZUjgr2Ohs1AsE.jpg',
      media_type: 'movie',
      genre_ids: [35, 18],
      popularity: 43.649,
      release_date: '2023-03-23',
      video: false,
      vote_average: 6.7,
      vote_count: 16,
    },
    {
      adult: false,
      backdrop_path: '/it3aYAPBhx2Ph4aWX3e5s77vXXL.jpg',
      id: 1011367,
      title: 'Operation Nation',
      original_language: 'pl',
      original_title: 'Kryptonim: Polska',
      overview:
        'A member of a nationalist group in Warsaw begins a forbidden romance with a passionate, left-wing activist, leading to a series of surprising events.',
      poster_path: '/iyJNumu9bpLCXWcutryAvkVlGhN.jpg',
      media_type: 'movie',
      genre_ids: [35, 10749],
      popularity: 4.228,
      release_date: '2022-09-02',
      video: false,
      vote_average: 5.8,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: '/ecc3KZKMzx9jCHaHnzZYkxjADIS.jpg',
      id: 1070777,
      title: 'One Day as a Lion',
      original_language: 'en',
      original_title: 'One Day as a Lion',
      overview:
        'Jackie Powers will stop at nothing to prevent his son from following him into a life of crime. With his mob employer in pursuit, a chance encounter at a roadside diner charts a new path.',
      poster_path: '/cxSKca4dNlk7O7PMiEYT203vlIw.jpg',
      media_type: 'movie',
      genre_ids: [28, 53, 80],
      popularity: 27.954,
      release_date: '2023-04-04',
      video: false,
      vote_average: 5.7,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: '/umhjSTT9qDBZFJUUYQ2kVpOkQpY.jpg',
      id: 1067282,
      title: 'Demon Slayer: Kimetsu no Yaiba -To the Swordsmith Village-',
      original_language: 'ja',
      original_title: '「鬼滅の刃」上弦集結、そして刀鍛冶の里へ',
      overview:
        'After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.',
      poster_path: '/o8DB5825myndApdQQHbf4bv1mzL.jpg',
      media_type: 'movie',
      genre_ids: [28, 16, 14],
      popularity: 802.434,
      release_date: '2023-02-03',
      video: true,
      vote_average: 7.204,
      vote_count: 103,
    },
    {
      adult: false,
      backdrop_path: '/m42PtAhEtEqbNV8Cs8TsXcTN4ha.jpg',
      id: 719256,
      title: 'Jesus Revolution',
      original_language: 'en',
      original_title: 'Jesus Revolution',
      overview:
        'In the 1970s, aimless teenager Greg Laurie searches for all the right things in all the wrong places until he meets Lonnie Frisbee, a charismatic hippie/street preacher. Together with local pastor Chuck Smith, they open the doors of a languishing church to an unexpected revival.',
      poster_path: '/wLSytRNOCq4Epz6cL9INHPJOrg0.jpg',
      media_type: 'movie',
      genre_ids: [18, 36],
      popularity: 70.927,
      release_date: '2023-02-23',
      video: false,
      vote_average: 6.556,
      vote_count: 18,
    },
    {
      adult: false,
      backdrop_path: '/fh7aM10THQzivGU7kAkgKrgzot4.jpg',
      id: 493529,
      title: 'Dungeons \u0026 Dragons: Honor Among Thieves',
      original_language: 'en',
      original_title: 'Dungeons \u0026 Dragons: Honor Among Thieves',
      overview:
        'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
      poster_path: '/6LuXaihVIoJ5FeSiFb7CZMtU7du.jpg',
      media_type: 'movie',
      genre_ids: [12, 14, 35],
      popularity: 363.412,
      release_date: '2023-03-23',
      video: false,
      vote_average: 7.5,
      vote_count: 348,
    },
  ],
  total_pages: 1000,
  total_results: 20000,
};