import { PubSub } from 'apollo-server';
import { SubscriptionEvents } from 'enums';
import { SubscriptionServerOptions } from 'apollo-server-core';
import { pubsub } from '../index';

export const newAlert = {
  subscribe: () => pubsub.asyncIterator([SubscriptionEvents.NewAlert]),
};
