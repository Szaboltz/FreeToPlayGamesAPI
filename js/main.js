const getAgents = async () => {
  const main = document.querySelector('.content');

  main.innerHTML = `<p>Carregando</p>`

  const response = await fetch('https://valorant-api.com/v1/agents');
  
  if (response.ok) {
    const data = await response.json();
    const agentsArray = data.data.filter((agent) => agent.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9")
    console.log(agentsArray)

    main.innerHTML = ''

    agentsArray.map((agent) => {
      main.innerHTML += `
      <div class="agents">
        <div class="img">
         <img src="${agent.fullPortrait}">
        </div>
        <div class="text">
          <p class="title">${agent.displayName}</p>
          <p><span class="title">// Biography: </span><br><br>${agent.description}</p>
          <p><span class="title">// Role: </span><br><br>${agent.role.displayName}</p>
        </div>
      </div>
      `
    })
  }
}

