  const scrollFunc1 = () => {
      let destination = document.getElementById("about");
      destination.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
      })
  }
  const scrollFunc2 = () => {
      let destination = document.getElementById("projects");
      destination.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
      })
  }

  let nameColor = document.getElementById('name');
  
  const colorValue = () => Math.floor(Math.random() * 256);

  const colorChange = event => {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;
  }

  nameColor.addEventListener('mouseover', colorChange);