import axios from 'axios'

export default async (id, sample) => {
    const response = await axios({
        method: 'GET',
        params: {
        },
        url : 'https://fakestoreapi.com/products/',
    })
    console.log(response.data, "wiwiwi");
    return response.data

}
const adi = async (id, sample) => {
    const response = await axios({
        method: 'GET',
        params: {
        },
        url : 'https://fakestoreapi.com/products/',
    })
    console.log(response, "wiwiwi");
    return response.data
}