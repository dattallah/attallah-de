// =============================================
// PLATTER'S SOUTH AFRICAN WINE GUIDE 2025 — Listen (Printausgabe, S. 15–22 + Sonderlisten)
// Abgeschrieben von Fotos der Printausgabe. Reihenfolge wie im Guide.
// list: woty = Wines of the Year 2025 · 5 = Five Stars (95+) · 94 = Highly Recommended (94)
//       bndl = Buy Now, Drink Later · gem = Hidden Gems · quaff = Superquaffers
// =============================================
const platter25 = [];
function PL(list, cat, items) { items.forEach(w => platter25.push({ list, cat, w })); }

// ---------- WINES OF THE YEAR 2025 ----------
PL('woty','Cabernet Franc',['Raats 2022']);
PL('woty','Cabernet Sauvignon',['Simonsig The Garland 2020']);
PL('woty','Cinsault Noir',['Leeu Passant Wellington Old Vines Basson 2022']);
PL('woty','Grenache Noir',['Swartberg Wingerde Garnacha 2023']);
PL('woty','Merlot',['Holden Manz Reserve 2021']);
PL('woty','Pinotage',['Diemersdal The Journal 2022']);
PL('woty','Pinot Noir',['Julian Schaal Mountain Vineyards 2023']);
PL('woty','Shiraz/Syrah',['Saronsberg Shiraz 2022']);
PL('woty','Red Blends, Cape Bordeaux',['Buitenverwachting Christine 2017']);
PL('woty','Red Blends, With Pinotage',['The Vinoneers No. 42 Cape Red Blend 2022']);
PL('woty','Red Blends, Shiraz/Syrah-Based',['Erika Obermeyer Syrah-Grenache Noir-Cinsault 2021']);
PL('woty','Red Blends, Other',['Anysbos Tesame 2022']);
PL('woty','Chardonnay',['Iona Elgin Highlands 2022']);
PL('woty','Chenin Blanc',['Stellenrust Old Bushvine Secrets & Lies 2023']);
PL('woty','Grenache Blanc',['Glen Heatlie The Frontier 2023']);
PL('woty','Grenache Gris',['Momento 2023']);
PL('woty','Sauvignon Blanc',['Diemersdal Wild Horseshoe 2023']);
PL('woty','Semillon',['Boekenhoutskloof 2022']);
PL('woty','Semillon Gris',['Thorne & Daughters Tin Soldier 2023']);
PL('woty','White Blends, Cape Bordeaux',['Constantia Glen Two 2022']);
PL('woty','White Blends, Other',['Momento Chenin Blanc-Verdelho 2023']);
PL('woty','Cap Classique',['Charles Fox Prestige Cuvée Cipher Blanc de Noirs 2018']);
PL('woty','Natural Sweet',['Klein Constantia Vin de Constance 2021']);
PL('woty','Noble Late Harvest',['Miles Mossop Kika 2023']);
PL('woty','Vin de Paille/Straw Wine',['Mullineux Straw Wine 2023']);
PL('woty','Dessert Wine, Fortified',['Nuy Barbieri Idro 2016']);
PL('woty','Port-Style',['Bergsig Cape Late Bottled Vintage 2018']);

