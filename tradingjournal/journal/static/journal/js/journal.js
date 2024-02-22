function verify()
{
    username = document.getElementById("user_name").value;
    userpass = document.getElementById("user_pass").value;
    if(username == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "Username cannot be empty"
        document.getElementById("msg").setAttribute("class","roboto-medium")
        return false;
    }
    if(userpass == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "password cannot be empty"
        return false;
    }
    
    $.post('/api/v1/login/',{'email':username,'password':userpass},function(response){
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = response.message
        fetch_token(username,userpass);
    })
    .done(function()
    {
       
    })
    .fail(function(data,textStatus,xhr){
                 //alert(data.responseJSON.detail);
                 $('.modal').modal('show');
                 document.getElementById("msg").innerHTML = data.responseJSON.detail
                 
    })
    .always(function() {
        //TO-DO after fail/done request.
        console.log("ended");
   });
       
}

function fetch_token(email,password)
{
    $.post('/api/v1/token/',{'email':email,'password':password},function(response){
        localStorage.setItem("access",response.access);
        localStorage.setItem("refresh",response.refresh)
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = response.access
    
    })
    .done(function()
    {
       
    })
    .fail(function(data,textStatus,xhr){
                 //alert(data.responseJSON.detail);
                 $('.modal').modal('show');
                 document.getElementById("msg").innerHTML = data.responseJSON.detail
                 
    })
    .always(function() {
        //TO-DO after fail/done request.
        console.log("ended");
   });
}
function register()
{
    email = document.getElementById("user_name").value;
    userpass = document.getElementById("user_pass").value;
    cpass = document.getElementById("c_user_pass").value;
    vname = document.getElementById("name").value;
    if(email == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "Email cannot be empty"
        document.getElementById("msg").setAttribute("class","roboto-medium")
        return false;
    }
    if(userpass == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "password cannot be empty"
        return false;
    }
    if(vname == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "Name cannot be empty"
        return false;
    }
    if(userpass != cpass)
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "Password not matching"
        return false;
    }
    $.post('/api/v1/register/',{'email':email,'password':userpass,'name':vname},function(response){
        $('.modal').modal('show');
        if(response.email == email)
        {
        document.getElementById("msg").innerHTML = "Registered Successfully"
        }
        else
        {
            document.getElementById("msg").innerHTML = "Email : "+response.email[0]+" Password: "+response.password[0]
        }
        
    })
    .done(function()
    {
       
    })
    .fail(function(data,textStatus,xhr){
                 //alert(data.responseJSON.detail);
                 $('.modal').modal('show');
                 document.getElementById("msg").innerHTML = data.responseJSON.detail
                 
    })
    .always(function() {
        //TO-DO after fail/done request.
        console.log("ended");
   });
       
}


