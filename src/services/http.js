import axios from 'axios';

export default {
    get: async (url, params = {}) => {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params
              })
              .then(function (response) {
                resolve(response.data);
              })
              .catch(function (error) {
                reject(error);
              })
              .then(function () {
                // always executed
              });
        })
    }
}