function verify()
{
    username = document.getElementById("user_name").value;
    userpass = document.getElementById("user_pass").value;
    if(username == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "Username cannot be empty"
        return;
    }
    if(userpass == "")
    {
        $('.modal').modal('show');
        document.getElementById("msg").innerHTML = "password cannot be empty"
        return;
    }
    
    alert(username,userpass)
}