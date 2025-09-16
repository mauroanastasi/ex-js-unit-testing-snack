const { getInitials, createSlug, average } = require("./functions.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials(`marco landi`)).toBe(`ml`)
})

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("CIAO")).toBe("ciao")
    expect(createSlug("Questo e un test")).toBe("questo-e-un-test")
})

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 6, 5, 6, 8])).toBe(6)
})
