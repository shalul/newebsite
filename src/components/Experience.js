import { useState } from 'react';
import './Experience.css';

function WorkExperience() {
  const [active, setActive] = useState("Intapp");

  const jobs = {
    "Intapp (Pt. 2)": {
      title: "Machine Learning Engineer",
      company: "@ Intapp",
      dates: "",
      bullets: [
        "Coming soon!"
      ]
    },
    "Intapp": {
      title: "Machine Learning Engineer",
      company: "@ Intapp",
      dates: "June – August 2024",
      bullets: [
        "Architected a pipeline to assess and return performance metrics for Intapp’s generative AI framework",
        "Leveraged prompt engineering techniques with OpenAI and Langchain to produce high-quality evaluation metrics",
        "Conducted extensive research on hallucinations and dataset selection to enhance model accuracy",
        "Developed a RESTful API endpoint to seamlessly integrate the pipeline into internal production environments"
      ]
    },
    "University of Michigan": {
      title: "EECS 183 Instructional Aid",
      company: "@ University of Michigan",
      dates: "August 2023 – Present",
      bullets: [
        "Assisted hundreds of students in understanding fundamental programming concepts and coding problems",
        "Conducted weekly office hours to provide one-on-one tutoring and address student questions"
      ]
    }
  };

  return (
    <div className="experience">
      <h2>where i've worked</h2>

      <div className="experience-container">
        <div className="tabs">
          {Object.keys(jobs).map((key) => (
            <button
              key={key}
              className={key === active ? "active" : ""}
              onClick={() => setActive(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="content">
            <h3>{jobs[active].title} <span className="company">{jobs[active].company}</span></h3>
            <p>{jobs[active].dates}</p>
            <ul>
                {jobs[active].bullets.map((b, i) => (
                <li key={i}>{b}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
