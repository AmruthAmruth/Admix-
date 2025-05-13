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



export const getUserData = async ()=>{
    try{

    const token = localStorage.getItem("token");
     if (!token) {
      throw new Error("No token found. Please login.");
    }
      const response = await axios.get("http://localhost:7000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
     return response.data.users;
    }catch(err){
      console.log(err);
      
    }
}
