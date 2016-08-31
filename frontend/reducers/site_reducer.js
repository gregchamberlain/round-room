import * as ACTIONS from '../actions/entity_actions.js';
import { merge } from 'lodash';

const initState = { loading: false };

const SiteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_ENTITY:
      return merge(state, action.resp.entities.sites, {loading: false});
    case ACTIONS.REMOVE_ENTITY:
      let nextState = merge(initState, state, {loading: false});
      Object.keys(action.resp.entities.sites).forEach(id => {
        delete nextState[id];
      });
      return nextState;
    case ACTIONS.LOADING_ENTITY:
      return merge({}, state, {loading: action.entity});
    default:
      return state;
  }
};

export default SiteReducer;
