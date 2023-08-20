// https://www.google.com/maps/place/53.068385,+11.950770/@53.0682887,11.9499225,18z
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://www.google.com/maps/place/${lat},${lng}/@${lat},${lng}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlang=${lat},${lng}&key=YOUR_API_KEY`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }
  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
