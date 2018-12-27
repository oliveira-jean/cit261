// ---------------------------------------------------------------------
document.body.onload = getLocation;
//----------------------------------------------------------------------
document.getElementById('update_ico_img').onclick = function () {
    window.location.reload(true)
};

function hideSpin() {
    document.getElementById('loader_icon').style.display = "none";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
        document.getElementById('weather_info_text').innerHTML = "Geolocation is not supported by this browser.";
    }
}
//-------------------------------------------------------------------------
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    displayLocation(lat, lon);
}
//--------------------------------------------------------------------------
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('weather_info_text').innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('weather_info_text').innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('weather_info_text').innerHTML = "The request to get user location timed out. Please, reflesh the page.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('weather_info_text').innerHTML = "An unknown error occurred.";
            break;
    }
    hideSpin();
}
//--------------------------------------------------------------------------
function displayLocation(lat, lon) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lon);
    console.log("Latitude: " + lat);
    console.log("Longitude: " + lon);
    geocoder.geocode (
        { 'latLng': latlng },
        function (results, status) {
            var geoNeighborhood = " ";
            var geoCity = " ";
            var geoStateCode = " ";
            var geoCountry = " ";
            
            console.log(status);
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results);
                for (var r = 0; r < results.length; r++) {
                    //console.log(results[r]);
                    for (var t = 0; t < results[r].types.length; t++) {
                        //console.log(results[r].types[t]);
                        if ((results[r].types[t]) == ('sublocality_level_1')) {
                            geoNeighborhood = results[r].address_components[0].long_name;
                            console.log('Bairro:' + geoNeighborhood);
                        }
                        if ((results[r].types[t]) == ('administrative_area_level_2')) {
                            geoCity = results[r].address_components[0].long_name;
                            console.log('city:' + geoCity);
                        }
                        if ((results[r].types[t]) == 'administrative_area_level_1') {
                            geoStateCode = results[r].address_components[0].short_name;
                            console.log('state:' + geoStateCode);
                        }
                        if ((results[r].types[t]) == 'country') {
                            geoCountry = results[r].address_components[0].long_name;
                            console.log('country:' + geoCountry);
                        }
                    }
                }
                document.getElementById('geoNeighborhood').innerHTML = geoNeighborhood;
                document.getElementById('cityName').innerHTML = geoCity;
                document.getElementById('stateCode').innerHTML = geoStateCode;
                xhrrequest(lat, lon);
            } else {
                alert("Geocoder failed due to: " + status);
                hideSpin();
            }
        }
    );
}

//--------------------------------------------------------------------------
function xhrrequest(lat, lon) {
    var type = "accurate";
    var units = "metric";//Celsius
    var openWeatherMapKey = "8cd306ebf16ad6add7f9967f777421f3";
    var requestString = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&type=" + type + "&units=" + units + "&APPID=" + openWeatherMapKey;
    var request = new XMLHttpRequest();
    
    //Call the open function, GET-type of request, url, true-asynchronous
    request.open('GET', requestString, true);
    console.log(request);
        
    request.timeout = 3000;
    request.ontimeout = function () { 
    hideSpin();
    alert("Timed out! Try update button!"); };  
    
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var newweather = JSON.parse(request.responseText);
                console.log(newweather);
                //code for openweathermap.org weather data
                document.getElementById('temp_ico_img').src = '/images/weathericons/graus.svg';
                document.getElementById('gps_ico_img').src = '/images/weathericons/icon6.png';
                var weather_value = Math.round((newweather.main.temp * 10) / 10);
                document.getElementById('weather_value').innerHTML = weather_value;
                document.getElementById('weather_info_text').innerHTML = newweather.weather[0].description;
                document.getElementById('humidity').innerHTML = "Humidity  " + newweather.main.humidity;
                document.getElementById('temp_max').innerHTML = "Max.  " + newweather.main.temp_max;
                document.getElementById('temp_min').innerHTML = "Min.  " + newweather.main.temp_min;
                document.getElementById('pressure').innerHTML = "Pressure  " + newweather.main.pressure;
                document.getElementById('update_date').innerHTML = lastupdate();
                request.addEventListener('load', function (e) {
                    var newweather = JSON.parse(request.responseText);
                    var parentElement = document.getElementById("weather_info_box");
                    var childElement = document.createElement("img");
                    childElement.setAttribute('id', 'weather_ico_img');
                    childElement.src = '/images/weathericons/' + newweather.weather[0].icon + '.png';
                    parentElement.appendChild(childElement); 
                    // parentElement.insertBefore(childElement, parentElement.childNodes[0]);
                });
                hideSpin();
          } 
           else {
               //var weatherError = JSON.parse(request.responseText);
               alert(request.status + " --> " + request.statusText+" please, try again.");
               hideSpin();
            }
      }
};
    //call send
    request.send();
    //console.log(request);
    //Common Types of HTTP Status
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN
}

//--------------------------------------------------------------------------

/* 
function capital_letter(str) {
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}
 */
function lastupdate() {
    updateDate = new Date();
    theMonth = updateDate.getMonth() + 1;
    theDate = updateDate.getDate();
    theYear = updateDate.getFullYear();
    thehour = updateDate.getHours();
    theminutes = updateDate.getMinutes();
    lastWeatherUpdate = theMonth + "/" + theDate + "/" + theYear + " " + thehour + ":" + theminutes;
    return (lastWeatherUpdate);
}
