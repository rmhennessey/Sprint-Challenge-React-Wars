import React from "react";
import Character from "./Character";

import "./StarWars.css";

const CharacterList = props => {
    return props.charList.map(character => { 
        return (
            <div className = "characterCard">
            <Character 
                name = {character.name}
                birthYear = {character.birthYear}
                created = {character.created} 
                edited = {character.edited}
                eyeColor = {character.eyeColor}
                gender = {character.gender}
                hair = {character.hair}
                height = {character.height}
                homeworld = {character.homeworld}
                mass = {character.mass}
                skinColor = {character.skinColor}
                url = {character.url}
                films = {[character.films]}
                species = {character.species}
                starships = {character.starships}
                vehicles = {character.vehicles}
                />
            </div>
        ) 
    })
}

export default CharacterList; 