import { ReactComponent as GithubIcon } from 'Assets/img/githubimg.svg';
import './styles.css';

function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="DSMovie-nav-content">
          <h1>DSMovie.Atual4</h1>
          <a href="https://github.com/AtualpaLeite/DSMovie.Atual4">
            <div className="DSMovie-contact-container">
              <GithubIcon />
              <p className="DSMovie-contact-link"> /AtualpaLeite </p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;