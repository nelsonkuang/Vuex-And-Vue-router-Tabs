export const fooChange = ({ dispatch }, foo) => {
  dispatch('FOOCHANGE', foo)
}
export const barChange = ({ dispatch }, bar) => {
  dispatch('BARCHANGE', bar)
}
export const setState = ({ dispatch }, foo, bar) => {
  dispatch('SETSTATE', foo, bar)
}

