import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [data, setData] = useState()

    const getData = () => {

        axios.get("https://api.frontegg.com/test").then(response => {
            console.log("received response: " + response)
            setData(response.data);
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, []);

    return <div id="my-data-div">
        {data && JSON.stringify(data)}
    </div>
}

export default About
