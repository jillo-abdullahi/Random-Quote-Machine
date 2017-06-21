function tweetQuote(){

  var quote = document.getElementById('quote-text').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(quote) +
    '.' +
    '&hashtags=' +
    'randomQuotes';

    window.open(tweetUrl);

}
