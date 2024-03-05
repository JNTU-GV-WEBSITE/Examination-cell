import React from 'react';
import './Menu.css';
import DE from '../assets/director_of_evaluation.png';
import Directors from './Directors/Directors';

const directorData = [
  {
    id: 1,
    image: <img src={DE} alt="Director 1" />,
    name: 'John Doe',
    designation: 'Director of Operations',
    email: 'john.doe@example.com',
    description: 'Description for Director 1...',
  },
  {
    id: 2,
    image: <img src={DE} alt="Director 2" />,
    name: 'Jane Smith',
    designation: 'Creative Director',
    email: 'jane.smith@example.com',
    description: 'Description for Director 2...',
  },
  {
    id: 1,
    image: <img src={DE} alt="Director 1" />,
    name: 'John Doe',
    designation: 'Director of Operations',
    email: 'john.doe@example.com',
    description: 'Description for Director 1...',
  },
  {
    id: 2,
    image: <img src={DE} alt="Director 2" />,
    name: 'Jane Smith',
    designation: 'Creative Director',
    email: 'jane.smith@example.com',
    description: 'Description for Director 2...',
  },
  // Add more director data as needed
];

function DirectorsHelp() {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Directors</h1>
        </div>
      </header>
      <div className='breakfast my-5'>
        <div className="container">
          <div className="row">
            {directorData.map((director) => (
              <div key={director.id} className="col-lg-6">
                <Directors
                  image={director.image}
                  name={director.name}
                  designation={director.designation}
                  email={director.email}
                  description={director.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorsHelp;
