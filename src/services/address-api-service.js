const AddressApiService = {
  getPolygon(zip) {
    return fetch(`https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?apiKey=ad7ae12b6267452bb43785a9d63ff348&version=4.01&zip=${zip}&format=json`)
      .then(res => res.json())
      .then(responseJ => {
        if (responseJ.FeatureMatchingResultType !== "Success") {
          throw new Error("Invalid Address!")
        }
        else {
          const lat = parseFloat(responseJ.OutputGeocodes[0].OutputGeocode.Latitude);
          const long = parseFloat(responseJ.OutputGeocodes[0].OutputGeocode.Longitude);
          return [long, lat];
        }
      })
      .then(coordinates => {
        return Promise.all([this.makePolygon(coordinates), this.getLocationKey(coordinates), this.getLocationImg(coordinates)])
      })
      .then(([polygon, key, img]) => {
        return Promise.all([this.getPolygonId(polygon).then(id => this.getMoisture(id)), this.getRainForecast(key), img])
            .then(([moisture, forecast, img]) => {
              return {
                moisture,
                forecast,
                img
              }
            })
      })


  },

  makePolygon(coordinatesArray) {
    //adds area around the coordinate of user's input address
    const point1 = [coordinatesArray[0], coordinatesArray[1]];
    const point2 = [coordinatesArray[0] + 0.00957, coordinatesArray[1] - 0.000137];
    const point3 = [coordinatesArray[0] + 0.0139, coordinatesArray[1] - 0.005551];
    const point4 = [coordinatesArray[0] + 0.00015, coordinatesArray[1] - 0.005679];
    const point5 = [coordinatesArray[0], coordinatesArray[1]];
    return [point1, point2, point3, point4, point5];
  },

  getPolygonId(coordinates) {
    //gets the "id" of the polygon made from user's address so the Agro API can gather soil data
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://api.agromonitoring.com/agro/1.0/polygons?appid=aab65eca5bf8aebc54f670d83d9ec0d9";
    const body = {
      name: "Polygon Sample",
      geo_json: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [coordinates]
        }
      }
    };

    const options = {
      method: "POST",
      // mode: 'cors',
      headers: {
        'content-type': "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(body)
    };

    return fetch(proxyurl + url, options)
      .then(response => response.json())
      .then(responseJson => responseJson.id);

  },
  
  getMoisture(id) {
    //uses the "id" from the polygon to get soil moisture data
    const url = `https://api.agromonitoring.com/agro/1.0/soil?polyid=${id}&appid=aab65eca5bf8aebc54f670d83d9ec0d9`;

  return fetch(url)
    .then(response => response.json())
    .then(responseJson => responseJson.moisture);
  },

  getLocationKey(coordinates) {
    //a bunch of api keys since max 50 calls/day 
    //apikey1: al6kRy3N5JRgKrnOpGtBdJuvEKocl44u
    //apikey2: BLazK0LqHmOv7OY2GJLTS1xKRr4Msame
    //apikey3: IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow
    //apikey4: NUwklQSrmbeN1wfH3DPqeIKtzV00ugJG
    //apikey5: 4hvDuxAVb8vTbuD66W53PXCAkGWqvtjD

    //function takes in coordinates array and gets a key to use in getRainForecast's API call
    let locationKeyReq = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow&q=${
      coordinates[1]
      },${coordinates[0]}`;

    return fetch(locationKeyReq)
      .then(response => response.json())
      .then(responseJson => responseJson.Key);
  },

  getRainForecast(key) {
    //uses the key from getLocation key to get the 12 hour rain forecast from Accuweather API

    let forecastReq = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow&details=true`;

    return fetch(forecastReq)
    .then(response => response.json())
    .then(responseJ => this.determineRainProbability(responseJ))
  },

   determineRainProbability(forecastArray) {
    //gets the data from getRainForecast and determines if any hour's probability of rain is > 50
    let probability = false;
    let hourlyProbability = []
    for (let i = 0; i < forecastArray.length; i++) {
      let hourlyRainProb = forecastArray[i].RainProbability;
      hourlyProbability.push(hourlyRainProb);
      if (hourlyRainProb >= 50) {
        probability = true;
      }
    }
    return {probability, hourlyProbability};
  },
  getLocationImg(coordinates) {
       return `https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=color:blue%7C${coordinates[1]},${coordinates[0]}&key=AIzaSyB1CRKX58WoY0erbMTwbYTW_U9Quq74QYQ`

   }

}

export default AddressApiService

