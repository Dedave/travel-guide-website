# Content for "25 Hidden Places in Italy Most Tourists Miss"
# Genuine, useful travel content organized by region.

PLACES = [
    # --- NORTH ---
    ("Tellaro", "Liguria", "A rose-and-ochre fishing village at the quiet end of the Gulf of Poets, just south of the crowded Cinque Terre. Sea laps against the church steps and there are no tour buses — only a handful of trattorie serving the day's catch.",
     "Go for sunset aperitivo on the tiny piazza by the water, then dinner at one of the two family-run restaurants."),
    ("Dozza", "Emilia-Romagna", "A medieval hill town whose walls are a permanent open-air gallery — artists have painted murals across the house fronts since 1960. Below the town, the Rocca Sforzesca hides a regional wine cellar.",
     "Combine the murals with a tasting at the Enoteca Regionale in the castle cellars."),
    ("Chioggia", "Veneto", "Locals call it 'Little Venice' — canals, bridges and a fish market, but with working boats instead of gondolas and a fraction of the price. Forty minutes from Venice and almost tourist-free.",
     "Arrive early for the morning fish market, the most authentic in the lagoon."),
    ("Sacro Monte di Varese", "Lombardy", "A UNESCO pilgrimage route of fourteen baroque chapels climbing a wooded hillside to a village with a view stretching to the Alps and Lake Maggiore.",
     "Walk up the cobbled Via Sacra in the morning light; take the funicular back down."),
    ("Neive", "Piedmont", "One of Italy's 'most beautiful villages', a cluster of brick towers in the Barbaresco wine hills — the Langhe — with none of the crowds of nearby Alba.",
     "Base yourself here in autumn for truffle season and Barbaresco tastings straight from the producers."),

    # --- CENTRE ---
    ("Civita di Bagnoregio", "Lazio", "The 'dying town' — a 2,500-year-old settlement perched on an eroding tufa pinnacle, reached only by a footbridge. Fewer than a dozen people live here year-round.",
     "Visit at dawn or dusk when day-trippers have gone and the town floats above the mist."),
    ("Calcata", "Lazio", "A cliff-top medieval borgo an hour from Rome, abandoned in the 1930s and resettled by artists and bohemians. Cobbled lanes are full of tiny studios, cafés and cats.",
     "Come on a weekend when the galleries and craft workshops are open."),
    ("Castelluccio di Norcia", "Umbria", "A lone stone village above a vast highland plain that erupts into a sea of wildflowers each summer — the 'Fiorita'. One of Italy's great natural spectacles, barely known abroad.",
     "Visit late May to early July for the bloom; bring a picnic of local lentils and cured meats."),
    ("Pitigliano", "Tuscany", "A honey-coloured town growing straight out of a tufa cliff, once home to a thriving Jewish community that earned it the name 'Little Jerusalem'. Etruscan sunken roads carve through the rock nearby.",
     "Tour the restored synagogue and ghetto, then walk a 'Vie Cave' — the mysterious Etruscan canyon paths."),
    ("Bagni San Filippo", "Tuscany", "Free natural hot springs in a Tuscan wood, where steaming water has built a dazzling white limestone formation called the 'Balena Bianca' (White Whale).",
     "Go early morning midweek to have the warm pools almost to yourself — entry is free."),
    ("Labro", "Lazio", "A tiny, perfectly restored stone village overlooking Lake Piediluco near the Umbrian border — a maze of arches, staircases and hidden gardens.",
     "Climb to the castle terrace for the lake view, then eat where the locals do on the main square."),
    ("Frasassi Caves", "Marche", "One of Europe's largest cave systems, with chambers big enough to hold a cathedral and forests of stalactites — yet almost unknown to foreign visitors.",
     "Book the guided walking route; bring a light jacket, it's cool underground year-round."),

    # --- SOUTH & ISLANDS ---
    ("Matera (Sassi)", "Basilicata", "Ancient cave dwellings — the Sassi — carved into a ravine and continuously inhabited for 9,000 years. Once a national shame, now a hauntingly beautiful UNESCO site still off most itineraries.",
     "Stay overnight in a restored cave hotel and see the Sassi lit up after the day-trippers leave."),
    ("Tropea", "Calabria", "A clifftop town above some of Italy's most astonishing turquoise water, with a monastery on a rock offshore. The Tyrrhenian coast's best-kept secret.",
     "Come in June or September for warm sea without the August Italian-holiday crush."),
    ("Castelmezzano & Pietrapertosa", "Basilicata", "Two villages clinging to the jagged 'Lucanian Dolomites'. A zip line — the 'Volo dell'Angelo' — connects them across the valley at up to 120 km/h.",
     "Do the via ferrata or the zip line, then recover with a plate of local peperoni cruschi."),
    ("Gravina in Puglia", "Puglia", "A town split by a deep gorge, spanned by a dramatic aqueduct bridge (yes — the one from the James Bond film). Cave churches and an underground city lie beneath.",
     "Walk the aqueduct bridge at golden hour and tour the rock-hewn churches."),
    ("Otranto", "Puglia", "The easternmost town in Italy, with a whitewashed old town, a Norman cathedral floored entirely in a 12th-century mosaic, and clear Adriatic water.",
     "See the astonishing Tree of Life mosaic, then swim at the Baia dei Turchi north of town."),
    ("Scilla", "Calabria", "A fishing village stacked below a castle on the Strait of Messina, its Chianalea quarter a row of houses rising straight from the sea. Homer's mythical monster lived here.",
     "Eat swordfish in Chianalea, the 'little Venice' of the south, with your feet almost in the water."),
    ("Procida", "Campania", "The smallest and least touristed island in the Bay of Naples — a riot of pastel fishermen's houses, no big resorts, and the real Mediterranean rhythm Capri lost long ago.",
     "Take the ferry from Naples, rent nothing, and simply wander Marina Corricella at sunset."),
    ("Castelsardo", "Sardinia", "A medieval town spiralling up to a castle above the sea in Sardinia's north, famous for basket-weaving and a coastline of wind-sculpted rock (see the 'Elephant Rock').",
     "Explore the old town's craft workshops and time your visit for the sea views from the ramparts."),
    ("Bosa", "Sardinia", "A row of candy-coloured houses along a palm-lined river beneath a hilltop castle — arguably Sardinia's prettiest town, and gloriously overlooked.",
     "Kayak or stroll the Temo riverbank, then drive the spectacular coast road to Alghero."),
    ("Scanno", "Abruzzo", "A stone mountain village in the Apennines beside a heart-shaped lake, known for its ancient costume, silver filigree jewellery and total lack of crowds.",
     "Hike to the 'heart lake' viewpoint, then watch artisans make the famous Presentosa pendant."),
    ("Erice", "Sicily", "A misty medieval town on a mountaintop above Trapani, reached by cable car, with two castles, cobbled lanes and Sicily's finest almond pastries.",
     "Ride the funivia up, buy genovesi pastries from Maria Grammatico, and catch the sunset over the salt pans."),
    ("Marzamemi", "Sicily", "A tiny former tuna-fishing village in Sicily's far southeast, its sun-bleached piazza opening straight onto the sea — a slow, salty, cinematic corner of the island.",
     "Eat fresh tuna and drink Nero d'Avola on the old tonnara square at dusk."),
    ("Ragusa Ibla", "Sicily", "The lower, older half of Ragusa — a baroque masterpiece of honey-stone churches and staircases rebuilt after a 1693 earthquake, and the heart of the Val di Noto.",
     "Get lost in Ibla's lanes early, then dine on Modican chocolate and Sicilian tasting menus."),
]

# Sanity: expect 25
assert len(PLACES) == 25, f"expected 25, got {len(PLACES)}"
