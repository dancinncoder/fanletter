// letters.jsx 에는 letter에 대한 state들이 모여있다.
import uuid from 'react-uuid';
import moment from 'moment';
import fakeData from 'database/fakeData.json';
const ADD_LETTER = "letters/ADD_LETTER";
const DELETE_LETTER = "letters/DELETE_LETTER";
const EDIT_LETTER = "letters/EDIT_LETTER";


export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload,
  }
}
export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  }
}
export const editLetter = (payload) => {
  return {
    type: EDIT_LETTER,
    payload,
  }
}

const initialState = fakeData;

const letters = (state = initialState, action) => {
  switch (action.type){
    case ADD_LETTER:
      const newLetter = action.payload;
      return [...state, action.payload]; //set~();
    case DELETE_LETTER:
      const letterId = action.payload;
      return state.filter(letter=> letter.id !== letterId);
    case EDIT_LETTER:
      const  { id, editedMessage} = action.payload;
      return state.map((letter)=> {
        if(letter.id === id){
          return {...letter, message: editedMessage};
        } else {
          return letter;
        }
      })
    default:
      return state;
  }
}

export default letters;