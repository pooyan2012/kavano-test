import TaskActionTypes from "./task.types";

const INISTIAL_STATE = {
  taskItems: [
    { title: "Wireframe for contact page", subtitle: "Today" },
    { title: "Start gym", subtitle: "" },
  ],
};

const taskReducer = (state = INISTIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        tataskItemssks: [...state.taskItems, action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