// ---------- FIVE STARS (95+) ----------
PL('5','Cabernet Franc',['Botanica Big Flower 2022','David Finlayson Camino Africana 2022','Great Heart Franschhoek 2022','Hermanuspietersfontein Swartskaap 2020','Hogan Mirror For The Sun 2023','Holden Manz Reserve 2021','KWV The Mentors 2021','Leeu Passant CWG Auction Franschhoek Hillside 2022','Oldenburg 2022','Raats 2022','Raats Eden 2022','Raats Vlag 2022','Rainbow\'s End Limited Release 2022','Ridgeback 2021','Warwick 2021','Zorgvliet 2022']);
PL('5','Cabernet Sauvignon',['Anthonij Rupert 2020','Benguela Cove Wild At Heart 2021','Beyerskloof Eerste Ry 2020','Boekenhoutskloof Stellenbosch 2022','David Finlayson GS 2022','Diemersdal The Journal 2022','Erika Obermeyer 2020','Le Riche 2022','Le Riche CWG Auction 2020','Le Riche Jonkershoek 2021','Le Riche Reserve 2021','Muratie Martin Melck 2021','Nico van der Merwe Nico 2020','Rustenberg Peter Barlow 2021','Simonsig The Garland 2020','Stellenrust Reserve 2020','Stony Brook Ghost Gum 2021','Thelema 2021','Thelema The Mint 2022','Tokara Reserve 2021','Waterford Library Collection 2015']);
PL('5','Cinsault Noir',['Eenzaamheid 2023','Leeu Passant Wellington Old Vines Basson 2022','Rickety Bridge Paulina\'s Reserve 2023','Sadie Pofadder 2023']);
PL('5','Grenache Noir',['ArtiSons The Phantom 2022','Savage Thief In The Night 2023','Swartberg Wingerde Garnacha 2023']);
PL('5','Merlot',['Holden Manz Reserve 2021','Shannon The Shannon Black 2020','Villiera Monro 2022']);
PL('5','Pinotage',['Bellevue 1953 2021','Bellevue Reserve Collection 2021','De Grendel Amandelboord 2023','Diemersdal The Journal 2022','Francois van Niekerk 2022','Kaapzicht Steytler 2021','Kanonkop Black Label 2022','KWV The Mentors 2021','Lanzerac Commemorative 2020','Lanzerac Pionier 2021','Survivor Reserve 2022','Wellington La Cave 2021']);
PL('5','Pinot Noir',['Julian Schaal Mountain Vineyards 2023','Kara-Tara Reserve 2022','MVH Signature 2021','Oak Valley Tabula Rasa PN114 2021']);
PL('5','Shiraz/Syrah',['ArtiSons Blueberry Hill Shiraz 2022','Bellingham Basket Press Syrah 2022','Boekenhoutskloof Syrah 2022','Boschkloof Epilogue 2022','Carinus Syrah 2023','Cederberg Shiraz 2021','Diemersdal Reserve Syrah 2023','Fairview The Beacon Shiraz 2021','Mullineux Signature Syrah 2022','Porseleinberg 2022','Rall Ava Syrah 2023','Riebeek Valley Raar Carbonic Shiraz 2023','Rust en Vrede Estate Vineyards Syrah 2022','Saga Sons of Sugarland Syrah 2023','Sakkie Mouton Dawn Of The Salty Tongues 2023','Saronsberg Shiraz 2022','Scions of Sinai Swanesang 2023','Stark-Condé Stellenbosch Syrah 2022','Stellenbosch Vineyards Credo Shiraz 2022','Stellenrust Peppergrinder\'s Shiraz 2021','Trizanne Elim Syrah 2023']);
PL('5','Red Blends, Cape Bordeaux',['Alto MPHS 2018','Babylonstoren Nebukadnesar 2022','Buitenverwachting Christine 2017','Constantia Glen Five 2021','De Grendel Rubáiyát 2020','Harry Hartman Mosi 2021','Hartenberg The Mackenzie 2020','Keet First Verse 2021']);
PL('5','Red Blends, With Pinotage',['KWV Perold 2021','The Vinoneers No. 42 Cape Red Blend 2022']);
PL('5','Red Blends, Shiraz/Syrah-Based',['Boschendal Black Angus 2021','Erika Obermeyer Syrah-Grenache Noir-Cinsault 2021','Neil Ellis Rodanos 2021','Sadie Columella 2022']);
PL('5','Red Blends, Other',['Anysbos Tesame 2022','Boschkloof Conclusion 2021','Ernie Els CWG Auction 2021','Ernie Els Proprietor\'s Blend 2021','Fairview Caldera 2022','Glenelly Red 2018','Idun Carmélite 2022','Van Wyk Rebecca May 2022']);
PL('5','Chardonnay',['Almenkerk 2022','Bartinney Hourglass 2022','Benguela Cove Vinography 2023','Bouchard Finlayson Kaaimansgat Crocodile\'s Lair 2023','Callender Peak 2023','Capensis Fijnbosch 2020','Cap Maritime 2023','Delaire Graff Terraced Block Reserve 2023','Dorrance Cuvée Anaïs 2023','Draaiboek Kinkel 2023','Draaiboek Onskuld 2023','Hamilton Russell 2023','Hogan The Galvanised 2023','Iona Elgin Highlands 2022','Iona Fynbos 2022','Iona Kloof 2022','Kara-Tara 2023','Kershaw Clonal Selection Elgin 2022','Kershaw Kogelberg Sandstone CY76 2022','Kershaw Lower Duivenhoks River 2021','La Bri Barrel Select 2023','Longridge Organic Clos du Ciel 2022','Neil Ellis Whitehall 2022','Oak Valley Groenlandberg 2023','Oak Valley Tabula Rasa CY548 2021','Paul Clüver Estate 2022','Rustenberg Five Soldiers 2022','Terra Loci Fé 2022','Vergelegen Reserve 2023','Whalehaven Seascape 2021']);
PL('5','Chenin Blanc',['Alheit Cartology 2023','Alheit Huilkrans 2023','Alheit Magnetic North 2023','Alheit Nautical Dawn 2023','ArtiSons The Mothership 2023','Bellingham Cape Town Old Vine 2023','Botanica Mary Delany 2023','City on a Hill Earth 2023','City on a Hill Old Vine 2023','Creation Cool Climate 2023','David & Nadia Hoë-Steen 2023','David & Nadia Rondevlei 2023','De Trafford Skin Macerated 2023','Gabriëlskloof Elodie 2023','Hogan 2023','Kaapzicht Kliprug 2023','Kaapzicht The 1947 2023','Kleine Zalze Family Reserve 2023','Le Sueur Kluisenaar 2023','Lievland Old Vine 2023','McFarlane Monday\'s Child 2023','Miles Mossop CWG Auction Saskia-Jo 2022','Mulderbosch Old Vine Steen Op Hout 2023','Mullineux Granite 2023','Nederburg The Anchorman 2023','Noble Hill Simonskop 2023','Pilgrim 2023','Raats Eden 2023','Rall Noa 2023','Sadie Mev. Kirsten 2023','Sadie Rotsbank 2023','Sadie Skurfberg 2023','Saga Patatsfontein Steen 2023','Scions of Sinai Granietsteen 2023','Spice Route Tarragon 2023','Stellenbosch Vineyards Credo 2023','Stellenrust 59 Barrel Fermented 2023','Stellenrust Old Bushvine Secrets & Lies 2023','Vinevenom Skin NV','Zevenwacht Z-Collection 2023']);
PL('5','Grenache Blanc',['Glen Heatlie The Frontier 2023','Rall 2023','Riebeek Valley Raar 2023']);
PL('5','Grenache Gris',['Momento 2023']);
PL('5','Sauvignon Blanc',['Callender Peak Winterhoek 2023','Bloemendal Suider Terras 2018','Diemersdal The Journal 2023','Diemersdal Wild Horseshoe 2023','Groot Phesantekraal Marizanne 2023','Klein Constantia Perdeblokke 2023','Kleine Zalze Family Reserve 2023','Miles Mossop Stellenbosch 2023','Strandveld Pofadderbos 2023','The Giant Periwinkle Wind Scorpion 2023','Thorne & Daughters Snakes & Ladders 2023','Vriesenhuijs 2023','Zevenwacht Z-Collection 2023']);
PL('5','Semillon',['Boekenhoutskloof 2022','De Kleine Wijn Debutant Wit 2023','Leeu Passant Franschhoek 2022','Old Road Grand-Mère 2022','Sadie Kokerboom 2023','The Vineyard Party Daisy If You Do 2022','Thorne & Daughters Paper Kite 2023']);
PL('5','Semillon Gris',['Thorne & Daughters Tin Soldier 2023']);
PL('5','White Blends, Cape Bordeaux',['Constantia Glen Two 2022','Journey\'s End Ad Infinitum 2022','Nitida Coronata Integration 2023','Savage White 2023']);
PL('5','White Blends, Other',['Alheit Hemelrand Vine Garden 2023','Brookdale Bradbourne 2023','Brookdale Sixteen Field Blend 2023','Fairview Beryl Back 2023','Keermont Terrasse 2023','Momento Chenin Blanc-Verdelho 2023','Mullineux Roundstone White 2023','Stark-Condé The Field Blend 2023','Thelema Sutherland Viognier-Roussanne 2023','Thistle & Weed Khakibos 2023']);
PL('5','Cap Classique',['Anthonij Rupert L\'Ormarins Blanc de Blancs 2019','Belle Rebelle Chardonnay 2017','Charles Fox Prestige Cuvée Cipher Blanc de Noirs 2018','Colmant Absolu Zero Dosage NV','Colmant Blanc de Blancs NV','Domaine des Dieux Anna Louise Cuvée Blanc de Blancs 2012','Graham Beck Pinot Meunier 2022','La Bri Sauvage La Bri 2018','Silverthorn Jewel Box 2019','Spier Prestige Cuvée 2016','Waterford Blanc de Blancs 2017']);
PL('5','Natural Sweet',['Klein Goederust Chenin Blanc 2021','Klein Constantia Vin de Constance 2021','Stellenrust Chenin d\'Muscat 2022']);
PL('5','Noble Late Harvest',['Boekenhoutskloof 2021','Delheim Edelspatz 2022','Miles Mossop Kika 2023','Waterford Library Collection 2018']);
PL('5','Vin de Paille/Straw Wine',['Donkiesbaai Hooiwijn 2023','Keermont Fleurfontein 2023','Mullineux Olerasay 4° NV','Mullineux Straw Wine 2023']);
PL('5','Dessert Wine, Fortified',['Nuy Barbieri Idro 2016']);
PL('5','Port-Style',['Bergsig Cape Late Bottled Vintage 2018','Boplaas Cape Tawny NV','Boplaas Cape Vintage Reserve 2022','De Krans Cape Vintage Reserve 2022','KWV Cape Tawny NV']);
PL('5','Brandy',['Avante Founders\' Fifteen','Boplaas Potstill Reserve 20 Years','Boplaas Potstill Reserve 12 Years','KWV Centenary','KWV Nexus','KWV 20 Year Old','KWV 15 Year Old Alambic','KWV 12 Year Old Barrel Select','KWV 10 Year Old Vintage','KWV Cellar Reserve XO Potstill','KWV Signature Release VS','Tokara XO Potstill','Van Ryn 20 Year Old Potstill','Van Ryn 15 Year Old Potstill','Van Ryn 12 Year Old Potstill']);
PL('5','Husk Spirit',['Dalla Cia 10 Year Old Celebration Cabernet Sauvignon-Merlot']);

