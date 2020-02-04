import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [data, setData] = useState()

    const getData = () => {

        axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                console.log("received response: ", response)
                setData(response.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, []);

    return <div id="my-data-div">

        { data && data.title }
    </div>
}
export default Home
