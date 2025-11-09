// ======= CookLab: Generátor Receptov =======

// ------------------ DÁTA RECEPTOV ------------------
const baseRecipes = [
  {
    id: "spagety-aglio-olio",
    title: "Špagety Aglio e Olio",
    ingredients: ["špagety", "cesnak", "olivový olej", "čili", "soľ"],
    description: "Rýchly taliansky recept z pár surovín, hotový do 15 minút.",
    steps: [
      "Uvar špagety v osolenej vode.",
      "Na panvici zohrej olej, pridaj nasekaný cesnak a čili.",
      "Pridaj uvarené špagety a premiešaj.",
      "Podávaj s petržlenovou vňaťou a syrom.",
    ],
    image: "img/spagety-aglio-olio.jpg",
    type: "večera",
    labels: ["popular", "quick"],
    // Premium-only data
    nutrition: {
      portion: "1 porcia",
      kcal: 530,
      protein_g: 13,
      carbs_g: 67,
      fat_g: 22,
      fiber_g: 3,
      sugar_g: 3,
      sodium_mg: 600
    }
  },
  {
    id: "zeleninovy-salat-feta",
    title: "Zeleninový šalát s fetou",
    ingredients: ["uhorka", "paradajky", "feta", "olivový olej", "soľ"],
    description: "Svieži šalát ideálny na obed alebo ľahkú večeru.",
    steps: [
      "Nakrájaj zeleninu na kúsky.",
      "Pridaj fetu a premiešaj s olejom.",
      "Dochut soľou a korením.",
      "Podávaj vychladené.",
    ],
    image: "img/zeleninovy-salat-feta.jpg",
    type: "večera",
    labels: ["healthy", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 280,
      protein_g: 8,
      carbs_g: 10,
      fat_g: 22,
      fiber_g: 3,
      sugar_g: 7,
      sodium_mg: 700
    }
  },
  {
    id: "avokadovy-toast",
    title: "Toast s avokádom a vajíčkom",
    ingredients: ["avokádo", "toast", "soľ", "vajce", "korenie"],
    description: "Jednoduché a zdravé raňajky s avokádom a volským okom.",
    steps: [
      "Rozpuč avokádo a natri na toast.",
      "Opeč vajce na panvici.",
      "Osoľ, pridaj korenie a polož na toast.",
    ],
    image: "img/avokadovy-toast.jpg",
    type: "raňajky",
    labels: ["healthy", "quick", "snack"],
    nutrition: {
      portion: "1 porcia",
      kcal: 350,
      protein_g: 11,
      carbs_g: 28,
      fat_g: 22,
      fiber_g: 7,
      sugar_g: 3,
      sodium_mg: 480
    }
  },
  {
    id: "kuracie-sote-ryza",
    title: "Kuracie soté s ryžou",
    ingredients: ["kuracie mäso", "ryža", "cibuľa", "olej", "soľ", "korenie"],
    description: "Klasické kuracie soté s ryžou – rýchle a sýte jedlo na obed.",
    steps: [
      "Nakrájaj mäso a cibuľu.",
      "Opeč ich na panvici, osoľ a okoreň.",
      "Uvar ryžu a podávaj spolu.",
    ],
    image: "img/kuracie-sote-ryza.jpg",
    type: "obed",
    labels: ["popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 520,
      protein_g: 36,
      carbs_g: 60,
      fat_g: 12,
      fiber_g: 2,
      sugar_g: 3,
      sodium_mg: 800
    }
  },
  {
    id: "bananove-smoothie",
    title: "Banánové smoothie",
    ingredients: ["banán", "mlieko", "med"],
    description: "Osviežujúce smoothie vhodné na raňajky alebo desiatu.",
    steps: ["Rozmixuj všetky suroviny do hladka.", "Podávaj studené s ľadom."],
    image: "img/bananove-smoothie.jpg",
    type: "snack",
    labels: ["healthy", "quick", "snack"],
    nutrition: {
      portion: "1 pohár",
      kcal: 230,
      protein_g: 6,
      carbs_g: 42,
      fat_g: 4,
      fiber_g: 3,
      sugar_g: 28,
      sodium_mg: 90
    }
  },
  {
    id: "ovosna-kasa-jablko",
    title: "Ovsená kaša s jablkom a škoricou",
    ingredients: ["ovosné vločky", "mlieko", "jablko", "škorica", "med"],
    description: "Teplé raňajky, ktoré zasýtia a sú hotové za pár minút.",
    steps: [
      "V hrnci zohrej mlieko a pridaj vločky.",
      "Var, kým kaša nezhustne.",
      "Pridaj nastrúhané jablko, škoricu a med.",
    ],
    image: "img/ovosna-kasa-jablko.jpg",
    type: "raňajky",
    labels: ["healthy", "popular"],
    nutrition: {
      portion: "1 miska",
      kcal: 360,
      protein_g: 11,
      carbs_g: 56,
      fat_g: 9,
      fiber_g: 7,
      sugar_g: 19,
      sodium_mg: 140
    }
  },
  {
    id: "cicerovy-hummus",
    title: "Cícerový hummus s pita chlebom",
    ingredients: ["cícer", "tahini", "cesnak", "olivový olej", "soľ", "citrón"],
    description: "Ideálny snack alebo ľahká večera plná bielkovín.",
    steps: [
      "Všetky suroviny rozmixuj dohladka.",
      "Podávaj s pita chlebom alebo čerstvou zeleninou.",
    ],
    image: "img/cicerovy-hummus.jpg",
    type: "snack",
    labels: ["healthy", "snack"],
    nutrition: {
      portion: "1 porcia (bez pity)",
      kcal: 300,
      protein_g: 10,
      carbs_g: 24,
      fat_g: 18,
      fiber_g: 7,
      sugar_g: 2,
      sodium_mg: 420
    }
  },
  {
    id: "palacinky-nutella",
    title: "Jednoduché palacinky",
    ingredients: ["múka", "mlieko", "vajce", "soľ", "olej"],
    description: "Klasické palacinky, ktoré si môžeš naplniť podľa chuti.",
    steps: [
      "Zmiešaj všetky suroviny na cesto.",
      "Na panvici postupne opeč palacinky z oboch strán.",
      "Podávaj s džemom, nutellou alebo ovocím.",
    ],
    image: "img/palacinky.jpg",
    type: "raňajky",
    labels: ["popular"],
    nutrition: {
      portion: "2 palacinky",
      kcal: 340,
      protein_g: 11,
      carbs_g: 46,
      fat_g: 12,
      fiber_g: 1,
      sugar_g: 8,
      sodium_mg: 260
    }
  },
  {
    id: "pecene-zemiaky-rozmarin",
    title: "Pečené zemiaky s rozmarínom",
    ingredients: ["zemiaky", "olej", "rozmarín", "soľ", "korenie"],
    description:
      "Chrumkavé pečené zemiaky vhodné ako príloha alebo jednoduchá večera.",
    steps: [
      "Zemiaky nakrájaj na mesiačiky.",
      "Premiešaj s olejom, rozmarínom, soľou a korením.",
      "Peč v rúre dozlatista.",
    ],
    image: "img/pecene-zemiaky.jpg",
    type: "večera",
    labels: ["quick", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 260,
      protein_g: 5,
      carbs_g: 45,
      fat_g: 7,
      fiber_g: 5,
      sugar_g: 2,
      sodium_mg: 330
    }
  },
  {
    id: "tuniakovy-sendvic",
    title: "Tuniakový sendvič",
    ingredients: ["toast", "tuniak z konzervy", "majonéza", "šalát", "uhorka"],
    description: "Rýchly sendvič vhodný na desiatu alebo ľahký obed.",
    steps: [
      "Zmiešaj tuniaka s majonézou.",
      "Natri zmes na toast, pridaj šalát a uhorku.",
      "Sendvič zlož a podávaj.",
    ],
    image: "img/tuniakovy-sendvic.jpg",
    type: "snack",
    labels: ["quick", "snack"],
    nutrition: {
      portion: "1 sendvič",
      kcal: 420,
      protein_g: 22,
      carbs_g: 34,
      fat_g: 22,
      fiber_g: 3,
      sugar_g: 5,
      sodium_mg: 820
    }
  },
  {
    id: "vajecna-omeleta-syr",
    title: "Vaječná omeleta so syrom",
    ingredients: ["vajce", "syr", "soľ", "olej"],
    description: "Rýchle raňajky zo štyroch surovín.",
    steps: [
      "Vajcia rozšľahaj so soľou.",
      "Vylej na panvicu, pridaj nastrúhaný syr.",
      "Opeč z oboch strán a podávaj.",
    ],
    image: "img/omeleta-so-syrom.jpg",
    type: "raňajky",
    labels: ["quick"],
    nutrition: {
      portion: "1 omeleta",
      kcal: 320,
      protein_g: 20,
      carbs_g: 2,
      fat_g: 26,
      fiber_g: 0,
      sugar_g: 1,
      sodium_mg: 530
    }
  },
  {
    id: "losos-s-ryzou",
    title: "Pečený losos s ryžou",
    ingredients: ["losos", "ryža", "citrón", "soľ", "korenie", "olej"],
    description: "Jednoduchý, ale efektný obed alebo večera.",
    steps: [
      "Lososa osoľ, okoreň a pokvapkaj citrónom.",
      "Peč v rúre približne 15–20 minút.",
      "Podávaj s uvarenou ryžou.",
    ],
    image: "img/losos-ryza.jpg",
    type: "obed",
    labels: ["healthy"],
    nutrition: {
      portion: "1 porcia",
      kcal: 560,
      protein_g: 34,
      carbs_g: 56,
      fat_g: 20,
      fiber_g: 1,
      sugar_g: 1,
      sodium_mg: 460
    }
  },
  {
    id: "sosovicova-polievka",
    title: "Šošovicová polievka",
    ingredients: ["šošovica", "cibuľa", "cesnak", "mrkva", "soľ", "olej"],
    description: "Hustá polievka, ktorá zasýti aj ako hlavné jedlo.",
    steps: [
      "Na oleji opeč cibuľu a cesnak.",
      "Pridaj šošovicu, mrkvu a zalej vodou.",
      "Var do zmäknutia a dochuť soľou.",
    ],
    image: "img/sosovicova-polievka.jpg",
    type: "obed",
    labels: ["healthy", "popular"],
    nutrition: {
      portion: "1 miska",
      kcal: 280,
      protein_g: 15,
      carbs_g: 36,
      fat_g: 6,
      fiber_g: 10,
      sugar_g: 5,
      sodium_mg: 620
    }
  },
  {
    id: "cesnakova-pomazanka",
    title: "Cesnaková nátierka",
    ingredients: ["tvaroh", "cesnak", "soľ", "chlieb"],
    description: "Rýchla nátierka na chlieb, ideálna večer alebo na party.",
    steps: [
      "Pretlač cesnak do tvarohu.",
      "Osoľ a dobre premiešaj.",
      "Natri na chlieb a podávaj.",
    ],
    image: "img/cesnakova-pomazanka.jpg",
    type: "snack",
    labels: ["quick", "snack"],
    nutrition: {
      portion: "1 porcia (na 2 krajce)",
      kcal: 230,
      protein_g: 20,
      carbs_g: 10,
      fat_g: 10,
      fiber_g: 0,
      sugar_g: 6,
      sodium_mg: 440
    }
  },
  {
    id: "jogurtovy-pohar",
    title: "Jogurtový pohár s ovocím",
    ingredients: ["biely jogurt", "ovocie", "med", "ovsené vločky"],
    description: "Svieži dezert alebo raňajky bez pečenia.",
    steps: [
      "Do pohára striedavo vrstv jogurt, ovocie a vločky.",
      "Polej medom a podávaj vychladené.",
    ],
    image: "img/jogurtovy-pohar.jpg",
    type: "raňajky",
    labels: ["healthy", "snack"],
    nutrition: {
      portion: "1 pohár",
      kcal: 280,
      protein_g: 12,
      carbs_g: 38,
      fat_g: 8,
      fiber_g: 3,
      sugar_g: 26,
      sodium_mg: 140
    }
  },
  {
    id: "zemiakova-kasa",
    title: "Zemiaková kaša",
    ingredients: ["zemiaky", "maslo", "mlieko", "soľ"],
    description: "Klasická domáca zemiaková kaša – jemná, krémová a ideálna ako príloha k mäsu alebo zelenine.",
    steps: [
      "Zemiaky ošúp a nakrájaj na kúsky.",
      "Uvar ich v osolenej vode do mäkka.",
      "Sceď vodu, pridaj maslo a mlieko.",
      "Roztlač na hladkú kašu a podľa potreby dochuť soľou."
    ],
    image: "img/zemiakova-kasa.jpg",
    type: "obed",
    labels: ["quick", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 230,
      protein_g: 4,
      carbs_g: 32,
      fat_g: 9,
      fiber_g: 3,
      sugar_g: 3,
      sodium_mg: 420
    }
  },
  {
    id: "zeleninove-rizoto",
    title: "Zeleninové rizoto",
    ingredients: ["ryža", "mrkva", "hrášok", "cuketa", "cibuľa", "olej", "soľ", "korenie"],
    description: "Jednoduché a chutné zeleninové rizoto plné farieb a vitamínov. Skvelé ako ľahký obed alebo večera.",
    steps: [
      "Na oleji orestuj nadrobno nakrájanú cibuľu.",
      "Pridaj nakrájanú zeleninu a krátko orestuj.",
      "Vsyp ryžu a premiešaj, aby sa obalila olejom.",
      "Zalej vodou alebo vývarom a var do mäkka.",
      "Na záver dochuť soľou a korením, prípadne posyp syrom."
    ],
    image: "img/zeleninove-rizoto.jpg",
    type: "obed",
    labels: ["healthy", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 410,
      protein_g: 9,
      carbs_g: 68,
      fat_g: 10,
      fiber_g: 6,
      sugar_g: 7,
      sodium_mg: 520
    }
  },
  {
    id: "tuniakova-natierka",
    title: "Tuniaková nátierka",
    ingredients: ["tuniak z konzervy", "maslo", "cibuľa", "soľ", "citrónová šťava", "chlieb"],
    description: "Rýchla a chutná tuniaková nátierka vhodná na raňajky, desiatu alebo večeru.",
    steps: [
      "Tuniaka sceď a vlož do misky.",
      "Pridaj zmäknuté maslo a nadrobno nasekanú cibuľu.",
      "Dochut soľou a pár kvapkami citrónovej šťavy.",
      "Všetko premiešaj a natri na čerstvý chlieb alebo pečivo."
    ],
    image: "img/tuniakova-natierka.jpg",
    type: "snack",
    labels: ["quick", "snack"],
    nutrition: {
      portion: "1 porcia (na 2 krajce)",
      kcal: 300,
      protein_g: 18,
      carbs_g: 8,
      fat_g: 22,
      fiber_g: 0,
      sugar_g: 2,
      sodium_mg: 520
    }
  },
  {
    id: "spagety-carbonara",
    title: "Špagety Carbonara",
    ingredients: ["špagety", "vajce", "parmezán", "slanina", "soľ", "korenie", "olivový olej"],
    description: "Tradičné talianske špagety Carbonara – krémové, bohaté a plné chuti.",
    steps: [
      "Uvar špagety v osolenej vode.",
      "Na panvici opeč na kocky nakrájanú slaninu do chrumkava.",
      "V miske rozšľahaj vajcia s nastrúhaným parmezánom a korením.",
      "Uvarené špagety sceď a pridaj do panvice so slaninou.",
      "Odstav z ohňa, pridaj vaječnú zmes a miešaj, kým sa vytvorí krémová omáčka.",
      "Podávaj s čerstvo nastrúhaným parmezánom."
    ],
    image: "img/spagety-carbonara.jpg",
    type: "večera",
    labels: ["popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 640,
      protein_g: 24,
      carbs_g: 72,
      fat_g: 26,
      fiber_g: 3,
      sugar_g: 3,
      sodium_mg: 870
    }
  },
  {
    id: "quinoa-so-zeleninou",
    title: "Quinoa so zeleninou",
    ingredients: ["quinoa", "cuketa", "paprika", "mrkva", "olivový olej", "soľ", "korenie"],
    description: "Ľahké a výživné jedlo plné rastlinných bielkovín a vlákniny – ideálne na obed alebo večeru.",
    steps: [
      "Quinou prepláchni a uvar podľa návodu v osolenej vode.",
      "Na panvici orestuj nakrájanú zeleninu na olivovom oleji.",
      "Pridaj uvarenú quinou a premiešaj.",
      "Dochut soľou, korením a podávaj teplé."
    ],
    image: "img/quinoa-so-zeleninou.jpg",
    type: "obed",
    labels: ["healthy", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 430,
      protein_g: 13,
      carbs_g: 64,
      fat_g: 12,
      fiber_g: 7,
      sugar_g: 6,
      sodium_mg: 360
    }
  },
  {
    id: "prazenica-s-cibulkou",
    title: "Praženica s cibuľkou",
    ingredients: ["vajcia", "cibuľa", "soľ", "olej", "korenie"],
    description: "Jednoduchá domáca praženica s opečenou cibuľkou – klasické raňajky, ktoré nikdy nesklamú.",
    steps: [
      "Na panvici zohrej olej a opeč nadrobno nakrájanú cibuľu do zlatista.",
      "Pridaj rozšľahané vajcia so soľou a korením.",
      "Miešaj, kým vajcia nie sú hotové podľa chuti.",
      "Podávaj s čerstvým chlebom alebo zeleninou."
    ],
    image: "img/prazenica-cibulka.jpg",
    type: "raňajky",
    labels: ["quick", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 300,
      protein_g: 17,
      carbs_g: 5,
      fat_g: 23,
      fiber_g: 1,
      sugar_g: 3,
      sodium_mg: 420
    }
  },
  {
    id: "paradajkove-cestoviny",
    title: "Paradajkové cestoviny",
    ingredients: ["cestoviny", "paradajkový pretlak", "cesnak", "cibuľa", "olej", "soľ", "bazalka"],
    description: "Jednoduché talianske cestoviny s paradajkovou omáčkou – rýchle, voňavé a chutné.",
    steps: [
      "Uvar cestoviny v osolenej vode.",
      "Na oleji orestuj cibuľu a cesnak.",
      "Pridaj paradajkový pretlak, osoľ, okoreň a pridaj bazalku.",
      "Var niekoľko minút, potom premiešaj s cestovinami.",
      "Podávaj s nastrúhaným syrom."
    ],
    image: "img/paradajkove-cestoviny.jpg",
    type: "obed",
    labels: ["quick", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 520,
      protein_g: 16,
      carbs_g: 86,
      fat_g: 10,
      fiber_g: 6,
      sugar_g: 10,
      sodium_mg: 640
    }
  },
  {
    id: "kremove-cestoviny-so-syrom",
    title: "Krémové cestoviny so syrom",
    ingredients: ["cestoviny", "smotana", "syr", "maslo", "soľ", "korenie"],
    description: "Rýchle a sýte cestoviny s krémovou syrovou omáčkou – ideálne, keď máš chuť na niečo pohodlné a chutné.",
    steps: [
      "Uvar cestoviny v osolenej vode.",
      "Na panvici roztop maslo, pridaj smotanu a nastrúhaný syr.",
      "Var na miernom ohni, kým sa syr nerozpustí.",
      "Dochut soľou a korením a premiešaj s cestovinami.",
      "Podávaj posypané čerstvými bylinkami."
    ],
    image: "img/kremove-cestoviny-so-syrom.jpg",
    type: "večera",
    labels: ["quick", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 680,
      protein_g: 20,
      carbs_g: 78,
      fat_g: 30,
      fiber_g: 3,
      sugar_g: 6,
      sodium_mg: 780
    }
  },
  {
    id: "hummus-so-zeleninou",
    title: "Hummus so zeleninou",
    ingredients: ["cícer", "tahini", "cesnak", "olivový olej", "soľ", "citrónová šťava", "mrkva", "uhorka", "paprika"],
    description: "Zdravý snack alebo ľahká večera – hummus podávaný s čerstvou chrumkavou zeleninou.",
    steps: [
      "Cícer rozmixuj s tahini, cesnakom, olivovým olejom, soľou a citrónovou šťavou do hladka.",
      "Podávaj s nakrájanou zeleninou ako dip.",
      "Olejom pokvapkaj vrch a pridaj trocha papriky na ozdobu."
    ],
    image: "img/hummus-so-zeleninou.jpg",
    type: "snack",
    labels: ["healthy", "popular"],
    nutrition: {
      portion: "1 porcia",
      kcal: 340,
      protein_g: 11,
      carbs_g: 26,
      fat_g: 22,
      fiber_g: 7,
      sugar_g: 5,
      sodium_mg: 430
    }
  },
  {
    id: "chlieb-vo-vajci",
    title: "Chlieb vo vajci",
    ingredients: ["chlieb", "vajce", "soľ", "olej", "mlieko"],
    description: "Jednoduché a rýchle jedlo z pár surovín – ideálne na raňajky alebo večeru.",
    steps: [
      "V miske rozšľahaj vajcia s mliekom a soľou.",
      "Kúsky chleba namoč do zmesi.",
      "Opeč z oboch strán na panvici do zlatista.",
      "Podávaj s kečupom, syrom alebo zeleninou."
    ],
    image: "img/chlieb-vo-vajci.jpg",
    type: "raňajky",
    labels: ["quick", "popular"],
    nutrition: {
      portion: "2 plátky",
      kcal: 380,
      protein_g: 16,
      carbs_g: 36,
      fat_g: 18,
      fiber_g: 2,
      sugar_g: 5,
      sodium_mg: 560
    }
  },
  {
    id: "cestovinovy-salat-s-tuniakom",
    title: "Cestovinový šalát s tuniakom",
    ingredients: ["cestoviny", "tuniak z konzervy", "kukurica", "paradajky", "majonéza", "soľ", "korenie"],
    description: "Chutný a svieži šalát s tuniakom, ideálny na obed alebo večeru.",
    steps: [
      "Uvar cestoviny a nechaj ich vychladnúť.",
      "Pridaj tuniaka, kukuricu a nakrájané paradajky.",
      "Premiešaj s majonézou, osoľ a okoreň.",
      "Podávaj vychladené."
    ],
    image: "img/cestovinovy-salat-tuniak.jpg",
    type: "obed",
    labels: ["popular", "quick"],
    nutrition: {
      portion: "1 porcia",
      kcal: 560,
      protein_g: 22,
      carbs_g: 58,
      fat_g: 26,
      fiber_g: 4,
      sugar_g: 6,
      sodium_mg: 760
    }
  },
  {
    id: "cesnakova-polievka",
    title: "Cesnaková polievka",
    ingredients: ["cesnak", "olej", "soľ", "chlieb", "vajce"],
    description: "Tradičná slovenská cesnaková polievka – jednoduchá, lacná a zdravá.",
    steps: [
      "Na oleji krátko orestuj nasekaný cesnak.",
      "Zalej vodou, osoľ a privedie k varu.",
      "Podľa chuti môžeš pridať rozšľahané vajce.",
      "Podávaj s opečeným chlebom alebo krutónmi."
    ],
    image: "img/cesnakova-polievka.jpg",
    type: "obed",
    labels: ["quick", "healthy"],
    nutrition: {
      portion: "1 miska",
      kcal: 180,
      protein_g: 8,
      carbs_g: 16,
      fat_g: 9,
      fiber_g: 2,
      sugar_g: 2,
      sodium_mg: 620
    }
  },
  {
    id: "kuraci-rezen",
    title: "Kurací rezeň",
    ingredients: ["kuracie prsia", "vajce", "strúhanka", "múka", "soľ", "olej"],
    description: "Klasický vyprážaný kurací rezeň – chrumkavý zvonka, šťavnatý zvnútra.",
    steps: [
      "Kuracie mäso naklep, osoľ a obal postupne v múke, vajci a strúhanke.",
      "Opeč na panvici do zlatista z oboch strán.",
      "Podávaj s prílohou podľa chuti, napríklad so zemiakovou kašou."
    ],
    image: "img/kuraci-rezen.jpg",
    type: "obed",
    labels: ["popular"],
    nutrition: {
      portion: "1 rezeň",
      kcal: 430,
      protein_g: 31,
      carbs_g: 18,
      fat_g: 24,
      fiber_g: 1,
      sugar_g: 1,
      sodium_mg: 680
    }
  },
];

