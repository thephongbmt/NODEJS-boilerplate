import { resolve } from "path";

/*
    Use zombie data for model return a promise
    if use the other database implement it by your way (Nosql, sql)
*/
let users = [{
    name:'nguyen van a',
    email:'nguyenvana@gmail.com',
    phone:'0909828929',
    gender: 'Male',
    username:'nguyenvana',
    password:'123123'
},{
    name:'nguyen van b',
    email:'nguyenvanb@gmail.com',
    phone:'0909828929',
    gender: 'Male',
    username:'nguyenvanb',
    password:'123123'
}];


export const  getUser = ()=>{
    return new Promise((resolve,reject)=>
         resolve(users)
    ).catch(err=>reject(err));
} 

export  const findUser = (username)=>{
    let user = users.find((u)=>{ u.username = username});
    return new Promise((resolve,reject)=>
         resolve(user)
    ).catch(err=>reject(err));
}
