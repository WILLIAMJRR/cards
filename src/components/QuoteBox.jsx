import React from 'react';
import Author from './Author';
import ButtonBox from './ButtonBox';
import Fhrase from './Fhrase';

//  se recibe la props destructurada como parametro de la funcion para recibirla
const QuoteBox = ({ quoteRamdon, handleclick, colorRamdon }) => {
  console.log(quoteRamdon);
  return (
    <section style={{ color: colorRamdon }} className='card'>
      <span className='container'>
        <i className='bx bxs-quote-alt-left box_quote'></i>
        <Fhrase quoteRamdon={quoteRamdon} />
        <i className='bx bxs-quote-alt-right box_quote'></i>
      </span>
      <Author quoteRamdon={quoteRamdon} />
      <ButtonBox colorRamdon={colorRamdon} handleclick={handleclick} />
    </section>
  );
};

export default QuoteBox;
