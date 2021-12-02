// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');
// Hit parade, classé du premier au dernier.
const hitParade = [{
    position: 1,
    artist: `Jain`,
    title: `Come`
  },
  {
    position: 2,
    artist: `Matt Simons`,
    title: `Catch & Realease`
  },
  {
    position: 3,
    artist: `Twety One Pilots`,
    title: `Stressed Out`,
  },
  {
    position: 4,
    artist: `Justin Bieber`,
    title: `Love Yourself`,
  },
  {
    position: 5,
    artist: `Kids United`,
    title: `On écrit sur les murs`,
  },
  {
    position: 6,
    artist: `Rihanna`,
    title: `Work`,
  },
  {
    position: 7,
    artist: `Julian Perretta`,
    title: `Miracle`,
  },
  {
    position: 8,
    artist: `Yall`,
    title: `Hundred Miles`,
  },
  {
    position: 9,
    artist: `Kendji Girac`,
    title: `No Me Mirès Màs`,
  },
  {
    position: 10,
    artist: `Feder`,
    title: `Blind (feat. Emmi)`,
  },
];

let statsCount = 0;

// Votre code va ici
// create a server object
const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    console.log(req.url);
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  switch (req.url) {
    case '/':
      res.write('Je m\'appelle Charlu, je m\'appelle Lili, vous êtes chez O\'clock');
      break;
    case '/classement':
      for (const index in hitParade) {
        res.write((`${hitParade[index].position} - ${hitParade[index].artist} - ${hitParade[index].title}`));
        res.write('<br>');
      }
      statsCount++;
      break;
    case '/stats':
      res.write(`Le classement a été consulté ${statsCount} fois.`);
      break;
    default:
      res.write('404');
  }
  
  res.end();
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`listen: ${PORT}`);
});

const displayClassement = () => {
  res.write('ici displayClassement');
  res.write('<br>');
};