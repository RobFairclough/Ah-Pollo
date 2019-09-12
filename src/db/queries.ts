import { Pin, Drawing, Alert } from 'hierarchies';
import { knex } from './connection';

export const getPins = (chosenFields: string[] = ['*']) => knex
  .select(chosenFields)
  .from('Pins')
  .limit(10)
  .then(pins => pins)
  .catch(console.log);

export const getPin = (ID: number) => knex
  .select('*')
  .from('Pins')
  .where({ ID })
  .limit(1)
  .then(([pin]) => pin)
  .catch(console.log);

export const getDrawings = () => knex
  .select('*')
  .from('Drawings')
  .limit(10)
  .then(drawings => drawings)
  .catch(console.log);

export const getDrawing = (DrawingID: number) => knex
  .select('*')
  .from('Pins')
  .where({ DrawingID })
  .limit(1)
  .then((drawings: Drawing[]) => {
    const [drawing] = drawings;
    return drawing;
  })
  .catch((e) => {
    throw e;
  });

export const getPinsForDrawing = (DrawingID: number): Promise<Pin[]> => knex
  .select('*')
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
  .where({ ID });

export const createAlert = (alert: Alert): Promise<Alert> => knex('OperativeAlerts')
  .insert(alert, '*')
  .then((alerts: Alert[]): Alert => {
    const [alert] = alerts;
    return alert;
  })
  .catch((e) => {
    throw e;
  });
