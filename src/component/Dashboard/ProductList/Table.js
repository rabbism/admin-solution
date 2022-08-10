import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Table = (props) => {
  const { _id, name, subject, price, img } = props.item;
  const [myNotes, setMyNotes] = useState([]);


  

  const removeNote = (id) => {
    const decision = window.confirm("Do You Really Want To Remove?");
    if (decision) {
      const url = `https://sleepy-depths-81993.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restNotes = myNotes.filter((note) => note._id !== id);
            setMyNotes(restNotes);
            toast("Product  Deleted!");
          }
        });
    }
  };
  return (
    <tr>
      <td className="min-width">
        <div className="lead">
          <div className="lead-image">
            {/* <img src={`data:${image.contentType};base64,${image.img}`} alt="" /> */}
            <img src={img} alt="" />
          </div>
          <div className="lead-text">
            <p>{subject}</p>
          </div>
        </div>
      </td>
      <td className="min-width">
        <p>
          <a href="#0">{name}</a>
        </p>
      </td>
      <td className="min-width">
        <p>{price}</p>
      </td>
      <td className="min-width">
        <p>{name}</p>
      </td>
      <td>
        <div className="action" onClick={() => removeNote(_id)}>
          <button className="text-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Table;
