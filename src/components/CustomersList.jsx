import React from "react";
import {useState} from 'react';

function CustomersList(){

    const [customer, setCustomer] = useState({
        pageTitle: "Customers",
        customersCount: 5,
         customers: [
            {
                id: 1,
                name: "Scott",
                phone: "123-456",
                address: { city: "New Delhi" },
                photo: "https://picsum.photos/id/1010/60",
            },
            {
                id: 2,
                name: "Jones",
                phone: "982-014",
                address: { city: "New Jersy" },
                photo: "https://picsum.photos/id/1011/60",
              },
              {
                id: 3,
                name: "Allen",
                phone: "889-921",
                address: { city: "London" },
                photo: "https://picsum.photos/id/1012/60",
              },
              {
                id: 4,
                name: "James",
                phone: null,
                address: { city: "Berlin" },
                photo: "https://picsum.photos/id/1013/60",
              },
              {
                id: 4,
                name: "James",
                phone: null,
                address: { city: "Berlin" },
                photo: "https://picsum.photos/id/1013/60",
              },
        ],
 });
 
   

 
   //Executes when the user clicks on Refresh button
   const onRefreshClick = () => {
    //Update the state using setState method - so that react updates the Browser DOM automatically
    setCustomer({ customersCount: 7 });
  };
  
 const getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

   //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  const onChangePictureClick = (cust, index) => {
    // console.log(cust);
    //console.log(index);

    //get existing customers
    var custArr = customer.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    //update "customers" array in the state
    setCustomer({ customers: custArr });
  };


   
   return (
   
    <div>
    <h4 className="m-1 p-1">
      {customer.pageTitle}

      <span className="badge badge-secondary m-2">
        {customer.customersCount}
      </span>

      <button className="btn btn-info" onClick={onRefreshClick}>
        Refresh
      </button>
    </h4>

    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Customer Name</th>
          <th>Phone</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>{customer && customer.map(getCustomer =>
        <tr key={getCustomer.id}>
          <td>{getCustomer.name}</td>
          <td>{getCustomer.photo}</td>
          <td>{getCustomer.phone}</td>
          <td>{getCustomer.address}</td>
        </tr>
        )}</tbody>
    </table>
  </div>


    );
}






  

export default CustomersList;