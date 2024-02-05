const axios = require("axios");
const HttpError = require("../models/http-error");
const { compareSync } = require("bcryptjs");
let API_KEY = process.env.GEOCODE_MAPS_API;

async function getCoordinates(address) {
  let response;
  try {
    response = await axios.get(
      `https://geocode.maps.co/search?q=${encodeURIComponent(
        address
      )}&api_key=${API_KEY}`
    );
  } catch (error) {
    console.log(error);
    return next(new HttpError(error, 500));
  }
  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    console.log("Error: ", error);
    throw error;
  }

  const coordinates = {
    lat: data[0].lat,
    lng: data[0].lon,
  };

  return coordinates;
}

module.exports = getCoordinates;
