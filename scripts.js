/*
Note to people testing this and noticing that the google page might have the ERR_BLOCKED_BY_RESPONSE error, or would just prefer a different engine:
    In the following function, just change the linkStart variable to another search engine's url. The default is "https://www.google.com/search?q=", but you could just
    change it to "https://duckduckgo.com/?q=" for DuckDuckGo, or whatever search engine you want.
    
Also, feel free to add some more 😏 queries to the list.
*/

function genFunnyQuery() {
    var linkStart = "https://www.google.com/search?q=";
    var sillyQueries = ["endangered%20animal%20recipes", "pron", "child%20pron", "cocomelon%20r34", "what%20does%20coom%20taste%like", "pokemon%20inflation", "cocaine%20purchase" "h3ntai%20pics%20free", "free%20drugs", "how%20to%20get%20b1tches"];
    var randQuery = sillyQueries[Math.floor(Math.random()*sillyQueries.length)];
    var fullQuery = linkStart + randQuery;
    window.open(fullQuery);
