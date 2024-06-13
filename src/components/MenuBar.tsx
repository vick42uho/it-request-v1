import React, { useState } from 'react';
import { Dock } from 'primereact/dock';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // flex utilities
import '../App.css'; // custom styles

function MenuBar() {
  const [position, setPosition] = useState('left'); // Dock position set to 'left'

  const items = [
    
    {
      label: 'Chat',
      icon: () => <img alt="Finder" src="https://www.svgrepo.com/show/113364/chat.svg" width="100%" />,
    }
  ];

  return (
    <div className="menu-bar-container">
      <Dock model={items} position={position} />
    </div>
  );
}

export default MenuBar;
