export default function decorate(block) {
  block.querySelectorAll('p').forEach((p) => p.classList.add('links-item'));
}
