import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
    const imgPath = `assets/${id}.jpg`
  return (
    <div className="card">
      <img src={imgPath} alt={superhero} width={400}/>
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{publisher}</p>
        <p className="card-text">{alter_ego}</p>
        <p className="card-text">{first_appearance}</p>
        <p className="card-text">{characters}</p>
        <Link to={`/hero/${id}`} className="btn btn-outline-success">
          Perfil de {superhero}
        </Link>
      </div>
    </div>
  );
};
