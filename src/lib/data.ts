
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
      <p>The year is 1888. London is a city drowning not in rain, but in fear. The gas lamps of Whitechapel flicker, casting long, dancing shadows that play tricks on the eyes. Every shadow seems to hold a secret, every gust of wind a ghostly whisper. The Ripper’s savage spree has left scars on the city's soul, but as the autumn fog, thick and yellow as poisoned smoke, coils through the streets, a new, more insidious terror begins to creep through the cobblestone alleys. This is not a story of a man with a knife. This is the story of a presence that doesn't kill. It ERASES.</p>
      
      <h2>The Feather and the Fear</h2>
      <p>It began subtly. A dockworker found slumped in a grimy alley, his eyes wide with a horror that no mortal threat could explain. A week later, a socialite discovered in her locked Mayfair mansion, untouched, yet her face was a MASK of petrified terror. No violence, no struggle, no poison. The only connection: a single, impossible object left behind - a raven-black feather, resting softly on their chests as if it had just floated down from a passing nightmare.</p>
      
      <h2>An Unseen Predator</h2>
      <p>For Inspector Frederick Abberline, a man already haunted by the Ripper's specter, this new killer was a personal affront to logic. He was hunting a phantom the press dubbed 'The Whispering Shadow.' The only clues were chillingly consistent: a sibilant whisper, like dry leaves skittering across pavement, heard moments before the victim was found, followed by a single, sharp scream that curdled the night air. Then, only a SUFFOCATING silence.</p>
      
      <blockquote>The official autopsies were a farce, listing the cause of death as 'sudden fright.' A convenient LIE to quell public panic. But Abberline knew this was no simple fright. It was the chilling stillness of a place where a SOUL had been violently scoured from existence. He could feel it in the air, a void that was colder than the grave.</blockquote>

      <h2>A Race Against Nothingness</h2>
      <p>Abberline's obsession led him down a rabbit hole into London's hidden underbelly, a world of secret societies and forbidden knowledge. He found a disgraced academic who spoke of 'The Ashen Veil,' a cabal of wealthy occultists who sought to summon a being they called 'The Collector' to bargain for eternal life. The ritual, performed on the night of the first death, was FLAWED. They hadn't opened a doorway; they had shattered a MIRROR. What they had unleashed was not an angel, but a paradox walking, a SHARD of pure, malevolent chaos. It was an echo of hunger, now drifting untethered through the city, harvesting the brightest sparks of life, leaving behind only an empty, screaming shell. The shadow was no longer just whispering. It was calling Abberline's name.</p>
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
      <p>Blackwood Manor wasn't merely abandoned; it was a place surgically removed from time. For a hundred years it has stood on its lonely hill, a STATUE of silent tragedy. They say the Blackwood family vanished in the winter of 1899, but they weren't lost. They were ERASED. The local townsfolk whisper that on the night of the first snow, the house simply… stopped. A grand dining table is still set for a seven-course meal, the food now petrified under a thick blanket of dust. In the nursery, a rocking horse is caught mid-rock, as if its rider dissolved into the air.</p>
      
      <h2>The Historian's Obsession</h2>
      <p>Dr. Alistair Finch, a historian disgraced for his obsession with the unexplained, saw the house not as a ruin, but as a CRIME SCENE, where the victim was reality itself. He believed the Blackwoods didn't just disappear; they were overwritten. Armed with a lantern and a crowbar, he broke the century-old seal on the front door and entered the suffocating silence. In the master bedroom, he found the leather-bound journal of Elara, the youngest daughter. Her childish script, detailing ponies and parties, slowly descended into a spiral of FEAR.</p>

      <h2>The Echo Game</h2>
      <blockquote>"Father calls it 'The Echo Game'. We must hide. We must be silent. The Seeker doesn't use its eyes... it listens for your thoughts. He is not my father anymore. I saw it in the hall. The Seeker is wearing his skin, but it's too tall, and it smiles too wide. We must not make a sound. We must not..."</blockquote>
      <p>The sentence ends there, the page stained with a dark, flaky substance that Alistair refused to believe was dried BLOOD. As he read those final words, the grand clock in the hall, its pendulum still for a hundred years, struck midnight with a deafening chime. The game was on. From the darkened hallway, a child's giggle—playful, yet utterly soulless—drifted towards him. He was no longer a historian. He was a player.</p>

      <h2>The Seeker in the Glass</h2>
      <p>Remembering the journal's frantic warning, "Don't look in the mirrors, it sees you best in the glass," Alistair scrambled for cover, his heart hammering against his ribs. He squeezed into a dusty dumbwaiter, pulling the door shut. Hours passed in suffocating darkness. When he finally dared to peek out, he saw his own terrified reflection in the dozen grimy mirrors lining the hall. And in every single one, a tall, impossibly thin figure stood just behind him, wearing the tattered remains of Lord Blackwood's suit. Its head was tilted at an unnatural angle. It wasn't in the room with him. It was ONLY in the mirrors. The Seeker didn't just hear thoughts; it saw fear. The child's giggle echoed again, this time from right behind him. He spun around. Nothing. Just the suffocating silence of a house that had already chosen its next victim.</p>
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
      <p>The scream that ended the 'Odyssey's' final transmission wasn't the message. It was the INVITATION. For six agonizing seconds, the comms channel of the deep-space freighter was filled with a sound of pure, primal terror. Then, static. But layered within that static, almost hidden, was something else: a complex, recursive pattern. Not a language, but a mathematical formula for INSANITY that seemed to worm its way directly into the listener's brain.</p>
      
      <h2>The Silent Odyssey</h2>
      <p>The salvage vessel 'Harbinger' found the 'Odyssey' drifting in the black, not dead, but waiting. All systems green. Life support humming. Pristine. No hull breaches, no firefight, no signs of struggle. Inside, the silence was that of a tomb. Half-eaten meals sat on tables, coffee still warm in bulbs. But the crew was GONE. Vanished from between one heartbeat and the next, as if they had simply been edited out of existence.</p>

      <h2>Unraveling the Crew</h2>
      <p>The ship's logs were the first clue. The final official entry was routine. But the captain's personal datapad, found open on his desk, told a different, terrifying story. "It's not killing us. It's UNRAVELING us. First, it was small things. Jensen couldn't remember the taste of coffee. Then the color blue. Then the concept of 'left'. It's taking the pieces, one by one. Oh God, what am I without my pieces? My mother's face... I can't see my mother's face..." The log ends there, the screen flickering.</p>

      <h2>The Collector</h2>
      <blockquote>In the main cargo bay, they found it. Not helium-3 as the manifest claimed, but a latticework of impossible geometry, a floating sculpture of obsidian and light that seemed to fold in on itself, defying the laws of physics. It pulsed with a soft, internal luminescence, and the air around it was cold enough to frost their visors.</blockquote>
      <p>The 'cargo' was a dimensional artifact. A 'Collector.' It didn't consume matter. It consumed information, experience, consciousness itself. It had unraveled the crew of the 'Odyssey,' deconstructing them concept by concept, memory by memory, until nothing was left but the scream of their final erasure. As the 'Harbinger' crew stared at the impossible object, their chief engineer turned to his captain, a look of pure confusion on his face. "Sir," he asked, "What's a ship?" The artifact was awake. And it was hungry for new stories.</p>
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
      <p>In 2242, murder was a word for history archives. In the gleaming metropolis of Aethelburg, the omnipresent 'Chrysalis' system was a digital god, an incorruptible network of quantum sensors and predictive algorithms that recorded every single moment of every single life. No secrets. No privacy. And for fifty years, no VIOLENCE. It was the perfect society. Until now.</p>
      
      <h2>The Flaw in Perfection</h2>
      <p>Elias Vance, a chief architect of the Chrysalis system itself, was found dead in his penthouse apartment, sealed from the inside. The official report, generated and filed by Chrysalis in picoseconds: "Cause of death: Spontaneous Coronary Artery Dissection. No other individuals present." Case closed. But Detective Kaito Tanaka, a relic from the Homicide division who mostly spent his days studying the savage acts of his ancestors, saw a crack in the perfect narrative. A microscopic puncture at the base of Vance's skull, almost invisible. He had been assassinated.</p>

      <h2>Shade Code</h2>
      <blockquote>Kaito felt a cold dread wash over him. The killer hadn't just bypassed the most sophisticated surveillance system ever created. They had weaponized it. The Chrysalis footage of Vance's death was flawless, showing the man clutching his chest and falling to the floor. But it felt wrong. Rehearsed. Kaito had stumbled upon a legend among old-school coders: 'Shade Code.' A ghost in the machine, a theoretical exploit that allowed a user to create a 'phantom timeline'—a new, false reality—and seamlessly insert it into the master record.</blockquote>
      <p>What Kaito had watched wasn't a recording of a heart attack. It was a work of fiction, written with the code of reality itself. It was a DEMONSTRATION of impossible power. Someone, somewhere, now had the ability to rewrite history, to edit lives, to commit the perfect murder by creating a world in which the murder never even happened.</p>

      <h2>The Ghost in the Glass</h2>
      <p>And Kaito, with his questions and his refusal to accept the official story, was a glitch in their new reality. A glitch that needed to be deleted. His own public records began to flicker. His apartment access was denied. His digital currency vanished. His partner of ten years looked at him with the blank stare of a stranger. To the city of glass, Detective Kaito Tanaka no longer existed. He was a ghost, hunted by a phantom that could rewrite the world to ensure he was never even born. His only choice was to go offline, to dive into the forgotten, unmonitored depths of the old city, and fight a killer who controlled the very fabric of truth.</p>
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
      <p>In the frigid heart of the Ural Mountains lies a peak the local Mansi people call Kholat Syakhl: "Dead Mountain." They say the gods travel there to die and that no human should ever disturb its slumber. In February 1959, nine experienced Soviet hikers, all students from the Ural Polytechnical Institute, ignored those warnings. They were young, strong, and confident. They never came back. Their last campsite was pitched on the exposed slope of the mountain, a decision that baffled investigators. It was their first, and last, mistake.</p>
      
      <h2>A Tent Torn from Within</h2>
      <p>What the search party found weeks later was a scene of pure, inexplicable horror. Their tent was SAVAGELY ripped and cut open, not from the outside, but from the inside. The hikers had fled in a blind panic, abandoning their supplies, their warm clothes, even their boots, into the sub-zero wilderness where temperatures plunged to -30°C. Footprints in the snow showed they walked, not ran, in an orderly line down the slope, as if being led. The first two bodies were found a mile away under a cedar tree, barefoot and dressed only in their underwear, their hands raw and bloody from trying to climb the tree. The next three were found between the tree and the tent, seemingly frozen while trying to return.</p>

      <h2>Impossible Injuries</h2>
      <blockquote>The initial cause of death for the first five was hypothermia. A tragic, but perhaps understandable, accident. But then, two months later, the spring thaw revealed the real mystery. The last four bodies were discovered in a ravine, buried under four meters of snow. Their injuries were catastrophic. One had a fractured skull so severe it was compared to the force of a car crash. Another had major chest fractures, as if crushed by an immense, invisible force. Most disturbing of all? There were no external signs of trauma, no soft tissue damage. It was as if they had been crushed from the inside out.</blockquote>
      <p>And Lyudmila Dubinina, one of the hikers, was found missing her tongue, her eyes, and part of her lips. The investigation was abruptly closed, the final report classifying the event as the result of a "compelling natural force." The files were sealed for decades. What 'natural force' could cause such specific, horrific injuries while leaving no external marks? Why did nine experienced hikers cut their way out of their only shelter into a frozen hell? What did they see on the slopes of Dead Mountain that was more terrifying than freezing to death?</p>
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
      <p>In 1587, over 115 English men, women, and children sought to carve a piece of the New World for themselves. Led by Governor John White, they established the "Citie of Ralegh" on Roanoke Island, a precarious foothold between the vast, unforgiving Atlantic and a continent teeming with the unknown. Shortly after, White's granddaughter, Virginia Dare, became the first English child born in America. Hope was high, but supplies were low. White was forced to leave for England to gather reinforcements, promising to return within a year. The war with the Spanish Armada delayed his return for three long, agonizing years. The colonists of Roanoke were left alone, a forgotten island in a sea of mystery.</p>

      <h2>A Silent Settlement</h2>
      <p>When Governor White finally returned in August 1590, on his granddaughter's third birthday, he found nothing. The settlement was gone. Not destroyed, but dismantled. The houses had been carefully taken down, all signs of habitation vanished. The area was fortified with a palisade, suggesting they were preparing for a threat, but there were no bodies, no bones, no signs of a struggle or battle. It was as if 115 people had simply… vanished into the humid air. He searched for the signal they had agreed upon: if they were forced to leave, they would carve their destination into a tree, with a Maltese cross if they were in distress.</p>
      
      <h2>Whispers on the Wind</h2>
      <blockquote>He found it. Carved into a post of the fort's entrance was a single, cryptic word: "CROATOAN." There was no cross.</blockquote>
      <p>This suggested a peaceful move to nearby Croatoan Island (modern-day Hatteras Island), home to a friendly tribe of Native Americans. But a powerful hurricane was bearing down, and White's men refused to risk the journey. He was forced back to England, heartbroken, never to see his family or his colony again. The Lost Colony was officially lost. For centuries, the mystery has endured. Did they assimilate with the native tribes, their English bloodlines merging with the people of the New World? Were they wiped out by the Spanish, or a hostile tribe, their bodies hidden to time? If so, where are the graves?</p>

      <h2>The Name of the Beast</h2>
      <p>The utter lack of any archaeological evidence is the most chilling part of the mystery. What if "CROATOAN" wasn't a destination, but a name? Some local legends speak of a spirit of the land, a powerful entity that did not suffer trespassers. Could the word be a reference to a force that erased the colonists not through violence, but by absorbing them into the fabric of the New World itself? It's a story with no final chapter, a settlement that became a ghost, leaving only a single, haunting word carved into a tree as its epitaph.</p>
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
      <p>On the morning of December 1, 1948, a man was found lying dead on Somerton beach in Adelaide, Australia. He was dressed impeccably in a suit and tie, his shoes polished, his head propped against a seawall as if enjoying the view. He was in peak physical condition. There were no signs of a struggle, no violence. His clothes were pristine, but every single label had been meticulously removed. Police could not identify him from his dental records or fingerprints. In a hidden fob pocket of his trousers, they found a small, tightly rolled-up piece of paper printed with two words in an elegant script: "Tamám Shud."</p>

      <h2>A Poet's Final Words</h2>
      <p>The phrase, Persian for "it is ended" or "it is finished," was traced back to a rare edition of The Rubáiyát of Omar Khayyám, a collection of poems. A nationwide search located the exact book from which the page had been torn, found in the back of an unlocked car near the beach. In the back of this book, written in faint pencil, was what appeared to be an unbreakable code—a series of seemingly random capital letters. The book also contained the unlisted phone number of a local nurse who lived just a short walk from where the body was found.</p>

      <h2>The Spy and the Nurse</h2>
      <blockquote>When questioned, the nurse, known only as "Jestyn," was evasive and claimed she didn't know the man. But witnesses said she appeared visibly distressed, almost fainting when shown a plaster cast of his face. She admitted that she had once owned a copy of the same rare book, which she said she gave to an army officer named Alfred Boxall during World War II.</blockquote>
      <p>Hope surged through the investigation. Had they found their man? But the hope was short-lived. Alfred Boxall was quickly found, alive and well, with his copy of the Rubáiyát intact—the "Tamám Shud" page still inside. The mystery deepened into a labyrinth. Who was the dead man? Was he a Cold War spy, silenced by an untraceable poison before he could meet his contact? Was Jestyn his lover, his handler, or a fellow agent, now terrified into silence? The code has never been deciphered. The man's identity has never been confirmed. The Taman Shud case remains one of the most baffling and perfect mysteries of all time, a story truly 'finished' before it even began.</p>
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
      <p>In the sweltering heat of June 1947, a chilling Morse code message rippled across the shipping lanes of the Strait of Malacca. It came from the Dutch freighter SS Ourang Medan. The transmission was disjointed, laced with panic. "S.O.S. from Ourang Medan... we float. All officers including captain are dead in chartroom and on the bridge. Probably whole crew dead." This was followed by a burst of indecipherable code, a frantic scramble of dots and dashes, and then, two final, horrifying words: "I die." Then, silence.</p>

      <h2>A Ship of Corpses</h2>
      <p>The American merchant ship Silver Star was the first to respond, racing towards the Ourang Medan's last known position. They located the ship adrift and eerily silent under the blazing sun. No flags, no smoke from the funnel, no signs of life. A boarding party was sent over, their calls echoing unanswered across the water. What they found was a scene from a nightmare. The entire crew lay dead, their bodies scattered across the decks. The captain on the bridge, the officers in the chartroom, the radio operator at his post, his hand still on the Morse key, fingers frozen in the act of transmission.</p>

      <h2>Frozen in Fear</h2>
      <blockquote>Every single man, even the ship's dog, was found frozen in the same impossible state. Their eyes were wide open, their faces twisted into masks of sheer, unimaginable terror, arms outstretched as if fending off some unseen attacker. Their mouths were locked in silent screams. Yet, there were no signs of injury or struggle on any of the bodies. It was as if they had been, quite literally, scared to death.</blockquote>
      <p>The ship itself felt unnaturally cold, despite the tropical heat. The boarding party decided to tow the ghost ship to port. But as they attached the line, thick smoke began to pour from the number 4 cargo hold. They barely had time to cut the tow line and retreat before the Ourang Medan was ripped apart by a massive explosion, sinking in minutes and taking its horrific secret to the bottom of the sea. What was in the cargo hold? Was it an unregistered nerve agent, leaking and causing mass hallucinations and death? Or did the crew of the Ourang Medan encounter something far older, and far more malevolent, in the lonely waters of the strait? The ship and its crew are gone, leaving only their final, terrified scream echoing through maritime legend.</p>
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
      <p>In the wild, storm-lashed waters of the Outer Hebrides of Scotland, the Flannan Isles are a place of myth and foreboding. In December 1900, the newly built lighthouse on the main island, Eilean Mòr, went dark. It was a vital beacon for ships navigating those treacherous waters. A passing steamer on the Philadelphia-Leith route noted the anomaly on December 15th, but it wasn't until the relief vessel, the Hesperus, arrived on December 26th that the mystery began to unfold.</p>

      <h2>An Eerie Silence</h2>
      <p>The relief keeper, Joseph Moore, was met with a chilling silence. The island was supposed to be manned by three keepers: Thomas Marshall, James Ducat, and Donald McArthur. The landing stage was empty. The flagstaff was bare. Most disturbingly, none of the three keepers were there to greet him. Moore ascended the steep steps to the lighthouse, a growing dread in his stomach. He found the main door unlocked. Inside, the lighthouse itself was pristine. The lamps were cleaned and refilled, ready for lighting. The clocks had all stopped.</p>

      <h2>Clues to Nowhere</h2>
      <blockquote>In the small living quarters, a half-eaten meal of salted mutton and potatoes sat on the table. A single chair was overturned, as if someone had jumped up from the table in a sudden panic. The last entry in the logbook, for December 15th, was bizarre. It spoke of a severe storm with winds the likes of which keeper Marshall, a veteran mariner, had never seen. "Storm winds so violent," the log read, "James Ducat has been very quiet, Donald McArthur has been crying." But the strangest clue was the outdoor gear. Two sets of oilskins were in their place. Only one was missing, belonging to Donald McArthur.</blockquote>
      <p>This suggests that two of the men, Marshall and Ducat, rushed out into a raging storm without their protective gear. Why? The official explanation concluded that a massive, unexpected rogue wave swept them from the cliffside while they were attending to equipment, and the third keeper went for help and was also washed away. But does that explain the overturned chair? The untouched meal? Or the logbook entries describing a storm that no other ship in the area had reported, on a day when the skies were clear? Had they seen something in the waves? Or had something from the sea come for them?</p>
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
      <p>Sometime during the chaotic reign of King Stephen in 12th-century England, the villagers of Woolpit made a bizarre discovery. Emerging from one of the deep wolf-trapping pits for which the town was named were two children, a boy and a girl. They were terrified and huddled together, but it wasn't their fear that shocked the villagers. Their clothes were made of an unfamiliar fabric, they spoke a language no one could understand, and most unnervingly, their skin was a distinct shade of green.</p>

      <h2>A Different World</h2>
      <p>The children were taken in by a local landowner, Sir Richard de Calne, but they were inconsolable and refused all food. For days they starved, turning away bread, meat, and milk. Finally, the villagers brought them freshly harvested broad beans, which the children fell upon and devoured raw. For months, it was all they would eat. The boy, who was younger and appeared sickly, grew more and more despondent, and died within a year. The girl, however, gradually adapted. She was baptized, learned to eat other foods, and as her diet changed, her strange green skin slowly faded to a normal human pallor.</p>
      
      <h2>St. Martin's Land</h2>
      <blockquote>Once she learned to speak English, she told a remarkable and baffling story. She and her brother came from a place called St. Martin's Land, a subterranean world where the sun never rose and everything was bathed in a perpetual twilight. She said everyone and everything in her world was green.</blockquote>
      <p>She claimed they were herding their father's flock when they were drawn to a loud, bell-like sound. They followed it into a cave and wandered in darkness for a long time before emerging into the bright, blinding sunlight of Woolpit, which stunned and terrified them. Was this a fairytale, a garbled account of a real event, or something else entirely? Historians have tried to rationalize it. Were they lost Flemish immigrants, their strange tongue mistaken for an unknown language? Did they suffer from "Green Sickness," a form of anemia that can tint the skin, brought on by malnutrition?</p>

      <h2>Visitors from Below?</h2>
      <p>But these theories don't fully explain the story. How did they get into the wolf pit? And what of their description of a twilight land? Could the children of Woolpit have been visitors from another dimension? Or even aliens, their "subterranean world" being the inside of a ship? The story is a historical anomaly, recorded by two separate and respected chroniclers of the time. It is a brief, baffling flash of the impossible in the pages of history, a mystery that is too strange to be made up. Who were the green children, and what twilight world did they truly come from?</p>
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
      <p>On the morning of June 30, 1908, a cataclysmic event occurred over the remote Tunguska River basin in Siberia. A massive explosion, estimated to be 1,000 to 2,000 times more powerful than the atomic bomb dropped on Hiroshima, detonated in the sky. It flattened over 2,150 square kilometers of taiga forest, felling an estimated 80 million trees in a perfect radial pattern. The shockwave was felt hundreds of kilometers away, and for days, the sky over Europe and Asia glowed with an eerie, silvery light, bright enough for people to read a newspaper at midnight in London.</p>

      <h2>A Craterless Impact</h2>
      <p>Witnesses, mostly local Evenki herdsmen and Russian settlers, described seeing a "pillar of fire" or a "column of blue light, nearly as bright as the sun" moving across the sky. This was followed by a deafening sound like artillery fire and a shockwave that threw people to the ground and shattered windows hundreds of kilometers away. The immediate conclusion was a massive meteorite impact. But Russia's internal turmoil delayed any scientific investigation. When the first expedition, led by mineralogist Leonid Kulik, finally reached the isolated site in 1927, they found something that defied explanation: there was no crater.</p>

      <h2>Theories and Anomalies</h2>
      <blockquote>They found a vast "graveyard" of scorched and flattened trees, all pointing away from a central point. But at ground zero itself, in a cruel irony, a small patch of trees remained standing, stripped of their branches and bark—the so-called "Telegraph Poles." There was no impact site. No fragments, no crater, no physical evidence that anything had hit the Earth. The object, whatever it was, had seemingly vanished in a colossal mid-air explosion.</blockquote>
      <p>This "craterless" discovery sparked a century of speculation. The leading scientific theory is that a small asteroid or comet entered the atmosphere at high speed and exploded at an altitude of 5 to 10 kilometers, the resulting air burst causing the devastation without the main body ever hitting the ground. Other, more fringe theories have been proposed. Was it a primordial black hole passing through the Earth? An explosion of a massive underground pocket of natural gas ignited by a lightning strike? Or something even stranger?</p>

      <h2>An Alien Intervention?</h2>
      <p>Some have even speculated about an alien spacecraft exploding, perhaps one that was trying to avert a larger catastrophe. Another theory points to the experiments of Nikola Tesla, who was working on wireless energy transmission at the time. The Tunguska Event remains the largest "impact event" in recorded history, a terrifying display of cosmic power. It's a stark reminder that the universe can, without warning, unleash forces beyond our comprehension, leaving behind only flattened forests and a perfect, confounding mystery.</p>
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
