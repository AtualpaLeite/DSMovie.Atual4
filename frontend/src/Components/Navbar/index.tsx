import {ReactComponent as GithubIcon From '../../Assets/IMG/github.svg';

funcition Navbar () {
 
    return (
    <header>
        <nav>
          <div>
            <h1>DSMovie.Atual4</h1>
            <a href="https://github.com/AtualpaLeite/DSMovie.Atual4">
             <div>
                <GithubIcon />
              <p>/AtualpaLeite</p>
             </div> 
            </a>
          </div>
        </nav>
      </header>
      );   
}

export default Navbar;