import axios from 'axios'

const service = axios.create({
    baseURL: 'http://192.168.100.143:3000/api/v1', // url = base url + request url
    timeout: 5000
    // withCredentials: true  send cookies when cross-domain requests
})

// Request interceptors
service
    .interceptors
    .request
    .use((config) => {
        // Add X-Access-Token header to every request, you can add other custom headers
        // here
        // if (UserModule.token || getToken()) {
            // config.headers['authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjc3OWMwZDFlNTAwMzk4MWY5ODE5MiIsImlhdCI6MTU3NjUwMDE5OCwiaXNzIjoiSW5TdG9yZSJ9.XS3mi0rZbjVpo6mIioD1CKBlljzZNQTsVjXfUd-ysJ8`
        // }
        console.log(config);
        return config
    }, (error) => {
        Promise.reject(error)
    })

// Response interceptors
service
    .interceptors
    .response
    .use((response) => {

        const res = response.data
        if (res.status === 401) {

            return Promise.reject(new Error(res.error || 'Error'))
        } else if (res.status === 500) {

            //
            return Promise.reject(new Error(res.error || 'Error'))
        } else {
            //
            // console.log(response.data);
            return response.data;
        }
    }, (error) => {

        //
        return Promise.reject(error)
    })

export default service