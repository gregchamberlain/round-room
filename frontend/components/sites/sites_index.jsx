import React from 'react';
import { Link } from 'react-router';

const SitesIndex = ({ sites }) => (
  <div>
    <h1>Your Sites</h1>
    <ul>
      {sites.map(site => (
        <li key={site.id}>
          <Link to={`/sites/${site.id}`}>
            {site.name} - {site.identifier}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SitesIndex;