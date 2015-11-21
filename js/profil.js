document.getElementById("profil_image_upload").onchange = function()
{
    var filereader = new FileReader();
    filereader.onload = function(e)
    {
        document.getElementById("profilna_slika").src = e.target.result;
    };

    filereader.readAsDataURL(this.files[0]);
}