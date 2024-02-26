import { useReducer } from "react";

const initialState = {
  activePage: 0,
};

export const ACTIVE_PAGE_ACTIONS = {
  INCREMENT_PAGE: "incremented_age",
  DECREMENT_PAGE: "decrement_page",
  SET_PAGE: "set_page",
  RESET_PAGE: "reset_page",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIVE_PAGE_ACTIONS.INCREMENT_PAGE: {
      return {
        ...state,
        activePage:
          state.activePage + 1 > generatedPageNumbers.length - 1
            ? generatedPageNumbers.length - 1
            : state.activePage + 1,
      };
    }
    case ACTIVE_PAGE_ACTIONS.DECREMENT_PAGE: {
      return {
        ...state,
        activePage: state.activePage - 1 < 0 ? 0 : state.activePage - 1,
      };
    }
    case ACTIVE_PAGE_ACTIONS.SET_PAGE: {
      return {
        ...state,
        activePage: action.payload,
      };
    }
    case ACTIVE_PAGE_ACTIONS.RESET_PAGE: {
      return {
        ...state,
        activePage: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default function useActivePage() {
  const [activePage, dispatchActvePage] = useReducer(reducer, initialState);

  return {
    activePage,
    dispatchActvePage,
  };
}
