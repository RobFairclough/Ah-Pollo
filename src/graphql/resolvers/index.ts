import { getPins, getPin } from '../../db/queries';
import { pins, singlePin, getDrawingWithPins } from './pins';
import { alerts, sendAlert } from './alerts';
// resolves

export const resolvers = {
  Query: {
    pins,
    singlePin,
    alerts,
    getDrawingWithPins,
  },
  Mutation: {
    sendAlert,
  },
};
