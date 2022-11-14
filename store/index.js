import storeSlices from "./*/*.slice.js"; // Minimal check to see if imported slice has all properties of an actual slice

const isValid = slice => {
  const sliceProps = ["actions", "caseReducers", "name", "reducer", "getInitialState"];
  return Object.keys(slice).every(prop => sliceProps.includes(prop));
};

export const slices = storeSlices;
export const connectors = slices.reduce((acc, slice) => {
  let name = slice.name.charAt(0).toUpperCase() + slice.name.slice(1);
  acc[name] = slice.reducer;
  return acc;
}, {});

console.log(slices);
