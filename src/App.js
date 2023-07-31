import './App.css'
import Card from './components/CardHabilidades';

import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { HiCursorClick } from 'react-icons/hi';

import Imagem from '../src/assets/imagens/wilian.png'

function App() {
  return (
    <div className="App">
      <div className='container'>

        <main className='profile'>
          <div className='logo'>
            <h1>Wilian Tavares</h1>
            <span>Desenvolvedor Front-end</span>
            <h2>Sobre</h2>
            <p>
              Olá, me chamo Wilian Tavares, sou de Aracaju-SE e tenho 27 anos. Sou Desenvolvedor Web Frond-End desde 2021,
              tenho Habilidades em (HTML, CSS, SASS, JAVASCRIPT, Typescript REACT-JS, GIT/GitHub, API-REST),
              tenho experiência na criação de sites responsivos para mobile, e com bom desempenho.
            </p>
          </div>


          <div className='footer'>
            <div className='links'>
              <img src={Imagem} alt="Wilian.png" />
              <div className='areaLinks'>
                <a href='https://github.com/wilian-tavares' target={'_blank'}>
                  <AiOutlineGithub size={22} color='#393939' />
                  <span>Github</span>
                  <FiExternalLink size={22} color="#393939" />
                </a>
              </div>

              <div className='areaLinks'>
                <a href='https://www.linkedin.com/in/wiliantavaresoliveira/' target={'_blank'}>
                  <AiFillLinkedin size={22} color="#393939" />
                  <span>Linkedin</span>
                  <FiExternalLink size={22} color="#393939" />
                </a>
              </div>

              <div className='areaLinks'>
                <a href="mailto:wilian1910@gmail.com" target={'_blank'}>
                  <CgMail size={22} color="#393939" />
                  <span>Email</span>
                  <FiExternalLink size={22} color="#393939" />
                </a>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <a href='#projetos'> <HiCursorClick size={22} color="#CCC" />Projetos</a>
                </li>
                <li>
                  <a href='#containerSkills'> <HiCursorClick size={22} color="#CCC" />Skills</a>

                </li>
              </ul>
            </nav>
          </div>
        </main>

        <div className='projetos'>
          <section className='container-projetos' id='projetos'>
            <div className='shieldCards'>
              <Card
                projeto={'Wil Filmes'}
                descricao={
                  "Wil Filmes é um site voltado sobre filmes, nele é listado os filmes mais populares," +
                  "filmes no cinema e as próximas estreias. Podendo também adicionar seu filme favorito no Local Storage do navegador!"
                }

                conceitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST"}

                icon={<HiCursorClick size={22} color="#FFF" />}
                linkProjeto={"https://wilfilmes.netlify.app/"}

                linkGithub={"https://github.com/wilian-tavares/Wil-Flix"}
              />

              <Card
                projeto={'Wil Sorteios'}
                descricao={
                  "Wil Sorteios é um site com o intuito de criar sorteios de forma aleatória, podendo ser usado para sortear números das Loterias Federais Caixa como Mega-Sena, Quina, Lotofácil etc!"
                }
                conceitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST"}

                icon={<HiCursorClick size={22} color="#FFF" />}

                linkProjeto={"https://wilsorteios.netlify.app/"}

                linkGithub={"https://github.com/wilian-tavares/Sorteios-React"}
              />

              <Card
                projeto={'Wil Pokedex'}
                descricao={
                  "Wil Pokedex é um site sobre Pokemon, nele é listado mais de 1000 Pokemons,  é possível ver detalhes de cada Pokemon," +
                  "e adicioná-los em favoritos."
                }
                conceitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST, Paginação"}

                icon={<HiCursorClick size={22} color="#FFF" />}

                linkProjeto={"https://wilpokedex.netlify.app/"}

                linkGithub={"https://github.com/wilian-tavares/pokedex"}
              />

              <Card
                projeto={'Portal F1'}
                descricao={
                  "Site com informações de todas as corridas, pilotos, equipes, e detalhes de cada um deles, conta também com a classificação atualizada ápos a corrida"
                }

                conceitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, , API-REST, Paginação"}

                icon={<HiCursorClick size={22} color="#FFF" />}

                linkProjeto={"https://portalf1.netlify.app/"}

                linkGithub={"https://github.com/wilian-tavares/Portal-F1"}
              />

<Card
                projeto={'Wil Social Blog'}
                descricao={
                  "Site que simula uma rede social estática, onde todos os usuários, comentarios e posts são buscados de uma api"
                }

                conceitos={"REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, , API-REST, Paginação"}

                icon={<HiCursorClick size={22} color="#FFF" />}

                linkProjeto={"https://wilsocialblog.netlify.app/"}

                linkGithub={"https://github.com/wilian-tavares/Social-Blog"}
              />
            </div>
          </section>

          <section className='containerSkills' id='containerSkills'>

            <div className='shieldSkills'>

              <div className='cardSkills'>
                <span>HARD SKILLS</span>
                <nav>
                  <ul>
                    <li>HTML</li>
                    <li>CSS, SASS;</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT-JS</li>
                    <li>TYPESCRIPT;</li>
                    <li>GIT, GITHUB;</li>
                  </ul>
                </nav>
              </div>
              <div className='cardSkills'>
                <span>SOFT SKILLS</span>
                <nav>
                  <ul>
                    <li>Proatividade</li>
                    <li>Comunicação</li>
                    <li>Motivação</li>
                    <li>Vontade de aprender</li>
                    <li>Trabalho em Equipe</li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          <footer>
            <strong>Wilian Tavares - Desenvolvedor Front-End</strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
