import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
	await LikeButtonPresenter.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		favoriteRestaurants: FavoriteRestoIdb,
		restaurant,
	});
};

export { createLikeButtonPresenterWithRestaurant };