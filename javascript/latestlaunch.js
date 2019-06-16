//----fetch api and create function to get information for latest launch of SpaceX-----//
fetch('https://api.spacexdata.com/v3/launches/latest')
  .then(result => result.json())
  .then((res) => {
    createdetails(res);
  })
  .catch(err => console.log(err))


function createdetails(result) {

  //call next launch image from API
  var latestImageCall1 = document.createElement('img');
  var latestImageCall2 = document.createElement('img');

  latestImageCall1.className +='latestLaunchImg';
  latestImageCall1.id +='latestLaunchImgTop';
  latestImageCall2.className +='latestLaunchImg';
  latestImageCall2.id +='latestLaunchImgBottom';

  //creating a div for next launch img
  var latestLaunchImgDiv = document.createElement('div');
  //setting classname for next launch img div
  latestLaunchImgDiv.className += 'latestImgInfo';

  //create paragraph for past launch information
  var latestLaunchInfo = document.createElement('p');
  //setting classname for paragraph div
  latestLaunchInfoDiv = document.createElement('div');;
  latestLaunchInfoDiv.className += 'latestPara';


  latestImageCall1.src = result.links.flickr_images[0];
  latestImageCall1.width = 391;
  latestImageCall1.height = 259;

  latestImageCall2.src = result.links.flickr_images[2];
  latestImageCall2.width = 391;
  latestImageCall2.height = 259;

  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Mission Name: </b>' + result.mission_name + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Rocket Name: </b>' + result.rocket.rocket_name + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Date: </b>' + result.launch_date_utc + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Site: </b>' + result.launch_site.site_name_long + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Customers: </b>' + result.rocket.second_stage.payloads[0].customers[0] + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Customers Nationality: </b>' + result.rocket.second_stage.payloads[0].nationality + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Manufactured in: </b>' + result.rocket.second_stage.payloads[0].manufacturer + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Details: </b>' + result.details + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Wikipedia: </b>' + '<a class = "weblinks" href="' + result.links.wikipedia + '" target="_blank">' + result.links.wikipedia + '</a>' + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Youtube Link: </b>' + '<a class = "weblinks" href="' + result.links.video_link + '" target="_blank">' + result.links.video_link + '</a>' + '</span>';
  latestLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Article: </b>' + '<a class = "weblinks" href="' + result.links.article_link + '" target="_blank">' + result.links.article_link + '</a>' + '</span>';


  //append latestImageCall to latestLaunchImgDiv
  latestLaunchImgDiv.appendChild(latestImageCall1);
  latestLaunchImgDiv.appendChild(latestImageCall2);
  latestLaunchInfoDiv.appendChild(latestLaunchInfo);

  //append latestLaunchImgDiv to latest_details defined in html
  document.getElementById('latest_details').appendChild(latestLaunchImgDiv);

  //append all latestLaunchInfo data in latest_details defined in html
  document.getElementById('latest_details').appendChild(latestLaunchInfoDiv);
}
