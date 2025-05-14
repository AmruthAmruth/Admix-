import axios from "axios";
export const UserSignup = (name, email, phone, password) => {
  return new Promise((resolve, reject) => {
    axios.post(
      "http://localhost:7000/signup",
      { name, email, phone, password },
      { withCredentials: true }
    )
    .then((res) => {
      localStorage.setItem("email", res.data.email);
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const UserLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    axios.post(
      "http://localhost:7000/login",
      { email, password },
      { withCredentials: true }
    )
    .then((res) => {
      console.log("Log user ", res.data);
       console.log(res.data.user.email);
       
      localStorage.setItem("user",res.data.user.email);
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};




export const userLogout = async () => {
  try {
    const response = await axios.post("http://localhost:7000/logout", {}, {
      withCredentials: true,
    });
     localStorage.removeItem("email")
    return response.data;
  } catch (error) {
    console.log("Logout failed:", error);
    throw error;
  }
};


export const userProfile = async (email) => {
  try {
    const response = await axios.get(`http://localhost:7000/user?email=${email}`, {
      withCredentials: true,
    });
    console.log("Here working");
    
    return response.data.user;
  } catch (err) {
    console.error("Error fetching user data:", err);
    throw err;
  }
};




export const getUserData = async () => {
  try {
    const response = await axios.get("http://localhost:7000/users", {
      withCredentials: true, 
    });

    return response.data.users;
  } catch (err) {
    console.log("Error fetching user data:", err);
    throw err; 
  }
};


export const updateUser = async (name, email, phone, password, work, profile) => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:7000/updateprofile', {
        name,
        email,
        phone,
        password,
        work,
        profile,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};