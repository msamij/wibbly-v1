import React from 'react';
import './Instructor.css';

interface IInstructorProps {
  imageUrl: string;
  instructorName: string;
}

function Instructor(props: IInstructorProps) {
  return (
    <div className="instructor">
      <h2 className="heading-default instructor__heading">Your Guide</h2>
      <div className="instructor__details">
        <img className="instructor__image" src={props.imageUrl} alt="Instructor Image" />
        <h2 className="heading-default instructor__name">{props.instructorName}</h2>
      </div>
    </div>
  );
}

export default Instructor;
