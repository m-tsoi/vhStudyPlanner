import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const getMessage = () => {
    return items.length === 0 && <p>nothing</p>;
  };

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //Hook (react Built in features)
  // arr[0] = varaibles
  // arr[1] = updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
