let accountData=JSON.parse(localStorage.getItem("accounts"))||[]
    let submitBtn=document.getElementById("submit");
    submitBtn.addEventListener("click",registraton)


    function registraton(){
        let firstname=document.getElementById("firstname").value;
        let lastname=document.getElementById("lastname").value;
        let email=document.getElementById("email").value;
        let cemail=document.getElementById("cemail").value;
        let password=document.getElementById("password").value;
        let cpassword=document.getElementById("cpassword").value;

        if(firstname=="" ||lastname=="" || email=="" || cemail=="" || password=="" || cpassword=="" )
        {
            alert("Please fill all fields.")
        }
        else
        {
            if(email!=cemail)
            {
                alert("Confirm email is not matching.")
            }
            else if(password!=cpassword)
            {
                alert("Confirm password is not matching.")
            }
            else
            {
                if(checkemail()==true)
                {
                    alert("Email already exists.");
                }
                else
                {
                    let account={
                    firstname,
                    lastname,
                    email,
                    password
                    }
                    accountData.push(account);
                    localStorage.setItem("accounts",JSON.stringify(accountData));
                    alert(`Hello ${firstname}! You have registered successfully.`);
                    location.href="signin.html";
                }
                
            }
            
        }

        function checkemail(){
        let flag=0
        for(let i=0; i<accountData.length; i++)
        {
            if(accountData[i].email==email)
            {
                flag=1;
            }
            
        }
        if(flag==1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }


    }

    