// môžeš si neskôr doplniť ďalšie recepty, zatiaľ používame tieto
let recipes = [...baseRecipes];

// ------------------ HTML ELEMENTY ------------------
const ingredientsGrid = document.getElementById("ingredientsGrid");
const clearSelectionBtn = document.getElementById("clearSelectionBtn");
const resultsList = document.getElementById("searchResultsList");
const resultsSection = document.getElementById("searchResults");
const searchCountText = document.getElementById("searchCountText");
const searchQueryLabel = document.getElementById("searchQueryLabel");
const searchEmptyMessage = document.getElementById("searchEmptyMessage");

const detailSection = document.getElementById("detailSection");
const recipeTitle = document.getElementById("recipeTitle");
const recipeDescription = document.getElementById("recipeDescription");
const recipeImage = document.getElementById("recipeImage");
const recipeTags = document.getElementById("recipeTags");
const recipeSteps = document.getElementById("recipeSteps");
const recipeNutrition = document.getElementById("recipeNutrition");

const favoritesList = document.getElementById("favoritesList");
const favoritesSubtitle = document.getElementById("favoritesSubtitle");

const popularList = document.getElementById("popularList");
const healthyList = document.getElementById("healthyList");
const snackList = document.getElementById("snackList");

const premiumSection = document.getElementById("premiumSection");
const openPremiumBtn = document.getElementById("openPremiumBtn");
const backToFreeBtn = document.getElementById("backToFreeBtn");
const adBanners = document.querySelectorAll(".ad-banner");

