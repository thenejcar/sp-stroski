var t = "navaden";

function izpisiOpis(arg)
{
    if(arg == "tip")
    {
       $("#opis").html(
            "<h3>Tip: </h3><br/> <ul><li>Navaden Račun: Račun z enim uporabnikom</li>" +
            "<li>Skupni Prihodki: Račun z večimi uporabniki, v katerega vsak član lahko prispeva ali jemlje denar.</li>" +
            "<li>Skupni Odhodki: Račun z večimi uporabniki, ki spremlja porabo denarja za skupne stroške" +
            " in omogoča enakomerno porazdelitev med vse člane.</li></ul>");

    }
    else if(arg == "zacetnostanje")
    {
        $("#opis").html(
            "<h3>Začetno stanje: </h3><br/> Stanje na računu ob odprtju."
        );
    }
    else if(arg == "uporabniki" && t == "prihodki")
    {
        $("#opis").html(
            "<h3>Uporabniki: </h3><br/> Izbrani uporabniki bodo lahko prispevali denar v račun" +
            " ali ga iz njega jemali."
        );
    }
    else if(arg == "uporabniki" && t == "odhodki")
    {
        $("#opis").html(
            "<h3>Uporabniki: </h3><br/> Izberi uporabnike, ki imajo dostop do računa." +
            " Vsak izbran uporabnik bo prispeval v denar v račun iz katerega se bodo plačevali skupni stroški."
        );
    }
    else if(arg == "valuta")
    {
        $("#opis").html(
            "<h3>Valuta: </h3><br/> Izberi valuto, ki se bo uporabljala pri tem računu." +
            " Valuta je lahko poljuben niz znakov (npr. €, $, £ ali pa kar evro, dolar, ...)"
        );
    }
    else
    {
        $("#opis").html(
          "<h3>Urejanje Računa</h3><br/>Vnesite podatke o računu."
        );
    }
}

$(document).ready(function() {
    //mouseover - opis za vsako polje
    $("#container_ime").mouseover(function ()
    {
        izpisiOpis()
    });
    $("#container_tip").mouseover(function ()
    {
        izpisiOpis("tip")
    });
    $("#container_valuta").mouseover(function ()
    {
        izpisiOpis("valuta")
    });
    $("#container_zacetnostanje").mouseover(function ()
    {
        izpisiOpis("zacetnostanje")
    });
    $("#container_buttons").mouseover(function ()
    {
        izpisiOpis()
    });
    $("#container_users").mouseover(function ()
    {
        izpisiOpis("uporabniki")
    });

    //mouseleave - pocisti opis
    $("#form").mouseleave(function ()
    {
        izpisiOpis()
    });

    $("#racun_tip").focus(function ()
    {
        izpisiOpis("tip");
    });
    $("#racun_valuta").focus(function ()
    {
        izpisiOpis("valuta");
    });
    $("#racun_zacetnostanje").focus(function ()
    {
        izpisiOpis("zacetnostanje");
    });

    $("#racun_tip_navaden").click(function(){izbranTip("navaden")});
    $("#racun_tip_prihodki").click(function(){izbranTip("prihodki")});
    $("#racun_tip_odhodki").click(function(){izbranTip("odhodki")});

    function izbranTip(tip)
    {
        console.log("izbran tip: "+tip);
        t = tip;
        if(tip == "navaden")
        {
            $("#container_users").hide();
        }
        else
        {
            $("#container_users").show();
        }
    }

});