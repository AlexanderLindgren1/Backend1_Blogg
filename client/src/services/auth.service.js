import axios from "axios"

const signup = (email, password, adminStatus) => {
    return axios.post("http://localhost:5000/auth/signup", { email, password, adminStatus }).then((response) => {
        if (response.data.accessToken) {
            
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        try {
            if (response.data.errors) {
                return console.log("There are already a user that has the email.");
            }

        }
        catch (err) {
            console.log("error:", err);
        }
        localStorage.setItem("user", JSON.stringify(response.data))

        return response.data
    })
}


const UsersData = () => {
    return axios.get("http://localhost:5000/auth/users").then((response) => {
       console.log(response.data);
        return response.data
    })
}

const login = (email, password) => {
    return axios.post("http://localhost:5000/auth/login", { email, password }).then((response) => {
        console.log("In auth service login 0");

        if (response.data.accessToken) {
            console.log("In auth login 1");
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        console.log("In auth login 2");

        return response.data
    })


}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
    UsersData


}

export default authService