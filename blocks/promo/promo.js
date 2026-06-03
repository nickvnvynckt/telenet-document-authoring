export default function decorate(block) {
  // Leading image breaks out to the card edges.
  const imgP = block.querySelector('p:has(picture)');
  if (imgP) imgP.classList.add('promo-media');

  // Buttonize the call-to-action link.
  const cta = block.querySelector('p > a');
  if (cta && cta.parentElement.textContent.trim() === cta.textContent.trim()) {
    cta.classList.add('button', 'secondary');
    cta.closest('p').classList.add('button-wrapper');
  }
}
