import React from "react";

export default function Quizblock() {

    const [data, setData] = React.useState({});

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
        .then(res => res.json())
            .then(data => setData(data))
    }, [])


    console.log(data.results[0]);

    return (
        <div>
            <h1>Helloadass</h1>
        </div>
    )
}