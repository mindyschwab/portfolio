// **** Resume Modal ******
const resumeLink = document.getElementById('resume');
console.log(resumeLink);
const resumeDoc = document.getElementById('resume-modal')
const closeBtn = document.getElementById('close-modal')

const openResume = () => {
    resumeDoc.style.display = 'block';
    document.body.style.background = ('rgba(0, 0, 0, 0.75)')
}

const closeResume = () => {
    resumeDoc.style.display = 'none';
}

resumeLink.addEventListener('click', openResume);
closeBtn.addEventListener('click', closeResume);