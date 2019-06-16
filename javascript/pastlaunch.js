//----fetch api and create function to get information for SpaceX upcoming launch-----//
var pastLaunchLength = 0;
var j = 0;
fetch('https://api.spacexdata.com/v3/launches/past')
  .then(result => result.json())
  .then((pastres) => {
    pastLaunchDetails(pastres);
  })
  .catch(err => console.log(err))

function pastLaunchDetails(pastresult) {
  pastLaunchLength = pastresult.length;
  console.log(pastLaunchLength);

  for (i = 0; i < pastLaunchLength; i++) {

    if (pastresult[i].launch_success === true) {
      j += 1;

      //creating a div for past launch details
      pastLaunchInfoDiv = document.createElement('div');

      //setting id and classname for past launch info div
      var pastInfo = 'oldInfoMain' + j;
      pastLaunchInfoDiv.id = pastInfo;
      pastLaunchInfoDiv.className += 'oldDetailInfo';
      pastLaunchInfoDiv.style.display = 'block';

      //create variable to check image is available or not
      var pastLaunchImg = pastresult[i].links.flickr_images;

      //creating a div for past launch img
      var pastLaunchImgDiv = document.createElement('div');

      //setting id and classname for past launch img div
      var pastImg = 'oldImg' + j;
      pastLaunchImgDiv.id = pastImg;
      pastLaunchImgDiv.className += 'oldImgInfo';

      //creating a div for past launch text
      var pastLaunchTextDiv = document.createElement('div');

      //setting id and classname for past launch img div
      var pastLaunchInformation = 'oldInfo' + j;
      pastLaunchTextDiv.id = pastLaunchInformation;
      pastLaunchTextDiv.className += 'oldTextInfo';

      //call past launch image from API
      var oldImageCall = document.createElement('img');
      oldImageCall.className += 'LaunchesOldImageCall';
      //create paragraph for past launch information
      var pastLaunchInfo = document.createElement('p');

      //create variable to check the details is available or not in if else condition
      var pastLaunchDescription = pastresult[i].details;

      //check condition for launch sucess is true or false


      if (pastLaunchImg.length == 0) {
        oldImageCall.src = 'https://via.placeholder.com/340x280';

      } else {
        oldImageCall.src = pastresult[i].links.flickr_images[1];
        oldImageCall.width = 340;
        oldImageCall.height = 280;
      }

      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Mission Name: </b>' + pastresult[i].mission_name + '</span>';
      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Rocket Name: </b>' + pastresult[i].rocket.rocket_name + '</span>';
      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Date: </b>' + pastresult[i].launch_date_utc + "</span>";
      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Site Name: </b>' + pastresult[i].launch_site.site_name_long + '</span>';

      //if (pastLaunchDescription === null) {
      //  pastLaunchInfo.innerHTML += '<span class="setfont"><b>Details: </b>' + " Not Available" + '</span>';
      //} else {
      //  pastLaunchInfo.innerHTML += '<span class="setfont"><b>Details: </b>' + pastresult[i].details + '</span>';
      //}


      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Youtube: </b>' + '<a class = "weblinks" href="' + pastresult[i].links.video_link + '" target="_blank">' + pastresult[i].links.video_link + '</span>';
      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Launch Article: </b>' + '<a class = "weblinks" href="' + pastresult[i].links.article_link + '" target="_blank">' + pastresult[i].links.article_link + '</span>';
      pastLaunchInfo.innerHTML += '<span class="setfont"><b>Wikipedia: </b>' + '<a class = "weblinks" href="' + pastresult[i].links.wikipedia + '" target="_blank" >' + pastresult[i].links.wikipedia + '</span>';
      //append the image in pastLaunchImgDiv
      pastLaunchImgDiv.appendChild(oldImageCall);

      //append past launch information in pastLaunchText
      pastLaunchTextDiv.appendChild(pastLaunchInfo);

      //append the image in PastLaunchInfoDiv
      pastLaunchInfoDiv.appendChild(pastLaunchImgDiv);

      //append the pastLaunchTextDiv data in PastLaunchInfoDiv
      pastLaunchInfoDiv.appendChild(pastLaunchTextDiv);

      // setting display to none for more than two div's (first two are 1 and 2)
      if (j > 2) {
        pastLaunchInfoDiv.style.display = 'none';
      }

      //append the pastLaunchInfoDiv image data and text data in SpaceXpastlaunch_details defined in html
      document.getElementById('SpaceXpastlaunch_details').appendChild(pastLaunchInfoDiv);

    }
  }
}


/// setting view more (all) and view less (only 2) button properties
function viewAllPast() {
  for (i = 0; i < j; i++) {
    var k = i + 1;
    var pastLaunchId = 'oldInfoMain' + k;
    var dispDiv = document.getElementById(pastLaunchId);
    var disp_block = dispDiv.style.display;

    var view_button = document.getElementById('viewpast');
    // setting first two div's will allways appear
    if (i < 2) {
      document.getElementById('SpaceXpastlaunch_details').appendChild(dispDiv);
    }
    // setting view more and view less for rest of div's
    else {
      if (disp_block == "block") {
        dispDiv.style.display = "none";
        view_button.innerHTML = "View More";
        document.getElementById('SpaceXpastlaunch_details').appendChild(dispDiv);
      } else {
        dispDiv.style.display = "block";
        view_button.innerHTML = "View Less";
        document.getElementById('SpaceXpastlaunch_details').appendChild(dispDiv);
      }

    }
  }
}
