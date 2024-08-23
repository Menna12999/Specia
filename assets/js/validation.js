// const nameRegex = /^[a-zA-Z]+$/;
// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
// const ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

export class Validaition {
    validationInput(id,value){
        const regex ={
            nameInput : /^[a-zA-Z]+$/,
            emailInput : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            phoneInput : /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            ageInput : /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
            passwordInput : /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
            repasswordInput:/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
        }
      
        console.log(value);
        console.log(regex[id]);
        var elm = document.getElementById(id);
   
        if (regex[id].test(value)==true){
          console.log('match')
          elm.classList.add('is-valid');
          elm.classList.remove('is-invalid');
          elm.nextElementSibling.classList.replace('d-block','d-none');
          return true;
        }
        else{
          console.log('not match')
          elm.classList.add('is-invalid');
          elm.classList.remove('is-valid');
          elm.nextElementSibling.classList.replace('d-none','d-block');
          }
          
        
        return false;
        }
       

      }
      
       
        
   

