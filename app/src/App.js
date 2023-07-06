import bean_with_text from './bean_with_text.svg';
import bean_clear from './bean_clear.svg'
import './App.css';
import BeanToolbar from './BeanToolbar';


function App() {
  return (
    <div className="App">
    <BeanToolbar />
      <header className="App-header">
        <div>
          <div >
            <img src={bean_clear} style={{maxWidth: '80%'}} />
            <img src={bean_clear} style={{maxWidth: '80%'}} />
          </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus purus, ac faucibus ante pharetra non. Donec massa enim, volutpat non risus vitae, posuere mattis metus. Curabitur enim nulla, congue ut magna a, semper venenatis arcu.
            </p>
        </div>
        <div>
          <img src={bean_clear} style={{maxWidth: '80%'}} />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus purus, ac faucibus ante pharetra non. Donec massa enim, volutpat non risus vitae, posuere mattis metus. Curabitur enim nulla, congue ut magna a, semper venenatis arcu.
            </p>
        </div>
        <div>
          <img src={bean_clear} style={{maxWidth: '80%'}} />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus purus, ac faucibus ante pharetra non. Donec massa enim, volutpat non risus vitae, posuere mattis metus. Curabitur enim nulla, congue ut magna a, semper venenatis arcu.
            </p>
        </div>
      </header>
    </div>
  );
}

export default App;
