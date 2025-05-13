import axios from "axios";

export const UserSignup = (name, email, phone, password) => {
  return new Promise((resolve, reject) => {
    axios.post("http://localhost:7000/signup", {
        name,
        email,
        phone,
        password,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const UserLogin =(email,password)=>{
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:7000/login',{
            email,
            password
        }).then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}
