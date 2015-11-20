document.getElementById("registracija_image_upload").onchange = function()
{
    var filereader = new FileReader();
    filereader.onload = function(e)
    {
        document.getElementById("registracija_image").src = e.target.result;
    };

    filereader.readAsDataURL(this.files[0]);
}