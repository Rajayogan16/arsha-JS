const form = document.getElementById("form");
var fField = document.getElementById("name");
var ferror = document.getElementById("n-error");
var emailFeild = document.getElementById("mail");
var emailerror = document.getElementById("e-error");
var selectFeild = document.getElementById("floatingSelect");
var selecterror = document.getElementById("s-error");
var disFeild = document.getElementById("textarea");
var diserror = document.getElementById("t-error");
var subField = document.getElementById("textarea1");
var suberror = document.getElementById("sub-error");
const sub = document.getElementById("subscribe");

function validatename()
{
    if(fField.value === "")
    {
       ferror.innerHTML = "please enter the First name";
       fField.style.border = "2px solid red";
       return false;
    }

    else if(fField.value.length < 4 ){
       ferror.innerHTML = "name should contain min 4 characters";
       fField.style.border = "2px solid red";
       return false;
    }

    else{
       ferror.innerHTML = "";
       fField.style.border = "2px solid green";
       return true;
    }
}

function validatemail()
{
    if(emailFeild.value === ""){
       emailerror.innerHTML = "please enter the E-mail ID";
       emailFeild.style.border = "2px solid red";
       return false;
    }

    else if(!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailerror.innerHTML = "please enter a  valid E-mail ID";
       emailFeild.style.border = "2px solid red";
       return false;
    }

    else{
       emailerror.innerHTML = "";
       emailFeild.style.border = "2px solid green"; 
       return true;
    }
}

function validateplan()
{
   if(selectFeild.value === "-1"){
       selecterror.innerHTML = "select your Plan";
       selectFeild.style.border = "2px solid red";
       return false
   }

   else{
       selecterror.innerHTML = " ";
       selectFeild.style.border = "2px solid green";
       return true;
   }
}

function validatetext()
{
       if(disFeild.value === ""){
           diserror.innerHTML = "Message cannot be blank";
           disFeild.style.border = "2px solid red";
           return false; 
       }

       else if(!disFeild.value.match(/^[a-z A-Z]*$/)){
           diserror.innerHTML = "Message Should only contain alphabet"; 
           disFeild.style.border = "2px solid red";
           return false;
       }

       else{
           diserror.innerHTML = ""; 
           disFeild.style.border = "2px solid green";
           return true;
       }
}
form.addEventListener('submit',e=>{
  e.preventDefault();
  checkinput();
});

function checkinput() {
  const firstname = fField.value.trim();
  const emailvalue = emailFeild.value.trim();
  const selectvalue = selectFeild.value.trim();
  const disvalue = disFeild.value.trim();

  alert("Your Quotation Received We will be in Touch with You Shortly")
  
}

function validatesub()
{
       if(subField.value === ""){
           suberror.innerHTML = "Field cannot be blank";
           subField.style.border = "2px solid red";
           return false; 
       }

       else if(!subField.value.match(/^[a-z A-Z]*$/)){
           suberror.innerHTML = "Field Should only contain alphabet"; 
           subField.style.border = "2px solid red";
           return false;
       }

       else{
           suberror.innerHTML = ""; 
           subField.style.border = "2px solid green";
           return true;
       }
}

sub.addEventListener('submit',f=>{
    f.preventDefault();
    checksubscribe();
  });

function checksubscribe()
{
    const subtext = subField.value.trim(); 
    alert("You are Subscribed Successfully");
}