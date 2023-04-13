'use strict'
import JsLocalStorage from "./JsLocalStorage"
//LOCAL STORAGE INITIALIZATION
JsLocalStorage.save('prompt', 'all');
JsLocalStorage.save('page', 1);
//AXIOS
export const APIurl = () => {
  const querry = JsLocalStorage.load('prompt');
  const page = JsLocalStorage.load('page');
  let url = `?key=34758818-84286f7512264df00409bd0b7&q=${querry}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
  return url;
};