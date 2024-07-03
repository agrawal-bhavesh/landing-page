import React from 'react'
import Header from './componenets/Header'
import Footer from './componenets/Footer';
import Body from './componenets/Body';

const App = () => {
  return (
    <main className='bg-amber-100 h-screen'>
      <Header />
      <Body />
      <Footer />
    </main>
  );
};

export default App