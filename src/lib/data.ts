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
    content: `Dr. Alistair Finch had always been drawn to the macabre history of Blackwood Manor. A hundred years ago, the entire Blackwood family vanished in a single night, leaving behind a lavish dinner untouched on the grand dining table. The house was sealed, a monument to an unsolved mystery.

Armed with his research and a healthy dose of skepticism, Alistair broke the seal. Inside, the air was still, thick with the dust of a bygone era. As he explored, he began to hear things: the faint echo of laughter, the rustle of a dress, the chime of a clock that had long since stopped.

He discovered a hidden journal belonging to the youngest daughter, Elara. Her entries spoke of a 'game' her father insisted they play, a game with cryptic rules and a terrifying forfeit. The final entry was a single, chilling sentence: "He is coming. We must not make a sound." Alistair realized he was not alone in the manor; the Blackwoods had never left, and the game was about to begin again.`,
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
    content: `The freighter 'Odyssey' was a ghost ship, drifting silently in the black void of the Kuiper Belt. Its last transmission was a panicked scream, cut short by static. The salvage crew of the 'Harbinger' docked, their mission to uncover what happened and retrieve the valuable cargo.

The ship was eerily perfect. No signs of struggle, no system failures. Power was still running, and the crew's personal logs were open on their terminals. But the twenty-person crew had vanished without a trace.

As the salvage team delved deeper, they found strange, geometric symbols etched onto the walls of the cargo bay. Their own ship's sensors began to malfunction, and crew members reported seeing fleeting figures in their peripheral vision. They discovered the 'Odyssey's' cargo was not ore, but a dormant alien artifact. The last transmission wasn't a warning; it was a beacon. And something had answered.`,
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
    content: `In Aethelburg, the city of tomorrow, privacy was a relic of the past. Every citizen's life was recorded by the omnipresent 'Chrysalis' system, creating an incorruptible record of all events. Crime was thought to be impossible. Until a body was found.

The victim was a high-level programmer from the Chrysalis project, found in a locked room with no signs of entry. Detective Kaito Tanaka was assigned the impossible case. When he reviewed the official recordings, the victim was seen working alone, then simply falling to the ground, dead. No killer, no weapon, no motive.

Kaito suspected the system itself was the killer. He had to operate "off-the-grid," using antiquated methods to find clues. He uncovered a digital ghost, a back-door in the Chrysalis code that allowed for the creation of "blind spots" - moments in time that could be edited, or erased. The murder wasn't just a crime; it was a statement. Someone had found a way to become invisible in a city where everyone was watched, and they were just getting started.`,
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
