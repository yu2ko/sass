// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/apple', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('apple', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'apple',
    page: {
      title: 'Apple',
    },
    header: {
      links: [
        { text: 'Mac', url: '#Mac' },
        { text: 'iPad', url: '#iPad' },
        { text: 'iPhone', url: '#iPhone' },
        { text: 'Watch', url: '#Watch' },
        { text: 'AirPods', url: '#AirPods' },
      ],
      ad: {
        title:
          'Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.',
        link: {
          url: '#ad',
          text: 'Shop iPhone',
        },
      },
    },

    iphone_pro: {
      title: 'iPhone 14 Pro',
      descriptions: 'Pro. Beyond.',
      link: {
        text: ['Learn more', 'Buy'],
        link: 'www.example.com/iphone14',
      },
    },
    iphone: {
      title: 'iPhone 14',
      descriptions: 'Wonderfull.',
      link: {
        text: ['Learn more', 'Buy'],
        link: 'www.example.com/iphone14',
      },
    },
    iwatch: {
      title: 'Watch series 8',
      descriptions: 'A healthy leap ahead.',
      link: {
        text: ['Learn more', 'Buy'],
        link: 'www.example.com/iphone14',
      },
    },
    trade_in: {
      title: 'Trade In',
      descriptions: 'Upgrade and save. It’s that easy.',
      link: {
        text: 'See what your device is worth',
        link: 'www.example.com/traid-in',
      },
    },

    conference: {
      title: 'WWWDC23',
      descriptions:
        'Apple Worldwide Developers Conference Join us online June 5‑9.',
      link: {
        text: 'Learn more',
        link: 'www.example.com/wwwdc23',
      },
    },
    ipad: {
      title: 'Ipad',
      descriptions: 'Lovable. Drawable. Magical.',
      link: {
        text: ['Learn more', 'Buy'],
        link: 'www.example.com/ipad',
      },
    },
    small_business: {
      title: 'Apple for Small Business',
      descriptions: 'Easy. Powerful. Ready to run.',
      link: {
        text: 'Learn more',
        link: 'www.example.com/small-bus',
      },
    },
    gift: {
      title: 'Take your pick of Mother’s Day gifts.',
      descriptions:
        'So many ways to thank whoever you call Mom.',
      link: {
        text: 'Shop the gift guide',
        link: 'www.example.com/gift',
      },
    },
    card: {
      title: 'Card',
      descriptions:
        'Get up to 3% Daily Cash back with every purchase.',
      link: {
        text: 'Learn more',
        link: 'www.example.com/card',
      },
    },
    footer: [
      {
        title: 'Store',
        links: [
          { url: '#Mac', text: 'Mac' },
          { url: '#iPad', text: 'iPad' },
          { url: '#iPhone', text: 'iPhone' },
          { url: '#Watch', text: 'Watch' },
          { url: '#AirPods', text: 'AirPods' },
          { url: '#TV&Home', text: 'TV & Home' },
        ],
      },
      {
        title: 'Entertainment',
        links: [
          { url: '#AppleOne', text: 'Apple One' },
          { url: '#AppleTV+', text: 'Apple TV+' },
          { url: '#AppleMusic', text: 'Apple Music' },
          { url: '#AppleArcade', text: 'Apple Arcade' },
          { url: '#AppleFitness+', text: 'Apple Fitness+' },
        ],
      },
      {
        title: 'Apple Store',
        links: [
          { url: '#FindaStore', text: 'Find a Store' },
          { url: '#GeniusBar', text: 'Genius Bar' },
          { url: '#TodayatApple', text: 'Today at Apple' },
          { url: '#AppleCamp', text: 'Apple Camp' },
          {
            url: '#AppleStoreApp',
            text: 'Apple Store App',
          },
          {
            url: '#CertifiedRefurbished',
            text: 'Certified Refurbished',
          },
          { url: '#AppleTradeIn', text: 'Apple Trade In' },
        ],
      },
      {
        title: 'Apple Values',
        links: [
          { url: '#Accessibility', text: 'Accessibility' },
          { url: '#Education', text: 'Education' },
          { url: '#Environment', text: 'Environment' },
          {
            url: '#InclusionandDiversity',
            text: 'Inclusion and Diversity',
          },
          { url: '#Privacy', text: 'Privacy' },
        ],
      },
      {
        title: 'About Apple',
        links: [
          { url: '#Newsroom', text: 'Newsroom' },
          {
            url: '#AppleLeadership',
            text: 'Apple Leadership',
          },
          {
            url: '#CareerOpportunities',
            text: 'Career Opportunities',
          },
          { url: '#Investors', text: 'Investors' },
          {
            url: '#Ethics&Compliance',
            text: 'Ethics & Compliance',
          },
          { url: '#Events', text: 'Events' },
          { url: '#ContactApple', text: 'Contact Apple' },
        ],
      },
      {
        title: 'For Business',
        links: [
          {
            url: '#AppleandBusiness',
            text: 'Apple and Business',
          },
          {
            url: '#ShopforBusiness',
            text: 'Shop for Business',
          },
          {
            url: '#AppleandEducation',
            text: 'Apple and Education',
          },
          { url: '#ShopforK-12', text: 'Shop for K-12' },
          {
            url: '#ShopforCollege',
            text: 'Shop for College',
          },
        ],
      },
    ],
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
