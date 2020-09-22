import React from 'react'

const Films = (props) => {
    const {film} = props;

    return(
        <div>
            <h1>{film.title}</h1>
            <p>Episode Number: {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.release_date}</p>
            <p>Opening Crawl: {film.opening_crawl}</p>
        </div>
    )
}

export default Films; 