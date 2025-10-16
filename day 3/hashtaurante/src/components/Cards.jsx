import Card from "./Card";
import ImgBurguer from "../assets/pratos/burguer-picanha.jpeg";
import ImgFile from "../assets/pratos/enroladinho-mignon.jpeg"
import {pratosPrincipais, sobremesas, bebidas} from "../assets/cardapio"
const Cards = ({numCategoriaSelecionada}) => {

const itensCategorias = [pratosPrincipais, sobremesas, bebidas];
const pratos = itensCategorias[numCategoriaSelecionada];
  return (
    <div className="cards">
    {pratos.map((prato)=>(
         <Card
        titulo={prato.nome}
        descricao={prato.descricao}
        preco={prato.preco}
        imagem={prato.imagem}
      />
    ))}
     
    </div>
  );
};

export default Cards;
