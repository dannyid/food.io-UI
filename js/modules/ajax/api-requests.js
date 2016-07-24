
import axios from 'axios';

export function searchFood(posiWords, negiWords) {
  return axios.get(`http://localhost:3000/foods?posiWords=${posiWords}&negiWords=${negiWords}`);
};

export function fetchNutrients(id) {
  return axios.get(`http://localhost:3000/foods/${id}/nutrients`);
};