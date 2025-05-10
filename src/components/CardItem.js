import React from "react";

const CardItem = ({ imgUrl, title, description, technologies }) => {
  return (
    <div className="card-hover-wrapper">
      <div className="proj-imgbx slide-hover-card">
        <img src={imgUrl} alt={title} />
        <div className="slide-hover-content">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      {/* Single slideout with dynamic tech list */}
      <div className="tech-slideout">
        <ul>
          {technologies.map((tech, index) => (
            <li
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="tech-item"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
