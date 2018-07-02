document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value; // "dog"
    console.log("typedText is " + typedText);
    var alphabetizedTypedText = alphabetize(typedText);     // "dgo"
    console.log("alphabetizedTypedText is " + alphabetizedTypedText)

    for (i = 0; i < words.length; i++) {
        var currentWord = words[i];                             // "god"
        var alphabetizedCurrentWord = alphabetize(currentWord); // "dgo"

        if (alphabetizedTypedText == alphabetizedCurrentWord) {
            document.write(currentWord + " ");
        }

    }

}


//  sorts letters 
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
// function alphabetize(words) {
//     return b.toLowerCase().split("").sort().join("").trim();
// }

// Find Anagram

//    not sure if i need this
// alphabetize("lair") gives "ailr"
// alphabetize("liar") gives "ailr"
// alphabetize("rail") gives "ailr"
// alphabetize("least") gives "aelst"
// alphabetize("steal") gives "aelst"
