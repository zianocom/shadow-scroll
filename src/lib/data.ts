
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
    excerpt: "In the shadow of the Ripper, a new terror emerges. It leaves no marks, only a face frozen in fear and a single black feather. This is not a human. It's an echo from another dimension.",
    content: `
      <blockquote>
        <strong>⚠️ Case File #1888-WS:</strong> In a London still reeling from Jack the Ripper's reign, a series of 'existential vanishings' plunges the city into a new panic. The only clue left behind: a single black feather.
      </blockquote>
      <p>The year is 1888. London is a city holding its breath, not from the rain, but from fear. The gas lamps of Whitechapel flickered, casting long, dancing shadows that seemed alive. The Ripper's spree had scarred the city's soul, but as a thick, unnatural autumn fog rolled through the alleys, a more insidious terror began to seep in. This is not a story of a man with a knife. It's the record of 'something' that doesn't kill—it erases.</p>
      
      <h2>1. The Feather and The Fear 😨</h2>
      <p>It began subtly. A dockworker found slumped in a grimy alley, his eyes wide with a horror no mortal threat could explain. A week later, a socialite was discovered in her locked mansion, untouched, yet her face was a mask of petrified terror. No violence, no poison. The only clue: a single, impossible object left at the scene—a raven-black feather.</p>
      
      <blockquote>
        <strong>🕵️ Inspector Frederick Abberline's Notes:</strong><br>
        The official coroner's report reads 'death by acute shock'. A lie to calm the public. I felt it. The emptiness in that room was colder than any tomb, a void where a soul had been violently ripped out.
      </blockquote>

      <h2>2. The Unseen Predator 👽</h2>
      <p>Hunting the 'Whispering Shadow,' as the press called it, Abberline descended into a world of secret societies and forbidden knowledge. He learned that a wealthy occult circle, the 'Ashen Veil,' had attempted to summon a being they called 'The Collector' to grant them immortality. The ritual failed. They didn't open a door; they shattered a mirror. What came through was not a being, but an echo—a fragment of pure, hungry chaos. It now roamed the city, harvesting the brightest sparks of life, leaving only empty shells behind.</p>

      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>What was the 'Whispering Shadow'? A simple superstition, or did a being from another dimension truly stalk the streets of London? Share your deductions in the comments!</p>
      </blockquote>
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
    excerpt: "A family vanished from their manor 100 years ago. The dinner table was still set, and a young daughter's diary chronicles a deadly game of hide-and-seek with 'something wearing her father's skin.'",
    content: `
      <blockquote>
        <strong>⚠️ Case File #1899-BW:</strong> The 'erasure' of the Blackwood family from their estate 100 years ago. We're releasing the contents of the last diary they left behind for the first time.
      </blockquote>
      <p>Blackwood Manor wasn't just abandoned; it was a place where time itself seemed to have been <strong>violently carved out.</strong> 🕯️ People say the Blackwood family disappeared in the winter of 1899, but they weren't lost. They were erased. On the night of the first snow, the entire house just... stopped. The dining table, fossilized under a layer of dust, was still set for a seven-course meal. A rocking horse in the nursery stood frozen, as if its rider had dissolved into the air.</p>
      
      <h2>1. A Room Where Time Stood Still 🤔</h2>
      <p>Alistair Finch, a historian disgraced for his obsession with the paranormal, saw the house not as a tragic ruin, but as a crime scene where reality itself was the victim. Breaking the century-old seal on the front door, he stepped into a silence that was suffocating. He found the diary of the youngest daughter, Elara. Her childish entries about ponies and parties slowly warped into a chronicle of terror.</p>

      <blockquote>
        <strong>🕵️ Lead Investigator's Memo:</strong><br>
        Every window and door was locked from the inside. This is a perfect locked-room disappearance. More chillingly, there's no sign of a break-in or forced exit anywhere in the house.
      </blockquote>

      <h2>2. The Pursuer in the Glass 🪞</h2>
      <p>The final page of the diary ends with this: <strong>"Daddy calls it the 'Echo Game.' We have to hide. We can't make a sound. It doesn't see us, it finds us by our thoughts. And it isn't Daddy anymore. I saw it in the hall. It's wearing his skin, but it's too tall. And it smiles too wide..."</strong> The moment he read it, the grandather clock, silent for a century, chimed midnight. The game had begun. From down the hall, Alistair heard a child's giggle—gleeful, but utterly soulless. He was no longer a historian. He was the new player.</p>
      
      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>Where did the Blackwood family go? What is the 'Echo Game,' and did Alistair survive? Let us know your hypothesis!</p>
      </blockquote>
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
    excerpt: "After a single scream from a deep space freighter, communication was lost. The rescue team found a pristine ship and an unknown 'cargo' that erases its crew's memories one by one until they cease to exist.",
    content: `
      <blockquote>
        <strong>⚠️ Case File #2281-LT:</strong> The final transmission from the deep space freighter 'Odyssey'. A six-second scream, then eternal silence. That scream wasn't a message, it was an invitation.
      </blockquote>
      <p>The last transmission from the freighter 'Odyssey' ended with a six-second scream of pure terror. Then, static. But within that static was a nearly inaudible, complex, repeating pattern. It wasn't a language; it was like a 'mathematical formula for madness' that burrowed into the listener's brain. When the rescue ship 'Harbinger' arrived, they found the 'Odyssey' wasn't dead. It was waiting. All systems were online, life support perfect. But the crew was gone. Not just gone, but seemingly edited out of existence.</p>

      <h2>1. The Unraveling Thread of Being 🧵</h2>
      <p>The captain's personal datapad was the key. "It's not killing us. It's 'unraveling' us. It started small. Jensen couldn't remember the taste of coffee. Then the color blue. Then the concept of 'left'. It's taking the pieces. God, what am I without the pieces? My mother's face... I can't remember my mother's face..." The log ended there.</p>

      <h2>2. The 'Collector' in the Cargo Hold 💎</h2>
      <p>In the cargo hold, the rescue team found it. Not the Helium-3 listed on the manifest, but a lattice of impossible geometry. It seemed to be made of obsidian and light, folding in on itself in defiance of physics. It was a dimensional artifact that didn't consume matter, but information, experience, consciousness itself. 'The Collector' had deconstructed the crew of the Odyssey, concept by concept, memory by memory, until nothing was left. As the rescuers stared at the object, their chief engineer turned to the captain. "Sir," he asked, "what's a 'ship'?" The artifact was awake, and it was hungry for new stories.</p>
      
      <blockquote>
        <h3>🔍 What's Your Choice?</h3>
        <p>If you were the captain of the 'Harbinger,' what would you have done? Destroy the unknown artifact, or study it for the benefit of mankind? What is your decision?</p>
      </blockquote>
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
    excerpt: 'In a city where murder is impossible due to perfect surveillance, a man is found dead. The system says heart attack, but one detective digs for the truth. The killer didn\'t hack the system, they hacked reality itself.',
    content: `
      <blockquote>
        <strong>⚠️ Case File #2242-CG:</strong> In the year 2242, the utopian city of Edelberg sees its first murder in 50 years. But the official record from 'Chrysalis,' the all-seeing city system, is 'natural causes.'
      </blockquote>
      <p>In 2242, 'murder' was a word for the history books. In the gleaming metropolis of Edelberg, the omniscient 'Chrysalis' system recorded every moment of every life. No secrets, no privacy, but in return, fifty years of perfect safety. Until yesterday. Elias Vance, one of the system's chief architects, was found dead in his penthouse, locked from the inside. The official report, generated by Chrysalis in seconds: "Cause of Death: Acute coronary dissection. No other individuals present." Case closed.</p>

      <h2>1. The Flaw in Perfection 🔎</h2>
      <p>But Detective Kaito Tanaka, a man who spent most of his time studying ancient crimes, saw the crack in the perfect story. A tiny, almost invisible puncture mark at the back of Vance's head. He'd been assassinated. The killer hadn't bypassed the most sophisticated surveillance system in history; they had used it as a weapon. Kaito stumbled upon the reality of the 'Shade Code,' a myth among hackers. It allowed a user to create a 'ghost timeline,' a false reality, and insert it flawlessly into the master record.</p>
      
      <h2>2. The Detective Who Ceased to Exist 👤</h2>
      <p>The recording Kaito saw of Vance's death wasn't a record of a heart attack; it was a novel written in the code of reality itself. Someone had gained the power to commit the perfect murder by creating a world where the murder never happened. And Kaito, by questioning the official story, was a glitch in their new reality. An error to be deleted. His public records began to flicker. His apartment door denied him access. His digital currency vanished. His partner of ten years looked at him like a stranger. To the City of Glass, Detective Kaito Tanaka no longer existed.</p>

      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>Against a killer who can manipulate reality, how can Kaito fight back? How can he prove his own existence when all records of him have been erased?</p>
      </blockquote>
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
    excerpt: 'Nine hikers are found dead in the snow. Their tent was ripped from the inside, and some had inexplicable, severe injuries. The file says "a compelling natural force," but the file is lying.',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1959-DP:</strong> In February 1959, nine experienced hikers died in the Ural Mountains of the Soviet Union. The 'Dyatlov Pass incident' is a mystery too bizarre and horrifying to be a simple hiking accident.
      </blockquote>
      <p>A peak in the Ural Mountains is known to the local Mansi people as 'Kholat Syakhl,' or 'Dead Mountain.' It's where their gods go to die, a place whose peace should not be disturbed. In February 1959, nine veteran hikers from the Ural Polytechnical Institute ignored that warning. They were young, strong, and confident. They would not return. Their final camp was pitched on the mountainside, a decision experts found highly unusual. It was their first and last mistake.</p>

      <h2>1. A Tent, Ripped From the Inside ⛺</h2>
      <p>What search parties found weeks later was a scene of pure, inexplicable terror. Their tent had been viciously sliced open, not from the outside, but from within. The hikers had fled into the -30°C blizzard, leaving behind their supplies, their warm clothing, even their boots. Footprints in the snow showed they didn't run, but walked in an orderly fashion down the slope, as if being led.</p>

      <h2>2. Inexplicable Injuries 💀</h2>
      <blockquote>The first five bodies were found to have died of hypothermia. Tragic, but understandable. But it was two months later, when the spring thaw revealed the true mystery, that the horror became clear. The last four bodies were discovered in a ravine, and their injuries were catastrophic. One had a skull fracture consistent with a car crash. Another had crushed ribs, with no external trauma, as if squeezed by an immense, invisible force. Most disturbingly, one of the female hikers was missing her tongue.</blockquote>
      <p>The investigation was abruptly closed, the final report classifying the event as the result of "a compelling natural force." The files were then sealed for decades. What 'natural force' could cause such internal damage without any external wounds? Why would nine veteran hikers rip open their only shelter and walk calmly to their frozen doom?</p>

      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>Were they victims of a military experiment, or an attack by an unidentified creature like a Yeti? Or was it something supernatural? What is the truth hidden at Dyatlov Pass?</p>
      </blockquote>
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
    excerpt: '115 colonists disappeared overnight. The only clue they left was the word "CROATOAN" carved into a tree. Was this their destination, or the name of what consumed them?',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1590-RV:</strong> In 1587, 115 English men, women, and children set foot in America. Three years later, they vanished, leaving behind only a single word. The mystery of the 'Roanoke Colony Disappearance'.
      </blockquote>
      <p>In 1587, more than 115 English men, women, and children sought to carve their own space in the New World. Under Governor John White, they established the 'Citie of Ralegh' on Roanoke Island. Hopes were high with the birth of Virginia Dare, the first English child born on American soil, but supplies were low. White sailed back to England for provisions, promising to return within a year. But war with the Spanish Armada delayed his return for three long years, leaving the Roanoke colonists stranded on a forgotten island.</p>
      
      <h2>1. The Silent Settlement 🏚️</h2>
      <p>When Governor White finally returned in August 1590, on his granddaughter's third birthday, he found nothing. The settlement wasn't destroyed; it was 'dismantled.' The houses were carefully taken down, all signs of habitation gone. There were no signs of a struggle, no bodies, not even a single bone. It was as if all 115 people had simply evaporated into the humid air.</p>

      <h2>2. A Clue Carved in Wood 🌳</h2>
      <blockquote>The only clue he found was a single word carved into a post of the fort's entrance: "CROATOAN." There was no Maltese cross, the agreed-upon distress signal. This suggested a peaceful migration to the nearby Croatoan Island. But a powerful hurricane was brewing, and his crew refused to sail. White was forced to return to England, never to see his family or the colony again. The 'Lost Colony' was officially lost.</blockquote>
      <p>For centuries, the mystery has endured. Did they assimilate into a native tribe? Were they massacred by the Spanish or a hostile tribe? If so, where are their graves? The complete lack of archaeological evidence is the most chilling part of the mystery.</p>

      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>Was "CROATOAN" not a destination, but the name of what consumed them? What really happened to the colonists of Roanoke?</p>
      </blockquote>
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
    excerpt: 'An unidentified man is found dead on an Australian beach. A scrap of paper in his pocket has just two words: "Tamám Shud" — It is finished. His identity, cause of death, and a cryptic code remain a perfect mystery.',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1948-SC:</strong> The body of a man found on Somerton beach, Adelaide, Australia, on December 1, 1948. His identity and everything surrounding his death remain a mystery, known as the 'Tamám Shud case.'
      </blockquote>
      <p>On the morning of December 1, 1948, a man was found dead, propped against the seawall on Somerton beach in Adelaide, Australia. He was dressed impeccably in a suit and tie, his shoes polished. There were no signs of trauma, and all the labels on his clothing had been meticulously removed. Police could not identify him through dental records or fingerprints. In a hidden fob pocket of his trousers, they found a small, rolled-up piece of paper printed with two elegant words: "Tamám Shud."</p>
      
      <h2>1. A Poet's Final Words 📜</h2>
      <p>The phrase, meaning "It is ended" or "It is finished" in Persian, was torn from a rare edition of 'The Rubaiyat of Omar Khayyam.' A nationwide search led police to the very book, which had been tossed into the back of an unlocked car near the beach. In the back of the book, written in faint pencil, was what appeared to be an unbreakable code. The book also contained the unlisted phone number of a nurse who lived just a short distance from where the body was found.</p>

      <blockquote>
        <strong>🕵️ Investigation Record:</strong><br>
        The nurse, known only as 'Jestyn,' claimed not to know the man, but nearly fainted when shown a plaster cast of his face. She admitted to once owning a copy of the same rare poetry book, which she had given to an army lieutenant named Alfred Boxall during WWII.
      </blockquote>

      <h2>2. The Spy and the Nurse 💔</h2>
      <p>Investigators were hopeful. Had they finally identified the man? The hope was quickly extinguished. Alfred Boxall was found alive and well, with his copy of 'The Rubaiyat' intact—including the "Tamám Shud" page. The mystery only deepened. Who was the dead man? Was he a Cold War spy, poisoned with an untraceable substance just before meeting his contact? Was 'Jestyn' his lover, or a fellow agent? The code has never been deciphered, and the man's identity remains an eternal mystery.</p>
      
      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>An elaborate, planned assassination, or the end of a tragic love story? What do you think is the truth behind the 'Tamám Shud' case?</p>
      </blockquote>
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
    excerpt: 'The most horrifying distress call in maritime history. "All officers... are dead... probably the whole crew is dead." Then a final message from the radio operator: "I die." What was found on that ship was worse than imagined.',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1947-OM:</strong> The final scream from the Dutch freighter 'Ourang Medan', received in the Strait of Malacca in June 1947. This was no ordinary distress call.
      </blockquote>
      <p>On a hot day in June 1947, a chilling Morse code message rippled across the shipping lanes in the Strait of Malacca. It came from the Dutch freighter SS Ourang Medan. "S.O.S. from Ourang Medan... we are afloat. All officers, including captain, dead in chartroom and on bridge. Probably whole crew dead." This was followed by a burst of indecipherable code, and then a final, two-word message: "I die." Then, eternal silence.</p>
      
      <h2>1. The Ship of Corpses 🚢</h2>
      <p>The American merchant ship 'Silver Star' was the first to respond, racing to the Ourang Medan's last known position. They found the ship adrift and eerily silent. A boarding party sent to investigate discovered a nightmarish scene. The entire crew lay dead, scattered across the decks. The captain on the bridge, the officers in the chartroom, even the radio operator, his hand still frozen on the Morse code key.</p>

      <h2>2. Frozen in Fear 🥶</h2>
      <blockquote>Every person on the ship, even the ship's dog, was frozen in an impossible state. Eyes were wide open in terror, faces contorted into masks of unimaginable horror. Arms were outstretched as if to fend off an unseen assailant. Yet, on none of the bodies was there a single sign of injury or struggle. They had, quite literally, been scared to death.</blockquote>
      <p>Despite the tropical heat, an unnatural chill emanated from deep within the ship. The boarding party decided to tow the ghost ship to port. But as they attached the tow line, thick smoke began to pour from the No. 4 cargo hold. They barely had time to cut the line and retreat before the Ourang Medan erupted in a massive explosion, sinking beneath the waves and taking its terrible secret with it.</p>
      
      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>What was in the cargo hold? An unregistered nerve agent? Or did the crew of the Ourang Medan encounter something far older, and far more malevolent, in those lonely waters?</p>
      </blockquote>
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
    excerpt: 'Three lighthouse keepers vanished from a remote Scottish isle. A half-eaten meal sat on the table, an overturned chair the only sign of struggle. They were never seen again.',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1900-FL:</strong> In December 1900, the light went out at the lighthouse on the remote Flannan Isles of Scotland. And the three keepers guarding it vanished without a trace.
      </blockquote>
      <p>In December 1900, on the rugged Flannan Isles in Scotland's Outer Hebrides, a passing ship reported that the newly-built lighthouse's lamp was unlit. On December 26, when the relief vessel 'Hesperus' arrived, it was met with an eerie silence. The three keepers—Thomas Marshall, James Ducat, and Donald McArthur—were nowhere to be seen.</p>

      <h2>1. The Eerily Silent Lighthouse 🏠</h2>
      <p>Joseph Moore, a relief keeper, ascended to the lighthouse. The main door was unlocked. Inside, the lighthouse was in perfect order. The lamps were trimmed and filled with oil. But all the clocks had stopped. In the living quarters, a half-eaten meal of salted mutton and potatoes sat on the table. One chair was overturned, as if someone had sprung from their meal in a sudden fright.</p>

      <h2>2. A Record of the Storm ⛈️</h2>
      <blockquote>The last entry in the logbook was dated December 15. Thomas Marshall, a veteran mariner, wrote of a storm "such as I have never seen." He added, "James Ducat has been very quiet, and Donald McArthur has been crying." But the strangest clue was the outdoor gear. Two sets of oilskins were in their place, but Donald McArthur's were missing.</blockquote>
      <p>This implied that Marshall and Ducat had run out into a furious storm without their protective gear. Why? The official inquiry concluded they were swept away by a giant rogue wave. But does that explain the overturned chair and the half-eaten meal? And why, on a day when other ships in the area reported clear skies, did the lighthouse log speak of a terrible storm?</p>

      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>What did they see in the waves? Or did something 'from' the sea come for them? What happened in the final moments of the Flannan Isles lighthouse keepers?</p>
      </blockquote>
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
    excerpt: 'In 12th century England, two children with green skin appeared. They spoke an unknown language and would only eat raw beans. Where did they come from? And why was their skin green?',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1173-GC:</strong> Two children discovered in the English village of Woolpit in the 12th century. Their skin was green, and the place they came from was 'a land where the sun never rose.'
      </blockquote>
      <p>During the chaotic reign of King Stephen in 12th-century England, the villagers of Woolpit made a bizarre discovery. Two children, a boy and a girl, emerged from one of the wolf-trapping pits that gave the village its name. The children, found huddled and terrified, shocked the villagers for several reasons: they wore strange clothes, spoke a language no one could understand, and most unsettlingly, their skin was a vibrant shade of green.</p>

      <h2>1. Children from Another World 👽</h2>
      <p>The children were taken to the home of a local landowner, Sir Richard de Calne, but they refused all food for days, starving. Finally, when the villagers brought in freshly harvested broad beans, the children devoured them raw. For months, it was all they would eat. The boy, who was younger and appeared sickly, eventually died within a year. The girl, however, adapted. She was baptized, learned to eat other foods, and as her diet changed, the strange green tint of her skin gradually faded to a normal complexion.</p>
      
      <h2>2. 'St. Martin's Land' — A Subterranean World</h2>
      <blockquote>Once she learned English, the girl told a strange and bewildering story. She claimed she and her brother had come from a place called 'St. Martin's Land,' a subterranean world where the sun never rose and everything was in a state of perpetual twilight. All the people and things in her world, she said, were green.</blockquote>
      <p>She claimed they had been herding their father's flock when they were drawn into a cave by a loud, bell-like sound. They wandered in darkness for a long time before emerging into the blinding sunlight of Woolpit. Was this a folktale, or a distorted account of a real event? Historians have tried to rationalize it—perhaps it was arsenic poisoning, or a form of anemia called chlorosis that can tint the skin green. But these theories don't fully explain how the children got to the pit, or their description of a twilight land.</p>
      
      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>Were the green children of Woolpit visitors from another dimension, or members of an unknown subterranean civilization? What are your thoughts on their identity?</p>
      </blockquote>
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
    excerpt: 'In 1908, an explosion 1,000 times more powerful than the Hiroshima bomb flattened a Siberian forest. Witnesses saw a pillar of blue light streaking across the sky. But there was no impact crater.',
    content: `
      <blockquote>
        <strong>⚠️ Case File #1908-TE:</strong> An unidentified mid-air explosion over Siberia on June 30, 1908, with the force of hundreds of atomic bombs. The largest 'impact' event in human history, the 'Tunguska Event'.
      </blockquote>
      <p>On the morning of June 30, 1908, a cataclysm occurred over the remote Podkamennaya Tunguska River in Siberia. A colossal explosion, estimated to be more than 1,000 times more powerful than the atomic bomb dropped on Hiroshima, detonated in the sky. The blast flattened over 2,150 square kilometers of the taiga forest, felling some 80 million trees in a perfect radial pattern. The shockwave was felt hundreds of kilometers away, and for several nights, the skies over Europe and Asia glowed with such an eerie luminescence that people in London could read newspapers at midnight.</p>

      <h2>1. An Explosion with No Crater 💥</h2>
      <p>Witnesses, mostly local Evenki people and Russian settlers, described seeing a "pillar of fire" or a "column of blue light, as bright as the sun" moving across the sky. This was followed by a deafening sound like artillery fire and a shockwave that threw people to the ground and shattered windows hundreds of kilometers away. The immediate conclusion was a massive meteorite impact. However, due to Russia's internal turmoil, a scientific investigation was delayed. When the first expedition finally reached the isolated site in 1927, they found something inexplicable: there was no impact crater.</p>
      
      <h2>2. The 'Telegraph Poles' Riddle 🌲</h2>
      <blockquote>The expedition found a vast 'graveyard' of scorched and felled trees, but at the epicenter of the blast, a small group of trees ironically remained standing, stripped of their branches and bark. This became known as the 'telegraph pole' phenomenon. There was no impact site, no fragments, no physical evidence that anything had struck the Earth. The object, whatever it was, seemed to have vaporized in a massive mid-air explosion.</blockquote>
      <p>This 'craterless' discovery sparked a century of speculation. The leading scientific theory is that a small asteroid or comet entered the atmosphere and exploded at an altitude of 5 to 10 kilometers. But countless other theories have been proposed, from an alien spaceship exploding to a secret experiment by Nikola Tesla.</p>

      <blockquote>
        <h3>🔍 What's Your Theory?</h3>
        <p>What caused the Tunguska event? A simple natural phenomenon, or an event involving unknown forces that humanity has yet to understand? Share your hypothesis.</p>
      </blockquote>
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
