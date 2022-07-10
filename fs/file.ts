const fileName = './demo.txt'

let readTxtFile;

await Deno.mkdir('nodejs')
await Deno.remove('nodejs')

readTxtFile = await Deno.readTextFile(fileName)

await Deno.writeTextFile(fileName, `\nhello kishor\n`, { append: true })

readTxtFile = await Deno.readTextFile(fileName)

console.log(readTxtFile)

// $ deno run --allow-read --allow-write file.ts