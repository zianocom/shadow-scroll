
import { PlaceHolderImages } from './placeholder-images';

export type Article = {
  id: string;
  slug: string;
  title:string;
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
    excerpt: `In a London terrorized by the Ripper, a new predator emerges. It leaves no mark, takes no life, but erases its victims from existence. What is the entity that hunts not the body, but the soul itself?`,
    content: `
      <div class="article-tag">Fiction</div>
      <p>In the gaslit alleys of 1888 London, a horror worse than Jack the Ripper is stalking the streets. It doesn’t leave a body, only a hollow space where a person used to be. The only clue is a single, impossible black feather. What kind of entity can erase a person from reality, and who will be its next victim?</p>

      <h2>1. A Fear Colder Than Death</h2>
      <p>The first victim was a dockworker, found not dead, but empty. His eyes were wide with a terror no mortal threat could inspire. A week later, a socialite vanished from her locked mansion, her room untouched. The official cause of death was listed as 'acute shock,' a cowardly lie to placate a city on the edge of panic. Inspector Frederick Abberline, already haunted by the Ripper case, knew this was different. The silence in those rooms was a tangible void, a scar left on reality where a soul had been violently torn away.</p>
      
      <blockquote>
        <strong>Inspector's Log:</strong><br>
        This is not the work of a man. The reports speak of a 'whispering' sound just before the disappearances, a sound that doesn't travel through the air, but through the mind. The single black feather left at each scene is cold to the touch, and seems to absorb the light around it. It feels ancient.
      </blockquote>

      <h2>2. The Ashen Veil's Folly</h2>
      <p>Abberline's investigation led him away from the grimy streets and into the opulent drawing rooms of London's elite. He discovered a secret occult society, the 'Ashen Veil,' who, in their arrogance, had tried to summon a being from outside of known space—a being they called 'The Collector.' Their ritual, performed during a lunar eclipse, was meant to grant them knowledge, but they made a mistake in their calculations. They didn't open a door; they shattered a mirror. What slipped through was not a god, but a fragment of it—a 'Whispering Shadow' that now drifts through the city, drawn to the brightest flames of life.</p>

      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">How does one fight a creature made of shadow and sound? And what happens when the creature begins to notice the one man hunting it? Share your deductions in the comments.</p>
      </div>

      <p>But consider this: The last entry in Abberline's private journal, found years after his own mysterious disappearance, contained only a frantic sketch of a black feather and seven words: <em>"It is not erasing them. It is learning."</em></p>
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
    excerpt: `A family vanished from their locked manor 100 years ago, leaving dinner on the table. The only clue is a young girl's diary detailing a deadly game of hide-and-seek with something that isn't her father.`,
    content: `
      <div class="article-tag">Fiction</div>
      <p>In 1899, the entire Blackwood family vanished from their estate without a trace. The house was locked from the inside, a dinner party sat untouched on the table, and the only clue was the diary of 10-year-old Elara. How can a family disappear from a sealed house, and what is the terrifying 'Echo Game' she describes in her final entry?</p>

      <h2>1. The Disgraced Historian</h2>
      <p>Alistair Finch was a man with nothing to lose. Once a respected historian, his career was ruined by his obsession with 'historical impossibilities'—events like the Blackwood vanishing. For him, this wasn't just a cold case; it was personal. His own great-grandfather had been the last person to see the Blackwoods alive and was a suspect, a stain on his family's name. Alistair believed the answer lay in the house, a place the locals claimed was not haunted, but 'waiting'. Breaking the century-old seal, he stepped into a silence that felt heavy, suffocating. The air was thick with the dust of a hundred years, yet it was the absence of sound that was most unnerving.</p>
      
      <h2>2. The Echo Game</h2>
      <p>He found the diary in the nursery, clutched in the arms of a porcelain doll. Elara's early entries were mundane, but they grew increasingly strange. She wrote of a new game her father had taught them: the 'Echo Game.' The rule was simple: when the 'Echo' was hunting, you had to be perfectly still and fill your mind with a single, simple thought, like a nursery rhyme. It couldn't see you, she wrote, but it could hear your thoughts. If it heard a complex thought, it would find you.</p>

      <blockquote>
        <strong>From Elara's Diary:</strong><br>
        "<em>October 17th: We played the Echo Game today. I thought of 'Twinkle, Twinkle, Little Star.' The Echo passed right by my wardrobe. It feels cold when it's near.</em>"
        <br><br>
        "<em>November 5th: Cook thought about her daughter's wedding dress. The Echo found her in the pantry. Now she's one of the Quiet Ones. She doesn't speak anymore.</em>"
      </blockquote>
      
      <h2>3. The Thing in Father's Skin</h2>
      <p>Alistair sat in the dead silent nursery, the diary trembling in his hands. He read the final, tear-stained entry: "<em>It's wearing Daddy's skin now, but it's wrong. It's too tall, and it smiles too much. We're all going to hide. I'm going to think about the little star. I hope it's enough.</em>" As Alistair read those words, he didn't hear a clock chime. Instead, he felt it: the abrupt and total cessation of all sound. The faint whisper of wind outside, the creak of the floorboards, even the sound of his own breathing—gone. The silence was absolute. The game had begun, and Alistair's mind, filled with a hundred complex theories, was screaming in the quiet.</p>
      
      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">What is the Echo, and what became of the Blackwoods? Could Alistair survive a game where thinking is a death sentence? Share your hypothesis.</p>
      </div>

      <p>But here's a final thought: As Alistair sat frozen in the perfect silence, he noticed the last page of the diary wasn't full. Below Elara's entry, in fresh ink, were two words he didn't write: <em>"Found you."</em></p>
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
    excerpt: `A deep space freighter goes silent after a single scream. The rescue team finds a pristine ship, a cryptic cargo, and a force that erases memory itself. How do you fight an enemy that deletes the concept of a weapon?`,
    content: `
      <div class="article-tag">Fiction</div>
      <p>The deep space freighter 'Odyssey' was hauling Helium-3 when it sent its final, terrifying transmission: a six-second scream followed by static. The rescue crew of the 'Harbinger' found the ship perfectly intact, but the crew was gone. Their logs describe an entity that doesn't kill, but 'unravels' its victims, memory by memory, until nothing is left. What is this entity, and is it still on board?</p>

      <h2>1. A Ship Without a Past</h2>
      <p>Captain Eva Rostova of the Harbinger boarded the Odyssey expecting a scene of violence. Instead, she found an unnerving order. Everything was in its place. The ship's logs, however, told a story of creeping madness. It began with small things. The navigator forgot the face of his own daughter. The engineer couldn't remember the taste of coffee. Then they began to lose concepts. First, the color blue. Then, the idea of 'left'. The crew wasn't being killed; they were being systematically deleted.</p>

      <blockquote>
        <strong>Final entry from the Odyssey's medical officer:</strong><br>
        "It's an information parasite. It consumes experience. The more complex the memory, the more it 'feeds.' It has taken our childhoods, our loves, our art. We are becoming blank slates. I am looking at my medical degree, and I no longer know what the words mean. The final irony: soon, we will forget we are afraid."
      </blockquote>

      <h2>2. The Collector</h2>
      <p>In the cargo hold, they found the source. The manifest said Helium-3, but the container held something else: a lattice of black crystal and fractured light that seemed to fold in on itself. It wasn't matter; it was a physical representation of a multi-dimensional equation, and it was radiating a low-frequency signal—a 'mathematical formula for madness' that was slowly erasing the ship's computer core. It was a 'Collector' of consciousness.</p>

      <p>As Captain Rostova and her team stared at the impossible object, her weapons officer turned to her, his expression blank. "Captain," he asked, "what is a 'weapon'?" The unraveling had begun on the Harbinger. Rostova raised her sidearm, but the thought was already slipping away. What was this object in her hand? What was she supposed to do with it?</p>

      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Choice?</h3>
        <p style="margin-bottom: 0;">How can you fight an enemy when it can erase the very concept of fighting? What would you do in Captain Rostova's position? Let us know your decision.</p>
      </div>

      <p>As the concept of 'gun' faded from Rostova's mind, a new one, alien and intrusive, began to form. It was a single, repeating image: a vast, silent library, with one empty shelf waiting to be filled.</p>
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
    excerpt: `In a city where perfect surveillance has made murder impossible, a man is found dead. The system says 'heart attack.' One detective suspects the truth: the killer didn't hack the system, they hacked reality itself.`,
    content: `
      <div class="article-tag">Fiction</div>
      <p>In the utopian city of Edelberg, the Chrysalis surveillance system has created a paradox: fifty years without a single murder, and a homicide detective with nothing to do. That is, until the system's own architect is found dead in a locked room, and the system declares it was from natural causes. How can a murder occur when the official reality says it didn't?</p>
      
      <h2>1. The Glitch in the System</h2>
      <p>Detective Kaito Tanaka was an anachronism, a student of a crime that no longer existed. So when Elias Vance, the architect of the all-seeing Chrysalis, was found dead, Kaito was the only one who saw it as a puzzle. The system's report was flawless: heart attack, no foul play. But Kaito, trained to see what others miss, found it: a microscopic puncture at the base of Vance's skull. He had been assassinated. The killer hadn't bypassed the system; they had rewritten its memory. Kaito had heard whispers of a legend in the hacker underworld: the 'Shade Code,' a program that didn't just alter records, but could insert a completely fabricated 'ghost timeline' into the master record of reality.</p>

      <blockquote>
        <strong>Investigator's Note:</strong><br>
        The official recording of Vance's death is perfect. Too perfect. The ambient temperature doesn't fluctuate. The dust motes in the air move in a clean, repeating loop. It's not a recording of reality. It's a perfect simulation. The killer created a version of events where the murder never happened.
      </blockquote>

      <h2>2. The Man Who Wasn't There</h2>
      <p>By questioning the official story, Kaito became a bug in the killer's program, an error to be deleted. His access cards stopped working. His bank balance flatlined. His partner of ten years looked at him with the polite confusion of a stranger. To the City of Glass, Detective Kaito Tanaka was ceasing to exist. He raced against time, a ghost in the machine, trying to find a killer who could wield reality as a weapon before he was completely erased himself. He was no longer just solving a murder; he was fighting for his own existence.</p>
      
      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">How can Kaito prove a murder happened when all evidence of it has been erased from reality? And how can he prove he exists when the system says he doesn't? Post your theories below.</p>
      </div>
      
      <p>Before his identity was completely wiped, Kaito found a hidden, encrypted file on Vance's personal server. It was a video diary. In the last entry, a terrified Vance looks directly at the camera and says, "I thought I was building a utopia. But the 'Shade Code' was just the beginning. I've discovered its purpose. It's not for covering up a crime... it's for preparing for an arrival."</p>
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
    excerpt: `Nine experienced hikers are found dead in the Ural Mountains. Their tent was ripped open from the inside, and they fled into a -30°C blizzard without shoes. Why did they run, and what caused their bizarre, catastrophic injuries?`,
    content: `
      <div class="article-tag">Based on Real Events</div>
      <p>In February 1959, nine Soviet hikers died under bizarre circumstances in the Ural Mountains. Investigators found their tent sliced open from the inside, and the hikers, who had fled into the frozen night without proper gear, had suffered inexplicable injuries, including crushed ribs and a missing tongue. What terrifying force caused these experienced mountaineers to abandon their only shelter and walk calmly to their doom?</p>

      <h2>1. Confirmed Facts: The Scene</h2>
      <p>On the night of February 1st, the group, led by Igor Dyatlov, pitched their tent on the slopes of Kholat Syakhl, the "Dead Mountain." This was their last known action. Weeks later, search parties found the abandoned tent, ripped open from within. Footprints led away from the camp, but they were the prints of people walking, not running, in socks or bare feet. The first five bodies were found scattered down the slope, dead of hypothermia. They were dressed in their sleepwear in -30°C temperatures.</p>

      <h2>2. Confirmed Facts: The Bodies</h2>
      <p>Two months later, the remaining four hikers were found in a ravine, and the true mystery began. These four had suffered horrific internal injuries. One had a fractured skull, and two others had chest fractures consistent with the force of a car crash, yet there were no external wounds. One of the women was missing her tongue, eyes, and part of her lips. Furthermore, traces of radiation were found on some of their clothing.</p>

      <h2>3. Leading Scientific Hypotheses</h2>
      <p>The official Soviet investigation concluded that an "unknown compelling natural force" caused the deaths. Modern theories are more specific:</p>
      <ul>
        <li><strong>Slab Avalanche:</strong> A small, delayed avalanche could have covered the tent, causing the internal injuries and forcing the hikers to cut their way out in a panic. Disoriented and hypothermic, they succumbed to the elements.</li>
        <li><strong>Katabatic Winds:</strong> Intense, hurricane-force winds could have created a terrifyingly loud noise, inducing panic.</li>
        <li><strong>Infrasound:</strong> Certain wind conditions can create very low-frequency sounds (infrasound) that can induce feelings of nausea, panic, and dread in humans, potentially causing them to flee irrationally.</li>
      </ul>

      <h2>4. Fringe Speculation & Unanswered Questions</h2>
      <p>The bizarre details have led to more outlandish theories, including a secret Soviet weapons test, an attack by the local Mansi people (which was quickly ruled out), or an encounter with a cryptid like a Yeti or something extraterrestrial. These theories persist because the leading hypotheses don't fully explain everything. An avalanche doesn't account for the orderly footprints or the missing tongue. Infrasound doesn't explain the massive internal trauma.</p>

      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Do you believe one of the scientific theories fits all the facts, or was something more sinister at play on Dead Mountain? Share your analysis.</p>
      </div>

      <p>The case was closed in 1959. But in 2019, it was quietly reopened by Russian authorities. Their conclusion? A slab avalanche. A simple answer for a deeply complex case, and a conclusion that, for many who have studied the evidence, only deepens the mystery.</p>
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
    excerpt: `In 1590, over 100 colonists on Roanoke Island disappeared, leaving behind a dismantled settlement and a single word carved into a post: "CROATOAN". Was this their destination, or the name of what consumed them?`,
    content: `
      <div class="article-tag">Based on Real Events</div>
      <p>In the late 16th century, the first English colony in the New World, a settlement of over 115 men, women, and children, vanished without a trace. They left behind no bodies, no signs of a struggle, and only one cryptic clue: the word "CROATOAN" carved into a tree. What happened to the Lost Colony of Roanoke?</p>

      <h2>1. The Silent Settlement</h2>
      <p>In 1587, Governor John White led the colonists to Roanoke Island. Facing dwindling supplies, he sailed back to England for aid, leaving his family, including his newborn granddaughter Virginia Dare, behind. He expected to return within a year. However, the war between England and Spain delayed his return for three long years. When he finally landed on Roanoke in August 1590, he found the settlement abandoned. But it wasn't destroyed. The houses had been carefully dismantled, the area cleared. It was as if the entire colony had been packed up and moved.</p>

      <h2>2. The "CROATOAN" Clue</h2>
      <p>The only sign of the colonists' fate was the word "CROATOAN" carved into a palisade post. A smaller carving, "CRO," was found on a nearby tree. Croatoan was the name of a nearby island (modern-day Hatteras Island) and the name of the Native American tribe that inhabited it. Before leaving, White had instructed the colonists that if they had to leave, they should carve their destination, and to add a Maltese cross if they were in danger. There was no cross.</p>

      <blockquote>
        <strong>Governor White's Journal:</strong><br>
        "I greatly joyed that I had found a certain token of their safe being at Croatoan, which is the place where Manteo was born, and the savages of the island our friends."
      </blockquote>

      <h2>3. Hypotheses and Dead Ends</h2>
      <p>White was convinced they had relocated peacefully, but a powerful hurricane forced his ships back to sea before a search could be mounted. He would never see his family again. For centuries, theories have abounded:</p>
      <ul>
        <li><strong>Assimilation:</strong> The most widely accepted theory is that the colonists, struggling to survive, gradually integrated with a friendly local tribe, likely the Croatoans. DNA testing and archaeological finds in recent years on Hatteras Island have lent some support to this idea.</li>
        <li><strong>Massacre:</strong> Another theory suggests the colonists were attacked and killed, either by the Spanish who had settlements to the south, or a hostile native tribe. However, the lack of bodies or any signs of a battle makes this less likely.</li>
        <li><strong>Disease and Starvation:</strong> It's possible the colony was simply wiped out by a New World disease or that they starved during a severe drought, which tree-ring data from the period confirms occurred.</li>
      </ul>

      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Do you believe the colonists simply moved and assimilated, or did something more sinister happen? Let us know what you think is the most plausible explanation.</p>
      </div>

      <p>The final, unsettling detail is in the native oral traditions. Some legends speak of a tribe on the island who could "talk with the trees." To them, was "CROATOAN" not just a place, but a power? A spirit of the land that the colonists, in their desperation, turned to for aid, and in doing so, were absorbed by it forever?</p>
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
    excerpt: `An unidentified man is found dead on an Australian beach in 1948. In his pocket is a scrap of paper with two words: "Tamám Shud"—It is finished. An unbreakable code and a possible Cold War spy connection make this a perfect mystery.`,
    content: `
      <div class="article-tag">Based on Real Events</div>
      <p>On December 1, 1948, a sharply dressed, unidentified man was found dead on Somerton beach in Australia. All labels had been cut from his clothes, and his identity remains unknown to this day. The case's enduring mystery stems from two clues: a coded message, and a scrap of paper in a hidden pocket bearing the Persian phrase "Tamám Shud"—"It is finished." Who was the Somerton Man, and was he a spy, a spurned lover, or something else entirely?</p>
      
      <h2>1. The Unknown Man</h2>
      <p>The man was in peak physical condition. The autopsy found no foreign substances in his body, yet concluded he died of heart failure, likely from an untraceable poison. His dental records and fingerprints matched no living person on record. With no ID and all clothing labels removed, police were at a dead end. Months later, a pathologist re-examining the man's trousers found a tiny, hidden fob pocket containing a tightly rolled scrap of paper. The paper contained the printed words "Tamám Shud."</p>

      <h2>2. The Rubaiyat and the Code</h2>
      <p>The phrase was identified as the final words from "The Rubaiyat of Omar Khayyam," a collection of Persian poetry. A public appeal led to the discovery of the exact book the scrap was torn from, which had been tossed into a nearby car. In the back of this book, police found faint pencil markings: a five-line code of capital letters. This code has never been deciphered. The book also contained the unlisted phone number of a local nurse, Jessica "Jestyn" Thomson.</p>

      <blockquote>
        <strong>From the Police Report:</strong><br>
        "When shown the plaster cast of the deceased's head and shoulders, the nurse appeared completely taken aback, and seemed about to faint." She denied knowing him, but admitted she had given a copy of The Rubaiyat to an army lieutenant, Alfred Boxall, during WWII.
      </blockquote>

      <h2>3. A Cold War Spy?</h2>
      <p>Investigators thought they had their man, but Alfred Boxall was found alive, with his copy of the book intact—including the "Tamám Shud" page. The dead man was not Boxall. The nurse's strange reaction and the unbreakable code, combined with the timing at the start of the Cold War, fueled speculation that the Somerton Man was a spy. Was he poisoned by enemy agents? Did the code contain state secrets? The nurse took her secrets to the grave, and the man's identity remains one of Australia's most profound mysteries.</p>
      
      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Was the Somerton Man a spy killed in the line of duty, or was it the victim of a love affair gone wrong? What do you think the code says? Share your analysis.</p>
      </div>

      <p>In 2022, a researcher claimed to have used DNA to identify the man as Carl "Charles" Webb, an electrical engineer. However, this identification has not been officially confirmed by authorities. Even if we have a name, it answers none of the critical questions: Why was he there? How did he die? And what is the meaning of the still-unbroken code?</p>
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
    excerpt: `In 1947, a Dutch freighter sent a horrifying SOS: "All officers... are dead... I die." The boarding party found a ship of corpses, their faces frozen in terror. What did they see before the ship exploded and sank, taking its secret with it?`,
    content: `
      <div class="article-tag">Based on Real Events / Legend</div>
      <p>The story of the SS Ourang Medan is one of the most terrifying ghost ship legends in maritime history. In the late 1940s, ships in the Strait of Malacca allegedly picked up a horrifying Morse code SOS: "All officers including captain are dead... probably whole crew dead." This was followed by a final, chilling transmission: "I die." What happened aboard the Ourang Medan?</p>
      
      <h2>1. The Ship of Corpses</h2>
      <p>According to the legend, the American merchant ship 'Silver Star' was the first to locate the drifting Dutch freighter. It appeared undamaged. A boarding party was sent over, and they discovered a horrific scene. The decks were littered with the bodies of the Dutch crew. The captain was dead on the bridge, the officers in the chartroom, and the radio operator was slumped over his equipment, his hand still on the Morse key. Even the ship's dog was dead.</p>

      <blockquote>
        <strong>From the alleged account of a 'Silver Star' crewman:</strong><br>
        "Their faces were the worst part. Every single one of them, even the dog, had their eyes wide open, teeth bared, faces twisted towards the sun as if in agony. They were frozen in a state of pure, abject terror. But there wasn't a mark on them. Not a single sign of injury."
      </blockquote>

      <h2>2. Fact or Fiction?</h2>
      <p>Here, the story becomes difficult to verify. There is no official registration record for a ship named Ourang Medan. The 'Silver Star' is also a ghost; no ship by that name was listed in the area at that time. This has led many to believe the story is simply a spooky sea tale, a piece of folklore passed from sailor to sailor. However, the story's persistence and its specific details have fueled decades of speculation.</p>

      <h2>3. The Exploding Cargo</h2>
      <p>In the most popular version of the tale, the boarding party felt an extreme chill coming from the cargo hold. They decided to tow the ghost ship to port, but as they attached the line, smoke began billowing from below deck. The party scrambled back to their ship just as the Ourang Medan exploded with such force that it was lifted from the water before sinking without a trace. This has led to the leading hypothesis: the ship was smuggling unregistered, hazardous materials, perhaps nitroglycerin or even nerve agents developed during WWII, which leaked and suffocated the crew before exploding.</p>
      
      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Is the story of the Ourang Medan a complete fabrication, or is it a fictionalized account of a real, secret tragedy? What could have killed the crew with fear before the ship conveniently exploded? Share your thoughts.</p>
      </div>
      
      <p>One final, unsettling thought: "Ourang Medan" translates from Malay to "Man from Medan." What if it wasn't the name of the ship, but a description of the cargo?</p>
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
    excerpt: `Three lighthouse keepers vanished from a remote Scottish isle in 1900. An untouched meal sat on the table, and their logbook described a storm that no one else saw. What made them abandon their post and walk into the sea?`,
    content: `
      <div class="article-tag">Based on Real Events</div>
      <p>In December 1900, a passing ship noticed the lamp in the newly built lighthouse on the Flannan Isles was unlit. When the relief vessel arrived, they found the lighthouse abandoned. The three keepers—Thomas Marshall, James Ducat, and Donald McArthur—had vanished. What made three experienced keepers abandon their post and disappear into the Atlantic?</p>

      <h2>1. The Eerie Calm</h2>
      <p>The relief ship 'Hesperus' arrived on December 26th to find a scene of unnerving order. The lighthouse door was unlocked, and inside, two of the three oilskin coats were missing. In the kitchen, a half-eaten meal of salted mutton sat cold on the table, and a chair was overturned as if someone had jumped up in a hurry. The clocks had all stopped. The lighthouse itself was pristine; the lamps were cleaned and refilled, ready to be lit. The men were simply gone.</p>

      <h2>2. The Phantom Storm</h2>
      <p>The lighthouse logbook provided the strangest clue. One keeper, Thomas Marshall, recorded the events of the preceding days. He wrote of a severe storm with powerful winds "such as I have never seen." He noted that James Ducat had been "very quiet" and that Donald McArthur, a notoriously tough mariner, "has been crying." This was baffling because no storms were reported in the area on those days. The weather was calm.</p>
      
      <blockquote>
        <strong>Logbook Entry, December 15th:</strong><br>
        "Storm ended. Sea calm. God is over all." This was the final entry.
      </blockquote>

      <h2>3. Theories and Lingering Questions</h2>
      <p>The official explanation was that the men were swept away by a freak rogue wave while tending to equipment near the cliffs. This would explain why two men might rush out without their coats to help a third. But it doesn't account for the untouched meal, the logbook entries describing a phantom storm, or why a seasoned keeper would be weeping in terror.</p>
      <p>Other theories suggest a fight broke out, or that one keeper went mad and was subdued by the others. But the most enduring speculation is that the men saw something in the water during the "storm that wasn't a storm"—something that terrified them so much that they abandoned their post, leading to their demise in the churning sea.</p>

      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Was it a rogue wave, a descent into madness, or did the keepers encounter something unnatural that the logbook only hinted at? Let us know what you think happened.</p>
      </div>

      <p>A final piece of the puzzle is a poem written years later by Wilfrid Wilson Gibson, inspired by the event. In it, he imagines the final moments, where one keeper looks out and sees "a great, dark bird" and then "a great, dark hand." Was this poetic license, or was it inspired by local legends the keepers might have known?</p>
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
    excerpt: `In 12th century England, two children with green skin and an unknown language appeared in a village. They claimed to be from a subterranean land of perpetual twilight. Were they lost, or were they visitors from another world?`,
    content: `
      <div class="article-tag">Based on Real Events / Legend</div>
      <p>During the 12th century, the English village of Woolpit was startled by the appearance of two children, a brother and sister, who had emerged from a wolf-trapping pit. They spoke an unknown language, wore unfamiliar clothing, and most astonishingly, their skin was a distinct shade of green. Who were the Green Children of Woolpit, and where did they come from?</p>

      <h2>1. The Arrival</h2>
      <p>The children were discovered by reapers working the fields. They were taken to the home of a local landowner, Sir Richard de Calne. Terrified and distraught, they refused all food for days until they were offered raw broad beans, which they ate voraciously. The boy, who seemed younger and was sickly, died within a year. The girl, however, adapted. She was baptized, learned to eat other foods, and as her diet changed, the green hue of her skin gradually faded.</p>
      
      <h2>2. The Land of St. Martin</h2>
      <p>Once she learned to speak English, the girl explained that she and her brother came from a place called "St. Martin's Land." She described it as a subterranean world where the sun never shone and everything was in a state of perpetual twilight. All the inhabitants of her land were green, just as they had been.</p>

      <blockquote>
        <strong>According to the chronicler William of Newburgh:</strong><br>
        She claimed they were herding their father's cattle when they heard a loud sound, like bells, and were drawn into a cave. They wandered in darkness for a long time before emerging into the bright sunlight of Woolpit, which terrified them.
      </blockquote>

      <h2>3. Explanations: Mundane and Fantastical</h2>
      <p>Historians have attempted to find rational explanations for the event:</p>
      <ul>
        <li><strong>Arsenic Poisoning:</strong> The children could have been Flemish immigrants who were persecuted and fled, accidentally poisoning themselves with arsenic, which can tint the skin green.</li>
        <li><strong>Hypochromic Anemia:</strong> Also known as "green sickness," this iron-deficiency anemia can give the skin a greenish pallor. A change in diet could have cured the girl.</li>
      </ul>
      <p>However, these theories don't fully account for the story of a subterranean land or the unknown language. More fantastical theories propose that the children were aliens, or that they had accidentally stumbled through a portal from another dimension or a world beneath our own.</p>
      
      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Was this a distorted account of lost and malnourished children, or does the story hide a more extraordinary truth about a world hidden from our own? Share your perspective.</p>
      </div>

      <p>A lingering detail is the name of their home: St. Martin's Land. St. Martin of Tours is a patron saint often associated with charity to outsiders and strangers. Was the girl's story a confused memory, or a clever allegory for being lost and taken in by strangers in a foreign land?</p>
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
    excerpt: `In 1908, an explosion 1,000 times more powerful than the Hiroshima bomb flattened a remote Siberian forest. Witnesses saw a pillar of blue light. The mystery? There was no impact crater.`,
    content: `
      <div class="article-tag">Based on Real Events</div>
      <p>On June 30, 1908, an explosion of apocalyptic scale occurred over the Tunguska region in Siberia, flattening over 2,000 square kilometers of forest. It remains the largest 'impact event' in recorded history. But when scientists finally reached the remote site, they found millions of felled trees pointing away from a central point, and one baffling, impossible fact: there was no crater. What could cause such devastation and leave no trace of itself?</p>

      <h2>1. Fact: The Explosion</h2>
      <p>Local Evenki people and Russian settlers witnessed a "pillar of fire" or a "blueish light, as bright as the sun" streak across the morning sky. This was followed by a sound like artillery fire and a shockwave that shattered windows and knocked people off their feet hundreds of kilometers away. For several nights afterward, the sky over Europe and Asia glowed with an eerie light, a phenomenon now known as 'luminous nights'.</p>
      
      <h2>2. Hypothesis: The Airburst Theory</h2>
      <p>The leading scientific explanation is that a small asteroid or comet, likely 50-60 meters in diameter, entered the atmosphere at high speed and disintegrated in a massive mid-air explosion (an 'airburst') 5 to 10 kilometers above the ground. The resulting high-temperature shockwave flattened the forest below. The 2013 Chelyabinsk meteor event in Russia was a much smaller version of this same phenomenon, and it provided a real-world model that strongly supports the Tunguska airburst theory. The object was completely vaporized, which is why no impact crater or significant fragments have ever been found.</p>

      <h2>3. Speculation: The Fringe Theories</h2>
      <p>The lack of a crater has left the door open for more imaginative speculation over the years. These theories are not supported by evidence but remain part of the Tunguska lore:</p>
      <ul>
        <li><strong>Antimatter:</strong> A piece of antimatter colliding with Earth's atmosphere would annihilate itself, releasing enormous energy without leaving a physical impactor.</li>
        <li><strong>Black Hole:</strong> A 'micro black hole' passing through the Earth was proposed, but this would have created an exit wound on the other side of the planet, which was not observed.</li>
        <li><strong>Alien Craft / Weapon:</strong> The most popular fringe theory is that the explosion was a crashing alien spaceship or the test of an extraterrestrial weapon.</li>
      </ul>

      <div style="background-color: #2a2a2a; border-left: 4px solid #d4af37; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0; color: #e0e0e0;">
        <h3 style="margin-top: 0;">What's Your Theory?</h3>
        <p style="margin-bottom: 0;">Is the scientific airburst theory sufficient to explain the event, or do the strange atmospheric effects and lack of fragments suggest something more exotic? Let us know your thoughts.</p>
      </div>

      <p>Here is one final, strange fact: In 2020, scientists studying microscopic rock samples from the Tunguska region found that their composition doesn't perfectly match known meteorites, asteroids, or comets. While this doesn't disprove the airburst theory, it does mean that the object that caused the explosion may have been of a type we have not yet encountered.</p>
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
