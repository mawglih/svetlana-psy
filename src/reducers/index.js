import { combineReducers } from 'redux';
import Testimonials from './testimonials-reducer';

const rootReducer = combineReducers({
  testimonials: Testimonials
});

export default rootReducer;