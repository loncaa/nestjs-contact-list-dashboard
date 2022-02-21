const createAction = (type, payload) => {
  return {
    type: type,
    data: payload
  }
}

export {
  createAction
}