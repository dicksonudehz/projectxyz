import axios from 'axios';
import {
    selector,
  } from 'recoil';
  
export const productQuery = selector({
    key: 'productQuery',
    get: async () => {
try{
    const res = await axios.get(`https://delightful-spacesuit-frog.cyclic.app/api/products`);
    return res.data
}catch(error){
    console.log(`error:\n${error}`)
    return []
}
    }
})


export const bestSellingProduct = selector({
    key: 'bestSellingProduct',
    get: async () => {
        try{
            const res = await axios.get(`https://delightful-spacesuit-frog.cyclic.app/api/products/best`)
            return res.data
        }catch(error){
            console.log(`error:\n${error}`)
    return []
        }
    }
})

export const userRegister = selector({
    key: 'userRegister',
    get: async () => {
        try{
            const res = await axios.post(`https://delightful-spacesuit-frog.cyclic.app/api/users/register`)
            console.log(res,'this is the data from the api selector')
            return res.data
        }catch(error){
            console.log(`error:\n${error}`)
        }
    }
})