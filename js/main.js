$(document).ready(function(){

  //function to change the background image on button click.
  function changeBackground(){

    var requri = "https://api.unsplash.com/photos/random?client_id=336b527b2e18d045045820b78062b95c825376311326b2a08f9b93eef7efc07b";
    $.getJSON(requri, function(result){
      var imageurl = result.urls.full;
      console.log(imageurl);

      $(".parallax-bottom").css('background-image', 'url('+imageurl+')');
    });
  }

//function to get next quote
  function getQuote(){

    var uri = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(uri, function(results){
      var quote = results.quoteText;
      var author = results.quoteAuthor;

      document.getElementById("quote-text").innerHTML = "<i class='fa fa-quote-left' aria-hidden='true'>"+" "+quote;
      document.getElementById("author-text").innerHTML = " - "+author;
    });
  }

//function to share quote on twitter
  function tweetQuote(){

    var quote = document.getElementById('quote-text').innerText;
    var tweetUrl = 'https://twitter.com/share?text=' +
      encodeURIComponent(quote) +
      '.' +
      '&hashtags=' +
      'randomQuotes';

      window.open(tweetUrl);
}
//what happens when the next quote button gets clicked.
$("#next-quote-btn").on('click',function(){

  getQuote();
  changeBackground();

});
//what happens when the tweet button gets clicked.
$("#tweet-quote-btn").on('click',function(){
  tweetQuote();
});

});
