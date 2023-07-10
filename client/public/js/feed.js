document.getElementById('portal_button').addEventListener('click', event => {
    goToLocation('https://my.marist.edu/');
  })

let feedNumber1 = {
  Title: 'New Marist',
  Body: 'Marist gets new dining hall supplier!'
  linkUrl: 'https://www.marist.edu/',
  imageUrl: '
}

let feedNumber2 = {
  Title: 
  Body: 
  linkUrl: 
  imageUrl: 
}

let feedNumber3 = {
  Title: 
  Body: 
  linkUrl: 
  imageUrl: 
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
