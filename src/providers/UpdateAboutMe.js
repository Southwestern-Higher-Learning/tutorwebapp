import axios from 'axios'


export const UpdateDescription = async (description, access_token) => {
    console.log(`common: ${axios.defaults.headers.common}`)
    try {
        const response = await axios({
            method: 'PATCH',
            url: 'https://tutor.jakegut.com/user/me',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${access_token}`
            },
            data: JSON.stringify({ 'description': `${description}` }),
        })
        console.log(`response.data: ${response.data}`)
        if (response.status === 200) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error()
    }

}