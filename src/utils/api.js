// const date = new Date();
const dateStart =
  new Date().getFullYear() +
  "-" +
  ("0" + (new Date().getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + new Date().getDate()).slice(-2);
//   https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&api_key=BHpGderj9UvhITGYrFJix7be1zdNyzMYEbfgdsgU
export const getInfo = () => {
 return fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&api_key=BHpGderj9UvhITGYrFJix7be1zdNyzMYEbfgdsgU`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
    }
    }
  )
  .then((res) =>{
      if(res.ok){
          return res.json();
      }
      return Promise.reject(res.status)
  })
};
