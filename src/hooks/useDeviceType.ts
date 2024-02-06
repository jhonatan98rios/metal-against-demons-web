// useDeviceType.js
import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return false
      setIsMobile(window.innerWidth < 768); // Você pode ajustar esse valor conforme necessário
    };

    // Executa a função uma vez para definir o valor inicial
    handleResize();

    // Adiciona um listener de redimensionamento para atualizar o estado quando a janela for redimensionada
    window.addEventListener('resize', handleResize);

    // Remove o listener de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useDeviceType;