// ---------- HIGHLY RECOMMENDED (94) ----------
PL('94','Barbera',['Saga Sons of Sugarland 2023']);
PL('94','Cabernet Franc',['Gabriëlskloof 2022','Kaapzicht 2021','Mulderbosch Single Vineyard 2021','Raats CWG Auction Stella Nova 2020','Thistle & Weed Knapsekêrel 2023','Van Loggerenberg Breton 2023']);
PL('94','Cabernet Sauvignon',['Black Elephant Amazing Grace 2019','De Trafford 2021','Hermanuspietersfontein Sondagskloof 2019','Leeu Passant Stellenbosch 2022','Miles Mossop Sam 2021','Rainbow\'s End 2022','Rock of Eye 2022','Rust en Vrede Estate Vineyards 2022','Simelia Ignatius 2020','Super Single Vineyards Pella Granietbult 2019','Tokara Simonsberg 2021']);
PL('94','Carignan',['ArtiSons Villain Vines 2022','Hogan 2023','Torero The Suit Of Lights 2023']);
PL('94','Carmenère',['Lozärn Ivan 2022']);
PL('94','Cinsault Noir',['Darling Cellars Old Bushvines 2022','illimis 2023','Rall 2023','Savage Follow The Line 2023','Van Loggerenberg Lotter 2023','Welgegund 2021']);
PL('94','Grenache Noir',['Catherine Marshall Lithica 2023','David & Nadia 2023','illimis 2023','Lourens Lua Ilse 2023','Momento Riebeekberg 2022','Piekenierskloof Carel Van Zyl 2023','Sadie Soldaat 2023','Van Niekerk Rebellie 2022']);
PL('94','Malbec',['Eenzaamheid 2022','Hermanuspietersfontein Sondagskloof 2022','Winshaw 2023']);
PL('94','Merlot',['Ladybird Claypot 2020','Lourensford Limited Release 2022','Plaisir 2022','Rainbow\'s End 2022']);
PL('94','Petit Verdot',['KWV The Mentors 2021']);
PL('94','Pinotage',['Angus Paul Transient Lands 2023','Bellevue 1953 2020','Beyerskloof Kriekbult 2021','Bruce Jack Flag Of Truce 2022','Bruwer Vintners Liberté 2022','Diemersdal Reserve 2023','Fairview Primo 2022','Holder Vineyard Dorper 2022','illimis 2023','Longridge Organic Maandans 2020','McFarlane Saturday\'s Child 2023','Neil Ellis Bottelary Hills 2021','Painted Wolf Guillermo 2021','Painted Wolf Lycaon 2022','Rickety Bridge The Crossover 2021','Rijk\'s Reserve 2019','The Giant Periwinkle Sun Spider 2021','Windmeul The Legend Collection 2021']);
PL('94','Pinot Noir',['Catherine Marshall Pinot Noir On Clay Soils 2022','Crystallum Cuvée Cinéma 2023','Hamilton Russell 2023','Hasher Ernest 2023','Iona Kloof 2021','Oak Valley Groenlandberg 2023','Oak Valley Tabula Rasa PN115 2021','Restless River Le Luc 2022','Terra Loci Babilon 2022','Tesselaarsdal 2023']);
PL('94','Shiraz/Syrah',['Benguela Cove Syrah 2021','Boschkloof Syrah 2022','De Grendel Elim Shiraz 2022','De Grendel Op Die Berg Syrah 2023','De Kleine Wijn Ronkedoor 2022','Eagles\' Nest Reserve Shiraz 2022','Eenzaamheid Shiraz 2022','Gabriëlskloof Syrah On Sandstone 2022','JC Wickens Swerwer Shiraz 2023','Joostenberg Klippe Kou Syrah 2022','Karibib Syrah 2023','La Bri Syrah 1064 2022','Mullineux Iron Syrah 2022','Oldenburg Stone Axe 2022','Oldenburg Syrah 2022','Savage Girl Next Door 2023','Stark-Condé Three Pines Syrah 2022','Strandveld Syrah 2022','The Fledge Nest Egg Syrah 2021','Torero Pasiphaë Syrah 2023','Wolf & Woman Syrah 2023']);
PL('94','Tinta Barocca',['Sadie Treinspoor 2023']);
PL('94','Touriga Nacional',['JC Wickens Swerwer 2023']);
PL('94','Red Blends, Cape Bordeaux',['Anthonij Rupert 2016','Anthonij Rupert Optima 2021','Bacco Red Blend 2021','Constantia Glen Three 2021','Delheim Grand Reserve 2021','Diemersdal Private Collection 2022','Fleur du Cap Laszlo 2021','Groenland Steenkamp 2019','Journey\'s End Cape Doctor 2019','Kanonkop Paul Sauer 2021','KWV Orchestra 2021','Louisvale Boris 2021','Miles Mossop Max 2021','Paul Wallace Crackerjack 2021','Rainbow\'s End Family Reserve 2021','Ridgeback Signature C 2020','Rustenberg John X Merriman 2022','Steenberg Catharina 2021','Stellenrust Timeless 2021','Super Single Vineyards The King & I 2019','The High Road Director\'s Reserve 2021','Tokara Director\'s Reserve Red 2021','Vergelegen Estate Red 2021','Vergelegen V 2019','Winshaw Bill Winshaw 2021']);
PL('94','Red Blends, With Pinotage',['Bellingham Pod 2021','Grangehurst Nikela 2011','Kaapzicht Vision 2021','Wellington La Cave Cape Blend 2021']);
PL('94','Red Blends, Shiraz/Syrah-Based',['Anthonij Rupert Riebeeksrivier Southern Slopes 2019','Anthonij Rupert Riebeeksrivier Western Slopes 2019','ArtiSons JJ Handmade Eight Pillars 2021','Ellerman House The Ellerman 2021','Erika Obermeyer CWG Auction Silver Linings 2022','Lingen 2022','Marianne Germinal 2021','Natasha Williams Jade Red 2023','Quoin Rock Simonsberg Blend 2019','Rall Red 2022','Ridgeback Signature S 2020','Saronsberg Full Circle 2022','Stellenbosch Vineyards Credo SMV 2022','Van Loggerenberg High Hopes 2023','Wines of Brocha One Man Band 2020']);
PL('94','Red Blends, Other',['Alto Estate Blend 2022','Anwilka 2020','Bergsig Icarus Red 2022','City on a Hill Exodus 2023','David & Nadia Elpidios 2022','Donkiesbaai Suiderkruis 2021','Erika Obermeyer CWG Auction Fields of Gold 2021','Fairview Extraño 2021','Hogan Divergent 2023','KWV Dr Charles Niehaus 2021','Leeu Passant The Leeu Passant 2021','Leopard\'s Leap Pardus 2022','Nederburg The Motorcycle Marvel 2021','Rust en Vrede Estate 2021','Thistle & Weed Nastergal Red 2022']);
PL('94','Rosé',['Ken Forrester Silver Rose 2024']);
PL('94','Chardonnay',['Beeslaar 2023','Bouchard Finlayson Missionvale 2023','Capensis 2021','Creation Glenn\'s Chardonnay 2023','Creation Reserve 2023','Creation The Art of Chardonnay 2023','Crystallum Ferrum 2023','Delaire Graff Banghoek 2023','Great Heart Stellenbosch 2023','Haute Cabrière Amphora 2022','Jordan Nine Yards Reserve 2023','Jordan Nine Yards 2023','Kershaw Kogelberg Iron Stone CY548 2022','Kleine Zalze Vineyard Selection 2023','Kruger Old Vines 2023','Kruger Naked Wines Old Vines 2023','Leeu Passant Radicales Libres 2018','Leeu Passant Stellenbosch 2022','Litigo 2023','Lourensford Kleipot 2022','Paul Clüver CWG Auction The Wagon Trail 2023','Paul Wallace Reflection 2023','Plaisir Grand Plaisir White 2023','Quoin Rock 2021','Shannon Oscar Browne 2023','Stellenrust Cape Wildling 2023','Stony Brook Ghost Gum White 2022','Thelema Reserve 2022','Trizanne Benede-Duivenhoksrivier 2023']);
PL('94','Chenin Blanc',['Alheit Fire By Night 2023','Angus Paul Barbary Fictions 2023','Angus Paul Fantamtango 2023','Angus Paul On A Flight Of Furious Fancies 2023','Anthonij Rupert Van Lill 2023','Ahrens Granite-Roots 2022','Ahrens Koffieklip OVC 2022','Beaumont CWG Auction GG\'s Single Vineyard 2023','Beaumont Hope Marguerite 2023','Bellevue Eselgraf 2024','Bellingham Limited Release Old Vine 2023','Bosman Optenhorst 2023','Carinus Rooidraai 2023','Cederberg Five Generations 2023','Dalkeith Koplandsteen 2023','Darling Cellars Old Bush Vines 2022','Daschbosch Mossiesdrift Steen 2023','David & Nadia 2023','David & Nadia CWG Veiling 2023','David & Nadia Skaliekop 2023','Dewaldt Heyns Weathered Hands 2022','Diemersfontein The Clockmaker 2023','Erika Obermeyer 2022','Gabriëlskloof Era René 2023','Hogan The Lift NV','JC Wickens Tiernes 2022','Ken Forrester Old Vine 2023','Ken Forrester The FMC 2023','Kleine Zalze Heritage Vineyards Old Vine 2023','L\'Avenir Single Block 2022','Leeuwenkuil Reserve 2023','Lourens Skuinskap Steen 2023','Metzer & Holfeld Maritime 2023','Metzer & Holfeld Montane 2023','Michaella 2023','Miles Mossop Stellenbosch 2023','Mullineux Iron 2023','Off The Record 2023','Old Road Stone Trail 2023','Oldenburg 2023','Opstal Bergsteen 2023','Opstal Carl Everson 2023','Paulus Bartas 2023','Paulus Bosberaad 2023','Raats Old Vine 2023','Radford Dale The Renaissance of Chenin Blanc 2022','Rall Ava 2023','Reyneke Biodynamic 2023','Riebeek Valley Kasteelberg 2023','Riebeek Valley Raar Skin Contact 2023','Roodekrantz Brand se Berg 2023','Roodekrantz Donkermaan 2023','Sakkie Mouton Revenge Of The Crayfish 2023','Savage Never Been Asked To Dance 2023','Spioenkop Johanna Brandt 2021','Stark-Condé Monk Stone 2023','Steilpad 2023','Tembela 2023','The Foundry Bonsai 2022','Thistle & Weed Brandnetel 2023','Thistle & Weed Duwweltjie 2023','Thorne & Daughters Cat\'s Cradle 2023','Van Loggerenberg Kameraderie 2023','Van Loggerenberg Trust Your Gut 2023','Waterford 2023','Wildekrans Barrel Select Reserve 2023','Wolf & Woman 2023','Wolf & Woman Always Present Often Invisible 2023']);
PL('94','Grenache Blanc',['KWV The Mentors 2022','Momento 2023','Olifantsberg 2023']);
PL('94','Palomino',['Riebeek Valley Raar 2023']);
PL('94','Riesling',['Spioenkop 2020']);
PL('94','Sauvignon Blanc',['Anthonij Rupert Altima 2024','Benguela Cove Vinography 2023','Constantia Glen 2023','Die Kat se Snor 2024','Diemersdal Winter Ferment 2024','Flagstone The Surge Reserve 2023','Hermanuspietersfontein Kat Met Die Houtbeen 2023','Iona Elgin Highlands 2024','Klein Constantia Metis 2021','Lomond Pincushion 2023','Nitida Golden Orb 2022','Paul Clüver Village 2024','Reyneke Reserve White 2022','Rickety Bridge Paulina\'s Reserve 2023','Sandstone 2024','Stark-Condé Round Mountain 2023','Steenberg Barrel Fermented 2023','Steenberg The Black Swan 2023','The Giant Periwinkle Blanc Fumé North 2022','The Giant Periwinkle Blanc Fumé South 2022','Thelema 2024','Woolworths Paul Clüver Village 2024']);
PL('94','Semillon',['Benguela Cove Catalina 2022','JC Wickens Wolwekop 2022','Shannon Triangle Block 2022','Steenberg 2023','The Garajeest Jim 2021']);
PL('94','Semillon Gris',['Mullineux CWG Auction The Gris 2023']);
PL('94','White Blends, Cape Bordeaux',['Cape Point Isliedh 2023','Cederberg The Bowline 2023','Delaire Graff White Reserve 2022','Morgenster White Reserve 2023','The Giant Periwinkle South Cape White 2022','Tokara Director\'s Reserve White 2021']);
PL('94','White Blends, Other',['Ahrens WhiteBlack 2022','Alvi\'s Drift CVC 2022','Anysbos Disdit 2023','Ashbourne Sandstone 2023','Beaumont New Baby 2023','Bellingham Freda 2022','David & Nadia Aristargos 2023','Idun Clergerie 2023','Kumusha The Flame Lily 2023','Lemberg Lady 2023','Maanschijn Cape White 2023','Miles Mossop Saskia 2022','Mullineux Old Vines White 2023','Rall White 2023','Sadie Palladius 2022','Sadie Skerpioen 2023','Sakkie Mouton Full On Misfit 2023','Sijnn White 2023','The Fledge Vagabond 2022','The Grapesmith Die Kluisenaar 2021','Thorne & Daughters Rocking Horse 2023','Van Niekerk Sonwater 2023','Vondeling Babiana 2023']);
PL('94','Cap Classique',['Alvi\'s Drift Brut Nature NV','Ambeloui Brut Martin 2017','Anthonij Rupert Private Cuvée 2016','Boschendal Grande Cuvée Brut 2017','Domaine des Dieux Claudia Brut 2018','Graham Beck Blanc de Blancs Brut 2019','Haute Cabrière Blanc de Blancs 2019','Jordan Blanc de Blancs 2019','Le Lude Madáme Brut Nature Millésimé 2015','Pieter Ferreira Birdsong Extra Brut 2019','Pieter Ferreira Blanc de Blancs 2018','Pieter Ferreira Rosé 2017','Silverthorn CWG Auction Big Dog Ten 2019','Villiera Monro Brut 2017','Woolworths Signature Vintage Reserve Brut 2017']);
PL('94','Late Harvest',['David Finlayson Camino Africana Dani NV']);
PL('94','Natural Sweet',['St Leger 2021']);
PL('94','Noble Late Harvest',['Boschendal Vin d\'Or 2023','Mimosa Reserve 2023','Nederburg The Winemasters 2023']);
PL('94','Vin de Paille/Straw Wine',['Klawer Villa Esposto 2022']);
PL('94','Dessert Wine, Fortified',['Lomond Muscat de Frontignan 2017']);
PL('94','Port-Style',['Boplaas Cape Vintage 2022','De Krans Cape Tawny Limited Release NV','Delaire Graff Cape Vintage 2022']);
PL('94','Brandy',['Oude Molen XO','The Inventer XO Rosso','The Inventer XO Blanco']);
PL('94','Husk Spirit',['Dalla Cia Single Cultivar Moscato']);

