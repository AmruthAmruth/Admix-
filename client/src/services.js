import axios from "axios";

export const UserSignup = (name, email, phone, password) => {
  return new Promise((resolve, reject) => {
    axios.post(
      "http://localhost:7000/signup",
      { name, email, phone, password },
      { withCredentials: true } // <-- Important
    )
    .then((res) => {
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
    return response.data;
  } catch (error) {
    console.log("Logout failed:", error);
    throw error;
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


export const updateUser = async (name, email, phone, password, job, profile) => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:7000/updateprofile', {
        name,
        email,
        phone,
        password,
        job,
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