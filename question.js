// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which of the following terms is best described as the process of reproduction in yeast that begins with a weakening and outpouching of the yeast cell wall and then formation of a cell wall septum between the mother and daughter yeast cells?",
    answer: "Budding",
    options: [
      "Binary fission",
      "Unisexual division",
      "Budding",
      "Outpouch germing"
    ]
  },
  {
    numb: 2,
    question: "The loose intertwined network of basic structural units of the molds that penetrates the substrate from which it obtains the necessary nutrients for growth is called which of the following?",
    answer: "Mycelium",
    options: [
      "Hyphae",
      "Germ tubes",
      "Pseudohyphae",
      "Mycelium"
    ]
  },
  {
    numb: 3,
    question: "The term hyaline molds is used to describe which of the following?",
    answer: "The presence of pigmentation within the hyphae or the spores",
    options: [
      "Molds that have septate hyphae",
      "Molds that have septate, nonpigmented hyphae",
      "The presence of pigmentation within the hyphae or the spores",
      "Molds with intercalated hyaline chlamydoconidia"
    ]
  },
  {
    numb: 4,
    question: "Large, usually multiseptate and club-shaped or spindle-shaped spores are called which of the following?",
    answer: "Macroconidia",
    options: [
      "Microconidia",
      "Macroconidia",
      "Conidiophores",
      "Phialides"
    ]
  },
  {
    numb: 5,
    question: "A patient with a Wood’s lamp–positive, dermatophytic infection has a skin scraping taken for culture. The organism grows on SDA agar with a light-tan front and salmon-colored reverse. Microscopically the organism produces rare distorted macroconidia and rare microconidia. Additionally, there was no growth on sterile rice media. What is the most likely organism?",
    answer: "Microsporum audouinii",
    options: [
      "Microsporum canis",
      "Microsporum gypseum",
      "Microsporum audouinii",
      "Epidermophyton floccosum"
    ]
  },
  {
    numb: 6,
    question: "A KOH preparation of respiratory secretions of a 78-year-old man reveals large, spherical, thick-walled yeast cells 8 to 15 mm in diameter, usually with a single bud that is connected to the parent cell by a broad base. Which fungus will likely be isolated from the culture?",
    answer: "Blastomyces dermatitidis",
    options: [
      "Coccidioides immitis",
      "Blastomyces dermatitidis",
      "Histoplasma capsulatum",
      "Paracoccidioides brasiliensis"
    ]
  },
  {
    numb: 7,
    question: "Which of the following is a key characteristic of Coccidioides immitis?",
    answer: "Produces endosporulating spherules in tissue",
    options: [
      "Has a higher dissemination rate in white females",
      "Is endemic in the northeastern United States",
      "Produces endosporulating spherules in tissue",
      "Forms foot cells"
    ]
  },
  {
    numb: 8,
    question: "A germ tube–negative yeast is isolated in the laboratory. The isolate is found to be negative for urease and unable to assimilate dextrose, maltose, or sucrose. CMT agar morphology showed blastoconidia only. The organism is most likely:",
    answer: "Torulopsis glabrata",
    options: [
      "Candida albicans",
      "Candida parapsilosis",
      "Torulopsis glabrata",
      "Geotrichum candidum"
    ]
  },
  {
    numb: 9,
    question: "Which of the following is a key characteristic by which an unknown Cryptococcus spp. can be identified as Cryptococcus neoformans?",
    answer: "Positive niger seed agar test",
    options: [
      "Appearance of yellow colonies",
      "Positive urease test",
      "Presence of a capsule",
      "Positive niger seed agar test"
    ]
  },

  {
    numb: 10,
    question: "Which of the following statements concerning the germ tube test is true?",
    answer: "Candida albicans and Candida tropicalis can be used as positive and negative controls, respectively",
    options: [
      "Using a heavy inoculum enhances the rapid production of germ tubes",
      "Germ tubes should be read after 2 hours of incubation at 25c",
      "Candida albicans and Candida tropicalis can be used as positive and negative controls, respectively",
      "Serum will be stable for 1 year if stored at room temperature"
    ]
  },
  {
    numb: 11,
    question: "A mold isolated in the laboratory displays a white cottony macroscopic morphology. On microscopic evaluation, hyaline, septate hyphae, and 'tooth-brush'-like conidiophores are seen. The most likely organism is which of the following?",
    answer: "Acremonium sp.",
    options: [
      "Aspergillus sp.",
      "Acremonium sp.",
      "Gliocladium sp.",
      "Scopulariopsis sp."
    ]
  },
  {
    numb: 12,
    question: "A mold is isolated in the laboratory that displays a velvety, gray-green colony morphology. On microscopic evaluation, flask-shaped conidiophores arranged in a brushlike formation are seen. The most likely organism is which of the following?",
    answer: "Penicillium sp.",
    options: [
      "Penicillium sp.",
      "Acremonium sp.",
      "Paecilomyces sp.",
      "Scopulariopsis sp."
    ]
  },
  {
    numb: 13,
    question: "During viral assembly, how are viral envelopes acquired?",
    answer: "As the virion buds from a host cell membrane",
    options: [
      "By production of envelope constituents by host cellular DNA",
      "As the virion buds from a host cell membrane",
      "Through replication of viral nucleic acid",
      "As host cell lysis produces many membrane fragments"
    ]
  },
  {
    numb: 14,
    question: "Prions are best described by which of the following?",
    answer: "Infectious protein with no associated nucleic acid",
    options: [
      "Infectious viral RNA without capsid proteins",
      "Infectious protein with no associated nucleic acid",
      "Infectious viral DNA without capsid proteins",
      "Nonenveloped virus highly resistant to heat and chemical inactivation"
    ]
  },
  {
    numb: 15,
    question: "The viral nucleocapsid always contains which of the following?",
    answer: "Viral genome",
    options: [
      "Viral genome",
      "Virus-encoded glycoprotein",
      "Virus-encoded polymerase",
      "Viral envelope"
    ]
  },
  {
    numb: 16,
    question: "Which of the following viruses are thought to predominately cause gastroenteritis?",
    answer: "Noroviruses",
    options: [
      "Hepadnaviruses",
      "Filoviruses",
      "Noroviruses",
      "Arboviruses"
    ]
  },
  {
    numb: 17,
    question: "Which of the following groups contains the SARS virus?",
    answer: "Coronavirus",
    options: [
      "Calicivirus",
      "Coronavirus",
      "Flavivirus",
      "Filovirus"
    ]
  },
  {
    numb: 18,
    question: "Which of the following groups of virus is best described as: ssRNA, enveloped, pleomorphic/spherical capsid, large club-shaped spikes on surface gives 'corona' effect, causes approximately 15% of cold-like illness?",
    answer: "Coronaviruses",
    options: [
      "Influenza A",
      "Influenza B",
      "Coronaviruses",
      "Pneumovirus"
    ]
  },
  {
    numb: 19,
    question: "Which of the following is the specimen of choice for detecting rotavirus?",
    answer: "Feces sample",
    options: [
      "Throat swab",
      "Urine sample",
      "Bronchoalveolar wash",
      "Feces sample"
    ]
  },
  {
    numb: 20,
    question: "The test of choice and most sensitive assay for use with CSF to diagnose aseptic meningitis caused by enterovirus is which of the following?",
    answer: "PCR",
    options: [
      "Cell culture",
      "PCR",
      "Antigenemia immunoassay",
      "Shell vial assay"
    ]
  },
  {
    numb: 21,
    question: "Which preservation method is most suitable and the most widely used for subsequent fixed smear preparation?",
    answer: "PVA",
    options: [
      "Formalin-ethyl acetate",
      "PVA",
      "Trichrome",
      "MIF"
    ]
  },
  {
    numb: 22,
    question: "If the ova of this parasite are ingested by humans, the oncosphere form can migrate through the body via the bloodstream, resulting in the condition known as cysticercosis. Which of the following is correct?",
    answer: "Taenia solium",
    options: [
      "Taenia solium",
      "Entamoeba histolytica",
      "Hymenolepis nana",
      "Clonorchis sinensis"
    ]
  },
  {
    numb: 23,
    question: "Ova recovered from the stool are routinely used to diagnose infections caused by all of the following except?",
    answer: "Strongyloides stercoralis",
    options: [
      "Necator americanus",
      "Ascaris lubricoides",
      "Trichuris trichiura",
      "Strongyloides stercoralis"
    ]
  },
  {
    numb: 24,
    question: "An MLS finds an E.coli cyst on a wet mount of a fresh stool specimen. Which of the following should be done?",
    answer: "Examine the remaining area of the wet preparation",
    options: [
      "Request a second specimen",
      "Look for additional E. coli cysts",
      "Examine the remaining area of the wet preparation",
      "Generate a final report"
    ]
  },
  {
    numb: 25,
    question: "Which of the following parasites have migration through the lungs as part of their lifecycle?",
    answer: "Necator americanus, Ancylostoma duodenale, Strongyloides stercoralis",
    options: [
      "Necator americanus, Ancylostoma duodenale, Strongyloides stercoralis",
      "Giardia lamblia, Wuchereria bancrofti, Brugia malayi",
      "Enterobius vermicularis, Trichuris trichiura, Trichinella spiralis",
      "Toxocara canis, Toxoplasma gondii, Blastocystis hominis"
    ]
  },
  {
    numb: 26,
    question: "Microfilariae found in the blood that have a sheath, demonstrate nocturnal periodicity and exhibit nuclei that do not extend to the tail tip are which of the following?",
    answer: "Wuchereria bancrofti",
    options: [
      "Brugia malayi",
      "Onchocerca volvulus",
      "Loa loa",
      "Wuchereria bancrofti"
    ]
  },
  {
    numb: 27,
    question: "Necator americanus rhabditiform larvae can be differentiated from Strongyloides stercoralis rhabditiform larvae by:",
    answer: "Size of the genital primordium",
    options: [
      "Length of the notched tail",
      "Length of the head region",
      "Segmentation",
      "Size of the genital primordium"
    ]
  },
  
  {
    numb: 28,
    question: "The only known human tapeworm with an operculum is:",
    answer: "Diphyllobothrium latum",
    options: [
      "Diphyllobothrium latum",
      "Hymenolepis nana",
      "Giardia lamblia",
      "Schistosoma haematobium"
    ]
  }


];