import axios from 'axios';

/*create axios client with couple default properties*/
export default axios.create({
    /*"https://api.unsplash.com/" is the location of the API and "/search/photos" is how to access the photos*/
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID whmVN46H2BAwWQ-qs5dwQNCI6Qxv_yzv3PHCrjrXYfE'
    }
});

