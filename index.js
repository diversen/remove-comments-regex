function trimComments(str) {
    
    var uncommented = str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
    // Trim top and bottom
    return uncommented.replace(/^\s+|\s+$/g, '')
}

module.exports = trimComments
