export default (state, action) => {
  switch (action.type) {
    case "addToCount":
      return {
        ...state,
        numbers: action.newCount
      };
    case "changeTitle":
      return {
        ...state,
        title: action.newTitle
      };
      case "addAccounts":
      return {
        ...state,
        accounts: action.newAccounts
      };
    default:
      return state;
  }
};
