function randomFunction() {
    const newRandomUUID = crypto.randomUUID();
    const newDate = Math.floor(Math.random() * 9999)
    return newRandomUUID + newDate
}

const random = randomFunction();

export default random;