/**
 * Import axios and set CSRF fields.
 * 
 * Axios will become http.
 * 
 * So use http instead of axios.
 */
import axios from "axios";

const csrf = getCsrfFields();
const csrfMethods = ['post', 'put', 'patch', 'delete'];

const http = axios.create({});

csrfMethods.map(method => {
    Object.keys(csrf).map(key => {
        http.defaults.headers[method][key] = csrf[key]
    })
})

http.defaults.headers.common['Content-Type'] = 'application/json';
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Get CSRF fields.
 * 
 * @returns object
 */
function getCsrfFields() {
    const csrfNameMeta = document.querySelector('meta#csrf_name');
    const csrfValueMeta = document.querySelector('meta#csrf_value');

    const csrfNameKey = csrfNameMeta.getAttribute('name');
    const csrfName = csrfNameMeta.content;

    const csrfValueKey = csrfValueMeta.getAttribute('name');
    const csrfValue = csrfValueMeta.content;

    return {
        [csrfNameKey]: csrfName,
        [csrfValueKey]: csrfValue
    }
}

export default http;