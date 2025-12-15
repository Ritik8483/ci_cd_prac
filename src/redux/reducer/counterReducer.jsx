const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
    console.log("state",state);
    console.log("action",action);
    
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};