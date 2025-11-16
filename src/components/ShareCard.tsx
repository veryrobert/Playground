import type { ShareCard } from '../types/shareCard';

const statusCopy: Record<NonNullable<ShareCard['status']>, string> = {
  active: 'Live',
  viewed: 'Viewed',
  new: 'New',
};

const statusTone: Record<NonNullable<ShareCard['status']>, string> = {
  active: 'text-accent-green',
  viewed: 'text-text-secondary',
  new: 'text-accent-blue',
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});

export function ShareCard({ card }: { card: ShareCard }) {
  const lastUpdatedCopy = dateFormatter.format(new Date(card.lastUpdated));

  return (
    <article
      className="widget w-widget-card bg-surface-1 rounded-card p-2 gap-2 flex flex-col stroke-subtle border border-transparent"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <header className="flex items-center gap-2">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: card.provider.accentSoft }}
        >
          <img src={card.provider.logo} alt={`${card.provider.name} logo`} className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="text-text-secondary text-small">{card.provider.name}</p>
          <h3 className="text-h3 text-text-primary">{card.title}</h3>
        </div>
        {card.status && (
          <span className={`text-small font-medium ${statusTone[card.status]}`}>
            {statusCopy[card.status]}
          </span>
        )}
      </header>

      <p className="text-body text-text-secondary">{card.description}</p>

      <dl className="grid grid-cols-3 gap-2 text-small text-text-secondary">
        {card.meta.map((meta) => (
          <div key={meta.label} className="bg-surface-2 rounded-input p-2">
            <dt className="text-text-tertiary">{meta.label}</dt>
            <dd className="text-text-primary font-medium">{meta.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center gap-2 text-small text-text-tertiary">
        <span>Shared by {card.sharedBy}</span>
        <span className="w-1 h-1 rounded-full bg-text-tertiary" />
        <span>Updated {lastUpdatedCopy}</span>
      </div>

      <div className="flex items-center gap-2">
        {card.actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={`flex-1 h-11 rounded-button text-small font-medium transition-all duration-150 ease-out-cubic ${
              action.variant === 'primary'
                ? 'bg-text-primary text-bg-black hover:bg-white/90'
                : 'bg-surface-2 text-text-primary hover:bg-surface-2/80'
            }`}
            style={
              action.variant === 'primary'
                ? { backgroundColor: card.provider.accentColor }
                : undefined
            }
          >
            <span className="flex h-full items-center justify-center">{action.label}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
