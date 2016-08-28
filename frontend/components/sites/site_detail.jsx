import React from 'react';

const SiteDetail = ({ site, pages }) => (
  <div>
    <h1>{site.name}</h1>
    <ul>
      {pages && pages.map(page => <li key={page.id}>{page.name}</li>)}
    </ul>
  </div>
);

export default SiteDetail;
