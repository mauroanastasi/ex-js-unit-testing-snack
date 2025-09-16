const { getInitials, createSlug } = require("./functions.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials(`marco landi`)).toBe(`ml`)
})

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("CIAO")).toBe("ciao")
})
