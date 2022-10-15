import Header from '@header/Header';
import Main from '@main/Main';
import Overlay from '@overlay/Overlay';

function App() {
  return (
    <div className="container">
      <Overlay></Overlay>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
