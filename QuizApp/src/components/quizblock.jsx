import React from "react";
import he from "he"
import './home.jsx'

export default function Quizblock(props) {

    return (
        <div>
            <h1>{props.data[0].question}</h1>
        </div>
    )
}