export default function decorate(block) {
  const rows = [...block.children];
  const heading = block.querySelector('h1, h2, h3, h4, h5, h6');
  const list = block.querySelector('ul');
  const pic = block.querySelector('picture');

  // Structural variant detection (mutually exclusive).
  if (rows.length === 1 && rows[0].children.length === 2) {
    // single row holding two cells (content + action) -> horizontal card
    block.classList.add('card-row');
  } else if (list) {
    block.classList.add('card-list');
    // reuse the shared chevron marker on each list link
    block.querySelectorAll('li a').forEach((a) => a.classList.add('tn-chevron'));
  } else if (pic && heading && heading.contains(pic)) {
    // icon sits inside the heading -> accent (yellow) card
    block.classList.add('card-highlight');
  } else if (pic) {
    // standalone leading image -> media card
    block.classList.add('card-media');
    pic.closest('p')?.classList.add('card-figure');
  }

  // Buttonize call-to-action links (a link that is the sole content of its
  // wrapper), skipping links inside the navigation list.
  block.querySelectorAll('a').forEach((a) => {
    if (a.closest('li')) return;
    const wrapper = a.parentElement;
    if (wrapper.children.length === 1 && wrapper.textContent.trim() === a.textContent.trim()) {
      a.classList.add('button');
      if (!block.classList.contains('card-highlight')) a.classList.add('secondary');
      if (wrapper.tagName === 'P') wrapper.classList.add('button-wrapper');
    }
  });
}
