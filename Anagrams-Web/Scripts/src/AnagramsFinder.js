anagrams = {};

anagrams.AnagramsFinder = function() {
};

anagrams.AnagramsFinder.prototype.find = function (words) {
    var anagrams = {};
    _.each(words, function (word) {
        var anagramsKey = word.trim().toLowerCase().split("").sort().join("");

        if (anagrams[anagramsKey]) {
            anagrams[anagramsKey].push(word);
        }
        else {
            anagrams[anagramsKey] = [word];
        }
    });
    return anagrams;
}