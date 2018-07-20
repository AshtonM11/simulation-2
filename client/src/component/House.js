import React, { Component } from "react";

const House = props => {
  return (
    <div>
      <div> Listings </div>

      {props.houses.map(house => (
        <div>
          <a src={house.imgUrl} />
          <ul>
            <li>Property Name: {house.name}</li>
            <li>Address: {house.address}</li>
            <li>City: {house.city}</li>
            <li>State: {house.state}</li>
            <li>Zip: {house.zipcode}</li>
          </ul>

          <ul>
            <li> Mortgage: {house.mortgage}</li>
            <li> Rent: {house.rent}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default House;
