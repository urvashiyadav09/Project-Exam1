//----fetch api and create function to get information for SpaceX upcoming launch-----//
var upcomingLaunchLength = 0;
var launchInfoDiv = "";
fetch('https://api.spacexdata.com/v3/launches/upcoming')
  .then(result => result.json())
  .then((upcomingres) => {
    upcomingLaunchDetails(upcomingres);
  })
  .catch(err => console.log(err))

function upcomingLaunchDetails(upcomingresult) {
  upcomingLaunchLength = upcomingresult.length;

  for (i = 0; i < upcomingLaunchLength; i++) {

    // creating div blocks for outer, image and text
    launchInfoDiv = document.createElement('div');
    launchInfoDiv.style.display = 'block';
    var textDiv = document.createElement('textdiv');
    var imgDiv = document.createElement('imgDiv');

    // setting id and class name for outer div
    var launchID = 'launch' + i;
    launchInfoDiv.id += launchID;
    launchInfoDiv.className += 'mainInfo';

    // setting id and class for text div
    var textID = 'text' + i;
    textDiv.id += textID;
    textDiv.className += 'textInfo';

    // setting id and class for image div
    var imgID = 'image' + i;
    imgDiv.id += imgID;
    imgDiv.className += 'imgInfo';

    //create variable to check the details in if else condition
    var launchDescription = upcomingresult[i].details;

    //create variable to check the wikipedia in if else condition
    var wikipediaLink = upcomingresult[i].links.wikipedia;

    //create variable to check the youtube vedio in if else condition
    var youtubeLink = upcomingresult[i].links.video_link;

    //create variable to check the article link in if else condition
    var articleLink = upcomingresult[i].links.article_link;

    //create paragraph to append all upcoming launch data
    var upcomingInfoPara = document.createElement('p');

    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Mission Name: </b>' + upcomingresult[i].mission_name + '</span>';
    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Rocket Name: </b>' + upcomingresult[i].rocket.rocket_name + '</span>';
    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Launch Date: </b>' + upcomingresult[i].launch_date_utc + '</span>';
    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Launch Site Name: </b>' + upcomingresult[i].launch_site.site_name_long + '</span>';
    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Customers: </b>' + upcomingresult[i].rocket.second_stage.payloads[0].customers[0] + '</span>';
    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Customers Nationality: </b>' + upcomingresult[i].rocket.second_stage.payloads[0].nationality + '</span>';

    if (launchDescription === null) {
      upcomingInfoPara.innerHTML += '<span class="setfont"><b>Description: </b>' + " Not Available" + "</span>";
    } else {
      upcomingInfoPara.innerHTML += '<span class="setfont"><b>Description: </b>' + upcomingresult[i].details + "</span>";
    }

    if (wikipediaLink !== null) {
        upcomingInfoPara.innerHTML += '<span class="setfont"><b>Wikipedia: </b>' + '<a href="' + upcomingresult[i].links.wikipedia + '" target="_blank">' + upcomingresult[i].links.wikipedia +'</a>'+ '</span>';
    }

    if (youtubeLink !== null) {
      upcomingInfoPara.innerHTML += '<span class="setfont"><b>Youtube Link: </b>' + '<a href="' + upcomingresult[i].links.video_link + '" target="_blank">' + upcomingresult[i].links.video_link + '</span>';
    }

    if (articleLink !== null) {
    upcomingInfoPara.innerHTML += '<span class="setfont"><b>Launch Article: </b>' + '<a href="' + upcomingresult[i].links.article_link + '" target="_blank">' + upcomingresult[i].links.article_link + '</span>';
  }

    // calling imag from api
    var upcomeImg = document.createElement('img');
    upcomeImg.className += 'lauchesUpcomeImg';

    //create variable to check image is available or not
    var upcomeApiImg = upcomingresult[i].links.flickr_images;

    if (upcomeApiImg.length == 0) {
      upcomeImg.src = 'https://via.placeholder.com/250x360';
    } else {
        upcomeImg.src = nextresult.links.flickr_images[1];
        upcomeImg.width = 250;
        upcomeImg.height = 460;
    }

    imgDiv.appendChild(upcomeImg);
    launchInfoDiv.appendChild(imgDiv);

    textDiv.appendChild(upcomingInfoPara);
    launchInfoDiv.appendChild(textDiv);

    // setting display to none for more than two div's (first two are 0 and 1)
    if(i>1){
      launchInfoDiv.style.display = 'none';
    }
    document.getElementById('SpaceXupcoming_details').appendChild(launchInfoDiv);

  }
}

  // setting view more (all) and view less (only 2) button properties
  function viewAll() {
    for (i = 0; i < upcomingLaunchLength; i++) {
      var launchID = 'launch' + i;
      var dispDiv = document.getElementById(launchID);
      var disp_block = dispDiv.style.display;

      var view_button = document.getElementById('view');
      // setting first two div's will allways appear
      if (i < 2) {
          document.getElementById('SpaceXupcoming_details').appendChild(dispDiv);
      }
      // setting view more and view less for rest of div's
      else {
        if (disp_block == "block") {
          dispDiv.style.display = "none";
          view_button.innerHTML = "View More";
          document.getElementById('SpaceXupcoming_details').appendChild(dispDiv);
        } else {
          dispDiv.style.display = "block";
          view_button.innerHTML = "View Less";
          document.getElementById('SpaceXupcoming_details').appendChild(dispDiv);
        }

      }
    }
  }
