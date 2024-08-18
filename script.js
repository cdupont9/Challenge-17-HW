
const pollResults = {
    Meetly: 0,
    "American Clothing Pickup": 0,
    "US Department of Education": 0
};


function submitPoll() {
    const form = document.getElementById('pollForm');
    const formData = new FormData(form);
    const selectedCaseStudy = formData.get('case-study');

    if (selectedCaseStudy) {
        pollResults[selectedCaseStudy]++;
        updateResults();
    } else {
        alert('Please select an option before submitting your vote.');
    }
}


function updateResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; //

    for (let caseStudy in pollResults) {
        const result = document.createElement('p');
        result.textContent = `${caseStudy}: ${pollResults[caseStudy]} vote(s)`;
        resultsDiv.appendChild(result);
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
