
const quotes = [
    {
        "quote": "Forget all the reasons why it won't work and believe the one reason why it will",
        "author": "Unknown"
    },
    {
        "quote": "Always do what you are afraid to do",
        "author": "Ralph Waldo Emerson"
    },

    {
        "quote": "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
        "author": "Sara Blakely"
    },
    {
        "quote": "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
        "author": "Unknown"
    },
    {
        "quote": " For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16",
        "author": "Jesus Christ"
    },
    {
        "quote": "The surest way to find your dream job is to create it.",
        "author": "Unknown"

    }
];
const color=['#00FFFF','#0000FF','#ADD8E6','#800080','#FF00FF','#808080','#A52A2A','#800000','#008000','#808000']
//window.onload= init
document.addEventListener("DOMContentLoaded", init, false);
function init(){
    generateQuote();  
}
function generateQuote(){
    let twitterLink="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
    let num = Math.floor(Math.random() * quotes.length)
    let col=Math.floor(Math.random() * color.length)
    let newQuote = quotes[num];
    let quoteLinkFormat=newQuote.quote.replaceAll(" ","%20")
    twitterLink+=quoteLinkFormat +"%22";
    let authorLinkFormat=newQuote.author.replaceAll(" ","%20")
    twitterLink+='-'+ authorLinkFormat

    document.getElementById('text').innerHTML = newQuote.quote;
    document.getElementById('author').innerHTML= newQuote.author;
    document.getElementById('tweet-quote').href = twitterLink;
    document.getElementsByTagName("body").style.backgroundColor = color[col];
    document.getElementById("text").style.color = color[col];
}