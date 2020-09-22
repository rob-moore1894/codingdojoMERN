import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import People from './People'
import Planets from './Planets'
import Films from './Films'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'

const DisplayComponent = (props) => {

    const [people, setPeople] = useState(null);
    const [planet, setPlanet] = useState(null);
    const [film, setFilm] = useState(null);
    const [species, setSpecies] = useState(null);
    const [starship, setStarship] = useState(null);
    const [vehicle, setVehicle] = useState(null);


    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.search}/${props.id}`)
            .then(res => {
                if(props.search === 'people'){
                    setPeople(res.data);
                    setPlanet(null);
                    setFilm(null);
                    setSpecies(null);
                    setStarship(null);
                    setVehicle(null);
                } else if(props.search === 'planets'){
                    setPlanet(res.data); 
                    setPeople(null);
                    setFilm(null);
                    setSpecies(null);
                    setStarship(null);
                    setVehicle(null);                    
                } else if(props.search === 'films'){
                    setFilm(res.data);
                    setPeople(null);
                    setPlanet(null);
                    setSpecies(null);
                    setStarship(null);
                    setVehicle(null);
                } else if(props.search === 'species'){
                    setSpecies(res.data);
                    setPeople(null);
                    setPlanet(null);
                    setFilm(null);
                    setStarship(null);
                    setVehicle(null);
                } else if(props.search === 'starships'){
                    setStarship(res.data);
                    setPeople(null);
                    setPlanet(null);
                    setFilm(null);
                    setSpecies(null);
                    setVehicle(null);
                } else if(props.search === 'vehicles'){
                    setVehicle(res.data);
                    setPeople(null);
                    setPlanet(null);
                    setFilm(null);
                    setSpecies(null);
                    setStarship(null);                    
                }
            })
            .catch(err => console.log(err));
    }, [props])
    return(
        <div>
            {
                people ? <People people={people} /> : null
            }
            {
                planet ? <Planets planet={planet} /> : null
            }
            {
                film ? <Films film={film} /> : null
            }
            {
                species ? <Species species={species} /> : null
            }
            {
                starship ? <Starships starship={starship} /> : null
            }
            {
                vehicle ? <Vehicles vehicle={vehicle} /> : null
            }
        </div>
    );
}

export default DisplayComponent; 