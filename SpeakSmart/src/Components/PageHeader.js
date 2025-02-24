import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import '../Styles/PageHeader.css';

const PageHeader = ({ title, bgColor }) => {
  return (
    <header className="page-header" style={{ backgroundColor: bgColor }} >
      <div className="header-content">
        <Link to="/" className="back-arrow">
          <MdArrowBack size={30} />
        </Link>
        <h1 className="page-title">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
