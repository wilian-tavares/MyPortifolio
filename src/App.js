import './app.css'
import Card from './components/CardHabilidades';

import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { HiCursorClick } from 'react-icons/hi';

import Imagem from '../src/assets/imagens/wilian.jpg'

function App() {
  return (
    <div className="App">
      <div className='container'>

      <div className='profile'>
       <div className='logo'>
        <h1>Wilian Tavares</h1>
        <span>Desenvolvedor Front-end</span>
          <p>
            Seja bem vindo ao meu Portifólio, nele está alguns dos meu projetos
            e meus contatos para entrar em contato comigo!
          </p>
       </div>

       <nav>
        <ul>
          <li>
            <a href='#projetos'>Projetos</a>
          </li>
          <li>
            <a href='#containerSkills'>Skills</a>
          </li>    
        </ul>
       </nav>   
       <div className='footer'>
          <div className='links'>
            <img src={Imagem}/>
            <div className='areaLinks'>
              <a href='https://github.com/wilian-tavares' target={'_blank'}>
                <AiOutlineGithub size={22} color="red" /> 
                <span>Github</span>
                <FiExternalLink  size={22} color="red" />
              </a>
            </div>

            <div className='areaLinks'>
              <a href='https://www.linkedin.com/in/wilian-oliveira-a91a1018a/' target={'_blank'}>
                <AiFillLinkedin size={22} color="red" />
                  <span>Linkedin</span> 
                <FiExternalLink size={22} color="red" />
              </a>
            </div>

            <div className='areaLinks'>  
              <a  href="mailto:wilian1910@gmail.com" target={'_blank'}>
              <CgMail size={22} color="red" />
                  <span>Email</span> 
                <FiExternalLink size={22} color="red" />
              </a>
            </div>
          </div>

         <div className='credits'>
          <span>Design by: 
            <a href='https://dribbble.com/NicolasMzrd' target='_blanck'>Nicolas Meuzard</a>
          </span>
         </div>      
       </div>
      </div>

      <div className='right'>
        <section className='container-projetos' id='projetos'>
          <div className='shieldCards'>
          <Card 
            projeto={'Wil Filmes'}
            descricao={
              "Wil Filmes é um site voltado sobre filmes, nele é listado os filmes mais populares,"+ 
              "filmes no cinema e as próximas estreias. Podendo também adicionar seu filme favorito no Local Storage do navegador!"
            }

            conteitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST"}

            icon={ <HiCursorClick size={22} color="#FFF" />}
            linkProjeto={"https://wilfilmes.netlify.app/"} 
           
            linkGithub={"https://github.com/wilian-tavares/Wil-Flix"}
          />

          <Card 
            projeto={'Wil Sorteios'}
            descricao={
              "Wil Filmes é um site voltado sobre filmes, nele é listado os filmes mais populares,"+ 
              "filmes no cinema e as próximas estreias. Podendo também adicionar seu filme favorito no Local Storage do navegador!"
            }
            conteitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST"}

            icon={ <HiCursorClick size={22} color="#FFF" />}

            linkProjeto={"https://wiliansorteios.netlify.app/"}
           
            linkGithub={"https://github.com/wilian-tavares/Sorteios-React"}
          />

          <Card 
            projeto={'Wil Pokedex'}
            descricao={
              "Wil Pokedex é um site sobre Pokemon, nele é listado mais de 900 Pokemons, nele é possível ver detalhes de cada Pokemon,"+
              "e adicioná-los em favoritos."
            }
            conteitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST"}

            icon={ <HiCursorClick size={22} color="#FFF" />}

            linkProjeto={"https://wilpokedex.netlify.app/"}
           
            linkGithub={"https://github.com/wilian-tavares/pokedex"}
           />

          <Card 
            projeto={'Wil Notícias'}
            descricao={
              "Wil Notícias é um site de Notícias.... ele faz a busca das últimas notícias sobre diversos temas"+
              "como Esportes, Economia, Saúde, Tecnologia Etc..." +
              "Este site não está Online mas tem o código dele no Github para quem tiver o interesse de testar."
            }   

             icon={ <HiCursorClick size={22} color="#FFF" />}
       
            conteitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, , API-REST"}

            linkProjeto={"https://wilfilmes.netlify.app/"}

            linkGithub={"https://github.com/wilian-tavares/Wil-Noticia"}
           />
      </div>
        </section>
        <section className='containerSkills' id='containerSkills'>
          <h2>SKILLS</h2>
          <div className='shieldSkills'>
          
          <div className='cardSkills'>
           <span>HARD SKILLS</span> 
           <nav>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT-JS</li>
            </ul>
          </nav> 
          </div>
          <div  className='cardSkills'>
          <span>SOFT SKILLS</span>
          <nav>
            <ul>
              <li>Proatividade</li>
              <li>Comunicação</li>
              <li>Motivação</li>
              <li>Vontade de aprender</li>
            </ul>
          </nav>
          </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}

export default App;
