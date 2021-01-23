function validateForm() {
  var x = document.forms["myForm"]["fusername"].value;
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }
}

function validateForm() {
  var x1 = document.forms["myForm"]["fpassword"].value;
  if (x1 == "") {
    alert("Password must be filled out");
    return false;
  }
}