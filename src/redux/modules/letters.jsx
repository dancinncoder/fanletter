// letters.jsx 에는 letter에 대한 state들이 모여있다.
import uuid from 'react-uuid';
import moment from 'moment';
import fakeData from 'database/fakeData.json';
const ADD_LETTER = "letters/ADD_LETTER";
const DELETE_LETTER = "letters/DELETE_LETTER";
const EDIT_LETTER = "letters/EDIT_LETTER";
// const CHOOSE_LETTER = "letters/CHOOSE_LETTER";


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
// export const chooseLetter = (payload) => {
//   return {
//     type: CHOOSE_LETTER,
//     payload,
//   }
// }

const initialState = fakeData;

const letters = (state = initialState, action) => {
  switch (action.type){
    case ADD_LETTER:
      const newLetter = action.payload;
      return [...state, newLetter]; //OK
    case DELETE_LETTER:
      const filteredLetters = state.filter(letter => letter.id !== action.payload);
      console.log('delete',action.payload);
      console.log('filteredLetters',filteredLetters);
      return filteredLetters;
    case EDIT_LETTER:
      const  { id, editedMessage } = action.payload;
      const updatedLetters = state.map((letter)=> {
        if(letter.id === id){
          return {...letter, message: editedMessage};
        } else {
          return letter;
        }
      });
      return updatedLetters;
    default:
      return state;
  }
}

export default letters;