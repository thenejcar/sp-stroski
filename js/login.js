$("#login_form").submit(function(event)
{
    proceed = true;
    if($("#login_username").val().length == 0)
    {
        event.preventDefault();
        proceed = false;
    }
    if($("#login_password").val().length == 0)
    {
        event.preventDefault();
        proceed = false;
    }

    if(proceed)
    {
        console.log("send login info to server");
        window.location = "mainScreen.html";
    }
});