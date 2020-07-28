//https://stackoverflow.com/questions/38956121/how-to-add-delay-to-promise-inside-then

// use to delay api calls for testing
export const sleeper = (ms) => {
  return (x) => {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
};
