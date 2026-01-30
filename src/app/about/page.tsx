import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Shadow Scroll',
  description: 'Learn more about Shadow Scroll, a blog dedicated to mystery storytelling with a cinematic feel.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold !leading-tight tracking-tight mb-4">
          About Shadow Scroll
        </h1>
      </header>
      <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90 prose-p:mb-6 prose-headings:font-headline prose-headings:text-foreground">
        <p>
          Welcome to Shadow Scroll, your portal into the world of mystery and suspense. We are passionate storytellers dedicated to crafting tales that send a shiver down your spine and keep you guessing until the very end.
        </p>
        <p>
          Our blog was born from a love for classic film noir, gothic horror, and mind-bending psychological thrillers. We believe that a good mystery is more than just a puzzle; it's an immersive experience. Here, we strive to create that experience through "cinematic storytelling"—writing that is vivid, atmospheric, and emotionally resonant.
        </p>
        <p>
          Each story is a carefully woven tapestry of intrigue, exploring the darker corners of the human psyche and the unsettling secrets that lie just beneath the surface of the ordinary. From fog-laden Victorian streets to the uncanny silence of a derelict spaceship, our settings are as much a character as the detectives and victims themselves.
        </p>
        <p>
          Thank you for joining us on this journey into the shadows. We hope our stories captivate your imagination and leave you with a lingering sense of wonder.
        </p>
      </div>
    </div>
  );
}
