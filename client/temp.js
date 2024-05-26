import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { ConnectWallet } from "@thirdweb-dev/react";
import { checkIfImage } from "../utils";
import {ethers} from "ethers";
const index = () => {
  const { realEstate, address, connect, contract, getPropertiesData , createPropertyFunction } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const [form,setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images:"",
    propertyAddress:"",
  })

  const handleFromFieldChange = (fieldName,e) => {
    setForm({...form,[fieldName] : e.target.value});
  }

  const handleSumbit = async(e) => {
    e.preventDefault();

    checkIfImage(form.images , async(exists) => {
      if(exists){
        setIsLoading(true);
        await createPropertyFunction({
          ...form,
          price : ethers.utils.parseUnits(form.price,18),
        })
        setIsLoading(false);
      }
      else{
        alert("Invalid URL");
        setForm({...form,images:""});
      }
    })
  }
  return (
    <div>
      <h1>{realEstate}</h1>
      <ConnectWallet/>
      <h1>Create</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <input type="text" placeholder="Property Title" onChange={(e) => handleFromFieldChange("propertyTitle",e)} />
        </div>
        <div>
          <input type="text" placeholder="Description" onChange={(e) => handleFromFieldChange("description",e)} />
        </div>
        <div>
          <input type="text" placeholder="Category" onChange={(e) => handleFromFieldChange("category",e)} />
        </div>
        <div>
          <input type="number" placeholder="Price" onChange={(e) => handleFromFieldChange("price",e)} />
        </div>
        <div>
          <input type="url" placeholder="Image" onChange={(e) => handleFromFieldChange("images",e)} />
        </div>
        <div>
          <input type="text" placeholder="Address" onChange={(e) => handleFromFieldChange("propertyAddress",e)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default index;
