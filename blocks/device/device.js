export default function decorate(block) {
  // The product name is a bold link. The global decorateButtons() turns any
  // <strong><a> into a pill button — undo that so it stays a plain bold link.
  const nameLink = block.querySelector('a');
  if (nameLink) {
    nameLink.classList.remove('button', 'primary', 'secondary', 'accent');
    const nameP = nameLink.closest('p');
    nameP?.classList.remove('button-wrapper', 'button-container');
    nameP?.classList.add('device-name');
  }

  const priceP = [...block.querySelectorAll('p')].find((p) => p.querySelector('br'));
  if (priceP) {
    priceP.classList.add('device-price');
    // wrap the "in plaats van …" text after the <br> so it can be struck through
    const br = priceP.querySelector('br');
    const old = document.createElement('span');
    old.className = 'device-old';
    let node = br.nextSibling;
    while (node) {
      const next = node.nextSibling;
      old.append(node);
      node = next;
    }
    priceP.append(old);
  }
}