// ---------- BUY NOW, DRINK LATER ----------
PL('bndl','Cabernet Franc',['Landskroon Paul de Villiers 2022','Mischa Limited Edition 2023']);
PL('bndl','Cabernet Sauvignon',['Babylonstoren 2022','Ernie Els Major Series 2022','Friesland M-Klas 2022','Jakob\'s Vineyards 2020','Mooiplaas Roos Family 2022','Olsen Reserve 2019','Swanepoel 2021','Vriesenhof 2023']);
PL('bndl','Grenache Noir',['Saronsberg 2021','Stellenbosch Vineyards Limited Release 2023']);
PL('bndl','Malbec',['Atlas Swift Shelter 2023','Blaauwklippen Premium 2022']);
PL('bndl','Merlot',['De Trafford 2020','Hartenberg Premium 2021','Stellekaya 2022','Villiera 2022','Vondeling Barrel Selection 2022']);
PL('bndl','Mourvèdre',['Saronsberg 2021']);
PL('bndl','Nebbiolo',['Idiom 900 Series 2020','Iona 2020','Steenberg 2019']);
PL('bndl','Petite Sirah',['Stark-Condé 2022']);
PL('bndl','Petit Verdot',['Anura Reserve 2018','Twelve Apostles 2022','Zorgvliet 2022']);
PL('bndl','Pinotage',['Allée Bleue Black Old Vine 2021','Beyerskloof Winemakers Reserve 2022','Southern Right 2023']);
PL('bndl','Pinot Noir',['Dalla Cia 2022','Meerlust 2023','Villiera Punchion 2022']);
PL('bndl','Shiraz/Syrah',['Andreas Lithic Whisperer Syrah 2021','Gabriëlskloof Syrah On Shale 2022','La Motte Syrah 2022','Tembela Syrah 2023','Saltare Syrah 2021','Vergenoegd Löw Florian Shiraz 2022']);
PL('bndl','Tempranillo',['Mellasat 2020']);
PL('bndl','Touriga Nacional',['Boplaas 2023','De Krans 2023']);
PL('bndl','Red Blends',['Bacco Prelude 2021','Bartho Eksteen Ouskool 2021','Lyngrove Latitude Cape Blend 2022','Maanschijn Herbarium Cape Red 2023','Plaisir Grand Plaisir 2020']);
PL('bndl','Chardonnay',['Clouds Reserve 2023','Rustenberg Stellenbosch 2023','Thelema 2022','Van Loveren Christiena 2023']);
PL('bndl','Sauvignon Blanc',['Klein Constantia Clara 2023','Neethlingshof The Duiker Cadenza 2024']);
PL('bndl','Chenin Blanc',['Darling Hannuwa Amphora 2023','Great Heart Swartland 2023','Groenland Ou Bosstok Steen 2023','Post House Stamp Of Chenin 2023']);
PL('bndl','Semillon',['Black Elephant The Dark Side Of The Vine 2023']);
PL('bndl','Viognier',['Richard Hilton The Emperor Probus 2022']);
PL('bndl','White Blends',['Creation Sauvignon Blanc-Semillon 2023','Escapades Grande Reserve Sauvignon Blanc-Semillon 2023','Flagstone Treaty Tree White Reserve 2023','Groot Constantia Gouverneurs White 2022','Scions of Sinai Rocinante 2023']);

