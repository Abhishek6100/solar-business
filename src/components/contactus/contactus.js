import React, { useState } from "react";
import styles from "./contact.module.css";
import { FiMail } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const Contactus = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [email, setEmail] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setNameError] = useState("");
  const [errorNum, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorNum && !error && !emailError) {
      console.log(
        name,
        number,
        enterprise,
        email,
        companyname,
        message,
        "number"
      );
      setName("");
      setNumber("");
      setEmail("");
      setCompanyName("");
      setEnterprise("");
      setMessage("");
      setSubmitSuccess(true);
    }
  };

  const handelName = (e) => {
    setName(e.target.value);
    const characterRegex = /^([A-Za-z]+[ ]?)+$/;
    setNameError("");
    if (!e.target.value.match(characterRegex)) {
      setNameError("Invalid user name");
    }
    if (e.target.value == "") {
      setNameError("");
    }
  };
  const handelNumber = (e) => {
    setNumber(e.target.value);
    const characterRegex = /^[0-9]{10}$/;
    setError("");
    if (!e.target.value.match(characterRegex)) {
      setError("Invalid Number");
    }
    if (e.target.value == "") {
      setError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(?=[A-Z0-9@.%+-]{6,254}$)[A-Z0-9.%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,8}[A-Z]{2,63}$/i;
    setEmailError("");
    if (!e.target.value.match(regex)) {
      setEmailError("Invalid Email-Id");
    }
    if (e.target.value == "") {
      setEmailError("");
    }
  };

  const handelCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const handelMeassage = (e) => {
    setMessage(e.target.value);
  };

  const enterpriseName = [
    {
      id: 1,
      name: "moglix",
    },
    {
      id: 2,
      name: "moglix Business",
    },
  ];
  return (
    <div className={styles.Contactus_container}>
      <div className={styles.Contactus_wrapper}>
        <div className={styles.Contactus_left}>
          <div className={styles.Contactus_heading}>Contact</div>
          <div className={styles.Contactus_content}>
            <p>
              We are ready to lead you into the future of B2B commerce and
              Supply Chain
            </p>
          </div>
          <div>
            <div className={styles.Contactus_mail}>
              <FiMail color="#1F2137" fontSize="20px" /> Write to us at
            </div>
            <a href="mailto:Info@moglixbusiness.com" className={styles.Contactus_info}>Info@moglixbusiness.com</a>
          </div>
          <div className={styles.Contactus_location}>India</div>
          <div>
            <ImLocation2 color="#1F2137" fontSize="16px" />
            <span className={styles.Contactus_address}>
              SmartWorks Carporate Park(Tower B), 1st Floor, Sector 125 Noida
              201303, UttarPradesh
            </span>
          </div>
          <div className={styles.Contactus_location}>Singapore</div>
          <div>
            <ImLocation2 color="#1F2137" fontSize="16px" />
            <span className={styles.Contactus_address}>
              7 Temasek Boulevard w 12-02C Suntec Tower One, Singapore 038987
            </span>
          </div>
        </div>

        <div className={styles.Contactus_right}>
          {submitSuccess ? (
            <div className={styles.Contactus_thanks}>Thank You</div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={styles.Contactus_form_wrapper}
            >
              <div className={styles.Contactus_input_div}>
                <input
                  placeholder="Enter Name*"
                  type="text"
                  className={styles.input_field}
                  value={name}
                  onChange={handelName}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <div className={styles.Contactus_input_div}>
                <input
                  placeholder="Enter Offical Email Id*"
                  type="text"
                  className={styles.input_field}
                  value={email}
                  onChange={handleEmail}
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div className={styles.Contactus_input_div}>
                <input
                  placeholder="Enter Phone No*"
                  type="text"
                  className={styles.input_field}
                  value={number}
                  onChange={handelNumber}
                />
                {errorNum && <p style={{ color: "red" }}>{errorNum}</p>}
              </div>
              <input
                placeholder="Company Name*"
                type="text"
                className={styles.input_field}
                value={companyname}
                onChange={handelCompanyName}
                required
              />

              <Select
                className={styles.input_field}
                value={enterprise}
                onChange={(e) => setEnterprise(e.target.value)}
                required
                sx={{
                  padding: "0px !important",
                  fontSize: "16px ",
                  color: "#000000",
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  value=""
                  disabled
                  sx={{ fontSize: "16px !important" }}
                >
                  <span style={{ fontSize: "16px", color: "#000000" }}>
                    Select Enterprise Solution*
                  </span>
                </MenuItem>
                {enterpriseName?.map((val) => {
                  return (
                    <MenuItem
                      className="normal_text"
                      key={val.id}
                      value={val.name}
                      sx={{ fontSize: "16px !important", color: "#000000" }}
                    >
                      <span
                        style={{
                          textTransform: "capitalize",
                          color: "#000000",
                        }}
                      >
                        {val.name}
                      </span>
                    </MenuItem>
                  );
                })}
              </Select>
              <textarea
                placeholder="Write your message here.."
                type="text"
                className={styles.input_field_message}
                value={message}
                onChange={handelMeassage}
              />
              <button type="submit" className={styles.Contactus_btn}>
                SUBMIT
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
