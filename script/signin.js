let accountData=JSON.parse(localStorage.getItem("accounts"))||[];

    document.getElementById("loginaction").addEventListener("submit",loginfunction);

    function loginfunction(event){
        event.preventDefault()
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;

        if(username=="")
        {
            alert("Please enter your email");
        }
        else if(password=="")
        {
            alert("Please enter your password");
        }
        else
        {
            let flag=0;
            for(let i=0; i<accountData.length; i++)
            {
               
                if(accountData[i].email==username)
                {    
                    flag=2;
                    if(accountData[i].password==password)
                    {
                        flag=1;
                    }
                }
            }
            if(flag==1)
            {
                alert("Login successful.");
                location.href="/../index.html";
            }
            else if(flag==2)
            {
                alert("Wrong password");
            }
            else
            {
                alert("Email doesn't exists.");
            }
        }
    }