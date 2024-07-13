import React from 'react';
import Greeting from './greeting';

const App = () => {
  return (
    <div>
      <Greeting name="Shashi"  age ="16"/> 
      <Greeting age="19"/>
      <Greeting name="Alice" />
      {/* //passing value in pros for greeting components  */}
    </div>
  );
};

export default App;