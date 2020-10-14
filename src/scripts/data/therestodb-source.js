import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async restaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAILS(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
