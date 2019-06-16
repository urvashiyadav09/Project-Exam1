fetch('https://api.spacexdata.com/v3/launches/next')
  .then(result => result.json())
  .then((nextres) => {
    nextLaunchDetails(nextres);
  })
  .catch(err => console.log(err))

function nextLaunchDetails(nextresult) {
  var nextLaunchLength = nextresult.length;

  //creating a div for all next launch Details
  var nextLaunchDetailsDiv = document.createElement('div');
  //setting classname for next launch img div
  nextLaunchDetailsDiv.className += 'allnextlaunchdetils';

  //creating a div for next launch img
  var nextLaunchImgDiv = document.createElement('div');
  //setting classname for next launch img div
  nextLaunchImgDiv.className += 'nextImgInfo';

  //creating a div for next launch text
  var nextLaunchTextDiv = document.createElement('div');
  //setting classname for next launch img div
  nextLaunchTextDiv.className += 'nextTextInfo';

  //create paragraph for past launch information
  var nextLaunchInfo = document.createElement('p');

  //create variable to check the article link is available or not in if else condition
  var manufacturcompany = nextresult.links.article_link;

  //create variable to check the article link is available or not in if else condition
  var nextLaunchArticle = nextresult.links.article_link;

  //create variable to check the wikipedia link is available or not in if else condition
  var nextLaunchwikipedia = nextresult.links.wikipedia;

  //create variable to check the youtube link is available or not in if else condition
  var nextLaunchyoutube = nextresult.links.video_link;

  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Mission Name: </b>' + nextresult.mission_name + '</span>';
  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Rocket Name: </b>' + nextresult.rocket.rocket_name + '</span>';
  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Date: </b>' + nextresult.launch_date_utc + '</span>';
  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Customers: </b>' + nextresult.rocket.second_stage.payloads[0].customers[0] + '</span>';
  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Customers Nationality: </b>' + nextresult.rocket.second_stage.payloads[0].nationality + '</span>';

  if (manufacturcompany !== null) {
  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Manufactured in: </b>' + nextresult.rocket.second_stage.payloads[0].manufacturer + '</span>';
}

  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Site: </b>' + nextresult.launch_site.site_name_long + '</span>';
  nextLaunchInfo.innerHTML += '<span class="setfont"><b>Details: </b>' + nextresult.details + '</span>';

  if (nextLaunchwikipedia !== null) {
    nextLaunchInfo.innerHTML += '<span class="setfont"><b>Wikipedia: </b>' + '<a class = "weblinks" href="' + nextresult.links.wikipedia + '" target="_blank">' + nextresult.links.wikipedia + '</a>' + '</span>';
  }

  if (nextLaunchyoutube !== null) {
    nextLaunchInfo.innerHTML += '<span class="setfont"><b>Youtube Link: </b>' + '<a class = "weblinks" href="' + nextresult.links.video_link + '" target="_blank">' + nextresult.links.video_link + '</span>';
  }

  if (nextLaunchArticle !== null) {
    nextLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Article: </b>' + '<a class = "weblinks" href="' + nextresult.links.article_link + '" target="_blank">' + nextresult.links.article_link + '</span>';
  }

  //create variable to check image is available or not
  var nextLaunchImg = nextresult.links.flickr_images;

  //call next launch image from API
  var nextImageCall = document.createElement('img');
  nextImageCall.id +="lauchesNextImage";

  if (nextLaunchImg.length == 0) {
    nextImageCall.src = 'https://via.placeholder.com/300x430';
  } else {
    nextImageCall.src = nextresult.links.flickr_images[1];
    nextImageCall.width = 300;
    nextImageCall.height = 430;
  }

  //append next launch image in nextLaunchImgDiv
  nextLaunchImgDiv.appendChild(nextImageCall);

  //append next launch information in nextLaunchTextDiv
  nextLaunchTextDiv.appendChild(nextLaunchInfo);

  //append nextLaunchImgDiv and nextLaunchTextDiv to nextLaunchDetailsDiv
  nextLaunchDetailsDiv.appendChild(nextLaunchImgDiv);
  nextLaunchDetailsDiv.appendChild(nextLaunchTextDiv);


  //append all nextLaunchDetailsDiv data in SpaceXNextlaunch_details defined in html
  document.getElementById('SpaceXNextLaunch_details').appendChild(nextLaunchDetailsDiv);

}
