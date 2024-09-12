// import React, { createContext, useContext, useReducer } from 'react';

// const TaskContext = createContext();

// const ACTIONS = {
//     ADD_TASK: 'addTask',
//     DELETE_TASK: 'deleteTask',
//     CHANGE_STATUS: 'changeStatus',
// };

// const taskReducer = ( state, action ) => {
//     switch(action.type) {
//         case ACTIONS.ADD_TASK: {
//             return { ...state, task: action.payload }
//         }
//         case ACTIONS.DELETE_TASK: {
//             return state.filter((task) => task.id !== action.payload.id)
//         }
//     }
// }
