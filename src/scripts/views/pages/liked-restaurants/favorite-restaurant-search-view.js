import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
	getTemplate() {
		return `
			<div class="content">
				<h2 class="content__heading">Your Liked Restaurant</h2>
				<input class="search" id="query" type="text" placeholder="Search...">
				<div id="restaurants" class="restaurants">

				</div>
			</div>
		`;
	}

	runWhenUserIsSearching(callback) {
		document.getElementById('query').addEventListener('change', (event) => {
			callback(event.target.value);
		});
	}

	showRestaurants(restaurants) {
		this.showFavoriteRestaurants(restaurants);
	}

	showFavoriteRestaurants(restaurants = []) {
		let html;
		if (restaurants.length) {
     		html = restaurants.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
     		html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
	}

	 _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
