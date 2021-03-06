// deno-lint-ignore-file
import * as oak from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new oak.Application()
const router = new oak.Router()

router.get('/', ({ response }: { response: any }) => {
    response.body = "hello kishor"
})

router.get('/bio', ({ response }: { response: any }) => {
    response.body = {
        name: "kishor",
        age: 12,
        learn: "deno",
        address: "Nepal"
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

const port = 5000;
console.log(`server is running - http://localhost:${port}`)
await app.listen({ port })

// please do check the note.txt
// there is a way of how we can use denon or install it

// run the script in terminal
// $ denon run --allow-net server.ts 