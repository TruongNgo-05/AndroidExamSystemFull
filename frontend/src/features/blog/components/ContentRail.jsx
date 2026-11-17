export default function ContentRail({ items, render, label }) {
  return (
    <div className="about-rail" role="region" aria-label={label} tabIndex={0}>
      <div className="about-track">
        {[0, 1].map((copy) => (
          <div
            className="about-track-group"
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((item) => render(item, copy === 1))}
          </div>
        ))}
      </div>
    </div>
  );
}
