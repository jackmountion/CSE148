// Save papers to localStorage
function loadPapers() {
    const stored = localStorage.getItem('papers');
    return stored ? JSON.parse(stored) : [];
}

function savePapers(papers) {
    localStorage.setItem('papers', JSON.stringify(papers));
}

function renderPapers() {
    const list = document.getElementById('paper-list');
    list.innerHTML = '';
    const papers = loadPapers();
    papers.forEach((paper, index) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = paper.file;
        link.textContent = `${paper.title} - ${paper.authors}`;
        link.download = `${paper.title}.pdf`;
        li.appendChild(link);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            papers.splice(index, 1);
            savePapers(papers);
            renderPapers();
        });
        li.appendChild(removeBtn);

        list.appendChild(li);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('paper-title').value.trim();
    const authors = document.getElementById('paper-authors').value.trim();
    const fileInput = document.getElementById('paper-file');

    if (!fileInput.files.length) {
        alert('Please select a PDF file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const papers = loadPapers();
        papers.push({ title, authors, file: e.target.result });
        savePapers(papers);
        renderPapers();
        document.getElementById('paper-form').reset();
    };
    reader.readAsDataURL(fileInput.files[0]);
}

document.getElementById('paper-form').addEventListener('submit', handleFormSubmit);

// Initialize
renderPapers();
