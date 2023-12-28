MathJax.Hub.Config({
    jax: ["input/TeX", "output/HTML-CSS"],
    extensions: ["tex2jax.js"],
    "HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"] },
    tex2jax: { inlineMath: [ ["$", "$"], ["\\(","\\)"] ], displayMath: [ ["$$","$$"], ["\\[", "\\]"] ], processEscapes: true, ignoreClass: "tex2jax_ignore|dno" },
    TeX: { noUndefined: { attributes: { mathcolor: "red", mathbackground: "#FFEEEE", mathsize: "90%" } } },
    messageStyle: "none"
});
function searchRecipes(text) {
    const recipeDivs = document.getElementsByClassName("main-element");
    for (const element of recipeDivs){
        if ( !element.textContent.match(text) && text != "") {
            element.style.display = "none";
        } else if (text=="") {
            element.style.display = "flex";
        }
    }
}