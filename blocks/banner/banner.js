export default function decorate(block) {
  // Authored structure: row 1 = background/illustration <picture>, row 2 = <h1> + CTA link.
  [...block.children].forEach((row) => {
    const cell = row.firstElementChild;
    if (!cell) {
      row.remove();
      return;
    }
    const isMedia = cell.querySelector('picture') && !cell.querySelector('h1, h2, h3, p');
    cell.classList.add(isMedia ? 'banner-media' : 'banner-content');
    // unwrap the row so media/content sit directly inside the block
    row.replaceWith(cell);
  });

  // style the call-to-action link as a primary chevron button
  const cta = block.querySelector('.banner-content a');
  if (cta) {
    cta.classList.add('button');
    cta.closest('p')?.classList.add('button-wrapper');
  }
}
