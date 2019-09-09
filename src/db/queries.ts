import { Pin } from 'hierarchies';
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

export const getPinsForDrawing = (DrawingID: number): Promise<Pin[]> => knex
  .select('*')
  .from('Pins')
  .where({ DrawingID })
  .then((pins: Pin[]): Pin[] => pins)
  .catch((e) => {
    throw e;
  });
