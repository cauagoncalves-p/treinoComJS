import React from "react";
const Card = ({titulo, descricao, preco, imagem}) => {
  return (
    <div className="card">
      <div className="card__textos">
        <div className="card__titulo">
          <h2>{titulo}</h2>

          <p>
            {descricao}
          </p>

          <p className="card__preco">{preco}</p>
        </div>
      </div>
      <div className="card__img">
        <img src={imagem} alt="Foto do Produto" />
      </div>
    </div>
  );
};

export default Card;
