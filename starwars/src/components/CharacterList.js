import React from "react";
import Character from "./Character";

import "./StarWars.css";

const CharacterList = props => {
    return props.charList.map(character => { 
        return (
            <div className = "characterCard">
            <Character 
                name = {character.name}
                birthYear = {character.birth_year}
                created = {character.created} 
                edited = {character.edited}
                eyeColor = {character.eye_color}
                gender = {character.gender}
                hair = {character.hair_color}
                height = {character.height}
                homeworld = {character.homeworld}
                mass = {character.mass}
                skinColor = {character.skin_color}
                url = {character.url}
                films = {character.films}
                species = {character.species}
                starships = {character.starships}
                vehicles = {character.vehicles}
                />
            </div>
        ) 
    })
}

export default CharacterList; 