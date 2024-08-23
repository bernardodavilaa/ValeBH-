import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/restaurants';

export const getRestaurants = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/GetRestaurants`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
      throw error;
    }
  };

export const getRestaurantCategories = async (restaurantId) => {
  try {
    const response = await axios.get(`${BASE_URL}/restaurants/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch restaurant with ID ${restaurantId}`, error);
    throw error;
  }
};



