export default (state, action) => {
    switch (action.type) {
      case "addToCount":
        return {
          ...state,
          numbers: action.newCount
        };
      default:
        return state;
    }
  };