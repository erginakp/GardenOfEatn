import FavoriteRestaurantSearchView
	from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter
	from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Showing all favorite restaurants', () => {
	let view;

	const renderTemplate = () => {
		view = new FavoriteRestaurantSearchView();
		document.body.innerHTML = view.getTemplate();
	};

	beforeEach(() => {
		renderTemplate();
	});

	describe('When no restaurants have been liked', () => {
		it('should ask for the favorite restaurants', () => {
			const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);

			new FavoriteRestaurantShowPresenter({
				view,
				favoriteRestaurants,
			});

			expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
		});

		it('should show the information that no restaurants have been liked', (done) => {
			document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
				expect(document.querySelectorAll('.resto-item__not__found').length)
					.toEqual(1);

				done();
			});

			const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
			favoriteRestaurants.getAllRestaurants.and.returnValues([]);

			new FavoriteRestaurantShowPresenter({
				view,
				favoriteRestaurants,
			});
		});
	});

	describe('When favorite restaurants exist', () => {
		it('should show the restaurants', (done) => {
			document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
				expect(document.querySelectorAll('.resto-item').length).toEqual(2);
				done();
			});

			const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
			favoriteRestaurants.getAllRestaurants.and.returnValues([
				{
					id: 11, name: 'A', rating: 3, description: 'Sebuah restaurant A',
				},
				{
					id: 22, name: 'B', rating: 4, description: 'Sebuah restaurant B',
				},
			]);

			new FavoriteRestaurantShowPresenter({
				view,
				favoriteRestaurants,
			});
		});
	});
});
