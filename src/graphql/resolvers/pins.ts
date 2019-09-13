import { Drawing } from 'hierarchies';
import {
  getPins, getPin, getDrawing, getPinsForDrawing,
} from '../../db/queries';
import { RequestContext } from '../../index';

export const pins = (parent: undefined, args: {}, context: RequestContext, info: any) => {
  console.log({
    parent,
    args,
    context,
    info,
  });
  //  an array of the chosen fields
  //   console.log(info.fieldNodes[0].selectionSet.selections);
  const { fieldNodes } = info;
  const {
    selectionSet: { selections },
  } = fieldNodes[0];
  const chosenFields = selections.map((selection: any) => selection.name.value);

  // example of a particular chosen field
  //   console.log(info.fieldNodes[0].selectionSet.selections[0].name.value);

  // chosen fields section is an example of only querying the sql for the requested fields
  return getPins(chosenFields);
};

export const singlePin = async (parent: any, { ID }: any, x: any, info: any) => {
  const pin = await getPin(ID);
  const [relevantNode] = info.fieldNodes;
  const {
    selectionSet: { selections },
  } = relevantNode;
  let drawing;
  if (selections.find((x: any) => x.name.value === 'Drawing')) {
    drawing = await getDrawing(pin.DrawingID);
  }
  return { ...pin, Drawing: drawing };
};

export const getDrawingWithPins = async (
  parent: any,
  { ID }: any,
  context: RequestContext,
  info: any,
): Promise<Drawing> => {
  const { fieldNodes } = info;
  const selected = fieldNodes[0].selectionSet.selections;
  const fieldNames = selected
    .filter((field: any) => !field.selectionSet)
    .map((field: any) => field.name.value);

  const pinsSelections = selected.find(
    (field: any) => field.name.value === 'Pins' && field.selectionSet,
  ).selectionSet.selections;

  const drawing = await getDrawing(ID);

  let pins = null;
  if (pinsSelections) {
    const pinFieldNames = pinsSelections.map((field: any) => field.name.value);
    pins = await getPinsForDrawing(ID, pinFieldNames);
  }

  return { ...drawing, Pins: pins };
};
