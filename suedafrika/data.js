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
  "Craven Wines": "Mick und Jeanine Craven (er Australier, sie Südafrikanerin) gründeten ihr kleines Label in Stellenbosch nach Lehrjahren in Australien und Europa. Leichte, transparente Einzellagen-Weine mit wenig Eingriff.",
  "Creation": "2002 gegründet von Jean-Claude und Carolyn Martin (Schweizer Winzerfamilie) im Hemel-en-Aarde Ridge. Bekannt für Pinot Noir, Chardonnay und eine ausgeprägte Wein-und-Speisen-Kultur.",
  "Crystallum": "Gegründet 2007 von Peter-Allan Finlayson (Sohn von Peter Finlayson, Bouchard Finlayson). Einzellagen-Pinot-Noirs und -Chardonnays von der Cape South Coast; Platter's 2026 kürte Clay Shales (Chardonnay) und Mabalel (Pinot Noir) zu den besten ihrer Kategorie.",
  "David & Nadia": "David und Nadia Sadie (nicht verwandt mit Eben Sadie) gründeten 2010 ihr Label im Swartland. Sie gelten als Meister des Chenin Blanc und des Grenache von alten, trocken bewirtschafteten Buschreben; Aristargos ist ihr White Blend.",
  "De Krans": "Familie Nel (zweiter Zweig) in Calitzdorp, Klein Karoo. Neben Boplaas der zweite Referenzerzeuger für Cape-Vintage-Weine und Muskateller.",
  "De Toren": "Boutique-Weingut in den Polkadraai Hills (Stellenbosch), benannt nach dem Turm, in dem der Wein per Schwerkraft verarbeitet wird. Fusion V ist ein Fünf-Sorten-Bordeaux-Blend.",
  "De Trafford": "David Trafford, ausgebildeter Architekt, bewirtschaftet hoch oben im Blaauwklippen-Tal (Stellenbosch) ein kleines Weingut. Elevation 393 ist benannt nach der Höhe der Weinberge in Metern.",
  "De Wetshof": "Familie de Wet in Robertson. Danie de Wet war in den 1970er/80ern Südafrikas Chardonnay-Pionier; die Kalkböden des Robertson-Tals geben den Weinen Säure und Mineralik.",
  "DeMorgenzon": "Weingut in der Stellenboschkloof, bekannt dafür, dass in den Weinbergen Barockmusik gespielt wird. Chenin Blanc von alten Reben (Reserve) und der White Blend Maestro sind die Spitzen.",
  "Delaire Graff": "Seit 2003 im Besitz des Londoner Diamantenhändlers Laurence Graff, auf dem Helshoogte-Pass zwischen Stellenbosch und Franschhoek. Luxuriöse Lodge, Kunstsammlung und Spitzenweine von den höchsten Lagen des Passes (Banghoek).",
  "Diemersdal": "Familie Louw bewirtschaftet das Gut in Durbanville in sechster Generation; Thys Louw ist Kellermeister. Die unbewässerten Buschreben bringen intensive Sauvignon Blancs und Pinotages. Platter's 2026: „Top Performing Winery of the Year“ mit sechs Fünf-Sterne-Weinen.",
  "Domaine des Dieux": "Kleines Weingut im Hemel-en-Aarde Ridge, spezialisiert auf Cap Classique und Pinot Noir aus kühlen Lagen; die Prestige-Cuvée heißt Claudia.",
  "Eagles' Nest": "Steiles Weingut im Constantia-Tal, nach dem verheerenden Brand von 2000 neu bepflanzt. Bekannt für Shiraz, Merlot und Viognier in kühler Hanglage.",
  "Ernie Els Wines": "Weingut des südafrikanischen Golfprofis Ernie Els am Helderberg (Stellenbosch), seit 1999. Kraftvolle, polierte Cabernet-basierte Rotweine; der Signature ist das Flaggschiff.",
  "Fable Mountain": "Weingut am Fuß der Witzenberg-Berge in Tulbagh. Biologisch bewirtschaftet, Fokus auf Syrah und Rhône-Blends mit großer Frische.",
  "Fairview": "Familie Back in Paarl, seit 1937. Charles Back ist einer der einflussreichsten Weinunternehmer des Landes (Spice Route, Goats do Roam, Fairview-Käse). Pionier für Rhône-Sorten und Swartland-Trauben.",
  "Gabriëlskloof": "Weingut in Bot River (Walker Bay), an dem Peter-Allan Finlayson (Crystallum) als Kellermeister beteiligt ist. Die „Landscape Series“ ordnet die Weine ihren Böden zu (Sandstein, Schiefer).",
  "Ghost Corner": "Die Elim-Linie von David Nieuwoudt (Cederberg). Trauben aus dem windumtosten Elim an der Südspitze Afrikas – Sauvignon Blanc und Sémillon mit kühler, salziger Prägung.",
  "Glenelly": "2003 von May-Eliane de Lencquesaing gegründet, der ehemaligen Besitzerin von Château Pichon Longueville Comtesse de Lalande (Pauillac). Bordelaiser Handschrift in Stellenbosch; Lady May ist der Spitzen-Cabernet.",
  "Graham Beck": "1983 von Graham Beck in Robertson gegründet. Kellermeister Pieter „Bubbles“ Ferreira machte das Haus zum führenden Cap-Classique-Erzeuger Südafrikas; seit 2016 ausschließlich Schaumwein. Graham-Beck-Brut wurde bei Mandelas Amtseinführung 1994 und Obamas Wahl 2008 ausgeschenkt. Ferreira: Atkin „Winemaking Legend“ 2026.",
  "Groot Constantia": "Das älteste Weingut Südafrikas, 1685 von Gouverneur Simon van der Stel gegründet. Heute ein Museumsgut mit kapholländischem Herrenhaus und aktivem Weinbau; Gouverneurs Reserve ist der Spitzen-Rotwein.",
  "Hamilton Russell Vineyards": "1975 von Tim Hamilton Russell im damals unbekannten Hemel-en-Aarde Valley gegründet, heute von Anthony Hamilton Russell geführt. Bahnbrechender Pinot Noir und Chardonnay von steinigen Schieferton-Böden – die Keimzelle des südafrikanischen Cool-Climate-Weinbaus.",
  "Hartenberg": "Weingut im Bottelary (Stellenbosch), bekannt als Shiraz-Spezialist. Gravel Hill ist eine Einzellage auf kargem Kiesboden.",
  "Haute Cabrière": "Achim von Arnim gründete in Franschhoek eines der ersten reinen Cap-Classique-Häuser (Pierre Jourdan). Heute führt sein Sohn Takuan das Gut; berühmt für Säbelöffnung der Flaschen.",
  "Iona": "Das Weingut liegt in den Elgin Highlands nahe dem Atlantik, eines der kühlsten Weingüter des Landes. Bekannt für Sauvignon Blanc, Chardonnay und Pinot Noir.",
  "JC le Roux": "Spezialisiertes Schaumweinhaus im Devon Valley (Stellenbosch), Teil der Heineken-Beverages-Gruppe. Scintilla ist die lang gereifte Prestige-Cuvée.",
  "Jordan Wine Estate": "Gary und Kathy Jordan (er Geologe, sie Ökonomin) bauten das Familiengut in der Stellenbosch Kloof ab 1993 auf. Breites Spitzensortiment; Atkin 2026: 14 Weine mit 92+ Punkten, Sophia 2022 mit 98.",
  "Kaapzicht": "Familie Steytler im Bottelary (Stellenbosch). Bekannt für den Steytler Vision (Cape Blend mit Pinotage) und den Chenin „The 1947“ von Reben, die 1947 gepflanzt wurden.",
  "Kanonkop": "Familie Krige bewirtschaftet das Gut am Simonsberg seit Anfang des 20. Jahrhunderts; heute geführt von Johann und Paul Krige, Kellermeister Abrie Beeslaar. Kanonkop ist Südafrikas „First Growth“: Paul Sauer 2015 erhielt Atkins erste 100 Punkte in der Neuen Welt, Black Label ist der berühmteste Pinotage.",
  "Keermont": "Weingut der Familie Wraith im Amphitheater-artigen Tal oberhalb von Stellenbosch (Helderberg/Stellenbosch-Berge). Kühle Höhenlagen, präzise Syrahs und Chenin Blancs.",
  "Ken Forrester": "Ken Forrester, ehemaliger Gastronom aus Johannesburg, kaufte 1993 die Farm Scholtzenhof am Helderberg und wurde zum „Mr. Chenin“ Südafrikas. Gründer der Chenin Blanc Association.",
  "Klein Constantia": "Historischer Teil des Constantia-Guts von 1685. Ab 1986 belebte das Weingut den legendären Süßwein Vin de Constance wieder; heute ist es auch für Sauvignon Blanc und Cap Classique bekannt.",
  "Kleine Zalze": "Familie Basson in Stellenbosch, Weingut mit Golf-Estate. Die Family-Reserve-Weine – vor allem Chenin Blanc und Cabernet – sind regelmäßig hoch dekoriert; die Brut Rosé gewann 2025 die Rosé-Kategorie der Amorim Cap Classique Challenge.",
  "Krone": "Das historische Gut Twee Jonge Gezellen in Tulbagh (1710). Unter dem Namen Krone werden ausschließlich Cap Classiques erzeugt, viele davon als Jahrgangsweine.",
  "La Motte": "Weingut der Familie Rupert-Koegelenberg im Franschhoek-Tal, mit Museum zum Maler J.H. Pierneef. Bekannt für Shiraz-Viognier und Sauvignon Blanc.",
  "Laborie": "Historisches Gut in Paarl am Fuß des Paarl Mountain, spezialisiert auf Cap Classique. Gewann 2023 die Gesamtwertung der Amorim Cap Classique Challenge.",
  "Lanzerac": "Historisches Gut (1692) im Jonkershoek-Tal (Stellenbosch) mit Hotel. Lanzerac war 1961 die erste Marke, die Pinotage auf dem Etikett nannte.",
  "Le Lude": "Boutique-Kellerei in Franschhoek, spezialisiert auf Cap Classique und eines der ganz wenigen Häuser mit Zweitgärung unter Naturkorken (Agrafe). Der Brut Magnum 2015 erhielt bei Platter's 2026 96 Punkte.",
  "Le Riche": "Etienne Le Riche, der „Cabernet King“, gründete das Familienweingut 1997 in Stellenbosch nach vielen Jahren bei Rustenberg. Heute führen seine Kinder Christo und Yvonne den Betrieb.",
  "Leeu Passant": "Gemeinschaftsprojekt von Chris & Andrea Mullineux mit dem Unternehmer Analjit Singh (Leeu Collection) in Franschhoek. Fokus auf alte Reben und historische Lagen, u. a. Weinberge aus dem frühen 20. Jahrhundert in Wellington.",
  "Leeuwenkuil": "Großer Familienbetrieb der Familie Dreyer im Swartland. Die kleine Heritage-Linie stammt aus den besten Parzellen; der Heritage Syrah 2022 erhielt bei Platter's 2026 Rekord-99-Punkte.",
  "Lismore Estate Vineyards": "Die Amerikanerin Samantha O'Keefe zog 2003 nach Südafrika und baute nahe Greyton am Fuß der Riviersonderend-Berge ihr Weingut auf. Fokus auf Chardonnay, Syrah und Viognier in kühler Lage. Atkin 2026: erste „Winery of the Year“ überhaupt.",
  "Meerlust": "Seit 1756 im Besitz der Familie Myburgh, heute in achter Generation (Hannes Myburgh). Das Gut in Stellenbosch (nahe False Bay) brachte 1980 mit Rubicon einen der ersten Bordeaux-Blends Südafrikas auf den Markt.",
  "Morgenster": "Historisches Gut in Somerset West (Helderberg), vom Italiener Giulio Bertrand wiederbelebt. Bordeaux-Blends und Olivenöl von Weltklasse.",
  "Mullineux": "Chris und Andrea Mullineux gründeten 2007 ihr Weingut im Swartland; Andrea wurde von Wine Enthusiast zur Winemaker of the Year (2016) gewählt. Die Terroir-Serie (Schist, Granite, Iron) macht die Böden des Swartland erfahrbar; dazu Straw Wine und Chenin Blancs.",
  "Mvemve Raats": "Joint Venture von Bruwer Raats und Mzokhona Mvemve, einem der ersten schwarzen Önologen Südafrikas. MR de Compostella ist ein Fünf-Sorten-Bordeaux-Blend.",
  "Nederburg": "Eines der bekanntesten Weingüter des Landes in Paarl (1791). Edelkeur war 1969 der erste edelsüße Botrytiswein Südafrikas.",
  "Neil Ellis": "Neil Ellis war einer der ersten Négociants Südafrikas. Heute führen seine Söhne das Haus in Jonkershoek (Stellenbosch); Spezialität sind Lagen-Cabernets.",
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
  "Springfield": "Familie Bruwer in Robertson. Abrie Bruwer ist bekannt für eigenwillige, ungeschönte Weine: Méthode Ancienne (Spontangärung, ungefiltert) und Life from Stone (Sauvignon von Steinböden).",
  "Stark-Condé": "José Condé und Familie Stark im Jonkershoek-Tal (Stellenbosch). Cabernet von steilen Granitlagen; Three Pines ist die Spitze.",
  "Steenberg": "Gegründet 1682, eine der ältesten Farmen Constantias, heute mit Hotel und Golfplatz. Spitzen-Sauvignon-Blanc, der White Blend Magna Carta (Platter's 2026 Wine of the Year) und der Cap Classique Lady R (Gesamtsieger der Amorim Cap Classique Challenge 2025).",
  "Stellenrust": "Familienweingut im Bottelary und am Helderberg (Stellenbosch). Alte Chenin-Reben; „53“ ist benannt nach dem Pflanzjahr der Reben.",
  "Storm Wines": "Hannes Storm gründete Storm Wines 2012 nach acht Jahren bei Hamilton Russell. Einzellagen-Pinot-Noirs und -Chardonnays aus den drei Hemel-en-Aarde-Wards (Vrede, Ridge, Ignis). Atkin Winemaker of the Year 2026.",
  "Strandveld": "Das südlichste Weingut Afrikas bei Elim, nahe Cape Agulhas. Kühle, windige Lagen; Pofadderbos ist ein Einzellagen-Sauvignon.",
  "Thelema Mountain Vineyards": "Familie Webb kaufte 1983 eine verlassene Obstfarm auf dem Helshoogte-Pass; Gyles Webb machte daraus eines der ersten modernen Spitzengüter Südafrikas. Berühmt für Cabernet mit Minze-Note.",
  "Thorne & Daughters": "John und Tasha Seccombe gründeten 2012 ihr Label in Bot River. Feine, texturreiche White Blends (Rocking Horse) und Chenins von alten Reben.",
  "Tierhoek": "Bergfarm in Piekenierskloof (Olifants River). Bio-Anbau, Chenin Blanc und Grenache von alten Reben.",
  "Tokara": "Seit 1994 im Besitz von GT Ferreira (Banker) auf dem Helshoogte-Pass, mit Lagen auch in Elgin und Hemel-en-Aarde. Kunstsammlung, Restaurant, Olivenöl. Limited Release Pinotage 2023 ist Platter's 2026 Wine of the Year.",
  "Uva Mira": "Hochgelegenes Weingut am Helderberg (Stellenbosch), bis über 600 m. Einzellagen-Chardonnay und Syrah mit kühler Frische.",
  "Van Loggerenberg": "Lukas van Loggerenberg gründete 2016 sein Label in Stellenbosch. Minimale Eingriffe, Ganztraubengärung; seine Syrahs und Chenins gehören zu den aufregendsten des Landes (Graft Syrah 2025: 98 Punkte bei Atkin).",
  "Vergelegen": "1700 von Gouverneur Willem Adriaan van der Stel in Somerset West gegründet, heute im Besitz von Anglo American. Historische Gärten, Bordeaux-Stil; V (Cabernet) und GVB/Estate White sind die Spitzen.",
  "Vilafonté": "Joint Venture des kalifornischen Weinbau-Paares Zelma Long und Phil Freese mit Mike Ratcliffe in Simonsberg-Paarl. Zwei Bordeaux-Blends: Series C (Cabernet-betont) und Series M (Merlot-betont).",
  "Villiera": "Familie Grier in Stellenbosch; eines der ersten Häuser, die systematisch auf Cap Classique setzten. Monro Brut ist die lang gereifte Prestige-Cuvée.",
  "Warwick": "Gut am Simonsberg, von Norma Ratcliffe in den 1970ern als eine der ersten Winzerinnen Südafrikas aufgebaut. Trilogy war einer der ersten Bordeaux-Blends des Landes.",
  "Waterford": "Weingut im Blaauwklippen-Tal (Stellenbosch) mit toskanisch anmutender Architektur. The Jem ist ein Blend aus vielen Sorten; dazu ein Blanc de Blancs (Platter's 2026: 5 Sterne).",
  "Zwartwater": "Ehemals Lammershoek im Swartland, neu aufgestellt von Stefan Johannes – Atkin Rising Star of the Year 2026.",
};

