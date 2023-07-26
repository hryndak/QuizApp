import React from "react";

export default function StartPage(props) {

    return (
        <div className="home">
            <div className="home-content">
                <h1 className="title">Quizzical</h1>
                <h3>Choose your questions!</h3>
                <form className="inputs" onSubmit={props.handleSubmit}>
                    <h3>Number of questions: </h3>
                    <input
                        min={1}
                        max={10}
                        type="number"
                        required
                        name="questions"
                        onChange={(e) => {
                            props.setPreferences(prev => ({
                                ...prev,
                                questions: e.target.value
                            }))
                        }}
                    />
                    <h3>Category: </h3>
                    <select
                        name="category"
                        required
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
                    <h3>Difficulty: </h3>
                    <select
                        required
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