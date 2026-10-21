// =============================================
// DATEN — Südafrika-Weinguide
// Stand: Oktober 2026
// Rangfolge = redaktionell: belegte Spitzenbewertungen 2025/26 zuerst, dann Ikonen und Referenzweine.
// pts = belegte Punktzahl (Tim Atkin MW / Platter's) · aw = belegte Auszeichnung · u = Lage/Rebsorte/Detail nicht durch Primärquelle gesichert
// =============================================

// ---------- WEINGÜTER ----------
const producers = {
  "A.A. Badenhorst Family Wines": "Adi Badenhorst, Cousin der Familie Rustenberg, kaufte 2008 mit seinem Cousin Hein die heruntergekommene Farm Kalmoesfontein am Paardeberg. Zusammen mit Eben Sadie gilt er als Gesicht der Swartland-Revolution: alte Buschreben, Spontangärung, große Fässer und Betontanks, dazu viel Humor (Einstiegslinie „Secateurs“).",
  "Alheit Vineyards": "Chris und Suzaan Alheit gründeten das Weingut 2010 auf der Farm Hemelrand im Hemel-en-Aarde. Sie arbeiten ausschließlich mit zugekauften Trauben von alten Reben aus dem ganzen Western Cape, vor allem Chenin Blanc und Sémillon. Platter's kürte sie 2026 zum „Editor's Award Winery of the Year“; Magnetic North und Huilkrans aus Citrusdal Mountain zählen zu den höchstbewerteten Weißweinen des Landes.",
  "Alto": "Eines der ältesten Rotwein-Güter Stellenboschs (seit 1693 Landwirtschaft, Weinbau ab dem 20. Jh.) an den steilen Hängen des Helderbergs. Spezialisiert ausschließlich auf Rotwein; der „Alto Rouge“ wird seit 1933 erzeugt und ist einer der ältesten Markenweine Südafrikas.",
  "Anthonij Rupert": "Weingut der Familie Rupert (Johann Rupert) auf dem historischen Gut L'Ormarins in Franschhoek. Mehrere Linien (Anthonij Rupert, Cape of Good Hope, L'Ormarins) mit Lagen u. a. in Franschhoek, Darling und Elandskloof. Die L'Ormarins- bzw. Anthonij-Rupert-Cap-Classiques gehören zur Spitze.",
  "Anysbos": "Kleines Weingut im Bot-River-Tal (Walker Bay) im Besitz der Familie Bhatnagar, das sich auf mediterrane Rebsorten konzentriert. Der Rotwein Tesame wurde von Platter's 2026 als bester „Other Red Blend“ ausgezeichnet.",
  "Ataraxia": "Gegründet 2004 von Kevin Grant (zuvor lange Kellermeister bei Hamilton Russell) auf dem Hemel-en-Aarde Ridge. Das Weingut steht für dichte, mineralische Chardonnays und Pinot Noirs; die kleine Kapelle auf dem Gut dient als Verkostungsraum.",
  "Beaumont": "Familienweingut in Bot River (Walker Bay) in einer historischen Mühle aus dem 18. Jahrhundert. Sebastian Beaumont ist bekannt für Chenin Blanc von alten Reben („Hope Marguerite“) und den Rotwein-Blend „Vitruvian“.",
  "Beeslaar": "Das persönliche Label von Abrie Beeslaar, seit 2002 Kellermeister von Kanonkop. Er erzeugt nur Pinotage – im eleganteren, burgundischeren Stil – von Lagen in Stellenbosch.",
  "Beyerskloof": "Gegründet 1988 von Beyers Truter, dem „Pinotage King“. Beyerskloof ist der wohl größte Pinotage-Spezialist der Welt und Motor der Pinotage-Bewegung; das Spitzen-Cuvée Diesel ist Truters verstorbenem Hund gewidmet.",
  "Boekenhoutskloof": "1994 von Marc Kent und Partnern im Franschhoek-Tal neu aufgebaut. Das Gut wurde mit Syrah, Cabernet und dem Sémillon aus über 100 Jahre alten Reben berühmt; dazu Erfolgsmarken wie The Chocolate Block und Porcupine Ridge. Zur Gruppe gehören Porseleinberg (Swartland) und Cap Maritime (Hemel-en-Aarde).",
  "Boplaas": "Familie Nel betreibt seit Generationen Weinbau in Calitzdorp (Klein Karoo). Boplaas ist der Referenzerzeuger für „Cape Vintage“, die südafrikanische Portwein-Interpretation, auf Basis von Touriga Nacional und Tinta Barocca.",
  "Boschendal": "Eines der ältesten Weingüter des Landes (1685), am Fuß der Simonsberg-Berge zwischen Franschhoek und Stellenbosch. Kapholländische Architektur, Farm-to-Table-Gastronomie und eine lange Tradition im Cap Classique.",
  "Boschkloof": "Familienweingut der Bormans in den Polkadraai Hills (Stellenbosch). Reenen Borman machte Boschkloof mit präzisen, kühlen Syrahs bekannt; der Epilogue gehört zu den höchstbewerteten Syrahs des Landes (Atkin 2026: 98 Punkte).",
  "Botanica": "Ginny Povall, ehemalige New Yorker Beraterin, kaufte 2008 die Farm Protea Heights im Devon Valley (Stellenbosch) und begann mit zugekauftem Chenin aus der Clanwilliam-Gegend. Der Mary Delany Chenin – benannt nach der botanischen Künstlerin – erreichte bei Platter's 2026 Rekord-99-Punkte.",
  "Bouchard Finlayson": "1989 von Peter Finlayson und dem Burgunder Paul Bouchard im Hemel-en-Aarde Valley gegründet. Pionier für südafrikanischen Pinot Noir; Galpin Peak ist seit den 1990ern ein Maßstab.",
  "Cape Point Vineyards": "Gegründet in Noordhoek auf der Kap-Halbinsel, nur wenige Kilometer vom Atlantik entfernt. Die extrem maritime, windige Lage bringt Sauvignon Blanc und Sémillon mit großer Spannung hervor; Isliedh ist das Flaggschiff.",
  "Cederberg": "Familie Nieuwoudt bewirtschaftet in fünfter Generation die Farm Dwarsrivier in den Cederbergen – mit über 1.000 m einer der höchstgelegenen Weinberge Südafrikas. David Nieuwoudt erzeugt zusätzlich die Elim-Weine „Ghost Corner“.",
  "Chamonix": "Weingut auf den kühlen, hohen Hängen über dem Franschhoek-Dorf. Bekannt für Reserve Chardonnay, Pinot Noir, den Blanc Fumé und den Bordeaux-Blend Troika.",
  "Colmant": "2005 vom belgischen Ehepaar Jean-Philippe und Isabelle Colmant in Franschhoek gegründet. Eine reine Cap-Classique-Kellerei, die sich am Champagner-Vorbild orientiert; der Absolu Zero Dosage gehört zur Spitze.",
  "Constantia Glen": "Familienweingut der Waibels auf den oberen Hängen des Constantia Nek. Spezialisiert auf Bordeaux-Sorten: Constantia Glen Five (rot, alle fünf Sorten) und Constantia Glen Two (Sauvignon-Sémillon).",
  "Creation": "2002 gegründet von Jean-Claude und Carolyn Martin (Schweizer Winzerfamilie) im Hemel-en-Aarde Ridge. Bekannt für Pinot Noir, Chardonnay und eine ausgeprägte Wein-und-Speisen-Kultur.",
  "Crystallum": "Gegründet 2007 von Peter-Allan Finlayson (Sohn von Peter Finlayson, Bouchard Finlayson). Einzellagen-Pinot-Noirs und -Chardonnays von der Cape South Coast; Platter's 2026 kürte Clay Shales (Chardonnay) und Mabalel (Pinot Noir) zu den besten ihrer Kategorie.",
  "David & Nadia": "David und Nadia Sadie (nicht verwandt mit Eben Sadie) gründeten 2010 ihr Label im Swartland. Sie gelten als Meister des Chenin Blanc und des Grenache von alten, trocken bewirtschafteten Buschreben; Aristargos ist ihr White Blend.",
  "De Krans": "Familie Nel (zweiter Zweig) in Calitzdorp, Klein Karoo. Neben Boplaas der zweite Referenzerzeuger für Cape-Vintage-Weine und Muskateller.",
  "De Toren": "Boutique-Weingut in den Polkadraai Hills (Stellenbosch), benannt nach dem Turm, in dem der Wein per Schwerkraft verarbeitet wird. Fusion V ist ein Fünf-Sorten-Bordeaux-Blend.",
  "De Wetshof": "Familie de Wet in Robertson. Danie de Wet war in den 1970er/80ern Südafrikas Chardonnay-Pionier; die Kalkböden des Robertson-Tals geben den Weinen Säure und Mineralik.",
  "Delaire Graff": "Seit 2003 im Besitz des Londoner Diamantenhändlers Laurence Graff, auf dem Helshoogte-Pass zwischen Stellenbosch und Franschhoek. Luxuriöse Lodge, Kunstsammlung und Spitzenweine von den höchsten Lagen des Passes (Banghoek).",
  "Diemersdal": "Familie Louw bewirtschaftet das Gut in Durbanville in sechster Generation; Thys Louw ist Kellermeister. Die unbewässerten Buschreben bringen intensive Sauvignon Blancs und Pinotages. Platter's 2026: „Top Performing Winery of the Year“ mit sechs Fünf-Sterne-Weinen.",
  "Domaine des Dieux": "Kleines Weingut im Hemel-en-Aarde Ridge, spezialisiert auf Cap Classique und Pinot Noir aus kühlen Lagen; die Prestige-Cuvée heißt Claudia.",
  "Ernie Els Wines": "Weingut des südafrikanischen Golfprofis Ernie Els am Helderberg (Stellenbosch), seit 1999. Kraftvolle, polierte Cabernet-basierte Rotweine; der Signature ist das Flaggschiff.",
  "Fairview": "Familie Back in Paarl, seit 1937. Charles Back ist einer der einflussreichsten Weinunternehmer des Landes (Spice Route, Goats do Roam, Fairview-Käse). Pionier für Rhône-Sorten und Swartland-Trauben.",
  "Gabriëlskloof": "Weingut in Bot River (Walker Bay), an dem Peter-Allan Finlayson (Crystallum) als Kellermeister beteiligt ist. Die „Landscape Series“ ordnet die Weine ihren Böden zu (Sandstein, Schiefer).",
  "Glenelly": "2003 von May-Eliane de Lencquesaing gegründet, der ehemaligen Besitzerin von Château Pichon Longueville Comtesse de Lalande (Pauillac). Bordelaiser Handschrift in Stellenbosch; Lady May ist der Spitzen-Cabernet.",
  "Graham Beck": "1983 von Graham Beck in Robertson gegründet. Kellermeister Pieter „Bubbles“ Ferreira machte das Haus zum führenden Cap-Classique-Erzeuger Südafrikas; seit 2016 ausschließlich Schaumwein. Graham-Beck-Brut wurde bei Mandelas Amtseinführung 1994 und Obamas Wahl 2008 ausgeschenkt. Ferreira: Atkin „Winemaking Legend“ 2026.",
  "Hamilton Russell Vineyards": "1975 von Tim Hamilton Russell im damals unbekannten Hemel-en-Aarde Valley gegründet, heute von Anthony Hamilton Russell geführt. Bahnbrechender Pinot Noir und Chardonnay von steinigen Schieferton-Böden – die Keimzelle des südafrikanischen Cool-Climate-Weinbaus.",
  "Hartenberg": "Weingut im Bottelary (Stellenbosch), bekannt als Shiraz-Spezialist. Gravel Hill ist eine Einzellage auf kargem Kiesboden.",
  "Iona": "Das Weingut liegt in den Elgin Highlands nahe dem Atlantik, eines der kühlsten Weingüter des Landes. Bekannt für Sauvignon Blanc, Chardonnay und Pinot Noir.",
  "JC le Roux": "Spezialisiertes Schaumweinhaus im Devon Valley (Stellenbosch), Teil der Heineken-Beverages-Gruppe. Scintilla ist die lang gereifte Prestige-Cuvée.",
  "Jordan Wine Estate": "Gary und Kathy Jordan (er Geologe, sie Ökonomin) bauten das Familiengut in der Stellenbosch Kloof ab 1993 auf. Breites Spitzensortiment; Atkin 2026: 14 Weine mit 92+ Punkten, Sophia 2022 mit 98.",
  "Kaapzicht": "Familie Steytler im Bottelary (Stellenbosch). Bekannt für den Steytler Vision (Cape Blend mit Pinotage) und den Chenin „The 1947“ von Reben, die 1947 gepflanzt wurden.",
  "Kanonkop": "Familie Krige bewirtschaftet das Gut am Simonsberg seit Anfang des 20. Jahrhunderts; heute geführt von Johann und Paul Krige, Kellermeister Abrie Beeslaar. Kanonkop ist Südafrikas „First Growth“: Paul Sauer 2015 erhielt Atkins erste 100 Punkte in der Neuen Welt, Black Label ist der berühmteste Pinotage.",
  "Keermont": "Weingut der Familie Wraith im Amphitheater-artigen Tal oberhalb von Stellenbosch (Helderberg/Stellenbosch-Berge). Kühle Höhenlagen, präzise Syrahs und Chenin Blancs.",
  "Ken Forrester": "Ken Forrester, ehemaliger Gastronom aus Johannesburg, kaufte 1993 die Farm Scholtzenhof am Helderberg und wurde zum „Mr. Chenin“ Südafrikas. Gründer der Chenin Blanc Association.",
  "Klein Constantia": "Historischer Teil des Constantia-Guts von 1685. Ab 1986 belebte das Weingut den legendären Süßwein Vin de Constance wieder; heute ist es auch für Sauvignon Blanc und Cap Classique bekannt.",
  "Kleine Zalze": "Familie Basson in Stellenbosch, Weingut mit Golf-Estate. Die Family-Reserve-Weine – vor allem Chenin Blanc und Cabernet – sind regelmäßig hoch dekoriert; die Brut Rosé gewann 2025 die Rosé-Kategorie der Amorim Cap Classique Challenge.",
  "Le Lude": "Boutique-Kellerei in Franschhoek, spezialisiert auf Cap Classique und eines der ganz wenigen Häuser mit Zweitgärung unter Naturkorken (Agrafe). Der Brut Magnum 2015 erhielt bei Platter's 2026 96 Punkte.",
  "Le Riche": "Etienne Le Riche, der „Cabernet King“, gründete das Familienweingut 1997 in Stellenbosch nach vielen Jahren bei Rustenberg. Heute führen seine Kinder Christo und Yvonne den Betrieb.",
  "Leeu Passant": "Gemeinschaftsprojekt von Chris & Andrea Mullineux mit dem Unternehmer Analjit Singh (Leeu Collection) in Franschhoek. Fokus auf alte Reben und historische Lagen, u. a. Weinberge aus dem frühen 20. Jahrhundert in Wellington.",
  "Leeuwenkuil": "Großer Familienbetrieb der Familie Dreyer im Swartland. Die kleine Heritage-Linie stammt aus den besten Parzellen; der Heritage Syrah 2022 erhielt bei Platter's 2026 Rekord-99-Punkte.",
  "Lismore Estate Vineyards": "Die Amerikanerin Samantha O'Keefe zog 2003 nach Südafrika und baute nahe Greyton am Fuß der Riviersonderend-Berge ihr Weingut auf. Fokus auf Chardonnay, Syrah und Viognier in kühler Lage. Atkin 2026: erste „Winery of the Year“ überhaupt.",
  "Meerlust": "Seit 1756 im Besitz der Familie Myburgh, heute in achter Generation (Hannes Myburgh). Das Gut in Stellenbosch (nahe False Bay) brachte 1980 mit Rubicon einen der ersten Bordeaux-Blends Südafrikas auf den Markt.",
  "Mullineux": "Chris und Andrea Mullineux gründeten 2007 ihr Weingut im Swartland; Andrea wurde von Wine Enthusiast zur Winemaker of the Year (2016) gewählt. Die Terroir-Serie (Schist, Granite, Iron) macht die Böden des Swartland erfahrbar; dazu Straw Wine und Chenin Blancs.",
  "Nederburg": "Eines der bekanntesten Weingüter des Landes in Paarl (1791). Edelkeur war 1969 der erste edelsüße Botrytiswein Südafrikas.",
  "Newstead": "Kleines Weingut bei Plettenberg Bay an der Garden Route, einer der jüngsten Weinbaugegenden des Landes. Der Lund Blanc de Blancs erhielt Fünf Sterne bei Platter's 2026.",
  "Newton Johnson": "Familie Newton Johnson im Upper Hemel-en-Aarde Valley, gegründet 1996. Die Brüder Gordon und Bevan machen duftige, präzise Pinot Noirs und Chardonnays von Granit-Lehm-Böden.",
  "Oak Valley": "Familie Rawbone-Viljoen in Elgin, seit 1898 Landwirtschaft (Obst, Blumen, Rinder). Cool-Climate-Chardonnay und Pinot Noir von Höhenlagen.",
  "Oldenburg Vineyards": "Boutique-Weingut im Banghoek-Tal (Stellenbosch), einem der höchstgelegenen und kühlsten Seitentäler. Per Se ist die Einzellagen-Spitze aus Cabernet Sauvignon (Platter's 2026 Wine of the Year).",
  "Opstal": "Familie Louw im Slanghoek-Tal (Breedekloof) in siebter Generation. Attie Louw bringt Old-Vine Chenin Blanc aus dem Breedekloof ins Rampenlicht.",
  "Paul Cluver": "Familie Cluver begann 1987 als erste mit Weinbau in Elgin. Heute bekannt für Chardonnay, Pinot Noir und vor allem Riesling – inklusive Noble Late Harvest.",
  "Pieter Ferreira": "Das persönliche Cap-Classique-Label von Pieter „Bubbles“ Ferreira, dem langjährigen Kellermeister von Graham Beck und Atkins „Winemaking Legend“ 2026.",
  "Porseleinberg": "Seit 2009 Teil von Boekenhoutskloof: ein Schieferhang im Swartland, den Callie Louw biologisch bewirtschaftet. Nur ein Wein – Syrah, vergoren in Beton, ausgebaut in großen Foudres. Atkin 2025: 100 Punkte für Jg. 2023.",
  "Raats Family Wines": "Bruwer Raats gründete sein Familienweingut 2000 in den Polkadraai Hills (Stellenbosch). Spezialisiert auf zwei Rebsorten: Chenin Blanc und Cabernet Franc – Vlag ist der Spitzen-Cabernet-Franc.",
  "Rall Wines": "Donovan Rall, ehemaliger Kellermeister bei Vondeling, gründete 2008 sein Label im Swartland. Elegante, transparente Weine von Schiefer und Granit; Atkin-Winemaker of the Year 2025.",
  "Restless River": "Craig und Anne Wessels bewirtschaften ein kleines Gut im Upper Hemel-en-Aarde Valley. Ava Marie (Chardonnay und Pinot Noir) und ein seltener Cool-Climate-Cabernet.",
  "Reyneke": "Johan Reyneke, Philosoph und Surfer, machte das Familiengut in den Polkadraai Hills zum ersten biodynamischen Weingut Südafrikas. Kühe, Gänse und Kompost ersetzen die Chemie.",
  "Richard Kershaw": "Richard Kershaw MW, gebürtiger Brite, gründete 2012 sein Label in Elgin. Er arbeitet mit sorgfältiger Klon- und Bodenselektion; Elgin Chardonnay und Syrah sind die Säulen.",
  "Rust en Vrede": "Familie Engelbrecht am Helderberg. Jean Engelbrecht machte das Gut mit kraftvollen Rotweinen und einem Fine-Dining-Restaurant bekannt; 1694 Classification ist der Kultwein.",
  "Rustenberg": "Familie Barlow in Stellenbosch (Simonsberg), seit 1941 im Familienbesitz, Weinbau seit 1682. Peter Barlow (Cabernet) und Five Soldiers (Chardonnay) sind Ikonen.",
  "Sadie Family Wines": "Eben Sadie gründete 1999 sein Weingut am Paardeberg und gilt als wichtigste Figur des modernen südafrikanischen Weins. Columella und Palladius machten das Swartland weltberühmt; die „Ouwingerdreeks“ (Old Vine Series) rettet historische Rebanlagen im ganzen Western Cape. Columella 2024 erhielt bei Atkin 2026 100 Punkte.",
  "Saronsberg": "Gut im Tulbagh-Bergkessel, gegründet 2002 von Nick van Huyssteen. Kraftvolle Shiraz- und Rhône-Blends.",
  "Savage Wines": "Duncan Savage, früher Kellermeister bei Cape Point Vineyards, gründete 2011 sein Label in Kapstadt. Weine aus kühlen, maritimen Lagen im ganzen Western Cape – fein, frisch, zurückhaltend.",
  "Scions of Sinai": "Bernhard Bredell, Spross einer alten Helderberg-Winzerfamilie, gründete 2016 Scions of Sinai. Ausbau in Tonamphoren und alten Fässern, Fokus auf alte Reben auf Granit.",
  "Shannon": "Brüder Stuart und James Downes in Elgin. Bekannt für den Merlot Mount Bullet und Pinot Noir; Weinbau neben Apfelplantagen.",
  "Silverthorn": "John Loubser gründete in Robertson eine reine Cap-Classique-Kellerei. Jewel Box 2019 ist Platter's 2026 Cap-Classique-Wine-of-the-Year; John Loubser ist Mitglied der Cape Winemakers Guild.",
  "Simonsig": "Familie Malan in Stellenbosch. Frans Malan erzeugte 1971 mit Kaapse Vonkel den ersten Cap Classique Südafrikas; Redhill ist ein Lagen-Pinotage.",
  "Spice Route": "Charles Backs (Fairview) Swartland-Weingut in Malmesbury mit Craft-Brauerei, Schokolade und Restaurant. Malabar ist der Spitzen-Blend.",
  "Spier": "Eines der ältesten Güter Stellenboschs (1692), heute auch für Nachhaltigkeit und Kunst bekannt. Die „21 Gables“-Linie ist nach den Giebeln der historischen Gebäude benannt.",
  "Stark-Condé": "José Condé und Familie Stark im Jonkershoek-Tal (Stellenbosch). Cabernet von steilen Granitlagen; Three Pines ist die Spitze.",
  "Steenberg": "Gegründet 1682, eine der ältesten Farmen Constantias, heute mit Hotel und Golfplatz. Spitzen-Sauvignon-Blanc, der White Blend Magna Carta (Platter's 2026 Wine of the Year) und der Cap Classique Lady R (Gesamtsieger der Amorim Cap Classique Challenge 2025).",
  "Stellenrust": "Familienweingut im Bottelary und am Helderberg (Stellenbosch). Alte Chenin-Reben; „53“ ist benannt nach dem Pflanzjahr der Reben.",
  "Storm Wines": "Hannes Storm gründete Storm Wines 2012 nach acht Jahren bei Hamilton Russell. Einzellagen-Pinot-Noirs und -Chardonnays aus den drei Hemel-en-Aarde-Wards (Vrede, Ridge, Ignis). Atkin Winemaker of the Year 2026.",
  "Strandveld": "Das südlichste Weingut Afrikas bei Elim, nahe Cape Agulhas. Kühle, windige Lagen; Pofadderbos ist ein Einzellagen-Sauvignon.",
  "Thelema Mountain Vineyards": "Familie Webb kaufte 1983 eine verlassene Obstfarm auf dem Helshoogte-Pass; Gyles Webb machte daraus eines der ersten modernen Spitzengüter Südafrikas. Berühmt für Cabernet mit Minze-Note.",
  "Thorne & Daughters": "John und Tasha Seccombe gründeten 2012 ihr Label in Bot River. Feine, texturreiche White Blends (Rocking Horse) und Chenins von alten Reben.",
  "Tokara": "Seit 1994 im Besitz von GT Ferreira (Banker) auf dem Helshoogte-Pass, mit Lagen auch in Elgin und Hemel-en-Aarde. Kunstsammlung, Restaurant, Olivenöl. Limited Release Pinotage 2023 ist Platter's 2026 Wine of the Year.",
  "Van Loggerenberg": "Lukas van Loggerenberg gründete 2016 sein Label in Stellenbosch. Minimale Eingriffe, Ganztraubengärung; seine Syrahs und Chenins gehören zu den aufregendsten des Landes (Graft Syrah 2025: 98 Punkte bei Atkin).",
  "Vergelegen": "1700 von Gouverneur Willem Adriaan van der Stel in Somerset West gegründet, heute im Besitz von Anglo American. Historische Gärten, Bordeaux-Stil; V (Cabernet) und GVB/Estate White sind die Spitzen.",
  "Vilafonté": "Joint Venture des kalifornischen Weinbau-Paares Zelma Long und Phil Freese mit Mike Ratcliffe in Simonsberg-Paarl. Zwei Bordeaux-Blends: Series C (Cabernet-betont) und Series M (Merlot-betont).",
  "Villiera": "Familie Grier in Stellenbosch; eines der ersten Häuser, die systematisch auf Cap Classique setzten. Monro Brut ist die lang gereifte Prestige-Cuvée.",
  "Warwick": "Gut am Simonsberg, von Norma Ratcliffe in den 1970ern als eine der ersten Winzerinnen Südafrikas aufgebaut. Trilogy war einer der ersten Bordeaux-Blends des Landes.",
  "Waterford": "Weingut im Blaauwklippen-Tal (Stellenbosch) mit toskanisch anmutender Architektur. The Jem ist ein Blend aus vielen Sorten; dazu ein Blanc de Blancs (Platter's 2026: 5 Sterne).",
  "Babylonstoren": "Historisches Farmgut (1692) bei Simondium zwischen Paarl und Franschhoek, seit 2007 im Besitz von Koos Bekker und Karen Roos. Berühmt für seinen riesigen Schaugarten, Hotel und Restaurants; Nebukadnesar ist der Spitzen-Bordeaux-Blend.",
  "Bellevue": "Familie Morkel im Bottelary (Stellenbosch). Von Bellevue stammten die Trauben für den ersten kommerziell abgefüllten Pinotage (Lanzerac 1959). Der „1953“ kommt von Pinotage-Reben aus jenem Pflanzjahr.",
  "Bellingham": "Historische Franschhoek-Marke (gegründet 1693), heute Teil der DGB-Gruppe. Die Old-Vine-Linie arbeitet mit alten Chenin-Reben aus dem Western Cape.",
  "Benguela Cove": "Weingut an der Bot-River-Lagune bei Hermanus (Walker Bay), benannt nach dem kalten Benguela-Strom. Kühle, maritime Chardonnays und Rotweine.",
  "Bergsig": "Familie Lategan im Breedekloof seit Generationen. Bekannt für solide Weine zu fairen Preisen – und für Portweine: der Cape Late Bottled Vintage 2018 ist Platter's 2025 Wine of the Year.",
  "Buitenverwachting": "Historisches Gut in Constantia (Teil des ursprünglichen Constantia-Lands von 1685), seit 1981 von der Familie Mueller wiederbelebt. Christine ist der legendäre Bordeaux-Blend (Platter's 2025 Wine of the Year).",
  "Cap Maritime": "Pinot-Noir- und Chardonnay-Projekt der Boekenhoutskloof-Gruppe im Upper Hemel-en-Aarde Valley.",
  "Charles Fox": "Charles und Ellie Fox gründeten in Elgin ein reines Cap-Classique-Haus. Der Prestige Cuvée Cipher Blanc de Noirs 2018 ist Platter's 2025 Cap-Classique Wine of the Year.",
  "City on a Hill": "Label für Old-Vine Chenin Blanc (zwei Weine mit 5 Sternen bei Platter's 2025). Herkunft und Team sind hier nicht durch eine Quelle gesichert.",
  "David Finlayson": "David Finlayson, Sohn der Winzerlegende Walter Finlayson, auf dem Familiengut Edgebaston in Stellenbosch. Camino Africana ist seine Spitzen-Linie (Cabernet Franc mit 5 Sternen bei Platter's 2025).",
  "De Grendel": "Weingut der Familie Graaff in Durbanville mit Blick auf den Tafelberg. Rubáiyát ist der Bordeaux-Blend; dazu Lagen im kühlen Elim und auf dem Ceres-Plateau („Op die Berg“).",
  "Delheim": "Familie Sperling am Simonsberg (Stellenbosch). Spatz Sperling war einer der Pioniere der Stellenbosch-Weinroute (1971); der edelsüße Edelspatz ist ein Klassiker.",
  "Erika Obermeyer": "Erika Obermeyer gründete 2016 ihr eigenes Label in Stellenbosch, nach vielen Jahren als Kellermeisterin bei Graham Beck. Mitglied der Cape Winemakers Guild; ihr Syrah-Grenache-Cinsault ist Platter's 2025 Wine of the Year.",
  "Glen Heatlie": "Kleines Label von Joan Heatlie. Der Grenache Blanc „The Frontier“ (nur wenige Hundert bis gut tausend Flaschen je Jahrgang) wurde Platter's 2025 Wine of the Year.",
  "Groot Phesantekraal": "Familienweingut in Durbanville. Marizanne ist der Spitzen-Sauvignon (5 Sterne bei Platter's 2025).",
  "Hogan": "Jocelyn Hogan Wilson, früher Kellermeisterin bei Bartho Eksteen, gründete ihr kleines Label in Stellenbosch. Chenin, Chardonnay und Carignan von ausgewählten Lagen.",
  "Holden Manz": "Boutique-Weingut in Franschhoek von Gerard Holden und Migo Manz. Reserve-Weine aus Merlot und Cabernet Franc; der Merlot Reserve ist Platter's 2025 Wine of the Year.",
  "Journey's End": "Familie Gabb (aus England) am Sir-Lowry's-Pass oberhalb von Somerset West (Stellenbosch). Ad Infinitum ist der weiße Bordeaux-Blend.",
  "Julien Schaal": "Julien Schaal, Winzer aus dem Elsass, erzeugt seit Jahren Chardonnay und Pinot Noir an der kühlen Cape South Coast. Mountain Vineyards Pinot Noir 2023: Platter's 2025 Wine of the Year. Genaue Lage nicht gesichert.",
  "KWV": "1918 als Winzergenossenschaft gegründet, heute einer der größten Wein- und Brandyerzeuger des Landes mit Sitz in Paarl. Die Mentors-Linie umfasst die Spitzenweine; Perold ist nach Abraham Perold benannt, der 1925 den Pinotage kreuzte.",
  "Belle Rebelle": "„Le Belle Rebelle“ von Mariëtte Stofberg (Breedekloof): Cap Classique „Mariëtte“ Chardonnay, 2017 mit fünf Sternen bei Platter's 2025, dazu der „CapeSecco“ aus Chenin Blanc (Hidden Gem).",
  "La Bri": "Weingut im Franschhoek-Tal (Robertsvlei), Teil der Gruppe um Leopard's Leap. Sauvage La Bri (Cap Classique) und Barrel Select Chardonnay erhielten 5 Sterne bei Platter's 2025.",
  "Lanzerac": "Historisches Gut (1692) im Jonkershoek-Tal (Stellenbosch) mit Hotel. Lanzerac brachte den ersten Pinotage mit Sortenangabe auf den Markt (Jg. 1959); Pionier und Commemorative sind die Spitzen-Pinotages.",
  "Longridge": "Biologisch bewirtschaftetes Weingut am Helderberg (Stellenbosch). Spitzenweine sind der Chardonnay Clos du Ciel und der rote Bordeaux-Blend Ekliptika.",
  "Miles Mossop": "Miles Mossop war lange Kellermeister bei Tokara und führt sein eigenes Label in Stellenbosch. Die Weine tragen die Namen seiner Kinder (Max, Saskia, Kika, Sam); der Noble Late Harvest Kika ist Platter's 2025 Wine of the Year.",
  "Momento": "Marelise Niemann gründete Momento in Bot River (Walker Bay). Spezialistin für Grenache und Chenin; Grenache Gris und Chenin-Verdelho wurden beide Platter's 2025 Wine of the Year.",
  "Mulderbosch": "Weingut in Stellenbosch (Koelenhof), bekannt für Sauvignon Blanc, Rosé und Old-Vine Chenin („Steen op Hout“).",
  "Muratie": "Eines der ältesten Güter am Simonsberg (Stellenbosch), seit 1987 im Besitz der Familie Melck. Martin Melck ist der Spitzen-Cabernet.",
  "Neil Ellis": "Neil Ellis war einer der ersten Négociants Südafrikas. Heute führen seine Söhne das Haus in Jonkershoek (Stellenbosch); Spezialität sind Lagenweine wie Rodanos und Whitehall.",
  "Nitida": "Familie Veller in Durbanville. Kühle Lagen, bekannt für Sauvignon Blanc und den weißen Bordeaux-Blend Coronata Integration.",
  "Nuy": "Winzerkeller in Nuy bei Worcester (Breede River Valley). Der aufgespritete Barbieri Idro 2016 ist Platter's 2025 Wine of the Year bei den Dessertweinen.",
  "Old Road Wine Co.": "Weinmarke in Franschhoek mit Fokus auf alte Rebanlagen. Der Sémillon Grand-Mère erhielt 5 Sterne bei Platter's 2025.",
  "Sakkie Mouton": "Junger Winzer mit eigenem Label an der Westküste und im Swartland (Herkunft nicht abschließend gesichert). Dawn Of The Salty Tongues erhielt 5 Sterne bei Platter's 2025.",
  "Swartberg Wingerde": "Projekt von Winemaker Rudiger Gretschel. Der Garnacha 2023 (Linie „Holism“) stammt aus dem Piekenierskloof und wurde Platter's 2025 Wine of the Year Grenache.",
  "Terra Loci": "Neues, lagenfokussiertes Projekt der Winzer Johann Fourie und Bertus Fourie mit europäischen Partnern: je Region die Leitrebsorte (Pinot Noir in Walker Bay, Chenin im Swartland, Grenache Blanc in Paarl, Chardonnay in Elgin). Platter's 2025 Newcomer Winery of the Year.",
  "The Giant Periwinkle": "Kleines Weingut an der Cape South Coast nahe der Atlantikküste. Wind Scorpion (Sauvignon Blanc) erhielt 5 Sterne bei Platter's 2025.",
  "The Vinoneers": "Erzeuger des No. 42 Cape Red Blend 2022, Platter's 2025 Wine of the Year bei den Blends mit Pinotage. Hintergrund hier nicht durch eine Quelle gesichert.",
  "Trizanne Signature Wines": "Trizanne Barnard, früher Kellermeisterin bei Klein Constantia, gründete ihr eigenes Label mit Fokus auf kühle Küstenlagen, u. a. Elim."
};

