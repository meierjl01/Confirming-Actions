import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import store from './store';
import Home from './components/home';


var container = document.getElementById('container');

const Router = Backbone.Router.extend({
  routes: {
    '' : 'home',
  },
  home() {
    ReactDom.render(<Home store={store}/>, container);
  }
});

const router = new Router();
export default router;
