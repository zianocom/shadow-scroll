
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
    content: `
      <h2>A City Holding Its Breath</h2>
      <p>The year is 1888. London is a city holding its breath, still reeling from the Ripper's SAVAGE spree. The name Jack is a bloody whisper on every corner, a boogeyman for a terrified populace. But as the autumn fog, thick and yellow as poisoned smoke, coils through the gaslit streets, a new, more insidious terror begins to creep through the cobblestone alleys. This is not a story of a man with a knife. This is the story of a presence that doesn't kill. It ERASES.</p>
      <p>It began subtly, a series of bizarre and unconnected deaths that baffled the most brilliant minds at Scotland Yard. The first victim was a dockworker, a man built like a brick house, found slumped in a grimy alley off Wapping High Street. His eyes were wide with a horror that no mortal threat could explain, his mouth agape in a silent scream. The second, a week later, a wealthy socialite discovered in her locked Mayfair mansion, surrounded by priceless art and untouched jewels. Her face was a MASK of petrified terror. There were no marks of violence, no signs of struggle, no poison in their systems. The only thing connecting them was the look of pure, unadulterated FEAR frozen on their faces, and a single, impossible object left behind: a raven-black feather, resting softly on their chests as if it had just floated down from a passing nightmare.</p>
      
      <h2>The Feather and the Fear</h2>
      <p>For Inspector Frederick Abberline, a man already haunted by the Ripper's specter, this new killer was a personal affront to logic. He was hunting a phantom the press had dubbed 'The Whispering Shadow,' and it was a chase that would push him to the very brink of sanity. Scotland Yard was PARALYZED. How do you hunt a killer who leaves no evidence, has no motive, and seems to walk through walls? The only clue was the testimony of those who lived nearby—chillingly consistent accounts of a sibilant whisper that seemed to come from nowhere and everywhere at once, a sound like dry leaves skittering across pavement, just moments before a single, sharp scream would curdle the night air. Then, only a SUFFOCATING silence.</p>
      <blockquote>The official autopsies were a farce, listing the cause of death as 'sudden fright' or 'cardiac arrest due to extreme emotional distress.' A medical impossibility. A convenient LIE to quell public panic.</blockquote>
      <p>But Abberline, having stood in the dead rooms where the air felt unnaturally cold and heavy, knew this was no simple fright. He had seen fear. This was something else. It was the chilling stillness of a place where a SOUL had been violently scoured from existence, leaving behind an empty, screaming shell. His colleagues urged him to abandon the case, to focus on the tangible evil of the Ripper. "You're chasing ghosts, Fred," Sergeant Godley had warned, his face etched with concern. "There's nothing here but overworked hearts and overactive imaginations." Abberline, however, couldn't shake the image of the feather, so black it seemed to drink the light around it.</p>
      
      <h2>An Unseen Predator</h2>
      <p>Abberline’s official investigation hit a wall of cold, hard logic. Unofficially, his obsession led him into the city's dark underbelly, from the opulent parlors of the aristocracy to the squalid opium dens of the East End. It was in one such den, amidst the sweet, acrid smoke, that he heard the name: 'The Ashen Veil.' A secret society, a cabal of influential men who dabbled in the occult. These were not mere enthusiasts; they were London's elite—politicians, artists, industrialists—consumed by a desperate fear of their own mortality. They sought to summon a being they believed was an angel of death, an entity from beyond the veil they called 'The Collector,' hoping to bargain for extended life.</p>
      <p>He found their temple in the crypt of a forgotten church, the air thick with the smell of burnt sage and something else... something metallic and cold. They had succeeded, but the ritual was FLAWED. The incantation was misspoken, a sigil drawn imperfectly. They hadn't opened a clean doorway; they had shattered a MIRROR, and a sliver of the entity's consciousness had bled through into their world. What they had unleashed was not an angel of judgment, but a paradox walking, a SHARD of pure, malevolent chaos. It was an echo of hunger, a Whispering Shadow now drifting untethered through the labyrinthine city. It wasn't killing for pleasure or purpose. It was simply HARVESTING, drawn to the brightest sparks of life, only to extinguish them and leave behind nothing but a cold, empty vessel and a single black feather—a calling card from a dimension of absolute nothingness.</p>
      
      <h2>A Race Against Nothingness</h2>
      <p>The investigation took Abberline to the British Museum's forbidden archives, where a reclusive scholar named Dr. Alistair Finch, a man who smelled of old paper and forgotten lore, confirmed his worst fears. The feather, Finch explained, was a marker of 'soul-theft.' The entity was not merely killing; it was feeding. And with each soul it consumed, it grew stronger, its whispers becoming clearer, its presence more defined. It was learning. "This creature," Finch whispered, his voice trembling, "it does not exist as we do. It is a hole in reality. It is the personification of a vacuum. And it is drawn to the warmth of consciousness like a moth to a flame, only to snuff it out."</p>
      <p>The final pages of the Ashen Veil's grimoire, the ones detailing the banishment ritual, were missing, torn out. Abberline realized with dawning horror that the society hadn't just summoned the entity; one of them was now its accomplice, its high priest in the material world, gathering the missing pages to grant the shadow a permanent anchor. The Inspector was no longer just a hunter. He was a potential victim, his own vibrant, determined soul a beacon in the London fog. The whispers started to coalesce around him, no longer just a skittering of leaves, but a voice, his own voice, speaking his deepest fears into the night. One evening, as he worked late in his office, the flame in his gas lamp sputtered and died. The room plunged into a cold darkness. A whisper slid into his ear, a perfect imitation of his deceased wife's voice, "Frederick... why did you let me die?" He was no longer safe. The game had changed. The shadow was no longer just whispering. It was calling his name.</p>
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
    excerpt: 'Blackwood Manor has stood empty for a century, its silence broken only by the echoes of a tragedy. When a historian dares to enter, he finds the past is not as dead as it seems.',
    content: `
      <h2>A Century of Silence</h2>
      <p>Blackwood Manor wasn't merely abandoned; it was a place surgically removed from time. For a hundred years it has stood on its lonely hill, a STATUE of silent tragedy, overlooking a village that learned long ago to forget it existed. They say the Blackwood family vanished in the winter of 1899, but that's a lie told to children. They weren't lost. They were ERASED.</p>
      <p>The official story, the one whispered in sanitized history books, is that the wealthy industrialist Lord Blackwood, his wife, and their three children simply packed their bags and emigrated to America. A sudden departure, but not unheard of. But the truth lies frozen within the manor's walls. A grand dining table is still set for a seven-course meal, the food now petrified into grotesque sculptures of a forgotten feast, covered in a century's worth of gray dust. Wine glasses are filled with a dark, clotted liquid that is no longer wine. In the nursery, a rocking horse is caught mid-rock. The local constabulary report from that year is clinically brief: "No signs of struggle. No bodies. The family has departed." A neat, tidy explanation for something HORRIFICALLY messy.</p>
      
      <h2>The Historian's Obsession</h2>
      <p>Dr. Alistair Finch, a historian with a dangerous obsession for the unexplained, believed the manor held a darker secret. He saw the house not as a relic, but as a CRIME SCENE, where the victim was reality itself. Armed with a crowbar and a complete disregard for the 'KEEP OUT' signs that had rotted on the gates, he broke the century-old seal on the heavy oak doors. The air that rushed out was not just musty; it was ancient and predatory, carrying a chill that had nothing to do with the winter air. Inside, a suffocating silence reigned, a quiet so profound it felt like a physical weight on his chest. Dust motes danced like ghosts in the slivers of moonlight piercing through the grimy, weeping windows.</p>
      <p>He ventured deeper, his torchlight cutting a nervous path through the gloom. A floorboard creaked upstairs, though he was alone. A faint, lilting melody, like a forgotten music box, drifted from the nursery, only to cease the moment he tried to pinpoint its source. Then he found it, tucked away in a secret compartment of a writing desk: the leather-bound journal of Elara, the youngest Blackwood daughter. Her childish script started with tales of ponies and garden parties, but as the pages turned, it descended into a spiral of FEAR.</p>
      
      <h2>The Echo Game</h2>
      <blockquote>"Father calls it 'The Echo Game'. We must hide. We must be silent. The Seeker doesn't use its eyes. He says it's to make us strong, but it feels... wrong."</blockquote>
      <p>The rules, scrawled in a child's terrified hand, were chillingly simple and maddeningly vague. Rule 1: When the clock strikes midnight, find your shadow. Rule 2: Never hide in the same place twice. Rule 3: The Seeker hears your thoughts. Rule 4: If it finds you, you must not scream. The final entry, dated the night they disappeared, was a frantic, barely legible scrawl. "The game is real. He is not my father anymore. The Seeker is wearing his skin. It's smiling. We must not make a sound. We must not..." The sentence ends there, the page stained with a dark, flaky substance. Not ink. Alistair scraped a small sample. It was dried BLOOD.</p>
      <p>As if on cue, a deafening GONG echoed through the house. The grand clock in the hall, its pendulum still for a hundred years, struck midnight. Alistair's blood ran cold. The game was on. From the darkened hallway, a child's giggle—playful, yet utterly soulless—drifted towards him. He was no longer a historian exploring a mystery. He was a player. The manor itself was the board, a labyrinth of decaying grandeur where the echoes of the past were hungry and the prize for losing was oblivion.</p>

      <h2>The Seeker in the Glass</h2>
      <p>Remembering the journal's warning, Alistair scrambled for a hiding place, his heart hammering against his ribs. He squeezed himself into a dusty dumbwaiter, pulling the door shut, plunging himself into a cramped, suffocating darkness. The journal mentioned another rule, one that had been crossed out and rewritten over and over. Rule 5: Don't look in the mirrors after the first chime. It sees you in the glass. It lives in the reflection. Crouched in the dark, Alistair could only imagine the countless tarnished mirrors that lined the manor's walls. He held his breath, trying to silence the frantic drum of his own thoughts, remembering Rule 3: The Seeker hears your thoughts.</p>
      <p>Minutes stretched into an eternity. The giggling faded, replaced by a slow, deliberate footstep, dragging itself across the marble floor outside his hiding spot. It stopped. Silence. Then, a soft, dry scratching on the dumbwaiter door. Alistair clamped a hand over his mouth to stifle a scream. The scratching stopped, and the footsteps receded. When he finally dared to peek out, the hallway was empty. He had survived the first round. But as he stumbled into the ballroom, he caught his own terrified reflection in a dozen grimy mirrors. In every single one, a tall, impossibly thin figure stood just behind him, its limbs too long, its head tilted at an unnatural angle. It was wearing the tattered remains of what looked like Lord Blackwood's suit. The figure raised a long, skeletal finger and pressed it to its smiling lips, a gesture of silence. It wasn't in the room with him. It was ONLY in the mirrors. The Seeker didn't just hear thoughts; it saw possibilities, it saw fear. Alistair realized the game wasn't about hiding his body; it was about hiding his MIND. The child's giggle echoed again, this time from right behind him. He spun around. Nothing. Just the suffocating silence. The game was far more complex than he'd imagined. And the house was a CHEATER.</p>
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
    excerpt: 'A deep-space freighter sends one final, garbled message before going silent. A salvage crew arrives to find the ship pristine, but the crew is gone.',
    content: `
      <h2>The Invitation</h2>
      <p>The scream that ended the 'Odyssey's' final transmission wasn't the message. It was the INVITATION. For six agonizing seconds, the comms channel from the desolate Kuiper Belt was filled with a sound of pure, primal terror—a human voice stripped of everything but absolute horror. Then, a sudden, sharp cut to static. But layered within that static, for those at the deep-space listening post with the clearance to analyze it, was something else. A complex, recursive pattern. A whisper that wasn't a language, but a mathematical formula for INSANITY.</p>
      
      <h2>The Silent Odyssey</h2>
      <p>The deep-space freighter 'Odyssey,' with a crew of twenty souls and a cargo of invaluable helium-3, had gone silent. The salvage vessel 'Harbinger,' captained by a grizzled veteran named Eva Rostova, was dispatched to investigate. Rostova was a legend in the salvage game, a woman who had seen everything the void could throw at a person. But this was different. They found the 'Odyssey' drifting, not dead, but waiting. All systems were green. It was pristine. There were no hull breaches, no signs of a firefight, no micrometeoroid impacts. It was eerily, unnaturally PERFECT.</p>
      <p>When they boarded, the sense of wrongness was immediate and suffocating. The air was clean, the temperature stable, but the silence was that of a tomb. The ship's internal gravity was stable, life support humming contentedly. In the mess hall, half-eaten meals sat on the tables, coffee still warm in their bulbs. In the crew quarters, personal logs were left open, displaying unfinished messages to loved ones back on Earth. A half-finished game of chess sat between two chairs. But the crew was GONE. Not dead. GONE. Vanished from between one heartbeat and the next, as if they had simply been edited out of existence.</p>
      
      <h2>Unraveling the Crew</h2>
      <p>Rostova's team swept the ship, deck by deck, their mag-boots clanking with unsettling loudness in the dead quiet. Every corner was a portrait of interrupted life. But there were no bodies, no blood, no evidence of any struggle. The ship's logs were the first clue. The final official entry from Captain Hayes was routine, reporting stable flight. But on his personal datapad, scrawled with a trembling finger, was a different story.</p>
      <blockquote>"It's not killing us. It's not taking us. It's UNRAVELING us. Piece by piece. The memory of my mother's face is gone. Then the color blue. Then the concept of 'left'. It's taking the pieces. Oh God, what am I without my pieces? It's..."</blockquote>
      <p>The log ends there. Then they found the cargo bay. The manifest listed raw helium-3 isotopes. But what lay in the center of the vast hold was not a standard containment field. It was a latticework of impossible geometry, a floating sculpture of obsidian and light that seemed to fold in on itself, defying the laws of physics. All over the walls of the bay, burned into the durasteel, were strange, non-Euclidean symbols. They glowed with a faint, sickly violet light, and the 'Harbinger's' sensors screamed with radiation warnings that made no sense. It was as if the universe itself was getting a syntax error in this specific location.</p>
      
      <h2>The Collector</h2>
      <p>The 'Harbinger' crew started reporting... disturbances. Rostova's second-in-command, a stoic man named Kael, saw his reflection in a console, only for the reflection to turn and smile at him with too many teeth before vanishing. The ship's corridors seemed to stretch and compress when no one was looking directly at them. Voices whispered from empty rooms, speaking in the voices of their own dead relatives. They were seeing glitches in the fabric of their own reality.</p>
      <p>Rostova, her mind racing, finally understood. The 'cargo' was a dimensional artifact. A 'Collector,' as some fringe quantum theories called it. It didn't travel through space; it punctured it. And it wasn't dormant. It was LISTENING. The 'Odyssey' hadn't just stumbled upon it; their deep-range scans had woken it from its eons-long slumber. That final, desperate transmission wasn't a warning. The scream was the key, the specific resonant frequency that fully activated the device. The artifact wasn't just a thing; it was a conscious, predatory system. It didn't consume matter. It consumed information, experience, consciousness itself. It had unraveled the crew of the 'Odyssey,' deconstructing them concept by concept, memory by memory, until nothing was left but the scream of their final erasure.</p>
      
      <h2>Becoming Data</h2>
      <p>The 'Harbinger' crew weren't a rescue mission. They were the second course, drawn in by a lure of salvage and profit. The artifact was awake. And it was hungry for new stories, new memories, new fears to add to its collection. The question was no longer what happened to the 'Odyssey.' The question was, what fundamental part of you will it erase first? Your name? Your past? The very idea of 'home'? One of Rostova's crewmen, a young engineer named Jax, began to hum a tune—a complex, discordant melody that made the hairs on their arms stand up. When asked what it was, he looked confused. "It's just... in my head. Always has been." But the ship's computer, analyzing the tune, identified it as the inverse of the recursive pattern from the 'Odyssey's' final static burst. The artifact wasn't just erasing. It was REPLACING. It was overwriting their personalities with its own alien consciousness. Rostova sealed the cargo bay, but it was too late. The ship's computer began displaying the symbols from the cargo bay on every screen. The 'Harbinger' was no longer her ship. It was a cage. A processing plant. And she and her crew were no longer human. They were becoming data. They were becoming echoes in a silent, hungry machine.</p>
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
    excerpt: 'In a futuristic city where every action is recorded, a detective must solve a murder that, according to the city’s perfect surveillance, never happened.',
    content: `
      <h2>A Murder in Utopia</h2>
      <p>In the year 2242, murder was a word found only in history archives. The city of Aethelburg was a testament to humanity's final victory over crime, a metropolis of gleaming chrome and crystalline towers where every single moment of every single life was recorded. The omnipresent 'Chrysalis' system was the city's central nervous system, an incorruptible, quantum-entangled network that logged every photon, every soundwave, every heartbeat. It was the perfect witness, a digital god ensuring perfect order. In Aethelburg, there were no secrets. There was no privacy. And for fifty years, there had been no VIOLENCE. Until now.</p>
      
      <h2>The Flaw in Perfection</h2>
      <p>Elias Vance, one of the original architects of the Chrysalis system, was found dead. He was discovered in his penthouse apartment, a sterile, white space on the 300th floor of the Oracle Tower, with a panoramic view of the 'perfect' city. The room was sealed from the inside. The official report, generated by Chrysalis in picoseconds, was unequivocal: "Cause of death: Spontaneous Coronary Artery Dissection. Time of death: 22:47:03. No other individuals present." Case closed. A tragic, but natural, death in a city that had forgotten how to die unnaturally.</p>
      <p>But Detective Kaito Tanaka didn't believe in neat endings. He was a relic, a 'Historical Crimes' consultant, a quaint title for a man who studied the savage, illogical acts of his ancestors. When the Vance case landed on his desk, flagged for its high-profile victim, his instincts screamed that something was profoundly WRONG. The autopsy report was the first crack in the perfect narrative. The coroner, a woman who hadn't seen a violent wound in her entire career, found it by accident: a microscopic puncture at the base of Vance's skull, the entry point for a neurotoxin so advanced it denatured into inert compounds seconds after stopping the heart. Elias Vance had been assassinated. Murdered. In a city where murder was impossible.</p>
      
      <h2>Shade Code</h2>
      <p>Kaito pulled the Chrysalis recording for Vance's apartment. He watched it a hundred times, his eyes burning. The footage was seamless, a symphony of data from a thousand micro-sensors, covering every conceivable angle. It showed Vance working at his terminal, pausing to rub his chest, a grimace of pain on his face before he collapsed to the floor. The system saw a heart attack. It was FLAWLESS. It was PERFECT. And it was a complete and utter LIE.</p>
      <blockquote>Kaito felt a cold dread wash over him. The killer hadn't just bypassed the most sophisticated surveillance system ever created. They had weaponized it. They had hacked reality itself.</blockquote>
      <p>How do you hunt a ghost in a city made of glass? Kaito was forced to go analog, to resurrect the forgotten arts of his profession: legwork, intuition, suspicion. He dug into the deep web, a digital ghost town of encrypted forums. He learned of a legend, a myth among coders: 'Shade Code.' A theoretical exploit, a ghost in the machine left by one of Chrysalis's anonymous creators. It was a backdoor that allowed a user with the right quantum key to not just delete footage, but to create a 'phantom timeline'—a new, false reality, woven from pure data—and seamlessly insert it into the master record. What Kaito had watched wasn't a recording of a heart attack. It was a work of fiction. The murder of Elias Vance wasn't a crime of passion or greed. It was a DEMONSTRATION. A statement of power.</p>
      
      <h2>The Ghost in the Glass</h2>
      <p>Someone now had the ability to rewrite history, to erase people, places, and events from the official, unchangeable record. They were a god in the machine. And Kaito, with his questions and his refusal to accept the official story, was a glitch in their new reality. A glitch that would need to be deleted. An anonymous tip led him to a grimy off-grid data haven, where a terrified programmer gave Kaito a data shard before vanishing into the shadows. It contained a single line of fragmented code, a signature left by the 'Shade Code's' creator, code-named 'Morpheus.'</p>
      <p>Kaito realized Vance hadn't been the first victim. He was just the first one Kaito had noticed. He cross-referenced Vance's work and found a pattern: a dozen other 'natural' deaths of high-level programmers and ethicists over the past decade. All of them had, at some point, tried to patch a theoretical 'reality-breach' vulnerability in Chrysalis. They had all been erased by Morpheus. Kaito was now hunting not just a killer, but a digital god who was systematically eliminating anyone who could challenge its power. His own records began to flicker. His apartment access was denied. His digital currency vanished. Chrysalis no longer recognized him. To the city of glass, Detective Kaito Tanaka no longer existed. He was a ghost, haunted by a truth that no one could see, hunted by a phantom that could rewrite the world to ensure he was never born. His only weapon was a single line of code, and the analog, fallible, but stubbornly persistent human mind.</p>
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
    excerpt: 'Nine experienced hikers went into the Ural Mountains. A month later, their bodies were found scattered, miles from their tent, half-dressed in the brutal cold, some with injuries so bizarre they defied all logic.',
    content: `
      <h2>The Kholat Syakhl</h2>
      <p>In the frigid heart of the Ural Mountains lies a peak the local Mansi people call Kholat Syakhl. It translates to "Dead Mountain." They say the gods travel there to die, and for centuries, they have warned outsiders to stay away. In January of 1959, nine experienced Soviet hikers, led by the charismatic Igor Dyatlov, ignored those warnings. They were students and graduates from the Ural Polytechnical Institute, all certified Grade II hikers with ski touring experience, fit and fearless. They were the best of the best. They never came back.</p>
      <p>Their goal was to reach Otorten, a mountain ten kilometers north of where the tragedy would unfold. The expedition was meant to be a testament to Soviet strength and endurance. Their journals and photographs, recovered later, paint a picture of a happy, confident group, laughing and posing in the brutal, beautiful landscape. Their last campsite was pitched on the slope of Kholat Syakhl, a decision that baffled investigators. It was an exposed, dangerous location, when a much safer spot in the forest was only a mile away. It was their first, and last, mistake.</p>
      
      <h2>A Tent Torn from Within</h2>
      <p>When they failed to send a telegram by their scheduled date, a search party was sent. What they found on February 26th was not a simple case of missing hikers. It was a scene of pure, inexplicable horror. Their tent was half-buried in snow and, bizarrely, had been SAVAGELY ripped and cut open from the inside. It was clear the hikers had fled in a blind panic, abandoning their supplies, their warm clothes, and their boots, into the pitch-black, sub-zero wilderness where temperatures plummeted to -30°C.</p>
      <p>The first two bodies were found a mile away, by a small fire under a towering cedar tree. They were barefoot and dressed only in their underwear. The branches of the tree above them were broken, suggesting they had desperately tried to climb it. Three more bodies, including Dyatlov's, were found between the tree and the tent, positioned as if they were trying to return. They were also poorly dressed for the conditions. The initial cause of death for all five was listed as hypothermia. A tragic, but understandable, accident. But then, two months later, the spring thaw revealed the real mystery.</p>
      
      <h2>Impossible Injuries</h2>
      <blockquote>The last four bodies were discovered in a ravine, buried under thirteen feet of snow, just 75 meters from the cedar tree. These hikers were better dressed, appearing to have taken clothes from their deceased comrades. But their injuries were catastrophic.</blockquote>
      <p>One, Lyudmila Dubinina, was missing her tongue, eyes, and part of her lips. Another, Semyon Zolotaryov, had his eyes missing. Nicolas Thibeaux-Brignolles had a fractured skull so severe that doctors compared the force required to a modern-day car crash. All three had major chest fractures. The most disturbing part? There were no external signs of trauma. No bruises, no cuts. It was as if they had been crushed by an immense, invisible force. The investigation was abruptly closed, the final report classifying the event as the result of a "compelling natural force." The files were sealed and classified for decades. What 'natural force' could cause such injuries and terror?</p>
      
      <h2>Whispers on the Mountain</h2>
      <p>The theories are as wild as the landscape itself. An avalanche? Possible, but the tent was not fully buried, and the hikers' tracks were visible, showing them walking, not running in panic, away from the tent initially. Military testing? The area was rumored to be used for secret weapons tests. Some of the hikers' clothes contained high levels of radiation. Could they have stumbled upon something they shouldn't have seen, and been silenced? Another theory points to infrasound, low-frequency sound waves generated by wind patterns that can induce feelings of intense panic and dread, causing the hikers to flee their tent in a state of temporary madness. Or perhaps the Mansi legends hold the truth. They speak of the Menk, a Siberian version of the Yeti, a large, hairy hominid known to be violently territorial. Could these nine experienced hikers have fallen prey to something that, according to science, shouldn't exist?</p>
      <p>The mystery of the Dyatlov Pass incident is a wound in the fabric of logic. Nine bodies, a litany of impossible injuries, and a silence from the authorities that speaks volumes. They fled their only shelter, cutting their way out into a frozen hell. Why? What did they see on the slopes of Dead Mountain that was more terrifying than freezing to death? What force could crush a human chest but leave no mark on the skin? The file may be closed, but for those who look into the darkness, the case is colder than ever. What do you think chased them into the snow? </p>
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
    excerpt: 'In 1590, an entire English colony in the New World disappeared without a trace, leaving behind only one cryptic word carved into a tree: "CROATOAN".',
    content: `
      <h2>The City of Raleigh</h2>
      <p>In 1587, a new hope for the English empire took root on Roanoke Island, a sliver of land off the coast of modern-day North Carolina. Over 115 men, women, and children, led by Governor John White, sought to build a permanent settlement, the "Citie of Ralegh." They arrived with supplies, dreams, and the unwavering conviction of pioneers. Among them was Governor White's own daughter, Eleanor Dare, who would give birth to the first English child born in the New World: Virginia Dare. The colony was a symbol of a new beginning. Three years later, it would become a symbol of a terrifying end.</p>
      <p>Supplies dwindled faster than expected, and tensions grew with the local Secotan and Croatan tribes. A colonist was found dead, riddled with arrows. A decision was made: John White had to return to England to gather reinforcements and more supplies. He left behind his daughter, his granddaughter, and the entire colony, promising to return within a year. It was a promise the brutal realities of the 16th century would not allow him to keep. The war with the Spanish Armada delayed his return. For three long, agonizing years, the colonists of Roanoke were left alone, stranded between the vast, unforgiving Atlantic and a continent teeming with the unknown.</p>
      
      <h2>A Silent Settlement</h2>
      <p>When White finally returned in August of 1590, on his granddaughter's third birthday, he found nothing. The settlement was gone. Not destroyed, not burned, but systematically dismantled. The houses had been taken down, the area fortified with a palisade of trees, suggesting the colonists weren't attacked but had moved with intention. There were no bodies, no bones, no signs of a struggle or a final, desperate stand. It was as if 115 people had simply… vanished.</p>
      <p>White had arranged a signal with the colonists. If they had to leave, they were to carve their destination into a nearby tree. If they were in distress, they were to carve a Maltese cross above the name. White searched frantically, his heart pounding with a growing dread. He found it. Carved into a post of the fort's entrance was a single, cryptic word: "CROATOAN." There was no cross. This suggested they had moved peacefully to Croatoan Island (modern-day Hatteras Island), home to the friendly Croatan tribe. But a brewing storm prevented White from making the 50-mile journey south to investigate. Heartbroken, he was forced back to England, never to see his family again. The Lost Colony of Roanoke was officially lost.</p>
      
      <h2>Whispers on the Wind</h2>
      <blockquote>"CROATOAN." Was it a destination? A warning? Or the name of the very thing that had consumed them?</blockquote>
      <p>For centuries, the mystery has endured. The most accepted theory is that the colonists, facing starvation, assimilated with the Croatan tribe. There is some evidence for this. Later explorers reported encountering Native Americans with gray eyes who claimed ancestry from the Roanoke settlers. It's a hopeful, logical explanation. But it may not be the truth. Other theories are far darker. Could they have been wiped out by a hostile tribe, or by the Spanish who had a competing claim to the land? If so, where are the bodies? An archaeological dig in the 1990s at the Croatan site on Hatteras Island uncovered a 16th-century English signet ring and other European artifacts, but no definitive proof of the colony's fate.</p>
      
      <h2>The Dare Stones</h2>
      <p>The mystery deepened in the 1930s with the discovery of the "Dare Stones." The first stone, found in North Carolina, appeared to be a message from Eleanor Dare to her father, explaining that the colonists had fled the island after an attack and were dwindling in number due to sickness and war. Over the next few years, dozens more stones were found, creating a complex, tragic narrative of the colonists' journey inland. However, all but the first stone were eventually exposed as elaborate fakes, casting doubt on the entire find. Was the first stone a genuine, desperate message from a dying colony, or just the beginning of a clever hoax?</p>
      <p>And what of "CROATOAN?" What if it wasn't a place, but a name? Some local legends speak of a spirit of the land, a powerful entity that did not suffer trespassers. Could the word be a reference to a force, a power that erased the colonists not through violence, but by absorbing them into the fabric of the New World itself? The lack of any remains is the most chilling part of the mystery. It's a story with no final chapter, a settlement that became a ghost, leaving only a single, haunting word carved into the heart of American history. What do you believe that word truly meant?</p>
    `,
    imageId: 'post-5',
    featured: false,
  },
];

const getImageForArticle = (article: Article) => {
  const image = PlaceHolderImages.find(p => p.id === article.imageId);
  return {
    imageUrl: image?.imageUrl ?? "https://picsum.photos/seed/placeholder/600/400",
    imageHint: image?.imageHint ?? "placeholder",
    description: image?.description ?? "placeholder image"
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
