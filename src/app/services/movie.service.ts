import { Injectable } from '@angular/core';
import { Movie, MovieSection } from './movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private movieSections: MovieSection[] = [
    {
      id: 'most-watched',
      title: 'Enim vaadatud',
      viewAllUrl: undefined,
      movies: [
        { title: 'Aktuaalne kaamera', poster: 'assets/images/1731277h1d4c.jpg', genre: 'uudised', url: 'https://jupiter.err.ee/1038278/aktuaalne-kaamera' },
        { title: 'La Promesa', poster: 'assets/images/2830223hce03.jpg', genre: 'draama', url: 'https://jupiter.err.ee/1609623598/la-promesa' },
        { title: 'Sinu kätes', poster: 'assets/images/2953818h4875.jpg', genre: 'meditsiinidraama', url: 'https://jupiter.err.ee/1609657340/sinu-kates' },
        { title: 'Kadunud', poster: 'assets/images/2953725hfdd6.jpg', genre: 'põnevussari', url: 'https://jupiter.err.ee/1609717199/kadunud' },
        { title: 'Ringvaade suvel', poster: 'assets/images/1510726h4b23.jpg', genre: 'uudised', url: 'https://jupiter.err.ee/1038473/ringvaade-suvel' },
        { title: 'Jane Eyre', poster: 'assets/images/786604h48ed.jpg', genre: 'krimisari', url: 'https://jupiter.err.ee/1608184738/jane-eyre' },
        { title: 'Jalgpalli naiste EM 2025', poster: 'assets/images/2911602ha37b.jpg', genre: 'sport', url: 'https://jupiter.err.ee/1609730087/jalgpalli-naiste-em-2025' },
        { title: 'Pulss', poster: 'assets/images/2881878h5c45.jpg', genre: 'meditsiinidraama', url: 'https://jupiter.err.ee/1038457/pulss' },
        { title: 'Uued Õed', poster: 'assets/images/1819811h5fee.jpg', genre: 'põnevussari', url: 'https://jupiter.err.ee/1207540/uued-oed' },
        { title: 'Kes tappis Otto Mülleri?', poster: 'assets/images/2374554h882c.jpg', genre: 'põnevussari', url: 'https://jupiter.err.ee/1609193600/kes-tappis-otto-mulleri' },
        { title: 'Eesti mäng', poster: 'assets/images/2589934ha2c1.jpg', genre: 'mängud', url: 'https://jupiter.err.ee/1038303/eesti-mang' },
        { title: 'Hercule Poirot', poster: 'assets/images/2436749hdd87.jpg', genre: 'detektiiv', url: 'https://jupiter.err.ee/1148117/hercule-poirot' },
        { title: 'Õnne13', poster: 'assets/images/2533481h4220.jpg', genre: 'draama', url: 'https://jupiter.err.ee/1038548/onne-13' },
        { title: 'Solsidan', poster: 'assets/images/2881830h687f.jpg', genre: 'draama', url: 'https://jupiter.err.ee/1608821236/solsidan' },
        { title: 'Segasummasuvila ratastel', poster: 'assets/images/2678314hbdf8.jpg', genre: 'pere', url: 'https://jupiter.err.ee/1609206638/segasummasuvila-ratastel' },
        { title: 'ENSV', poster: 'assets/images/726581h2319.jpg', genre: 'komöödia', url: 'https://jupiter.err.ee/1038316/ensv' },
        { title: 'Ohtlik lend', poster: 'assets/images/1303025hc6c1.jpg', genre: 'draama', url: 'https://jupiter.err.ee/1038745/ohtlik-lend' },
        { title: 'Agatha Christie Hjerson', poster: 'assets/images/2225322hc9f8.jpg', genre: 'krimi', url: 'https://jupiter.err.ee/1609220513/agatha-christie-hjerson' },
        { title: 'Carla', poster: 'assets/images/2148292h2aa8.jpg', genre: 'biograafia', url: 'https://jupiter.err.ee/1608725272/carla' },
        { title: 'Mida teie arvate?', poster: 'assets/images/2324796h21ed.jpg', genre: 'saade', url: 'https://jupiter.err.ee/1608601195/mida-teie-arvate' },
        { title: 'Kultuuri kodu', poster: 'assets/images/2680666h8e0a.jpg', genre: 'saade', url: 'https://jupiter.err.ee/1609556552/kultuuri-kodu' },
        { title: 'Shirley', poster: 'assets/images/2848838hc006.jpg', genre: 'põnevus', url: 'https://jupiter.err.ee/1609678589/shirley' },
        { title: 'Inetu tõde?', poster: 'assets/images/2542904h255e.jpg', genre: 'komöödia', url: 'https://jupiter.err.ee/1609439476/inetu-tode' },
        { title: 'Karen Pirie', poster: 'assets/images/2954037h8f6b.jpg', genre: 'krimi', url: 'https://jupiter.err.ee/1608840331/karen-pirie' },
        { title: 'Vanad ja kobedad', poster: 'assets/images/2478484h9461.jpg', genre: 'komöödia', url: 'https://jupiter.err.ee/1038533/vanad-ja-kobedad' },
        { title: 'Kuulsuste lahing', poster: 'assets/images/2345274hb8cd.jpg', genre: 'saade', url: 'https://jupiter.err.ee/1152245/kuulsuste-lahing' },
        { title: 'Sissi', poster: 'assets/images/2954004h06b0.jpg', genre: 'ajalooline', url: 'https://jupiter.err.ee/1038278/aktuaalne-kaamera' }
      ]
    },
    {
      id: 'show-suggestion',
      title: 'Saatesoovitus',
      viewAllUrl: 'https://jupiter.err.ee/v-saated',
      movies: [
        { title: 'EnsV', year: '2018-2019', duration: '24 x 30 min', poster: 'https://picsum.photos/280/400?random=9', icon: '😂', genre: 'komöödia' },
        { title: 'Õnne 13', year: '1993-2018', duration: '624 x 30 min', poster: 'https://picsum.photos/280/400?random=10', icon: '🏘️', genre: 'draama' },
        { title: 'Klass', year: '2007-2010', duration: '87 x 25 min', poster: 'https://picsum.photos/280/400?random=11', icon: '🎓', genre: 'noortesari' },
        { title: 'Pehmed ja karvased', year: '2000-2002', duration: '39 x 25 min', poster: 'https://picsum.photos/280/400?random=12', icon: '🐱', genre: 'komöödia' },
        { title: 'Wikmani poisid', year: '1994-1995', duration: '26 x 25 min', poster: 'https://picsum.photos/280/400?random=13', icon: '👦', genre: 'draama' },
        { title: 'Tuulepealne maa', year: '2008-2009', duration: '12 x 50 min', poster: 'https://picsum.photos/280/400?random=14', icon: '🌬️', genre: 'ajaloosari' },
        { title: 'Kelgukoerad', year: '2006-2007', duration: '13 x 25 min', poster: 'https://picsum.photos/280/400?random=15', icon: '🐕', genre: 'seiklussari' },
        { title: 'Rehepapp', year: '2021', duration: '8 x 50 min', poster: 'https://picsum.photos/280/400?random=16', icon: '👨‍🌾', genre: 'komöödia' }
      ]
    },
    {
      id: 'sport',
      title: 'Sport',
      viewAllUrl: undefined,
      movies: [
        { title: 'Kuldpall', year: '2023', duration: '90 min', poster: 'https://picsum.photos/280/400?random=17', icon: '⚽', genre: 'spordidokumentaal' },
        { title: 'Tokyo 2020 parimad momendid', year: '2021', duration: '120 min', poster: 'https://picsum.photos/280/400?random=18', icon: '🏅', genre: 'sport' },
        { title: 'Eesti korvpalli lugu', year: '2022', duration: '85 min', poster: 'https://picsum.photos/280/400?random=19', icon: '🏀', genre: 'spordidokumentaal' },
        { title: 'Suusatamine läbi aegade', year: '2021', duration: '75 min', poster: 'https://picsum.photos/280/400?random=20', icon: '⛷️', genre: 'sport' },
        { title: 'Rattasõidu maailmameistrivõistlused', year: '2023', duration: '95 min', poster: 'https://picsum.photos/280/400?random=21', icon: '🚴', genre: 'sport' },
        { title: 'Kergejõustiku tähed', year: '2022', duration: '80 min', poster: 'https://picsum.photos/280/400?random=22', icon: '🏃', genre: 'spordidokumentaal' },
        { title: 'Ujumise tehnika', year: '2021', duration: '60 min', poster: 'https://picsum.photos/280/400?random=23', icon: '🏊', genre: 'õppesaade' },
        { title: 'Jalgpalli taktika', year: '2023', duration: '70 min', poster: 'https://picsum.photos/280/400?random=24', icon: '⚽', genre: 'õppesaade' }
      ]
    },
    {
      id: 'movie-suggestion',
      title: 'Filmisoovitus',
      viewAllUrl: 'https://jupiter.err.ee/filmid',
      movies: [
        { title: 'Malev', year: '1969', duration: '90 min', poster: 'https://picsum.photos/280/400?random=25', icon: '⚔️', genre: 'ajaloosfilm' },
        { title: 'Regina', year: '1990', duration: '98 min', poster: 'https://picsum.photos/280/400?random=26', icon: '👑', genre: 'draama' },
        { title: 'Kõhedad muinaslood', year: '2016', duration: '85 min', poster: 'https://picsum.photos/280/400?random=27', icon: '❄️', genre: 'antoloogia' },
        { title: 'Tõde ja õigus', year: '2019', duration: '165 min', poster: 'https://picsum.photos/280/400?random=28', icon: '📚', genre: 'kirjandusfilm' },
        { title: 'Seltsimees laps', year: '2018', duration: '104 min', poster: 'https://picsum.photos/280/400?random=29', icon: '🎭', genre: 'draama' },
        { title: 'Kratt', year: '2020', duration: '107 min', poster: 'https://picsum.photos/280/400?random=30', icon: '👹', genre: 'fantaasia' },
        { title: 'Kevade', year: '1969', duration: '84 min', poster: 'https://picsum.photos/280/400?random=31', icon: '🌸', genre: 'klassika' },
        { title: 'Mandariinid', year: '2013', duration: '87 min', poster: 'https://picsum.photos/280/400?random=32', icon: '🍊', genre: 'sõjafilm' }
      ]
    },
    {
      id: 'series-suggestion',
      title: 'Sarjasoovitus',
      viewAllUrl: 'https://jupiter.err.ee/sarjad',
      movies: [
        { title: 'Üle Atlandi', year: '2021', duration: '8 x 60 min', poster: 'https://picsum.photos/280/400?random=33', icon: '🌊', genre: 'ajaloosari' },
        { title: 'Maailm leekides', year: '2020', duration: '6 x 60 min', poster: 'https://picsum.photos/280/400?random=34', icon: '🔥', genre: 'sõjasari' },
        { title: 'Katariina', year: '2019', duration: '8 x 50 min', poster: 'https://picsum.photos/280/400?random=35', icon: '👸', genre: 'ajaloosari' },
        { title: 'Victoria', year: '2020', duration: '24 x 60 min', poster: 'https://picsum.photos/280/400?random=36', icon: '🏰', genre: 'ajaloosari' },
        { title: 'Poldark', year: '2021', duration: '43 x 60 min', poster: 'https://picsum.photos/280/400?random=37', icon: '⛏️', genre: 'ajaloosari' },
        { title: 'Sherlock', year: '2019', duration: '12 x 90 min', poster: 'https://picsum.photos/280/400?random=38', icon: '🔍', genre: 'detektiiv' },
        { title: 'Downton Abbey', year: '2020', duration: '52 x 90 min', poster: 'https://picsum.photos/280/400?random=39', icon: '🏛️', genre: 'perioodidraama' },
        { title: 'Line of Duty', year: '2021', duration: '36 x 60 min', poster: 'https://picsum.photos/280/400?random=40', icon: '🚨', genre: 'krimisari' }
      ]
    },
    {
      id: 'documentary-suggestion',
      title: 'Dokisoovitus',
      viewAllUrl: 'https://jupiter.err.ee/dokumentaal',
      movies: [
        { title: 'Rasvarinne', year: '2021', duration: '90 min', poster: 'https://picsum.photos/280/400?random=41', icon: '📜', genre: 'dokumentaal' },
        { title: 'Eesti lugu', year: '2019-2021', duration: '6 x 50 min', poster: 'https://picsum.photos/280/400?random=42', icon: '🏛️', genre: 'ajaloodokumentaal' },
        { title: 'Laulev revolutsioon', year: '2019', duration: '114 min', poster: 'https://picsum.photos/280/400?random=43', icon: '🎵', genre: 'ajaloodokumentaal' },
        { title: 'Meie mees Moskvas', year: '2018', duration: '78 min', poster: 'https://picsum.photos/280/400?random=44', icon: '🏛️', genre: 'poliitiline' },
        { title: 'Disco ja tuumasõda', year: '2009', duration: '78 min', poster: 'https://picsum.photos/280/400?random=45', icon: '💃', genre: 'kultuurilugu' },
        { title: 'Nukufilm', year: '2010', duration: '90 min', poster: 'https://picsum.photos/280/400?random=46', icon: '🎪', genre: 'kultuurilugu' },
        { title: 'Eestlased Siberis', year: '2013', duration: '52 min', poster: 'https://picsum.photos/280/400?random=47', icon: '❄️', genre: 'ajaloodokumentaal' },
        { title: 'Balti kett', year: '2019', duration: '85 min', poster: 'https://picsum.photos/280/400?random=48', icon: '🤝', genre: 'ajaloodokumentaal' }
      ]
    },
    {
      id: 'estonian-movies',
      title: 'Eesti telefilm',
      viewAllUrl: 'https://jupiter.err.ee/eesti',
      movies: [
        { title: 'Viimne reliikvia', year: '1969', duration: '83 min', poster: 'https://picsum.photos/280/400?random=49', icon: '🏰', genre: 'seiklus' },
        { title: 'Põrgupõhja uus vanapagan', year: '1964', duration: '95 min', poster: 'https://picsum.photos/280/400?random=50', icon: '🔥', genre: 'komöödia' },
        { title: 'Nukitsamees', year: '1981', duration: '77 min', poster: 'https://picsum.photos/280/400?random=51', icon: '👻', genre: 'fantaasia' },
        { title: 'Hukkunud Alpinisti hotell', year: '1979', duration: '84 min', poster: 'https://picsum.photos/280/400?random=52', icon: '🏔️', genre: 'müsteerium' },
        { title: 'Sügis', year: '1990', duration: '95 min', poster: 'https://picsum.photos/280/400?random=53', icon: '🍁', genre: 'draama' },
        { title: 'Suvi', year: '1976', duration: '81 min', poster: 'https://picsum.photos/280/400?random=54', icon: '☀️', genre: 'draama' },
        { title: 'Kolme katku vahel', year: '1970', duration: '93 min', poster: 'https://picsum.photos/280/400?random=55', icon: '⚔️', genre: 'ajaloofilm' },
        { title: 'Tallinn pimeduses', year: '1993', duration: '99 min', poster: 'https://picsum.photos/280/400?random=56', icon: '🌃', genre: 'draama' }
      ]
    },
    {
      id: 'listening-suggestion',
      title: 'Kuulamissoovitus',
      viewAllUrl: 'https://jupiter.err.ee/audio',
      movies: [
        { title: 'Hercule Poirot järjejutud', year: '2020-2021', duration: 'Sari', poster: 'https://picsum.photos/280/400?random=57', icon: '🎧', genre: 'kuuldemäng' },
        { title: 'Andrus Kivirähki kuuldemängud', year: '2019-2021', duration: 'Sari', poster: 'https://picsum.photos/280/400?random=58', icon: '📻', genre: 'kuuldemäng' },
        { title: 'Isa Browni lood', year: '2020', duration: 'Sari', poster: 'https://picsum.photos/280/400?random=59', icon: '🎙️', genre: 'järjejutt' },
        { title: 'Loomade farm', year: '2021', duration: '8 x 30 min', poster: 'https://picsum.photos/280/400?random=60', icon: '🐷', genre: 'järjejutt' },
        { title: 'Müstiline Venemaa', year: '2018-2021', duration: 'Igal pühapäeval', poster: 'https://picsum.photos/280/400?random=61', icon: '🏰', genre: 'saatesari' },
        { title: 'Klassikaline muusika', year: '2020-2021', duration: 'Sari', poster: 'https://picsum.photos/280/400?random=62', icon: '🎼', genre: 'muusika' },
        { title: 'Eesti kirjanduse adaptsioonid', year: '2019-2021', duration: 'Sari', poster: 'https://picsum.photos/280/400?random=63', icon: '📖', genre: 'kuuldemäng' },
        { title: 'Laste kuuldemängud', year: '2020-2021', duration: 'Sari', poster: 'https://picsum.photos/280/400?random=64', icon: '🧸', genre: 'lastesaated' }
      ]
    },
    {
      id: 'radio-theatre',
      title: 'Raadioteater',
      viewAllUrl: 'https://jupiter.err.ee/raadioteater',
      movies: [
        { title: 'Hamlet', year: '2021', duration: '180 min', poster: 'https://picsum.photos/280/400?random=65', icon: '🎭', genre: 'klassikaline' },
        { title: 'Romeo ja Julia', year: '2020', duration: '150 min', poster: 'https://picsum.photos/280/400?random=66', icon: '💕', genre: 'romaani' },
        { title: 'Makbeth', year: '2022', duration: '165 min', poster: 'https://picsum.photos/280/400?random=67', icon: '👑', genre: 'tragöödia' },
        { title: 'Kuningas Lear', year: '2019', duration: '195 min', poster: 'https://picsum.photos/280/400?random=68', icon: '👴', genre: 'klassikaline' },
        { title: 'Othello', year: '2021', duration: '170 min', poster: 'https://picsum.photos/280/400?random=69', icon: '🗡️', genre: 'tragöödia' },
        { title: 'Sen üö unenägu', year: '2020', duration: '140 min', poster: 'https://picsum.photos/280/400?random=70', icon: '🧚', genre: 'komöödia' },
        { title: 'Tormituul', year: '2022', duration: '160 min', poster: 'https://picsum.photos/280/400?random=71', icon: '⛈️', genre: 'fantaasia' },
        { title: 'Palju kära ei millestki', year: '2019', duration: '135 min', poster: 'https://picsum.photos/280/400?random=72', icon: '😄', genre: 'komöödia' }
      ]
    },
    {
      id: 'concerts-and-music',
      title: 'Kontserdid ja muusika',
      viewAllUrl: undefined,
      movies: [
        { title: 'Arvo Pärt 85', year: '2020', duration: '120 min', poster: 'https://picsum.photos/280/400?random=73', icon: '🎼', genre: 'klassikaline' },
        { title: 'Laulupidu 2019', year: '2019', duration: '180 min', poster: 'https://picsum.photos/280/400?random=74', icon: '🎵', genre: 'rahvamuusika' },
        { title: 'ERR sümfooniaorkester', year: '2021', duration: '90 min', poster: 'https://picsum.photos/280/400?random=75', icon: '🎻', genre: 'klassikaline' },
        { title: 'Jazzkaar 2022', year: '2022', duration: '150 min', poster: 'https://picsum.photos/280/400?random=76', icon: '🎷', genre: 'jazz' },
        { title: 'Viljandi pärimusmuusika festival', year: '2021', duration: '200 min', poster: 'https://picsum.photos/280/400?random=77', icon: '🪕', genre: 'pärimusmuusika' },
        { title: 'Tallinna kammerorkester', year: '2020', duration: '110 min', poster: 'https://picsum.photos/280/400?random=78', icon: '🎹', genre: 'klassikaline' },
        { title: 'Eesti muusika päevad', year: '2022', duration: '160 min', poster: 'https://picsum.photos/280/400?random=79', icon: '🎵', genre: 'kaasaegne' },
        { title: 'Ooperi gala', year: '2021', duration: '140 min', poster: 'https://picsum.photos/280/400?random=80', icon: '🎭', genre: 'ooper' }
      ]
    },
    {
      id: 'theatre-production',
      title: 'Lavastused',
      viewAllUrl: 'https://jupiter.err.ee/lavastused',
      movies: [
        { title: 'Othello', year: '2023', duration: '160 min', poster: 'https://picsum.photos/280/400?random=81', icon: '🎭', genre: 'tragöödia' },
        { title: 'Lend üle käopesa', year: '2022', duration: '140 min', poster: 'https://picsum.photos/280/400?random=82', icon: '🏥', genre: 'draama' },
        { title: 'Kolm õde', year: '2021', duration: '165 min', poster: 'https://picsum.photos/280/400?random=83', icon: '👭', genre: 'klassikaline' },
        { title: 'Don Juan', year: '2023', duration: '130 min', poster: 'https://picsum.photos/280/400?random=84', icon: '🎩', genre: 'komöödia' },
        { title: 'Kuningas Lear', year: '2020', duration: '180 min', poster: 'https://picsum.photos/280/400?random=85', icon: '👑', genre: 'tragöödia' },
        { title: 'Cabaret', year: '2022', duration: '145 min', poster: 'https://picsum.photos/280/400?random=86', icon: '🎪', genre: 'muusikal' },
        { title: 'Seagulls', year: '2021', duration: '135 min', poster: 'https://picsum.photos/280/400?random=87', icon: '🕊️', genre: 'draama' },
        { title: 'La Traviata', year: '2023', duration: '155 min', poster: 'https://picsum.photos/280/400?random=88', icon: '🌹', genre: 'ooper' }
      ]
    },
    {
      id: 'freshly-added',
      title: 'Värskelt lisatud',
      viewAllUrl: undefined,
      movies: [
        { title: 'Reetur', year: '2024', duration: '8 x 60 min', poster: 'https://picsum.photos/280/400?random=89', icon: '🕵️', genre: 'spionaaž' },
        { title: 'Line of Duty', year: '2024', duration: '6 x 60 min', poster: 'https://picsum.photos/280/400?random=90', icon: '🚨', genre: 'krimisari' },
        { title: 'Babylon Berlin', year: '2024', duration: '12 x 50 min', poster: 'https://picsum.photos/280/400?random=91', icon: '🏙️', genre: 'ajaloosari' },
        { title: 'Dronningen', year: '2024', duration: '127 min', poster: 'https://picsum.photos/280/400?random=92', icon: '👸', genre: 'draama' },
        { title: 'Pealtnägija', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=93', icon: '📺', genre: 'uudised' },
        { title: 'Osoon', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=94', icon: '🌍', genre: 'keskkondsaade' },
        { title: 'Prillitoos', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=95', icon: '👓', genre: 'saade' },
        { title: 'Hommik Anuga', year: '2024', duration: '180 min', poster: 'https://picsum.photos/280/400?random=96', icon: '☀️', genre: 'hommikusaade' }
      ]
    },
    {
      id: 'news-and-magazines',
      title: 'Uudised ja magasinid',
      viewAllUrl: undefined,
      movies: [
        { title: 'Aktuaalne kaamera', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=97', icon: '📹', genre: 'uudised' },
        { title: 'Ringvaade', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=98', icon: '🌐', genre: 'uudised' },
        { title: 'Pealtnägija', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=99', icon: '📺', genre: 'uuriv' },
        { title: 'Reporter', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=100', icon: '🎤', genre: 'reportaaž' },
        { title: 'Impulss', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=101', icon: '⚡', genre: 'tehnoloogia' },
        { title: 'Maaleht', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=102', icon: '🌾', genre: 'maaelu' },
        { title: 'Terevisoon', year: '2024', duration: '50 min', poster: 'https://picsum.photos/280/400?random=103', icon: '👋', genre: 'nädalamagasin' },
        { title: 'ERR uudised', year: '2024', duration: '15 min', poster: 'https://picsum.photos/280/400?random=104', icon: '📰', genre: 'uudistesaade' }
      ]
    },
    {
      id: 'politics-and-society',
      title: 'Poliitika ja ühiskond',
      viewAllUrl: 'https://jupiter.err.ee/poliitika-ja-uhiskond',
      movies: [
        { title: 'Vabariigi kodanikud', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=105', icon: '🏛️', genre: 'poliitiline' },
        { title: 'Esimene stuudio', year: '2024', duration: '90 min', poster: 'https://picsum.photos/280/400?random=106', icon: '🎙️', genre: 'arutelu' },
        { title: 'Väitlus', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=107', icon: '⚖️', genre: 'debatt' },
        { title: 'Riigikogu ülekanded', year: '2024', duration: '120 min', poster: 'https://picsum.photos/280/400?random=108', icon: '🏛️', genre: 'otse' },
        { title: 'Mida teie arvate?', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=109', icon: '🤔', genre: 'arvamussaade' },
        { title: 'Kahekõne', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=110', icon: '💬', genre: 'intervjuu' },
        { title: 'Foorum', year: '2024', duration: '50 min', poster: 'https://picsum.photos/280/400?random=111', icon: '🗣️', genre: 'arutelu' },
        { title: 'Valimised 2024', year: '2024', duration: '180 min', poster: 'https://picsum.photos/280/400?random=112', icon: '🗳️', genre: 'otse' }
      ]
    },
    {
      id: 'culture',
      title: 'Kultuur',
      viewAllUrl: 'https://jupiter.err.ee/kultuur',
      movies: [
        { title: 'OP', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=113', icon: '🎨', genre: 'kultuur' },
        { title: 'Kultuuristuudio', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=114', icon: '🎭', genre: 'kultuurisaade' },
        { title: 'Plekktrumm', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=115', icon: '🥁', genre: 'muusika' },
        { title: 'Terevisioon', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=116', icon: '📺', genre: 'kultuurimagasin' },
        { title: 'Kunstiprogramm', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=117', icon: '🖼️', genre: 'kunst' },
        { title: 'Kirjandusring', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=118', icon: '📚', genre: 'kirjandus' },
        { title: 'Arhitektuur', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=119', icon: '🏗️', genre: 'arhitektuur' },
        { title: 'Filmiprogramm', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=120', icon: '🎬', genre: 'filmikultuur' }
      ]
    },
    {
      id: 'life-and-people',
      title: 'Elu ja inimesed',
      viewAllUrl: 'https://jupiter.err.ee/elu-ja-inimesed',
      movies: [
        { title: 'Elukool', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=121', icon: '🎓', genre: 'eluhäälestus' },
        { title: 'Inimesed', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=122', icon: '👥', genre: 'portree' },
        { title: 'Perekool', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=123', icon: '👨‍👩‍👧‍👦', genre: 'peresaade' },
        { title: 'Tervis pluss', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=124', icon: '🏥', genre: 'tervis' },
        { title: 'Naistemaailm', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=125', icon: '💐', genre: 'naistesaade' },
        { title: 'Kodumaised lood', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=126', icon: '🏠', genre: 'elulood' },
        { title: 'Sinuga on kõik korras', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=127', icon: '💆', genre: 'wellness' },
        { title: 'Õnne võtmed', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=128', icon: '🗝️', genre: 'eneseareng' }
      ]
    },
    {
      id: 'nature-and-science',
      title: 'Loodus ja teadus',
      viewAllUrl: 'https://jupiter.err.ee/loodus-ja-teadus',
      movies: [
        { title: 'Looduskalender', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=129', icon: '🌿', genre: 'loodus' },
        { title: 'Teadus+', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=130', icon: '🔬', genre: 'teadus' },
        { title: 'Osoon', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=131', icon: '🌍', genre: 'keskkond' },
        { title: 'Looduse aasta', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=132', icon: '🦋', genre: 'loodusfilm' },
        { title: 'Tehnika maailm', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=133', icon: '⚙️', genre: 'tehnika' },
        { title: 'Kosmose saladused', year: '2024', duration: '50 min', poster: 'https://picsum.photos/280/400?random=134', icon: '🚀', genre: 'astronoomia' },
        { title: 'Merebioloogia', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=135', icon: '🐋', genre: 'merebioloogia' },
        { title: 'Planeet Maa', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=136', icon: '🌎', genre: 'loodusfilm' }
      ]
    },
    {
      id: 'history',
      title: 'Ajalugu',
      viewAllUrl: 'https://jupiter.err.ee/ajalugu',
      movies: [
        { title: 'Eesti lugu', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=137', icon: '🏛️', genre: 'ajalugu' },
        { title: 'Sajandi sündmused', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=138', icon: '📜', genre: 'ajaloodokument' },
        { title: 'Mälestused', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=139', icon: '👴', genre: 'mälestused' },
        { title: 'Suur Isamaasõda', year: '2024', duration: '90 min', poster: 'https://picsum.photos/280/400?random=140', icon: '⚔️', genre: 'sõjaajalugu' },
        { title: 'Nõukogude aeg', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=141', icon: '🏭', genre: 'ajalooline' },
        { title: 'Vabadussõda', year: '2024', duration: '75 min', poster: 'https://picsum.photos/280/400?random=142', icon: '🛡️', genre: 'vabadussõda' },
        { title: 'Keskaeg Eestis', year: '2024', duration: '50 min', poster: 'https://picsum.photos/280/400?random=143', icon: '🏰', genre: 'keskaeg' },
        { title: 'Vikingite aeg', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=144', icon: '⚓', genre: 'muinasaeg' }
      ]
    },
    {
      id: 'lifestyle-and-travel',
      title: 'Elustiil ja reisimine',
      viewAllUrl: 'https://jupiter.err.ee/elustiil-ja-reisimine',
      movies: [
        { title: 'Reis ümber maailma', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=145', icon: '✈️', genre: 'reigifilm' },
        { title: 'Kodumaa radadel', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=146', icon: '🥾', genre: 'reisiprogramm' },
        { title: 'Maitsed', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=147', icon: '🍳', genre: 'kokandus' },
        { title: 'Elustiil', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=148', icon: '🌟', genre: 'elustiil' },
        { title: 'Kodu ja aed', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=149', icon: '🏡', genre: 'aiandus' },
        { title: 'Mood ja stiil', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=150', icon: '👗', genre: 'mood' },
        { title: 'Hobid ja käsitöö', year: '2024', duration: '25 min', poster: 'https://picsum.photos/280/400?random=151', icon: '🧶', genre: 'käsitöö' },
        { title: 'Tervisesport', year: '2024', duration: '30 min', poster: 'https://picsum.photos/280/400?random=152', icon: '🏃‍♀️', genre: 'sport' }
      ]
    },
    {
      id: 'entertainment',
      title: 'Meelelahutus',
      viewAllUrl: 'https://jupiter.err.ee/meelelahutus',
      movies: [
        { title: 'Kuulsuste lahing', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=153', icon: '⭐', genre: 'meelelahutus' },
        { title: 'Laulukarussell', year: '2024', duration: '90 min', poster: 'https://picsum.photos/280/400?random=154', icon: '🎵', genre: 'muusikasaade' },
        { title: 'Komöödiateater', year: '2024', duration: '120 min', poster: 'https://picsum.photos/280/400?random=155', icon: '😄', genre: 'komöödia' },
        { title: 'Mäng', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=156', icon: '🎲', genre: 'viktoriinisaade' },
        { title: 'Laululahing', year: '2024', duration: '90 min', poster: 'https://picsum.photos/280/400?random=157', icon: '🎤', genre: 'laulukonkurss' },
        { title: 'Kabaree', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=158', icon: '🎪', genre: 'vabarevüü' },
        { title: 'Stand-up', year: '2024', duration: '75 min', poster: 'https://picsum.photos/280/400?random=159', icon: '🎭', genre: 'stand-up' },
        { title: 'Varietee', year: '2024', duration: '90 min', poster: 'https://picsum.photos/280/400?random=160', icon: '🌟', genre: 'varietee' }
      ]
    },
    {
      id: 'retro-tv',
      title: 'Retro TV',
      viewAllUrl: 'https://jupiter.err.ee/retro-tv',
      movies: [
        { title: 'Tele-Bingo', year: '1991', duration: '60 min', poster: 'https://picsum.photos/280/400?random=161', icon: '🎱', genre: 'retro' },
        { title: 'Õnne 13 klassika', year: '1993', duration: '30 min', poster: 'https://picsum.photos/280/400?random=162', icon: '🏘️', genre: 'retrodraama' },
        { title: 'Laulupealinn', year: '1980', duration: '45 min', poster: 'https://picsum.photos/280/400?random=163', icon: '🎵', genre: 'retromuusika' },
        { title: 'Teleliinitud', year: '1985', duration: '30 min', poster: 'https://picsum.photos/280/400?random=164', icon: '📺', genre: 'retrosaar' },
        { title: 'Laste TV', year: '1970', duration: '25 min', poster: 'https://picsum.photos/280/400?random=165', icon: '🧸', genre: 'retrolapsed' },
        { title: 'Hommikutund', year: '1988', duration: '90 min', poster: 'https://picsum.photos/280/400?random=166', icon: '☀️', genre: 'retrohommik' },
        { title: 'Eesti kroon', year: '1992', duration: '30 min', poster: 'https://picsum.photos/280/400?random=167', icon: '💰', genre: 'majandus' },
        { title: 'TV panoraam', year: '1975', duration: '45 min', poster: 'https://picsum.photos/280/400?random=168', icon: '🌐', genre: 'retrouudised' }
      ]
    },
    {
      id: 'portrait',
      title: 'Portree',
      viewAllUrl: 'https://jupiter.err.ee/portree',
      movies: [
        { title: 'Arvo Pärt - helilooja', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=169', icon: '🎼', genre: 'helilooja' },
        { title: 'Jaan Kross - kirjanik', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=170', icon: '📖', genre: 'kirjanik' },
        { title: 'Neeme Järvi - dirigent', year: '2024', duration: '50 min', poster: 'https://picsum.photos/280/400?random=171', icon: '🎻', genre: 'dirigent' },
        { title: 'Enn Eesmaa - näitleja', year: '2024', duration: '55 min', poster: 'https://picsum.photos/280/400?random=172', icon: '🎭', genre: 'näitleja' },
        { title: 'Kaja Kallas - poliitik', year: '2024', duration: '45 min', poster: 'https://picsum.photos/280/400?random=173', icon: '🏛️', genre: 'poliitik' },
        { title: 'Erkki-Sven Tüür - helilooja', year: '2024', duration: '50 min', poster: 'https://picsum.photos/280/400?random=174', icon: '🎹', genre: 'helilooja' },
        { title: 'Lembit Peterson - näitleja', year: '2024', duration: '40 min', poster: 'https://picsum.photos/280/400?random=175', icon: '🎪', genre: 'näitleja' },
        { title: 'Ott Tänak - rallisõitja', year: '2024', duration: '60 min', poster: 'https://picsum.photos/280/400?random=176', icon: '🏎️', genre: 'sportlane' }
      ]
    }
  ];

  constructor() { }


  getMovieSections(): MovieSection[] {
    return this.movieSections;
  }

  getAllMovies(): Movie[] {
    return this.movieSections.reduce((allMovies, section) => {
      return allMovies.concat(section.movies);
    }, [] as Movie[]);
  }

  searchMovies(query: string): Movie[] {
    if (!query.trim()) {
      return [];
    }

    const searchTerm = query.toLowerCase();
    const allMovies = this.getAllMovies();

    return allMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm) ||
      (movie.genre && movie.genre.toLowerCase().includes(searchTerm)) ||
      (movie.year && movie.year.toLowerCase().includes(searchTerm))
    );
  }

  getMoviesBySection(sectionId: string): Movie[] {
    const section = this.movieSections.find(s => s.id === sectionId);
    return section ? section.movies : [];
  }

  getMovieByTitle(title: string): Movie | undefined {
    const allMovies = this.getAllMovies();
    return allMovies.find(movie => movie.title === title);
  }

  addToFavorites(movie: Movie): void {
    // In a real application, this would save to a backend or local storage
    console.log(`Added ${movie.title} to favorites`);
  }


  getRecommendedMovies(genre: string, limit: number = 5): Movie[] {
    const allMovies = this.getAllMovies();
    return allMovies
      .filter(movie => movie.genre?.toLowerCase() === genre.toLowerCase())
      .slice(0, limit);
  }

  getRecentlyAdded(limit: number = 10): Movie[] {
    // In a real application, this would be based on actual timestamps
    const allMovies = this.getAllMovies();
    return allMovies.slice(0, limit);
  }
}