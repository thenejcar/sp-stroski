function izpisiOpis(arg)
{
    if(arg == "ime")
    {
        $("#opis").html(
            "<h3>Ime: </h3><br/>Vnesite ime vnosa. "
        );

    }
    else if(arg == "datum")
    {
        $("#opis").html(
            "<h3>Datum: </h3><br/>Izberite ali vnesite datum vnosa. "
        );
    }
    else if(arg == "kategorija")
    {
        $("#opis").html(
            "<h3>Kategorija: </h3><br/> Vnesite ime kategorije. Ko začnete pisati ime že prej uporabljene kategorije," +
            "vam jo vnosno polje samo predlaga."
        );
    }
    else if(arg == "vrednost")
    {
        $("#opis").html(
            "<h3>Vrednost: </h3><br/> Vnesite številsko vrednost vnosa. Če je vnos odhodek, naj bo število negativno"
        );
    }
    else if(arg == "vrsta")
    {
        $("#opis").html(
            "<h3>Vrsta: </h3><br/> Vnesite vrsto vnosa - Vplačilo, povračilo ali strošek<ul>" +
            "<li>Vplačilo: to opcijo izberete, ko prispevate denar v skupni sklad</li>"+
            "<li>Povračilo: to opcijo izberete, ko vzamete denar iz skupnega sklada</li>"+
            "<li>Strošek: to opcijo izberete, ko plačate nek skupni strošek. " +
            "Pri tej opciji je treba označiti tudi, ali ste strošek kriti iz svojega denarja ali" +
            " ste denar že vzeli iz sklada (v tem primeru vam ni treba nato posebej vnašati še povračila)</li>"
        );
    }
    else
    {
        $("#opis").html(
            "<h3>Urejanje Vnosa</h3><br/>Vnesite podatke."
        );
    }
}

$(document).ready(function() {

    $("#datepicker").datepicker(
        {
            format: "dd MM yyyy",
            autoclose: true
        }).datepicker("update", new Date()).on('changeDate', function ()
    {
        console.log("picked "+ datepicker.getDate())
    })

    //mouseover - opis za vsako polje
    $("#container_ime").mouseover(function ()
    {
        izpisiOpis("ime")
    });
    $("#container_datum").mouseover(function ()
    {
        izpisiOpis("datum")
    });
    $("#container_vrednost").mouseover(function ()
    {
        izpisiOpis("vrednost")
    });
    $("#container_kategorija").mouseover(function ()
    {
        izpisiOpis("kategorija")
    });
    $("#container_buttons").mouseover(function ()
    {
        izpisiOpis()
    });
    $("#container_vrsta").mouseover(function()
    {
        izpisiOpis("vrsta")
    });

    //mouseleave - pocisti opis
    $("#form").mouseleave(function ()
    {
        izpisiOpis()
    });
    $("#vnos_ime").focus(function ()
    {
        izpisiOpis("ime");
    });
    $("#vnos_vrsta").focus(function ()
    {
        izpisiOpis("vrsta");
    });
    $("#vnos_vrednost").focus(function ()
    {
        izpisiOpis("vrednost");
    });
    $("#vnos_kategorija").focus(function ()
    {
        izpisiOpis("kategorija");
    });
    $("datepicker").focus(function ()
    {
        izpisiOpis("datum");
    });
    $("#vnos_submit").focus(function ()
    {
        izpisiOpis();
    });
    $("#vnos_reset").focus(function ()
    {
        izpisiOpis();
    });
    $("#vnos_delete").focus(function ()
    {
        izpisiOpis();
    });
    $("#vnos_cancel").focus(function ()
    {
        izpisiOpis();
    });

    // vnosStroski
    $("#vnos_vrsta_vplacilo").click(function(){
        $("#container_kategorija_strosek").hide();
        $("#container_strosek_vir").hide();
        //TODO: kategorija="Vplačilo"
    });
    $("#vnos_vrsta_povracilo").click(function(){
        $("#container_kategorija_strosek").hide();
        $("#container_strosek_vir").hide();
        //TODO: kategorija="Povračilo"
    });
    $("#vnos_vrsta_strosek").click(function(){
        $("#container_kategorija_strosek").show();
        $("#container_strosek_vir").show();
    });
});

