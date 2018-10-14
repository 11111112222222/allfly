
import fetch from 'common/js/fetch.js'
import url from 'common/js/url.js'

class Address {
  static list () {
    return fetch(url.hotLists)
  }
}

export default Address
