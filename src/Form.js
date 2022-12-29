import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Form() {
  //amount

  const [data1, setData1] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [filteredData1, setFilteredData1] = useState([]);
  const [filteredData2, setFilteredData2] = useState([]);

  //

  // ship to variables
  const [ship_to_name, setShip_To_Name] = useState("");
  const [ship_to_address, setShip_To_Address] = useState("");
  const [ship_to_city, setShip_To_City] = useState("");
  const [ship_to_state, setShip_To_State] = useState("");
  const [ship_to_zipcode, setShip_To_Zipcode] = useState("");
  const [ship_to_country, setShip_To_Country] = useState("");

  const ship_to = {
    name: ship_to_name,
    street1: ship_to_address,
    city: ship_to_city,
    state: ship_to_state,
    zip: ship_to_zipcode,
    country: ship_to_country,
  };
  const [isChecked, setIsChecked] = useState(false);

  //   ship from variables
  const [ship_from_name, setShip_From_Name] = useState("");
  const [ship_from_address, setShip_From_Address] = useState("");
  const [ship_from_city, setShip_From_City] = useState("");
  const [ship_from_state, setShip_From_State] = useState("");
  const [ship_from_zipcode, setShip_From_Zipcode] = useState("");
  const [ship_from_country, setShip_From_Country] = useState("");

  const ship_from = {
    name: ship_from_name,
    street1: ship_from_address,
    city: ship_from_city,
    state: ship_from_state,
    zip: ship_from_zipcode,
    country: ship_from_country,
  };
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);

  //   Packaging variables
  const [type_of_package, setType_Of_Package] = useState(
    "Box or Rigid Packaging"
  );
  const [pound, setPound] = useState("");
  const [ounce, setOunce] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [ismodal, setIsModal] = useState(false);

  const [isChecked3, setIsChecked3] = useState(true);

  //modal
  // const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      console.log("render");
      // console.log(data1);

      let filters1 = ["BESTVALUE"];
      const filteredResults1 = data1.filter((item) =>
        filters1.every((val) => item.attributes.indexOf(val) > -1)
      );
      //console.log(filteredResults1, "BESTVALUE");
      var filteredDataaaa = filteredResults1;
      if (filteredDataaaa != undefined || filteredData != "" || filteredData != null) {

        setFilteredData(filteredDataaaa);
      }
      console.log(filteredData, "...........BESTVALUE")

      let filters2 = ["CHEAPEST"];
      const filteredResults2 = data1.filter((item) =>
        filters2.every((val) => item.attributes.indexOf(val) > -1)
      );
      //console.log(filteredResults2,"filters")
      setFilteredData1(filteredResults2);
      console.log(filteredData1, "CHEAPEST");

      let filters3 = ["FASTEST"];
      const filteredResults3 = data1.filter((item) =>
        filters3.every((val) => item.attributes.indexOf(val) > -1)
      );

      // console.log(filteredResults3,"filters3")
      setFilteredData2(filteredResults3);
      console.log(filteredData2, "FASTEST");
    },
    [data1] //This is dependency and it will run only when data is changed
  );

  // function handleShow(breakpoint) {}

  const parcel = {
    length: length,
    width: width,
    height: height,
    distance_unit: "in",
    weight: pound,
    mass_unit: "lb",
  };

  // navigation
  // const navigate = useNavigate();

  // ship to functions
  const getCheckboxValue = (e) => {
    setIsChecked(e.target.checked);
  };

  //   ship from functions
  const getCheckboxValue1 = (e) => {
    setIsChecked1(e.target.checked);
  };
  const getCheckboxValue2 = (e) => {
    setIsChecked2(e.target.checked);
  };

  // Packaging functions
  const getCheckboxValue3 = (e) => {
    setIsChecked3(e.target.checked);
  };

  const getrates = (e) => {
    setIsModal(true);
    setFullscreen(true);
    setShow(true);
    //apna
    fetch("http://localhost:5600/getshipmentdetails", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

      body: JSON.stringify({
        addressFrom: ship_from,
        addressTo: ship_to,
        parcels: parcel,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData1(data);
        // let filters1 = ['BESTVALUE']  ;
        // const filteredResults1 = data.filter(item =>
        //   filters1.every(val => item.attributes.indexOf(val) > -1)
        // );
        //   console.log(filteredResults1,"filters");

        //   var filteredDataaaa =  filteredResults1
        //   setFilteredData(filteredDataaaa);
        //   console.log(filteredData,"...........mahendra")

        //   let filters2 = ['CHEAPEST']  ;
        //   const filteredResults2 = data.filter(item =>
        //     filters2.every(val => item.attributes.indexOf(val) > -1)
        //   );
        //   console.log(filteredResults2,"filters")
        //   setFilteredData1(filteredResults2);
        //   console.log(filteredData1,"state4");

        //     let filters3 = ['FASTEST']  ;

        //     const filteredResults3 = data.filter(item =>
        //       filters3.every(val => item.attributes.indexOf(val) > -1)
        //     );

        //     console.log(filteredResults3,"filters3")
        //     setFilteredData2(filteredResults3);
        //     console.log(filteredData2,"state2");
      });

    e.preventDefault();
  };

  return (
    <>
      {/* Ship To Form */}
      <div className="container">
        <form>
          <h2>Ship To</h2>
          <div className="row gx-2">
            <div className="form-floating mb-3 col-md-6">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email(optional)"
                autoComplete="on"
              />
              <label htmlFor="floatingInput">Email(optional)</label>
            </div>
            <div className="form-floating mb-3 col-md-6">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                placeholder="Phone(optional)"
                autoComplete="on"
              />
              <label htmlFor="floatingInput">Phone(optional)</label>
            </div>
          </div>
        </form>

        <div className="row gx-2">
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              autoComplete="on"
              value={ship_to_name}
              onChange={(e) => setShip_To_Name(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Company(optional)"
              autoComplete="on"
            />
            <label htmlFor="floatingInput">Company(optional)</label>
          </div>
        </div>

        <div className="row gx-2">
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="address"
              autoComplete="on"
              value={ship_to_address}
              onChange={(e) => setShip_To_Address(e.target.value)}
            />
            <label htmlFor="floatingInput">Address</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="apt"
              autoComplete="on"
            />
            <label htmlFor="floatingInput">
              Apt / Unit / Suite / etc. (optional)
            </label>
          </div>
        </div>

        <div className="row g-2">
          <div className="form-floating col col-xs-4 col-md-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="city"
              autoComplete="on"
              value={ship_to_city}
              onChange={(e) => setShip_To_City(e.target.value)}
            />
            <label htmlFor="floatingInput">City</label>
          </div>
          <div className="form-floating col col-xs-4 col-md-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="state"
              autoComplete="on"
              value={ship_to_state}
              onChange={(e) => setShip_To_State(e.target.value)}
            />
            <label htmlFor="floatingInput">State</label>
          </div>
          <div className="form-floating col col-xs-4 col-md-2 ">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="zipcode"
              autoComplete="on"
              value={ship_to_zipcode}
              onChange={(e) => setShip_To_Zipcode(e.target.value)}
            />
            <label htmlFor="floatingInput">Zipcode</label>
          </div>
          <div className="form-floating col-xs-12 col-md-6">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              value={ship_to_country}
              onChange={(e) => setShip_To_Country(e.target.value)}
            >
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, The Democratic Republic of the</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote d'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curacao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="SZ">Eswatini</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option vform-floatingalue="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="KP">North Korea</option>
              <option value="MK">North Macedonia</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestine</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="SH">
                Saint Helena, Ascension and Tristan da Cunha
              </option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and The Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten (Dutch part)</option>
              <option value="SK">Slovak Republic</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="KR">South Korea</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option defaultValue value="US">
                United States
              </option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
            <label htmlFor="floatingSelect">Country</label>
          </div>
        </div>

        <div className="row " style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
                value={isChecked}
                checked={isChecked}
                onChange={getCheckboxValue}
              />
              &nbsp;
              <big>Rubber Stamps</big>&nbsp;
              <small>
                Print extra information on the label (34 characters per field)
              </small>
            </label>

            {isChecked === true && (
              <div className="row gx-2">
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    autoComplete="on"
                    placeholder="Rubber Stamp / Custom Reference 1"
                  />
                  <label htmlFor="floatingInput">
                    Rubber Stamp / Custom Reference 1
                  </label>
                </div>
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    id="floatingInput"
                    autoComplete="on"
                    placeholder="Rubber Stamp / Custom Reference 2"
                  />
                  <label htmlFor="floatingInput">
                    Rubber Stamp / Custom Reference 2
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ship from Form */}
      <div className="container mt-3">
        <h2>Ship From</h2>
        <div className="row gx-2">
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              autoComplete="on"
              value={ship_from_name}
              onChange={(e) => setShip_From_Name(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Company(optional)"
              autoComplete="on"
            />
            <label htmlFor="floatingInput">Company(optional)</label>
          </div>
        </div>

        <div className="row gx-2">
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Address"
              autoComplete="on"
              value={ship_from_address}
              onChange={(e) => setShip_From_Address(e.target.value)}
            />
            <label htmlFor="floatingInput">Address</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              className="form-control"
              autoComplete="on"
              id="floatingInput"
              placeholder="Apt / Unit / Suite / etc. (optional)"
            />
            <label htmlFor="floatingInput">
              Apt / Unit / Suite / etc. (optional)
            </label>
          </div>
        </div>

        <div className="row g-2">
          <div className="form-floating col col-xs-4 col-md-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="city"
              autoComplete="on"
              value={ship_from_city}
              onChange={(e) => setShip_From_City(e.target.value)}
            />
            <label htmlFor="floatingInput">City</label>
          </div>
          <div className="form-floating col col-xs-4 col-md-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="state"
              autoComplete="on"
              value={ship_from_state}
              onChange={(e) => setShip_From_State(e.target.value)}
            />
            <label htmlFor="floatingInput">State</label>

            {/* <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              value={ship_from_state}
              onChange={(e) => setShip_From_State(e.target.value)}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="AF">Armed Forces Africa</option>
              <option value="AA">Armed Forces Americas</option>
              <option value="AC">Armed Forces Canada</option>
              <option value="AE">Armed Forces Europe</option>
              <option value="AM">Armed Forces Middle East</option>
              <option value="AP">Armed Forces Pacific</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FM">Federated States Of Micronesia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <label htmlFor="floatingSelect">State</label>
         */}
          </div>
          <div className="form-floating col col-xs-4 col-md-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="zipcode"
              autoComplete="on"
              value={ship_from_zipcode}
              onChange={(e) => setShip_From_Zipcode(e.target.value)}
            />
            <label htmlFor="floatingInput">Zipcode</label>
          </div>
          <div className="form-floating col-xs-12 col-md-6">
            <input
              type="tel"
              className="form-control"
              id="floatingInput"
              autoComplete="on"
              placeholder="Phone(optional)"
            />
            <label htmlFor="floatingInput">Phone</label>
          </div>
        </div>
        <div className="form-floating col-xs-12 col-md-6">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={ship_from_country}
            onChange={(e) => setShip_From_Country(e.target.value)}
          >
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Bouvet Island</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, The Democratic Republic of the</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Cote d'Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Curacao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="SZ">Eswatini</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option vform-floatingalue="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard Island and McDonald Islands</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Lao People's Democratic Republic</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia, Federated States of</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="KP">North Korea</option>
            <option value="MK">North Macedonia</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestine</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="RW">Rwanda</option>
            <option value="BL">Saint Barthelemy</option>
            <option value="SH">
              Saint Helena, Ascension and Tristan da Cunha
            </option>
            <option value="KN">Saint Kitts and Nevis</option>
            <option value="LC">Saint Lucia</option>
            <option value="MF">Saint Martin (French part)</option>
            <option value="PM">Saint Pierre and Miquelon</option>
            <option value="VC">Saint Vincent and The Grenadines</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten (Dutch part)</option>
            <option value="SK">Slovak Republic</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
            <option value="KR">South Korea</option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syrian Arab Republic</option>
            <option value="TW">Taiwan</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania, United Republic of</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor-Leste</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks and Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option defaultValue value="US">
              United States
            </option>
            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="VG">Virgin Islands, British</option>
            <option value="VI">Virgin Islands, U.S.</option>
            <option value="WF">Wallis and Futuna</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>
          <label htmlFor="floatingSelect">Country</label>
        </div>

        <div className="row " style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
                value={isChecked1}
                checked={isChecked1}
                onChange={getCheckboxValue1}
              />
              &nbsp;
              <small>
                Use this address as the Return Address on my shipping labels
              </small>
            </label>
          </div>
        </div>

        {isChecked1 === false && (
          <>
            <h2 style={{ marginTop: "15px" }}>Return Address</h2>
            <div className="row gx-2">
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Company(optional)"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput">Company(optional)</label>
              </div>
            </div>

            <div className="row gx-2">
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Address"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput">Address</label>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  autoComplete="on"
                  placeholder="Apt / Unit / Suite / etc. (optional)"
                />
                <label htmlFor="floatingInput">
                  Apt / Unit / Suite / etc. (optional)
                </label>
              </div>
            </div>

            <div className="row g-2">
              <div className="form-floating col col-xs-4 col-md-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="city"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput">City</label>
              </div>
              <div className="form-floating col col-xs-4 col-md-2">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AS">American Samoa</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="AF">Armed Forces Africa</option>
                  <option value="AA">Armed Forces Americas</option>
                  <option value="AC">Armed Forces Canada</option>
                  <option value="AE">Armed Forces Europe</option>
                  <option value="AM">Armed Forces Middle East</option>
                  <option value="AP">Armed Forces Pacific</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FM">Federated States Of Micronesia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="GU">Guam</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PW">Palau</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VI">Virgin Islands</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <label htmlFor="floatingSelect">State</label>
              </div>
              <div className="form-floating col col-xs-4 col-md-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="zipcode"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput" style={{ fontColor: "gray" }}>
                  Zipcode
                </label>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="container">
        <div className="row gx-2" style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
                value={isChecked2}
                checked={isChecked2}
                onChange={getCheckboxValue2}
              />
              &nbsp;
              <big>Save Ship From Address</big>&nbsp;
              <small>Save this address to use again later</small>
            </label>
          </div>
        </div>
        {isChecked2 === true && (
          <div className="row gx-2">
            <div className="form-floating mb-3 col col-md-6">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                autoComplete="on"
                placeholder="Nickname this Ship From Address"
              />
              <label htmlFor="floatingInput">
                Nickname this Ship From Address
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Packaging details */}
      <div className="container">
        <h2 style={{ margin: "20px 0px" }}>Type of Packaging</h2>
        <div className="row">
          <div className="col-md-12">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              style={{ height: "150px" }}
              value={type_of_package}
              onChange={(e) => setType_Of_Package(e.target.value)}
            >
              <option
                data-description="Any custom box or thick parcel"
                value=" Box or Rigid Packaging"
              >
                Box or Rigid Packaging
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/SoftEnvelope.png"
                data-description="Measure & use the Length and Width of the Envelope before putting anything in it"
                value="Envelope, Padded Envelope, Poly Bag, Soft Pack, or Box in a Bag"
              >
                Envelope, Padded Envelope, Poly Bag, Soft Pack, or Box in a Bag
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/SmallFlatRateBox.png"
                data-description="Small Flat Rate Mailing Box only"
                value="USPS Priority Mail Small Flat Rate Box"
              >
                USPS Priority Mail Small Flat Rate Box
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/MediumFlatRateBox.png"
                data-description="Any Medium Flat Rate Box, including 1 (Top-Loading) and 2 (Side-Loading)"
                value="USPS Priority Mail Medium Flat Rate Box"
              >
                USPS Priority Mail Medium Flat Rate Box
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/LargeFlatRateBox.png"
                data-description="Any Large Flat Rate Box, including APO/FPO or Board Game Flat Rate Boxes"
                value=" USPS Priority Mail Large Flat Rate Box"
              >
                USPS Priority Mail Large Flat Rate Box
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/FlatRateEnvelope.png"
                data-description="Non-padded Flat Rate Envelope including Small and Window"
                value="USPS Priority Mail Flat Rate Envelope"
              >
                USPS Priority Mail Flat Rate Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/FlatRateLegalEnvelope.png"
                data-description="Priority Mail Legal Flat Rate Envelope"
                value=" USPS Priority Mail Legal Flat Rate Envelope"
              >
                USPS Priority Mail Legal Flat Rate Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/FlatRatePaddedEnvelope.png"
                data-description="Flat Rate-branded Padded Envelope only"
                value="USPS Priority Mail Padded Flat Rate Envelope"
              >
                USPS Priority Mail Padded Flat Rate Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/RegionalRateBoxA.png"
                data-description="Any Regional Box A, including A1 (Top-Loading) and A2 (Side-Loading)"
                value="USPS Regional Rate Box A"
              >
                USPS Regional Rate Box A
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/RegionalRateBoxB.png"
                data-description="Any Regional Box B, including B1 (Top-Loading) and B2 (Side-Loading)"
                value="USPS Regional Rate Box B"
              >
                USPS Regional Rate Box B
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/ExpressFlatRateEnvelope.png"
                data-description="Express-branded non-padded only"
                value=" USPS Priority Mail Express Flat Rate Envelope"
              >
                USPS Priority Mail Express Flat Rate Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/ExpressFlatRateLegalEnvelope.png"
                data-description="Express-branded only"
                value="USPS Priority Mail Express Legal Flat Rate Envelope"
              >
                USPS Priority Mail Express Legal Flat Rate Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/ExpressFlatRatePaddedEnvelope.png"
                data-description="Express-branded only"
                value="USPS Priority Mail Express Padded Flat Rate Envelope"
              >
                USPS Priority Mail Express Padded Flat Rate Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/01.png"
                data-description="UPS-branded Envelope for letter-sized documents"
                value="UPS Express Envelope"
              >
                UPS Express Envelope
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/2a.png"
                data-description="UPS-branded box for small-sized shipments"
                value="UPS Small Express Box"
              >
                UPS Small Express Box
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/2b.png"
                data-description="UPS-branded box for medium-sized shipments"
                value="UPS Medium Express Box"
              >
                UPS Medium Express Box
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/2c.png"
                data-description="UPS-branded box for large-sized shipments"
                value="UPS Large Express Box"
              >
                UPS Large Express Box
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/03.png"
                data-description="UPS-branded triangular box for rolled documents (blueprints, posters, etc.)"
                value="UPS Express Tube"
              >
                UPS Express Tube
              </option>
              <option
                data-imagesrc="/assets/skin/default/images/icons/packagetype-icons/04.png"
                data-description="UPS-branded poly envelope"
                value="UPS Express Pak"
              >
                UPS Express Pak
              </option>
            </select>
          </div>
        </div>

        <h2 style={{ margin: "20px 0px" }}>Package dimensions</h2>
        <div className="row g-2">
          <div className="form-floating col col-xs-4 col-md-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autoComplete="on"
              placeholder="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="floatingInput">Length</label>
          </div>
          <div className="form-floating col col-xs-4 col-md-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autoComplete="on"
              placeholder="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <label htmlFor="floatingInput">Width</label>
          </div>
          <div className="form-floating col col-xs-4 col-md-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autoComplete="on"
              placeholder="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <label htmlFor="floatingInput">Height</label>
          </div>
        </div>

        <h2 style={{ margin: "20px 0px" }}>Package Weight</h2>
        <div className="row g-2">
          <div className="form-floating col col-xs-4 col-md-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autoComplete="on"
              placeholder="pound"
              value={pound}
              onChange={(e) => {
                setPound(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Pound</label>
          </div>
          <div className="form-floating col col-xs-4 col-md-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autoComplete="on"
              placeholder="ounces"
              value={ounce}
              onChange={(e) => setOunce(e.target.value)}
            />
            <label htmlFor="floatingInput">mass_unit</label>
          </div>
        </div>

        <div className="row gx-2" style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
                value={isChecked3}
                checked={isChecked3}
                onChange={getCheckboxValue3}
              />
              &nbsp;
              <big>Extra services</big>&nbsp;
              <small>No extra service activated</small>
            </label>
          </div>
        </div>
        {isChecked3 === true && (
          <div className="container">
            <div className="row gx-2" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <label className="checkbox-label checkbox">
                  <input
                    className="js-rubberstamp_flag"
                    type="checkbox"
                    name="entity[rubberstamp_flag]"
                  // value={isChecked}
                  // checked={isChecked}
                  // onChange={getCheckboxValue}
                  />
                  &nbsp;
                  <small>Signature Confirmation</small>
                </label>
              </div>
            </div>
            <div className="row gx-2" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <label className="checkbox-label checkbox">
                  <input
                    className="js-rubberstamp_flag"
                    type="checkbox"
                    name="entity[rubberstamp_flag]"
                    // value={isChecked}
                    // checked={isChecked}
                    // onChange={getCheckboxValue}
                    disabled
                  />
                  &nbsp;
                  <small>Return Labels</small>
                </label>
              </div>
            </div>
            <div className="row gx-2" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <label className="checkbox-label checkbox">
                  <input
                    className="js-rubberstamp_flag"
                    type="checkbox"
                    name="entity[rubberstamp_flag]"
                  // value={isChecked}
                  // checked={isChecked}
                  // onChange={getCheckboxValue}
                  />
                  &nbsp;Insurance&nbsp;
                  <small>
                    Provided by Shipsurance&nbsp;
                    <a
                      href="https://support.pirateship.com/en/articles/3222601-shipping-insurance-terms-and-conditions"
                      className="link"
                    >
                      View Pricing, Excluded Items, and Terms
                    </a>
                  </small>
                </label>
              </div>
            </div>
            <div className="row gx-2" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <label className="checkbox-label checkbox">
                  <input
                    className="js-rubberstamp_flag"
                    type="checkbox"
                    name="entity[rubberstamp_flag]"
                  // value={isChecked}
                  // checked={isChecked}
                  // onChange={getCheckboxValue}
                  />
                  &nbsp; Qualifies for Media Mail&nbsp;
                  <small>
                    Educational material only: books, music, or films (other
                    products or any advertising prohibited)
                  </small>
                </label>
              </div>
            </div>
            <div className="row gx-2" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <label className="checkbox-label checkbox">
                  <input
                    className="js-rubberstamp_flag"
                    type="checkbox"
                    name="entity[rubberstamp_flag]"
                  // value={isChecked}
                  // checked={isChecked}
                  // onChange={getCheckboxValue}
                  />
                  &nbsp; Irregular Package{" "}
                  <small>
                    For unusual package types like tubes, wooden crates, tires,
                    etc.&nbsp;
                    <a
                      href="https://support.pirateship.com/en/articles/5170014-what-is-an-irregular-package"
                      className="intercom-link"
                    >
                      Learn More
                    </a>
                  </small>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="row gx-2" style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
              // value={isChecked}
              // checked={isChecked}
              // onChange={getCheckboxValue}
              />
              &nbsp; Hazardous Materials&nbsp;
              <small>
                Perfume, nail polish, hair spray, dry ice, lithium batteries,
                firearms, lighters, fuels, etc.&nbsp;
                <a
                  href="https://support.pirateship.com/usps-shipping-services/shipping-hazardous-materials-with-usps"
                  className="intercom-link"
                >
                  Learn how to ship Hazardous Materials
                </a>
              </small>
            </label>
          </div>
        </div>

        <div className="row gx-2" style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
              // value={isChecked}
              // checked={isChecked}
              // onChange={getCheckboxValue}
              />
              &nbsp; Customs Form &nbsp;
              <small>
                Required for International, Military APO/FPO, and U.S.
                Territories
              </small>
            </label>
          </div>
        </div>

        <div className="row gx-2" style={{ marginTop: "20px" }}>
          <div className="col-md-12">
            <label className="checkbox-label checkbox">
              <input
                className="js-rubberstamp_flag"
                type="checkbox"
                name="entity[rubberstamp_flag]"
              // value={isChecked}
              // checked={isChecked}
              // onChange={getCheckboxValue}
              />
              &nbsp; Save Package &nbsp;
              <small>Save your settings for repeated use </small>
            </label>
          </div>
        </div>
        <br />
        {ismodal === true && (
          <>
            <Modal
              className="fullscreen"
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Shipping rates</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CardGroup>
                  {
                    filteredData.length > 0 &&

                    
                    <Card>

                      <Card.Body>
                        <Card.Title>
                            {filteredData.map((amount) => {
                              console.log(amount.amount)
                            
                            })
                            
                            }


                        </Card.Title>
                            <Card.Text>Amount:{ }</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Button variant="primary">Primary</Button>{" "}
                      </Card.Footer>
                    </Card>
                  }
                </CardGroup>
              </Modal.Body>
            </Modal>
          </>
        )}

        <button
          type="submit"
          onClick={getrates}
          className="btn btn-primary btn-success btn-lg"
        >
          Get Rates
        </button>
      </div>
    </>
  );
}
