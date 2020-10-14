/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
  <img id="restaurant__image" class="lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        crossorigin="anonymous" tabindex="0" />
  <div class="restaurant__info">
  <h3 tabindex="0">Information about the Restaurant</h3>
    <p tabindex="0"><i class="fa fa-building" aria-hidden="true"></i>&emsp;${restaurant.city}</p>
    <p tabindex="0"><i class="fa fa-map-marker" aria-hidden="true"></i>&emsp;${restaurant.address}</p>
    <p tabindex="0"><i class="fa fa-star" aria-hidden="true"></i>&emsp;${restaurant.rating}</p>
    <h4 tabindex="0">Category</h4>
    <p>${restaurant.categories
    .map(
      (categories) => `
    <span class="category" tabindex="0">${categories.name}</span>
`,
    )
    .join(' ')}</p>
  </div>

  <div class="restaurant__desc">
    <h4 class="description__title" tabindex="0">Description</h4>
    <p tabindex="0"><i>${restaurant.description}</i></p>

    <h4 class="menu__title" tabindex="0">Menu</h4>
      <table class="menus">
        <tr>
            <th tabindex="0">Foods</th>
            <th tabindex="0">Drinks</th>
        </tr>
        <tr>
            <td tabindex="0">${restaurant.menus.foods
    .map((foods) => `
                     ${foods.name}
`,
    // eslint-disable-next-line function-paren-newline
    )
    .join('<br>')}</td>
            <td tabindex="0">${restaurant.menus.drinks
    .map((drinks) => `
                      ${drinks.name}
`,
    // eslint-disable-next-line function-paren-newline
    )
    .join('<br>')}</td>
        </tr>
    </table>

    <h4 class="reviews__title" tabindex="0">Reviews</h4>
    <div class="restaurant__reviews">
      <div class="restaurant__reviews__line"></div>
        <div class="restaurant__reviews__item">${restaurant.consumerReviews
    .map(
      (consumerReviews) => `
      <p class="review__name" tabindex="0">
        <i class="fa fa-user" aria-hidden="true"></i>&emsp;${consumerReviews.name}<br>
      </p>
      <p class="review__date" tabindex="0">
        <i class="fa fa-calendar" aria-hidden="true"></i>&emsp;${consumerReviews.date}<br>
      </p>
      <p class="review__text" tabindex="0">
        <i class="fa fa-comment" aria-hidden="true"></i>&emsp;${consumerReviews.review}<br>
      </p>
`,
    )
    .join('<br>')}
        </div>
    </div>
  </div>
</div>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img id="resto-item__header__image" class="lazyload" alt="${restaurants.name || '-'}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}"
        crossorigin="anonymous" tabindex="0" />
      <div class="resto-item__header__rating">
        <p><i class="fa fa-star" aria-hidden="true"></i> <span class="resto-item__header__rating__score" tabindex="0">${restaurants.rating || '-'}</span></p>
      </div>
    </div>
  <div class="resto-item__content">
    <h3 class="restaurant__title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name} - ${restaurants.city || '-'}</a><h3>
    <p tabindex="0">${restaurants.description || '-'}</p>
  </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
