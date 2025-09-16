function getInitials(stringa) {
    return stringa.split(" ").map(p => p.charAt(0)).join("")
}

function createSlug(str) {
    return str.slice(0).toLowerCase().split(" ").join("-")
}

function average(arr) {
    const somma = arr.reduce((acc, n) => acc + n, 0)
    const result = somma / arr.length
    return result
}

module.exports = {
    getInitials,
    createSlug,
    average,

};