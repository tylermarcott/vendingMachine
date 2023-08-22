
// NOTE: make sure to import you class!
import { Snack } from "./models/Snack.js"

import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"










class ObservableAppState extends EventEmitter {


  // NOTE: make sure to store your instances of your class as objects to simplify things in the future
  snacks = [
    new Snack({ name: 'Cheetos', price: '1.80', imgUrl: 'https://images.unsplash.com/photo-1669056544004-96abfb7a5008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWV0b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),

    new Snack({ name: 'Guacamole', price: '8.50', imgUrl: 'https://plus.unsplash.com/premium_photo-1681406689557-e09522dda8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3VhY2Ftb2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),

    new Snack({ name: 'Mushrooms', price: '0.50', imgUrl: 'https://images.unsplash.com/photo-1571074635691-b910c7a5cdbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),

    new Snack({ name: 'Mustard', price: '1.80', imgUrl: 'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzdGFyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' })

    // can keep making more snacks, make sure this works first though.
  ]

  // holds the total amount of money that the user has added by clicking on the add money button
  totalMoney = 0




  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
