import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  
  const hero = getHeroById(heroeId);



  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to="/" />;
  }
  const imgPath = `/assets/${hero.id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img src={imgPath} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8 animate__animated animate__fadeInUp ">
        <h3>{hero.superhero}</h3>
        <ul className="list-group ">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: {hero.alter_ego}</b>{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: {hero.publisher}</b>{" "}
          </li>

          <li className="list-group-item">
            {" "}
            <b>First Appearance: {hero.first_appearance}</b>{" "}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
