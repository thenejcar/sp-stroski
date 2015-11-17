$("#login_form").submit(function()
{
    proceed = true;
    if(!$("#login_username").val())
    {
        proceed = false;
    }
    if(!$("#login_password").val())
    {
        proceed = false;
    }

    if(proceed)
    {
        
    }
});