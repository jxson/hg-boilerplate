var domready = require('domready')
var hg = require('mercury')
var h = require('mercury').h

domready(function onready() {
  var state = hg.state({
    count: hg.value(0),
    channels: {
      add: add
    }
  })

  hg.app(document.body, state, render)
})

function add(state, data) {
  state.count.set(state.count() + 1)
}

function render(state) {
  return h('.example', [
    h('h1', 'Increment Example'),
    h('p', [
      h('strong', 'count: ' + state.count)
    ]),
    h('p', [
      h('a', {
        'ev-click': hg.send(state.channels.add)
      }, 'Click me.')
    ])
  ])
}
