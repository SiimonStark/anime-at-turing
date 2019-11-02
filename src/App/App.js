import React from 'react';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-display">
        <main className="home">
          <section className="feed">
            <article className="feed-card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam doloribus sunt sapiente aut! Dolorem voluptas impedit
                deleniti blanditiis. Iure labore porro adipisci tenetur
                molestiae incidunt eveniet quos quam iusto soluta!
              </p>
              <form className="ui-feed-card">
                <span className="vote">
                  <button>^</button>
                  <button>v</button>
                </span>
                <button>Remove</button>
              </form>
            </article>
            <article className="feed-card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam doloribus sunt sapiente aut! Dolorem voluptas impedit
                deleniti blanditiis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quibusdam doloribus sunt sapiente aut! Dolorem
                voluptas impedit deleniti blanditiis. Iure labore porro adipisci
                tenetur molestiae incidunt eveniet quos quam iusto soluta!
              </p>
              <form className="ui-feed-card">
                <span className="vote">
                  <button>^</button>
                  <button>v</button>
                </span>
                <button>Remove</button>
              </form>
            </article>
          </section>
          <section className="upcoming">
            <h3>Upcoming Lunch Episode</h3>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
