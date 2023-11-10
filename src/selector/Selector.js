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
            const res = await axios.get(`https://delightful-spacesuit-frog.cyclic.app/api/products/top-six-new-products`)
            return res.data
        }catch(error){
            console.log(`error:\n${error}`)
    return []
        }
    }
})

export const featuredProduct = selector({  
    key: 'featuredProduct',
    get: async () => {
        try{
            const res = await axios.get(`https://calm-gold-dugong-gown.cyclic.app/api/products/featured`)
            return res
        }catch(error){
            console.log(`error:\n${error}`)
    return []
        }
    }
})

export const inbox = selector({  
    key: 'inbox',
    get: async () => {
        try{
            const res = await axios.get(`https://calm-gold-dugong-gown.cyclic.app/api/issues/getAllIssues`)
            return res
        }catch(error){
            console.log(`error:\n${error}`)
    return []
        }
    }
})

export const singleProductData = selector({
    
    key: 'singleProductData',
    get: async () => {
        try{
            const res = await axios.get(`https://calm-gold-dugong-gown.cyclic.app/api/products`)
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