import React from 'react';
import './style.css';

import ContactCard from './ContactCard';
import Counter from './Counter';
function App() {
  return (
    <>
      <div>
        <ContactCard Name="sumaiya" Address="Mysore" College="MM" />
        <ContactCard Name="Khadija" Address="Hassan" College="Mce" />
        <ContactCard Name="Safia" Address="Hassan" College="Mce" />
      </div>
      <Counter />
    </>
  );
}
export default App;
