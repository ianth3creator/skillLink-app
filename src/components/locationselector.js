// src/components/LocationSelector.js
import React, { useState } from 'react';

const locations = [
  "Ikeja",
  "Yaba",
  "Surulere",
  "Lekki",
  "Balogun",
  "Ojota",
  "Agege",
  "Ikorodu",
  "Victoria Island",
  "Ajah"
];

function LocationSelector({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (location) => {
    onChange(location);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
      <div className="dropdown-header">
        {value || 'Select a location'}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {locations.map((loc) => (
            <li
              key={loc}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(loc);
              }}
              className={value === loc ? 'selected' : ''}
            >
              {loc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocationSelector;