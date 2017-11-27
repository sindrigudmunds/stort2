Stórt verkefni 2: Myndbandavefur.

Þetta verkefni var unnið af: Anna Karen Kristinsdóttir (akk14)
                             Sindri Þór Guðmundsson (sthg11)
                             Jonas Bergssteinsson (job33)
                             Hörn Heiðarsd+ottir (hoh45)

Þetta verkefni fól í sér að búa til lítinn myndbandavef.
Vefur er opnaður með því að opna index.html skrána sem er undir möppunni gogn.
Einnig má ganga að síðunni hér: notendur.hi.is/akk14/vefforritun/stortv2

-----------------------------------------------

Uppsetning:

Staðsett undir möppu gogn:
undir videos eru tvö myndbönd, small og bunny, sem hægt er að spila á vefnum.
Gögn eru lesin úr videos.json
Css er skrifað með Sass skráin styles.scss er þýdd yfir í styles.css
Undirmappan scss inniheldur scss skrár styles.scss importar.
player.css útfærir útlit á spilara og er ekki skrifað með Sass.

Script.js sér um að lesa gögn úr videos.json og útfæra myndbandasíðu í flokkum
útfrá þeim gögnum. Script sér um að senda notanda á player.html þar sem mynband
er spilað. Player.html notar querystring til þess að vita hvaða mynband skal
spila. Player býr til nýtt xhttp request til að það spili öruglega rétt
myndband. 
