import axios from 'axios'

export const TutorQuery = (searchParam) => {
    // {
    // isName: true ? false,
    // param: category ? name
    // }
    if (searchParam) {
        if (searchParam.isName) {
            // searching by name
            // return axios.get
            return axios.get(`https://tutor.jakegut.com/user/?is_tutor=true&first_name__icontains=${searchParam.param}&_sort=first_name&_order=asc&_start=0&_end=20`,
                {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${searchParam?.token}`
                    }
                })
                .then((response) => { return response.data })
                .catch(error => { return Promise.reject(error) })
        } else {
            // searching by category
            // return axios.get
            return axios.get(`https://tutor.jakegut.com/user/?is_tutor=true&categories__name__icontains=${searchParam.param}&_sort=first_name&_order=asc&_start=0&_end=20`)
                .then((response) => { return response.data })
                .catch(error => { return Promise.reject(error) })
        }
    }
}