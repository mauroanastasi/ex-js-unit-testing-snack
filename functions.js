function getInitials(stringa) {
    return stringa.split(" ").map(p => p.charAt(0)).join("")
}

function createSlug(str) {
    return str.slice(0).toLowerCase()
}

module.exports = {
    getInitials,
    createSlug
};