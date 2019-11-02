import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="backdrop-header">
        <img
          className="header-img"
          src="http://images6.fanpop.com/image/photos/39600000/japanese-wallpaper-of-japanese-art-20-tomoyea91698-39696605-2560-1440.jpg"
          alt="Beautiful Japanese Art"
        />
        <div className="fade-header" />
      </div>
      <div className="foreground-header">
        <section className="posse-banner">
          <h1 className="posse-title">Code-Taku</h1>
          <img
            className="posse-logo"
            src="https://bit.ly/2nvUbAk"
            alt="Anime Posse Logo"
          />
        </section>
        <nav>
          <button>Home</button>
          <button>Anime</button>
          <button>Manga</button>
          <button>Tracker</button>
          <button>Login</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;