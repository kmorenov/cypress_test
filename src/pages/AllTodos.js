import React, {useEffect, useState} from 'react';
import axios from "axios";

const AllTodos = () => {
    const [data, setData] = useState()

    const getData = () => {

        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                console.log("received response: ", response)
                setData(response.data);
            })
            .catch(error => console.log(error))
    }

    const fetching = () => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log('KM data 1: ', response)
                return response.json()})
            .then(response => {
                console.log('Fetched KM data 2: ', response)
                setData(response)})
            .catch(error => console.log(error))
    }

    useEffect(() => {
        // fetching()
        getData()
    }, []);

    return <div id="my-data-div">
        <ol>

            {data && Array.isArray(data) && data.map(item => <li key={item.id}> {item.title} </li>)}
            {data && !Array.isArray(data) && Object.values(data)[0].map(item => <li key={item.id}> {item.title} </li>)}
        </ol>

    </div>
}
export default AllTodos
