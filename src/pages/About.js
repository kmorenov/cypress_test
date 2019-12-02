import React, {useEffect, useState} from 'react';


const About = () => {
    const [data, setData] = useState([])

    const  getData = () => {
        return fetch('http://localhost:4000/')
            .then(res => res.json())
            .then(res => setData([res]))
            .catch(err => alert(err));
    }

    useEffect(() => {
        getData()
    }, []);

    return <div>
        {data.map((d) => d.data)}
    </div>
}

export default About
