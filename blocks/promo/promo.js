export default function decorate(block) {
  const cell = block.querySelector(':scope > div > div');
  const paras = cell ? [...cell.children].filter((c) => c.tagName === 'P') : [];

  // image breaks out to the card edges (positioned at the bottom via CSS)
  const imgP = block.querySelector('p:has(picture)');
  if (imgP) imgP.classList.add('promo-media');

  // Eyebrow/tag = a fully-bold short paragraph (its whole text is one <strong>).
  // Title = a partially-bold paragraph (e.g. "<strong>Word</strong> rest").
  const textParas = paras.filter((p) => !p.querySelector('picture, a'));
  const isFullyBold = (p) => {
    const s = p.querySelector('strong');
    return s && p.textContent.trim() === s.textContent.trim();
  };
  const tagP = textParas.find(isFullyBold);
  if (tagP) tagP.classList.add('promo-tag');
  const titleP = textParas.find((p) => p !== tagP && p.querySelector('strong'));
  if (titleP) titleP.classList.add('promo-title');

  // CTA = a link that is the sole content of its paragraph -> underlined link
  const cta = block.querySelector('p > a');
  if (cta && cta.parentElement.textContent.trim() === cta.textContent.trim()) {
    cta.closest('p').classList.add('promo-cta');
  }
}
