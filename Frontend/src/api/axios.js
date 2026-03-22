import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/api/auth/'
});

// import axios from "axios";

// const axiosInstance=axios.create({
//     baseURL:"http://localhost:5000/api/auth",
//     timeout:10000,
// });

// export default axiosInstance;
