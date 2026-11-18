const term = document.querySelector('.term');
const form = document.getElementById('term-form');
const input = document.getElementById('cmd');
const history = document.getElementById('history');

const commands = {
  help: () => 'commands: help, whoami, links, favorites, date, clear',
  whoami: () => 'andrii',
  links: () => 'telegram: https://t.me/qwieswie\ngithub: https://github.com/qwieswiee',
  favorites: () => 'see section below ↓',
  date: () => new Date().toString(),
  clear: () => { history.replaceChildren(); return null; }
};

function print(text, className) {
  const p = document.createElement('p');
  p.className = className;
  p.textContent = text;
  history.appendChild(p);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  input.value = '';
  if (!value) return;

  print('$ ' + value, 'cmd');
  const run = commands[value.toLowerCase()];
  const answer = run ? run() : 'command not found: ' + value + ' (try help)';
  if (answer) print(answer, 'out-line');
});

term.addEventListener('click', () => input.focus());