// Function to toggle questions visibility
function toggleQuestions(id) {
    const questions = document.getElementById(id);
    if (questions.style.display === 'none' || questions.style.display === '') {
        questions.style.display = 'block';
    } else {
        questions.style.display = 'none';
    }
}
