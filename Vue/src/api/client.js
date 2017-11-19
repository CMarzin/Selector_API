import axios from 'axios'
// import path from 'path';
// import createApiUrl from 'helpers/createApiUrl';
// import encodeParams from 'helpers/encodeParams';

export default {
  request: (requestPath, data, method) => {
    const options = {
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: method || 'GET',
      data: data || {}
    }

    switch (options.method) {
      case 'GET':
        // const requestParams = encodeParams(data);

        // if (requestParams.length > 0) {
        //   options.url += '?' + requestParams;
        // }

        break
    }

    return axios(options).then((response) => {
      // console.log('data', response.data)
      return response.data
    })
  }
}
