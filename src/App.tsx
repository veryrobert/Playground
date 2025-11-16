import { ShareCard } from './components/ShareCard';
import { shareCards } from './data/shareCards';

export function App() {
  return (
    <div className="min-h-screen bg-bg-black text-text-primary p-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-4">
          <p className="text-accent-green text-small uppercase tracking-[0.2em]">Share widgets</p>
          <h1 className="text-h1">Recent links</h1>
          <p className="text-text-secondary text-body mt-1">
            Flat, tactile widgets that inherit the personality of each provider.
          </p>
        </header>

        <section className="grid gap-3 md:grid-cols-2">
          {shareCards.map((card) => (
            <ShareCard key={card.id} card={card} />
          ))}
        </section>
      </div>
    </div>
  );
}
