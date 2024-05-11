import React from 'react';
import axios from 'axios';
import {signOut} from "firebase/auth";
import {firebaseAuth} from "../utils/authHelper";
import axiosInstance from "../utils/request";

const Dashboard = () => {

    const handleRequest = () => {
        axiosInstance.post("", {query: "{message}"})
    }


    const handleSignOut = () => {
        signOut(firebaseAuth)
    }

    return (<div>
        <h1>Dashboard</h1>
        <p>
            <button onClick={handleRequest}>Send a request</button>
        </p>
        <p>
            <a onClick={handleSignOut} href="">logout</a>
        </p>

    </div>)
}

export default Dashboard