import * as mod from "https://deno.land/std@0.147.0/datetime/mod.ts";

const dayOfYear = mod.dayOfYear(new Date())

const weekOfYear = mod.weekOfYear(new Date())
const formatDate = mod.format(new Date(), "dd.MM.yyyy")

console.log(dayOfYear)
console.log(weekOfYear)
console.log(formatDate)
