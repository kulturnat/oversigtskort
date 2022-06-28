var open1 = [54.90731, 9.786158];
var open2 = [54.907255, 9.785836];
function line_to(end) {
        L.polyline([    start,end       ],{color:"red",         weight:5})
                                                .addTo(mymap)
                                                .bindTooltip("Afspærring<br>Ingen indkørsel",{direction:"right"});
        start = end;
}
var start =     [54.913416, 9.783196];
line_to(        [54.913416, 9.783196]   );
line_to(        [54.913416, 9.783196]   );
line_to(        [54.91355, 9.78411]     );
line_to(        [54.91356, 9.78424]     );
line_to(        [54.913453, 9.784677]   );
line_to(        [54.912923, 9.785246]   );
line_to(        [54.911674, 9.786136]   );
line_to(        [54.911202, 9.786501]   );
// Chr X. bro
line_to(        [54.911011, 9.7866]     );
line_to(        [54.910485, 9.786689]   );
line_to(        [54.91031, 9.78643]     );
// Kirke bakken
line_to(        [54.91024, 9.78650]     );
line_to(        [54.909377, 9.786265]   );
line_to(        [54.909227, 9.786243]   );
line_to(        [54.908732, 9.786233]   );
line_to(        [54.908455, 9.78605]    );
line_to(        [54.908179, 9.786893]   );
line_to(        [54.907186, 9.786324]   );
line_to(        open1                   );
L.polyline([    open2,
                [54.90533, 9.785331]    ],{color:"red",         weight:5})
                                                .addTo(mymap)
                                                .bindTooltip("Afspærring<br>Ingen indkørsel",{direction:"right"});
L.polyline([    open1,
                open2                   ],{color:"yellow",      weight:5})
                                                .addTo(mymap)
                                                .bindTooltip("Ind- og ud-kørsel til området",{direction:"right"})
                                                .openTooltip();
