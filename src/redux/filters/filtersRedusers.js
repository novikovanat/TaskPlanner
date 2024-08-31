import { setStatusFilter } from "../actions.js";
import { statusFilters } from "../constants.js";


const filterInitialState = {
  status: statusFilters.all,
};
const filtersReduser = (state = filterInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        filter: {
          status: action.payload,
        },
      };
  }
  return state;
};

export default filtersReduser;
