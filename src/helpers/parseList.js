

class ParseList {
    constructor(aWords) {
        this.aWords = aWords
        this.aWordsParsed = []
    }

    /*
    Loops the list of words and creates an array of keys (alfabetical order of characters)
    and the list of words that contains this characters
     */

    parse() {
        const aWords = this.aWords.split("\n")
        var aWordsParsed = []
        aWords.forEach(function(value) {
            var _foo = value.split('')
            if(_foo !== "") {
                 _foo.splice(-1,1)
                _foo.sort()
                _foo = _foo.join('')
                if (aWordsParsed[_foo]) {
                    aWordsParsed[_foo].push(value)
                } else {
                    aWordsParsed[_foo] = [value]
                }
            }
        })
        this.aWordsParsed = aWordsParsed
    }
    /*
    Returns an array of anagramms
     */
    getAnagrams() {
        var aWords = []
        for (var key in this.aWordsParsed) {
            if (this.aWordsParsed[key].length > 1) {
                var _tmp = {}
                _tmp.alfa = key
                _tmp.words = this.aWordsParsed[key].join(' ')
                aWords.push(_tmp)
            }
        }
        aWords.sort((a, b) => (a.words > b.words) ? 1 : -1)
        return aWords
    }
}
export default ParseList