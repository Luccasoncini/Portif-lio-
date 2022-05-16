import React from 'react';
import { Header } from './components/header';
import { MenuProvider } from './hooks/useMenu';

export function App() {
  return (
    <MenuProvider>
      <Header />
    </MenuProvider>
  );
}
