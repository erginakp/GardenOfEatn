import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content" role="section" aria-expanded="section">
        <h2 class="content__heading" aria-level="h2" tabindex="0">Explore Restaurant</h2>
        <article id="restaurants" class="restaurants" role="article">

        </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.restaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
