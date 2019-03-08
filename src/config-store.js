import { createStore, combineReducers } from "redux";

const appState = {
  profile: { id: null, userName:""},
  items:[],
  existing: false
};

const appStore = (state = appState, action) => {
    switch (action.type) {
      case "APP_ADD_USER":
      return processAdd(state, action);
      case "APP_DELETE_USER":
        return processDelete(state, action);
      default:
        return state
    }
  }

const processAdd = (state, action) =>{
  let items = state.items;
  let data = action.data;
  let existing = false;
  items.map((item, i) =>{
      if(item.userName === data.userName.trim()){
        existing = true;
        return;
      }
  });

  if(!existing){
    items.push(data);
  }
  return {
    ...state,
    profile: action.data,
    items: items,
    existing: existing
  } 
}

const processDelete = (state, action)=>{
  let newArray = state.items;

  newArray.map((item, i) =>{
    if(item.id === action.data.id){
      newArray.splice(i, 1);
      return;
    }
  });

  return {
    ...state,
    items: newArray,
  } 
}

export default function ConfigureStore() {
    return  createStore(combineReducers({appStore}));;
}
