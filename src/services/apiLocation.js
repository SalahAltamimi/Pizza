import axios from "axios";

export async function getAddress({ latitude, longitude }) {
  const data = await axios(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );

  return data;
}
