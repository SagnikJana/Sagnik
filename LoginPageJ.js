$(function() {
  /*$('button').click(function(){
    var emailID = document.Login.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
   if(document.Login.Name.value.length < 3) 
     {
      alert("Please enter a Name of atleast 6 characters");
     }
     else if (atpos < 1 || ( dotpos - atpos < 2 )) 
     {
         alert("Please enter correct email ID")
            document.myForm.email.focus() ;
     }
     else if(document.Login.password1.value.length < 3) 
     {
      alert("Please enter a password of atleast 6 characters");
     }
     else if (document.Login.password1.value != document.Login.password2.value) {
      alert("Confirm your password carefully");
     }
     else
     {
      alert("Form submitted");
     }

  });*/
      
      $.validator.addMethod('strongPassword',function(value,element){
        return this.optional(element)
        || value.length >= 6
        && /\d/.test(value)
        && /[a-z]/i.test(value);
      },"Your password must be atleast 6 characters long and contain atleast one number and one character\'.")

      /* 
      $.validator.addMethod( "nowhitespace", function( value, element ) {
  return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" ); */
  $('#Login').validate({
    rules:{
      Name:{
        required: true,
        nowhitespace: true,
      }, 
      email: {
        required: true,
        email:true
      },
      password1: 
      {required: true,
        strongPassword: true
      },
      password2: {
        required: true,
        equalTo:'#password1'}
    },
    messages: {
      Name: {
        required: 'Please enter some name.'
      },
      email: {
        required: 'Please enter your email-id',
        email : 'Please enter a valid email-id'
      }
    }
  });
   
    });