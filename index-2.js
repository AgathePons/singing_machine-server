// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');
const fs = require('fs');

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
let songCount = 0;

// create a server object
const server = http.createServer((req, res) => {
  // utf-8 in headers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // initialize result
  let result = '';
  // initializing count
  

  switch (req.url) {
      case "/":
          // update result
          result = `Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`;
          songCount++;
          console.log(songCount);
          break;
      case "/classement":
          result += "<ul>";
          for(const song of hitParade) {
              // result += ... est équivalent à result = result + ... 
              result += "<li>";
              result += song.position + " - " + song.title + " - " + song.artist;
              result +="</li>";
          }
          result += "</ul>";
          break;
      case "/stats":
          result = `La chanson a été vu ${songCount} fois`;
          break;
      // le cas par défaut représente les pages introuvables
      default:
          result = "Page introuvable";

          // si j'écris le writeHead après le write, le write va érire les headers
          // du coup writeHead va essayer de les réécrire et ça va tout faire planter
          res.writeHead(404);
          //res.write("Page introuvable");
          
          break;
  }

  // j'envoie mon résultat
  //console.log(result);
  res.end(result);
});

server.listen(3000, () => {
  console.log("coucou");
});