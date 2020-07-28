import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Auth'] = 'hbGciOiJIUzI1NiI'
axios.defaults.headers.get['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adffdd2d......pdorQssw5';

axios.interceptors.request.use(config =>{
    // console.log('sent request',config)
 
    return config
      
}, error =>{
    return Promise.reject(error)
    
})

axios.interceptors.response.use(res =>{  
    // console.log('raw Data',res)

    return res
}, error =>{
    return Promise.reject(error)
        
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
