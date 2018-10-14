import types from './mutation-types.js'

const actions = {
  incrementAsyc ({commit}) {
    setTimeout(() => {
      commit(types.INCREMENT)
    }, 1000)
  }
}
export default actions
