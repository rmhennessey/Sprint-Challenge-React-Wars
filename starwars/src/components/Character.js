import React from "react";

const Character  = props => {
  return (
    <div className="character">
        <h3><strong>Name:</strong> {props.name}</h3>
        <p><strong>Birth Year:</strong> {props.birthYear}</p>
        <p><strong>Created:</strong> {props.created}</p>
        <p> <strong>Edited:</strong> {props.edited}</p>
        <p><strong>Eye color:</strong> {props.eyeColor}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Hair color:</strong> {props.hair}</p>
        <p><strong>Height:</strong> {props.height}</p>
        <p><strong>Homeworld:</strong> {props.homeworld}</p>
        <p><strong>Mass:</strong> {props.mass}</p>
        <p><strong>Skin Color:</strong> {props.skinColor}</p>
        <p><strong>URL:</strong> {props.url}</p>
        <p><strong>Films:</strong> {props.films}</p>
        <p><strong>Species:</strong> {props.species}</p>
        <p><strong>Starships:</strong> {props.starships}</p>
        <p><strong>Vehicles:</strong> {props.vehicles}</p>
    </div>
  );
};
export default Character;