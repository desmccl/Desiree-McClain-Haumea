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

const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');

const messageForm = document.getElementById('leave_message');

messageSection.style.display = 'none';

leave_message.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.usersName.value;
    const email = this.usersEmail.value;
    const message = this.usersMessage.value;
    
    console.log(name, email, message);

    messageSection.style.display = 'block';

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>${message}</span>`;
    
    messageList.appendChild(newMessage);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = this.parentNode;
        entry.remove();
        
        if (messageList.childElementCount === 0) {
        messageSection.style.display = 'none';
    }
    });

    newMessage.appendChild(removeButton);


    this.reset();
});