import dotenv from 'dotenv';
dotenv.config();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = process.env['FAVORITE_FOOD'];
  console.log(`My favorite food is ${favoriteFood}`);
  while(true) {
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
