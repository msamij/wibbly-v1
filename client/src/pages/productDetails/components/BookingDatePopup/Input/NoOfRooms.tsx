import React, { ChangeEventHandler } from 'react';
import './NoOfRooms.css';

interface INoOfInputProps {
  onInputChange: (val: string) => void;
}
function NoOfRoomsInput(props: INoOfInputProps) {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    props.onInputChange(e.target.value);
  };

  return <input type="number" className="input" placeholder="rooms" onChange={onInputChange} />;
}

export default NoOfRoomsInput;
