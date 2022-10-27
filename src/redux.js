// import { legacy_createStore, combineReducers } from "redux";

// // Membuat State
// const initialState = {
//   value: 0,
//   status: "",
// };
// const colorState = {
//   color: "#00ABB3",
// };

// // Membuat Reducer => function untuk merubah value dari state redux
// export const reducer = (state = initialState, action) => {
//   // switch (action.type) {
//   //   case "INCREMENT":
//   //     console.log(state);
//   //     return {
//   //       ...state,
//   //       value: state.value + 1,
//   //       status: action.status,
//   //     };

//   //   case "DECREMENT":
//   //     return {
//   //       ...state,
//   //       value: state.value - 1,
//   //       status: action.status,
//   //     };
//   //   default:
//   //     return state;
//   // }

//   if (action.type === "INCREMENT") {
//     console.log(state);
//     return {
//       ...state,
//       value: state.value + 1,
//       status: action.status,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     console.log(state);
//     return {
//       ...state,
//       value: state.value - 1,
//       status: action.status,
//     };
//   }

//   return {
//     ...state,
//   };
// };

// export const increment = () => {
//   return {
//     type: "INCREMENT",
//     status: "INCREMENT",
//   };
// };

// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//     status: "DECREMENT",
//   };
// };

// const colorReducer = (state = colorState, action) => {
//   if (action.type === "changeColor") {
//     return {
//       color: action.color,
//     };
//   }
//   if (action.type === "returnColor") {
//     return {
//       color: "#FF5733",
//     };
//   }
//   return {
//     ...state,
//   };
// };

// let allReducers = combineReducers({
//   count: reducer,
//   color: colorReducer,
// });

// export const store = legacy_createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