// ---------- WEINE ----------
// Kurzschreibweise: W(typ, weingut, wein, region, rebsorte, beschreibung, extras)
const wines = [];
function W(c, p, w, r, g, n, x) { wines.push(Object.assign({ c, p, w, r, g, n }, x || {})); }

// Abkürzungen für Auszeichnungstexte
const P25 = "Platter's 2025", P26 = "Platter's 2026";
const S5 = (j, ed) => `${ed || P25}: 5 Sterne (95+) — Jg. ${j}`;
const H94 = j => `${P25}: Highly Recommended (94) — Jg. ${j}`;
const WY = (cat, j, ed) => `${ed || P25}: Wine of the Year ${cat} — Jg. ${j}`;
const J = (...a) => a.join(' · ');

// ======================= TOP 100 ROT =======================
W('rot','Sadie Family Wines','Columella','swa','Syrah-Blend','Der Referenz-Rotwein des neuen Südafrikas: Syrah mit Mourvèdre, Grenache, Cinsault und Tinta Barocca von Schiefer und Granit. Erster Jahrgang 2000, extrem langlebig.',{pts:100,aw:J("Atkin 2026: Overall Red Wine of the Year — Jg. 2024, 100 Pkt. (auch 2019 mit 100 Pkt.)",S5(2022))});
W('rot','Porseleinberg','Syrah','swa','Syrah','Puristischer Schiefer-Syrah: Beton, große Foudres, kein neues Holz. Würzig, floral, mit kühler, steiniger Länge.',{pts:100,aw:J("Atkin 2025: 100 Pkt. — Jg. 2023","Atkin 2026: 98 Pkt.",S5(2022))});
W('rot','Leeuwenkuil','Heritage Syrah','swa','Syrah','Aus den besten Swartland-Parzellen des Hauses. Dicht, seidig, dunkle Frucht und Fynbos-Würze.',{pts:99,aw:WY('Shiraz/Syrah','2022, 99 Pkt. (Rekordwert)',P26)});
W('rot','Boschkloof','Epilogue Syrah','stb','Syrah','Ganztrauben-Anteil, kühle Polkadraai-Lage. Pfeffer, Veilchen, fein gewobenes Tannin.',{pts:98,aw:J("Atkin 2026: 98 Pkt. — Jg. 2024",S5(2022))});
W('rot','Jordan Wine Estate','Sophia','stb','Bordeaux-Blend','Spitzen-Blend aus Cabernet Sauvignon und Merlot, ursprünglich für die Cape Winemakers Guild Auction. Klassisch, präzise, langlebig.',{pts:98,aw:"Atkin 2026: 98 Pkt. — Jg. 2022"});
W('rot','Rall Wines','Ava Syrah','swa','Syrah','Syrah von Schiefer und Granit. Elegant, kühl, mit Graphit und roter Frucht.',{pts:98,aw:J("Atkin 2026: 98 Pkt. (laut Berichten zur 98er-Liste)",S5(2023))});
W('rot','Van Loggerenberg','Graft Syrah','stb','Syrah','Minimal-Intervention, viel Ganztraube. Saftig, duftig, mit großer Spannung. Genaue Herkunft der Trauben nicht gesichert.',{pts:98,u:true,aw:"Atkin 2026: 98 Pkt. — Jg. 2025"});
W('rot','Kanonkop','Paul Sauer','stb','Bordeaux-Blend','Cabernet Sauvignon mit Cabernet Franc und Merlot, offen in Betonbottichen vergoren, 2 Jahre in neuem Holz. Südafrikas klassischster Lagerwein.',{aw:J("Ikone: Jg. 2015 war Atkins erste 100-Punkte-Bewertung in der Neuen Welt",H94(2021))});
W('rot','Anysbos','Tesame','hea','Rotwein-Blend','Mediterran geprägter Blend aus Bot River – zwei Jahre in Folge der beste „Other Red Blend“ bei Platter\'s. Zusammensetzung nicht gesichert.',{u:true,aw:J(WY('Red Blend „Other“',2023,P26),WY('Red Blend „Other“',2022))});
W('rot','Raats Family Wines','Vlag Cabernet Franc','stb','Cabernet Franc','Raats\' Spitzen-Cabernet-Franc: Bleistift, rote Johannisbeere, Kräuter, große Feinheit.',{aw:J(WY('Cabernet Franc',2023,P26)+' (nur in einer Quelle genannt)',S5(2022))});
W('rot','Raats Family Wines','Cabernet Franc','stb','Cabernet Franc','Der „normale“ Cabernet Franc des Hauses – 2025 trotzdem der beste Cabernet Franc des Landes bei Platter\'s.',{aw:WY('Cabernet Franc',2022)});
W('rot','Oldenburg Vineyards','Per Se','stb','Cabernet Sauvignon','Einzellagen-Cabernet aus dem hoch gelegenen Banghoek. Cassis, Graphit, straffes Tannin.',{aw:WY('Cabernet Sauvignon',2022,P26)});
W('rot','Simonsig','The Garland Cabernet Sauvignon','stb','Cabernet Sauvignon','Einzellagen-Cabernet vom Simonsig-Gut, nur in Spitzenjahren erzeugt.',{aw:WY('Cabernet Sauvignon',2020)});
W('rot','Constantia Glen','Five','con','Bordeaux-Blend','Alle fünf Bordeaux-Sorten von den kühlen Constantiaberg-Hängen. Elegant, frisch, mit feiner Kräuternote.',{aw:J(WY('Cape Bordeaux Red',2022,P26),S5(2021))});
W('rot','Buitenverwachting','Christine','con','Bordeaux-Blend','Constantias legendärer Cabernet-Blend, lange im Keller gereift, bevor er freigegeben wird.',{aw:WY('Cape Bordeaux Red',2017)});
W('rot','Tokara','Limited Release Pinotage','stb','Pinotage','Moderner, frischer Pinotage von den Höhenlagen des Helshoogte-Passes.',{aw:WY('Pinotage',2023,P26)});
W('rot','Diemersdal','The Journal Pinotage','dur','Pinotage','Die Prestige-Pinotage des Hauses aus den ältesten Parzellen, im Barrique ausgebaut.',{aw:J(WY('Pinotage',2022),S5(2023,P26))});
W('rot','Saronsberg','Shiraz','tul','Shiraz','Reifer, dichter, würziger Shiraz aus dem Tulbagh-Bergkessel.',{aw:WY('Shiraz/Syrah',2022)});
W('rot','Holden Manz','Merlot Reserve','fhk','Merlot','Dichter, samtiger Franschhoek-Merlot. Auch der Cabernet Franc Reserve 2021 erhielt 5 Sterne.',{aw:WY('Merlot',2021)});
W('rot','Leeu Passant','Wellington Old Vines Basson Cinsault','paarl','Cinsault','Cinsault von einer sehr alten, historischen Rebanlage in Wellington. Duftig, seidig, transparent.',{aw:WY('Cinsault',2022)});
W('rot','Swartberg Wingerde','Garnacha','oli','Grenache','„Holism“ Garnacha aus alten Piekenierskloof-Reben, 2025 der beste Grenache des Landes bei Platter\'s.',{aw:WY('Grenache Noir',2023)});
W('rot','Julien Schaal','Mountain Vineyards Pinot Noir','csc','Pinot Noir','Pinot Noir von kühlen Berglagen, 2025 der beste Pinot Noir bei Platter\'s. Genaue Lage nicht gesichert.',{u:true,aw:WY('Pinot Noir',2023)});
W('rot','The Vinoneers','No. 42 Cape Red Blend','wcape','Cape Blend (mit Pinotage)','Cape Blend mit Pinotage-Anteil. Herkunft nicht gesichert.',{u:true,aw:WY('Red Blend mit Pinotage',2022)});
W('rot','Erika Obermeyer','Syrah-Grenache Noir-Cinsault','wcape','Rhône-Blend','Rhône-Blend aus Syrah, Grenache und Cinsault. Herkunft der Trauben nicht gesichert.',{u:true,aw:WY('Red Blend Shiraz/Syrah-basiert',2021)});
W('rot','Crystallum','Mabalel Pinot Noir','csc','Pinot Noir','Einzellagen-Pinot von der Cape South Coast (Ward nicht gesichert). Duftig, mineralisch, seidig.',{u:true,aw:WY('Pinot Noir',2024,P26)});
W('rot','Kanonkop','Black Label Pinotage','stb','Pinotage','Von Buschreben aus dem Jahr 1953. Der teuerste und berühmteste Pinotage der Welt: konzentriert, langlebig.',{aw:S5(2022)});
W('rot','Vergelegen','V','stb','Cabernet Sauvignon','Einzellagen-Cabernet aus Somerset West, nur in besten Jahren. Kraftvoll und poliert.',{pts:95,aw:J("Atkin 2026: 95 Pkt. — Jg. 2024",H94(2019))});
W('rot','Lismore Estate Vineyards','Syrah','csc','Syrah','Kühler, pfeffriger Syrah aus Greyton, oft mit einem Tropfen Viognier.',{aw:"Atkin 2026: Winery of the Year (Weingut-Auszeichnung)"});
W('rot','Storm Wines','Ignis Pinot Noir','hea','Pinot Noir','Vom Hemel-en-Aarde Ridge: dunkelfruchtiger, strukturierter als die anderen Storm-Lagen.',{aw:"Hannes Storm = Atkin Winemaker of the Year 2026"});
W('rot','Hamilton Russell Vineyards','Pinot Noir','hea','Pinot Noir','Von steinigen Schieferton-Böden: straff, erdig, burgundisch – seit Jahrzehnten der Maßstab.',{aw:J(H94(2023),"HRV = Platter's 2025 Editor's Award Winery of the Year")});
W('rot','Meerlust','Rubicon','stb','Bordeaux-Blend','Seit 1980: Cabernet, Merlot und Cabernet Franc. Ein Klassiker mit Zedernholz, Cassis und erdiger Tiefe.');
W('rot','Sadie Family Wines','Pofadder','swa','Cinsault','Aus der Old Vine Series: Cinsault von alten Buschreben, leicht, duftig, transparent.',{aw:S5(2023)});
W('rot','Sadie Family Wines','Soldaat','oli','Grenache','Grenache von über 1.000 m hohen Bergweinbergen in Piekenierskloof. Kühl, floral, seidig.',{aw:H94(2023)});
W('rot','Sadie Family Wines','Treinspoor','swa','Tinta Barocca','Tinta Barocca von einer alten Parzelle an der Bahnlinie („Treinspoor“). Würzig, dunkelfruchtig.',{aw:H94(2023)});
W('rot','Mullineux','Signature Syrah','swa','Syrah','Der Swartland-Syrah des Hauses, verschnitten aus Schiefer-, Granit- und Eisensteinlagen.',{aw:S5(2022)});
W('rot','Mullineux','Schist Syrah','swa','Syrah','Syrah von Schieferböden in Kasteelberg: kühl, mineralisch, duftig.');
W('rot','Mullineux','Iron Syrah','swa','Syrah','Syrah von eisenhaltigen Böden: dunkel, kraftvoll, mit fester Struktur.',{aw:H94(2022)});
W('rot','Boekenhoutskloof','Syrah','paarl','Syrah','Einer der ikonischen Syrahs des Landes (Lagen in Wellington). Dicht, würzig, langlebig.',{aw:S5(2022)});
W('rot','Boekenhoutskloof','Stellenbosch Cabernet Sauvignon','stb','Cabernet Sauvignon','Cabernet aus Stellenbosch-Lagen. Kraftvoll, mit Bordeaux-Struktur.',{aw:S5(2022)});
W('rot','Le Riche','Cabernet Sauvignon Reserve','stb','Cabernet Sauvignon','Klassischer, ausgewogener Stellenbosch-Cabernet mit großer Lagerfähigkeit. Bei Platter\'s 2025 vier Le-Riche-Cabernets mit 5 Sternen.',{aw:S5(2021)});
W('rot','Thelema Mountain Vineyards','Cabernet Sauvignon','stb','Cabernet Sauvignon','Der Cabernet mit der typischen Minz-Eukalyptus-Note und Cassis-Tiefe.',{aw:S5(2021)});
W('rot','Thelema Mountain Vineyards','The Mint Cabernet Sauvignon','stb','Cabernet Sauvignon','Einzellagen-Cabernet, benannt nach der ausgeprägten Minznote dieser Parzelle.',{aw:S5(2022)});
W('rot','Rustenberg','Peter Barlow','stb','Cabernet Sauvignon','Einzellagen-Cabernet vom Simonsberg, benannt nach dem Patriarchen der Familie.',{aw:S5(2021)});
W('rot','Tokara','Reserve Cabernet Sauvignon','stb','Cabernet Sauvignon','Reserve-Cabernet von den Höhenlagen am Helshoogte-Pass.',{aw:S5(2021)});
W('rot','Muratie','Martin Melck Cabernet Sauvignon','stb','Cabernet Sauvignon','Spitzen-Cabernet vom Simonsberg, benannt nach dem historischen Besitzer Martin Melck.',{aw:S5(2021)});
W('rot','Beyerskloof','Eerste Ry Cabernet Sauvignon','stb','Cabernet Sauvignon','Cabernet aus der „ersten Reihe“ (Eerste Ry) des Weinbergs.',{aw:S5(2020)});
W('rot','Waterford','Library Collection Cabernet Sauvignon','stb','Cabernet Sauvignon','Lang im Keller gereifter Cabernet, erst spät freigegeben.',{aw:S5(2015)});
W('rot','Warwick','Cabernet Franc','stb','Cabernet Franc','Warwick pflanzte als eines der ersten Güter Cabernet Franc als Sortenwein. Floral, würzig, elegant.',{aw:S5(2021)});
W('rot','Oldenburg Vineyards','Cabernet Franc','stb','Cabernet Franc','Cabernet Franc aus dem kühlen Banghoek.',{aw:S5(2022)});
W('rot','Botanica','Big Flower Cabernet Franc','stb','Cabernet Franc','Cabernet Franc von Ginny Povall aus dem Devon Valley.',{aw:S5(2022)});
W('rot','David Finlayson','Camino Africana Cabernet Franc','stb','Cabernet Franc','Spitzen-Cabernet-Franc aus der Camino-Africana-Linie.',{aw:S5(2022)});
W('rot','Bellevue','1953 Pinotage','stb','Pinotage','Von Pinotage-Reben aus dem Jahr 1953 – einer der ältesten Pinotage-Weinberge der Welt.',{aw:S5(2021)});
W('rot','Kaapzicht','Steytler Pinotage','stb','Pinotage','Spitzen-Pinotage der Familie Steytler aus dem Bottelary.',{aw:S5(2021)});
W('rot','Lanzerac','Pionier Pinotage','stb','Pinotage','Erinnert an den ersten etikettierten Pinotage (Lanzerac 1959).',{aw:S5(2021)});
W('rot','KWV','Perold','paarl','Cape Blend (mit Pinotage)','Pinotage-basierter Blend, benannt nach Abraham Perold, dem „Vater“ des Pinotage.',{aw:S5(2021)});
W('rot','Diemersdal','Pinotage Reserve','dur','Pinotage','Unbewässerte Buschreben in Durbanville. Dunkle Beeren, Mokka, saftig.',{aw:J(S5(2024,P26),H94(2023))});
W('rot','Beeslaar','Pinotage','stb','Pinotage','Pinotage im Burgunder-Stil von alten Stellenbosch-Reben: rote Kirsche, feine Würze, mehr Eleganz als Kraft.',{aw:"Atkin 2026: 98 Pkt. für Beeslaar „The Sacrament“ 2023"});
W('rot','Alto','MPHS','stb','Bordeaux-Blend','Spitzen-Blend aus Bordeaux-Sorten vom Helderberg, lange im Keller gereift.',{aw:S5(2018)});
W('rot','Hartenberg','The Mackenzie','stb','Bordeaux-Blend','Cabernet-betonter Blend aus dem Bottelary.',{aw:S5(2020)});
W('rot','Babylonstoren','Nebukadnesar','paarl','Bordeaux-Blend','Fünf-Sorten-Blend vom berühmten Gartengut bei Simondium.',{aw:S5(2022)});
W('rot','De Grendel','Rubáiyát','dur','Bordeaux-Blend','Bordeaux-Blend aus Durbanville.',{aw:S5(2020)});
W('rot','Neil Ellis','Rodanos','stb','Rhône-Blend','Syrah-basierter Blend mit Grenache und Mourvèdre.',{u:true,aw:S5(2021)});
W('rot','Boschendal','Black Angus','fhk','Rotwein-Blend (Syrah-basiert)','Syrah-basierter Spitzen-Blend vom historischen Boschendal-Gut.',{aw:S5(2021)});
W('rot','Ernie Els Wines','Proprietor\'s Blend','stb','Rotwein-Blend','Cabernet-basierter Blend vom Helderberg.',{aw:S5(2021)});
W('rot','Fairview','Caldera','paarl','Rhône-Blend','Grenache-Syrah-Mourvèdre von alten Reben, eines der ersten Rhône-Blends am Kap.',{u:true,aw:S5(2022)});
W('rot','Fairview','The Beacon Shiraz','paarl','Shiraz','Lagen-Shiraz vom Paarl Mountain.',{aw:S5(2021)});
W('rot','Cederberg','Shiraz','oli','Shiraz','Höhenlagen-Shiraz aus über 1.000 m: frisch, pfeffrig, straff.',{aw:S5(2021)});
W('rot','Stark-Condé','Stellenbosch Syrah','stb','Syrah','Syrah aus Jonkershoek-Lagen: kühl, würzig, präzise.',{aw:S5(2022)});
W('rot','Rust en Vrede','Estate Vineyards Syrah','stb','Syrah','Syrah von den eigenen Helderberg-Lagen.',{aw:S5(2022)});
W('rot','Scions of Sinai','Swanesang','stb','Syrah','Syrah von Bernhard Bredell, auf Granit am Helderberg gewachsen.',{u:true,aw:S5(2023)});
W('rot','Sakkie Mouton','Dawn Of The Salty Tongues','swa','Shiraz','Kühler, salziger Shiraz von küstennahen Lagen.',{u:true,aw:S5(2023)});
W('rot','Trizanne Signature Wines','Elim Syrah','csc','Syrah','Cool-Climate-Syrah aus dem windigen Elim nahe Cape Agulhas.',{aw:S5(2023)});
W('rot','Savage Wines','Thief In The Night','wcape','Grenache','Grenache aus kühlen Lagen: hell, duftig, saftig.',{u:true,aw:S5(2023)});
W('rot','Shannon','The Shannon Black Merlot','elg','Merlot','Spitzen-Merlot aus Elgin.',{aw:S5(2020)});
W('rot','Oak Valley','Tabula Rasa PN114 Pinot Noir','elg','Pinot Noir','Klon-Abfüllung (PN114) aus Elgin: kühl, präzise.',{aw:S5(2021)});
W('rot','Delaire Graff','Botmanskop','stb','Bordeaux-Blend','Cabernet-basierter Blend von der namensgebenden Bergkuppe am Helshoogte-Pass.');
W('rot','Rust en Vrede','1694 Classification','stb','Shiraz-Cabernet','Opulenter, kraftvoller Shiraz-Cabernet-Blend; einer der Kultweine des Landes.');
W('rot','Keermont','Amphitheatre','stb','Rotwein-Blend','Rotwein-Blend aus dem amphitheaterförmigen Hochtal des Guts: kühl, würzig, elegant.');
W('rot','Glenelly','Lady May','stb','Cabernet Sauvignon','Bordelaiser Handschrift: feinkörniges Tannin, Zeder, dunkle Frucht. (Platter\'s 2025: „Glenelly Red 2018“ mit 5 Sternen.)');
W('rot','Ernie Els Wines','Signature','stb','Bordeaux-Blend','Kraftvoller, polierter Cabernet-Blend vom Helderberg.');
W('rot','Storm Wines','Vrede Pinot Noir','hea','Pinot Noir','Aus dem Hemel-en-Aarde Valley: duftig, rotbeerig, filigran.');
W('rot','Newton Johnson','Family Vineyards Pinot Noir','hea','Pinot Noir','Aus dem Upper Hemel-en-Aarde: duftig, mineralisch, Granit-Lehm-geprägt.');
W('rot','Crystallum','Cuvée Cinéma Pinot Noir','hea','Pinot Noir','Pinot aus dem Hemel-en-Aarde Ridge: kühl, floral, präzise.',{aw:H94(2023)});
W('rot','Restless River','Le Luc Pinot Noir','hea','Pinot Noir','Kleiner Upper-Hemel-en-Aarde-Pinot mit großer Tiefe und Finesse.',{aw:H94(2022)});
W('rot','Bouchard Finlayson','Galpin Peak Pinot Noir','hea','Pinot Noir','Seit den 1990ern ein Klassiker: erdig, rotbeerig, burgundisch.');
W('rot','Creation','Reserve Pinot Noir','hea','Pinot Noir','Vom Hemel-en-Aarde Ridge: reife Kirsche, feine Würze, seidige Textur.');
W('rot','Richard Kershaw','Elgin Syrah','elg','Syrah','Cool-Climate-Syrah aus Elgin: Pfeffer, Veilchen, straffe Säure.');
W('rot','Paul Cluver','Seven Flags Pinot Noir','elg','Pinot Noir','Elgins bekanntester Pinot: duftig, rotfruchtig, elegant.');
W('rot','Shannon','Mount Bullet Merlot','elg','Merlot','Einer der bekanntesten Merlots des Landes, aus Elgin: dicht, samtig, frisch.');
W('rot','Vilafonté','Series C','paarl','Bordeaux-Blend','Cabernet-betonter Blend aus Simonsberg-Paarl, kalifornisch-südafrikanische Handschrift.');
W('rot','Warwick','Trilogy','stb','Bordeaux-Blend','Einer der ersten Bordeaux-Blends Südafrikas vom Simonsberg.');
W('rot','De Toren','Fusion V','stb','Bordeaux-Blend','Fünf-Sorten-Blend aus den Polkadraai Hills, per Schwerkraft verarbeitet.');
W('rot','Reyneke','Reserve Red','stb','Syrah','Biodynamischer Syrah: würzig, lebendig, mit großer Reinheit.');
W('rot','A.A. Badenhorst Family Wines','Family Red','swa','Rhône-Blend','Shiraz, Cinsault, Grenache und Tinta Barocca vom Paardeberg – unkompliziert-tiefgründig.');
W('rot','Rall Wines','Rall Red','swa','Rhône-Blend','Syrah-basierter Blend mit Grenache und Carignan: saftig, frisch, elegant.',{aw:H94(2022)});
W('rot','David & Nadia','Grenache','swa','Grenache','Grenache von alten Swartland-Buschreben: hell, duftig, mit Kräuterwürze.',{aw:H94(2023)});
W('rot','Savage Wines','Follow the Line','wcape','Cinsault','Cinsault-betonter, frischer Rotwein aus kühlen Lagen.',{aw:H94(2023)});
W('rot','Stark-Condé','Three Pines Cabernet Sauvignon','stb','Cabernet Sauvignon','Von steilen Granitlagen im Jonkershoek: frisch, kühl, langlebig.');
W('rot','Kleine Zalze','Family Reserve Cabernet Sauvignon','stb','Cabernet Sauvignon','Dichter, reifer Stellenbosch-Cabernet mit viel Holzfeinheit.');
W('rot','Tokara','Director\'s Reserve Red','stb','Bordeaux-Blend','Cabernet-basierter Blend aus den Höhenlagen von Tokara.',{aw:H94(2021)});
W('rot','Longridge','Ekliptika','stb','Bordeaux-Blend','Das rote Flaggschiff vom Helderberg: Cabernet-Franc-betonter Blend (2020: 39 % Cabernet Franc, dazu Cabernet Sauvignon, Merlot, Petit Verdot). Rote und schwarze Beeren, florales Parfum, Kräuter, Graphit.',{aw:'winemag.co.za: 94/100 — Jg. 2020 · Tim Atkin: 94 Pkt. — Jg. 2015'});