// topbar navigácia
const navSearchBtn = document.querySelector('[data-nav="search"]');
const addRecipeNav = document.getElementById("addRecipeNav");
const favoritesNav = document.getElementById("favoritesNav");
const topPremiumBtn = document.getElementById("topPremiumBtn");
const favCountEl = document.getElementById("favCount");

// Premium formuláre / prvky
const customRecipeForm = document.getElementById("customRecipeForm");
const customTitle = document.getElementById("customTitle");
const customIngredients = document.getElementById("customIngredients");
const customDescription = document.getElementById("customDescription");
const customSteps = document.getElementById("customSteps");
const customType = document.getElementById("customType");
const customImage = document.getElementById("customImage");
const customRecipeMessage = document.getElementById("customRecipeMessage");

const shoppingRecipes = document.getElementById("shoppingRecipes");
const generateShoppingListBtn = document.getElementById(
  "generateShoppingListBtn",
);
const shoppingList = document.getElementById("shoppingList");

const generatePlanBtn = document.getElementById("generatePlanBtn");
const mealPlan = document.getElementById("mealPlan");

const filterType = document.getElementById("filterType");
const filterTag = document.getElementById("filterTag");
const filterResults = document.getElementById("filterResults");

// "platba"
const paymentModal = document.getElementById("paymentModal");
const paymentForm = document.getElementById("paymentForm");
const paymentClose = document.getElementById("paymentClose");

