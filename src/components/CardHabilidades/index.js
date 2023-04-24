import './card.css';
import { HiCursorClick } from 'react-icons/hi';

export default function Card(
    {props: habilidades, projeto, descricao, linkProjeto, linkGithub, conceitos, icon}
    ){
    return(
        <div className='cardContainer'>
            <span className="habilidades">{habilidades}</span>

            <h2 className="projeto">{projeto}</h2>

            <p className="descricao">{descricao}</p>
            
            <span>{conceitos}</span>
            
            <a href={linkProjeto} target="_blanck" >{icon}{projeto} <span>Site do Projeto</span></a>


            <a href={linkGithub} target="_blank">{icon}Código  <span>Link para o código no GITHUB</span> </a>
        </div>
    )
}