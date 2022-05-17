import React from 'react';
import { Header } from './components/header';
import { Home } from './components/home';
import { MenuProvider } from './hooks/useMenu';

export function App() {
  return (
    <MenuProvider>
      <Header />
      <Home />
    </MenuProvider>
  );
}