// ---------- HIDDEN GEMS ----------
PL('gem','Cabernet Sauvignon',['Anthonij Rupert Protea 2022','Cape Wine Crafters Collectibles 2022','KWV Classic Collection 2023']);
PL('gem','Cinsault Noir',['Lalela Wine Collective 2023']);
PL('gem','Malbec',['Olivedale Respect For Nature 2021']);
PL('gem','Merlot',['Boplaas 2023','Stettyn 2022','Wellington Duke 2022']);
PL('gem','Pinotage',['Alvi\'s Drift 221 2022','Piekenierskloof Six Hats 2023','Windmeul 2022']);
PL('gem','Pinot Noir',['Overhex Balance Winemaker\'s Selection 2023','Van Loveren Blue Velvet 2023']);
PL('gem','Ruby Cabernet',['Langverwacht 2022']);
PL('gem','Sangiovese',['Koelenhof 2022']);
PL('gem','Shiraz/Syrah',['False Bay Old School Syrah 2023']);
PL('gem','Zinfandel',['Idiom 2019']);
PL('gem','Red Blends',['Hartenberg Cabernet Sauvignon-Shiraz 2022','Kaapzicht Kaleidoscope Red 2021','Rooiberg Cabernet Sauvignon-Merlot 2023']);
PL('gem','Blanc de Noir',['Esona Frankly My Dear 2024']);
PL('gem','Rosé',['Lowerland Tieroog Tannat 2023','Rosendal Harmoni Cabernet Franc 2023','Salt Rock Cinsault 2024','Walker Bay Red Chardonnay 2023']);
PL('gem','Chardonnay',['Merwida 2023','Klein Roosboom Dear Diary 2024','Pulpit Rock Brink Family 2024','Under Oaks 2023']);
PL('gem','Chenin Blanc',['Aan de Doorns Vintage 2024','Bemind Wyne 2023','Brewine Imperfection Kosher 2024','Groot Phesantekraal 2024']);
PL('gem','Colombard',['Goedverwacht Crane White 2024']);
PL('gem','Gewürztraminer',['Bon Courage 2024']);
PL('gem','Grenache Blanc',['Schenkfontein 2023']);
PL('gem','Pinot Gris',['Val du Charron 2024']);
PL('gem','Riesling',['Bruyère Legkaart 2024','Fairview Darling 2024']);
PL('gem','Sauvignon Blanc',['Breëland 2024','Deux Frères Heritage Old Vines 2024','Fairvalley 2024','Skipskop 2023']);
PL('gem','Servant',['Koueberg 2023']);
PL('gem','Viognier',['Dragonridge Sirius 2023']);
PL('gem','White Blends',['Foothills Viognier-Sauvignon Blanc 2022','Kloovenburg The Village White 2024','La Bri Double Door White 2023']);
PL('gem','Sparkling Wine',['Belle Rebelle CapeSecco Chenin Blanc 2024','Orange River Lyra Irsai Olivér Demi-Sec 2024']);
PL('gem','Dessert Wine, Fortified',['Badsberg Hanepoot Jerepigo 2023']);
PL('gem','Port-Style',['Darling Black Granite Vintage Reserve 2022']);

