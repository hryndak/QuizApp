import React from "react";

export default function StartPage() {

    const [data, setData] = React.useState([]);
    const [preferences, setPreferences] = React.useState( {
        questions : 0,
        category : 'h',
        difficulty : 'e'
    })

    const categories = {
        History : 23,
        Sports : 21,
        Celebrities : 26,
        Politics : 24,
        Art : 25
    }
    
    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch(`https://opentdb.com/api.php?amount=${preferences.questions}&category=${categories[preferences.category]}&difficulty=${preferences.difficulty}`)
            .then(res => res.json())
            .then(data => setData(data.results))
            .catch(err => err)
    }


    const handleSubmit = event => {
        console.log('submited',data,`https://opentdb.com/api.php?amount=${preferences.questions}&category=${categories[preferences.category]}&difficulty=${preferences.difficulty}`)
        event.preventDefault();
    }

    return (
        <div className="home">
            <div className="home-content">
                <h1>Quizzical</h1>
                <form className="inputs" onSubmit={handleSubmit}>
                    <input 
                    min={0}
                    max={10}
                    type="number"
                    required
                    onChange={(e) => {
                        setPreferences(prev => ({
                            ...prev,
                            questions : e.target.value
                        }))
                    }}
                    />
                    <select
                    onChange={(e) => {
                        setPreferences(prev => ({
                            ...prev,
                            category : e.target.value
                        }))
                    }}
                    >
                    <option selected disabled hidden >Category</option>
                        <option>History</option>
                        <option>Sports</option>
                        <option>Celebrities</option>
                        <option>Politics</option>
                        <option>Art</option>
                    </select>
                    <select
                    
                    onChange={(e) => {
                        setPreferences(prev => ({
                            ...prev,
                            difficulty : e.target.value
                        }))
                    }}
                    >
                        <option selected disabled hidden >Difficulty</option>
                        <option value={'easy'} >Easy</option>
                        <option value={'medium'} >Medium</option>
                        <option value={'hard'} >Hard</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}