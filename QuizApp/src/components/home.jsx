import React from "react";

export default function StartPage(props) {

    return (
        <div className="home">
            <div className="home-content">
                <h1 className="title">Quizzical</h1>
                <form className="inputs" onSubmit={props.handleSubmit}>
                    <input
                        min={1}
                        max={10}
                        type="number"
                        required="true"
                        name="questions"
                        onChange={(e) => {
                            props.setPreferences(prev => ({
                                ...prev,
                                questions: e.target.value
                            }))
                        }}
                    />
                    <select
                        name="category"
                        required="true"
                        onChange={(e) => {
                            props.setPreferences(prev => ({
                                ...prev,
                                category: e.target.value
                            }))
                        }}
                    >
                        <option
                            value=""
                            selected
                            disabled
                        >Category</option>
                        <option>History</option>
                        <option>Sports</option>
                        <option>Celebrities</option>
                        <option>Politics</option>
                        <option>Art</option>
                    </select>
                    <select
                        required="true"
                        name="difficulty"
                        onChange={(e) => {
                            props.setPreferences(prev => ({
                                ...prev,
                                difficulty: e.target.value
                            }))
                        }}
                    >
                        <option value="" selected disabled >Difficulty</option>
                        <option value={'easy'} >Easy</option>
                        <option value={'medium'} >Medium</option>
                        <option value={'hard'} >Hard</option>
                    </select>
                    <input type="submit" value="Start Game" />
                </form>
            </div>
        </div>
    )
}