import HomeView from './views/HomeView.vue';
import ClosuresView from './views/ClosuresView.vue';
import FunctionObjectView from './views/FunctionObjectView.vue';

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
  },
  {
    path: '/function-object',
    name: 'FunctionObjectView',
    component: FunctionObjectView,
  }
];