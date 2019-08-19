export default (state, action) => {
  switch (action.type) {
    case "changePage":
      return {
        ...state,
        page: action.newPage
      };
    case "addFilter":
      return {
        ...state,
        filter: action.newFilter
      };
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
    case "changeCurrentRecord":
      return {
        ...state,
        currentRecord: action.newCurrentRecord
      };
    case "changeMessage":
      return {
        ...state,
        message: action.newMessage
      };
    case "addMessages":
      return {
        ...state,
        messages: action.newMessages
      };
    case "changeView":
      return {
        ...state,
        view: action.newView
      };
      case "addAuth":
        return {
          ...state,
          auth: action.newAuth
        }
    default:
      return state;
  }
};
