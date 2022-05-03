  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.adviceslip.com/advice');

//   REQUEST -> RESPONSE, FETCHING THE JSON
  request.onload = function() {
      var response = request.response;
      console.log(response);
      console.log(typeof response);
      var parsedData = JSON.parse(response);
      console.log(parsedData);
      //console.log(jsonData);
      //console.log(typeof jsonData);

    //   GENERATING THE ADVICE WITH A LOOP
      for(item in parsedData) {
          var slip = parsedData[item].advice;
          var id = document.createElement('p');
          id.innerHTML = slip;
          document.body.appendChild(id);
          console.log(item);
          console.log(slip);
          console.log(data);
          
      }
  };
  request.send();
