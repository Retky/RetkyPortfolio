const FETCH_PROJECTS_LIST = 'FETCH_PROJECTS_LIST';
const initialState = [];

export const fetchProjectsList = () => async (dispatch) => {
  const response = await fetch('https://portfolio-rtk-default-rtdb.firebaseio.com/Projects.json', {
    method: 'GET',
  });
  const data = await response.json();
  const projects = [];
  Object.keys(data).forEach((key) => { projects.push(data[key]); });

  dispatch({ type: FETCH_PROJECTS_LIST, payload: projects });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
