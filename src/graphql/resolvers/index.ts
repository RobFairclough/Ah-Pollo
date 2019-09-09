import { getPins, getPin } from '../../db/queries';
import { pins, singlePin } from './pins';
// resolves

export const resolvers = {
  Query: {
    pins,
    singlePin,
  },
};