// ======================= TOP 100 WEISS =======================
W('weiss','Alheit Vineyards','Huilkrans Chenin Blanc','oli','Chenin Blanc','Alte Chenin-Reben in den Bergen von Citrusdal: konzentriert und doch schwerelos, salzig, endlos lang.',{pts:99,aw:J("Atkin 2026: Overall White Wine of the Year — Jg. 2025, 99 Pkt.",S5(2023))});
W('weiss','Alheit Vineyards','Magnetic North Chenin Blanc','oli','Chenin Blanc','Hochgelegene, wurzelechte Chenin-Buschreben. Kultwein mit Zitrus, Honig, Stein und vibrierender Säure.',{pts:100,aw:J("Atkin 2025: 100 Pkt. — Jg. 2024","Atkin 2026: 98 Pkt. — Jg. 2025",S5(2023))});
W('weiss','Botanica','Mary Delany Chenin Blanc','stb','Chenin Blanc','Old-Vine Chenin mit großer Spannung, Quitte, Wachs und kreidiger Textur.',{pts:99,aw:J(WY('Chenin Blanc','2024, 99 Pkt. (Rekordwert)',P26),S5(2023))});
W('weiss','Scions of Sinai','Granietsteen Old Vine Chenin Blanc','stb','Chenin Blanc','Alte Reben auf Granit am Helderberg, Ausbau in Ton und Holz. Straff, salzig, kraftvoll.',{pts:98,aw:J("Atkin 2026: 98 Pkt. — Jg. 2025",S5(2023))});
W('weiss','Boekenhoutskloof','Semillon','fhk','Sémillon','Aus über 100 Jahre alten Franschhoek-Reben. Lanolin, Zitrus, Wachs – lagerfähig wie großer Graves.',{pts:98,aw:J("Atkin 2026: 98 Pkt. — Jg. 2024",WY('Semillon',2022))});
W('weiss','Iona','Elgin Highlands Chardonnay','elg','Chardonnay','Chardonnay aus den Elgin Highlands: kühl, zitrisch, fein, mit langer Spannung.',{aw:WY('Chardonnay',2022)});
W('weiss','Stellenrust','Old Bushvine Secrets & Lies Chenin Blanc','stb','Chenin Blanc','Chenin von alten Buschreben – 2025 der beste Chenin Blanc des Landes bei Platter\'s.',{aw:WY('Chenin Blanc',2023)});
W('weiss','Diemersdal','Wild Horseshoe Sauvignon Blanc','dur','Sauvignon Blanc','Sauvignon Blanc aus Durbanville – 2025 der beste des Landes bei Platter\'s.',{u:true,aw:WY('Sauvignon Blanc',2023)});
W('weiss','Constantia Glen','Two','con','Sauvignon-Sémillon','Weißer Bordeaux-Blend aus Constantia: Sauvignon Blanc und Sémillon mit Holzausbau.',{aw:WY('Cape Bordeaux White',2022)});
W('weiss','Momento','Chenin Blanc-Verdelho','hea','White Blend','Chenin mit der seltenen portugiesischen Sorte Verdelho – frisch, salzig, texturreich.',{aw:WY('White Blend „Other“',2023)});
W('weiss','Thorne & Daughters','Tin Soldier','wcape','Sémillon Gris','Seltener Weißwein aus der rotschaligen Mutation Sémillon Gris, mit Schalenkontakt.',{aw:WY('Semillon Gris',2023)});
W('weiss','Momento','Grenache Gris','hea','Grenache Gris','Rarität: Grenache Gris von alten Reben, reinsortig ausgebaut.',{aw:WY('Grenache Gris',2023)});
W('weiss','Glen Heatlie','The Frontier Grenache Blanc','oli','Grenache Blanc','Grenache Blanc aus dem Piekenierskloof mit einem kleinen Anteil Swartland-Chenin, im großen alten Fass vergoren; 2025 der beste seiner Kategorie bei Platter\'s.',{aw:WY('Grenache Blanc',2023)});
W('weiss','Crystallum','Clay Shales Chardonnay','hea','Chardonnay','Chardonnay von Tonschiefer: straff, salzig, burgundisch.',{u:true,aw:WY('Chardonnay',2024,P26)});
W('weiss','Steenberg','Magna Carta','con','Sauvignon-Sémillon','Holzgereifter Bordeaux-White-Blend, im Stil eines großen weißen Pessac-Léognan.',{aw:WY('Cape Bordeaux White',2023,P26)});
W('weiss','Mullineux','Roundstone White','swa','White Blend','Chenin-basierter Lagen-Blend aus dem Swartland.',{aw:J(WY('White Blend „Other“',2024,P26),S5(2023))});
W('weiss','Sadie Family Wines','Palladius','swa','White Blend','Der Archetyp des Cape White Blend: Chenin, Grenache Blanc, Clairette, Viognier, Roussanne u. a. von alten Reben.',{aw:H94(2022)});
W('weiss','Sadie Family Wines','Mev. Kirsten','stb','Chenin Blanc','Aus einer der ältesten Chenin-Parzellen des Landes (Stellenbosch). Tiefgründig, ehrfürchtig.',{aw:S5(2023)});
W('weiss','Sadie Family Wines','Skurfberg','oli','Chenin Blanc','Chenin von hochgelegenen Buschreben auf Sandstein im Olifants-River-Gebiet.',{aw:S5(2023)});
W('weiss','Sadie Family Wines','Kokerboom','oli','Sémillon','Sémillon von alten Reben am Olifants River.',{aw:S5(2023)});
W('weiss','Sadie Family Wines','Rotsbank','wcape','Chenin Blanc','Chenin aus der Old Vine Series. Lage hier nicht gesichert.',{u:true,aw:S5(2023)});
W('weiss','Sadie Family Wines','Skerpioen','swa','Chenin / Palomino','Aus der Old Vine Series: Chenin und Palomino von Kalk nahe der Atlantikküste. Salzig, frisch.',{aw:H94(2023)});
W('weiss','Sadie Family Wines','’T Voetpad','swa','Field Blend','Uralter gemischter Satz (Sémillon, Chenin, Palomino, Muscat) – historische Rarität.');
W('weiss','Hamilton Russell Vineyards','Chardonnay','hea','Chardonnay','Einer der besten Chardonnays der Südhalbkugel: straff, mineralisch, lagerfähig.',{aw:S5(2023)});
W('weiss','Alheit Vineyards','Cartology','wcape','Chenin-Sémillon','Chenin mit Sémillon von alten Reben aus mehreren Regionen – der „Atlas“ des Kap-Chenins.',{aw:S5(2023)});
W('weiss','Alheit Vineyards','Nautical Dawn Chenin Blanc','wcape','Chenin Blanc','Chenin von einer alten Einzellage. Lage hier nicht gesichert.',{u:true,aw:S5(2023)});
W('weiss','Alheit Vineyards','Hemelrand Vine Garden','hea','White Blend','Feldmischung vom eigenen Weinberg Hemelrand im Hemel-en-Aarde.',{aw:S5(2023)});
W('weiss','Vergelegen','Estate White','stb','Sauvignon-Sémillon','Lagerfähiger Bordeaux-White-Blend aus Somerset West (früher GVB White).',{pts:95,aw:"Atkin 2026: 95 Pkt. — Jg. 2025"});
W('weiss','Jordan Wine Estate','Timepiece Sauvignon Blanc','stb','Sauvignon Blanc','Komplexer, holzberührter Sauvignon aus der Stellenbosch Kloof.',{pts:95,aw:"Atkin 2026: 95 Pkt. — Jg. 2025"});
W('weiss','Storm Wines','Chardonnay','hea','Chardonnay','Präziser, lagenfokussierter Chardonnay aus dem Hemel-en-Aarde.',{aw:"Hannes Storm = Atkin Winemaker of the Year 2026"});
W('weiss','Lismore Estate Vineyards','Reserve Chardonnay','csc','Chardonnay','Spannungsreicher, langer Chardonnay aus Greyton.',{aw:"Atkin 2026: Winery of the Year (Weingut-Auszeichnung)"});
W('weiss','Richard Kershaw','Clonal Selection Elgin Chardonnay','elg','Chardonnay','Klon-selektierter Cool-Climate-Chardonnay: Zitrus, Feuerstein, Spannung.',{aw:S5(2022)});
W('weiss','Richard Kershaw','Kogelberg Sandstone CY76 Chardonnay','csc','Chardonnay','Klon CY76 von Sandstein im Kogelberg – eine der „Deconstructed“-Abfüllungen.',{u:true,aw:S5(2022)});
W('weiss','Iona','Kloof Chardonnay','elg','Chardonnay','Einzellagen-Chardonnay aus Iona.',{aw:S5(2022)});
W('weiss','Oak Valley','Groenlandberg Chardonnay','elg','Chardonnay','Lagen-Chardonnay vom Groenlandberg in Elgin.',{aw:S5(2023)});
W('weiss','Paul Cluver','Estate Chardonnay','elg','Chardonnay','Der Estate-Chardonnay des Elgin-Pioniers.',{aw:S5(2022)});
W('weiss','Rustenberg','Five Soldiers Chardonnay','stb','Chardonnay','Einzellagen-Chardonnay vom Simonsberg.',{aw:S5(2022)});
W('weiss','Delaire Graff','Terraced Block Reserve Chardonnay','stb','Chardonnay','Chardonnay von terrassierten Höhenlagen am Helshoogte-Pass.',{aw:S5(2023)});
W('weiss','Neil Ellis','Whitehall Chardonnay','elg','Chardonnay','Lagen-Chardonnay aus Elgin.',{u:true,aw:S5(2022)});
W('weiss','Bouchard Finlayson','Kaaimansgat Crocodile\'s Lair Chardonnay','csc','Chardonnay','Chardonnay von einer hochgelegenen Lage im Elandskloof (Overberg).',{u:true,aw:S5(2023)});
W('weiss','Hogan','The Galvanised Chardonnay','stb','Chardonnay','Chardonnay von Jocelyn Hogan Wilson.',{u:true,aw:S5(2023)});
W('weiss','Cap Maritime','Chardonnay','hea','Chardonnay','Chardonnay aus dem Upper Hemel-en-Aarde (Boekenhoutskloof-Gruppe).',{aw:S5(2023)});
W('weiss','Terra Loci','Fé Chardonnay','elg','Chardonnay','Elgin-Chardonnay des Newcomers 2025 – mit maximaler Fünf-Sterne-Wertung beim Debüt.',{aw:J(S5(2022),"Terra Loci = Platter's 2025 Newcomer Winery of the Year")});
W('weiss','Vergelegen','Reserve Chardonnay','stb','Chardonnay','Reserve-Chardonnay aus Somerset West.',{aw:S5(2023)});
W('weiss','Benguela Cove','Vinography Chardonnay','hea','Chardonnay','Kühler, maritimer Chardonnay von der Bot-River-Lagune.',{aw:S5(2023)});
W('weiss','Longridge','Clos du Ciel Chardonnay','stb','Chardonnay','Biologischer Spitzen-Chardonnay vom Helderberg.',{aw:S5(2022)});
W('weiss','Kleine Zalze','Family Reserve Chenin Blanc','stb','Chenin Blanc','Opulenter, mehrfach preisgekrönter Holz-Chenin.',{aw:S5(2023)});
W('weiss','Kleine Zalze','Family Reserve Sauvignon Blanc','stb','Sauvignon Blanc','Reserve-Sauvignon aus Stellenbosch.',{aw:S5(2023)});
W('weiss','Kaapzicht','The 1947 Chenin Blanc','stb','Chenin Blanc','Von 1947 gepflanzten Buschreben im Bottelary.',{aw:S5(2023)});
W('weiss','Mullineux','Granite Chenin Blanc','swa','Chenin Blanc','Chenin von Granit am Paardeberg: kühl, salzig, druckvoll.',{aw:S5(2023)});
W('weiss','Raats Family Wines','Eden Chenin Blanc','stb','Chenin Blanc','Einzellagen-Chenin von Bruwer Raats.',{aw:S5(2023)});
W('weiss','Rall Wines','Noa Chenin Blanc','swa','Chenin Blanc','Chenin von Donovan Rall.',{u:true,aw:S5(2023)});
W('weiss','David & Nadia','Hoë-Steen Chenin Blanc','swa','Chenin Blanc','Einzellagen-Chenin von alten Swartland-Buschreben.',{aw:S5(2023)});
W('weiss','David & Nadia','Rondevlei Chenin Blanc','swa','Chenin Blanc','Einzellagen-Chenin aus dem Swartland.',{aw:S5(2023)});
W('weiss','Stellenrust','59 Barrel Fermented Chenin Blanc','stb','Chenin Blanc','Im Fass vergorener Chenin von alten Reben.',{aw:S5(2023)});
W('weiss','Mulderbosch','Old Vine Steen Op Hout','stb','Chenin Blanc','Old-Vine Chenin („Steen“), im Holz ausgebaut („op hout“).',{aw:S5(2023)});
W('weiss','Gabriëlskloof','Elodie Chenin Blanc','swa','Chenin Blanc','Chenin der „Landscape Series“ des Bot-River-Guts, aber aus alten Swartland-Reben (W.O. Swartland); benannt nach einer Schwester von Gründer Bernhard Heyns.',{aw:S5(2023)});
W('weiss','Creation','Cool Climate Chenin Blanc','hea','Chenin Blanc','Chenin aus kühlen Lagen im Hemel-en-Aarde Ridge.',{aw:S5(2023)});
W('weiss','Spice Route','Tarragon Chenin Blanc','swa','Chenin Blanc','Spitzen-Chenin aus dem Swartland.',{u:true,aw:S5(2023)});
W('weiss','Nederburg','The Anchorman Chenin Blanc','paarl','Chenin Blanc','Chenin-Spitzenwein des historischen Paarl-Hauses.',{aw:S5(2023)});
W('weiss','Bellingham','Cape Town Old Vine Chenin Blanc','wcape','Chenin Blanc','Chenin von alten Reben im Großraum Kapstadt.',{u:true,aw:S5(2023)});
W('weiss','City on a Hill','Old Vine Chenin Blanc','wcape','Chenin Blanc','Old-Vine Chenin; Lage nicht gesichert.',{u:true,aw:S5(2023)});
W('weiss','Klein Constantia','Perdeblokke Sauvignon Blanc','con','Sauvignon Blanc','Einzellagen-Sauvignon von hochgelegenen Constantia-Lagen.',{aw:S5(2023)});
W('weiss','Strandveld','Pofadderbos Sauvignon Blanc','csc','Sauvignon Blanc','Einzellage nahe Cape Agulhas: kühl, kräuterig, mineralisch.',{aw:S5(2023)});
W('weiss','Diemersdal','The Journal Sauvignon Blanc','dur','Sauvignon Blanc','Prestige-Sauvignon aus Durbanville, im Holz ausgebaut.',{aw:J(S5(2023),"Platter's 2026: vier Diemersdal-Sauvignons mit 5 Sternen")});
W('weiss','Groot Phesantekraal','Marizanne Sauvignon Blanc','dur','Sauvignon Blanc','Spitzen-Sauvignon aus Durbanville.',{aw:S5(2023)});
W('weiss','The Giant Periwinkle','Wind Scorpion Sauvignon Blanc','csc','Sauvignon Blanc','Windgepeitschter Küsten-Sauvignon.',{aw:S5(2023)});
W('weiss','Thorne & Daughters','Snakes & Ladders Sauvignon Blanc','wcape','Sauvignon Blanc','Texturreicher Sauvignon von alten Reben.',{u:true,aw:S5(2023)});
W('weiss','Thorne & Daughters','Paper Kite Semillon','wcape','Sémillon','Sémillon von alten Reben, fein und wachsig.',{aw:S5(2023)});
W('weiss','Old Road Wine Co.','Grand-Mère Semillon','fhk','Sémillon','Sémillon von sehr alten Franschhoek-Reben („Großmutter“).',{aw:S5(2022)});
W('weiss','Leeu Passant','Franschhoek Semillon','fhk','Sémillon','Sémillon von historischen Franschhoek-Lagen.',{aw:S5(2022)});
W('weiss','Savage Wines','Savage White','wcape','Sauvignon-Sémillon','Sauvignon-Sémillon aus kühlen, maritimen Lagen: präzise, salzig.',{aw:S5(2023)});
W('weiss','Nitida','Coronata Integration','dur','Sauvignon-Sémillon','Weißer Bordeaux-Blend aus Durbanville.',{aw:S5(2023)});
W('weiss','Journey\'s End','Ad Infinitum','stb','Sauvignon-Sémillon','Weißer Bordeaux-Blend vom Sir-Lowry\'s-Pass.',{aw:S5(2022)});
W('weiss','Keermont','Terrasse','stb','White Blend','Chenin-basierter White Blend von Terrassenlagen.',{u:true,aw:S5(2023)});
W('weiss','Stark-Condé','The Field Blend','stb','White Blend','Weißer gemischter Satz aus Jonkershoek.',{aw:S5(2023)});
W('weiss','Thelema Mountain Vineyards','Sutherland Viognier-Roussanne','elg','Viognier-Roussanne','Rhône-White-Blend vom Thelema-Ableger Sutherland in Elgin.',{aw:S5(2023)});
W('weiss','Fairview','Beryl Back','paarl','White Blend','Trockener White Blend aus Chenin, Viognier, Verdelho und Roussanne (nicht zu verwechseln mit dem süßen La Beryl).',{aw:S5(2023)});
W('weiss','Cape Point Vineyards','Isliedh','con','Sauvignon-Sémillon','Komplexer, holzgereifter Sauvignon-Sémillon aus Atlantiknähe.',{aw:H94(2023)});
W('weiss','Thorne & Daughters','Rocking Horse','wcape','White Blend','Feiner, texturreicher White Blend aus mehreren Regionen.',{aw:H94(2023)});
W('weiss','Mullineux','Old Vines White','swa','White Blend','Chenin-basierter Blend mit Clairette, Viognier und Sémillon Gris.',{aw:H94(2023)});
W('weiss','David & Nadia','Aristargos','swa','White Blend','Chenin-basierter White Blend mit Viognier, Clairette, Sémillon.',{aw:H94(2023)});
W('weiss','Rall Wines','Rall White','swa','White Blend','Chenin-basierter Blend mit Verdelho, Chardonnay und Viognier.',{aw:H94(2023)});
W('weiss','Tokara','Director\'s Reserve White','stb','Sauvignon-Sémillon','Weißer Bordeaux-Blend aus Tokaras Höhenlagen.',{aw:H94(2021)});
W('weiss','Reyneke','Reserve White','stb','Sauvignon Blanc','Biodynamisch, holzgereift, mit gewachsener Spannung.',{aw:H94(2022)});
W('weiss','Cederberg','Five Generations Chenin Blanc','oli','Chenin Blanc','Holzgereifter Chenin aus über 1.000 m Höhe.',{aw:H94(2023)});
W('weiss','Ken Forrester','The FMC Chenin Blanc','stb','Chenin Blanc','„Forrester Meinert Chenin“: reif, botrytisberührt, früher Botschafter des Premium-Chenins.',{aw:H94(2023)});
W('weiss','Raats Family Wines','Old Vine Chenin Blanc','stb','Chenin Blanc','Chenin von alten Reben: straff, mineralisch.',{aw:H94(2023)});
W('weiss','Beaumont','Hope Marguerite Chenin Blanc','hea','Chenin Blanc','Old-Vine Chenin aus Bot River: Quitte, Wachs, feine Säure.',{aw:H94(2023)});
W('weiss','Opstal','Carl Everson Chenin Blanc','brv','Chenin Blanc','Old-Vine Chenin aus dem Slanghoek-Tal (Breedekloof).',{aw:H94(2023)});
W('weiss','Van Loggerenberg','Kameraderie Chenin Blanc','stb','Chenin Blanc','Chenin mit minimalen Eingriffen.',{aw:H94(2023)});
W('weiss','Jordan Wine Estate','Nine Yards Chardonnay','stb','Chardonnay','Barrique-Chardonnay, regelmäßig unter den besten des Landes.',{aw:H94(2023)});
W('weiss','Creation','The Art of Chardonnay','hea','Chardonnay','Die Spitzen-Selektion von Creation.',{aw:H94(2023)});
W('weiss','Steenberg','The Black Swan Sauvignon Blanc','con','Sauvignon Blanc','Einzellagen-Sauvignon aus Constantia.',{aw:H94(2023)});
W('weiss','Chamonix','Reserve Chardonnay','fhk','Chardonnay','Einer der etablierten Spitzen-Chardonnays des Landes.');
W('weiss','Ataraxia','Chardonnay','hea','Chardonnay','Kraftvoll und kühl zugleich, mit nussiger Tiefe.');
W('weiss','Newton Johnson','Family Vineyards Chardonnay','hea','Chardonnay','Upper Hemel-en-Aarde: straff, zitrisch, fein.');
W('weiss','A.A. Badenhorst Family Wines','Family White','swa','White Blend','Paardeberg-Feldmischung auf Chenin-Basis – prägend für die Swartland-Revolution.');
W('weiss','De Wetshof','Bateleur Chardonnay','brv','Chardonnay','Kalkböden, Barrique: Südafrikas Chardonnay-Pionier.');
W('weiss','Restless River','Ava Marie Chardonnay','hea','Chardonnay','Kleiner, präziser Upper-Hemel-en-Aarde-Chardonnay.');

