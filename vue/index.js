const el = require('./element.js')
const ul = el('div',
  {
    id: 'virtual-dom'
  }, [
  el('p', {}, ['virtual dom']),
  el('ul', { id: 'list' }, [
    el('li', { class: 'item' }, ['li 1']),
    el('li', { class: 'item' }, ['li 2']),
    el('li', { class: 'item' }, ['li 3']),
  ]),
])

console.log(ul)