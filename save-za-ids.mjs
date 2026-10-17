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
    const allPokemon = JSON.parse(fs.readFileSync('src/data/allPokemon.json', 'utf-8'));
    const matched = [];
    allPokemon.forEach(p => {
      const en = p.nameEn.toLowerCase();
      // Match >Name< or /name.
      if (data.toLowerCase().includes(`>${en}<`) || data.toLowerCase().includes(`/${en}.`) || data.toLowerCase().includes(`>${en} `)) {
        matched.push(p.id);
      }
    });

    console.log('Total ZA matched IDs count:', matched.length);
    fs.writeFileSync('src/data/zaPokemonIds.json', JSON.stringify(matched.sort((a,b) => a - b), null, 2));
    console.log('Saved src/data/zaPokemonIds.json');
  });
});
