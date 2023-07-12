document.getElementById('portal_button').addEventListener('click', event => {
    goToLocation('https://my.marist.edu/');
  })

let feedNumber1 = {
  Title: 'Marist College Gets New Food Provider',
  Body: 'Marist Gets New Pizza And Different Types Of ',
  linkUrl: 'https://www.marist.edu/',
  imageUrl: '/images/news_pic.jpg'
}

let feedNumber2 = {
  Title: 'The New York Knicks Finally Make The PlayOffs"',
  Body: 'The New York Knicks made the playoffs then lost in the Eastern Conference Semifinals',
  linkUrl: 'https://champsorchumps.us/team/nba/new-york-knicks#:~:text=The%20New%20York%20Knicks%20last,times%20in%20their%2074%20seasons.',
  imageUrl: '/images/newyorkknicks.jpg'
}

let feedNumber3 = {
  Title: 'This New Travel Baskebtall Team Is Taking Over New York And Texas',
  Body: 'A Person named Cam Wilder made a team of amazing players and they keep winning the championship back to back',
  linkUrl: 'https://www.ballertv.com/streams/rod-wave-elite-vs-tf-elite-20220903010631-jfcdng8',
  imageUrl: '/images/travelteam.jpeg'
}

var currentStories = [feedNumber1, feedNumber2, feedNumber3]

window.addEventListener("load", () => {
  for(var i=0; i < currentStories.length; i++){
    displayFeed(currentStories[i]);

  }
});

function displayFeed(currentStories){
  let feed = document.getElementById('newsfeed');
  feed.innerHTML += "<span><img class ='myImage' src ='" + currentStories.imageUrl +"'>" +"</span>";
  feed.innerHTML += "<span><h2><a href+'" + currentStories.linkUrl+ "'> " + currentStories.Title + "</a></h2></span>"
  feed.innerHTML += "<span>" +currentStories.Body + "</span>";
  feed.innerHTML += "<hr />"
}
