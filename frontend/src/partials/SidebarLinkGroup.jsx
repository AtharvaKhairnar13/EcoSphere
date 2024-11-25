import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function SidebarLinkGroup({ children, activecondition }) {
  const [open, setOpen] = useState(activecondition); // Toggle open state for each link group

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen); // Toggle open state
  };

  return (
    <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${activecondition && 'from-gray-700/[0.12] dark:from-gray-700/[0.24] to-gray-700/[0.04]'}`}>
      {children(handleClick, open)}
    </li>

  );
}

export default SidebarLinkGroup;