// ======================= TOP 25 CAP CLASSIQUE =======================
W('cc','Graham Beck','Cuvée Clive','brv','Chardonnay / Pinot Noir','Prestige-Cuvée mit langer Hefelagerung: Brioche, Zitrus, feine Perlage.',{pts:97,aw:J("Atkin 2025: Overall Sparkling Wine of the Year — Jg. 2019, 97 Pkt.",S5(2019,P26))});
W('cc','Graham Beck','Cuvée Clive X','brv','Chardonnay / Pinot Noir','Extra lange gereifte Version der Cuvée Clive.',{pts:96,aw:"Platter's 2026: 96 Pkt. — Jg. 2015 (höchster Schaumwein der Ausgabe)"});
W('cc','Le Lude','Brut (Magnum)','fhk','Chardonnay / Pinot Noir','Aus der Magnumflasche, mit Zweitgärung unter Agrafe: komplex, cremig.',{pts:96,aw:"Platter's 2026: 96 Pkt. — Jg. 2015 (höchster Schaumwein der Ausgabe)"});
W('cc','Silverthorn','Jewel Box','brv','Chardonnay / Pinot Noir','Jahrgangs-Cap-Classique mit langer Hefelagerung.',{u:true,aw:J(WY('Cap Classique',2019,P26),S5(2019))});
W('cc','Charles Fox','Prestige Cuvée Cipher Blanc de Noirs','elg','Pinot Noir / Pinot Meunier','Blanc de Noirs aus Elgin, lange auf der Hefe gereift.',{u:true,aw:WY('Cap Classique',2018)});
W('cc','Steenberg','Lady R','con','Chardonnay / Pinot Noir','Jahrgangs-Brut aus Constantia, die Prestige-Cuvée des Hauses.',{u:true,aw:"Amorim Cap Classique Challenge 2025: Gesamtsieger — Jg. 2019"});
W('cc','Colmant','Absolu Zero Dosage','fhk','Chardonnay','Reiner Chardonnay ohne Dosage: straff, kreidig, kompromisslos.',{aw:J(S5('NV',P26),S5('NV'))});
W('cc','Anthonij Rupert','L\'Ormarins Blanc de Blancs','fhk','Chardonnay','Reiner Chardonnay, fein und präzise.',{u:true,aw:J(S5(2021,P26),S5(2019))});
W('cc','Waterford','Blanc de Blancs','stb','Chardonnay','Lang gereifter Blanc de Blancs aus Stellenbosch.',{aw:J(S5(2018,P26),S5(2017))});
W('cc','Silverthorn','Mad as the Mist and Snow Brut Nature','brv','Chardonnay','Brut Nature für die Cape Winemakers Guild Auction.',{u:true,aw:S5(2019,P26)});
W('cc','Pieter Ferreira','Blanc de Blancs','brv','Chardonnay','Persönliches Projekt von „Bubbles“ Ferreira: reiner Chardonnay, lange gereift.',{u:true,aw:J(S5(2019,P26),H94(2018))});
W('cc','Newstead','Lund Blanc de Blancs','csc','Chardonnay','Blanc de Blancs von der Garden Route bei Plettenberg Bay.',{aw:S5(2018,P26)});
W('cc','JC le Roux','Scintilla','stb','Chardonnay / Pinot Noir','Lang gereifte Prestige-Cuvée.',{aw:S5(2016,P26)});
W('cc','Graham Beck','Pinot Meunier','brv','Pinot Meunier','Rarität: reinsortiger Pinot Meunier als Cap Classique.',{aw:S5(2022)});
W('cc','Colmant','Blanc de Blancs','fhk','Chardonnay','Der Blanc de Blancs des Hauses, ohne Jahrgang.',{aw:S5('NV')});
W('cc','Domaine des Dieux','Anna Louise Cuvée Blanc de Blancs','hea','Chardonnay','Sehr lang gereifter Blanc de Blancs aus dem kühlen Hemel-en-Aarde.',{u:true,aw:S5(2012)});
W('cc','Belle Rebelle','Chardonnay','brv','Chardonnay','„Mariëtte“ Chardonnay Brut, lang gereifter Blanc de Blancs aus dem Breedekloof.',{aw:S5(2017)});
W('cc','La Bri','Sauvage La Bri','fhk','Chardonnay','Blanc de Blancs Cap Classique aus Franschhoek.',{aw:S5(2018)});
W('cc','Spier','Prestige Cuvée','stb','Chardonnay / Pinot Noir','Lang gereifte Prestige-Cuvée.',{u:true,aw:S5(2016)});
W('cc','Graham Beck','Blanc de Blancs Brut','brv','Chardonnay','Jahrgangs-Blanc-de-Blancs von Robertsons Kalkböden.',{aw:J("Amorim Cap Classique Challenge 2025: Kategoriesieger Blanc de Blancs — Jg. 2019",H94(2019))});
W('cc','Kleine Zalze','Brut Rosé','stb','Pinot Noir / Chardonnay','Lachsfarben, rotbeerig, frisch.',{aw:"Amorim Cap Classique Challenge 2025: Kategoriesieger Rosé — NV"});
W('cc','Villiera','Monro Brut','stb','Chardonnay / Pinot Noir','Lang gereifte Prestige-Cuvée.',{aw:H94(2017)});
W('cc','Le Lude','Madáme Brut Nature Millésimé','fhk','Chardonnay / Pinot Noir','Jahrgangs-Brut-Nature ohne Dosage.',{aw:H94(2015)});
W('cc','Pieter Ferreira','Birdsong Extra Brut','brv','Chardonnay / Pinot Noir','Extra Brut aus Ferreiras eigener Linie.',{u:true,aw:H94(2019)});
W('cc','Boschendal','Grande Cuvée Brut','fhk','Chardonnay / Pinot Noir','Jahrgangs-Prestige-Cuvée des historischen Guts.',{aw:H94(2017)});

