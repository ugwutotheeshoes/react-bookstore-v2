import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">React Bookstore</h1>
      <div className="bookstore">
        <div className="books">
          <img
            src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1623750078/Movie%20booth/412Jca2jNgL._SX319_BO1_204_203_200__bnvoy2.jpg"
            className="booklogo"
            alt="Book"
          />
          <h1>The president's daughter</h1>
          <p>
            <b>author:</b> bill clinton, james patterson
          </p>
        </div>
        <div className="books">
          <img
            src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1623749776/Movie%20booth/51VU-ask3QS._SX376_BO1_204_203_200__tuxqfn.jpg"
            className="booklogo"
            alt="Book"
          />
          <h1>oh, the places you'll go</h1>
          <p>
            <b>author:</b> Dr. seuss
          </p>
        </div>
        <div className="books">
          <img
            src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1623700016/Movie%20booth/american-marxist_ylulwf.jpg"
            className="booklogo"
            alt="Book"
          />
          <h1>american marxism</h1>
          <p>
            <b>author:</b> mark r. levin
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