// ------------------ STAV A POMOCNÉ PREMENNÉ ------------------
let favorites = [];
let isPremium = false;
let premiumPaid = false; // po "platbe" sa zmení na true
let selectedIngredients = [];

const allIngredients = [
  "špagety", "cesnak", "olivový olej", "čili", "soľ", "uhorka", "paradajky",
  "feta", "avokádo", "toast", "vajce", "korenie", "kuracie mäso", "ryža",
  "cibuľa", "olej", "banán", "mlieko", "med", "ovosné vločky", "jablko",
  "škorica", "cícer", "tahini", "citrón", "múka", "zemiaky", "rozmarín",
  "tuniak z konzervy", "majonéza", "šalát", "syr", "losos", "šošovica",
  "mrkva", "tvaroh", "chlieb", "biely jogurt", "ovocie", "petržlenová vňať",
  "hrášok", "cuketa", "maslo", "citrónová šťava", "parmezán",
  "slanina", "quinoa", "paprika", "cestoviny", "paradajkový pretlak",
  "bazalka", "smotana", "kukurica", "kuracie prsia", "strúhanka"
];

// Základné "univerzálne" suroviny, ktoré sa vo filtri ignorujú
const commonIngredients = ["soľ", "korenie", "olej", "olivový olej", "maslo", "voda"];

