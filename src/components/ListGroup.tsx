import { useState } from "react";

function ListGroup() {
  let items = ["test", "test1", "test2"];
  //   let selectedIndex = -1;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
