const fetchworkList = async () => {
  const response = await fetch('https://portfolio-rtk-default-rtdb.firebaseio.com/Projects.json', {
    method: 'GET',
  });
  const data = await response.json();
  return data;
};

const worksList = async () => {
  const data = await fetchworkList();
  const works = [];
  Object.keys(data).forEach((key) => { works.push(data[key]); });
  return works;
};

export default worksList;
