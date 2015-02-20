'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/albums', config: require('../routes/albums/index')}
  {method: 'get', path: '/albums', config: require('../routes/albums/index')}
  {method: 'post', path: '/albums', config: require('../routes/albums/index')}
];
