import AuthorBaseElement from '../../author-base.js'

const test = require('tape').test

test('Extend Class', t => {
  class DummyElement extends AuthorBaseElement(HTMLElement) {
    constructor () {
      super('<template><slot></slot></template>')
    }

    get contentLength () {
      return this.children[0].innerHTML.length
    }
  }

  customElements.define('dummy-element', DummyElement)

  document.body.insertAdjacentHTML('beforeend', '<dummy-element><span>hey</span></dummy-element>')

  setTimeout(() => {
    t.ok(document.querySelector('dummy-element').contentLength === 3, 'Extended base element successfully.')
    t.end()
  }, 0)
})
