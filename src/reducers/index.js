import { combineReducers } from 'redux';
import Testimonials from './testimonials-reducer';
import TestimonialShort from './testimonials-short-reducer';

const rootReducer = combineReducers({
  testimonials: Testimonials,
  testimonialsShort: TestimonialShort
});

export default rootReducer;