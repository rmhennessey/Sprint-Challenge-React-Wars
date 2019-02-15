import React from "react";
import ContentCard from "./ContentCard";


const Character = props => {
    return (
        <div className = "character" >
        <ContentCard name = {props.name} 
                    birthYear = {props.birthYear}
                    created = {props.created} 
                    edited = {props.edited}
                    eyeColor = {props.eyeColor}
                    gender = {props.gender}
                    hair = {props.hair}
                    height = {props.height}
                    homeworld = {props.homeworld}
                    mass = {props.mass}
                    skinColor = {props.skinColor}
                    url = {props.url}
                    films = {props.films}
                    species = {props.species}
                    starships = {props.starships}
                    vehicles = {props.vehicles}
                    />
        </div>
    )
}

export default Character;