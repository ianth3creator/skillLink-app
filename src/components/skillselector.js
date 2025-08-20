// src/components/SkillsSelector.js
import React, { useState } from 'react';

const skillsList = [
  "Plumber",
  "Electrician",
  "Carpenter",
  "Painter",
  "Gardener",
  "Mechanic",
  "Hair Stylist",
  "Tailor",
  "House Cleaner"
];

function SkillsSelector({ selected = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skillsList.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSkill = (skill) => {
    const updated = selected.includes(skill)
      ? selected.filter(s => s !== skill)
      : [...selected, skill];
    onChange(updated);
  };

  const displayed = selected.length > 0
    ? selected.slice(0, 2).join(', ') + (selected.length > 2 ? ` +${selected.length - 2} more` : '')
    : 'Select skills';

  return (
    <div className="multiselect" onClick={() => setIsOpen(!isOpen)}>
      <div className="multiselect-header">
        <span>{displayed}</span>
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="search-input"
        />
      </div>

      {isOpen && (
        <ul className="multiselect-list">
          {filteredSkills.length > 0 ? (
            filteredSkills.map(skill => (
              <li
                key={skill}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSkill(skill);
                }}
                className={selected.includes(skill) ? 'selected' : ''}
              >
                <span>{skill}</span>
                {selected.includes(skill) && <span className="checkmark">✓</span>}
              </li>
            ))
          ) : (
            <li className="no-results">No skills found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SkillsSelector;