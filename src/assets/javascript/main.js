var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=owenerer&api_key=f7fe89c268ca8c37d726f6226b8b4a7d&format=json";
var nowListening = "";

function getTracks(){
  var items;
  $.getJSON( url, function( data ) {
    items = data.recenttracks;
    nowListening = items.track[0].name + " by " + items.track[0].artist['#text'];
    url = items.track[0].url;

    $( "#listen" ).html("Just listened to: <br>🎵 <a href='"+ url + "'>" + nowListening + "</a>");
    $( ".age").slideDown();

    return items;
  });
}

getTracks();

function funFact() {
  var facts = ["My favorite weekend activity is hiking","I'm a little obsessed with bikes"];
}

jQuery(document).ready(function($) {

    var siteUrl = 'http://'+(document.location.hostname||document.location.host);

    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        e.preventDefault();
        History.pushState({}, "", this.pathname);
    });

    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();
        $.get(State.url, function(data){
            document.title = $(data).find("title").text();
            $('.content').html($(data).find('.content'));
            _gaq.push(['_trackPageview', State.url]);
        });
    });

});

function shrink() {
    $('.hero').fadeOut(function(){

    });
    $('.menu-left').animate({
     width: 50,
    }, 1000, function() {

    });
    $('.right-box').addClass('fullSize');


}