import React, { useState, useEffect, useRef } from "react";
import Table from "./Table";
import "./SalesForm.css";
import ImageButton from "../UI/ImageButton";
import Button from "../UI/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SalesForm = () => {
  const [startDate, setStartDate] = useState("");

  // const [state, setState] = useState("");

  const dateFormat = (date) => {
    setStartDate(date);
  };

  // handleEnter key for shift focus to another input field:used on onKeyDown()

  const handleEnter = (e) => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      const form = e.target.form;
      const Index = [...form].indexOf(e.target);
      form.elements[Index + 1].focus();
      e.preventDefault();
    }
  };

  // keyupHandler key for shift focus to upper input field from lower field:used on onKeyUp()

  const keyupHandler = (e) => {
    if (e.keyCode === 38) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index - 1].focus();
      e.preventDefault();
    }
  };

  // for focus on the element
  // const inputRef = useRef();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  //----------------------------------

  return (
    <div className="container-fluid acc-ct">
      <div className="Heading-top d-flex justify-content-center pt-2 pb-2">
        <h5 className="head-txt px-4"> Sales-Add; Series-Main </h5>
      </div>
      <div className="row">
        <form>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-6 d-flex">
                <label> Date</label>
                <DatePicker
                  tabIndex={1}
                  selected={startDate}
                  dateFormat="dd/MM/yyyy"
                  onChange={dateFormat}
                  onKeyUp={keyupHandler}
                  type="text"
                  className="textColor input_date"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6">
                <label>Vch. No.</label>
                <input
                  // ref={inputRef}
                  tabIndex={2}
                  type="text"
                  className="input_vch"
                  onKeyDown={handleEnter}
                  onKeyUp={keyupHandler}
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <label>Sale Type</label>
                <input
                  type="text"
                  className="input_sale"
                  onKeyDown={handleEnter}
                  onKeyUp={keyupHandler}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <label>Party</label>
                <input
                  type="text"
                  className="Party"
                  onKeyDown={handleEnter}
                  onKeyUp={keyupHandler}
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <label>Mat. Centre</label>
                <input
                  type="text"
                  className="matcentre"
                  // onKeyDown={handleEnter}
                  onKeyUp={keyupHandler}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="col-12">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 pt-3">
              <Table />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 pt-3">
              <fieldset className="border p-2 legend">
                <legend className="float-none w-auto p-2">
                  Bill Sundry Details
                  <div className="lgf"></div>
                </legend>
                <div className="grid row">
                  <div className="c1 col-4"></div>
                  <div className="c2 col-4"></div>
                  <div className="c3 col-4">
                    <label>
                      TOTAL AMOUNT:- <span id="total">0.00</span>
                    </label>
                    <div className="c4 col-12"></div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="vch col-1 mt-2">
              <Button title="Vch. Detail" />
            </div>
            <div className="master col-1 mt-2">
              <Button title="Master Detail" />
            </div>
            <div className="party col-1 mt-2">
              <Button title="Party Dash Bord" />
            </div>
            <div className="vchimage col-1 mt-2">
              <ImageButton title="VCH. IMAGE " />
            </div>
            <div className="accimage col-1 mt-2">
              <ImageButton title="ACC. IMAGE " />
            </div>
            <div className="itemimage col-1 mt-2">
              <ImageButton title="ITEM. IMAGE " />
            </div>

            <div className="hold col-1 mt-2">
              <Button title="Hold Vch " />
            </div>
            <div className="update col-1 mt-2">
              <Button title="update discount " />
            </div>
            <div className="scheme col-1 mt-2">
              <Button title="Check Scheme" />
            </div>
            <div className="save col-1 mt-2">
              <Button title="Save" />
            </div>
            <div className="quit col-1 mt-2">
              <Button title="Quit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;
