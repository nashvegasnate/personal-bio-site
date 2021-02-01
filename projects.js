console.log("CONNECTED");

const projects = [
  {
    title: "Whatever", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux", 
  },
  {
    title: "Whatever2", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
  title: "Whatever3", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: false,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
},
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = (taco) => {
  let domString = '';

  for (let i = 0; i < taco.length; i++) {
      domString += `<div class="card" style="width: 18rem;" id${i}> 
      <img src="url('${taco[i].imageUrl}');" class="card-img-top" alt="blah">
      <div class="card-body">
        <p class="card-text">${taco[i].projectName}</p>
      </div>
    </div>`
  }

  for (let [i, element] of taco.entries()) {
    domString += `<div class="card" style="width: 18rem;" id${i}> 
    <img src="url('${taco[i].imageUrl}');" class="card-img-top" alt="blah">
    <div class="card-body">
      <p class="card-text">${taco[i].projectName}</p>
    </div>
  </div>`
  }

  printToDom('#projects', domString);
}



const init = () => {
  createProjectCards(projects);
}

init ();
