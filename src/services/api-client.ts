import   axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e574cbdd74d14a26ac4144c21ce556da'
    }
})
