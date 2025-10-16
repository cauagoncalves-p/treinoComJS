import { useState } from "react";

const Categorias = ({numCategoriaSelecionada, setnumCategoriaSelecionada}) => {
 
  return (
    <div className="categorias">
      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 0 ? " categoria--selecionada" : "")
        }
        onClick={() => setnumCategoriaSelecionada(0)}
      >
        Pratos Principas
      </p>
      
      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 1 ? " categoria--selecionada" : "")
        }
        onClick={() => setnumCategoriaSelecionada(1)}
      >
        Sobremesas
      </p>

      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 2 ? " categoria--selecionada" : "")
        }
        onClick={() => setnumCategoriaSelecionada(2)}
      >
        Bebidas
      </p>
    </div>
  );
};

export default Categorias;