// ------------------ POMOCNÉ FUNKCIE ------------------
function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function renderIngredientsGrid() {
  if (!ingredientsGrid) return;
  
  ingredientsGrid.innerHTML = "";
  const selectableIngredients = [...new Set(
    allIngredients.filter(i => !commonIngredients.includes(i))
  )];

  selectableIngredients.sort().forEach(ingredient => {
    const btn = document.createElement("button");
    btn.className = "ingredient-btn";
    btn.textContent = ingredient;
    btn.type = "button";
    
    if (selectedIngredients.includes(ingredient)) {
      btn.classList.add("selected");
    }
    
    btn.addEventListener("click", () => {
      toggleIngredient(ingredient);
    });
    
    ingredientsGrid.appendChild(btn);
  });
}

function toggleIngredient(ingredient) {
  const index = selectedIngredients.indexOf(ingredient);
  
  if (index > -1) {
    selectedIngredients.splice(index, 1);
  } else {
    selectedIngredients.push(ingredient);
  }
  
  renderIngredientsGrid();
  searchRecipesByIngredients();
}

function searchRecipesByIngredients() {
  if (selectedIngredients.length === 0) {
    resultsSection.classList.add("hidden");
    return;
  }

const selectedNorm = selectedIngredients.map((i) => normalizeText(i));

const filtered = recipes.filter((r) => {
  const needs = withoutCommon(r.ingredients).map((i) => normalizeText(i));
  return needs.every((ing) => selectedNorm.includes(ing));
});


  renderResults(filtered, selectedIngredients.join(", "));
}

if (clearSelectionBtn) {
  clearSelectionBtn.addEventListener("click", () => {
    selectedIngredients = [];
    renderIngredientsGrid();
    resultsSection.classList.add("hidden");
  });
}

