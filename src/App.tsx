import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./assets/styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root');

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header onOpenModal={openModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isModalOpen}  onRequestClose={closeModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}


