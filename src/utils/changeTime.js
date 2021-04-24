const changeTime = (time) => {
    const timeStamp = new Date(Date.parse(time))
  var options = { 
    month: 'long',
    day: 'numeric',
  };
  const date = timeStamp.toLocaleString("ru", options)
  const finishDate = date +" "+timeStamp.getFullYear();
  return finishDate;
  }
  export default changeTime;