import React, { useState } from "react";
import {
  firstNameText,
  lastNameText,
  emailText,
  phoneNumberText,
  emContactText,
  dateOfBirthText,
  medicalConditionsText,
  medicationsText,
  injuriesAllergiesText,
  experiencedText,
  intentionsText,
} from "../constants/RegText";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emContact, setEmContact] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [medications, setMedications] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [injuriesAllergies, setInjuriesAllergies] = useState("");
  const [experienced, setExperienced] = useState("");
  const [intentions, setIntentions] = useState("");

  const classes = {
    input: "input",
    textfield: "textField",
  };

  const makeFormField = (getter, setter, text, style, column) => {
    return {
      getter,
      setter,
      text,
      class: style,
      column: `element ${column}`,
    };
  };

  const formFields = [
    makeFormField(
      firstName,
      setFirstName,
      firstNameText,
      classes.input,
      "left"
    ),
    makeFormField(lastName, setLastName, lastNameText, classes.input, "right"),
    makeFormField(
      phoneNumber,
      setPhoneNumber,
      phoneNumberText,
      classes.input,
      "left"
    ),
    makeFormField(
      dateOfBirth,
      setDateOfBirth,
      dateOfBirthText,
      classes.input,
      "right"
    ),
    makeFormField(email, setEmail, emailText, classes.input, "left"),
    makeFormField(
      emContact,
      setEmContact,
      emContactText,
      classes.input,
      "right"
    ),
    makeFormField(
      medications,
      setMedications,
      medicationsText,
      classes.textfield,
      "whole"
    ),
    makeFormField(
      medicalConditions,
      setMedicalConditions,
      medicalConditionsText,
      classes.textfield,
      "whole"
    ),
    makeFormField(
      injuriesAllergies,
      setInjuriesAllergies,
      injuriesAllergiesText,
      classes.textfield,
      "whole"
    ),
    makeFormField(
      experienced,
      setExperienced,
      experiencedText,
      classes.textfield,
      "whole"
    ),
    makeFormField(
      intentions,
      setIntentions,
      intentionsText,
      classes.textfield,
      "whole"
    ),
  ];

  const form = formFields.map((el) => {
    return (
      <label className={el.column}>
        <div className="inputType">{el.text}</div>
        <input
          type="text"
          className={el.class}
          name={el.getter}
          onChange={(e) => el.setter(e.target.value)}
        />
      </label>
    );
  });

  return (
    <>
      Registration
      <form id="RegistrationForm">
        {form}
        <input
          type="submit"
          value="Submit"
          onSubmit={() => console.log("submitting info")}
        />
      </form>
    </>
  );
}
