const gitUrl = 'https://api.github.com/repos/Retky/';
const readUrl = 'https://raw.githubusercontent.com/retky/<PROJECTNAME>/main/README.md';
const FETCH_PROJECTS_DATA = 'FETCH_PROJECTS_DATA';
const initialState = [];

const fetchProjectsList = async () => {
  const response = await fetch('https://portfolio-rtk-default-rtdb.firebaseio.com/Projects.json', {
    method: 'GET',
  });
  const data = await response.json();
  const projects = [];
  Object.keys(data).forEach((key) => { projects.push(data[key]); });
  return projects;
};

const projectBuilder = async (projectName) => {
  const response = await fetch(gitUrl + projectName);
  const data = await response.json();
  const readme = await fetch(readUrl.replace('<PROJECTNAME>', projectName));
  const readmeData = await readme.text();
  const readDesc = await readmeData.slice(readmeData.indexOf('>') + 1, readmeData.indexOf('\n##'));
  const imageCard = await fetch(`https://raw.githubusercontent.com/retky/${projectName}/dev/.preview/imageCard.png`);
  const imageFull = await fetch(`https://raw.githubusercontent.com/retky/${projectName}/dev/.preview/imageFull.png`);
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

export const fetchProjectsData = () => async (dispatch) => {
  const projectsList = await fetchProjectsList();
  const projects = await Promise.all(projectsList.map(projectBuilder));
  dispatch({ type: FETCH_PROJECTS_DATA, payload: projects });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
