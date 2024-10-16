import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faMapPin } from '@fortawesome/free-solid-svg-icons';
import './Summary.css';

const Summary = () => {
  return (
    <div className="container">
      <div className="header1">
        <span className="item1 center">Summary</span>
      </div>
      <div className="content1">
        <div className="item1">
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} size="2x" />
          </div>
          <div className="text1">
            <span>Total No of Users</span>
            <span className="number">868</span>
          </div>
        </div>
        <div className="item1">
          <div className="icon">
            <FontAwesomeIcon icon={faMapPin} size="2x" />
          </div>
          <div className="text1">
            <span className='ak'>Total Categorieos</span>
            <span className="number number1">200</span>
          </div>
        </div>
      </div>
      <div className="header1">
        <span className="item1 center">Summary For Month</span>
      </div>
      <div className="content1">
        <div className="item1">
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} size="2x" />
          </div>
          <div className="text1">
            <span>Total No of Users</span>
            <span className="number">868</span>
          </div>
        </div>
        <div className="item1">
          <div className="icon">
            <FontAwesomeIcon icon={faMapPin} size="2x" />
          </div>
          <div className="text1">
            <span>Total Categorieos</span>
            <span className="number number1">200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
