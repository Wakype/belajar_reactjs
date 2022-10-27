const colorState = {
    color: "#00ABB3",
  };
  
export const colorReducer = (state = colorState, action) => {
    if (action.type === "changeColor") {
      return {
        color: action.color,
      };
    }
    if (action.type === "returnColor") {
      return {
        color: "#FF5733",
      };
    }
    return {
      ...state,
    };
  };