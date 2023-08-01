// start login page
var email_login = document.getElementById("email_login")
var passwordLogin = document.getElementById("passwordLogin")
var smallLogin = document.getElementById("smallLogin")
var loginBtn = document.getElementById("loginBtn")

// console.log( JSON.parse(localStorage.getItem("userInfo"))[0].emailSign);


function login(){
    if(email_login.value == '' || passwordLogin.value == '' ){
        smallLogin.classList.replace("d-none","d-block")
    }else{

       
        var arr = []

        arr.push(  JSON.parse(localStorage.getItem("userInfo"))  )

        for(var i =0;i < arr.length;i++){

            if(email_login.value == arr[i][i].emailSign && passwordLogin.value == arr[i][i].passwordSign ){
                window.location.href = "home.html"


            }else{
                smallLogin.classList.replace("d-none","d-block")
               smallLogin.innerHTML = "incorrect email or password"
            }
                  

            }
        

        


       

            // if(email_login.value == (localStorage.getItem("userInfo")).emailSign.){

            //                 window.location.href="home.html"
                        

            //         }
        }
        
           
        }
        

    //    if()) {
    //     console.log("equalll");
    //    } 



    


loginBtn.addEventListener("click",login)





