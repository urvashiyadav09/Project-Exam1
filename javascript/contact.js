fetch('https://api.spacexdata.com/v3/info')
  .then(result => result.json())
  .then((contactres) => {
    contactcompany(contactres);
  })
  .catch(err => console.log(err))

  //function to get contact information from api
    function contactcompany(contactresult) {

      //create paragraph for company contact textInfo
      var contactText = document.createElement('p');

      //set classname for abouttext abouttext paragraph
      contactText.className += 'contactInfo';

      contactText.innerHTML += '<span class="setfont"><b>Address: </b>' + contactresult.headquarters.address + '</span>';
      contactText.innerHTML += '<span class="setfont"><b>City: </b>' + contactresult.headquarters.city + '</span>';
      contactText.innerHTML += '<span class="setfont"><b>State: </b>' + contactresult.headquarters.state + '</span>';
      contactText.innerHTML += '<span class="setfont"><b>Website: </b>' + '<a href="' + contactresult.links.website + '" target="_blank">' + contactresult.links.website + '</a>' + '</span>';
      contactText.innerHTML += '<span class="setfont"><b>Flickr: </b>' + '<a href="' + contactresult.links.flickr + '" target="_blank">' + contactresult.links.flickr + '</a>' + '</span>';
      contactText.innerHTML += '<span class="setfont"><b>Twitter: </b>' + '<a class = "weblinks" href="' + contactresult.links.twitter + '" target="_blank">' + contactresult.links.twitter + '</a>' + '</span>';

      //append contactText data to contactcompany which is defined in innerHTML
      document.getElementById('contactcompany').appendChild(contactText);
    }
