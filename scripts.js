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