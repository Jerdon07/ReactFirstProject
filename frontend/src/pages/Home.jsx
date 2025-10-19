import Card from "../components/Card"
import { useState } from "react"

function Home() {

    console.log("Home Component Rendered");

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2014"},
        {id: 2, title: "John Who", release_date: "2017"},
        {id: 3, title: "John Whree", release_date: "2020"},
        {id: 4, title: "John Whour", release_date: "2011"},
        {id: 5, title: "John Whive", release_date: "2007"}
    ]

    const handleSearch = (e) => {
        e.preventDefault(); // Prevents page reload on form submit
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // This is how you input a state from and input element
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
                    <Card movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home;