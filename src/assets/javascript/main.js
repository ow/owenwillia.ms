var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=owenerer&api_key=f7fe89c268ca8c37d726f6226b8b4a7d&format=json";
var nowListening = "";

function getTracks(){
  var items;
  $.getJSON( url, function( data ) {
    items = data.recenttracks;
    console.log(items.track[1].date['#text']);
    nowListening = items.track[0].name + " by " + items.track[0].artist['#text'];
    url = items.track[0].url;

    $( "#listen" ).html("Just listened to: <br>🎵 <a href='"+ url + "'>" + nowListening + "</a>");
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

var age, daysBetweenDates;

daysBetweenDates = function(d1, d2) {
  var diffDays, oneDay;
  oneDay = 24 * 60 * 60 * 1000;
  diffDays = (d2 - Date.parse(d1)) / oneDay;
  return diffDays;
};

age = function() {
  theAge = daysBetweenDates('Jan 7, 1991 00:06:00', new Date()) / 365;
  test = parseFloat(theAge).toFixed(9);
  $('#myAge').text(test + " years old.");
};

setInterval(age, 25);