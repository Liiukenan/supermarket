import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/0edf60231b300000bc5e80bfae7768f8/shop/'
})

export default instance;