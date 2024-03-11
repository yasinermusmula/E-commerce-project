const initialGlobalState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export const globalReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
