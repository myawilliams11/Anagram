document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value; // "dog"
    console.log("typedText is " + typedText);
    var alphabetizedTypedText = alphabetize(typedText);     // "dgo"
    console.log("alphabetizedTypedText is " + alphabetizedTypedText)
    document.getElementById("result")
    for (i = 0; i < words.length; i++) {
        var currentWord = words[i];                             // "god"
        var alphabetizedCurrentWord = alphabetize(currentWord); // "dgo"

        if (alphabetizedTypedText == alphabetizedCurrentWord) {
            result.textContent+=currentWord + " ";
        }

    }

}


//  sorts letters 
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
