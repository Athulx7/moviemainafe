import React from "react";
import { Link } from "react-router-dom";

function ReviewMovie() {
  return (
    <>
      <div className="container">
        <div className="d-flex mt-5 ">
          <h3>All added Reviews</h3>
          <Link to="/home" className="ms-auto">
            <button className="traler-button ">
              <i className='fa-solid fa-arrow-left me-3'></i>Back To Home
            </button>
          </Link>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <table className="table shodow border mt-5">
            <thead className="text-center">
              <th className="">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Review</th>
            </thead>
            <tbody className="text-center">
              <td>1</td>
              <td>Mnen</td>
              <td>jdbs,jcsljbcsjlbdsuilsudvbuils</td>
              <td> jhbhjbjhdjhbc</td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ReviewMovie;
