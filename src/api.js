import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID HWi5wR9FDfZMOWGukzT94CbViXFAQ0UGaez82jmoihE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
