import axios from "axios";

const token = "HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF";
const baseURL =
  "https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023?dataType=";

export const filterData = async (dataType = "daily") => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(baseURL + dataType, config);
  return response;
};
