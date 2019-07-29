# For Drizzle

[Live App](https://nataliesun.github.io/for-drizzle/)

## About ForDrizzle
With For Drizzle, input an address to find out whether or not you should water your plants. For Drizzle will look up the current moisture content of the soil and the rain forecast and give a recommendation.

<img src="src/assets/for-drizzle.png" width="450px">

### Soil moisture content
Using [Agromonitoring’s Soil Conditions API](https://agromonitoring.com/api/current-soil), For Drizzle will find out the moisture content (in m^3 of water/m^3 of soil) for the given address. These readings are taken twice a day. Ideal soil moisture content varies due to a number of factors but for most soil types used for growing plants around 25% will be adequate. If the moisture content is over this number, For Drizzle will state that watering is not necessary.

### Chance of rain
If the moisture content isn’t adequate, For Drizzle will only recommend watering if the hourly chance of rain (obtained from [Accuweather’s API](https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/hourly/12hour/%7BlocationKey%7D) isn’t above 50% in the next 12 hours.

## Technology used

* HTML5
* CSS3/SCSS
* JavaScript
* React

## Contribute

Contribute to the project at 
[ForDrizzle's Repository](https://github.com/nataliesun/for-drizzle)!

1. To get started `git clone https://github.com/nataliesun/for-drizzle.git`

2. Submit and [issue](https://github.com/nataliesun/for-drizzle/issues) or create a [pull request](https://github.com/nataliesun/for-drizzle/pulls)