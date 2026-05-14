const menuData = {

1: { dagar: {
måndag: { mat: ["Lovmat", ""] },
tisdag: { mat: ["Lovmat", ""] },
onsdag: { färg: "#c64e4e", mat: ["Jullov", ""] },
torsdag: { färg: "#c64e4e", mat: ["Jullov", ""] },
fredag: { mat: ["Lovmat", ""] }
}},

2: { dagar: {
måndag: { mat: ["Lovmat", ""] },
tisdag: { färg: "#c64e4e", mat: ["Jullov", ""] },
onsdag: { mat: ["Studiedag", ""] },
torsdag: { mat: ["Potatisbullar eller Blodpudding serveras med svensk tärnad skinka, lingonsylt samt grönsaksbuffé", "Mac and cheese samt grönsaksbuffé"] },
fredag: { mat: ["Kycklingpasta på svensk köttråvara samt grönsaksbuffé", "Kökets paj samt grönsaksbuffé"] }
}},

3: { dagar: {
måndag: { mat: ["Köttbullar på svensk köttråvara serveras med sås, kokt potatis, lingonsylt samt grönsaksbuffé", "Färsbullar serveras med sås, rostad potatis, lingonsylt samt grönsaksbuffé"] },
tisdag: { mat: ["Ost och broccolisoppa serveras med bröd samt grönsaksbuffé Pannkaka m sylt", "Kökets soppa serveras med bröd samt grönsaksbuffé Pannkaka m sylt"] },
onsdag: { mat: ["Korv stroganoff på svensk köttråvara serveras med ris samt grönsaksbuffé", "Stroganoff serveras med bulgur samt grönsaksbuffé"] },
torsdag: { mat: ["Fisktacos serveras med tortillabröd, Mojo Rojo samt grönsaksbuffé", "Sticky korean serveras med rostad potatis samt grönsaksbuffé"] },
fredag: { mat: ["Lasagne samt grönsaksbuffé", "Bakad potatis med kökets topping och röror samt grönsaksbuffé"] }
}},

4: { dagar: {
måndag: { mat: ["Kyckling fajitas på svensk köttråvara serveras med rostad potatis, ärtmole, salsa samt grönsaksbuffé", "Chunky bites fajita serveras med havreris, ärtmole, salsa samt grönsaksbuffé"] },
tisdag: { mat: ["Kökets fiskgratäng serveras med potatismos samt grönsaksbuffé", "Färslimpa på ärta serveras med rostad potatis, sås samt grönsaksbuffé"] },
onsdag: { mat: ["Pasta Carbonara med svenskt bacon samt grönsaksbuffé", "Falafel med rostad potatis, kall sås samt grönsaksbuffé"] },
torsdag: { mat: ["Kycklingfrikadeller på svensk köttråvara i currysås, serveras med ris samt grönsaksbuffé", "Färsbullar i currysås serveras med bulgur samt grönsaksbuffé"] },
fredag: { mat: ["Burgare med bröd serveras med dressing och klyftpotatis samt grönsaksbuffé", "Kökets paj samt grönsaksbuffé"] }
}},

5: { dagar: {
måndag: { mat: ["Fiskpinnar, serveras med remouladsås, kokt potatis och grönsaksbuffé", "Nuggets serveras med en kall sås, rostad potatis samt grönsaksbuffé"] },
tisdag: { mat: ["Ärtsoppa med fläsk på svensk köttråvara serveras med bröd samt grönsaksbuffé Pannkaka m sylt", "Potatis och purjolökssoppa serveras med bröd samt grönsaksbuffé Pannkaka med sylt"] },
onsdag: { mat: ["Tacobuffé", "Indisk gryta serveras med havreris samt grönsaksbuffé"] },
torsdag: { mat: ["Kyckling wok på svensk köttråvara, serveras med nudlar och grönsaksbuffé", "Pytt i panna med rödbetor samt grönsaksbuffé"] },
fredag: { mat: ["Köttfärslimpa på svensk köttråvara serveras med sås, kokt potatis samt grönsaksbuffé", "Kökets biffar serveras med sås, rostad potatis samt grönsaksbuffé"] }
}},

6: { dagar: {
måndag: { mat: ["Wienerkorv på svensk köttråvara serveras med potatismos samt grönsaksbuffé", "Korv med rostad potatis samt grönsaksbuffé"] },
tisdag: { mat: ["Ugnspannkaka serveras med lingonsylt samt grönsaksbuffé", "Pastagratäng samt grönsaksbuffé"] },
onsdag: { mat: ["Ugnstekt torsk serveras med sås, potatis samt grönsaksbuffé", "Chili sin carne serveras med ris samt grönsaksbuffé"] },
torsdag: { mat: ["Pasta Bolognese på svensk köttråvara, samt grönsaksbuffé", "Färssås med pasta samt grönsaksbuffé"] },
fredag: { mat: ["Pulled pork på svensk köttråvara serveras med bröd, klyftpotatis och dressing samt grönsaksbuffé", "Pulled BBQ med bulgur och dressing samt grönsaksbuffé"] }
}},

7: { dagar: {
måndag: { mat: ["Cowboysoppa på svensk köttråvara serveras med bröd samt grönsaksbuffé Pannkaka med sylt", "Kökets soppa serveras med bröd samt grönsaksbuffé Pannkaka med sylt"] },
tisdag: { mat: ["Ugnstekt kyckling på svensk köttråvara serveras med potatisgratäng, sås samt grönsaksbuffé", "Örtmarinerad filé med sås, ugnsrostad potatis samt grönsaksbuffé"] },
onsdag: { mat: ["Kebab serveras med bröd, pommes och vitlöksdressing samt grönsaksbuffé", "Falafel serveras med bröd, pommes och vitlöksdressing samt grönsaksbuffé"] },
torsdag: { mat: ["Falukorv på svensk köttråvara med stuvade makaroner, rostad blomkål samt grönsaksbuffé", "Korv serveras med rostad potatis samt grönsaksbuffé"] },
fredag: { mat: ["Dubbelpanerad torsk serveras med hollandaise, kokt potatis samt grönsaksbuffé", "Dubbelpanerad torsk serveras med hollandaise, kokt potatis samt grönsaksbuffé"] }
}},

8: { dagar: {
måndag: { färg: "#c64e4e", mat: ["Sportlov", ""] },
tisdag: { färg: "#c64e4e", mat: ["Sportlov", ""] },
onsdag: { färg: "#c64e4e", mat: ["Sportlov", ""] },
torsdag: { färg: "#c64e4e", mat: ["Sportlov", ""] },
fredag: { färg: "#c64e4e", mat: ["Sportlov", ""] }
}},

9: { dagar: {
måndag: { mat: ["Gårdsbiffar med sås och potatis samt grönsaksbuffé", "Färsbullar serveras med rostad potatis, sås samt grönsaksbuffé"] },
tisdag: { mat: ["Kycklingpasta på svensk köttråvara samt grönsaksbuffé", "Kebab pyttipanna serveras med kall sås, samt grönsaksbuffé"] },
onsdag: { mat: ["Gulaschsoppa serveras med bröd samt grönsaksbuffé Pannkaka med sylt", "Kökets soppa serveras med bröd samt grönsaksbuffé Pannkaka med sylt"] },
torsdag: { mat: ["Ugnstekt torsk serveras med sås, potatis samt grönsaksbuffé", "Pasta pesto samt grönsaksbuffé"] },
fredag: { mat: ["Raggmunkskaka eller blodpudding serveras med bacon på svensk köttråvara, lingonsylt samt grönsaksbuffé", "Raggmunkskaka serveras med lingonsylt, kökets toppingar samt grönsaksbuffé"] }
}},

10: { dagar: {
måndag: { mat: ["Köttbullar på svensk köttråvara serveras med sås, kokt potatis, lingonsylt samt grönsaksbuffé", "Färsbullar serveras med sås, rostad potatis, lingonsylt samt grönsaksbuffé"] },
tisdag: { mat: ["Fisktacos serveras med tortillabröd, Mojo Rojo samt grönsaksbuffé", "Mac and cheese"] },
onsdag: { mat: ["Korv stroganoff på svensk köttråvara serveras med pasta samt grönsaksbuffé", "Stroganoff serveras med bulgur samt grönsaksbuffé"] },
torsdag: { mat: ["Kycklingcurry på svensk köttråvara, serveras med ris samt grönsaksbuffé.", "Japansk pannkaka, serveras med havreris samt grönsakssbuffé"] },
fredag: { mat: ["Lasagne samt grönsaksbuffé", "Lasagne al spinachi"] }
}},

11: { dagar: {
måndag: { mat: ["Kökets fiskgratäng serveras med potatismos samt grönsaksbuffé", "Moussaka serveras med grönsaksbuffé"] },
tisdag: { mat: ["Husets soppa serveras med bröd, grönsaksbuffé samt pannkaka och sylt", "Soppa serveras med bröd, grönsaksbuffé samt pannkaka och sylt"] },
onsdag: { mat: ["Pasta pomodoro serveras med grönsaksbuffé", "Pytt i panna"] },
torsdag: { mat: ["Wienerkorv på svensk köttråvara serveras med potatismos samt grönsaksbuffé", "Korv med rostad potatis samt grönsaksbuffé"] },
fredag: { mat: ["Kyckling fajitas på svensk köttråvara serveras med ris, ärtmole, salsa samt grönsaksbuffé", "Chunky bites fajita serveras med havreris, ärtmole, salsa samt grönsaksbuffé"] }
}},

12: { dagar: {
måndag: { mat: ["Fiskpinnar, serveras med remouladsås, kokt potatis och grönsaksbuffé", "Couscousschnitzel serveras med rostad potatis, sås samt grönsaksbuffé"] },
tisdag: { mat: ["Thailändsk kycklinggryta på svensk köttråvara serveras med ris samt grönsaksbuffé", "Thailändsk gryta serveras med grönsaksbuffé"] },
onsdag: { mat: ["Tacobuffé", "Stekt trippelris serveras med grönsaksbuffé"] },
torsdag: { mat: ["Pasta Carbonara med svenskt bacon samt grönsaksbuffé", "Pasta carbonara serveras med grönsaksbuffé"] },
fredag: { mat: ["Kålpudding på svensk köttråvara serveras med sås, kokt potatis samt grönsaksbuffé", "Nudelwok serveras med grönsaksbuffé"] }
}},

13: { dagar: {
måndag: { mat: ["Burgare med bröd serveras med dressing, klyftpotatis samt grönsaksbuffé", "Kökets paj samt grönsaksbuffé"] },
tisdag: { mat: ["Pasta Bolognese på svensk köttråvara, samt grönsaksbuffé", "Färssås med pasta och grönsaksbuffé"] },
onsdag: { mat: ["Kycklingsoppa serveras med bröd samt grönsaksbuffé, Pannkaka med sylt", "Soppa serveras med bröd samt grönsaksbuffé Pannkaka med sylt"] },
torsdag: { mat: ["Ugnstekt torsk serveras med sås, potatis och grönsaksbuffé", "Pastagratäng serveras med grönsaksbuffé"] },
fredag: { mat: ["PÅSKLUNCH", "PÅSKLUNCH"] }
}},

14: { dagar: {
måndag: { mat: ["Påsklov", ""] },
tisdag: { mat: ["Påsklov", ""] },
onsdag: { mat: ["Påsklov", ""] },
torsdag: { mat: ["Påsklov", ""] },
fredag: { mat: ["Påsklov", ""] }
}},

15: { dagar: {
måndag: { mat: ["Annandag Påsk", ""] },
tisdag: { mat: ["Chili sin carne serveras med bulgur samt grönsaksbuffé", "Kökets omelett serveras med grönsaksbuffé"] },
onsdag: { mat: ["Kycklinggryta på svensk köttråvara serveras med ris samt grönsaksbuffé", "Kökets biffar serveras med sås och rostad potatis"] },
torsdag: { mat: ["Falukorv på svensk köttråvara med stuvade makaroner, rostad blomkål samt grönsaksbuffé", "Korv serveras med rostad potatis samt grönsaksbuffé"] },
fredag: { mat: ["Dubbelpanerad torsk serveras med hollandaise, kokt potatis samt grönsaksbuffé", "Couscousschnitzel serveras med rostad potatis, sås och grönsaksbuffé"] }
}},

16: { dagar: {
måndag: { mat: ["Potatisbullar eller Blodpudding serveras med svensk tärnad skinka, lingonsylt samt grönsaksbuffé", "Kökets biffar serveras med sås, rostad potatis samt grönsaksbuffé"] },
tisdag: { mat: ["Ugnstekt kyckling på svensk köttråvara serveras med potatisgratäng, sås samt grönsaksbuffé", "Färslåda serveras med grönsaksbuffé"] },
onsdag: { mat: ["Kökets fiskgratäng serveras med potatismos samt grönsaksbuffé", "Indisk gryta serveras med havreris samt grönsaksbuffé"] },
torsdag: { mat: ["Kebab serveras med bröd, pommes och vitlöksdressing samt grönsaksbuffé", "Falafel serveras med bröd, rostad potatis och dressing samt grönsaksbuffé"] },
fredag: { mat: ["Gårdsbiffar med sås och potatis samt grönsaksbuffé", "Pasta pomodoro samt grönsaksbuffé"] }
}},

17: { dagar: {
måndag: { mat: ["Fisktacos serveras med tortillabröd, Mojo Rojo samt grönsaksbuffé", "Sticky korean serveras med rostad potatis samt grönsaksbuffé"] },
tisdag: { mat: ["Thailändsk kycklinggryta på svensk köttråvara serveras med ris samt grönsaksbuffé", "Thailändsk gryta serveras med grönsaksbuffé"] },
onsdag: { mat: ["Köttbullar på svensk köttråvara serveras med sås, kokt potatis, lingonsylt samt grönsaksbuffé", "Färsbullar serveras med sås, rostad potatis, lingonsylt samt grönsaksbuffé"] },
torsdag: { mat: ["Korv stroganoff på svensk köttråvara serveras med pasta samt grönsaksbuffé", "Stroganoff serveras med bulgur samt grönsaksbuffé"] },
fredag: { mat: ["Lasagne servers med grönsaksbuffé", "Lasagne al spinachi"] }
}},

18: { dagar: {
måndag: { mat: ["Burgare med bröd serveras med dressing och klyftpotatis samt grönsaksbuffé", "Kökets paj samt grönsaksbuffé"] },
tisdag: { mat: ["Ugnstekt torsk serveras med sås, potatis och grönsaksbuffé", "Pastagratäng serveras med grönsaksbuffé"] },
onsdag: { mat: ["Pasta Carbonara med svenskt bacon samt grönsaksbuffé", "Carbonara med grönsaksbuffé"] },
torsdag: { mat: ["Ugnstekt kyckling på svensk köttråvara serveras med potatis, sås samt grönsaksbuffé", "Örtmarinerad filé med sås, ugnsrostad potatis samt grönsaksbuffé"] },
fredag: { mat: ["1 MAJ", ""] }
}},

19: { dagar: {
måndag: { mat: ["Fiskpinnar, serveras med remouladsås, kokt potatis och grönsaksbuffé", "Couscousschnitzel serveras med rostad potatis, sås och grönsaksbuffé"] },
tisdag: { mat: ["Kryddig korvgryta på svensk köttråvara med pasta samt grönsaksbuffé", "Korvgryta med bulgur samt grönsaksbuffé"] },
onsdag: { mat: ["Tacobuffé", "Stekt trippelris serveras med grönsaksbuffé"] },
torsdag: { mat: ["Kyckling wok på svensk köttråvara, serveras med nudlar och grönsaksbuffé", "Bakad potatis med kökets topping och röror samt grönsaksbuffé"] },
fredag: { mat: ["Köttfärslimpa på svensk köttråvara serveras med sås, kokt potatis samt grönsaksbuffé", "Färslimpa på ärta serveras med rostad potatis, sås samt grönsaksbuffé"] }
}},

20: { dagar: {
måndag: { mat: ["Pasta Bolognese på svensk köttråvara, samt grönsaksbuffé", "Färssås med pasta samt grönsaksbuffé"] },
tisdag: { mat: ["Fransk kycklinggryta på svensk köttråvara serveras med ris samt grönsaksbuffé", "Kökets paj serveras med grönsaksbuffé"] },
onsdag: { mat: ["INGEN MAT IDAG!", "Pulled BBQ med bulgur och dressing samt grönsaksbuffé"] },
torsdag: { mat: ["KRISTIHIMMELSFÄRD", ""] },
fredag: { mat: ["KLÄMDAG", ""] }
}},

21: { dagar: {
måndag: { mat: ["Pelafel med nyplockad potatis, varm sås samt grönsaksbuffé", "Pasta pesto med olja samt grönsaksbuffé"] },
tisdag: { mat: ["Rysk kycklinggryta på på svensk köttråvara serveras med bönor samt grönsaksbuffé", "Polsk gryta serveras med glutenfri pasta samt grönsaksbuffé"] },
onsdag: { mat: ["Trippelpanerad Fisk serveras med olika Såser, kokt potatis samt grönsaksbuffé", "Vegansk Wok serverad med olika såser och het aivar"] },
torsdag: { mat: ["Tjockare korv på svensk kyckling med stekta makaroner, ugnsrostad blomkål samt grönsaksbuffé", "Korv serveras med rostad potatis samt grönsaksbuffé"] },
fredag: { mat: ["Picknickbowl", "Picknickbowl"] }
}},

22: { dagar: {
måndag: { mat: ["Bakad potatis med kökets topping och röror samt grönsaksbuffé", "Riswok serveras med grönsaksbuffé"] },
tisdag: { mat: ["Raggmunkskaka eller blodpudding serveras med bacon på svensk köttråvara, lingonsylt samt grönsaksbuffé", "American style Mac and cheese serveras med grönsaksbuffé"] },
onsdag: { mat: ["Kall Kycklingpasta på svensk fågel samt grönsaksbuffé", "Kökets pastasalad på svensk köttråvara serveras med grönsaksbuffé"] },
torsdag: { mat: ["Burgare med bröd serveras med dressing, friterade pommes samt grönsaksbuffé", "Kökets vegitariska biffar med samtliga tillbehör"] },
fredag: { mat: ["Gårdsbiffar på svensk fisk med sås och ris samt grönsaksbuffé", "Färslåda serveras med grönsaksbuffé"] }
}},

23: { dagar: {
måndag: { mat: ["Vi återkommer med mer information senare", ""] },
tisdag: { mat: ["Fläskytterfilé på svenska kycklingar serveras med såser, kokt potatis och grönsaksbuffé", "Vegitarisk schnitzel serveras med rostad potatis, såsbuffé samt grönsaksbuffé"] },
onsdag: { mat: ["Vi återkommer med mer information senare", ""] },
torsdag: { mat: ["Kökets val", ""] },
fredag: { mat: ["Skolavslutning", ""] }
}},

24: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

25: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

26: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

27: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

28: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

29: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

30: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

31: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

32: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

33: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

34: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

35: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

36: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

37: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

38: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

39: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

40: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

41: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

42: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

43: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

44: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

45: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

46: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

47: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

48: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

49: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

50: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

51: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}},

52: { dagar: {
måndag: { mat: ["", ""] },
tisdag: { mat: ["", ""] },
onsdag: { mat: ["", ""] },
torsdag: { mat: ["", ""] },
fredag: { mat: ["", ""] }
}}

  const mat = dagar[dag].mat;

if (mat[0].trim() === "" && mat[1].trim() === "") {
    html += `<div style="color:#9e9e9e;">Meny saknas</div>`;
}

};
