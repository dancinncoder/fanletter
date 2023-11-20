// letters.jsx 에는 letter에 대한 state들이 모여있다.
import uuid from 'react-uuid';
import moment from 'moment';
const ADD_LETTER = "letters/ADD_LETTER";


export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload: payload,
  }
}



// const initialState = useEffect(()=>{
//   const lettersData = require("../src/database/fakeData.json");
//   // setLetters(lettersData);
//   console.log('letters In useEffect',lettersData);
// },[])

const initialState = [  {id: "1", userName: "Hamin", createdAt: "23-11-15 10:55", message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", wroteTo: "Paul" }
,
{id: "2", userName: "Rose", createdAt: "23-11-15 10:55", message:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", wroteTo: "Paul" }
,
];

const letters = (state = initialState, action) => {
  switch (action.type){
    case ADD_LETTER:
      return [...state, action.payload]; //set~();
    default:
      return state;
  }
}

export default letters;