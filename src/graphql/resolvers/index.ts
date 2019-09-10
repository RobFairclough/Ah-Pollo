import { getPins, getPin } from '../../db/queries';
import { pins, singlePin, getDrawingWithPins } from './pins';
// resolves

export const resolvers = {
  Query: {
    pins,
    singlePin,
    getDrawingWithPins,
  },
};
