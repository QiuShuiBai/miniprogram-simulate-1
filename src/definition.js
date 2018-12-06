const jComponent = require('j-component')

const api = require('./api')

module.exports = function () {
  // 注册内置组件
  // eslint-disable-next-line semi-style
  [
    'view', 'scroll-view', 'swiper', 'movable-view', 'cover-view', 'cover-view',
    'icon', 'text', 'rich-text', 'progress',
    'button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea',
    'navigator', 'function-page-navigator',
    'audio', 'image', 'video', 'camera', 'live-player', 'live-pusher',
    'map',
    'canvas',
    'open-data', 'web-view', 'ad'
  ].forEach(name => {
    jComponent.register({
      id: name,
      tagName: `wx-${name}`,
      template: '<slot/>',
    })
  })

  // 注入 api
  global.wx = api
}
