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
    excerpt: 'In the fog-laden streets of Victorian London, a detective hunts a phantom that leaves behind only a whisper and a chilling premonition of death.',
    content: `The gas lamps of Whitechapel flickered, casting long, dancing shadows that played tricks on the eyes. For Inspector Frederick Abberline, every shadow seemed to hold a secret, every gust of wind a ghostly whisper. He was hunting a specter, a killer the press had dubbed "The Whispering Shadow."

The victims were found not with marks of violence, but with faces frozen in sheer terror, a single, black feather resting on their chests. The only clue was the testimony of those who lived nearby, who spoke of a sibilant whisper that seemed to come from nowhere and everywhere at once, moments before a scream would curdle the night air.

Abberline’s investigation led him from the opulent parlors of the aristocracy to the squalid opium dens of the East End. He discovered a secret society, a cabal of influential men who dabbled in the occult, seeking to summon a being they believed was an angel of death. They had succeeded, but the entity they had unleashed was not one of judgment, but of pure, malevolent chaos. It was a race against time to unravel the ritual and banish the shadow before it consumed the entire city.`,
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
