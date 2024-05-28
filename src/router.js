import HomeView from './views/HomeView.vue';
import ClosuresView from './views/ClosuresView.vue';

export default [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/closures',
    name: 'ClosuresView',
    component: ClosuresView,
  }
];