// ------------------ ZOBRAZENIE VÝSLEDKOV ------------------
function renderResults(list, query) {
  resultsSection.classList.remove("hidden");
  resultsList.innerHTML = "";
  detailSection.classList.add("hidden");

  searchQueryLabel.textContent = query;
  searchCountText.textContent =
    list.length === 1 ? "1 recept" : `${list.length} receptov`;

  if (list.length === 0) {
    searchEmptyMessage.classList.remove("hidden");
    return;
  }
  searchEmptyMessage.classList.add("hidden");

  list.forEach((r) => {
    const card = createRecipeCard(r, true);
    resultsList.appendChild(card);
  });
}

// ------------------ DETAIL RECEPTU ------------------
function showRecipeDetail(recipe) {
  detailSection.classList.remove("hidden");
  recipeTitle.textContent = recipe.title;
  recipeDescription.textContent = recipe.description;
  recipeImage.src = recipe.image || "placeholder.jpg";
  recipeImage.alt = recipe.title;

  recipeTags.innerHTML = (recipe.ingredients || [])
    .map((ing) => `<span class="tag">${ing}</span>`)
    .join("");

  recipeSteps.innerHTML = (recipe.steps || [])
    .map((s) => `<li>${s}</li>`)
    .join("");

  currentRecipe = recipe;            // remember what’s open
  renderNutrition(recipe);           // show/hide nutrition accordingly

  window.scrollTo({ top: detailSection.offsetTop - 80, behavior: "smooth" });
}


// ------------------ OBĽÚBENÉ RECEPTY ------------------
function toggleFavorite(recipe, btn) {
  const isFav = favorites.includes(recipe);

  if (isFav) {
    favorites = favorites.filter((r) => r !== recipe);
    if (btn) btn.classList.remove("is-active");
  } else {
    if (!isPremium && favorites.length >= 5) {
      alert(
        "Vo Free verzii si môžeš uložiť maximálne 5 obľúbených receptov. Pre neobmedzené obľúbené aktivuj CookLab Premium.",
      );
      return;
    }
    favorites.push(recipe);
    if (btn) btn.classList.add("is-active");
  }
  renderFavorites();
}

function renderFavorites() {
  favoritesList.innerHTML = "";
  favorites.forEach((r) => {
    const card = createRecipeCard(r, false);
    favoritesList.appendChild(card);
  });
  if (favCountEl) {
    favCountEl.textContent = favorites.length;
  }
}

