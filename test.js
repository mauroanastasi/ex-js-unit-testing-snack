const getInitials = require("./functions.js")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials(`marco landi`)).toBe(`ml`)
})