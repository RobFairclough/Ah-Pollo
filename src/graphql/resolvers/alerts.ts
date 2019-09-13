import { Alert } from 'hierarchies';
import { PubSub } from 'apollo-server';
import { SubscriptionEvents } from 'enums';
import { getAlerts, createAlert, getLatestAlert } from '../../db/queries';
import { RequestContext, pubsub } from '../../index';

export const alerts = () => getAlerts();

export const sendAlert = (
  parent: undefined,
  args: { Message: string, OperativeIDs: string },
  context: RequestContext,
  info: any,
) => {
  const {
    companyID, companyUserID, companyUserType, id,
  } = context;
  console.log({ context });
  const { Message, OperativeIDs } = args;

  const alert: Alert = {
    CompanyID: companyID,
    Message,
    OperativeIDs: OperativeIDs.split(', ').map((id: string) => parseInt(id)),
    CreatedOn: new Date(),
    CreatedByCompanyUserID: companyUserID,
  };

  console.log({ alert });

  createAlert(alert);
  const newAlert = getLatestAlert();
  pubsub.publish(SubscriptionEvents.NewAlert, { newAlert });
  return newAlert;
};
