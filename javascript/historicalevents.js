fetch('https://api.spacexdata.com/v3/history')
  .then(result => result.json())
  .then((eventres) => {
    historicalevents(eventres);
  })
  .catch(err => console.log(err))

function historicalevents(eventresult) {
var companyindex = 0;
  for (i = eventresult.length - 3; i < eventresult.length; i++) {
    companyindex = companyindex + 1;

    console.log(companyindex);

    var companyHistoryEvents = 'companyevents' + companyindex;
    console.log(companyHistoryEvents);

    //create paragraph for company historical events
    var eventText = document.createElement('p');

    //set classname for abouttext paragraph
    eventText.className += 'eventInfo';

    //create div for company historical events paragraph
    var histroyEventText = document.createElement('div');

    //set classname for histroyEventText div
    histroyEventText.className += 'histroyInfo';

    eventText.innerHTML += '<span class="setfont"><b>Title: </b>' + eventresult[i].title + '</span>';
    eventText.innerHTML += '<span class="setfont"><b>Launch Date: </b>' + eventresult[i].event_date_utc + '</span>';
    eventText.innerHTML += '<span class="setfont"><b>Details: </b>' + eventresult[i].details + '</span>';
    eventText.innerHTML += '<span class="setfont"><b>Wikipedia: </b>' + '<a class = "weblinks" href="' + eventresult[i].links.wikipedia + '" target="_blank">' + eventresult[i].links.wikipedia + '</a>' + '</span>';


    //append eventText data to histroyEventText dispDiv
    console.log(eventText);
    histroyEventText.appendChild(eventText);

    //append eventText data to companyevents which is defined in innerHTML
    document.getElementById(companyHistoryEvents).appendChild(histroyEventText);
  }
}
