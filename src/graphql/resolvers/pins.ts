const { getPins, getPin } = require('src/db/queries');

export const pins = (parent: any, args: any, context: any, info: any) => {
  console.log({
    parent,
    args,
    context,
    info,
  });
  // an array of the chosen fields
  //   console.log(info.fieldNodes[0].selectionSet.selections);
  const { fieldNodes } = info;
  console.log(fieldNodes);
  const {
    selectionSet: { selections },
  } = fieldNodes[0];
  const chosenFields = selections.map((selection: any) => selection.name.value);

  // example of a particular chosen field
  //   console.log(info.fieldNodes[0].selectionSet.selections[0].name.value);

  // chosen fields section is an example of only querying the sql for the requested fields
  return getPins(chosenFields);
};

export const singlePin = (parent: any, { ID }: any) => {
  const pin = getPin(ID);
  return pin;
};
