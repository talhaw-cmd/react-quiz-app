const questions = [
  // --- GEOPOLITICS & HISTORY ---
  {
    question: "Which geopolitical theory suggests that whoever controls Eastern Europe controls the 'Heartland'?",
    options: ["Mahan's Sea Power", "Mackinder’s Heartland Theory", "Spykman’s Rimland Theory", "Huntington’s"],
    answer: "Mackinder’s Heartland Theory",
  },
  {
    question: "The 'Thucydides Trap' refers to the inevitability of war between:",
    options: ["Nuclear powers", "A rising power and a hegemon", "Two democracies", "Land and Sea powers"],
    answer: "A rising power and a hegemon",
  },
  {
    question: "What does 'Finlandization' mean in International Relations?",
    options: ["Economic growth", "Neutrality dictated by a superpower", "Military expansion", "State collapse"],
    answer: "Neutrality dictated by a superpower",
  },
  {
    question: "The 'Great Game' was a rivalry between which two empires over Central Asia?",
    options: ["British and Russian", "Ottoman and Persian", "French and German", "Chinese and Japanese"],
    answer: "British and Russian",
  },
  {
    question: "The 'Treaty of Westphalia' (1648) established the modern concept of:",
    options: ["Human Rights", "State Sovereignty", "Free Trade", "Democracy"],
    answer: "State Sovereignty",
  },
  {
    question: "Which region is often called the 'Third Pole' due to its ice reserves?",
    options: ["The Himalayas", "The Andes", "The Alps", "Greenland"],
    answer: "The Himalayas",
  },
  {
    question: "What is 'Soft Power'?",
    options: ["Economic sanctions", "Military force", "Influence through attraction/culture", "Cyber warfare"],
    answer: "Influence through attraction/culture",
  },
  {
    question: "The 'String of Pearls' refers to which country's strategic network in the Indian Ocean?",
    options: ["India", "USA", "China", "Russia"],
    answer: "China",
  },
  {
    question: "What was the 'Iron Curtain'?",
    options: ["A physical wall in China", "The ideological divide in Europe", "A naval blockade", "A trade barrier"],
    answer: "The ideological divide in Europe",
  },
  {
    question: "What is a 'Shatterbelt' in geopolitics?",
    options: ["A peaceful zone", "A region caught between colliding global powers", "A mountain range", "An economic union"],
    answer: "A region caught between colliding global powers",
  },

  // --- PHYSICS & SPACE ---
  {
    question: "Which principle states position and momentum cannot both be known precisely?",
    options: ["Pauli Principle", "Heisenberg Uncertainty", "Schrödinger's Cat", "Newton's Second Law"],
    answer: "Heisenberg Uncertainty",
  },
  {
    question: "What is the 'Event Horizon' of a Black Hole?",
    options: ["The bright center", "The point of no return", "The core", "The outer orbit"],
    answer: "The point of no return",
  },
  {
    question: "Which particle is the carrier of the electromagnetic force?",
    options: ["Gluon", "Graviton", "Photon", "W Boson"],
    answer: "Photon",
  },
  {
    question: "What does the Second Law of Thermodynamics state about Entropy?",
    options: ["It decreases", "It stays constant", "It always increases", "It is zero"],
    answer: "It always increases",
  },
  {
    question: "What is the escape velocity of Earth?",
    options: ["9.8 km/s", "11.2 km/s", "5.4 km/s", "20.1 km/s"],
    answer: "11.2 km/s",
  },
  {
    question: "Which effect causes a change in frequency of a wave for an observer moving relative to its source?",
    options: ["Photoelectric Effect", "Doppler Effect", "Compton Effect", "Tyndall Effect"],
    answer: "Doppler Effect",
  },
  {
    question: "What is 'Dark Matter' believed to do?",
    options: ["Emit light", "Provide gravitational pull", "Absorb light", "Heat the universe"],
    answer: "Provide gravitational pull",
  },
  {
    question: "Who developed the theory of General Relativity?",
    options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
    answer: "Albert Einstein",
  },
  {
    question: "What is the absolute zero temperature in Celsius?",
    options: ["0°C", "-100°C", "-273.15°C", "-459°C"],
    answer: "-273.15°C",
  },
  {
    question: "Which force is the weakest of the four fundamental forces?",
    options: ["Strong Nuclear", "Weak Nuclear", "Electromagnetic", "Gravity"],
    answer: "Gravity",
  },

  // --- COMPUTER SCIENCE & TECHNOLOGY ---
  {
    question: "Which Big O notation describes a Binary Search algorithm?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "What does 'ACID' stand for in Database Transactions?",
    options: ["Accuracy, Cost, ID, Data", "Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrated, Disk", "None"],
    answer: "Atomicity, Consistency, Isolation, Durability",
  },
  {
    question: "In the OSI model, which layer handles IP Routing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Network",
  },
  {
    question: "What is a 'Deadlock' in Operating Systems?",
    options: ["A system crash", "Processes waiting indefinitely for each other", "A virus", "Memory leak"],
    answer: "Processes waiting indefinitely for each other",
  },
  {
    question: "Which protocol is used to securely transfer files over the web?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: "HTTPS",
  },
  {
    question: "What is 'Hoisting' in JavaScript?",
    options: ["Moving declarations to top", "Deleting variables", "Increasing speed", "Error handling"],
    answer: "Moving declarations to top",
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Stack",
  },
  {
    question: "What is the primary function of a 'Kernel'?",
    options: ["UI Design", "Managing hardware-software communication", "Web browsing", "File compression"],
    answer: "Managing hardware-software communication",
  },
  {
    question: "Which algorithm is used by Google to rank web pages?",
    options: ["Dijkstra", "PageRank", "A*", "Merge Sort"],
    answer: "PageRank",
  },
  {
    question: "What is 'Encryption'?",
    options: ["Compressing files", "Converting data into code", "Deleting data", "Copying data"],
    answer: "Converting data into code",
  },

  // --- BIOLOGY & CHEMISTRY ---
  {
    question: "What is the 'Powerhouse' of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
    answer: "Mitochondria",
  },
  {
    question: "What is the process by which plants make food?",
    options: ["Respiration", "Photosynthesis", "Osmosis", "Diffusion"],
    answer: "Photosynthesis",
  },
  {
    question: "Which molecule carries genetic information?",
    options: ["ATP", "DNA", "RNA", "Hemoglobin"],
    answer: "DNA",
  },
  {
    question: "What is 'Mitosis'?",
    options: ["Cell death", "Cell division resulting in two identical cells", "Protein synthesis", "Energy production"],
    answer: "Cell division resulting in two identical cells",
  },
  {
    question: "Which organelle is responsible for protein synthesis?",
    options: ["Lysosome", "Ribosome", "Vacuole", "Centriole"],
    answer: "Ribosome",
  },
  {
    question: "What is the PH value of pure water?",
    options: ["0", "5", "7", "14"],
    answer: "7",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    answer: "Skin",
  },
  {
    question: "Which enzyme breaks down starch into sugar?",
    options: ["Lipase", "Amylase", "Protease", "Catalase"],
    answer: "Amylase",
  },
  {
    question: "What is 'Epigenetics'?",
    options: ["Mutation", "Gene expression changes without DNA change", "Cloning", "Species extinction"],
    answer: "Gene expression changes without DNA change",
  },

  // --- MIXED INTELLECTUAL CHALLENGES ---
  {
    question: "What is 'Ockham’s Razor'?",
    options: ["Complexity is key", "Simplest explanation is usually correct", "Sharp logic", "A mathematical formula"],
    answer: "Simplest explanation is usually correct",
  },
  {
    question: "What is the 'Prisoner’s Dilemma' a part of?",
    options: ["Biology", "Game Theory", "Geology", "Chemistry"],
    answer: "Game Theory",
  },
  {
    question: "Which philosopher wrote 'The Republic'?",
    options: ["Aristotle", "Socrates", "Plato", "Kant"],
    answer: "Plato",
  },
  {
    question: "What is 'Inflation' in economics?",
    options: ["Falling prices", "Rising purchasing power", "General increase in prices", "Bank collapse"],
    answer: "General increase in prices",
  },
  {
    question: "The 'Butterfly Effect' is a concept in which theory?",
    options: ["Evolution", "Chaos Theory", "Quantum Mechanics", "Relativity"],
    answer: "Chaos Theory",
  },
  {
    question: "What does 'GNP' stand for?",
    options: ["Gross National Product", "General Net Profit", "Global National Price", "None"],
    answer: "Gross National Product",
  },
  {
    question: "Which city is the seat of the International Court of Justice?",
    options: ["Geneva", "New York", "The Hague", "Brussels"],
    answer: "The Hague",
  },
  {
    question: "What is the 'Malthusian Trap'?",
    options: ["Economic boom", "Population exceeding food supply", "Technological stagnation", "War"],
    answer: "Population exceeding food supply",
  },
  {
    question: "Who is the author of 'The Prince'?",
    options: ["Shakespeare", "Machiavelli", "Dante", "Homer"],
    answer: "Machiavelli",
  },
  {
    question: "What is 'Sustainable Development'?",
    options: ["Rapid industrialization", "Meeting needs without compromising future", "Deforestation", "Urbanization"],
    answer: "Meeting needs without compromising future",
  },
{
    question: "What was the primary goal of the 'Meiji Restoration' in Japan?",
    options: ["Restore Feudalism", "Modernization and Westernization", "Communist Revolution", "Isolationism"],
    answer: "Modernization and Westernization",
  },
  {
    question: "The 'Magna Carta' (1215) is famous for what?",
    options: ["Ending the Monarchy", "Limiting the power of the King", "Starting the Crusades", "Creating the United Nations"],
    answer: "Limiting the power of the King",
  },
  {
    question: "Which peace treaty officially ended World War I?",
    options: ["Treaty of Paris", "Treaty of Ghent", "Treaty of Versailles", "Treaty of Trianon"],
    answer: "Treaty of Versailles",
  },
  {
    question: "The 'Cold War' was primarily a struggle between which two ideologies?",
    options: ["Fascism and Democracy", "Capitalism and Communism", "Monarchy and Republic", "Nationalism and Globalism"],
    answer: "Capitalism and Communism",
  },
  {
    question: "Who was the primary architect of the 'Unification of Germany' in 1871?",
    options: ["Adolf Hitler", "Otto von Bismarck", "Wilhelm II", "Frederick the Great"],
    answer: "Otto von Bismarck",
  },

  // --- QUANTUM & THEORETICAL PHYSICS (66-80) ---
  {
    question: "Which phenomenon describes particles remaining connected so that the state of one affects the other instantly, regardless of distance?",
    options: ["Quantum Tunneling", "Quantum Entanglement", "Superposition", "Wave-Particle Duality"],
    answer: "Quantum Entanglement",
  },
  ,
  {
    question: "What is the 'Chandrasekhar Limit' related to?",
    options: ["Speed of sound", "Maximum mass of a stable white dwarf star", "Expansion of the universe", "Black hole evaporation"],
    answer: "Maximum mass of a stable white dwarf star",
  },
  {
    question: "Which theory attempts to reconcile General Relativity with Quantum Mechanics?",
    options: ["String Theory", "Big Bang Theory", "Steady State Theory", "Kinetic Theory"],
    answer: "String Theory",
  },
  {
    question: "What is 'Time Dilation' according to Special Relativity?",
    options: ["Time stops in space", "Time passes slower for an object moving at high speeds", "Time moves backwards near a star", "Time is the same everywhere"],
    answer: "Time passes slower for an object moving at high speeds",
  },
  {
    question: "The 'Standard Model' of physics does NOT currently explain which force?",
    options: ["Electromagnetism", "Weak Nuclear Force", "Strong Nuclear Force", "Gravity"],
    answer: "Gravity",
  },

  // --- ADVANCED COMPUTER SCIENCE (81-90) ---
  {
    question: "In Cryptography, what is a 'Zero-Knowledge Proof'?",
    options: ["Proving you know a secret without revealing the secret itself", "An unhackable password", "A system with no security", "A type of virus"],
    answer: "Proving you know a secret without revealing the secret itself",
  },
  {
    question: "What is 'P vs NP' in computational complexity?",
    options: ["A hardware problem", "The question of whether every problem whose solution can be checked quickly can also be solved quickly", "A network protocol", "A type of database"],
    answer: "The question of whether every problem whose solution can be checked quickly can also be solved quickly",
  },
  {
    question: "Which consensus algorithm is used by Bitcoin?",
    options: ["Proof of Stake", "Proof of Authority", "Proof of Work", "Delegated Proof of Stake"],
    answer: "Proof of Work",
  },
  {
    question: "What does a 'Compiler' do?",
    options: ["Runs the code line by line", "Translates high-level code into machine code", "Browses the internet", "Compresses images"],
    answer: "Translates high-level code into machine code",
  },
  {
    question: "What is 'Polymorphism' in Object-Oriented Programming?",
    options: ["Hiding data", "The ability of different classes to be treated as instances of the same interface", "Creating multiple copies of a variable", "A bug in the system"],
    answer: "The ability of different classes to be treated as instances of the same interface",
  },

  // --- GENETICS & BIO-CHEMISTRY (91-100) ---
  {
    question: "What does 'CRISPR-Cas9' allow scientists to do?",
    options: ["Measure heart rate", "Edit parts of the genome", "Synthesize gold", "View distant galaxies"],
    answer: "Edit parts of the genome",
  },
  

  {
    question: "Which molecule is known as the 'Energy Currency' of the cell?",
    options: ["Glucose", "ATP", "DNA", "Lipid"],
    answer: "ATP",
  },
  {
    question: "What is 'Zoonosis'?",
    options: ["Study of zoos", "A disease that can be transmitted from animals to humans", "Plant cell division", "A type of bacteria"],
    answer: "A disease that can be transmitted from animals to humans",
  },
  {
    question: "What is the primary function of 'Enzymes' in biological systems?",
    options: ["Provide structure", "Act as biological catalysts to speed up reactions", "Store fat", "Carry oxygen"],
    answer: "Act as biological catalysts to speed up reactions",
  },
  {
    question: "What is the 'Fermi Paradox'?",
    options: ["The lack of evidence for alien civilizations despite high probability", "A mathematical error in physics", "The cooling of the sun", "A theory on black holes"],
    answer: "The lack of evidence for alien civilizations despite high probability",
  },
  {
    question: "Which economic concept describes a market dominated by a small number of large sellers?",
    options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopsony"],
    answer: "Oligopoly",
  },
  {
    question: "What is 'The Great Filter' theory?",
    options: ["A water purification method", "A stage in evolution that prevents civilizations from becoming interstellar", "An internet firewall", "A social media algorithm"],
    answer: "A stage in evolution that prevents civilizations from becoming interstellar",
  },
  {
    question: "The 'Pareto Principle' states that:",
    options: ["All people are equal", "80% of consequences come from 20% of causes", "Markets are always efficient", "Population grows exponentially"],
    answer: "80% of consequences come from 20% of causes",
  },
  {
    question: "What is the 'Turing Machine'?",
    options: ["A time machine", "A mathematical model of computation", "The first laptop", "An AI chat bot"],
    answer: "A mathematical model of computation",
  },
  {
    question: "In Geopolitics, what is 'The Suwalki Gap'?",
    options: ["A trade agreement", "A strategic strip of land between Poland and Lithuania", "A mountain pass in China", "A canyon in the US"],
    answer: "A strategic strip of land between Poland and Lithuania",
  },  

  {
    question: "What is a 'Salt' in the context of password hashing?",
    options: ["A way to encrypt hardware", "Random data added to a password before hashing", "A type of firewall", "A network protocol"],
    answer: "Random data added to a password before hashing",
  },
  {
    question: "What is the 'Man-in-the-Middle' (MITM) attack?",
    options: ["A physical break-in", "An attacker secretly relaying communications between two parties", "A server crash", "A type of phishing email"],
    answer: "An attacker secretly relaying communications between two parties",
  },
  {
    question: "In Blockchain, what is a '51% Attack'?",
    options: ["When 51% of users delete the app", "When a single entity gains control of more than half the network's mining power", "A price drop of 51%", "A database error"],
    answer: "When a single entity gains control of more than half the network's mining power",
  },
  {
    question: "What does 'DNS' stand for and what is its primary function?",
    options: ["Data Network System; stores files", "Domain Name System; translates domain names to IP addresses", "Digital Name Server; encrypts web traffic", "None"],
    answer: "Domain Name System; translates domain names to IP addresses",
  },
  {
    question: "What is 'Stuxnet' famous for in geopolitical history?",
    options: ["First social media platform", "A malicious computer worm that sabotaged Iran's nuclear program", "A famous cryptocurrency", "A space telescope"],
    answer: "A malicious computer worm that sabotaged Iran's nuclear program",
  },
  {
    question: "What is a 'Zero-Day Vulnerability'?",
    options: ["A bug fixed in zero days", "A flaw that is unknown to the software creator", "A very old bug", "A bug that happens at midnight"],
    answer: "A flaw that is unknown to the software creator",
  },

  // --- QUANTUM CHEMISTRY & ADVANCED SCIENCE (86-93) ---
  {
    question: "Which rule states that electrons occupy orbitals of the lowest energy first?",
    options: ["Hund's Rule", "Aufbau Principle", "Pauli Exclusion Principle", "Le Chatelier's Principle"],
    answer: "Aufbau Principle",
  },
  


  {
    question: "What is 'Covalent Bonding'?",
    options: ["Transfer of electrons", "Sharing of electron pairs between atoms", "Magnetic attraction", "Static electricity"],
    answer: "Sharing of electron pairs between atoms",
  },
  {
    question: "What is the 'Heaviside Step Function' used for in engineering?",
    options: ["Measuring sound", "Representing a signal that switches on at a specific time", "Predicting weather", "Calculating gravity"],
    answer: "Representing a signal that switches on at a specific time",
  },
  {
    question: "In thermodynamics, what is an 'Adiabatic Process'?",
    options: ["Constant temperature", "No heat transfer into or out of the system", "Constant pressure", "Chemical reaction"],
    answer: "No heat transfer into or out of the system",
  },
  {
    question: "What is the 'Triple Point' of a substance?",
    options: ["The boiling point", "The temperature and pressure where solid, liquid, and gas coexist", "The freezing point", "The melting point"],
    answer: "The temperature and pressure where solid, liquid, and gas coexist",
  },

  // --- PHILOSOPHY, GEOPOLITICS & ECONOMICS (94-100) ---
  {
    question: "What is 'The Hegelian Dialectic'?",
    options: ["A type of logic involving Thesis, Antithesis, and Synthesis", "A military strategy", "An economic law", "A psychological disorder"],
    answer: "A type of logic involving Thesis, Antithesis, and Synthesis",
  },
  {
    question: "Which theory in Geopolitics focuses on the importance of sea power for national greatness?",
    options: ["Heartland Theory", "Mahan's Sea Power Theory", "Rimland Theory", "Containment Theory"],
    answer: "Mahan's Sea Power Theory",
  },
  {
    question: "What is 'The Tragedy of the Commons'?",
    options: ["A theater play", "Individuals acting in self-interest depleting a shared resource", "A stock market crash", "A type of government"],
    answer: "Individuals acting in self-interest depleting a shared resource",
  },
  {
    question: "What does 'Fiat Money' refer to?",
    options: ["Currency backed by gold", "Currency not backed by a physical commodity", "Digital coins", "Antique coins"],
    answer: "Currency not backed by a physical commodity",
  },
  {
    question: "The 'Golden Straitjacket' is a term used to describe:",
    options: ["Prison reform", "The sacrifice of some degree of sovereignty for global economic integration", "A fashion trend", "High taxes"],
    answer: "The sacrifice of some degree of sovereignty for global economic integration",
  },
  {
    question: "What is 'The Gini Coefficient' used to measure?",
    options: ["Atmospheric pressure", "Income inequality within a nation", "Internet speed", "IQ scores"],
    answer: "Income inequality within a nation",
  },
  {
    question: "Who is the author of 'Leviathan', a cornerstone of social contract theory?",
    options: ["John Locke", "Thomas Hobbes", "Jean-Jacques Rousseau", "Karl Marx"],
    answer: "Thomas Hobbes",
  },

];

export default questions;