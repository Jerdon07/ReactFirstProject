
function Card({movie}) {

    function onFavouriteClick() {
        alert('Clicked');
    }
    
    return <div className="card">
        <div className="card-image">
            <img src="{movie.url}" alt="{movie.title}"/>

            <div className="overlay">
                <div className="fav-btn" onClick={onFavouriteClick}>
                    &#10084;
                </div>
            </div>
        </div>

        <div className="info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>;
}

export default Card;