// ---------- SUPERQUAFFERS ----------
PL('quaff','Cabernet Sauvignon',['Guardian Peak 2023','Robertson 2023']);
PL('quaff','Pinotage',['Bergsig Bain\'s Kloof 2021','Darling Cellars Chocoholic Reserve 2023','Zevenwacht Zeven Pinotage 2023']);
PL('quaff','Shiraz/Syrah',['Fat Bastard 2022','Namaqua 2023','Piekenierskloof Six Hats 2022','Stellar Organics No-Sulphur-Added 2023','Stellar Running Duck 2023']);
PL('quaff','Red Blends',['Chateau Libertas 2023','Robertson Chapel Red 2023','Robertson The Blend 2023','Stellar Really Ravishing Red NV']);
PL('quaff','Rosé',['Delheim Pinotage Rosé 2024','The Fishwives Club Pastel Pinotage Rosé 2024','The Fishwives Club Pinotage Rosé 2024']);
PL('quaff','Chardonnay',['Bon Courage Unwooded 2024','Haute Cabrière Unwooded 2024','Ken Forrester Petit 2023','Landskroon 2024']);
PL('quaff','Chenin Blanc',['Ayama 2024','Bergsig 2024','Boland Classic Selection 2024','Jacaranda Horizon 2023','Koelenhof Koelenbosch 2024','O\'Connell\'s Private Selection 2023','Schenkfontein 2023','Slanghoek Vinay NV','Stellar Running Duck 2024','Van Loveren Five\'s Reserve 2024']);
PL('quaff','Colombard',['Rooiberg 2024']);
PL('quaff','Sauvignon Blanc',['Badsberg 2024','Boland Classic Selection 2024','Clos Malverne Devonet 2024','Flagstone Poetry 2023','Guardian Peak 2024','Ken Forrester Petit 2024','Klawer 2024','Nuy Inspiration 2024','Yonder Hill Benjamin 2024']);
PL('quaff','White Blends',['Slanghoek Vinay Vin Blanc NV','Van Loveren Blanc de Blanc 2024','Viljoensdrift Anchor Drift Dry White NV']);
PL('quaff','Cap Classique',['Riebeek Valley Pieter Cruythoff Brut Rosé NV']);
PL('quaff','Sparkling Wine',['The Grape Grinder Cape Fynbos Bubbly Chardonnay NV']);
PL('quaff','Natural Sweet',['Zandvliet Muscat 2024']);

const platter25Wineries = [
  ['Top Performing Winery of the Year 2025', 'Sadie Family Wines', '25 Jahre nach dem ersten Columella-Jahrgang; sechs Fünf-Sterne-Weine in dieser Ausgabe – zum fünften Mal Top Performing Winery. Sohn Markus ist neu im Keller.'],
  ['Editor\'s Award Winery of the Year 2025', 'Hamilton Russell Vineyards', '50. Jubiläum des Guts im Hemel-en-Aarde Valley; Anthony Hamilton Russell führt es seit 1991. Gewürdigt werden Beständigkeit und der Erhalt der Naturvegetation im Tal.'],
  ['Newcomer Winery of the Year 2025', 'Terra Loci', 'Johann Fourie und Bertus Fourie mit europäischen Partnern: Pinot Noir aus Walker Bay, Chenin aus dem Swartland, Grenache Blanc aus Paarl – der Elgin-Chardonnay (Fé) erhielt 5 Sterne.'],
];
