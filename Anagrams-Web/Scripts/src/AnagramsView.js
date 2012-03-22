var total = 0;
var startup = function () { $(document).ready(function () {
    var anagramsFinder = new anagrams.AnagramsFinder();

    $.get("/data/wordlist.txt", function (data) {
        $("#loading").show();
        var inputData = data.split("\n");
        var anagramsMap = anagramsFinder.find(inputData);

        _.each(anagramsMap, function (anagrams) {
            if (anagrams.length > 1) {
                $("#anagrams").append("<li class='anagram_group'>" + anagrams.join(" ") + "</li>");
                total++;
            }
        });
        $("#total").text("Total number of anagram groups: " + total);
        $("#loading").hide();
    });
});
};
startup();