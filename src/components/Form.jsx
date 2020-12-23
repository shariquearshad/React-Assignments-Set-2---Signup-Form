import React, { useState } from "react";
import SignUpForm from "./Signupform";
import SuccessForm from "./SuccessForm";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  let username = "";

  function submitForm(item) {
    username = item;
    console.log("inside submitForm: " + username);
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <SignUpForm
          /* emailProfile = {emailProfileHandler} */ submitForm={submitForm}
        />
      ) : (
        <SuccessForm username={username} />
      )}
    </div>
  );
}

export default Form;
