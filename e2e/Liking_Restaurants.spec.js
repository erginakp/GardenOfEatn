const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
	I.seeElement('#query');
	I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
	I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

	I.amOnPage('/');

	I.seeElement('.restaurant__title a');
	
	const firstRestaurant = locate('.restaurant__title a').first();
	const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
	const firstRestaurantCity = await I.grabTextFrom(firstRestaurant);
	I.click(firstRestaurant);

	I.seeElement('#likeButton');
	I.click('#likeButton');
	const likedRestaurantName = await I.grabTextFrom('.restaurant__title');

	assert.strictEqual(firstRestaurantName, firstRestaurantCity, likedRestaurantName);

	I.amOnPage('/#/favorite');
	I.seeElement('.resto-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
	I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

	I.amOnPage('/');

	I.seeElement('.restaurant__title a');
	
	const firstRestaurant = locate('.restaurant__title a').first();
	const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
	const firstRestaurantCity = await I.grabTextFrom(firstRestaurant);
	I.click(firstRestaurant);

	I.seeElement('#likeButton');
	I.click('#likeButton');
	const unlikedRestaurantName = await I.grabTextFrom('.restaurant__title');

	assert.strictEqual(firstRestaurantName, firstRestaurantCity, unlikedRestaurantName);

	I.amOnPage('/#/favorite');
	I.seeElement('.resto-item');
});
