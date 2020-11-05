import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';

import { DrawerContainer } from './drawer.styled';

interface DrawerProps {
  drawerOpen: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ drawerOpen }) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerOpen && drawerRef.current) {
      drawerRef.current.style.left = '0';
      document.body.style.marginLeft = theme.layout.drawerWidth;
    } else if (!drawerOpen && drawerRef.current) {
      drawerRef.current.style.left = `-${theme.layout.drawerWidth}`;
      document.body.style.marginLeft = '0';
    }
  }, [drawerOpen]);

  return <DrawerContainer ref={drawerRef}>Test</DrawerContainer>;
};

export default Drawer;
