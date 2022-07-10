import random from './getRandomUUID.ts'

console.log(Deno.version)

Deno.env.set('port', '8500')
console.log(Deno.env.get('port'))

console.log(random)

// $ deno run --allow-env index.ts