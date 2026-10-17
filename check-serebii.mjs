import https from 'https';
import fs from 'fs';

const options = {
  hostname: 'www.serebii.net',
  path: '/legendsz-a/lumiosepokedex.shtml',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Serebii pokedex table usually has <td class="fooinfo">#001</td> or links to pokemon
    const matches = data.match(/href="\/legendsz-a\/pokemon\/([a-z0-9_-]+)\.shtml"/gi) ||
                    data.match(/href="\/pokemon\/([a-z0-9_-]+)"/gi) ||
                    data.match(/#\d{3,4}/g);
    console.log('Matches length:', matches ? matches.length : 0);
    if (matches) {
      console.log('Sample matches:', matches.slice(0, 20));
    }

    // Search for pokemon names in allPokemon
    const allPokemon = JSON.parse(fs.readFileSync('src/data/allPokemon.json', 'utf-8'));
    const found = [];
    allPokemon.forEach(p => {
      const en = p.nameEn.toLowerCase();
      if (data.toLowerCase().includes(`>${en}<`) || data.toLowerCase().includes(`/${en}.`)) {
        found.push(p);
      }
    });
    console.log('Matched allPokemon species count:', found.length);
    console.log('Sample matched:', found.slice(0, 15).map(p => p.nameKo));
  });
});