// ---------- WEINE ----------
// Kurzschreibweise: W(typ, weingut, wein, region, rebsorte, beschreibung, extras)
const wines = [];
function W(c, p, w, r, g, n, x) { wines.push(Object.assign({ c, p, w, r, g, n }, x || {})); }

// ======================= TOP 100 ROT =======================
W('rot','Sadie Family Wines','Columella','swa','Syrah-Blend','Der Referenz-Rotwein des neuen Südafrikas: Syrah mit Mourvèdre, Grenache, Cinsault und Tinta Barocca von Schiefer und Granit. Erster Jahrgang 2000, extrem langlebig.',{pts:100,aw:"Atkin 2026: Overall Red Wine of the Year — Jg. 2024, 100 Pkt. (auch 2019 mit 100 Pkt.)"});
W('rot','Porseleinberg','Syrah','swa','Syrah','Puristischer Schiefer-Syrah: Beton, große Foudres, kein neues Holz. Würzig, floral, mit kühler, steiniger Länge.',{pts:100,aw:"Atkin 2025: 100 Pkt. — Jg. 2023; Atkin 2026: 98 Pkt."});
W('rot','Leeuwenkuil','Heritage Syrah','swa','Syrah','Aus den besten Swartland-Parzellen des Hauses. Dicht, seidig, dunkle Frucht und Fynbos-Würze.',{pts:99,aw:"Platter's 2026: Wine of the Year Shiraz/Syrah — Jg. 2022, 99 Pkt. (Rekordwert)"});
W('rot','Kanonkop','Paul Sauer','stb','Bordeaux-Blend','Cabernet Sauvignon mit Cabernet Franc und Merlot, offen in Betonbottichen vergoren, 2 Jahre in neuem Holz. Südafrikas klassischster Lagerwein.',{aw:"Ikone. Jg. 2015 war Atkins erste 100-Punkte-Bewertung in der Neuen Welt"});
W('rot','Boschkloof','Epilogue Syrah','stb','Syrah','Ganztrauben-Anteil, kühle Polkadraai-Lage. Pfeffer, Veilchen, fein gewobenes Tannin.',{pts:98,aw:"Atkin 2026: 98 Pkt. — Jg. 2024"});
W('rot','Jordan Wine Estate','Sophia','stb','Bordeaux-Blend','Spitzen-Blend aus Cabernet Sauvignon und Merlot, ursprünglich für die Cape Winemakers Guild Auction. Klassisch, präzise, langlebig.',{pts:98,aw:"Atkin 2026: 98 Pkt. — Jg. 2022"});
W('rot','Van Loggerenberg','Graft Syrah','stb','Syrah','Minimal-Intervention, viel Ganztraube. Saftig, duftig, mit großer Spannung. Genaue Herkunft der Trauben nicht gesichert.',{pts:98,u:true,aw:"Atkin 2026: 98 Pkt. — Jg. 2025"});
W('rot','Rall Wines','Ava Syrah','swa','Syrah','Syrah von Schiefer und Granit. Elegant, kühl, mit Graphit und roter Frucht.',{pts:98,aw:"Atkin 2026: 98 Pkt. (laut Berichten zur 98er-Liste)"});
W('rot','Beeslaar','Pinotage','stb','Pinotage','Pinotage im Burgunder-Stil von alten Stellenbosch-Reben: rote Kirsche, feine Würze, mehr Eleganz als Kraft.',{aw:"Atkin 2026: 98 Pkt. für Beeslaar „The Sacrament“ 2023"});
W('rot','Oldenburg Vineyards','Per Se','stb','Cabernet Sauvignon','Einzellagen-Cabernet aus dem hoch gelegenen Banghoek. Cassis, Graphit, straffes Tannin.',{aw:"Platter's 2026: Wine of the Year Cabernet Sauvignon — Jg. 2022"});
W('rot','Raats Family Wines','Vlag Cabernet Franc','stb','Cabernet Franc','Raats\' Spitzen-Cabernet-Franc: Bleistift, rote Johannisbeere, Kräuter, große Feinheit.',{aw:"Platter's 2026: Wine of the Year Cabernet Franc — Jg. 2023 (nur in einer Quelle genannt)"});
W('rot','Tokara','Limited Release Pinotage','stb','Pinotage','Moderner, frischer Pinotage von den Höhenlagen des Helshoogte-Passes.',{aw:"Platter's 2026: Wine of the Year Pinotage — Jg. 2023"});
W('rot','Constantia Glen','Five','con','Bordeaux-Blend','Alle fünf Bordeaux-Sorten von den kühlen Constantiaberg-Hängen. Elegant, frisch, mit feiner Kräuternote.',{aw:"Platter's 2026: Wine of the Year Cape Bordeaux Red — Jg. 2022"});
W('rot','Crystallum','Mabalel Pinot Noir','csc','Pinot Noir','Einzellagen-Pinot von der Cape South Coast (Ward nicht gesichert). Duftig, mineralisch, seidig.',{u:true,aw:"Platter's 2026: Wine of the Year Pinot Noir — Jg. 2024"});
W('rot','Anysbos','Tesame','hea','Rotwein-Blend','Mediterran geprägter Blend aus Bot River. Zusammensetzung nicht gesichert.',{u:true,aw:"Platter's 2026: Wine of the Year Red Blend „Other“ — Jg. 2023"});
W('rot','Diemersdal','Pinotage Reserve','dur','Pinotage','Unbewässerte Buschreben in Durbanville. Dunkle Beeren, Mokka, saftig.',{aw:"Platter's 2026: 5 Sterne — Jg. 2024"});
W('rot','Diemersdal','The Journal Pinotage','dur','Pinotage','Die Prestige-Pinotage des Hauses aus den ältesten Parzellen, im Barrique ausgebaut.',{aw:"Platter's 2026: 5 Sterne — Jg. 2023"});
W('rot','Vergelegen','V','stb','Cabernet Sauvignon','Einzellagen-Cabernet aus Somerset West, nur in besten Jahren. Kraftvoll und poliert.',{pts:95,aw:"Atkin 2026: 95 Pkt. — Jg. 2024"});
W('rot','Lismore Estate Vineyards','Syrah','csc','Syrah','Kühler, pfeffriger Syrah aus Greyton, oft mit einem Tropfen Viognier.',{aw:"Atkin 2026: Winery of the Year (Weingut-Auszeichnung)"});
W('rot','Storm Wines','Ignis Pinot Noir','hea','Pinot Noir','Vom Hemel-en-Aarde Ridge: dunkelfruchtiger, strukturierter als die anderen Storm-Lagen.',{aw:"Hannes Storm = Atkin Winemaker of the Year 2026"});
W('rot','Storm Wines','Vrede Pinot Noir','hea','Pinot Noir','Aus dem Hemel-en-Aarde Valley: duftig, rotbeerig, filigran.');
W('rot','Kanonkop','Black Label Pinotage','stb','Pinotage','Von Buschreben aus dem Jahr 1953. Der teuerste und berühmteste Pinotage der Welt: konzentriert, langlebig.');
W('rot','Kanonkop','Cabernet Sauvignon','stb','Cabernet Sauvignon','Reinsortiger Kanonkop-Cabernet: klassisch, dicht, mit langer Reifefähigkeit.');
W('rot','Meerlust','Rubicon','stb','Bordeaux-Blend','Seit 1980: Cabernet, Merlot und Cabernet Franc. Ein Klassiker mit Zedernholz, Cassis und erdiger Tiefe.');
W('rot','Hamilton Russell Vineyards','Pinot Noir','hea','Pinot Noir','Von steinigen Schieferton-Böden: straff, erdig, burgundisch – seit Jahrzehnten der Maßstab.');
W('rot','Sadie Family Wines','Pofadder','swa','Cinsault','Aus der Old Vine Series: Cinsault von alten Buschreben, leicht, duftig, transparent.');
W('rot','Sadie Family Wines','Soldaat','oli','Grenache','Grenache von über 1.000 m hohen Bergweinbergen in Piekenierskloof. Kühl, floral, seidig.');
W('rot','Sadie Family Wines','Treinspoor','swa','Tinta Barocca','Tinta Barocca von einer alten Parzelle an der Bahnlinie („Treinspoor“). Würzig, dunkelfruchtig.');
W('rot','Mullineux','Schist Syrah','swa','Syrah','Syrah von Schieferböden in Kasteelberg: kühl, mineralisch, duftig.');
W('rot','Mullineux','Iron Syrah','swa','Syrah','Syrah von eisenhaltigen Böden: dunkel, kraftvoll, mit fester Struktur.');
W('rot','Mullineux','Granite Syrah','swa','Syrah','Syrah von Granit am Paardeberg: frisch, straff, rote Frucht.');
W('rot','Boekenhoutskloof','Syrah','paarl','Syrah','Einer der ikonischen Syrahs des Landes (Lagen in Wellington). Dicht, würzig, langlebig.',{u:true});
W('rot','Boekenhoutskloof','Cabernet Sauvignon','fhk','Cabernet Sauvignon','Cabernet aus Stellenbosch- und Franschhoek-Lagen. Kraftvoll, mit Bordeaux-Struktur.');
W('rot','Delaire Graff','Botmaskop','stb','Bordeaux-Blend','Cabernet-basierter Blend von der namensgebenden Bergkuppe am Helshoogte-Pass.');
W('rot','Keermont','Amphitheatre Syrah','stb','Syrah','Aus einem amphitheaterförmigen Hochtal: kühl, pfeffrig, elegant.');
W('rot','Rust en Vrede','1694 Classification','stb','Shiraz-Cabernet','Opulenter, kraftvoller Shiraz-Cabernet-Blend; einer der Kultweine des Landes.');
W('rot','Le Riche','Cabernet Sauvignon Reserve','stb','Cabernet Sauvignon','Klassischer, ausgewogener Stellenbosch-Cabernet mit großer Lagerfähigkeit.');
W('rot','Thelema Mountain Vineyards','Cabernet Sauvignon','stb','Cabernet Sauvignon','Der Cabernet mit der typischen Minz-Eukalyptus-Note und Cassis-Tiefe.');
W('rot','Ernie Els Wines','Signature','stb','Bordeaux-Blend','Kraftvoller, polierter Cabernet-Blend vom Helderberg.');
W('rot','Glenelly','Lady May','stb','Cabernet Sauvignon','Bordelaiser Handschrift: feinkörniges Tannin, Zeder, dunkle Frucht.');
W('rot','Reyneke','Reserve Red','stb','Syrah','Biodynamischer Syrah: würzig, lebendig, mit großer Reinheit.');
W('rot','Newton Johnson','Family Vineyards Pinot Noir','hea','Pinot Noir','Aus dem Upper Hemel-en-Aarde: duftig, mineralisch, Granit-Lehm-geprägt.');
W('rot','Bouchard Finlayson','Galpin Peak Pinot Noir','hea','Pinot Noir','Seit den 1990ern ein Klassiker: erdig, rotbeerig, burgundisch.');
W('rot','Creation','Reserve Pinot Noir','hea','Pinot Noir','Vom Hemel-en-Aarde Ridge: reife Kirsche, feine Würze, seidige Textur.');
W('rot','Crystallum','Cuvée Cinéma Pinot Noir','hea','Pinot Noir','Pinot aus dem Hemel-en-Aarde Ridge: kühl, floral, präzise.',{u:true});
W('rot','Restless River','Ava Marie Pinot Noir','hea','Pinot Noir','Kleiner Upper-Hemel-en-Aarde-Pinot mit großer Tiefe und Finesse.');
W('rot','Ataraxia','Pinot Noir','hea','Pinot Noir','Dunkelfruchtiger, strukturierter Pinot vom Hemel-en-Aarde Ridge.');
W('rot','A.A. Badenhorst Family Wines','Family Red','swa','Rhône-Blend','Shiraz, Cinsault, Grenache und Tinta Barocca vom Paardeberg – unkompliziert-tiefgründig.');
W('rot','Rall Wines','Rall Red','swa','Rhône-Blend','Syrah-basierter Blend mit Grenache und Carignan: saftig, frisch, elegant.');
W('rot','David & Nadia','Grenache','swa','Grenache','Grenache von alten Swartland-Buschreben: hell, duftig, mit Kräuterwürze.');
W('rot','David & Nadia','Elpidios','swa','Rhône-Blend','Rotwein-Blend aus Syrah, Pinotage, Carignan und Grenache.',{u:true});
W('rot','Savage Wines','Follow the Line','wcape','Cinsault-Blend','Cinsault-betonter, frischer Rotwein aus kühlen Lagen.',{u:true});
W('rot','Savage Wines','Savage Red','wcape','Syrah-Blend','Syrah-basierter Blend aus maritimen Lagen: zurückhaltend, fein, lagerfähig.');
W('rot','Richard Kershaw','Elgin Syrah','elg','Syrah','Cool-Climate-Syrah aus Elgin: Pfeffer, Veilchen, straffe Säure.');
W('rot','Paul Cluver','Seven Flags Pinot Noir','elg','Pinot Noir','Elgins bekanntester Pinot: duftig, rotfruchtig, elegant.');
W('rot','Oak Valley','Pinot Noir','elg','Pinot Noir','Höhenlagen-Pinot aus Elgin, kühl und präzise.');
W('rot','Shannon','Mount Bullet Merlot','elg','Merlot','Einer der besten Merlots des Landes, aus Elgin: dicht, samtig, frisch.');
W('rot','Warwick','Trilogy','stb','Bordeaux-Blend','Einer der ersten Bordeaux-Blends Südafrikas vom Simonsberg.');
W('rot','Vilafonté','Series C','paarl','Bordeaux-Blend','Cabernet-betonter Blend aus Simonsberg-Paarl, kalifornisch-südafrikanische Handschrift.');
W('rot','Vilafonté','Series M','paarl','Bordeaux-Blend','Merlot-betonter Blend: weicher, üppiger als Series C.');
W('rot','De Toren','Fusion V','stb','Bordeaux-Blend','Fünf-Sorten-Blend aus den Polkadraai Hills, per Schwerkraft verarbeitet.');
W('rot','Waterford','The Jem','stb','Rotwein-Blend','Vielsorten-Blend auf Cabernet-Basis, das Flaggschiff von Waterford.');
W('rot','Hartenberg','Gravel Hill Shiraz','stb','Shiraz','Einzellage auf kargem Kies im Bottelary: konzentriert, würzig.');
W('rot','Tokara','Director\'s Reserve Red','stb','Bordeaux-Blend','Cabernet-basierter Blend aus den Höhenlagen von Tokara.');
W('rot','Kleine Zalze','Family Reserve Cabernet Sauvignon','stb','Cabernet Sauvignon','Dichter, reifer Stellenbosch-Cabernet mit viel Holzfeinheit.');
W('rot','Stark-Condé','Three Pines Cabernet Sauvignon','stb','Cabernet Sauvignon','Von steilen Granitlagen im Jonkershoek: frisch, kühl, langlebig.');
W('rot','Neil Ellis','Jonkershoek Valley Cabernet Sauvignon','stb','Cabernet Sauvignon','Lagen-Cabernet aus dem kühlen Jonkershoek-Tal.');
W('rot','Mvemve Raats','MR de Compostella','stb','Bordeaux-Blend','Fünf-Sorten-Bordeaux-Blend, Cabernet-Franc-geprägt.');
W('rot','Rustenberg','Peter Barlow','stb','Cabernet Sauvignon','Einzellagen-Cabernet vom Simonsberg, benannt nach dem Patriarchen der Familie.');
W('rot','Alto','Alto Rouge','stb','Rotwein-Blend','Seit 1933 einer der ältesten Markenweine Südafrikas: Cabernet-basiert, solide, klassisch.');
W('rot','Simonsig','Redhill Pinotage','stb','Pinotage','Lagen-Pinotage von alten Buschreben: dunkle Frucht, kräftige Struktur.');
W('rot','Beyerskloof','Diesel Pinotage','stb','Pinotage','Das Spitzen-Cuvée des „Pinotage King“: konzentriert, mit viel neuem Holz.');
W('rot','Lanzerac','Pionier Pinotage','stb','Pinotage','Erinnert an die erste Pinotage-Etikettierung 1961 (Lanzerac).',{u:true});
W('rot','Kaapzicht','Steytler Vision','stb','Cape Blend','Cape Blend mit Pinotage, Cabernet und Merlot aus dem Bottelary.');
W('rot','Ken Forrester','The Gypsy','stb','Rhône-Blend','Grenache-Syrah-Blend vom Helderberg: üppig, würzig.');
W('rot','Morgenster','Reserve','stb','Bordeaux-Blend','Merlot-Cabernet-Blend im Bordeaux-Stil aus Somerset West.');
W('rot','De Trafford','Elevation 393','stb','Bordeaux-Blend','Hochlagen-Blend aus dem Blaauwklippen-Tal, benannt nach der Lagenhöhe.');
W('rot','Uva Mira','Single-Vineyard Syrah','stb','Syrah','Höhenlagen-Syrah vom Helderberg: kühl, floral.',{u:true});
W('rot','Craven Wines','Syrah','stb','Syrah','Leichter, transparenter Syrah mit Ganztrauben – im nördlich-Rhône-Stil.');
W('rot','Groot Constantia','Gouverneurs Reserve','con','Bordeaux-Blend','Spitzen-Blend vom ältesten Weingut des Landes.');
W('rot','Eagles\' Nest','Shiraz','con','Shiraz','Kühler, pfeffriger Shiraz von steilen Constantia-Hängen.');
W('rot','Boekenhoutskloof','The Chocolate Block','wcape','Syrah-Blend','Einer der erfolgreichsten Premium-Blends des Landes: Syrah mit Grenache, Cinsault, Cabernet, Viognier.');
W('rot','Saronsberg','Shiraz','tul','Shiraz','Reifer, dichter Shiraz aus dem Tulbagh-Bergkessel.');
W('rot','Fable Mountain','Syrah','tul','Syrah','Biologischer Syrah aus Tulbagh mit kühler Frische.');
W('rot','Fairview','Jakkalsfontein Shiraz','swa','Shiraz','Shiraz von alten Swartland-Buschreben aus der Single-Vineyard-Linie von Fairview.');
W('rot','Spice Route','Malabar','swa','Rotwein-Blend','Spitzen-Blend aus Swartland-Trauben (Syrah-betont).');
W('rot','Leeu Passant','Dry Red Wellington','paarl','Rotwein-Blend','Blend von sehr alten Rebanlagen in Wellington, darunter historische Cinsault-Parzellen.');
W('rot','Gabriëlskloof','Syrah on Sandstone','hea','Syrah','Aus der „Landscape Series“: Syrah von Sandstein in Bot River.',{u:true});
W('rot','Beaumont','Vitruvian','hea','Rotwein-Blend','Rotwein-Blend aus Bot River (Mourvèdre, Syrah, Pinotage u. a.).',{u:true});
W('rot','Cederberg','Five Generations Cabernet Sauvignon','oli','Cabernet Sauvignon','Höhenlagen-Cabernet aus den Cederbergen: frisch, straff, minzig.');
W('rot','Springfield','Méthode Ancienne Cabernet Sauvignon','brv','Cabernet Sauvignon','Spontan vergoren, ungeschönt, ungefiltert – Cabernet von Robertsons Kalkböden.');
W('rot','Chamonix','Troika','fhk','Bordeaux-Blend','Cabernet-Franc-betonter Blend aus Franschhoeks Höhenlagen.');
W('rot','La Motte','Pierneef Shiraz-Viognier','fhk','Shiraz-Viognier','Shiraz mit Viognier co-fermentiert: duftig, saftig.');
W('rot','Shannon','Rockview Ridge Pinot Noir','elg','Pinot Noir','Elgin-Pinot: rotfruchtig, fein.');
W('rot','Glenelly','Estate Reserve Red','stb','Bordeaux-Blend','Cabernet-Shiraz-Blend in Bordelaiser Stilistik.');
W('rot','Delaire Graff','Laurence Graff Reserve','stb','Cabernet Sauvignon','Die Spitzen-Cuvée von Delaire Graff aus Cabernet Sauvignon.',{u:true});
W('rot','Rust en Vrede','Estate','stb','Bordeaux-Blend','Klassischer Estate-Blend aus Cabernet, Shiraz und Merlot.');
W('rot','Reyneke','Reserve Cornerstone','stb','Bordeaux-Blend','Biodynamischer Bordeaux-Blend aus den Polkadraai Hills.',{u:true});
W('rot','Zwartwater','Syrah','swa','Syrah','Swartland-Syrah des Atkin Rising Star 2026 Stefan Johannes.',{u:true});
W('rot','Nederburg','Two Centuries Cabernet Sauvignon','paarl','Cabernet Sauvignon','Prestige-Cabernet des historischen Paarl-Hauses.');