// ======================= SÜSS / FORTIFIED =======================
W('suess','Klein Constantia','Vin de Constance','con','Muscat de Frontignan','Unbotrytisierter Süßwein aus am Stock getrockneten Muskateller-Trauben. Ab 1986 wiederbelebt; das historische Original priesen Napoleon, Jane Austen und Baudelaire.',{aw:WY('Natural Sweet',2021)});
W('suess','Mullineux','Straw Wine','swa','Chenin Blanc','Auf Stroh getrocknete Chenin-Trauben. Konzentriert, frisch, regelmäßig hoch bewertet.',{aw:WY('Vin de Paille',2023)});
W('suess','Miles Mossop','Kika Noble Late Harvest','stb','Chenin Blanc','Edelsüßer Wein aus Stellenbosch, wie alle Mossop-Weine nach einem seiner Kinder benannt.',{u:true,aw:WY('Noble Late Harvest',2023)});
W('suess','Nuy','Barbieri Idro','brv','Dessertwein (aufgespritet)','Aufgespriteter Dessertwein mit langer Reife.',{u:true,aw:WY('Dessert Wine, Fortified',2016)});
W('suess','Bergsig','Cape Late Bottled Vintage','brv','Portwein-Stil','Portwein-Stil aus dem Breedekloof, lange im Fass gereift.',{aw:WY('Port-Style',2018)});
W('suess','Boplaas','Cape Vintage Reserve','kk','Touriga Nacional / Tinta Barocca','Südafrikas Antwort auf Vintage Port.',{aw:S5(2022)});
W('suess','De Krans','Cape Vintage Reserve','kk','Touriga Nacional / Tinta Barocca','Zweiter Referenzerzeuger für Cape Vintage.',{aw:S5(2022)});
W('suess','Boekenhoutskloof','Noble Late Harvest','fhk','Sémillon','Edelsüßer Sémillon aus Franschhoek.',{aw:S5(2021)});
W('suess','Delheim','Edelspatz Noble Late Harvest','stb','Riesling','Edelsüßer Botrytis-Riesling vom Simonsberg, ein Klassiker.',{aw:S5(2022)});
W('suess','Keermont','Fleurfontein','stb','Chenin Blanc','Vin de Paille aus getrockneten Trauben.',{u:true,aw:S5(2023)});
W('suess','Nederburg','Edelkeur','paarl','Chenin Blanc','1969 der erste edelsüße Botrytiswein Südafrikas.');

