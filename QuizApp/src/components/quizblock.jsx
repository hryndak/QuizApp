import React from "react";
import { decode } from "html-entities";
import './home.jsx'

export default function Quizblock(props) {

    console.log(props.data)

    return (
        <div>
            {props.data.map(ele => {
                return (
                    <div>
                        <h1>{decode(ele.question)}</h1>
                        <h2>{decode(ele.incorrect_answers)}</h2>
                        <h3>{decode(ele.correct_answer)}</h3>
                    </div>
                )
            })}
        </div>
    )
}