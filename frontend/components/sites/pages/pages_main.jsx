import React from 'react';
import EditorSidebar from '../../ui/editor_sidebar.jsx';

const PagesMain = ({ site, pages, params, children }) => (
  <EditorSidebar site={site} pages={pages} params={params}>
    {children}
  </EditorSidebar>
);

export default PagesMain;