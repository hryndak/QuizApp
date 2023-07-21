import React from "react";
import he from "he"

export default function Quizblock() {

    

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