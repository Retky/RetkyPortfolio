import worksList from './workList';

const gitUrl = 'https://api.github.com/repos/Retky/';
const readUrl = 'https://raw.githubusercontent.com/retky/<WORKNAME>/main/README.md';
const FETCH_WORKS = 'FETCH_WORKS';
const initialState = [];

const workBuilder = async (work) => {
  const response = await fetch(gitUrl + work);
  const data = await response.json();
  const readme = await fetch(readUrl.replace('<WORKNAME>', work));
  const readmeData = await readme.text();
  const readDesc = await readmeData.slice(readmeData.indexOf('>') + 1, readmeData.indexOf('\n##'));
  const imageCard = await fetch(`https://raw.githubusercontent.com/retky/${work}/dev/.preview/imageCard.png`);
  const imageFull = await fetch(`https://raw.githubusercontent.com/retky/${work}/dev/.preview/imageFull.png`);
  const obj = {
    id: await data.id,
    // Preview
    name: await data.name,
    desc: await data.description,
    topics: await data.topics,
    image: (await imageCard.status) === 200 ? await imageCard.url : '',
    // Full
    imageFull: (await imageFull.status) === 200 ? await imageFull.url : '',
    description: await readDesc,
    homepage: await data.homepage,
    live: await data.html_url,
  };
  return obj;
};

export const fetchWorks = () => async (dispatch) => {
  const worksL = await worksList();
  const works = await Promise.all(worksL.map(workBuilder));
  dispatch({ type: FETCH_WORKS, payload: works });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
