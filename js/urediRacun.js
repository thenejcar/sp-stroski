function izbranTip(tip)
{
    console.log("izbran tip: "+tip);
    if(tip == navaden)
    {
        //skrij dodajane uporabnikov
    }
    else
    {

    }
}

function izpisiOpis(arg)
{
    console.log("izpisiOpis "+arg);
    if(arg == "tip")
    {
       $("#opis").html(
            "<h3>Tip: </h3><br/> <ul><li>Navaden Račun: Račun z enim uporabnikom</li>" +
            "<li>Skupni Prihodki: Deljen račun, kjer vsak član lahko prispeva ali porablja skupni denar.  </li>" +
            "<li>Skupni Odhodki: Deljen račun, kjer vsi člani prispevajo enak delež denarja, ki se porabi za skupne stroške.</li></ul>");

    }
    else if(arg == "valuta")
    {
        $("#opis").html(
            "<h3>Valuta: </h3><br/> Valuta, ki se bo uporabljala za ta račun."
        );
    }
    else if(arg == "zacetnostanje")
    {
        $("#opis").html(
            "<h3>Začetno stanje: </h3><br/> Stanje na računu ob odprtju."
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
    $("#container_ime").mouseover(function () {
        izpisiOpis()
    });
    $("#container_tip").mouseover(function () {
        izpisiOpis("tip")
    });
    $("#container_valuta").mouseover(function () {
        izpisiOpis("valuta")
    });
    $("#container_zacetnostanje").mouseover(function () {
        izpisiOpis("zacetnostanje")
    });
    //mouseout - pocisti opis
    $("#container_tip").mouseout(function () {
        izpisiOpis()
    });
    $("#container_valuta").mouseout(function () {
        izpisiOpis()
    });
    $("#container_zacetnostanje").mouseout(function () {
        izpisiOpis()
    });

    $("#racun_tip").focus(function () {
        izpisiOpis("tip");
    });
    $("#racun_valuta").focus(function () {
        izpisiOpis("valuta");
    });
    $("#racun_zacetnostanje").focus(function () {
        izpisiOpis("zacetnostanje");
    });
});