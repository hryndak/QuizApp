import React from "react";
import { decode } from "html-entities";
import './home.jsx'

export default function Quizblock(props) {
    const [checked, setChecked] = React.useState(false);
    const [answers, setAnswers] = React.useState(0);
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => {
        const newQuestions = props.data.map(ele => {
            let answered = false;
            const incorrect_arr = ele.incorrect_answers;
            if (incorrect_arr !== undefined) {
                incorrect_arr.push(ele.correct_answer);
                shuffleArray(incorrect_arr);
            }

            const handleClick = (event) => {
                if (!answered) {
                    event.currentTarget.disabled = true;
                    answered = true;
                    if (event.target.textContent === decode(ele.correct_answer)) {
                        setAnswers(prev => prev + 1);
                    }
                }
            }

            return (
                <div className="questions-and-answers" key={ele.question}>
                    <h1>{decode(ele.question)}</h1>
                    <div className='answers'>
                        {incorrect_arr !== undefined && incorrect_arr.map((ans, index) => {
                            return (<button key={index} onClick={(event) => handleClick(event)}>{decode(ans)}</button>)
                        })}
                    </div>
                    <div className="line"></div>
                </div>
            )
        });
        setQuestions(newQuestions);
    }, [props.data]);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const handleChange = () => {
        setChecked(true);
    }

    return (
        <div>

            {questions}

            {checked &&
                <div className="answers-show" >
                    <h3>You scored: {answers}/{props.data.length} correct answers</h3>
                    <h4 onClick={() => {
                        props.setStarted(false)
                    }} >Play Again</h4>
                </div>
            }
            {!checked &&
                <div className="check">
                    <h4 onClick={handleChange}>Check Answers</h4>
                </div>
            }

        </div>
    )
}
