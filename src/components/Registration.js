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
    textfield: "textfield",
  };

  const formFields = [
    {
      getter: firstName,
      setter: setFirstName,
      text: firstNameText,
      class: classes.input,
    },
    {
      getter: lastName,
      setter: setLastName,
      text: lastNameText,
      class: classes.input,
    },
    { getter: email, setter: setEmail, text: emailText, class: classes.input },
    {
      getter: phoneNumber,
      setter: setPhoneNumber,
      text: phoneNumberText,
      class: classes.input,
    },
    {
      getter: emContact,
      setter: setEmContact,
      text: emContactText,
      class: classes.input,
    },
    {
      getter: dateOfBirth,
      setter: setDateOfBirth,
      text: dateOfBirthText,
      class: classes.input,
    },
    {
      getter: medications,
      setter: setMedications,
      text: medicationsText,
      class: classes.textfield,
    },
    {
      getter: medicalConditions,
      setter: setMedicalConditions,
      text: medicalConditionsText,
      class: classes.textfield,
    },
    {
      getter: injuriesAllergies,
      setter: setInjuriesAllergies,
      text: injuriesAllergiesText,
      class: classes.textfield,
    },
    {
      getter: experienced,
      setter: setExperienced,
      text: experiencedText,
      class: classes.textfield,
    },
    {
      getter: intentions,
      setter: setIntentions,
      text: intentionsText,
      class: classes.textfield,
    },
  ];

  return (
    <>
      <form className="RegistrationForm">
        {formFields.map((e) => {
          return (
            <label>
              {e.text}
              <input
                type="text"
                className={e.class}
                name={e.getter}
                onChange={(e) => e.setter(e.target.value)}
              />
            </label>
          );
        })}
        <input
          type="submit"
          value="Submit"
          onSubmit={() => console.log("submitting info")}
        />
      </form>
    </>
  );
}
