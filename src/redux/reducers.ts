const initState = {};

const rootReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default rootReducer;
