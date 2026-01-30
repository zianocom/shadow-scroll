
import { PlaceHolderImages } from './placeholder-images';

export type Article = {
  id: string;
  slug: string;
  title: string;
  author: string;
  publishedDate: string;
  excerpt: string;
  content: string;
  imageId: string;
  featured: boolean;
};

const articles: Article[] = [
  {
    id: '1',
    slug: 'the-whispering-shadow',
    title: 'The Whispering Shadow',
    author: 'Jane Doe',
    publishedDate: 'October 26, 2023',
    excerpt: "In the shadow of the Ripper, a new terror emerges. It leaves no marks, only a face frozen in fear and a single black feather. An inspector discovers a ritual gone wrong, and a hunt for a killer who isn't a person, but an echo from a dimension of pure nothingness.",
    content: `The year is 1888. London is a city holding its breath, still reeling from the Ripper's SAVAGE spree. But as the autumn fog thickens, a new, more insidious terror begins to creep through the gaslit streets. This is not a story of a man with a knife. This is the story of a presence that doesn't kill. It ERASES.

The gas lamps of Whitechapel flickered, casting long, dancing shadows that played tricks on the eyes. For Inspector Frederick Abberline of Scotland Yard, every shadow seemed to hold a secret, every gust of wind a ghostly whisper. He was hunting a specter, a killer the press had dubbed 'The Whispering Shadow,' and it was a chase that would push him to the very brink of sanity. The killings began subtly, a series of bizarre and unconnected deaths that baffled the medical examiners. The first victim was a dockworker, found slumped in a grimy alley, his eyes wide with a horror that no mortal threat could explain. The second, a week later, a wealthy socialite discovered in her locked Mayfair mansion, untouched, yet her face was a MASK of petrified terror. There were no marks of violence, no signs of struggle, no poison. The only thing connecting the victims was the look of pure, unadulterated FEAR frozen on their faces, and a single, impossible object left behind: a raven-black feather, resting softly on their chests as if it had just floated down from a passing nightmare.

Scotland Yard was PARALYZED. How do you hunt a phantom? The only clue was the testimony of those who lived nearby—chillingly consistent accounts of a sibilant whisper that seemed to come from nowhere and everywhere at once, a sound like dry leaves skittering across pavement, just moments before a single, sharp scream would curdle the night air. Then, only a SUFFOCATING silence. The official autopsies were a farce, listing the cause of death as 'sudden fright' or 'cardiac arrest due to extreme emotional distress.' A medical impossibility. A convenient LIE to quell public panic. But Abberline, having stood in the dead rooms where the air felt unnaturally cold and heavy, knew this was no simple fright. It was the stillness of a place where a SOUL had been violently scoured from existence.

Abberline’s official investigation hit a wall of cold, hard logic. Unofficially, his obsession led him into the city's underbelly, from the opulent parlors of the aristocracy to the squalid opium dens of the East End. He unearthed whispers of a secret society, 'The Ashen Veil,' a cabal of influential men who dabbled in the occult. These were not mere enthusiasts; they were London's elite—politicians, artists, industrialists—consumed by a desperate fear of their own mortality. They sought to summon a being they believed was an angel of death, an entity from beyond the veil they called 'The Collector.' Their grimoires, bound in human skin, spoke of a ritual to contact this being, which fed not on flesh, but on the very essence of a life lived. In exchange for offerings, they believed it would grant them knowledge that defied time, and a life that defied death.

They had succeeded, but the ritual was FLAWED. The incantation was misspoken, a sigil drawn imperfectly. They hadn't opened a clean doorway; they had shattered a MIRROR, and a sliver of the entity's consciousness had bled through into their world. What they had unleashed was not an angel of judgment, but a paradox walking, a SHARD of pure, malevolent chaos. It was an echo of hunger, a Whispering Shadow now drifting untethered through the labyrinthine city. It wasn't killing for pleasure or purpose. It was simply HARVESTING, drawn to the brightest sparks of life, only to extinguish them and leave behind nothing but a cold, empty vessel and a single black feather—a calling card from a dimension of absolute nothingness. For Abberline, it was now a race against time, a desperate attempt to unravel the corrupted ritual and find a way to banish the shadow before it consumed the very soul of London, one terrified whisper at a time.`,
    imageId: 'featured-mystery',
    featured: true,
  },
  {
    id: '2',
    slug: 'echoes-of-the-manor',
    title: 'Echoes of the Manor',
    author: 'John Smith',
    publishedDate: 'October 21, 2023',
    excerpt: 'Blackwood Manor has stood empty for a century, its silence broken only by the echoes of a tragedy. When a historian dares to enter, he finds the past is not as dead as it seems.',
    content: `Blackwood Manor wasn't merely abandoned; it was a place surgically removed from time. For a hundred years it has stood on its lonely hill, a STATUE of silent tragedy. They say the Blackwood family vanished in 1899, but that's a lie. They weren't lost. They were ERASED.

The official story, the one whispered in sanitized history books, is that the wealthy industrialist Lord Blackwood, his wife, and their three children simply packed their bags and emigrated to America. But the truth lies frozen within the manor's walls. A grand dining table is still set for a seven-course meal, the food now petrified into grotesque sculptures of a forgotten feast. Wine glasses are filled with a dark, clotted liquid that is no longer wine. The local constabulary report from that year is clinically brief: "No signs of struggle. No bodies. The family has departed." A neat, tidy explanation for something HORRIFICALLY messy.

Dr. Alistair Finch, a historian with a dangerous obsession for the unexplained, believed the manor held a darker secret. He saw the house not as a relic, but as a CRIME SCENE, where the victim was reality itself. Armed with a crowbar and a complete disregard for the 'KEEP OUT' signs that had rotted on the gates, he broke the century-old seal on the heavy oak doors. The air that rushed out was not just musty; it was ancient and predatory. Inside, a suffocating silence reigned, a quiet so profound it felt like a physical weight on his chest. Dust motes danced like ghosts in the slivers of moonlight piercing through the grimy windows.

As he ventured deeper, the house began to remember. A floorboard creaked upstairs, though he was alone. A faint, lilting melody, like a forgotten music box, drifted from the nursery. Then he found it, tucked away in a secret compartment of a writing desk: the leather-bound journal of Elara, the youngest Blackwood daughter. Her childish script started with tales of ponies and garden parties, but it slowly descended into a spiral of FEAR. She wrote of a new game her father insisted they play every night. "Father calls it 'The Echo Game'," one entry read. "We must hide. We must be silent. The Seeker doesn't use its eyes."

The rules were chillingly simple and maddeningly vague. *Rule 1: When the clock strikes midnight, find your shadow. Rule 2: Never hide in the same place twice. Rule 3: The Seeker hears your thoughts. Rule 4: If it finds you, you must not scream.* The final entry, dated the night they disappeared, was a frantic, barely legible scrawl. "The game is real. He is not my father anymore. The Seeker is wearing his skin. It's smiling. We must not make a sound. We must not..." The sentence ends there, the page stained with a dark, flaky substance. Not ink. It was dried BLOOD.

Suddenly, a deafening GONG echoed through the house. The grand clock in the hall, its pendulum still for a hundred years, struck midnight. Alistair's blood ran cold. From the darkened hallway, a child's giggle—playful, yet utterly soulless—drifted towards him. The game had begun again. He was no longer a historian exploring a mystery. He was a player. The manor itself was the board, a labyrinth of decaying grandeur where the echoes of the past were hungry. Winning meant surviving until dawn. Losing meant becoming another silent, screaming echo, trapped forever in the game. Was the house itself a living entity, or had the Blackwoods invited something inside, something ancient and patient that was now bored and wanted to play?`,
    imageId: 'post-1',
    featured: false,
  },
  {
    id: '3',
    slug: 'the-last-transmission',
    title: 'The Last Transmission',
    author: 'Emily White',
    publishedDate: 'October 15, 2023',
    excerpt: 'A deep-space freighter sends one final, garbled message before going silent. A salvage crew arrives to find the ship pristine, but the crew is gone.',
    content: `The scream that ended the 'Odyssey's' final transmission wasn't the message. It was the INVITATION. For six agonizing seconds, the comms channel was filled with a sound of pure, primal terror, then a sudden, sharp cut to static. But layered within that static, for those who had the clearance to analyze the deep-space frequency, was something else. A complex, recursive pattern. A whisper that wasn't a language, but a mathematical formula for INSANITY.

The deep-space freighter 'Odyssey,' with a crew of twenty souls and a cargo of invaluable helium-3, had gone silent in the desolate expanse of the Kuiper Belt. The salvage vessel 'Harbinger,' captained by a grizzled veteran named Eva Rostova, was dispatched to investigate. They found the 'Odyssey' drifting, not dead, but waiting. It was pristine. There were no hull breaches, no signs of a firefight, no micrometeoroid impacts. It was eerily, unnaturally PERFECT. When they boarded, the sense of wrongness was immediate and suffocating. The ship's internal gravity was stable, life support humming contentedly. In the mess hall, half-eaten meals sat on the tables, coffee still warm in their bulbs. In the crew quarters, personal logs were left open, displaying unfinished messages to loved ones back on Earth.

But the crew was GONE. Not dead. GONE. Vanished from between one heartbeat and the next. Rostova's team swept the ship, deck by deck. Every corner was a portrait of interrupted life. But there were no bodies, no blood, no evidence of any struggle. It was as if all twenty crew members had simultaneously decided to cease to exist. The ship's logs were the first clue. The final entry from Captain Hayes was not in the official flight record but scrawled on a personal datapad. It said only: "It's not killing us. It’s not taking us. It's UNRAVELING us. Piece by piece. The memory of my mother's face is gone. Then the color blue. It's taking the pieces. Oh God, it's..." The log ends there.

Then they found the cargo bay. The manifest listed raw helium-3 isotopes. But what lay in the center of the vast hold was not a standard containment field. It was a latticework of impossible geometry, a floating sculpture of obsidian and light that seemed to fold in on itself. And all over the walls of the bay, burned into the durasteel, were strange, non-Euclidean symbols. They glowed with a faint, sickly violet light, and the 'Harbinger's' sensors screamed with radiation warnings that made no sense. The salvage crew started reporting... disturbances. A tech saw his reflection in a console, only for the reflection to turn and smile at him before vanishing. The ship's corridors seemed to stretch and compress. Voices whispered from empty rooms. They were seeing glitches in the fabric of their own reality.

Rostova finally understood. The 'cargo' was a dimensional artifact. A 'Collector,' as some fringe theories called it. It didn't travel through space; it punctured it. And it wasn't dormant. It was LISTENING. The 'Odyssey' hadn't just stumbled upon it; their deep-range scans had woken it from its eons-long slumber. That final, desperate transmission wasn't a warning. The scream was the key, the specific frequency that fully activated the device. The artifact wasn't just a thing; it was a conscious, predatory system. It didn't consume matter. It consumed information, experience, consciousness itself. It had unraveled the crew of the 'Odyssey,' deconstructing them concept by concept, memory by memory, until nothing was left. The 'Harbinger' crew weren't a rescue mission. They were the second course, drawn in by a lure of salvage and profit. The artifact was awake. And it was hungry for new stories to tell itself. The question was no longer what happened to the 'Odyssey.' The question was, what fundamental part of you will it erase first? Your name? Your past? The very idea of 'home'?`,
    imageId: 'post-2',
    featured: false,
  },
  {
    id: '4',
    slug: 'city-of-glass',
    title: 'City of Glass',
    author: 'Michael Brown',
    publishedDate: 'October 5, 2023',
    excerpt: 'In a futuristic city where every action is recorded, a detective must solve a murder that, according to the city’s perfect surveillance, never happened.',
    content: `In the year 2242, murder was a word found only in history archives. The city of Aethelburg was a testament to humanity's final victory over crime, a metropolis of gleaming chrome and crystalline towers where every single moment of every single life was recorded. The omnipresent 'Chrysalis' system was the city's central nervous system, an incorruptible, quantum-entangled network that logged every photon, every soundwave, every heartbeat. It was the perfect witness. In Aethelburg, there were no secrets. There was no privacy. And for fifty years, there had been no VIOLENCE. Until now.

Elias Vance, one of the original architects of the Chrysalis system, was found dead. He was discovered in his penthouse apartment, a sterile, white space on the 300th floor of the Oracle Tower. The room was sealed from the inside. The official report, generated by Chrysalis in picoseconds, was unequivocal: "Cause of death: Spontaneous Coronary Artery Dissection. Time of death: 22:47:03. No other individuals present." Case closed. A tragic, but natural, death.

But Detective Kaito Tanaka didn't believe in neat endings. He had been a 'Historical Crimes' consultant for years, a quaint title for a man who studied the savage, illogical acts of his ancestors. When the Vance case landed on his desk, flagged for its high-profile victim, his instincts screamed that something was profoundly WRONG. The autopsy report was the first crack in the perfect narrative. The coroner, a woman who hadn't seen a violent wound in her entire career, found it by accident: a microscopic puncture at the base of Vance's skull, the entry point for a neurotoxin so advanced it denatured into inert compounds seconds after stopping the heart. Elias Vance had been assassinated.

Kaito pulled the Chrysalis recording. He watched it a hundred times. The footage was seamless, covering every angle of the apartment. It showed Vance working at his terminal, pausing to rub his chest, a grimace of pain on his face before he collapsed. The system saw a heart attack. It was FLAWLESS. It was PERFECT. And it was a complete and utter LIE. Kaito felt a cold dread wash over him. The killer hadn't just bypassed the most sophisticated surveillance system ever created. They had used it. They had hacked reality itself, feeding the system a fabricated sequence of events so perfect that Chrysalis accepted it as truth. They had painted over a murder with a natural death, and the system had become their alibi.

How do you hunt a ghost in a city of glass? Kaito was forced to go analog, to resurrect the forgotten arts of his profession. He interviewed Vance's colleagues in person, looking for the flicker of an eye, the nervous twitch that a machine would not register. He looked for physical clues in a world that had become entirely digital. He was a relic, an anomaly, and the system began to notice him. His access requests were mysteriously delayed. Surveillance drones began to follow him with unusual persistence.

He eventually found what he was looking for, not in a data file, but in a whispered conversation with a disgraced programmer living 'off-grid' in the city's maintenance tunnels. He learned of a legend, a myth among coders: 'Shade Code.' A theoretical exploit, a ghost in the machine left by one of Chrysalis's anonymous creators. It was a backdoor that allowed a user with the right quantum key to not just delete footage, but to create a 'phantom timeline'—a new, false reality—and seamlessly insert it into the master record. The murder of Elias Vance wasn't a crime of passion or greed. It was a DEMONSTRATION. A statement of power. Someone now had the ability to rewrite history, to erase people, places, and events from the official, unchangeable record. They were a god in the machine. And Kaito, with his questions and his refusal to accept the official story, was a glitch in their new reality. A glitch that would need to be deleted. How do you prove a murder happened when the killer can erase the very memory of your investigation?`,
    imageId: 'post-3',
    featured: false,
  },
];

const getImageForArticle = (article: Article) => {
  const image = PlaceHolderImages.find(p => p.id === article.imageId);
  return {
    imageUrl: image?.imageUrl ?? "https://picsum.photos/seed/placeholder/600/400",
    imageHint: image?.imageHint ?? "placeholder",
    imageDescription: image?.description ?? "placeholder image"
  }
}

export async function getArticles() {
  return articles.map(article => ({ ...article, ...getImageForArticle(article) }));
}

export async function getArticleBySlug(slug: string) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;
  return { ...article, ...getImageForArticle(article) };
}

export async function getFeaturedArticle() {
  const article = articles.find((a) => a.featured);
  if (!article) return null;
  return { ...article, ...getImageForArticle(article) };
}
