//general inputs of sign upppp
var theName = document.getElementById("theName")
var emailSign = document.getElementById("emailSign")
var passwordSign = document.getElementById("passwordSign")
var signUpBtn = document.getElementById("signUpBtn")
var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


var arrInfo = []
if(localStorage.getItem("userInfo")){

    arrInfo = JSON.parse(localStorage.getItem("userInfo"))

}







// START MAKING SIGNUP FUNCTION
function signUP() {

    if(theName.value == '' ||  emailSign.value  == '' || passwordSign.value == ''){

        document.getElementById("smallSignup").classList.replace('d-none','d-block')
        document.getElementById("smallSignup").innerHTML = "All inputs is required "


    }else
    {

        

            if (emailPattern.test(emailSign.value)) {

                var objectOFInfo = {
                    theName:theName.value,
                    emailSign:emailSign.value,
                    passwordSign:passwordSign.value
    
                }
                arrInfo.push(objectOFInfo)
                localStorage.setItem("userInfo",JSON.stringify(arrInfo))
    
    
                document.getElementById("smallSignup").innerHTML = "Succed"
                document.getElementById("smallSignup").classList.replace('d-none','d-block')
                document.getElementById("smallSignup").classList.replace("text-danger" ,"succed")
    
                
    
    
                
            }else{
                swal({
                    title: "ERROR FORMAT!",
                    text: "Please Enter Valid Email Format !",
                    icon: "error",
                    button: "OK!",
                  });
            }



        }



       
       
       
    }
    

    



signUpBtn.addEventListener('click',signUP)


function clearData(){
    theName.value = ''
    emailSign.value = ''
    passwordSign.value = ''
}

signUpBtn.addEventListener('click',clearData)


// check duplication




function checkDuplication(){

    

    var emailsss = []
emailsss = JSON.parse(localStorage.getItem("userInfo"))

for(var i = 0;i<emailsss.length;i++){

       if(emailsss[i].emailSign.includes( emailSign.value)){
        document.getElementById("smallSignup").classList.replace("succed" ,"text-danger")
        document.getElementById("smallSignup").classList.replace("s-none","d-block")
        document.getElementById("smallSignup").innerHTML = 'email already exists'

       


       }

}

        
    }


   

    


    
    

        
        

    


       



    
    signUpBtn.addEventListener("click",function(){
        checkDuplication()
    })






