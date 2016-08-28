import React from 'react';
import Pages from 'react-icons/lib/fa/copy';
import Cart from 'react-icons/lib/fa/shopping-cart';
import Chart from 'react-icons/lib/fa/pie-chart';
import Gear from 'react-icons/lib/fa/cog';
import { Link } from 'react-router'

const Sidebar = ({ children, params }) => (
  <div className='sites-container'>
    <div className="sites-sidebar">
      <Link
        to={`/sites/${params.siteId}/editor`} 
        className='sidebar-item'
        activeClassName="active">
        <Pages />
      </Link>
      <Link
        to={`/sites/${params.siteId}/store`} 
        className='sidebar-item'
        activeClassName="active">
        <Cart />
      </Link>
      <Link
        to={`/sites/${params.siteId}/analytics`} 
        className='sidebar-item'
        activeClassName="active">
        <Chart />
      </Link>
      <Link
        to={`/sites/${params.siteId}/settings`} 
        className='sidebar-item'
        activeClassName="active">
        <Gear />
      </Link>
    </div>
    <div className="sites-content">
      {children}
    </div>
  </div>
);

export default Sidebar;