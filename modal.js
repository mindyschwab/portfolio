// **** Resume Modal ******
const resumeLink = document.getElementById('resume');
const resumeDoc = document.getElementById('resume-modal')
const closeBtn = document.getElementById('close-modal')

const openResume = () => {
    resumeDoc.style.display = 'block';
}

const closeResume = () => {
    resumeDoc.style.display = 'none';
}

resumeLink.addEventListener('click', openResume);
closeBtn.addEventListener('click', closeResume);