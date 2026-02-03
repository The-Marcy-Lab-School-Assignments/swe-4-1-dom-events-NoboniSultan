const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const playlistsGrid = document.querySelector('#playlists-grid');
const nowPlayingTitle = document.querySelector('#now-playing-title');

playlists.forEach((playlist) => {
  const li = document.createElement('li');
  li.classList.add('playlist-card');
  li.dataset.title = playlist.title;

  const img = document.createElement('img');
  img.src = playlist.image;
  img.alt = `${playlist.title} playlist cover`;

  const p = document.createElement('p');
  p.textContent = playlist.title;

  li.append(img, p);
  playlistsGrid.append(li);
});

playlistsGrid.addEventListener('click', (event) => {
  const clickedCard = event.target.closest('.playlist-card');
  if (!clickedCard) return;

  const selectedCard = document.querySelector('.playlist-card.selected');
  if (selectedCard) {
    selectedCard.classList.remove('selected');
  }
  clickedCard.classList.add('selected');
  nowPlayingTitle.textContent = clickedCard.dataset.title;
});