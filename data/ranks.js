const ranks = {
  kingdoms: [
    {
      id: 1,
      name: 'Animalia',
      description: 'The animal kingdom emerged as a clade within Apoikozoa as the sister group to the choanoflagellates. Animals are motile, meaning they can move spontaneously and independently at some point in their lives. Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later in their lives. All animals are heterotrophs: they must ingest other organisms or their products for sustenance.'
    },
    {
      id: 2,
      name: 'Plantae',
      description: 'Plants are mainly multicellular, predominantly photosynthetic eukaryotes of the kingdom Plantae. The term is today generally limited to the green plants, which form an unranked clade Viridiplantae (Latin for "green plants"). This includes the flowering plants, conifers and other gymnosperms, ferns, clubmosses, hornworts, liverworts, mosses and the green algae, and excludes the red and brown algae. Historically, plants formed one of two kingdoms covering all living things that were not animals, and both algae and fungi were treated as plants; however all current definitions of "plant" exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria).'
    },
    {
      id: 3,
      name: 'Fungi',
      description: 'A fungus is any member of the group of eukaryotic organisms that includes microorganisms such as yeasts and molds, as well as the more familiar mushrooms. These organisms are classified as a kingdom, Fungi, which is separate from the other eukaryotic life kingdoms of plants and animals. A characteristic that places fungi in a different kingdom from plants, bacteria, and some protists is chitin in their cell walls. Similar to animals, fungi are heterotrophs; they acquire their food by absorbing dissolved molecules, typically by secreting digestive enzymes into their environment. Fungi do not photosynthesise. Growth is their means of mobility, except for spores (a few of which are flagellated), which may travel through the air or water. Fungi are the principal decomposers in ecological systems.'
    },
    {
      id: 4,
      name: 'Eubacteria',
      description: "Bacteria (common noun bacteria, singular bacterium) constitute a large domain of prokaryotic microorganisms. Typically a few micrometres in length, bacteria have a number of shapes, ranging from spheres to rods and spirals. Bacteria were among the first life forms to appear on Earth, and are present in most of its habitats. Bacteria inhabit soil, water, acidic hot springs, radioactive waste, and the deep portions of Earth's crust. Bacteria also live in symbiotic and parasitic relationships with plants and animals. Most bacteria have not been characterised, and only about half of the bacterial phyla have species that can be grown in the laboratory. The study of bacteria is known as bacteriology, a branch of microbiology."
    }
  ],
  phyla: [
    {
      id: 5,
      name: 'Arthropoda',
      description: 'An arthropod is an invertebrate animal having an exoskeleton (external skeleton), a segmented body, and jointed appendages (paired appendages). Arthropods form the phylum Arthropoda, which includes insects, arachnids, myriapods, and crustaceans. Arthropods are characterized by their jointed limbs and cuticle made of chitin, often mineralised with calcium carbonate. The arthropod body plan consists of segments, each with a pair of appendages. The rigid cuticle inhibits growth, so arthropods replace it periodically by moulting. Their versatility has enabled them to become the most species-rich members of all ecological guilds in most environments. They have over a million described species, making up more than 80% of all described living animal species, some of which, unlike most animals, are very successful in dry environments.'
    },
    {
      id: 6,
      name: 'Chordata',
      description: 'A chordate is an animal belonging to the phylum Chordata; they possess a notochord, a hollow dorsal nerve cord, pharyngeal slits, an endostyle, and a post-anal tail, for at least some period of their life cycle. Chordates are deuterostomes, as during the embryo development stage the anus forms before the mouth. They are also bilaterally symmetric coelomates. In the case of vertebrate chordates, the notochord is usually replaced by a vertebral column during development, and they may have body plans organized via segmentation.'
    },
    {
      id: 7,
      name: 'Tracheophyta',
      description: 'Vascular plants (from Latin vasculum: duct), also known as tracheophytes (from the equivalent Greek term trachea) and also higher plants, form a large group of plants (c. 308,312 accepted known species) that are defined as those land plants that have lignified tissues (the xylem) for conducting water and minerals throughout the plant. They also have a specialized non-lignified tissue (the phloem) to conduct products of photosynthesis. Vascular plants include the clubmosses, horsetails, ferns, gymnosperms (including conifers) and angiosperms (flowering plants). Scientific names for the group include Tracheophyta and Tracheobionta.'
    },
    {
      id: 8,
      name: 'Basidiomycota',
      description: 'Basidiomycota is one of two large divisions that, together with the Ascomycota, constitute the subkingdom Dikarya (often referred to as the "higher fungi") within the kingdom Fungi. More specifically the Basidiomycota include these groups: mushrooms, puffballs, stinkhorns, bracket fungi, other polypores, jelly fungi, boletes, chanterelles, earth stars, smuts, bunts, rusts, mirror yeasts, and the human pathogenic yeast Cryptococcus. Basidiomycota are filamentous fungi composed of hyphae (except for basidiomycota-yeast; refer yeast for more information) and reproduce sexually via the formation of specialized club-shaped end cells called basidia that normally bear external meiospores (usually four).'
    },
    {
      id: 9,
      name: 'Proteobacteria',
      description: 'The "Proteobacteria" are a major phylum of Gram-negative bacteria. The name of the phylum has never been validly published as no type genus has been proposed, thus it must be styled in quotation marks as the name has no standing in nomenclature. They include a wide variety of pathogens, such as Escherichia, Salmonella, Vibrio, Helicobacter, Yersinia, and many other notable genera. Others are free-living (nonparasitic), and include many of the bacteria responsible for nitrogen fixation. Carl Woese established this grouping in 1987, calling it informally the "purple bacteria and their relatives". Because of the great diversity of forms found in this group, the "Proteobacteria" are named after Proteus, a Greek god of the sea capable of assuming many different shapes and is not named after the genus Proteus.'
    }
  ],
  classes: [
    {
      id: 10,
      name: 'Insecta',
      description: 'Insects are a class (Insecta) of hexapod invertebrates within the arthropod phylum that have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae. They are the most diverse group of animals on the planet, including more than a million described species and representing more than half of all known living organisms. The number of extant species is estimated at between six and ten million, and potentially represent over 90% of the differing animal life forms on Earth. Insects may be found in nearly all environments, although only a small number of species reside in the oceans, a habitat dominated by another arthropod group, crustaceans.'
    },
    {
      id: 11,
      name: 'Mammalia',
      description: 'Mammals are any vertebrates within the class Mammalia, a clade of endothermic amniotes distinguished from reptiles (including birds) by the possession of a neocortex (a region of the brain), hair, three middle ear bones and mammary glands. Females of all mammal species nurse their young with milk, secreted from the mammary glands. Mammals include the biggest animals on the planet, the great whales. The basic body type is a terrestrial quadruped, but some mammals are adapted for life at sea, in the air, in trees, underground or on two legs.'
    },
    {
      id: 12,
      name: 'Magnoliopsida',
      description: 'Magnoliopsida is a valid botanical name for a class of flowering plants. By definition the class will include the family Magnoliaceae, but its circumscription can otherwise vary, being more inclusive or less inclusive depending upon the classification system being discussed.'
    },
    {
      id: 13,
      name: 'Agaricomycetes',
      description: 'The Agaricomycetes are a class of fungi in the division Basidiomycota. The taxon is roughly identical to that defined for the Homobasidiomycetes (alternatively called holobasidiomycetes) by Hibbett & Thorn, with the inclusion of Auriculariales and Sebacinales. It includes not only mushroom-forming fungi, but also most species placed in the deprecated taxa Gasteromycetes and Homobasidiomycetes. Within the subdivision Agaricomycotina, which already excludes the smut and rust fungi, the Agaricomycetes can be further defined by the exclusion of the classes Tremellomycetes and Dacrymycetes, which are generally considered to be jelly fungi. However, a few former "jelly fungi", such as Auricularia, are classified in the Agaricomycetes. According to a 2008 estimate, Agaricomycetes include 17 orders, 100 families, 1147 genera, and about 21000 species. Modern molecular phylogenetic analyses have been since used to help define several new orders in the Agaricomycetes: Amylocorticiales, Jaapiales, Stereopsidales, and Lepidostromatales.'
    },
    {
      id: 14,
      name: 'Gammaproteobacteria',
      description: 'Gammaproteobacteria are a class of several medically, ecologically, and scientifically important groups of bacteria. An exceeding number of important pathogens belong to this class. Like all Proteobacteria, the Gammaproteobacteria are Gram-negative. The Gammaproteobacteria comprise several medically and scientifically important groups of bacteria, such as the Enterobacteriaceae, Vibrionaceae, and Pseudomonadaceae. A number of important pathogens belong to this class, e.g. Salmonella spp. (enteritis and typhoid fever), Yersinia pestis (plague), Vibrio cholerae (cholera), Pseudomonas aeruginosa (lung infections in hospitalized or cystic fibrosis patients), and Escherichia coli (food poisoning).'
    }
  ],
  orders: [
    {
      id: 15,
      name: 'Diptera',
      description: 'True flies are insects of the order Diptera, the name being derived from the Greek di = two, and ptera = wings. Insects of this order use only a single pair of wings to fly, the hindwings being reduced to club-like balancing organs known as halteres. Diptera is a large order containing an estimated 1,000,000 species including horse-flies, crane flies, hoverflies and others, although only about 125,000 species have been described.'
    },
    {
      id: 16,
      name: 'Primates',
      description: 'A primate is a mammal of the order Primates (Latin: "prime, first rank"). In taxonomy, primates include two distinct lineages, strepsirrhines and haplorhines. Primates arose from ancestors that lived in the trees of tropical forests; many primate characteristics represent adaptations to life in this challenging three-dimensional environment. Most primate species remain at least partly arboreal.'
    },
    {
      id: 17,
      name: 'Fabales',
      description: 'The Fabales are an order of flowering plants included in the rosid group of the eudicots in the Angiosperm Phylogeny Group II classification system. In the APG II circumscription, this order includes the families Fabaceae or legumes (including the subfamilies Caesalpinioideae, Mimosoideae, and Faboideae), Quillajaceae, Polygalaceae or milkworts (including the families Diclidantheraceae, Moutabeaceae, and Xanthophyllaceae), and Surianaceae. Under the Cronquist system and some other plant classification systems, the order Fabales contains only the family Fabaceae. In the classification system of Dahlgren the Fabales were in the superorder Fabiflorae (also called Fabanae) with three familiese corresponding to the subfamilies of Fabaceae in APG II. The other families treated in the Fabales by the APG II classification were placed in separate orders by Cronquist, the Polygalaceae within its own order, the Polygalales, and the Quillajaceae and Surianaceae within the Rosales.'
    },
    {
      id: 18,
      name: 'Agaricales',
      description: 'The fungal order Agaricales, also known as gilled mushrooms (for their distinctive gills) or euagarics, contains some of the most familiar types of mushrooms. The order has 33 extant families, 413 genera, and over 13000 described species, along with five extinct genera known only from the fossil record. They range from the ubiquitous common mushroom to the deadly destroying angel and the hallucinogenic fly agaric to the bioluminescent jack-o-lantern mushroom.'
    },
    {
      id: 19,
      name: 'Enterobacteriales',
      description: 'The Enterobacteriales are an order of gram-negative bacteria that includes only one family which is the Enterobacteriaceae.'
    }
  ],
  families: [
    {
      id: 20,
      name: 'Drosophilidae',
      description: 'The Drosophilidae are a diverse, cosmopolitan family of flies, which includes fruit flies. Another unrelated family of flies, Tephritidae, also includes species known as "fruit flies". The best known species of the Drosophilidae is Drosophila melanogaster, within the genus Drosophila, and this species is used extensively for studies concerning genetics, development, physiology, ecology and behaviour. This fruit fly is mostly composed of post-mitotic cells, has a very short lifespan, and shows gradual aging. As in other species, temperature influences the life history of the animal. Several genes have been identified that can be manipulated to extend the lifespan of these insects.'
    },
    {
      id: 21,
      name: 'Hominidae',
      description: 'The Hominidae, whose members are known as great apes or hominids, are a taxonomic family of primates that includes seven extant species in four genera: Pongo, the Bornean and Sumatran orangutan; Gorilla, the eastern and western gorilla; Pan, the common chimpanzee and the bonobo; and Homo, the human (and though not extant, the near-human ancestors and relatives (e.g., the Neanderthal)).'
    },
    {
      id: 22,
      name: 'Fabaceae',
      description: 'The Fabaceae, Leguminosae or Papilionaceae, commonly known as the legume, pea, or bean family, are a large and economically important family of flowering plants. It includes trees, shrubs, and perennial or annual herbaceous plants, which are easily recognized by their fruit (legume) and their compound, stipulated leaves. Many legumes have characteristics of flowers and fruits.The family is widely distributed, and is the third-largest land plant family in terms of number of species, behind only the Orchidaceae and Asteraceae, with about 751 genera and some 19,000 known species. The five largest of the genera are Astragalus (over 3,000 species), Acacia (over 1000 species), Indigofera (around 700 species), Crotalaria (around 700 species) and Mimosa (around 500 species), which constitute about a quarter of all legume species. The ca. 19,000 known legume species amount to about 7% of flowering plant species. Fabaceae is the most common family found in tropical rainforests and in dry forests in the Americas and Africa.'
    },
    {
      id: 23,
      name: 'Amanitaceae',
      description: 'The Amanitaceae is a family of mushroom-forming fungi. The family, also commonly called the amanita family, is in order Agaricales, the gilled mushrooms. The family consists primarily of the large genus Amanita, but also includes the smaller genera Amarrendia, Catatrama, Limacella, Saproamanita and Torrendia. Both Amarrendia and Torrendia and considered to be synonymous with Amanita but appear quite different because they are secotioid. The species are usually found in woodlands. The most characteristic emerge from an egg-like structure formed by the universal veil.'
    },
    {
      id: 24,
      name: 'Enterobacteriaceae',
      description: 'The Enterobacteriaceae are a large family of Gram-negative bacteria that includes, along with many harmless symbionts, many of the more familiar pathogens, such as Salmonella, Escherichia coli, Yersinia pestis, Klebsiella, and Shigella. Other disease-causing bacteria in this family include Proteus, Enterobacter, Serratia, and Citrobacter. This family is the only representative in the order Enterobacteriales of the class Gammaproteobacteria in the phylum Proteobacteria. Phylogenetically, in the Enterobacteriales, several peptidoglycan-less insect endosymbionts form a sister clade to the Enterobacteriaceae, but as they are not validly described, this group is not officially a taxon; examples of these species are Sodalis, Buchnera, Wigglesworthia, Baumannia cicadellinicola, and Blochmannia, but not former Rickettsias. Members of the Enterobacteriaceae can be trivially referred to as enterobacteria or "enteric bacteria", as several members live in the intestines of animals. In fact, the etymology of the family is enterobacterium with the suffix to designate a family (aceae)—not after the genus Enterobacter (which would be "Enterobacteraceae")—and the type genus is Escherichia.'
    }
  ],
  genera: [
    {
      id: 25,
      name: 'Drosophila',
      description: 'Drosophila is a genus of flies, belonging to the family Drosophilidae, whose members are often called "fruit flies" or (less frequently) pomace flies, vinegar flies, or wine flies, a reference to the characteristic of many species to linger around overripe or rotting fruit. They should not be confused with the Tephritidae, a related family, which are also called fruit flies (sometimes referred to as "true fruit flies"); tephritids feed primarily on unripe or ripe fruit, with many species being regarded as destructive agricultural pests, especially the Mediterranean fruit fly.'
    },
    {
      id: 26,
      name: 'Homo',
      description: 'Homo is the genus that comprises the species Homo sapiens, which includes modern humans, as well as several extinct species classified as ancestral to or closely related to modern humans, most notably Homo erectus. The genus is between 2 and 3 million years old, taken to emerge with the appearance of Homo habilis and possibly that of Homo gautengensis. Homo is derived from the genus Australopithecus, which itself had previously split from the lineage of Pan, the chimpanzees. Taxonomically, Homo is the only genus assigned to the subtribe Hominina which, with the subtribes Australopithecina and Panina, comprise the tribe Hominini (see evolutionary tree below). All species of the genus Homo plus those species of the australopithecines that arose after the split from Pan are called hominins.'
    },
    {
      id: 27,
      name: 'Pisum',
      description: 'Pisum is a genus of the family Fabaceae, native to southwest Asia and northeast Africa. Pisum sativum (the field or garden pea), is a major human food crop. Pisum species are used as food plants by the larvae of some Lepidoptera species including Bucculatrix pyrivorella, cabbage moth, common swift, ghost moth, Hypercompe indecisa, the nutmeg, setaceous Hebrew character and turnip moth. The Pisum sativum flower has 5 sepals (fused), 5 petals, 10 stamens (9 fused in a staminal tube and 1 stamen is free) and 1 subsessil carpel.'
    },
    {
      id: 28,
      name: 'Amanita',
      description: 'The genus Amanita contains about 600 species of agarics including some of the most toxic known mushrooms found worldwide, as well as some well-regarded edible species. This genus is responsible for approximately 95% of the fatalities resulting from mushroom poisoning, with the death cap accounting for about 50% on its own. The most potent toxin present in these mushrooms is α-amanitin. The genus also contains many edible mushrooms, but mycologists discourage mushroom hunters, other than knowledgeable experts, from selecting any of these for human consumption. Nonetheless, in some cultures, the larger local edible species of Amanita are mainstays of the markets in the local growing season. Samples of this are Amanita zambiana and other fleshy species in central Africa, A. basii and similar species in Mexico, A. caesarea and the "Blusher" Amanita rubescens in Europe, and A. chepangiana in South-East Asia. Other species are used for colouring sauces, such as the red A. jacksonii with a range from eastern Canada to eastern Mexico. Many species are of unknown edibility, especially in countries such as Australia, where many fungi are little-known.'
    },
    {
      id: 29,
      name: 'Escherichia',
      description: 'Escherichia is a genus of Gram-negative, nonspore forming, facultatively anaerobic, rod-shaped bacteria from the family Enterobacteriaceae. In those species which are inhabitants of the gastrointestinal tracts of warm-blooded animals, Escherichia species provide a portion of the microbially derived vitamin K for their host. A number of the species of Escherichia are pathogenic. The genus is named after Theodor Escherich, the discoverer of Escherichia coli.'
    }
  ]
}

export default ranks
