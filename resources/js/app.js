import '../css/app.css'
import http from './http'

console.log('Axios headers', http.defaults.headers)

http.get('/axios-get')
    .then(res => {
        console.log(res.data)
    });

http.post('/axios-post')
    .then(res => {
        console.log(res.data)
    });