import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json';
import colors from './json/colors.json';

function App() {
  //esta funcion sirve para cualquier array, es dinamico si le paso como parametro quotes solamente funcionaria para ese array
  const ramdomArray = (array) => {
    //se busca el numero ramdom desde 0 al 102
    //el mact.ramdon saca un numero de 0 al 1 y se coloca el metodo math.floor para rendodear hacia abajo
    const indice = Math.floor(Math.random() * array.length);
    //  se retorna el array como indice la variable donde buscamos el numero ramdon que en este cado es indice
    return array[indice];
  };
  //se guarda en el estado la funcion ramdomArray y se le pasa como parametros quates q es el array q viene del json
  const [quoteRamdon, setquoteRamdon] = useState(ramdomArray(quotes));

  const [colorRamdon, setColorRamdon] = useState(ramdomArray(colors));
  // cambia el valor del estado,se llama al setquoteRamdon y se llama a la funcion ramdomArray que como es una funcion reutilizable se le pase el parametro quotes
  const handleclick = () => {
    setquoteRamdon(ramdomArray(quotes));
    setColorRamdon(ramdomArray(colors));
  };
  return (
    <div style={{ background: colorRamdon }} className='App'>
      {/* pasamos como valor el estado que es quoteRamdon que esta a la derecha el quoteRamdon que esta a la izquierda es el nombre de la props que se aconseja nombrarlo igual al estado */}
      <QuoteBox
        // valor         props
        quoteRamdon={quoteRamdon}
        //valor       props
        handleclick={handleclick}
        colorRamdon={colorRamdon}
      />
    </div>
  );
}

export default App;
