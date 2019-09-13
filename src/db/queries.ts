import { Pin, Drawing, Alert } from 'hierarchies';
import { knex } from './connection';

type ChosenFields = string[] | '*';

export const getPins = (chosenFields: ChosenFields = '*') => knex
  .select(chosenFields)
  .from('Pins')
  .limit(10)
  .then(pins => pins)
  .catch((e) => {
    throw e;
  });

export const getPin = (ID: number) => knex
  .select('*')
  .from('Pins')
  .where({ ID })
  .limit(1)
  .then(([pin]) => pin)
  .catch((e) => {
    throw e;
  });

export const getDrawings = () => knex
  .select('*')
  .from('Drawings')
  .limit(10)
  .then(drawings => drawings)
  .catch((e) => {
    throw e;
  });

export const getDrawing = (DrawingID: number) => knex
  .select('*')
  .from('Pins')
  .where({ DrawingID })
  .limit(1)
  .then(([drawing]: Drawing[]) => drawing)
  .catch((e) => {
    throw e;
  });

export const getPinsForDrawing = (
  DrawingID: number,
  chosenFields: ChosenFields = '*',
): Promise<Pin[]> => knex
  .select(chosenFields)
  .from('Pins')
  .where({ DrawingID })
  .then((pins: Pin[]): Pin[] => pins)
  .catch((e) => {
    throw e;
  });

export const getAlerts = () => knex
  .select('*')
  .from('OperativeAlerts')
  .limit(10)
  .orderBy('CreatedOn', 'desc')
  .then((alerts: Alert[]) => alerts)
  .catch((e) => {
    throw e;
  });

export const getAlert = (ID: number) => knex
  .select('*')
  .from('OperativeAlerts')
  .limit(1)
  .where({ ID })
  .then(([alert]: Alert[]) => alert)
  .catch((e) => {
    throw e;
  });

export const getLatestAlert = () => knex
  .select('*')
  .from('OperativeAlerts')
  .limit(1)
  .orderBy('CreatedOn', 'desc')
  .then(([alert]: Alert[]) => alert)
  .catch((e) => {
    throw e;
  });

export const createAlert = async (alert: Alert): Promise<Alert> => knex('OperativeAlerts')
  .insert(alert)
  .then(async () => {
    const alert = await getLatestAlert();
    console.log(alert);
    return alert;
  })
  .catch((e) => {
    throw e;
  });