// =============================================
// ERGÄNZUNG: alle weiteren Fünf-Sterne-Weine aus Platter's 2025 (Printausgabe)
// add:true → werden hinter die bisherigen Preisträger der jeweiligen Kategorie einsortiert
// =============================================
Object.assign(producers, {
  "ArtiSons": "Handwerkliche Linie des Weinguts Stellenrust (Bottelary, Stellenbosch) mit drei Fünf-Sterne-Weinen bei Platter's 2025: The Phantom Grenache, Blueberry Hill Shiraz (von einem rund 34 Jahre alten Shiraz-Block) und The Mothership Chenin.",
  "Almenkerk": "Weingut der belgischen Familie van Almenkerk in Elgin. Kühle Höhenlagen, Chardonnay und Syrah.",
  "Bartinney": "Kleines Weingut hoch im Banghoek-Tal (Stellenbosch), bekannt für Cabernet Sauvignon und Chardonnay; der Hourglass Chardonnay erhielt 5 Sterne.",
  "Bloemendal": "Eines der ältesten Güter in Durbanville. Suider Terras ist eine Sauvignon-Blanc-Einzellage.",
  "Brookdale": "Weingut in Paarl (Klein Drakenstein) mit zwei Fünf-Sterne-White-Blends bei Platter's 2025.",
  "Callender Peak": "Hochgelegene Weinberge in den Winterhoek-Bergen (Region nicht abschließend gesichert). Chardonnay und Sauvignon Blanc mit großer Frische – beide 5 Sterne bei Platter's 2025.",
  "Capensis": "Chardonnay-Projekt der kalifornischen Jackson-Familie (Kendall-Jackson) mit Antony Beck. Fijnbosch ist eine Einzellage.",
  "Carinus": "Familienweingut Carinus in Stellenbosch mit Lagen u. a. in den Polkadraai Hills (nicht gesichert).",
  "De Kleine Wijn": "De Kleine Wijn Koop, kleiner Erzeuger, dessen Franschhoek-Sémillon „Debutant“ (Wit) 5 Sterne erhielt.",
  "De Trafford": "David Trafford, ausgebildeter Architekt, bewirtschaftet hoch oben im Blaauwklippen-Tal (Stellenbosch) ein kleines Weingut. Elevation 393 ist nach der Lagenhöhe benannt; der maischevergorene Chenin erhielt 5 Sterne.",
  "Donkiesbaai": "Marke mit Fokus auf Chenin Blanc aus Höhenlagen (Piekenierskloof); Hooiwijn ist ein Strohwein (Vin de Paille). Hintergrund nicht abschließend gesichert.",
  "Dorrance": "Stadtweingut im Zentrum von Kapstadt, gegründet vom Franzosen Christophe Durand. Cuvée Anaïs ist der Spitzen-Chardonnay.",
  "Draaiboek": "Erzeuger mit zwei Fünf-Sterne-Chardonnays (Kinkel, Onskuld). Lage und Hintergrund hier nicht durch eine Quelle gesichert.",
  "Eenzaamheid": "Familienweingut der Familie Briers-Louw in Agter-Paarl. Cinsault, Shiraz und Malbec von trocken bewirtschafteten Lagen.",
  "Francois van Niekerk": "Erzeuger eines Fünf-Sterne-Pinotage bei Platter's 2025. Hintergrund hier nicht durch eine Quelle gesichert.",
  "Great Heart": "Weinmarke mit Weinen aus Franschhoek, Stellenbosch und dem Swartland (Cabernet Franc Franschhoek: 5 Sterne). Hintergrund nicht abschließend gesichert.",
  "Harry Hartman": "Erzeuger des Bordeaux-Blends Mosi (5 Sterne). Hintergrund hier nicht durch eine Quelle gesichert.",
  "Hermanuspietersfontein": "Weingut in Hermanus (Walker Bay) mit Lagen im kühlen Sondagskloof. Bekannt für Bordeaux-Sorten; Swartskaap ist der Cabernet Franc.",
  "Idun": "Erzeuger des Rotwein-Blends Carmélite (5 Sterne). Hintergrund hier nicht durch eine Quelle gesichert.",
  "Kara-Tara": "Linie des Stellenbosch-Weinguts Stark-Condé für Pinot Noir und Chardonnay von kühlen Lagen (Elgin/Cape South Coast).",
  "Keet": "Kellermeister Chris Keet (früher Cordoba) mit seinem eigenen Label in Stellenbosch; First Verse ist ein Bordeaux-Blend.",
  "Klein Goederust": "Weingut in Franschhoek von Paul Siguqa, eines der ersten Weingüter des Tals in schwarzem Besitz.",
  "Le Sueur": "Kleines Label mit Old-Vine Chenin Blanc (Kluisenaar: 5 Sterne bei Platter's 2025). Hintergrund hier nicht durch eine Quelle gesichert.",
  "Lievland": "Historisches Gut an der Grenze von Stellenbosch und Paarl, neu belebt mit Old-Vine Chenin.",
  "McFarlane": "Kleiner Erzeuger, dessen Chenin Monday's Child 5 Sterne bei Platter's 2025 erhielt. Hintergrund hier nicht durch eine Quelle gesichert.",
  "MVH": "Erzeuger des Pinot Noir „Signature“ (5 Sterne). Hintergrund hier nicht durch eine Quelle gesichert.",
  "Nico van der Merwe": "Nico van der Merwe, langjähriger Kellermeister in Stellenbosch, mit seinem eigenen Label (Mas Nicolas).",
  "Noble Hill": "Weingut in Simonsberg-Paarl; Simonskop ist der Spitzen-Chenin.",
  "Pilgrim": "Erzeuger eines Fünf-Sterne-Chenin. Hintergrund hier nicht durch eine Quelle gesichert.",
  "Rainbow's End": "Familienweingut der Malans im Banghoek-Tal (Stellenbosch), spezialisiert auf Bordeaux-Sorten, besonders Cabernet Franc.",
  "Rickety Bridge": "Weingut in Franschhoek; Paulina's Reserve ist die Spitzenlinie.",
  "Ridgeback": "Weingut in Paarl, bekannt für Cabernet Franc und Rhône-Sorten.",
  "Riebeek Valley": "Winzerkeller in Riebeek-Kasteel (Swartland). Die „Raar“-Linie umfasst ungewöhnliche Weine wie Kohlensäure-Maischegärung-Shiraz und Grenache Blanc.",
  "Saga": "„Saga Vineyards“ bündelt seit 2024 die Labels Patatsfontein und Sons of Sugarland von Winemaker Reenen Borman (Boschkloof) und seinen Partnern Henk Kotze und Fritz Schoon.",
  "Stellenbosch Vineyards": "Großer Erzeuger in Stellenbosch; die Credo-Linie umfasst die Spitzenweine (Shiraz und Chenin mit 5 Sternen bei Platter's 2025).",
  "Stony Brook": "Familienweingut in Franschhoek; Ghost Gum ist der Spitzen-Cabernet.",
  "Survivor": "Weinmarke mit einem Fünf-Sterne-Pinotage (Reserve). Hintergrund nicht abschließend gesichert.",
  "The Vineyard Party": "Erzeuger des Sémillon „Daisy If You Do“ (5 Sterne). Die Herkunft wechselt je Jahrgang: 2022 Stellenbosch Kloof, 2023 Bot River, ab 2024 Swartland.",
  "Thistle & Weed": "Kleines Label in Stellenbosch, das Weine nach heimischen Unkräutern benennt (Khakibos, Brandnetel, Duwweltjie).",
  "Van Wyk": "Erzeuger des Rotwein-Blends Rebecca May (5 Sterne). Hintergrund hier nicht durch eine Quelle gesichert.",
  "Vinevenom": "Erzeuger eines maischevergorenen Chenin (Skin). Hintergrund hier nicht durch eine Quelle gesichert.",
  "Vriesenhuijs": "Erzeuger eines Fünf-Sterne-Sauvignon-Blancs. Hintergrund hier nicht durch eine Quelle gesichert.",
  "Wellington Wines": "Genossenschaftskeller in Wellington; La Cave ist die Spitzenlinie.",
  "Whalehaven": "Weingut im Hemel-en-Aarde Valley bei Hermanus; Seascape ist ein Chardonnay.",
  "Zevenwacht": "Historisches Gut in Kuils River (Stellenbosch) mit Blick auf die False Bay. Die Z-Collection umfasst die Spitzenweine.",
  "Zorgvliet": "Weingut im Banghoek-Tal (Stellenbosch) mit Fokus auf Bordeaux-Sorten.",
});
const A = (c, p, w, r, g, j, x) => W(c, p, w, r, g, (x && x.n) || '', Object.assign({ add:true, aw:S5(j) }, x || {}));
// ---- ROT ----
A('rot','Great Heart','Franschhoek Cabernet Franc','fhk','Cabernet Franc',2022,{n:'Cabernet Franc aus Franschhoek.'});
A('rot','Hermanuspietersfontein','Swartskaap Cabernet Franc','hea','Cabernet Franc',2020,{n:'Cabernet Franc aus kühlen Walker-Bay-Lagen (Sondagskloof).',u:true});
A('rot','Hogan','Mirror For The Sun Cabernet Franc','stb','Cabernet Franc',2023,{n:'Cabernet Franc von Jocelyn Hogan Wilson.',u:true});
A('rot','Holden Manz','Cabernet Franc Reserve','fhk','Cabernet Franc',2021,{n:'Reserve-Cabernet-Franc aus Franschhoek.'});
A('rot','KWV','The Mentors Cabernet Franc','paarl','Cabernet Franc',2021,{n:'Cabernet Franc aus der Spitzenlinie The Mentors.',u:true});
A('rot','Leeu Passant','CWG Auction Franschhoek Hillside Cabernet Franc','fhk','Cabernet Franc',2022,{n:'Cabernet Franc von einer Franschhoeker Hanglage, für die Cape Winemakers Guild Auction.'});
A('rot','Raats Family Wines','Eden Cabernet Franc','stb','Cabernet Franc',2022,{n:'Einzellagen-Cabernet-Franc von Bruwer Raats.'});
A('rot','Rainbow\'s End','Limited Release Cabernet Franc','stb','Cabernet Franc',2022,{n:'Cabernet Franc aus dem Banghoek.'});
A('rot','Ridgeback','Cabernet Franc','paarl','Cabernet Franc',2021,{n:'Cabernet Franc aus Paarl.'});
A('rot','Zorgvliet','Cabernet Franc','stb','Cabernet Franc',2022,{n:'Cabernet Franc aus dem Banghoek.'});
A('rot','Anthonij Rupert','Cabernet Sauvignon','fhk','Cabernet Sauvignon',2020,{n:'Cabernet Sauvignon aus der Anthonij-Rupert-Linie.',u:true});
A('rot','Benguela Cove','Wild At Heart Cabernet Sauvignon','hea','Cabernet Sauvignon',2021,{n:'Cabernet Sauvignon von Benguela Cove.',u:true});
A('rot','David Finlayson','GS Cabernet Sauvignon','stb','Cabernet Sauvignon',2022,{n:'Cabernet Sauvignon in der Tradition des legendären GS Cabernet (Edgebaston).',u:true});
A('rot','Diemersdal','The Journal Cabernet Sauvignon','dur','Cabernet Sauvignon',2022,{n:'Prestige-Cabernet aus Durbanville.'});
A('rot','Erika Obermeyer','Cabernet Sauvignon','stb','Cabernet Sauvignon',2020,{n:'Cabernet Sauvignon von Erika Obermeyer.',u:true});
A('rot','Le Riche','Cabernet Sauvignon','stb','Cabernet Sauvignon',2022,{n:'Der Stellenbosch-Cabernet des „Cabernet King“.'});
A('rot','Le Riche','Jonkershoek Cabernet Sauvignon','stb','Cabernet Sauvignon',2021,{n:'Cabernet aus dem kühlen Jonkershoek-Tal.'});
A('rot','Le Riche','CWG Auction Cabernet Sauvignon','stb','Cabernet Sauvignon',2020,{n:'Cabernet für die Cape Winemakers Guild Auction.'});
A('rot','Nico van der Merwe','Nico Cabernet Sauvignon','stb','Cabernet Sauvignon',2020,{n:'Cabernet Sauvignon von Nico van der Merwe.',u:true});
A('rot','Stellenrust','Reserve Cabernet Sauvignon','stb','Cabernet Sauvignon',2020,{n:'Reserve-Cabernet aus Stellenbosch.'});
A('rot','Stony Brook','Ghost Gum Cabernet Sauvignon','fhk','Cabernet Sauvignon',2021,{n:'Spitzen-Cabernet aus Franschhoek.'});
A('rot','Eenzaamheid','Cinsault','paarl','Cinsault',2023,{n:'Cinsault aus Agter-Paarl.'});
A('rot','Rickety Bridge','Paulina\'s Reserve Cinsault','fhk','Cinsault',2023,{n:'Cinsault aus der Reserve-Linie.'});
A('rot','ArtiSons','The Phantom Grenache','stb','Grenache',2022,{n:'Grenache Noir.',u:true});
A('rot','Shannon','The Shannon Black Merlot','elg','Merlot',2020,{skip:true});
A('rot','Villiera','Monro Merlot','stb','Merlot',2022,{n:'Merlot aus der Monro-Spitzenlinie.'});
A('rot','Bellevue','Reserve Collection Pinotage','stb','Pinotage',2021,{n:'Reserve-Pinotage aus dem Bottelary.'});
A('rot','De Grendel','Amandelboord Pinotage','dur','Pinotage',2023,{n:'Pinotage von der „Mandelhain“-Lage (Amandelboord).'});
A('rot','Francois van Niekerk','Pinotage','wcape','Pinotage',2022,{n:'Pinotage.',u:true});
A('rot','KWV','The Mentors Pinotage','paarl','Pinotage',2021,{n:'Pinotage aus der Spitzenlinie The Mentors.',u:true});
A('rot','Lanzerac','Commemorative Pinotage','stb','Pinotage',2020,{n:'Pinotage zur Erinnerung an den ersten etikettierten Pinotage.'});
A('rot','Survivor','Reserve Pinotage','wcape','Pinotage',2022,{n:'Reserve-Pinotage.',u:true});
A('rot','Wellington Wines','La Cave Pinotage','paarl','Pinotage',2021,{n:'Pinotage aus der Spitzenlinie La Cave.'});
A('rot','Kara-Tara','Reserve Pinot Noir','csc','Pinot Noir',2022,{n:'Reserve-Pinot Noir.',u:true});
A('rot','MVH','Signature Pinot Noir','wcape','Pinot Noir',2021,{n:'Pinot Noir.',u:true});
A('rot','ArtiSons','Blueberry Hill Shiraz','stb','Shiraz',2022,{n:'Shiraz von einem rund 34 Jahre alten Block.'});
A('rot','Bellingham','Basket Press Syrah','wcape','Syrah',2022,{n:'In der Korbpresse gepresster Syrah.',u:true});
A('rot','Carinus','Syrah','stb','Syrah',2023,{n:'Syrah der Familie Carinus.',u:true});
A('rot','Diemersdal','Reserve Syrah','dur','Syrah',2023,{n:'Reserve-Syrah aus Durbanville.'});
A('rot','Riebeek Valley','Raar Carbonic Shiraz','swa','Shiraz',2023,{n:'Shiraz aus Kohlensäuremaischung (carbonic maceration) – fruchtig, frisch.'});
A('rot','Saga','Sons of Sugarland Syrah','wcape','Syrah',2023,{n:'Syrah.',u:true});
A('rot','Stellenbosch Vineyards','Credo Shiraz','stb','Shiraz',2022,{n:'Shiraz aus der Credo-Spitzenlinie.'});
A('rot','Stellenrust','Peppergrinder\'s Shiraz','stb','Shiraz',2021,{n:'Würziger Shiraz („Pfeffermühle“).'});
A('rot','Harry Hartman','Mosi','wcape','Bordeaux-Blend',2021,{n:'Bordeaux-Blend.',u:true});
A('rot','Keet','First Verse','stb','Bordeaux-Blend',2021,{n:'Bordeaux-Blend von Chris Keet.'});
A('rot','Boschkloof','Conclusion','stb','Rotwein-Blend',2021,{n:'Rotwein-Blend der Bormans.',u:true});
A('rot','Ernie Els Wines','CWG Auction Blend','stb','Rotwein-Blend',2021,{n:'Blend für die Cape Winemakers Guild Auction.',u:true});
A('rot','Glenelly','Glenelly Red','stb','Rotwein-Blend',2018,{n:'Der Rotwein-Blend aus der Estate-Reserve-Linie (Name wie im Guide).',u:true});
A('rot','Idun','Carmélite','wcape','Rotwein-Blend',2022,{n:'Rotwein-Blend.',u:true});
A('rot','Van Wyk','Rebecca May','wcape','Rotwein-Blend',2022,{n:'Rotwein-Blend.',u:true});
// ---- WEISS ----
A('weiss','Almenkerk','Chardonnay','elg','Chardonnay',2022,{n:'Cool-Climate-Chardonnay aus Elgin.'});
A('weiss','Bartinney','Hourglass Chardonnay','stb','Chardonnay',2022,{n:'Höhenlagen-Chardonnay aus dem Banghoek.'});
A('weiss','Callender Peak','Chardonnay','wcape','Chardonnay',2023,{n:'Chardonnay aus Hochlagen in den Winterhoek-Bergen.',u:true});
A('weiss','Capensis','Fijnbosch Chardonnay','wcape','Chardonnay',2020,{n:'Einzellagen-Chardonnay des Jackson-Family-Projekts.',u:true});
A('weiss','Dorrance','Cuvée Anaïs Chardonnay','wcape','Chardonnay',2023,{n:'Chardonnay aus dem Stadtweingut in Kapstadt.',u:true});
A('weiss','Draaiboek','Kinkel Chardonnay','wcape','Chardonnay',2023,{n:'Chardonnay.',u:true});
A('weiss','Draaiboek','Onskuld Chardonnay','wcape','Chardonnay',2023,{n:'Chardonnay.',u:true});
A('weiss','Iona','Fynbos Chardonnay','elg','Chardonnay',2022,{n:'Einzellagen-Chardonnay aus Iona.'});
A('weiss','Kara-Tara','Chardonnay','csc','Chardonnay',2023,{n:'Chardonnay.',u:true});
A('weiss','Richard Kershaw','Lower Duivenhoks River Chardonnay','csc','Chardonnay',2021,{n:'Chardonnay vom Unterlauf des Duivenhoks-Flusses an der Südküste.',u:true});
A('weiss','La Bri','Barrel Select Chardonnay','fhk','Chardonnay',2023,{n:'Im Fass ausgebauter Chardonnay aus Franschhoek.'});
A('weiss','Oak Valley','Tabula Rasa CY548 Chardonnay','elg','Chardonnay',2021,{n:'Klon-Abfüllung (CY548) aus Elgin.'});
A('weiss','Whalehaven','Seascape Chardonnay','hea','Chardonnay',2021,{n:'Chardonnay aus dem Hemel-en-Aarde.',u:true});
A('weiss','ArtiSons','The Mothership Chenin Blanc','stb','Chenin Blanc',2023,{n:'Chenin Blanc.',u:true});
A('weiss','City on a Hill','Earth Chenin Blanc','wcape','Chenin Blanc',2023,{n:'Chenin Blanc.',u:true});
A('weiss','De Trafford','Skin Macerated Chenin Blanc','stb','Chenin Blanc',2023,{n:'Maischevergorener Chenin (Orange-Stil).'});
A('weiss','Hogan','Chenin Blanc','stb','Chenin Blanc',2023,{n:'Chenin von Jocelyn Hogan Wilson.',u:true});
A('weiss','Kaapzicht','Kliprug Chenin Blanc','stb','Chenin Blanc',2023,{n:'Chenin von einer steinigen Lage („Kliprug“) im Bottelary.'});
A('weiss','Le Sueur','Kluisenaar Chenin Blanc','wcape','Chenin Blanc',2023,{n:'Old-Vine Chenin.',u:true});
A('weiss','Lievland','Old Vine Chenin Blanc','stb','Chenin Blanc',2023,{n:'Old-Vine Chenin.',u:true});
A('weiss','McFarlane','Monday\'s Child Chenin Blanc','wcape','Chenin Blanc',2023,{n:'Chenin Blanc.',u:true});
A('weiss','Miles Mossop','CWG Auction Saskia-Jo Chenin Blanc','stb','Chenin Blanc',2022,{n:'Chenin für die Cape Winemakers Guild Auction.'});
A('weiss','Noble Hill','Simonskop Chenin Blanc','paarl','Chenin Blanc',2023,{n:'Spitzen-Chenin aus Simonsberg-Paarl.'});
A('weiss','Pilgrim','Chenin Blanc','wcape','Chenin Blanc',2023,{n:'Chenin Blanc.',u:true});
A('weiss','Saga','Patatsfontein Steen','kk','Chenin Blanc',2023,{n:'Einzellagen-Chenin („Steen“): 0,6 ha, 1984 gepflanzt, Schiefer auf rund 800 m im Keisie-Tal bei Montagu.'});
A('weiss','Stellenbosch Vineyards','Credo Chenin Blanc','stb','Chenin Blanc',2023,{n:'Chenin aus der Credo-Spitzenlinie.'});
A('weiss','Vinevenom','Skin Chenin Blanc','wcape','Chenin Blanc','NV',{n:'Maischevergorener Chenin.',u:true});
A('weiss','Zevenwacht','Z-Collection Chenin Blanc','stb','Chenin Blanc',2023,{n:'Chenin aus der Z-Collection.'});
A('weiss','Rall Wines','Grenache Blanc','swa','Grenache Blanc',2023,{n:'Grenache Blanc von Donovan Rall.'});
A('weiss','Riebeek Valley','Raar Grenache Blanc','swa','Grenache Blanc',2023,{n:'Grenache Blanc aus der Raar-Linie.'});
A('weiss','Callender Peak','Winterhoek Sauvignon Blanc','wcape','Sauvignon Blanc',2023,{n:'Hochlagen-Sauvignon aus den Winterhoek-Bergen.',u:true});
A('weiss','Bloemendal','Suider Terras Sauvignon Blanc','dur','Sauvignon Blanc',2018,{n:'Einzellagen-Sauvignon aus Durbanville, lange gereift.'});
A('weiss','Miles Mossop','Stellenbosch Sauvignon Blanc','stb','Sauvignon Blanc',2023,{n:'Sauvignon Blanc aus Stellenbosch.'});
A('weiss','Vriesenhuijs','Sauvignon Blanc','wcape','Sauvignon Blanc',2023,{n:'Sauvignon Blanc.',u:true});
A('weiss','Zevenwacht','Z-Collection Sauvignon Blanc','stb','Sauvignon Blanc',2023,{n:'Sauvignon aus der Z-Collection.'});
A('weiss','De Kleine Wijn','Debutant Wit','fhk','Sémillon',2023,{n:'Sémillon aus Franschhoek.'});
A('weiss','The Vineyard Party','Daisy If You Do','stb','Sémillon',2022,{n:'Sémillon, Jahrgang 2022 aus dem Stellenbosch Kloof.'});
A('weiss','Brookdale','Bradbourne','paarl','White Blend',2023,{n:'White Blend aus Paarl.',u:true});
A('weiss','Brookdale','Sixteen Field Blend','paarl','White Blend',2023,{n:'Gemischter Satz aus sechzehn Sorten (laut Name).',u:true});
A('weiss','Thistle & Weed','Khakibos','stb','White Blend',2023,{n:'White Blend, benannt nach einer heimischen Pflanze.',u:true});
// ---- CAP CLASSIQUE ----
// La Bri Sauvage La Bri ist bereits enthalten (Zuordnung wird über den Namensabgleich korrigiert)
// ---- SÜSS / FORTIFIED ----
A('suess','Klein Goederust','Chenin Blanc (Natural Sweet)','fhk','Chenin Blanc',2021,{n:'Natürlich süßer Chenin aus Franschhoek.'});
A('suess','Stellenrust','Chenin d\'Muscat','stb','Chenin / Muscat',2022,{n:'Natürlich süßer Wein aus Chenin und Muskateller.',u:true});
A('suess','Waterford','Library Collection Noble Late Harvest','stb','Viognier',2018,{n:'Edelsüßer Viognier, nur für Mitglieder der Waterford Society erhältlich.'});
A('suess','Donkiesbaai','Hooiwijn','oli','Chenin Blanc',2023,{n:'Strohwein (Vin de Paille) aus getrockneten Chenin-Trauben.',u:true});
A('suess','Mullineux','Olerasay 4°','swa','Chenin Blanc','NV',{n:'Solera-Strohwein (mehrere Jahrgänge verschnitten).'});
A('suess','Boplaas','Cape Tawny','kk','Portwein-Stil','NV',{n:'Tawny-Portwein-Stil aus Calitzdorp, lange im Fass gereift.'});
A('suess','KWV','Cape Tawny','paarl','Portwein-Stil','NV',{n:'Tawny-Portwein-Stil.'});

// doppelte Platzhalter entfernen (skip) und neue Weine hinter die Preisträger der Kategorie einsortieren
(function () {
  const isP = w => !!w.pts || /Wine of the Year|5 Sterne/.test(w.aw || '');
  const out = [];
  ['rot', 'weiss', 'cc', 'suess'].forEach(c => {
    const all = wines.filter(w => w.c === c && !w.skip), old = all.filter(w => !w.add), add = all.filter(w => w.add);
    let idx = -1; old.forEach((w, i) => { if (isP(w)) idx = i; });
    out.push(...old.slice(0, idx + 1), ...add, ...old.slice(idx + 1));
  });
  wines.length = 0; wines.push(...out);
})();
