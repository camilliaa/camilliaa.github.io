const arrBG = [
    'src/img/bg/1.jpg',
    'src/img/bg/2.jpg',
    'src/img/bg/3.jpg',
    'src/img/bg/4.jpg',
    'src/img/bg/5.jpg',
    'src/img/bg/1.gif',
    'src/img/bg/2.gif'
  ];

  const bg = arrBG[Math.floor(Math.random() * arrBG.length)];

  const imgElement = document.createElement('img');
  imgElement.src = bg;
  imgElement.className = 'bg';

  document.body.appendChild(imgElement);