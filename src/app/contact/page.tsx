import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Shadow Scroll',
  description: 'Get in touch with the team behind Shadow Scroll.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold !leading-tight tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg">We'd love to hear from you.</p>
      </header>
      <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90 text-center">
        <p>
          Have a question, a comment, or a chilling story idea of your own? We welcome your correspondence. For all inquiries, please reach out to us via email.
        </p>
        <p>
          You can email us at: <a href="mailto:contact@shadowscroll.com" className="text-accent hover:text-accent/90">contact@shadowscroll.com</a>
        </p>
        <p>
          We do our best to respond to all messages, but please be patient as we may be lost in another mystery.
        </p>
      </div>
    </div>
  );
}
