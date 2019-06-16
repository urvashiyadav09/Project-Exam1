//----fetch api and create function to get information for human humanSpaceCraft designed by SpaceX-----//
fetch('https://api.spacexdata.com/v3/dragons')
  .then(result => result.json())
  .then((craftres) => {
    humanSpaceCraftdetails(craftres);
  })
  .catch(err => console.log(err))

  function humanSpaceCraftdetails(craftresult){

    for(i = 0; i < 2; i++){

    var ind = i+1;
    var craftID = 'craftdetails'+ind;
    var imgID = 'craftimg' + ind;
    var spaceImg = document.createElement('img');
    spaceImg.className +='craftLaunchImg';
    var spaceCraftInformation = document.getElementById(craftID);
    var spaceCraftImg = document.getElementById(imgID);

    spaceCraftInformation.innerHTML += '<span class="setfont"><b>Name: </b>' + craftresult[i].name + '</span>';
    spaceCraftInformation.innerHTML += '<span class="setfont"><b>Type: </b>' + craftresult[i].type + '</span>';
    spaceCraftInformation.innerHTML += '<span class="setfont"><b>First Flight: </b>' + craftresult[i].first_flight+ '</span>';
    spaceCraftInformation.innerHTML += '<span class="setfont"><b>Development Partner: </b>' + craftresult[i].heat_shield.dev_partner+ '</span>';
    spaceCraftInformation.innerHTML += '<span class="setfont"><b>Description: </b>' + craftresult[i].description+ '</span>';
    spaceCraftInformation.innerHTML += '<span class="setfont"><b>Wikipedia: </b>' + '<a class = "weblinks" href="' + craftresult[i].wikipedia + '" target="_blank">' + craftresult[i].wikipedia + '</a>' + '</span>';

    if(i == 0){
      spaceImg.src = craftresult[i].flickr_images[3];
      console.log((craftresult[i].flickr_images[3]));
      console.log(spaceImg);
    }
    else if (i==1){
      spaceImg.src = craftresult[i].flickr_images[0];
      console.log((craftresult[i].flickr_images[0]));
      console.log(spaceCraftImg);
    }
    spaceImg.width = 540;
    spaceImg.height = 360;

    spaceCraftImg.appendChild(spaceImg);


    }
}
