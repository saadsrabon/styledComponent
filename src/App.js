import './App.css';
import { CustomButton } from './StyledComponents/StyleComponents';

function App() {
   return (
      <div className='App'>
         <div className='button_box'>
            <button>Live</button>
            <CustomButton>Github</CustomButton>
         </div>
      </div>
   );
}

export default App;
