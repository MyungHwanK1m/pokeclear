import fs from 'fs';

const html = fs.readFileSync('src/data/serebii_za.html', 'utf-8');
const allPokemon = JSON.parse(fs.readFileSync('src/data/allPokemon.json', 'utf-8'));

// Serebii typically links to /pokemon/{name} or /pokedex-sv/{num}.shtml or has <td class="fooinfo">No.</td>
const lines = html.split('\n');
const zaPokemonIds = new Set();

// Find any pokedex-XX/\d+.shtml
const pkmRegex = /\/pokedex[a-z0-9-]*\/(\d{3,4})\.shtml/g;
let m;
while ((m = pkmRegex.exec(html)) !== null) {
  const id = parseInt(m[1], 10);
  if (id >= 1 && id <= 1025) {
    zaPokemonIds.add(id);
  }
}

// Also check /pokemon/
const pkmRegex2 = /\/pokemon\/(\d{3,4})\.shtml/g;
while ((m = pkmRegex2.exec(html)) !== null) {
  const id = parseInt(m[1], 10);
  if (id >= 1 && id <= 1025) {
    zaPokemonIds.add(id);
  }
}

console.log('Extracted ZA Pokemon count:', zaPokemonIds.size);
console.log('IDs:', Array.from(zaPokemonIds).sort((a,b) => a - b).slice(0, 30));

fs.writeFileSync('src/data/zaPokemonIds.json', JSON.stringify(Array.from(zaPokemonIds).sort((a,b) => a - b), null, 2));
