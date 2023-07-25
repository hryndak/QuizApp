import React from "react";
import { decode } from "html-entities";
import './home.jsx'

export default function Quizblock(props) {

    let arr = {};

    
    console.log(arr);

    return (
        <div>
            {props.data.map(ele => {

                arr.incorrect_answers = ele.incorrect_answers;
                return (
                    <div className="questions-and-answers">
                        <h1>{decode(ele.question)}</h1>
                        <div className="answers">
                            <h2>{decode(ele.incorrect_answers)}</h2>
                            <h3 onClick={() => console.log("clicked right")} >{decode(ele.correct_answer)}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}