var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=owenerer&api_key=f7fe89c268ca8c37d726f6226b8b4a7d&format=json";
var nowListening = "";

function getTracks(){
  var items;
  $.getJSON( url, function( data ) {
    items = data.recenttracks;
    console.log(time);
    var time = "right now"
    /*
    if(time != "right now") {
    time = items.track[1].date['#text'];

    time = moment(time).fromNow();
  }*/
    nowListening = items.track[0].name + " by " + items.track[0].artist['#text'];
    url = items.track[0].url;
    /*
    if (time == "right now") {
       $( "#listen" ).html("Listening to <i><a href='"+ url + "'>" + nowListening + "</a></i> " + time);
    }
    else {*/
      $( "#listen" ).html("🎶 Just listened to <i><a href='"+ url + "'>" + nowListening + "</a></i> ");
    //}

    $( ".age").slideDown();

    return items;
  });
}

getTracks();

function shrink() {
    $('.hero').fadeOut(function(){

    });
    $('.menu-left').animate({
     width: 50,
    }, 1000, function() {

    });
    $('.right-box').addClass('fullSize');
}
