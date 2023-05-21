import React from "react";
import "../Component/DataTable.css"
import Popup from "reactjs-popup";
import popupImage from "../Assets/Image/popup.png"
import editButton from "../Assets/Image/editButton.png"
import { Link } from "react-router-dom";

export const DataTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((title) => (
            <th className="grey-text">{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            <td className="bold-text">
              <Link to={`/ProductDetailPage/${item.id}`}>{item.name}</Link>
            </td>
            <td>{item.description}</td>
            <td className="green-text bold-text">{item.price}</td>
            <td>{item.category}</td>
            <td>{item.expiryDate}</td>
            <td>
              {/* Action buttons or components */}
              {/* Example: */}

            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>

              <button>
                <img src={editButton} className="button-image" />
                Edit
              </button>
              <Popup
                trigger={
                  <button className="button">
                    <img src={popupImage} className="button-image" />
                    Delete
                  </button>
                }
                position="left center"
              >
                <div className="popup-box">
                  <img src={popupImage} className="popupImage" />
                  <p className="bold-text">
                    Are you sure to delete <b>{item.name}</b>
                  </p>
                  <button className="popupButton">Yes</button>
                  <button className="popupButton">No</button>
                </div>
              </Popup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 

export default DataTable;
