function isValidEmail(email) { //This is a separate function responsible for checking the validity of an email address
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
}

function validateform() { //This function is responsible for validating the form inputs.
    var hhname = document.getElementsByName("fullname")[0].value; //Retrieves the value entered in the "Full Name" input field using the name attribute.
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var confirmPassword = document.getElementsByName("confirmPassword")[0].value
    var phoneNumber = document.getElementsByName("phoneNumber")[0].value
    var selectedIndex = document.getElementById('country').selectedIndex;

    if (hhname === "") {
        // alert("Name can't be blank");
        // document.getElementById('namess').style.borderColor='red'
        // document.getElementById("namess").setAttribute(
        //     "style", "font-size: 100px; font-style: italic; color:#ff0000;border-color:red");
        document.getElementById('error').innerHTML='*'

        //Checks if the name is empty. If it is, an alert is shown, and the function returns false, indicating that the form is not valid.
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address."); //Checks if the email is not valid by calling the `isValidEmail` function. If it's not valid, an alert is shown, and the function returns false.
        return false;
    
    }else if(!document.getElementsByName('gender')[0].checked && !document.getElementsByName('gender')[1].checked){
     alert('select gender')
    return false
    }
     else if (password.length < 6 ) {
        alert("Password must be at least 6 characters long."); //Checks if the password is less than 6 characters long. If it is, an alert is shown, and the function returns false.
        return false;
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    } else if ((!/^\d+$/.test(phoneNumber)) && ( phoneNumber.length) > 10) {
        alert("Please enter a valid phone number.");
        return false;
    } 
    else if (selectedIndex === 0) {
        alert("Please provide your country!");
        return false;
    }
    else {
        alert('Successfully submitted'); //If all the validations pass, an alert is shown indicating that the form has been successfully submitted.
    }

}





