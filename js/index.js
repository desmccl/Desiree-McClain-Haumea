const footer = document.createElement('footer');
document.body.appendChild(footer);


const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Desiree McClain ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "CSS", "Java", "GitHub"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
