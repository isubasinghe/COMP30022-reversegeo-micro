exports.handler = async event => {
  const reqData = JSON.parse(event.body);
  const { lat, lon } = reqData;

  if (lat === undefined || lat === null) {
    const response = {
      statusCode: 200,
      body: JSON.stringify("'lat' field is required")
    };
    return response;
  }

  if (lon === undefined || lon === null) {
    const response = {
      statusCode: 402,
      body: JSON.stringify("'lon' field is required")
    };
    return response;
  }

  if (lat < -90 || lat > 90) {
    const response = {
      statusCode: 402,
      body: JSON.stringify("Invalid 'lat', lat should be between -90 and 90")
    };
    return response;
  }

  if (lon < -180 || lon > 180) {
    const response = {
      statusCode: 402,
      body: JSON.stringify("Invalid 'lon', lon must be between -180 and 180")
    };
    return response;
  }

  return response;
};
