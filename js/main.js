$(document).ready(function(){
  getQuote();
  changeBgColor();

  //function to change the background image on button click.
  /*function changeBackground(){

    var requri = "https://api.unsplash.com/photos/random?client_id=336b527b2e18d045045820b78062b95c825376311326b2a08f9b93eef7efc07b";
    $.getJSON(requri, function(result){
      var imageurl = result.urls.full;
      console.log(imageurl);

      $(".parallax-bottom").css('background-image', 'url('+imageurl+')');
      $(".parallax-top").css('background-image', 'url('+imageurl+')');
    });
  }*/

//function to get next quote
  function getQuote(){

    var uri = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(uri, function(results){
      var quote = results.quoteText;
      var author = results.quoteAuthor;

      if(author==""){
        document.getElementById("author-text").innerHTML = "<i> - Unknown</i>";
      }else{
        document.getElementById("quote-text").innerHTML = "<i class='fa fa-quote-left' aria-hidden='true'></i>"+" "+quote;
        document.getElementById("author-text").innerHTML = "<i>"+" - "+author+"</i>";
      }


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
//function to change background color on button click
function changeBgColor(){
  var color = 'rgb(' + Math.floor(Math.random() * 255) + ','
                   + Math.floor(Math.random() * 255) + ','
                   + Math.floor(Math.random() * 255) + ')';
    $(".section-quote").css('background-color',color);

}
//what happens when the next quote button gets clicked.
$("#next-quote-btn").on('click',function(){

  getQuote();
  changeBgColor();
  //changeBackground();

});
//what happens when the tweet button gets clicked.
$("#tweet-quote-btn").on('click',function(){
  tweetQuote();
});
document.getElementById("quote-text").css('font-family','Lato');

});