// ------------------ KARTIČKY RECEPTOV ------------------
function createRecipeCard(recipe, includeFavoriteBtn) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-main">
      <div class="card-info">
        <h3 class="card-title">${recipe.title}</h3>
        <p class="card-desc">${recipe.description}</p>
      </div>
      <div class="card-meta">
        <span class="pill pill-type">${recipe.type || "recept"}</span>
        ${
          recipe.labels && recipe.labels.includes("healthy")
            ? '<span class="pill pill-healthy">zdravé</span>'
            : ""
        }
        ${
          recipe.labels && recipe.labels.includes("quick")
            ? '<span class="pill pill-quick">rýchle</span>'
            : ""
        }
      </div>
    </div>
    ${
      includeFavoriteBtn
        ? '<button class="favorite-btn" type="button">♡</button>'
        : ""
    }
  `;

  const favoriteBtn = card.querySelector(".favorite-btn");

  card.addEventListener("click", (e) => {
    if (e.target === favoriteBtn) return;
    showRecipeDetail(recipe);
  });

  if (favoriteBtn) {
    if (favorites.includes(recipe)) {
      favoriteBtn.classList.add("is-active");
    }
    favoriteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(recipe, favoriteBtn);
    });
  }

  return card;
}

const sectionExpanded = {
  popular: false,
  healthy: false,
  snack: false,
};

// ------------------ POPULÁRNE / ZDRAVÉ / SNACKY ------------------
function ensureToggleLink(container, sectionKey) {
  // 1) wrapper hneď za kontajnerom
  let footer = container.nextElementSibling;
  const isFooter = footer && footer.matches && footer.matches(".section-more");
  if (!isFooter) {
    footer = document.createElement("div");
    footer.className = "section-more";
    container.after(footer);
  }

  // 2) samotný link vo footeri
  let link = footer.querySelector(`.show-more-link[data-section="${sectionKey}"]`);
  if (!link) {
    link = document.createElement("a");
    link.href = "#";
    link.className = "show-more-link";
    link.setAttribute("data-section", sectionKey);
    link.setAttribute("aria-expanded", "false");
    footer.appendChild(link);
  }
  return link;
}


/**
 * Vyrenderuje sekciu s obmedzeným počtom kariet a tlačidlom Zobraziť viac/menej.
 * @param {'popular'|'healthy'|'snack'} label - filter podľa labelu
 * @param {HTMLElement} container - cieľový kontajner (napr. popularList)
 * @param {number} initialVisible - koľko kariet ukázať v skrytom stave (3–6)
 */

function loadCategory(label, container, initialVisible = 6) {
  const filtered = recipes.filter(r => Array.isArray(r.labels) && r.labels.includes(label));
  container.innerHTML = "";

  const expanded = sectionExpanded[label];
  const limit = expanded ? filtered.length : Math.min(initialVisible, filtered.length);

  filtered.forEach((r, idx) => {
    const card = createRecipeCard(r, true);
    if (idx >= limit) card.classList.add("is-hidden");
    container.appendChild(card);
  });

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-hint";
    empty.textContent = "Zatiaľ tu nič nie je.";
    container.appendChild(empty);
  }

  const toggle = ensureToggleLink(container, label);

  if (filtered.length <= initialVisible) {
    toggle.style.display = "none";
    toggle.setAttribute("aria-hidden", "true");
  } else {
    toggle.style.display = "inline-flex";
    toggle.removeAttribute("aria-hidden");
    toggle.textContent = expanded ? "Zobraziť menej" : "Zobraziť viac";
    toggle.setAttribute("aria-expanded", String(expanded));

    toggle.onclick = (e) => {
      e.preventDefault();
      sectionExpanded[label] = !sectionExpanded[label];
      loadCategory(label, container, initialVisible);
      toggle.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
  }
}

// ------------------ PREMIUM / FREE PREPÍNAČ ------------------
function switchToPremium() {
  isPremium = true;
  document.body.classList.add("is-premium");
  if (premiumSection) premiumSection.classList.remove("hidden");
  favoritesSubtitle.textContent =
    "Si v CookLab Premium – obľúbených receptov môžeš mať neobmedzene a môžeš pridávať aj vlastné recepty.";
  updateAdsVisibility();
  if (currentRecipe) renderNutrition(currentRecipe); // refresh nutrition block
}

function switchToFree() {
  isPremium = false;
  document.body.classList.remove("is-premium");
  if (premiumSection) premiumSection.classList.add("hidden");
  favoritesSubtitle.textContent =
    "Vo Free verzii si môžeš uložiť maximálne 5 obľúbených receptov. V Premium neobmedzene.";
  updateAdsVisibility();
  if (currentRecipe) renderNutrition(currentRecipe); // hide nutrition block
}


function updateAdsVisibility() {
  adBanners.forEach((banner) => {
    banner.style.display = isPremium ? "none" : "block";
  });
}

// otvorenie premium (ak nezaplatené -> platba, inak rovno sekcia)
function openPremium() {
  if (premiumPaid) {
    switchToPremium();
    scrollToSection("premiumSection");
  } else {
    showPaymentModal();
  }
}

// ------------------ PREMIUM: VLASTNÉ RECEPTY ------------------
if (customRecipeForm) {
  customRecipeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isPremium) {
      customRecipeMessage.textContent =
        "Vlastné recepty sú dostupné len v Premium režime.";
      customRecipeMessage.classList.add("error");
      return;
    }

    const title = customTitle.value.trim();
    const ing = customIngredients.value
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    if (!title || ing.length === 0) return;

    const description =
      customDescription.value.trim() || "Vlastný recept z CookLabu.";
    const steps =
      customSteps.value
        .split(";")
        .map((s) => s.trim())
        .filter((s) => s.length > 0) || [];

    const type = customType.value || "obed";
    const img = customImage.value.trim() || "vlastny-recept.jpg";

    const newRecipe = {
      id: `custom-${Date.now()}`,
      title,
      ingredients: ing,
      description,
      steps,
      image: img,
      type,
      labels: ["popular"],
      isCustom: true,
    };

    recipes.push(newRecipe);

    refreshAllViews();

    customRecipeMessage.textContent =
      "Recept bol pridaný. Nájdeš ho aj vo vyhľadávaní.";
    customRecipeMessage.classList.remove("error");
    customRecipeForm.reset();
  });
}

// ------------------ PREMIUM: NÁKUPNÝ ZOZNAM ------------------
function renderShoppingRecipes() {
  if (!shoppingRecipes) return;
  shoppingRecipes.innerHTML = "";
  recipes.forEach((r, index) => {
    const label = document.createElement("label");
    label.className = "shopping-item";
    label.innerHTML = `
      <input type="checkbox" data-index="${index}" />
      <span>${r.title}</span>
    `;
    shoppingRecipes.appendChild(label);
  });
}

if (generateShoppingListBtn) {
  generateShoppingListBtn.addEventListener("click", () => {
    const checked = shoppingRecipes.querySelectorAll(
      "input[type='checkbox']:checked",
    );
    const allIngredients = new Set();

    checked.forEach((input) => {
      const index = Number(input.getAttribute("data-index"));
      const recipe = recipes[index];
      if (recipe && Array.isArray(recipe.ingredients)) {
        recipe.ingredients
          .filter((ing) => !commonIngredients.includes(ing))
          .forEach((ing) => allIngredients.add(ing));
      }

    });

    shoppingList.innerHTML = "";
    if (allIngredients.size === 0) {
      shoppingList.innerHTML = "<li>Najskôr vyber aspoň jeden recept.</li>";
      return;
    }

    allIngredients.forEach((ing) => {
      const li = document.createElement("li");
      li.textContent = ing;
      shoppingList.appendChild(li);
    });
  });
}

// ------------------ PREMIUM: TÝŽDENNÝ PLÁN ------------------
if (generatePlanBtn) {
  generatePlanBtn.addEventListener("click", () => {
    const days = [
      "Pondelok",
      "Utorok",
      "Streda",
      "Štvrtok",
      "Piatok",
      "Sobota",
      "Nedeľa",
    ];

    const getRandomByType = (type) => {
      const filtered = recipes.filter((r) => r.type === type);
      if (filtered.length === 0) return null;
      const idx = Math.floor(Math.random() * filtered.length);
      return filtered[idx];
    };

    let html = `<table class="meal-plan">
      <thead>
        <tr>
          <th>Deň</th>
          <th>Raňajky</th>
          <th>Obed</th>
          <th>Večera</th>
        </tr>
      </thead>
      <tbody>`;

    days.forEach((day) => {
      const breakfast = getRandomByType("raňajky") || getRandomByType("snack");
      const lunch = getRandomByType("obed") || getRandomByType("večera");
      const dinner = getRandomByType("večera") || getRandomByType("obed");

      html += `
        <tr>
          <td>${day}</td>
          <td>${breakfast ? breakfast.title : "-"}</td>
          <td>${lunch ? lunch.title : "-"}</td>
          <td>${dinner ? dinner.title : "-"}</td>
        </tr>
      `;
    });

    html += "</tbody></table>";
    mealPlan.innerHTML = html;
  });
}

// ------------------ PREMIUM: POKROČILÉ FILTER ------------------
function applyAdvancedFilter() {
  if (!filterResults) return;
  const typeValue = filterType.value;
  const tagValue = filterTag.value;

  let filtered = [...recipes];

  if (typeValue) {
    filtered = filtered.filter((r) => r.type === typeValue);
  }

  if (tagValue) {
    const mapTagToLabel = {
      zdravé: "healthy",
      rýchle: "quick",
      populárne: "popular",
    };
    const label = mapTagToLabel[tagValue];
    if (label) {
      filtered = filtered.filter(
        (r) => Array.isArray(r.labels) && r.labels.includes(label),
      );
    }
  }

  filterResults.innerHTML = "";
  filtered.forEach((r) => {
    const card = createRecipeCard(r, true);
    filterResults.appendChild(card);
  });
}

if (filterType && filterTag) {
  filterType.addEventListener("change", applyAdvancedFilter);
  filterTag.addEventListener("change", applyAdvancedFilter);
}

// ------------------ "PLATBA" (DEMO) ------------------
function showPaymentModal() {
  if (paymentModal) {
    paymentModal.classList.remove("hidden");
  }
}

function hidePaymentModal() {
  if (paymentModal) {
    paymentModal.classList.add("hidden");
  }
}

if (paymentClose) {
  paymentClose.addEventListener("click", hidePaymentModal);
}

if (paymentModal) {
  paymentModal.addEventListener("click", (e) => {
    if (e.target === paymentModal) {
      hidePaymentModal();
    }
  });
}

if (paymentForm) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const cardNumber = cardNumberInput.value;
    const expiry = cardExpiryInput.value;
    const cvc = cardCvcInput.value;
    
    // Validate inputs
    if (!validateCardNumber(cardNumber)) {
      alert("Neplatné číslo karty. Skús napríklad: 4532 1488 0343 6467");
      return;
    }
    
    if (!validateExpiry(expiry)) {
      alert("Neplatný dátum expirácie. Karta musí byť platná v budúcnosti.");
      return;
    }
    
    if (cvc.length !== 3) {
      alert("CVC musí mať 3 číslice.");
      return;
    }
    
    // Show processing animation
    const submitBtn = paymentForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Spracováva sa...";
    
    // Simulate payment processing delay
    setTimeout(() => {
      premiumPaid = true;
      hidePaymentModal();
      switchToPremium();
      scrollToSection("premiumSection");
      alert("✓ Platba prebehla úspešne! CookLab Premium je aktivované.");
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      paymentForm.reset();
    }, 1500);
  });
}

// ------------------ NAVIGÁCIA HORE ------------------
if (navSearchBtn) {
  navSearchBtn.addEventListener("click", () =>
    scrollToSection("searchSection"),
  );
}

if (favoritesNav) {
  favoritesNav.addEventListener("click", () =>
    scrollToSection("favoritesSection"),
  );
}

if (addRecipeNav) {
  addRecipeNav.addEventListener("click", () => {
    openPremium(); // pridať recept je súčasť Premium
  });
}

if (topPremiumBtn) {
  topPremiumBtn.addEventListener("click", openPremium);
}

// ------------------ POMOCNÁ FUNKCIA NA REFRESH ------------------
function refreshAllViews() {
  // nastav si, koľko chceš mať defaultne v sekciách (3–6)
  loadCategory("popular", popularList, 6);
  loadCategory("healthy", healthyList, 6);
  loadCategory("snack",   snackList,   3);

  renderFavorites();
  renderShoppingRecipes();
  applyAdvancedFilter();
}

window.addEventListener("DOMContentLoaded", () => {
  renderIngredientsGrid();

  loadCategory("popular", popularList, 6);
  loadCategory("healthy", healthyList, 6);
  loadCategory("snack",   snackList,   3);

  renderShoppingRecipes();
  applyAdvancedFilter();

  switchToFree();

  if (openPremiumBtn) openPremiumBtn.addEventListener("click", openPremium);
  if (backToFreeBtn) {
    backToFreeBtn.addEventListener("click", () => {
      switchToFree();
      scrollToSection("searchSection");
    });
  }
});


// Format card number input
const cardNumberInput = document.getElementById("cardNumber");
if (cardNumberInput) {
  cardNumberInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue.substring(0, 19); // Max 16 digits + 3 spaces
  });
  
  cardNumberInput.addEventListener("keypress", (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  });
}

// Format expiry date input
const cardExpiryInput = document.getElementById("cardExpiry");
if (cardExpiryInput) {
  cardExpiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value.substring(0, 5);
  });
  
  cardExpiryInput.addEventListener("keypress", (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  });
}

// Format CVC input
const cardCvcInput = document.getElementById("cardCvc");
if (cardCvcInput) {
  cardCvcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
  });
  
  cardCvcInput.addEventListener("keypress", (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  });
}

// Validate card number using Luhn algorithm
function validateCardNumber(cardNumber) {
  const digits = cardNumber.replace(/\s/g, '');
  if (digits.length !== 16) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

// Validate expiry date
function validateExpiry(expiry) {
  const parts = expiry.split('/');
  if (parts.length !== 2) return false;
  
  const month = parseInt(parts[0]);
  const year = parseInt('20' + parts[1]);
  
  if (month < 1 || month > 12) return false;
  
  const now = new Date();
  const expiryDate = new Date(year, month - 1);
  
  return expiryDate > now;
}

function withoutCommon(ings) {
  return (ings || []).filter((ing) => !commonIngredients.includes(ing));
}

let currentRecipe = null;

// Create/update/hide nutrition based on isPremium & recipe.nutrition
function renderNutrition(recipe) {
  if (!detailSection) return;

  // vždy nájdi existujúci box; ak nie je, vytvor nový
  let box = document.getElementById("recipeNutrition");
  if (!box) {
    box = document.createElement("div");
    box.id = "recipeNutrition";
    box.className = "nutrition-card hidden";
    detailSection.appendChild(box);
  }

  const canShow = isPremium && recipe && recipe.nutrition;
  if (!canShow) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }

  const n = recipe.nutrition;
  box.innerHTML = `
    <div class="nutrition-header">
      <span class="nutrition-badge">Premium</span>
      <h4>Nutričné hodnoty</h4>
      <span class="kcal-pill">${n.kcal} kcal</span>
    </div>

    <div class="portion">na porciu: ${n.portion || "1 porcia"}</div>

    <ul class="nutrition-grid">
      <li><span class="label">Bielkoviny</span><span class="val">${n.protein_g} g</span></li>
      <li><span class="label">Sacharidy</span><span class="val">${n.carbs_g} g</span></li>
      <li><span class="label">Tuky</span><span class="val">${n.fat_g} g</span></li>
      <li><span class="label">Vláknina</span><span class="val">${n.fiber_g} g</span></li>
      <li><span class="label">Cukor</span><span class="val">${n.sugar_g} g</span></li>
      <li><span class="label">Sodík</span><span class="val">${n.sodium_mg} mg</span></li>
    </ul>
  `;

  box.classList.remove("hidden");
}