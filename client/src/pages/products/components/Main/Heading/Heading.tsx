import React from 'react';
import './Heading.css';

function Heading(props: { headingTitle: string }) {
  return <h2 className="heading-default heading-primary">{props.headingTitle}</h2>;
}

export default Heading;
