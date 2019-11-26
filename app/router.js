'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.redirect('/public/', '/public/index.html', 302);
  router.get('/news', controller.news.list);
};
