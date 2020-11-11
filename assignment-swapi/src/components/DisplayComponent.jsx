import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayComponent = (props) => {

    const [data, setData] = useState([]); 
    
    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.search}/${props.id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [props])

    return(
        <div className = "container">
            {
                props.search === "people" ? 
                    <table className="table table-bordered mt-4">
                        <thead>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Hair Color</th>
                            <th>Birth Year</th>
                        </thead>
                        <tr> 
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.hair_color}</td>
                            <td>{data.birth_year}</td>
                        </tr>
                    </table>
                : null
            } 
            {
                props.search === "planets" ?
                    <table className="table table-bordered mt-4">
                        <thead>
                            <th>Name</th>
                            <th>Population</th>
                            <th>Climate</th>
                            <th>Gravity</th>
                        </thead>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.population}</td>
                            <td>{data.climate}</td>
                            <td>{data.gravity}</td>
                        </tr>
                    </table>
                : null
            }
            {
                props.search === "films" ?
                    <table className="table table-bordered mt-4">
                        <thead>
                            <th>Title</th>
                            <th>Episode Id</th>
                            <th>Release Date</th>
                            <th>Opening Crawl</th>
                        </thead>
                        <tr>
                            <td>{data.title}</td>
                            <td>{data.episode_id}</td>
                            <td>{data.release_date}</td>
                            <td>{data.opening_crawl}</td>
                        </tr>
                    </table>
                : null
            }
            {
                props.search === "species" ?
                    <table className="table table-bordered mt-4">
                        <thead>
                            <th>Name</th>
                            <th>Classification</th>
                            <th>Designation</th>
                            <th>Average Height</th>
                        </thead>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.classification}</td>
                            <td>{data.designation}</td>
                            <td>{data.average_height}</td>
                        </tr>
                    </table>
                : null
            }
            {
                props.search === "starships" ?
                    <table className="table table-bordered mt-4">
                        <thead>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Manufacturer</th>
                            <th>Starship Class</th>
                        </thead>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.model}</td>
                            <td>{data.manufacturer}</td>
                            <td>{data.starship_class}</td>
                        </tr>
                    </table>
                : null
            }
            {
                props.search === "vehicles" ?
                    <table className="table table-bordered mt-4">
                        <thead>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Manufacturer</th>
                            <th>Cost <em>in Credits</em></th>
                        </thead>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.model}</td>
                            <td>{data.manufacturer}</td>
                            <td>{data.cost_in_credits}</td>
                        </tr>
                    </table>
                : null
            }
        </div>
    )
}

export default DisplayComponent; 