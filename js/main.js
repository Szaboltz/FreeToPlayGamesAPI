const getAgents = async () => {
  const main = document.querySelector('.content');

  main.innerHTML = `<div class="loading"><p>Carregando</p></div>`

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
          <button id="button" href="./index.html"><a id="link-button" href="./index.html">Back to Home</a></button>
        </div>
      </div>
      `
    })
  } else if (response.status == 404) {
    main.innerHTML = `<div class="loading"><p>Page not Found</p></div>`
  } else if (response.status == 500) {
    main.innerHTML = `<div class="loading"><p>Server Down</p></div>`
  }
}

const getAgentsByName = async () => {
  const main = document.querySelector('.content');
  const agentName = document.querySelector('#SelectByName').value;

  main.innerHTML = `<div class="loading"><p>Carregando</p></div>`

  // console.log(agentName)

  const response = await fetch('https://valorant-api.com/v1/agents');
  const data = await response.json();
  const agentsArray = data.data.filter((agent) => agent.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9")
  // console.log(agentsArray)

  main.innerHTML = ''

  agentsArray.map((agent) => {
    if (agentName == agent.displayName) {
      main.innerHTML += `
      <div class="agents">
        <div class="img">
         <img src="${agent.fullPortrait}">
        </div>
        <div class="text">
          <p class="title">${agent.displayName}</p>
          <p><span class="title">// Biography: </span><br><br>${agent.description}</p>
          <p><span class="title">// Role: </span><br><br>${agent.role.displayName}</p>
          <button id="button" href="./index.html"><a id="link-button" href="./index.html">Back to Home</a></button>
        </div>
      </div>
      `
    } else if (agentName == "#") {
      getAgents();
    }
  })
}

const getWeapons = async () => {
  const main = document.querySelector('.content');

  main.innerHTML = `<div class="loading"><p>Carregando</p></div>`

  const response = await fetch('https://valorant-api.com/v1/weapons');

  if (response.status == 200) {
    const data = await response.json();

    main.innerHTML = ''

    data.data.map((weapon) => {
      main.innerHTML += `
      <div class="agents weapons">
        <div class="img">
         <img src="${weapon.displayIcon}">
        </div>
        <div class="text">
          <p class="title">${weapon.displayName}</p>
          <p><span class="title">// Fire Rate: </span><br><br>${weapon.weaponStats.fireRate}</p>
          <p><span class="title">// Magazine Size: </span><br><br>${weapon.weaponStats.magazineSize}</p>
          <p><span class="title">// Relod Time: </span><br><br>${weapon.weaponStats.reloadTimeSeconds}s</p>
          <button id="button" href="./index.html"><a id="link-button" href="./index.html">Back to Home</a></button>
        </div>
      </div>
      `
    })
  } else if (response.status == 404) {
    main.innerHTML = `<div class="loading"><p>Page not Found</p></div>`
  } else if (response.status == 500) {
    main.innerHTML = `<div class="loading"><p>Server Down</p></div>`
  }
}

const getWeaponsByName = async () => {
  const main = document.querySelector('.content');
  const weaponName = document.querySelector('#SelectWeaponByName').value;

  console.log(weaponName)

  main.innerHTML = `<div class="loading"><p>Carregando</p></div>`

  // console.log(waeponName)

  const response = await fetch('https://valorant-api.com/v1/weapons');
  const data = await response.json();

  // console.log(data)

  main.innerHTML = ''

  data.data.map((weapon) => {
    if (weaponName == weapon.displayName) {
      main.innerHTML += `
      <div class="agents weapons">
        <div class="img">
         <img src="${weapon.displayIcon}">
        </div>
        <div class="text">
          <p class="title">${weapon.displayName}</p>
          <p><span class="title">// Fire Rate: </span><br><br>${weapon.weaponStats.fireRate}</p>
          <p><span class="title">// Magazine Size: </span><br><br>${weapon.weaponStats.magazineSize}</p>
          <p><span class="title">// Relod Time: </span><br><br>${weapon.weaponStats.reloadTimeSeconds}s</p>
          <button id="button" href="./index.html"><a id="link-button" href="./index.html">Back to Home</a></button>
        </div>
      </div>
      `
    } else if (weaponName == "#") {
      getWeapons();
    }
  })
}