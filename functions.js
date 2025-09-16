function getInitials(stringa) {
    return stringa.split(" ").map(p => p.charAt(0)).join("")
}

module.exports = getInitials