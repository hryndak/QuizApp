import React from "react";
import he from "he"

export default function Quizblock() {

    const [data, setData] = React.useState([]);
    const questions = [];
    const fetchData = () => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(res => res.json())
            .then(data => setData(data.results))
            .catch(err => err)
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    console.log(data);

    return (
        <div>
            {data.map((ele) => {
                return (
                    <div>
                        <h2>{he.decode(ele.question)}</h2>
                        <h3>{he.decode(ele.correct_answer)}</h3>
                    </div>
                )
            })}
        </div>
    )
}