// ======================= TOP 100 WEISS =======================
W('weiss','Alheit Vineyards','Huilkrans Chenin Blanc','oli','Chenin Blanc','Alte Chenin-Reben in den Bergen von Citrusdal: konzentriert und doch schwerelos, salzig, endlos lang.',{pts:99,aw:"Atkin 2026: Overall White Wine of the Year — Jg. 2025, 99 Pkt."});
W('weiss','Alheit Vineyards','Magnetic North Chenin Blanc','oli','Chenin Blanc','Hochgelegene, wurzelechte Chenin-Buschreben. Kultwein mit Zitrus, Honig, Stein und vibrierender Säure.',{pts:100,aw:"Atkin 2025: 100 Pkt. — Jg. 2024; Atkin 2026: 98 Pkt. — Jg. 2025"});
W('weiss','Botanica','Mary Delany Chenin Blanc','stb','Chenin Blanc','Old-Vine Chenin mit großer Spannung, Quitte, Wachs und kreidiger Textur.',{pts:99,aw:"Platter's 2026: Wine of the Year Chenin Blanc — Jg. 2024, 99 Pkt. (Rekordwert)"});
W('weiss','Scions of Sinai','Granietsteen Old Vine Chenin Blanc','stb','Chenin Blanc','Alte Reben auf Granit am Helderberg, Ausbau in Ton und Holz. Straff, salzig, kraftvoll.',{pts:98,aw:"Atkin 2026: 98 Pkt. — Jg. 2025"});
W('weiss','Boekenhoutskloof','Semillon','fhk','Sémillon','Aus über 100 Jahre alten Franschhoek-Reben. Lanolin, Zitrus, Wachs – lagerfähig wie großer Graves.',{pts:98,aw:"Atkin 2026: 98 Pkt. — Jg. 2024"});
W('weiss','Sadie Family Wines','Palladius','swa','White Blend','Der Archetyp des Cape White Blend: Chenin, Grenache Blanc, Clairette, Viognier, Roussanne u. a. von alten Reben.');
W('weiss','Sadie Family Wines','Skerpioen','swa','Chenin / Palomino','Aus der Old Vine Series: Chenin und Palomino von Kalk nahe der Atlantikküste. Salzig, frisch.');
W('weiss','Sadie Family Wines','Mev. Kirsten','stb','Chenin Blanc','Aus einer der ältesten Chenin-Parzellen des Landes (Stellenbosch). Tiefgründig, ehrfürchtig.');
W('weiss','Sadie Family Wines','’T Voetpad','swa','Field Blend','Uralter gemischter Satz (Sémillon, Chenin, Palomino, Muscat) – historische Rarität.');
W('weiss','Sadie Family Wines','Kokerboom','oli','Sémillon','Sémillon (auch die rote Variante Semillon Gris) von alten Reben am Olifants River.',{u:true});
W('weiss','Sadie Family Wines','Skurfberg','oli','Chenin Blanc','Chenin von hochgelegenen Buschreben auf Sandstein im Olifants-River-Gebiet.');
W('weiss','Crystallum','Clay Shales Chardonnay','hea','Chardonnay','Chardonnay von Tonschiefer: straff, salzig, burgundisch.',{u:true,aw:"Platter's 2026: Wine of the Year Chardonnay — Jg. 2024"});
W('weiss','Steenberg','Magna Carta','con','Sauvignon-Sémillon','Holzgereifter Bordeaux-White-Blend, im Stil eines großen weißen Pessac-Léognan.',{aw:"Platter's 2026: Wine of the Year Cape Bordeaux White — Jg. 2023"});
W('weiss','Mullineux','Roundstone White','swa','White Blend','Chenin-basierter Lagen-Blend aus dem Swartland.',{aw:"Platter's 2026: Wine of the Year White Blend „Other“ — Jg. 2024"});
W('weiss','Vergelegen','Estate White','stb','Sauvignon-Sémillon','Lagerfähiger Bordeaux-White-Blend aus Somerset West (früher GVB White).',{pts:95,aw:"Atkin 2026: 95 Pkt. — Jg. 2025"});
W('weiss','Jordan Wine Estate','Timepiece Sauvignon Blanc','stb','Sauvignon Blanc','Komplexer, holzberührter Sauvignon aus der Stellenbosch Kloof.',{pts:95,aw:"Atkin 2026: 95 Pkt. — Jg. 2025"});
W('weiss','Diemersdal','Sauvignon Blanc Reserve','dur','Sauvignon Blanc','Intensiver, kühler Sauvignon von unbewässerten Durbanville-Reben.',{aw:"Platter's 2026: Diemersdal mit vier Sauvignons auf 5 Sterne (welche genau, nicht gesichert)"});
W('weiss','Hamilton Russell Vineyards','Chardonnay','hea','Chardonnay','Einer der besten Chardonnays der Südhalbkugel: straff, mineralisch, lagerfähig.');
W('weiss','Storm Wines','Chardonnay','hea','Chardonnay','Präziser, lagenfokussierter Chardonnay aus dem Hemel-en-Aarde.',{aw:"Hannes Storm = Atkin Winemaker of the Year 2026"});
W('weiss','Lismore Estate Vineyards','Reserve Chardonnay','csc','Chardonnay','Spannungsreicher, langer Chardonnay aus Greyton.',{aw:"Atkin 2026: Winery of the Year (Weingut-Auszeichnung)"});
W('weiss','Richard Kershaw','Elgin Chardonnay','elg','Chardonnay','Klon-selektierter Cool-Climate-Chardonnay: Zitrus, Feuerstein, Spannung.');
W('weiss','Alheit Vineyards','Cartology','wcape','Chenin-Sémillon','Chenin mit Sémillon von alten Reben aus mehreren Regionen – der „Atlas“ des Kap-Chenins.');
W('weiss','Mullineux','Granite Chenin Blanc','swa','Chenin Blanc','Chenin von Granit am Paardeberg: kühl, salzig, druckvoll.');
W('weiss','Mullineux','Old Vines White','swa','White Blend','Chenin-basierter Blend mit Clairette, Viognier und Sémillon Gris.');
W('weiss','A.A. Badenhorst Family Wines','Family White','swa','White Blend','Paardeberg-Feldmischung auf Chenin-Basis – prägend für die Swartland-Revolution.');
W('weiss','A.A. Badenhorst Family Wines','Secateurs Chenin Blanc','swa','Chenin Blanc','Einstiegs-Chenin mit großem Preis-Leistungs-Verhältnis.');
W('weiss','Ataraxia','Chardonnay','hea','Chardonnay','Kraftvoll und kühl zugleich, mit nussiger Tiefe.');
W('weiss','Newton Johnson','Family Vineyards Chardonnay','hea','Chardonnay','Upper Hemel-en-Aarde: straff, zitrisch, fein.');
W('weiss','Paul Cluver','Seven Flags Chardonnay','elg','Chardonnay','Elgins Pionier-Chardonnay: elegant, präzise.');
W('weiss','Paul Cluver','Close Encounter Riesling','elg','Riesling','Halbtrockener Riesling aus Elgin mit feiner Restsüße.',{u:true});
W('weiss','Chamonix','Reserve Chardonnay','fhk','Chardonnay','Einer der etablierten Spitzen-Chardonnays des Landes.');
W('weiss','Chamonix','Blanc Fumé','fhk','Sauvignon Blanc','Holzgereifter Sauvignon Blanc aus Franschhoeks Höhenlagen.');
W('weiss','Jordan Wine Estate','Nine Yards Chardonnay','stb','Chardonnay','Barrique-Chardonnay, regelmäßig unter den besten des Landes.');
W('weiss','Klein Constantia','Perdeblokke Sauvignon Blanc','con','Sauvignon Blanc','Einzellagen-Sauvignon von hochgelegenen Constantia-Lagen.');
W('weiss','Cape Point Vineyards','Isliedh','con','Sauvignon-Sémillon','Komplexer, holzgereifter Sauvignon-Sémillon aus Atlantiknähe.');
W('weiss','Cape Point Vineyards','Sauvignon Blanc Reserve','con','Sauvignon Blanc','Maritimer, salziger Sauvignon von der Kap-Halbinsel.');
W('weiss','Constantia Glen','Two','con','Sauvignon-Sémillon','Weißer Bordeaux-Blend aus Constantia.');
W('weiss','Steenberg','Sauvignon Blanc Reserve','con','Sauvignon Blanc','Constantia-Sauvignon mit Feuerstein und Grapefruit.');
W('weiss','Cederberg','Five Generations Chenin Blanc','oli','Chenin Blanc','Holzgereifter Chenin aus über 1.000 m Höhe.');
W('weiss','Cederberg','Sauvignon Blanc','oli','Sauvignon Blanc','Höhenlagen-Sauvignon: knackig, kräuterwürzig.');
W('weiss','Ghost Corner','Wild Ferment Sauvignon Blanc','csc','Sauvignon Blanc','Spontanvergoren, aus dem windigen Elim: salzig, komplex.');
W('weiss','Strandveld','Pofadderbos Sauvignon Blanc','csc','Sauvignon Blanc','Einzellage nahe Cape Agulhas: kühl, kräuterig, mineralisch.');
W('weiss','Reyneke','Reserve White','stb','Sauvignon Blanc','Biodynamisch, holzgereift, mit gewachsener Spannung.');
W('weiss','Kleine Zalze','Family Reserve Chenin Blanc','stb','Chenin Blanc','Opulenter, mehrfach preisgekrönter Holz-Chenin.');
W('weiss','DeMorgenzon','Reserve Chenin Blanc','stb','Chenin Blanc','Alte Reben, Barrique-Ausbau, große Fülle.');
W('weiss','DeMorgenzon','Maestro White','stb','White Blend','Rhône- und Chenin-basierter White Blend.');
W('weiss','Ken Forrester','The FMC Chenin Blanc','stb','Chenin Blanc','„Forrester Meinert Chenin“: reif, botrytisberührt, früher Botschafter des Premium-Chenins.');
W('weiss','Ken Forrester','Old Vine Reserve Chenin Blanc','stb','Chenin Blanc','Old-Vine Chenin mit gutem Preis-Leistungs-Verhältnis.');
W('weiss','Raats Family Wines','Old Vine Chenin Blanc','stb','Chenin Blanc','Chenin von alten Reben: straff, mineralisch.');
W('weiss','Stellenrust','53 Barrel Fermented Chenin Blanc','stb','Chenin Blanc','Von 1953 gepflanzten Reben: reich, tief, holzgeprägt.',{u:true});
W('weiss','Kaapzicht','The 1947 Chenin Blanc','stb','Chenin Blanc','Von 1947 gepflanzten Buschreben im Bottelary.');
W('weiss','Beaumont','Hope Marguerite Chenin Blanc','hea','Chenin Blanc','Old-Vine Chenin aus Bot River: Quitte, Wachs, feine Säure.');
W('weiss','Thorne & Daughters','Rocking Horse','wcape','White Blend','Feiner, texturreicher White Blend aus mehreren Regionen.');
W('weiss','Savage Wines','Savage White','wcape','Sauvignon-Sémillon','Sauvignon-Sémillon aus kühlen, maritimen Lagen: präzise, salzig.');
W('weiss','David & Nadia','Chenin Blanc','swa','Chenin Blanc','Chenin von alten Swartland-Buschreben: frisch, steinig.');
W('weiss','David & Nadia','Aristargos','swa','White Blend','Chenin-basierter White Blend mit Viognier, Clairette, Sémillon.');
W('weiss','Rall Wines','Rall White','swa','White Blend','Chenin-basierter Blend mit Verdelho, Chardonnay und Viognier.',{u:true});
W('weiss','Leeuwenkuil','Heritage Chenin Blanc','swa','Chenin Blanc','Old-Vine Chenin aus der Heritage-Linie.');
W('weiss','Tokara','Director\'s Reserve White','stb','Sauvignon-Sémillon','Weißer Bordeaux-Blend aus Tokaras Höhenlagen.');
W('weiss','Delaire Graff','Banghoek Reserve Chardonnay','stb','Chardonnay','Höhenlagen-Chardonnay aus dem Banghoek.');
W('weiss','Rustenberg','Five Soldiers Chardonnay','stb','Chardonnay','Einzellagen-Chardonnay, benannt nach fünf Kiefern am Weinberg.');
W('weiss','Glenelly','Estate Reserve Chardonnay','stb','Chardonnay','Chardonnay in burgundischer Stilistik.');
W('weiss','Uva Mira','Single-Vineyard Chardonnay','stb','Chardonnay','Hochlagen-Chardonnay vom Helderberg.',{u:true});
W('weiss','Meerlust','Chardonnay','stb','Chardonnay','Kühl beeinflusster Chardonnay nahe der False Bay.');
W('weiss','Oak Valley','Chardonnay','elg','Chardonnay','Elgin-Chardonnay von Höhenlagen.');
W('weiss','Iona','Sauvignon Blanc','elg','Sauvignon Blanc','Cool-Climate-Sauvignon aus den Elgin Highlands.');
W('weiss','Bouchard Finlayson','Missionvale Chardonnay','hea','Chardonnay','Hemel-en-Aarde-Chardonnay, burgundisch.');
W('weiss','Creation','The Art of Chardonnay','hea','Chardonnay','Die Spitzen-Selektion von Creation.',{u:true});
W('weiss','Restless River','Ava Marie Chardonnay','hea','Chardonnay','Kleiner, präziser Upper-Hemel-en-Aarde-Chardonnay.');
W('weiss','Gabriëlskloof','Magdalena','hea','Sémillon-Sauvignon','Sémillon-basierter White Blend aus Bot River.',{u:true});
W('weiss','Springfield','Méthode Ancienne Chardonnay','brv','Chardonnay','Spontan vergoren, ungefiltert – Chardonnay von Kalkböden.');
W('weiss','Springfield','Life from Stone Sauvignon Blanc','brv','Sauvignon Blanc','Sauvignon von steinigen Böden: knackig, mineralisch.');
W('weiss','De Wetshof','Bateleur Chardonnay','brv','Chardonnay','Kalkböden, Barrique: Südafrikas Chardonnay-Pionier.');
W('weiss','Opstal','Carl Everson Chenin Blanc','brv','Chenin Blanc','Old-Vine Chenin aus dem Slanghoek-Tal (Breedekloof).');
W('weiss','Tierhoek','Chenin Blanc','oli','Chenin Blanc','Bergchenin aus Piekenierskloof, biologisch.');
W('weiss','Spier','21 Gables Chenin Blanc','stb','Chenin Blanc','Holzgereifter Chenin aus der 21-Gables-Linie.',{u:true});
W('weiss','Van Loggerenberg','Kameraderie Chenin Blanc','stb','Chenin Blanc','Chenin mit minimalen Eingriffen.',{u:true});
W('weiss','Alheit Vineyards','Radio Lazarus Chenin Blanc','hea','Chenin Blanc','Chenin von einer alten Parzelle in Bot River.',{u:true});
W('weiss','Iona','Chardonnay','elg','Chardonnay','Chardonnay aus den Elgin Highlands: kühl, zitrisch, fein.');
W('weiss','Klein Constantia','Estate Sauvignon Blanc','con','Sauvignon Blanc','Klassischer Constantia-Sauvignon.');
W('weiss','Diemersdal','Sauvignon Blanc 8 Rows','dur','Sauvignon Blanc','Selektion aus acht Rebzeilen.',{u:true});
W('weiss','Boschendal','Chardonnay','fhk','Chardonnay','Chardonnay vom historischen Boschendal-Gut.',{u:true});
W('weiss','Waterford','Chardonnay','stb','Chardonnay','Chardonnay aus dem Blaauwklippen-Tal.');
W('weiss','Hartenberg','Riesling','stb','Riesling','Selten in Stellenbosch: trockener Riesling.',{u:true});
W('weiss','Thelema Mountain Vineyards','Chardonnay','stb','Chardonnay','Klassischer, holzgereifter Helshoogte-Chardonnay.');
W('weiss','Neil Ellis','Jonkershoek Chardonnay','stb','Chardonnay','Lagen-Chardonnay aus dem Jonkershoek.',{u:true});
W('weiss','Delaire Graff','Chenin Blanc','stb','Chenin Blanc','Chenin aus Swartland-Trauben.',{u:true});
W('weiss','Craven Wines','Clairette Blanche','stb','Clairette','Seltene Rebsorte, mit Schalenkontakt ausgebaut.');
W('weiss','Fairview','Darling Chenin Blanc','swa','Chenin Blanc','Chenin von alten Reben bei Darling.',{u:true});
W('weiss','Spice Route','Chenin Blanc','swa','Chenin Blanc','Swartland-Chenin aus Malmesbury.');
W('weiss','Mullineux','Kloof Street Chenin Blanc','swa','Chenin Blanc','Zugängliche Swartland-Chenin-Linie.');
W('weiss','Leeu Passant','Chardonnay','wcape','Chardonnay','Chardonnay aus kühlen Lagen (Elandskloof u. a.).',{u:true});
W('weiss','La Motte','Sauvignon Blanc','fhk','Sauvignon Blanc','Frischer Franschhoek-Sauvignon.');
W('weiss','Simonsig','Chenin Avec Chêne','stb','Chenin Blanc','Holzgereifter Chenin von alten Reben.');
W('weiss','Lanzerac','Chardonnay','stb','Chardonnay','Chardonnay aus dem Jonkershoek-Tal.',{u:true});
W('weiss','Groot Constantia','Gouverneurs Reserve White','con','Sauvignon-Sémillon','Weißer Blend vom ältesten Gut des Landes.',{u:true});
W('weiss','Eagles\' Nest','Viognier','con','Viognier','Aromatischer Viognier aus Constantia.');
W('weiss','Saronsberg','Viognier','tul','Viognier','Üppiger Viognier aus Tulbagh.',{u:true});
W('weiss','Fable Mountain','Jackal Bird','tul','White Blend','Chenin-basierter White Blend aus Tulbagh.',{u:true});
W('weiss','Nederburg','Two Centuries Sauvignon Blanc','paarl','Sauvignon Blanc','Prestige-Sauvignon des Paarl-Hauses.',{u:true});

