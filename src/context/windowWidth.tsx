import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface windowWidthContextType {
  windowWidth: number;
}

interface windowWidthProviderProps {
  children: ReactNode;
}

const WindowWidthContext = createContext<windowWidthContextType | undefined>(undefined);

export const WindowWidthProvider: React.FC<windowWidthProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export default WindowWidthContext;
