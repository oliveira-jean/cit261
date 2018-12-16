// ---------------------------------------------------------------------
document.body.onload = getLocation;
//----------------------------------------------------------------------
document.getElementById('update_ico').onclick = function (){
                   window.location.reload(true);
        };

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
        document.getElementById('weather_info_text').innerHTML = "Geolocation is not supported by this browser.";
        document.getElementById('loader_icon').style.display = "none";
    }
}
//-------------------------------------------------------------------------
function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    displayLocation(lat, lon);
}
//--------------------------------------------------------------------------
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
        document.getElementById('weather_info_text').innerHTML = "User denied the request for Geolocation. Enter the location name.";
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
}
//--------------------------------------------------------------------------
function displayLocation(latitude, longitude) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);
    geocoder.geocode(
        { 'latLng': latlng },
        function (results, status) {
            var geoCity = "? City ?";
            var geoCountry = "*? Country ?";
            var geoStateCode = "? State ?";
            console.log(results);
            console.log(status);
            if (status == google.maps.GeocoderStatus.OK) {
                for (var r = 0; r < results.length; r++) {
                    if ((results[r].types[0]) == ('locality'||'sublocality')) {
                        geoCity = results[r].address_components[0].long_name;
                        console.log('city:' + geoCity);
                    }
                    if ((results[r].types[0]) == 'administrative_area_level_1') {
                        geoStateCode = results[r].address_components[0].short_name;
                        console.log('state:' + geoStateCode);
                    }
                    if ((results[r].types[0]) == 'country') {
                        geoCountry = results[r].address_components[0].long_name;
                        console.log('country:' + geoCountry);
                    }
                } xhrrequest(geoCity, geoStateCode, geoCountry);
            } else {
                alert("Geocoder failed due to: " + status);
                document.getElementById('loader_icon').style.display = "none";
            }

        }

    );

}

//--------------------------------------------------------------------------
function xhrrequest(geoCity, geoStateCode, geoCountry) {
    var openWeatherMapKey = "8cd306ebf16ad6add7f9967f777421f3";
    var unitCelsius = "&units=metric";//for Celsius
    var requestString = "https://api.openweathermap.org/data/2.5/weather?q=" + geoCity + "&APPID=";
    var request = new XMLHttpRequest();
    var url = requestString + openWeatherMapKey + unitCelsius;
    //Call the open function, GET-type of request, url, true-asynchronous
    request.open('GET', url, true);
    
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var newweather = JSON.parse(request.responseText);
                document.getElementById('weather_ico_img').src = '/images/weathericons/' + newweather.weather[0].icon + '.png';
                var weather_value = (Math.round((newweather.main.temp) * 10) / 10).toFixed(1);
                console.log(request);
                console.log(newweather);
                document.getElementById('weather_value').innerHTML = weather_value;
                document.getElementById('cityName').innerHTML = newweather.name;
                document.getElementById('stateCode').innerHTML = geoStateCode;
                document.getElementById('countryId').innerHTML = geoCountry;
                document.getElementById('weather_info_text').innerHTML = newweather.weather[0].description;
                document.getElementById('update_date').innerHTML = lastupdate();
                console.log(document.getElementById('weather_info_text').innerHTML = newweather.weather[0].description);
                document.getElementById('loader_icon').style.display = "none";
            }
            else {
                alert(request.status);
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