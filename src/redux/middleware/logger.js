// export const logger = state => next => action => {
//   console.log(`Logger => ${action.type}`);
//   return next(action);
// };

export const logger = (state) => {
  return (next) => {
    return (action) => {
      console.log("Logger =>", action);

      // if (action.type === "changeColor") {
      //   return next(action);
      // } else {
      //   return;
      // }
    };
  };
};

// export const logger2 = (state) => {
//   return (next) => {
//     return (action) => {
//       console.log("Logger2 =>", action);

//       if (action.color !== "purple") {
//         action.color = "purple"
//         return next(action);
//       }

//       return next(action);
//     };
//   };
// };
