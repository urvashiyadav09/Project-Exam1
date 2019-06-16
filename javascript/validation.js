
    function checkInput(){
      var inputVal1 = document.getElementById('fname').value;
      var inputVal2 = document.getElementById('lname').value;
      console.log(inputVal1);
      var regExName = '/^[a-zA-Z]+$/';
      boolInput1 = regExName.test(inputVal1);
      boolInput2 = regExName.test(inputVal2);

      var inputVal3 = document.getElementById('email').value;
      var regExEmail = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2-4}$/'
      var inputVal4 = document.getElementById('phone').value;
      // only for Norwegian number
      var regExPhone = '/^\+\(\d{2}\)\d{8}$/';

      boolInput3 = regExEmail.test(inputVal1);
      boolInput4 = regExPhone.test(inputVal2);

      if(boolInput1 === false){
        alert('Please enter a valid first name');
      }
      if(boolInput2 === false){
        alert('Please enter a valid last name');
      }
      if(boolInput3 === false){
        alert('Please enter a valid email');
      }
      if(boolInput4 === false){
        alert('Please enter a valid norwegain number');
      }



    }