// ======================= TOP 25 CAP CLASSIQUE =======================
W('cc','Graham Beck','Cuvée Clive','brv','Chardonnay / Pinot Noir','Prestige-Cuvée mit langer Hefelagerung: Brioche, Zitrus, feine Perlage.',{pts:97,aw:"Atkin 2025: Overall Sparkling Wine of the Year — Jg. 2019, 97 Pkt.; Platter's 2026: 5 Sterne"});
W('cc','Graham Beck','Cuvée Clive X','brv','Chardonnay / Pinot Noir','Extra lange gereifte Version der Cuvée Clive.',{pts:96,aw:"Platter's 2026: 96 Pkt. — Jg. 2015 (höchster Schaumwein der Ausgabe)"});
W('cc','Le Lude','Brut (Magnum)','fhk','Chardonnay / Pinot Noir','Aus der Magnumflasche, mit Zweitgärung unter Agrafe: komplex, cremig.',{pts:96,aw:"Platter's 2026: 96 Pkt. — Jg. 2015 (höchster Schaumwein der Ausgabe)"});
W('cc','Silverthorn','Jewel Box','brv','Chardonnay / Pinot Noir','Jahrgangs-Cap-Classique mit langer Hefelagerung.',{u:true,aw:"Platter's 2026: Wine of the Year Cap Classique — Jg. 2019"});
W('cc','Steenberg','Lady R','con','Chardonnay / Pinot Noir','Jahrgangs-Brut aus Constantia, die Prestige-Cuvée des Hauses.',{u:true,aw:"Amorim Cap Classique Challenge 2025: Gesamtsieger — Jg. 2019"});
W('cc','Silverthorn','Mad as the Mist and Snow Brut Nature','brv','Chardonnay','Brut Nature für die Cape Winemakers Guild Auction.',{u:true,aw:"Platter's 2026: 5 Sterne — Jg. 2019"});
W('cc','Pieter Ferreira','Blanc de Blancs','brv','Chardonnay','Persönliches Projekt von „Bubbles“ Ferreira: reiner Chardonnay, lange gereift.',{u:true,aw:"Platter's 2026: 5 Sterne — Jg. 2019"});
W('cc','Colmant','Absolu Blanc de Blancs Zero Dosage','fhk','Chardonnay','Reiner Chardonnay ohne Dosage: straff, kreidig, kompromisslos.',{aw:"Platter's 2026: 5 Sterne — NV"});
W('cc','Anthonij Rupert','Blanc de Blancs','fhk','Chardonnay','Reiner Chardonnay, fein und präzise.',{u:true,aw:"Platter's 2026: 5 Sterne — Jg. 2021"});
W('cc','Newstead','Lund Blanc de Blancs','csc','Chardonnay','Blanc de Blancs von der Garden Route bei Plettenberg Bay.',{aw:"Platter's 2026: 5 Sterne — Jg. 2018"});
W('cc','JC le Roux','Scintilla','stb','Chardonnay / Pinot Noir','Lang gereifte Prestige-Cuvée.',{aw:"Platter's 2026: 5 Sterne — Jg. 2016"});
W('cc','Waterford','Blanc de Blancs','stb','Chardonnay','Lang gereifter Blanc de Blancs aus Stellenbosch.',{aw:"Platter's 2026: 5 Sterne — Jg. 2018"});
W('cc','Graham Beck','Blanc de Blancs','brv','Chardonnay','Jahrgangs-Blanc-de-Blancs von Robertsons Kalkböden.',{aw:"Amorim Cap Classique Challenge 2025: Kategoriesieger Blanc de Blancs — Jg. 2019"});
W('cc','Kleine Zalze','Brut Rosé','stb','Pinot Noir / Chardonnay','Lachsfarben, rotbeerig, frisch.',{aw:"Amorim Cap Classique Challenge 2025: Kategoriesieger Rosé — NV"});
W('cc','Tokara','Cap Classique (lange Reife)','stb','Chardonnay / Pinot Noir','Über sieben Jahre auf der Hefe gereift.',{u:true,aw:"Amorim Cap Classique Challenge 2025: Kategoriesieger Extended Ageing (genauer Wein nicht gesichert)"});
W('cc','Klein Constantia','Blanc de Blancs','con','Chardonnay','Chardonnay aus Constantia, straff und salzig.',{aw:"Von britischer Fachpresse 2026 hervorgehoben (Jg. 2021) — keine Preis-Auszeichnung"});
W('cc','Le Lude','Agrafe Brut Reserve','fhk','Chardonnay / Pinot Noir','Zweitgärung unter Naturkorken – eine Seltenheit am Kap.');
W('cc','Colmant','Brut Reserve','fhk','Chardonnay / Pinot Noir','Der klassische, ausgewogene Brut des Hauses.');
W('cc','Simonsig','Cuvée Royale Blanc de Blancs','stb','Chardonnay','Prestige-Blanc-de-Blancs des Cap-Classique-Pioniers.');
W('cc','Simonsig','Kaapse Vonkel','stb','Chardonnay / Pinot Noir / Pinotage','1971 der erste Cap Classique Südafrikas – heute mit Pinotage-Anteil.');
W('cc','Laborie','Blanc de Blancs','paarl','Chardonnay','Blanc de Blancs aus Paarl.',{u:true,aw:"Laborie: Gesamtsieger Amorim Cap Classique Challenge 2023"});
W('cc','Villiera','Monro Brut','stb','Chardonnay / Pinot Noir','Lang gereifte Prestige-Cuvée.');
W('cc','Krone','Borealis Vintage Brut','tul','Chardonnay / Pinot Noir','Jahrgangs-Cap-Classique vom historischen Gut Twee Jonge Gezellen.');
W('cc','Haute Cabrière','Pierre Jourdan Belle Rose','fhk','Pinot Noir','Rosé aus reinem Pinot Noir.');
W('cc','Domaine des Dieux','Claudia Brut','hea','Chardonnay / Pinot Noir','Prestige-Cuvée aus dem kühlen Hemel-en-Aarde.',{u:true});

// ======================= SÜSS / FORTIFIED =======================
W('suess','Klein Constantia','Vin de Constance','con','Muscat de Frontignan','Unbotrytisierter Süßwein aus am Stock getrockneten Muskateller-Trauben. Ab 1986 wiederbelebt; das historische Original priesen Napoleon, Jane Austen und Baudelaire.');
W('suess','Mullineux','Straw Wine','swa','Chenin Blanc','Auf Stroh getrocknete Chenin-Trauben. Konzentriert, frisch, regelmäßig hoch bewertet.');
W('suess','Nederburg','Edelkeur','paarl','Chenin Blanc','1969 der erste edelsüße Botrytiswein Südafrikas.');
W('suess','Paul Cluver','Noble Late Harvest Riesling','elg','Riesling','Edelsüßer Riesling aus Elgin.',{u:true});
W('suess','Boplaas','Cape Vintage Reserve','kk','Touriga Nacional / Tinta Barocca','Südafrikas Antwort auf Vintage Port.');
W('suess','De Krans','Cape Vintage Reserve','kk','Touriga Nacional / Tinta Barocca','Zweiter Referenzerzeuger für Cape Vintage.');
