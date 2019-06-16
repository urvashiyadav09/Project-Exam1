fetch('https://api.spacexdata.com/v3/info')
  .then(result => result.json())
  .then((aboutres) => {
    aboutcompany(aboutres);
  })
  .catch(err => console.log(err))

  //function to get summary from api
  function aboutcompany(aboutresult) {

    //create paragraph for company about textInfo
    var aboutText = document.createElement('p');

    //set classname for abouttext abouttext paragraph
    aboutText.className += 'companyInfo';

    aboutText.innerHTML += '<span>' + aboutresult.summary + '</span>';
    console.log(aboutresult.summary);
    //append aboutText data to aboutcompany which is defined in innerHTML
    document.getElementById('aboutcompany').appendChild(aboutText);
  }
  
