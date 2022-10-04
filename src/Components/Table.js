import React from 'react'
import "./Table.css"
import DatalistInput from "react-datalist-input";

const Table = () => {

  const handleTotal =(e)=> {  

    let inputs = document.querySelectorAll('[id^="comp"]');

    let totalVal= 0;
    for (var i = 0; i < inputs.length ; i++) {
      if(parseFloat(inputs[i].value))
      totalVal += parseFloat(inputs[i].value);
        console.log(totalVal);
    }

    document.getElementById('total').innerHTML = totalVal;
}

  return (
    <div>
    <table className="table-responsive datatable" id="table">
      <thead>
        <tr>
          <th scope="col" className="heading">
            S.N.
          </th>
          <th scope="col" className="heading">
            Item
          </th>
          <th scope="col" className="headingQty">
            MRP
          </th>
          <th scope="col" className="heading">
            Qty.
          </th>
          <th scope="col" className="headingPrice">
            Unit
          </th>
          <th scope="col" className="headingAmount">
            List Price
          </th>
          <th scope="col" className="headingAmount">
            Disc
          </th>
          <th scope="col" className="headingAmount">
            Tot. Dis.
          </th>
          <th scope="col" className="headingAmount">
            Price
          </th>
          <th scope="col" className="headingAmount">
            Amount
          </th>
          <th scope="col" className="headingAmount">
            Tax(%)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="srno">1</td>
          <td className="item">
            <DatalistInput
              className="item"
              type="text"
              size="20"
              id="item"
              name="item"
              onSelect={(item) => console.log(item.value)}
              items={[
                { id: "himanshu", value: "himanshu" },
                { id: "Atul", value: "atul" },
                { id: "Mint", value: "Mint" },
                { id: "Strawberry", value: "Strawberry" },
                { id: "Vanilla", value: "Vanilla" },
              ]}
            />
          </td>
          <td className="qty">
            <input
            //   ref={one}
            //   onKeyDown={handleKeyEnter}
              className="qty"
              type="Number"
              id="qty"
              name="qty"
            />
          </td>
          <td className="unit">
            <input
            //   ref={two}
            //   onKeyDown={handleKeyEnter}
              className="unit"
              type="Number"
              id="unit"
              name="unit"
            />
          </td>
          <td className="price">
            <input
            //   ref={three}
            //   onKeyDown={handleKeyEnter}
              className="price"
              type="Number"
              id="price"
              name="price"
            />
          </td>
          <td className="amount">
            <input
            //   ref={four}
            //   value ={amount}
            //   onBlur ={findTotal}
            //   onChange ={inputField}
            //   onKeyDown={handleKeyEnter}
              // onBlur={Table}
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
            onChange={handleTotal}
              className="amount"
              type="Number"
              id="comp"
              name="comp"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">2</td>
          <td className="item">
            <DatalistInput
              className="item"
              type="text"
              size="20"
              id="item"
              onSelect={(item) => console.log(item.value)}
              items={[
                { id: "himanshu", value: "himanshu" },
                { id: "Atul", value: "atul" },
                { id: "Mint", value: "Mint" },
                { id: "Strawberry", value: "Strawberry" },
                { id: "Vanilla", value: "Vanilla" },
              ]}
            />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" name="rs" 
            // value={rs} onChange ={inputField} onBlur ={findTotal}
            // onBlur={findTotal} 
            />
            
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
             onChange={handleTotal}
              className="amount"
              type="Number"
              id="comp"
              name="comp"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">3</td>
          <td className="item">
            <DatalistInput
              className="item"
              type="text"
              size="20"
              id="item"
              onSelect={(item) => console.log(item.value)}
              items={[
                { id: "himanshu", value: "himanshu" },
                { id: "Atul", value: "atul" },
                { id: "Mint", value: "Mint" },
                { id: "Strawberry", value: "Strawberry" },
                { id: "Vanilla", value: "Vanilla" },
              ]}
            />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
             onChange={handleTotal}
              className="amount"
              type="Number"
              id="comp"
              name="comp"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">4</td>
          <td className="item">
            <DatalistInput
              className="item"
              type="text"
              size="20"
              id="item"
              onSelect={(item) => console.log(item.value)}
              items={[
                { id: "himanshu", value: "himanshu" },
                { id: "Atul", value: "atul" },
                { id: "Mint", value: "Mint" },
                { id: "Strawberry", value: "Strawberry" },
                { id: "Vanilla", value: "Vanilla" },
              ]}
            />
          </td>
          <td className="qty">
            <input className="qty" type="Number" size="20" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">5</td>
          <td className="item">
            <DatalistInput
              className="item"
              type="text"
              size="20"
              id="item"
              onSelect={(item) => console.log(item.value)}
              items={[
                { id: "himanshu", value: "himanshu" },
                { id: "Atul", value: "atul" },
                { id: "Mint", value: "Mint" },
                { id: "Strawberry", value: "Strawberry" },
                { id: "Vanilla", value: "Vanilla" },
              ]}
            />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">6</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">7</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">8</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" size="20" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">9</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">10</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">11</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
          <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
        <tr>
          <td className="srno">12</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" size="20" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="price">
            <input className="price" type="Number" id="price" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
           <td className="disc">
            <input
              className="disc"
              type="text"
              id="disc"
              name="disc"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
          <td className="amount">
            <input
              className="amount"
              type="Number"
              id="amount"
              name="amount"  
            />
          </td>
        </tr>
      </tbody>
    </table>
    {/* <span id ={props.total}></span> */}
  </div>
  )
}

export default Table