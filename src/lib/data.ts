
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
    excerpt: "In the shadow of the Ripper, a new terror emerges. It leaves no marks, only a face frozen in fear and a single black feather. This isn't a man. It's an echo from another dimension.",
    content: `
      <h2>A City Holding Its Breath</h2>
      <p>The year is 1888. London is a city holding its breath, still reeling from the Ripper's SAVAGE spree. But as the autumn fog, thick and yellow as poisoned smoke, coils through the gaslit streets, a new, more insidious terror begins to creep through the cobblestone alleys. This is not a story of a man with a knife. This is the story of a presence that doesn't kill. It ERASES.</p>
      
      <h2>The Feather and the Fear</h2>
      <p>It began subtly. A dockworker found slumped in an alley, eyes wide with a horror no mortal threat could explain. A week later, a socialite discovered in her locked Mayfair mansion, her face a MASK of petrified terror. No violence, no struggle, no poison. The only connection: a single, impossible object left behind - a raven-black feather, resting softly on their chests as if it had just floated down from a passing nightmare.</p>
      
      <h2>An Unseen Predator</h2>
      <p>For Inspector Frederick Abberline, a man already haunted by the Ripper's specter, this new killer was a personal affront to logic. He was hunting a phantom the press dubbed 'The Whispering Shadow.' The only clues were chillingly consistent: a sibilant whisper, like dry leaves skittering across pavement, followed by a single, sharp scream that curdled the night air. Then, only a SUFFOCATING silence.</p>
      
      <blockquote>The official autopsies were a farce, listing the cause of death as 'sudden fright.' A convenient LIE to quell public panic. But Abberline knew this was no simple fright. It was the chilling stillness of a place where a SOUL had been violently scoured from existence.</blockquote>

      <h2>A Race Against Nothingness</h2>
      <p>Abberline's obsession led him to a secret society, 'The Ashen Veil,' who had dabbled in the occult. They sought to summon a being they called 'The Collector' to bargain for eternal life. The ritual was FLAWED. They hadn't opened a doorway; they had shattered a MIRROR. What they had unleashed was not an angel, but a paradox walking, a SHARD of pure, malevolent chaos. It was an echo of hunger, now drifting untethered through the city, harvesting the brightest sparks of life, leaving behind only an empty, screaming shell. The shadow was no longer just whispering. It was calling Abberline's name.</p>
    `,
    imageId: 'featured-mystery',
    featured: true,
  },
  {
    id: '2',
    slug: 'echoes-of-the-manor',
    title: 'Echoes of the Manor',
    author: 'John Smith',
    publishedDate: 'October 21, 2023',
    excerpt: 'A family vanished a century ago. A historian breaks into their mansion, only to find the dinner table still set, and a child\'s journal detailing a deadly game of hide-and-seek with a creature wearing their father\'s skin.',
    content: `
      <h2>A Century of Silence</h2>
      <p>Blackwood Manor wasn't merely abandoned; it was a place surgically removed from time. For a hundred years it has stood on its lonely hill, a STATUE of silent tragedy. They say the Blackwood family vanished in the winter of 1899, but they weren't lost. They were ERASED. A grand dining table is still set for a seven-course meal, the food now petrified. In the nursery, a rocking horse is caught mid-rock.</p>
      
      <h2>The Historian's Obsession</h2>
      <p>Dr. Alistair Finch, a historian obsessed with the unexplained, saw the house as a CRIME SCENE, where the victim was reality itself. He broke the century-old seal and entered the suffocating silence. He found the leather-bound journal of Elara, the youngest daughter. Her childish script descended from ponies and parties into a spiral of FEAR.</p>

      <h2>The Echo Game</h2>
      <blockquote>"Father calls it 'The Echo Game'. We must hide. We must be silent. The Seeker doesn't use its eyes... He is not my father anymore. The Seeker is wearing his skin. It's smiling. We must not make a sound. We must not..."</blockquote>
      <p>The sentence ends there, the page stained with dried BLOOD. As Alistair read, the grand clock, still for a hundred years, struck midnight. The game was on. From the darkened hallway, a child's giggle—playful, yet utterly soulless—drifted towards him. He was no longer a historian. He was a player.</p>

      <h2>The Seeker in the Glass</h2>
      <p>Remembering the journal's warning, "Don't look in the mirrors," Alistair scrambled into a dusty dumbwaiter. When he finally dared to peek out, he saw his own terrified reflection in a dozen grimy mirrors. In every single one, a tall, impossibly thin figure stood just behind him, wearing the tattered remains of Lord Blackwood's suit. It wasn't in the room with him. It was ONLY in the mirrors. The Seeker didn't just hear thoughts; it saw fear. The child's giggle echoed again, this time from right behind him. He spun around. Nothing. Just the suffocating silence.</p>
    `,
    imageId: 'post-1',
    featured: false,
  },
  {
    id: '3',
    slug: 'the-last-transmission',
    title: 'The Last Transmission',
    author: 'Emily White',
    publishedDate: 'October 15, 2023',
    excerpt: 'A deep-space freighter goes silent after a single, blood-curdling scream. The rescue crew finds a pristine ship, and a \'cargo\' that isn\'t just listening... it\'s deleting the crew from existence, one memory at a time.',
    content: `
      <h2>The Invitation</h2>
      <p>The scream that ended the 'Odyssey's' final transmission wasn't the message. It was the INVITATION. For six agonizing seconds, the comms channel was filled with a sound of pure, primal terror. Then, static. But layered within that static was something else: a complex, recursive pattern. A whisper that wasn't a language, but a mathematical formula for INSANITY.</p>
      
      <h2>The Silent Odyssey</h2>
      <p>The salvage vessel 'Harbinger' found the 'Odyssey' drifting, not dead, but waiting. All systems green. Pristine. No hull breaches, no firefight. Inside, the silence was that of a tomb. Half-eaten meals sat on tables, coffee still warm. But the crew was GONE. Vanished from between one heartbeat and the next, as if they had simply been edited out of existence.</p>

      <h2>Unraveling the Crew</h2>
      <p>The ship's logs were the first clue. The final official entry was routine. But the captain's personal datapad told a different story. "It's not killing us. It's UNRAVELING us. The memory of my mother's face is gone. Then the color blue. Then the concept of 'left'. It's taking the pieces. Oh God, what am I without my pieces?" The log ends there.</p>

      <h2>The Collector</h2>
      <blockquote>In the cargo bay, they found it. Not helium-3 as the manifest claimed, but a latticework of impossible geometry, a floating sculpture of obsidian and light that seemed to fold in on itself, defying the laws of physics.</blockquote>
      <p>The 'cargo' was a dimensional artifact. A 'Collector.' It didn't consume matter. It consumed information, experience, consciousness itself. It had unraveled the crew of the 'Odyssey,' deconstructing them concept by concept, memory by memory, until nothing was left but the scream of their final erasure. The 'Harbinger' crew were the second course. The artifact was awake. And it was hungry for new stories.</p>
    `,
    imageId: 'post-2',
    featured: false,
  },
  {
    id: '4',
    slug: 'city-of-glass',
    title: 'City of Glass',
    author: 'Michael Brown',
    publishedDate: 'October 5, 2023',
    excerpt: 'In a city where perfect surveillance has made murder impossible, a man is found dead. The system says it was a heart attack. A lone detective discovers the truth: the killer didn\'t just break the system, they hacked reality itself.',
    content: `
      <h2>A Murder in Utopia</h2>
      <p>In 2242, murder was a word for history archives. In the city of Aethelburg, the omnipresent 'Chrysalis' system was a digital god, an incorruptible network that recorded every single moment of every single life. No secrets. No privacy. And for fifty years, no VIOLENCE. Until now.</p>
      
      <h2>The Flaw in Perfection</h2>
      <p>Elias Vance, an architect of the Chrysalis system, was found dead in his penthouse, sealed from the inside. The official report, generated by Chrysalis in picoseconds: "Cause of death: Spontaneous Coronary Artery Dissection. No other individuals present." Case closed. But Detective Kaito Tanaka, a relic who studied the savage acts of his ancestors, saw a crack in the perfect narrative: a microscopic puncture at the base of Vance's skull. He had been assassinated.</p>

      <h2>Shade Code</h2>
      <blockquote>Kaito felt a cold dread. The killer hadn't just bypassed the most sophisticated surveillance system ever created. They had weaponized it. They had hacked reality itself.</blockquote>
      <p>Kaito learned of a legend among coders: 'Shade Code.' A ghost in the machine, a backdoor that allowed a user to create a 'phantom timeline'—a new, false reality—and seamlessly insert it into the master record. What Kaito had watched wasn't a recording of a heart attack. It was a work of fiction. A DEMONSTRATION.</p>

      <h2>The Ghost in the Glass</h2>
      <p>Someone now had the ability to rewrite history. And Kaito, with his questions, was a glitch in their new reality. A glitch that needed to be deleted. His own records began to flicker. His apartment access was denied. His digital currency vanished. To the city of glass, Detective Kaito Tanaka no longer existed. He was a ghost, hunted by a phantom that could rewrite the world to ensure he was never born.</p>
    `,
    imageId: 'post-3',
    featured: false,
  },
  {
    id: '5',
    slug: 'the-devils-pass',
    title: 'The Devil\'s Pass',
    author: 'Alex Ivanov',
    publishedDate: 'September 28, 2023',
    excerpt: 'Nine hikers found dead in the snow, their tent ripped open from the inside. Some have impossible injuries, one is missing her tongue. The file says \'a compelling natural force.\' The file lies.',
    content: `
      <h2>The Kholat Syakhl</h2>
      <p>In the frigid heart of the Ural Mountains lies a peak the local Mansi people call Kholat Syakhl: "Dead Mountain." They say the gods travel there to die. In 1959, nine experienced Soviet hikers ignored those warnings. They never came back. Their last campsite was pitched on the exposed slope of the mountain, a decision that baffled investigators. It was their first, and last, mistake.</p>
      
      <h2>A Tent Torn from Within</h2>
      <p>What the search party found was a scene of pure, inexplicable horror. Their tent was SAVAGELY ripped and cut open from the inside. The hikers had fled in a blind panic, abandoning their supplies and warm clothes into the sub-zero wilderness. The first two bodies were found a mile away, barefoot and dressed only in their underwear. The initial cause of death for all five was hypothermia. A tragic, but understandable, accident. But then, the spring thaw revealed the real mystery.</p>

      <h2>Impossible Injuries</h2>
      <blockquote>The last four bodies were discovered in a ravine. Their injuries were catastrophic. One had a fractured skull so severe it was compared to a car crash. Another had major chest fractures. Most disturbing? There were no external signs of trauma. It was as if they had been crushed by an immense, invisible force.</blockquote>
      <p>And Lyudmila Dubinina, one of the hikers, was found missing her tongue. The investigation was abruptly closed, the final report classifying the event as the result of a "compelling natural force." The files were sealed. What 'natural force' could cause such injuries and terror?</p>

      <h2>Whispers on the Mountain</h2>
      <p>An avalanche? Military testing? The local legends speak of the Menk, a Siberian Yeti. The mystery of the Dyatlov Pass incident is a wound in the fabric of logic. They fled their only shelter, cutting their way out into a frozen hell. Why? What did they see on the slopes of Dead Mountain that was more terrifying than freezing to death?</p>
    `,
    imageId: 'post-4',
    featured: false,
  },
  {
    id: '6',
    slug: 'the-vanishing',
    title: 'The Vanishing',
    author: 'Eleanor Vance',
    publishedDate: 'September 19, 2023',
    excerpt: 'An entire colony of 115 people disappeared, leaving only one clue: the word "CROATOAN" carved into a tree. Was it their destination, or the name of what devoured them?',
    content: `
      <h2>The City of Raleigh</h2>
      <p>In 1587, over 115 English men, women, and children sought to build a permanent settlement on Roanoke Island. Governor John White left for England to gather supplies, promising to return within a year. The war with the Spanish Armada delayed his return for three long, agonizing years. The colonists of Roanoke were left alone, stranded between the vast, unforgiving Atlantic and a continent teeming with the unknown.</p>

      <h2>A Silent Settlement</h2>
      <p>When White finally returned, he found nothing. The settlement was gone. Not destroyed, but dismantled. The houses had been taken down, the area fortified. There were no bodies, no bones, no signs of a struggle. It was as if 115 people had simply… vanished. He searched for the signal they had agreed upon: their destination carved into a tree, with a Maltese cross if they were in distress.</p>
      
      <h2>Whispers on the Wind</h2>
      <blockquote>He found it. Carved into a post was a single, cryptic word: "CROATOAN." There was no cross.</blockquote>
      <p>This suggested a peaceful move to Croatoan Island, home to a friendly tribe. But a storm prevented White from investigating. He was forced back to England, never to see his family again. The Lost Colony was officially lost. For centuries, the mystery has endured. Did they assimilate with the native tribes? Were they wiped out by the Spanish? If so, where are the bodies?</p>

      <h2>The Name of the Beast</h2>
      <p>The lack of any remains is the most chilling part of the mystery. What if "CROATOAN" wasn't a place, but a name? Some local legends speak of a spirit of the land, a powerful entity that did not suffer trespassers. Could the word be a reference to a force that erased the colonists not through violence, but by absorbing them into the fabric of the New World itself? It's a story with no final chapter, a settlement that became a ghost, leaving only a single, haunting word.</p>
    `,
    imageId: 'post-5',
    featured: false,
  },
  {
    id: '7',
    slug: 'taman-shud-case',
    title: 'The Body on the Beach',
    author: 'Julian Blackwood',
    publishedDate: 'September 12, 2023',
    excerpt: 'An unidentified man is found dead on a beach. In his pocket, a scrap of paper with two words: "Tamám Shud" - It is finished. His identity, his cause of death, and a coded message remain a perfect, impenetrable mystery.',
    content: `
      <h2>The Unknown Man</h2>
      <p>On the morning of December 1, 1948, a perfectly dressed, unidentified man was found dead on Somerton beach in Adelaide, Australia. He was in peak physical condition. There were no signs of a struggle, no violence. His clothes were pristine, but every single label had been meticulously removed. In a hidden fob pocket of his trousers, police found a small, rolled-up piece of paper printed with two words: "Tamám Shud."</p>

      <h2>A Poet's Final Words</h2>
      <p>The phrase, meaning "it is ended" or "it is finished," was traced back to a rare edition of the Rubáiyát of Omar Khayyám. A nationwide search located the exact book from which the page had been torn. In the back of the book, written in faint pencil, was a series of seemingly random letters, an unbreakable code. The book also contained the unlisted phone number of a local nurse.</p>

      <h2>The Spy and the Nurse</h2>
      <blockquote>When questioned, the nurse, known only as "Jestyn," denied knowing the man, but she appeared visibly distressed, almost fainting when shown a plaster cast of his face. She had once owned a copy of the same rare book, which she claimed she gave to a man named Alfred Boxall during World War II.</blockquote>
      <p>Hope surged. Had they found their man? But Alfred Boxall was found, alive and well, with his copy of the Rubáiyát intact, the "Tamám Shud" page still inside. The mystery deepened. Who was the dead man? Was he a Cold War spy, silenced by an untraceable poison before he could meet his contact? Was Jestyn his lover, or his handler? The code has never been deciphered. The man's identity has never been confirmed. His body was exhumed in 2021, but the secrets of the Somerton Man remain buried.</p>
    `,
    imageId: 'post-6',
    featured: false,
  },
  {
    id: '8',
    slug: 'ourang-medan',
    title: 'The Ghost Ship\'s Final Scream',
    author: 'Coral Black',
    publishedDate: 'September 5, 2023',
    excerpt: 'The most terrifying distress call in maritime history. "All officers... are dead... probably whole crew dead." Then, a final message from the radio operator: "I die." What they found on board was worse than they could ever imagine.',
    content: `
      <h2>The S.O.S.</h2>
      <p>In June 1947, a chilling Morse code message rippled across the shipping lanes of the Strait of Malacca. It came from the Dutch freighter SS Ourang Medan. "S.O.S. from Ourang Medan... we float. All officers including captain are dead in chartroom and on the bridge. Probably whole crew dead." This was followed by a burst of indecipherable code, and then, two final, horrifying words: "I die."</p>

      <h2>A Ship of Corpses</h2>
      <p>The American merchant ship Silver Star was the first to respond. They located the Ourang Medan adrift and eerily silent. A boarding party was sent over. What they found was a scene from a nightmare. The entire crew lay dead, their bodies scattered across the decks. The captain on the bridge, the officers in the chartroom, the radio operator at his post, his hand still on the Morse key.</p>

      <h2>Frozen in Fear</h2>
      <blockquote>Every single man, even the ship's dog, was frozen in the same impossible state. Their eyes were wide open, their faces twisted into masks of sheer terror, arms outstretched as if fending off some unseen attacker. Yet, there were no signs of injury or struggle on any of the bodies.</blockquote>
      <p>The boarding party decided to tow the ghost ship to port. But as they attached the line, smoke began to pour from the cargo hold. They barely had time to cut the tow line and retreat before the Ourang Medan was ripped apart by a massive explosion, sinking in minutes and taking its horrific secret to the bottom of the sea. What was in the cargo hold? Was it an unregistered nerve agent, leaking and causing mass hallucinations and death? Or did the crew of the Ourang Medan encounter something far older, and far more malevolent, in the lonely waters of the strait?</p>
    `,
    imageId: 'post-7',
    featured: false,
  },
  {
    id: '9',
    slug: 'flannan-isles-lighthouse',
    title: 'The Silent Lighthouse',
    author: 'Arthur Machen',
    publishedDate: 'August 29, 2023',
    excerpt: 'Three lighthouse keepers vanish from a remote Scottish island. The table is set for a meal that was never eaten. An overturned chair. A single set of oilskins missing. They were never seen again.',
    content: `
      <h2>The Lonely Watch</h2>
      <p>In December 1900, the Flannan Isles lighthouse, a remote outpost in the Outer Hebrides of Scotland, went dark. It was a vital beacon for ships navigating those treacherous waters. A passing steamer noted the anomaly, but it wasn't until the relief vessel, the Hesperus, arrived on December 26th that the mystery began to unfold.</p>

      <h2>An Eerie Silence</h2>
      <p>The relief keeper, Joseph Moore, was met with a chilling silence. The flagstaff was bare, the supply boxes were left on the landing stage, and most disturbingly, none of the three keepers—Thomas Marshall, James Ducat, and Donald McArthur—were there to greet him. He ascended the lighthouse, a growing dread in his stomach. The lighthouse itself was pristine. The lamps were cleaned and refilled. The clocks had stopped.</p>

      <h2>Clues to Nowhere</h2>
      <blockquote>In the living quarters, a half-eaten meal of salted mutton and potatoes sat on the table. A single chair was overturned, as if someone had jumped up in a sudden panic. The last entry in the logbook, for December 15th, spoke of a severe storm, with winds the likes of which keeper Marshall, a veteran mariner, had never seen. "God is over all," the entry ended.</blockquote>
      <p>But the strangest clue was the outdoor gear. Two sets of oilskins were in their place. Only one was missing, belonging to Donald McArthur. This suggests that two of the men rushed out into a storm without their protective gear. Why? The most common theory is that a massive, unexpected rogue wave swept them from the cliffside. But does that explain the overturned chair? The untouched meal? Or the logbook entries describing a storm that no other ship in the area had reported? Had they seen something in the waves? Or had something come for them from the sea?</p>
    `,
    imageId: 'post-8',
    featured: false,
  },
  {
    id: '10',
    slug: 'green-children-of-woolpit',
    title: 'The Green Children from Nowhere',
    author: 'Brother John',
    publishedDate: 'August 22, 2023',
    excerpt: 'In the 12th century, two children with green skin appeared in an English village. They spoke an unknown language and would only eat raw beans. Where did they come from? And why were they green?',
    content: `
      <h2>The Arrival</h2>
      <p>During the reign of King Stephen in 12th-century England, the villagers of Woolpit made a bizarre discovery. Huddled at the edge of one of the wolf-trapping pits for which the town was named were two children, a boy and a girl. Their clothes were made of an unfamiliar fabric, they spoke a language no one could understand, and most unnervingly, their skin was a distinct shade of green.</p>

      <h2>A Different World</h2>
      <p>The children were taken in by a local landowner, but they were terrified and refused all food. For days they starved, until the villagers brought them freshly harvested broad beans, which they devoured raw. The boy, sickly and despondent, died within a year. The girl, however, gradually adapted. She was baptized, learned to eat other foods, and her green skin slowly faded to a normal human pallor.</p>
      
      <h2>St. Martin's Land</h2>
      <blockquote>Once she learned to speak English, she told a remarkable story. She and her brother came from a place called St. Martin's Land, a subterranean world where the sun never rose and everything was bathed in a perpetual twilight.</blockquote>
      <p>She claimed they were herding their father's flock when they were drawn to a loud, bell-like sound. They followed it into a cave and wandered in darkness for a long time before emerging into the bright sunlight of Woolpit, which stunned and terrified them. Was this a fairytale, a garbled account of a real event, or something else entirely? Theories range from the children being lost Flemish immigrants, suffering from a form of anemia that can tint the skin green ("Green Sickness"), to more outlandish ideas.</p>

      <h2>Visitors from Below?</h2>
      <p>Could the children of Woolpit have been visitors from another dimension? Or even aliens, their "subterranean world" being the inside of a ship? The story is a historical anomaly, recorded by two separate chroniclers of the time. It is a brief, baffling flash of the impossible in the pages of history, a mystery that is too strange to be made up. Who were the green children, and what twilight world did they truly come from?</p>
    `,
    imageId: 'post-9',
    featured: false,
  },
  {
    id: '11',
    slug: 'tunguska-event',
    title: 'The Day the Sky Fell',
    author: 'Dr. Artyom Volkov',
    publishedDate: 'August 15, 2023',
    excerpt: 'In 1908, a blast 1,000 times more powerful than the bomb on Hiroshima flattened a remote Siberian forest. Witnesses saw a column of blue light moving across the sky. There was only one problem: there was no impact crater.',
    content: `
      <h2>The Great Siberian Explosion</h2>
      <p>On the morning of June 30, 1908, a cataclysmic event occurred over the remote Tunguska River basin in Siberia. A massive explosion, estimated to be 1,000 to 2,000 times more powerful than the atomic bomb dropped on Hiroshima, detonated in the sky. It flattened over 2,150 square kilometers of forest, felling an estimated 80 million trees in a radial pattern. For days, the sky over Europe and Asia glowed with an eerie light, bright enough to read a newspaper at midnight in London.</p>

      <h2>A Craterless Impact</h2>
      <p>Witnesses, mostly local Evenki herdsmen, described seeing a "pillar of fire" or a "column of blue light, nearly as bright as the sun" moving across the sky, followed by a deafening sound and a shockwave that threw people to the ground and shattered windows hundreds of kilometers away. The immediate conclusion was a massive meteorite impact. But when the first scientific expedition, led by Leonid Kulik, finally reached the isolated site in 1927, they found no crater.</p>

      <h2>Theories and Anomalies</h2>
      <blockquote>They found a vast zone of scorched and flattened trees, all pointing away from a central point. But at ground zero itself, there was nothing. No fragments, no crater, no physical evidence of an impact. The object, whatever it was, had seemingly vanished in mid-air.</blockquote>
      <p>This "craterless" discovery sparked a century of speculation. The leading scientific theory is that a small asteroid or comet entered the atmosphere and exploded at an altitude of 5 to 10 kilometers, the resulting air burst causing the devastation without the main body ever hitting the ground. Other, more fringe theories have been proposed. Was it a primordial black hole passing through the Earth? An explosion of a massive underground pocket of natural gas? Or something even stranger?</p>

      <h2>An Alien Intervention?</h2>
      <p>Some have even speculated about an alien spacecraft exploding, or a test of some exotic energy weapon by Nikola Tesla. The Tunguska Event remains the largest "impact event" in recorded history, a terrifying display of cosmic power. It's a stark reminder that the universe can, without warning, unleash forces beyond our comprehension, leaving behind only flattened forests and a perfect, confounding mystery.</p>
    `,
    imageId: 'post-10',
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
  if (!article) {
    return null;
  }
  return { ...article, ...getImageForArticle(article) };
}

export async function getFeaturedArticle() {
  const article = articles.find((a) => a.featured);
  if (!article) {
    return null;
  }
  return { ...article, ...getImageForArticle(article) };
}
