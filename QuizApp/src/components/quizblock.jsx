import React from "react";
import { decode } from "html-entities";
import './home.jsx'

export default function Quizblock(props) {
    const [checked, setChecked] = React.useState(false);
    //const [answers, setAnswers] = React.useState(0);
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    let answers = 0;
    return (
        <div>
            {props.data.map(ele => {
                let anserwred = false;
                let incorrect_arr = ele.incorrect_answers;
                if (incorrect_arr != undefined) {
                    incorrect_arr.push(ele.correct_answer);
                    shuffleArray(incorrect_arr);
                }
                console.log(ele.correct_answer);
                
                function handleClick(event) {
                    if (!anserwred) {
                        event.currentTarget.disabled = true;
                        anserwred = true;
                        if (event.target.textContent == decode(ele.correct_answer)) {
                            console.log("correct")
                            answers++;
                        }
                    }
                }
                
                return (
                    <div className="questions-and-answers">
                        <h1>{decode(ele.question)}</h1>
                        <div className="answers">
                            {incorrect_arr != undefined && incorrect_arr.map(ele => {
                                return (<button onClick={(event) => handleClick(event)} >{decode(ele)}</button>)
                            })}
                        </div>
                        <div className="line" ></div>
                    </div>
                )
            })}

            {checked &&
                <div>good {answers}</div>
            }
            {!checked &&
                <div className="check">
                    <h4 onClick={() => setChecked(true)}>Check Answers</h4>
                </div>
            }
        </div>
    )
}