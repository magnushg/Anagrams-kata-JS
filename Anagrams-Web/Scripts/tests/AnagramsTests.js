TestCase("Noanagrams", {
    "test should find 0 anagrams in empty word collection": function () {
        var anagramsFinder = new anagrams.AnagramsFinder();
        var found = anagramsFinder.find(new Array());

        assertEquals({}, found);
    },
    "test should find 1 anagram group with 2 words in word collection with 1 anagram word": function () {
        var anagramsFinder = new anagrams.AnagramsFinder();

        var found = anagramsFinder.find(new Array("love", "war", "peace", "raw"));

        assertEquals(2, found["arw"].length);
    },
    "test should find 1 anagram group with 2 words in word collection with whitespace": function () {
        var anagramsFinder = new anagrams.AnagramsFinder();

        var found = anagramsFinder.find(new Array("love ", "war ", " peace ", "raw"));

        assertEquals(2, found["arw"].length);
    },
    "test should find 1 anagram group with 2 words in word collection with different casing": function () {
        var anagramsFinder = new anagrams.AnagramsFinder();

        var found = anagramsFinder.find(new Array("Love", "war", "peace", "Raw"));

        assertEquals(2, found["arw"].length);
    }
});