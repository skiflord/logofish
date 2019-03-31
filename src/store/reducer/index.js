import Immutable from 'seamless-immutable'

const initialState = Immutable({
  files: {},
  message: {},
  editor: {},
  settings: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}