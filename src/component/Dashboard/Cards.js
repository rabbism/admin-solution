import React, { useState } from "react";
import { toast } from "react-toastify";

const Cards = (props) => {
  const { name, _id,image, email } = props.item;
  const [myNotes, setMyNotes] = useState([]);
  console.log(props.img);

  const removeNote = (id) => {
    const decision = window.confirm("Do You Really Want To Remove?");
    if (decision) {
      const url = `https://sleepy-depths-81993.herokuapp.com/slider/${id}`;
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
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="card-style-3 mb-30">
        <div class="card-image">
          <a href="#0">
            <img className ="img-thumbnail" src={`data:${image.contentType};base64,${image.img}`} alt="" />
          </a>
        </div>
        <div className="card-content">
          <h4>
            <a href="#0">{name} </a>
          </h4>
          <p>
            {email}
          </p>
          <button  className="text-danger btn btn-danger px-4 py-2" onClick={() => removeNote(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              color="#fff"
              height="20"
              font-size="24px"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
