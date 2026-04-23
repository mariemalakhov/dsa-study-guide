// Actual Data Structures & Algorithms Review Data (from DAS Final Review.pdf)
const flashcardsData = [
    { q: "What is the time complexity of Merge Sort?", a: "O(n log n). It uses a Divide-and-Conquer approach." },
    { q: "Which sorting algorithm is O(n^2) in the worst case, but considered the best in practice?", a: "Quick Sort." },
    { q: "What is the condition required for Counting Sort to run in O(n) time?", a: "Each of the n input elements must be an integer in the range 0 to k, where k = O(n)." },
    { q: "What is the main difference between a Stack and a Queue?", a: "Stack is Last-In, First-Out (LIFO). Queue is First-In, First-Out (FIFO)." },
    { q: "In a Doubly Linked List, what does the 'prev' pointer of the first element point to?", a: "NIL (or null)." },
    { q: "What is the time complexity of searching for an element in an unsorted Linked List?", a: "O(n), because in the worst case you must search the entire list." },
    { q: "In a Binary Search Tree, what does an Inorder tree traversal do?", a: "It prints values in the left subtree first, then the root key, and lastly the right subtree (resulting in sorted order)." },
    { q: "What is the core idea of Dynamic Programming?", a: "Break the problem into overlapping subproblems, solve them recursively only once, and combine the solutions." },
    { q: "What is the time complexity of Breadth-First Search (BFS)?", a: "O(|V| + |E|), because each node and edge is visited exactly once." },
    { q: "What condition does Dijkstra's Algorithm require?", a: "Non-negative edge weights." }
];

const quizData = [
    {
        question: "Which sorting algorithm is based on the logic of inserting a new card into a sorted subarray (like playing poker)?",
        options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
        answer: 2
    },
    {
        question: "What is the time complexity of deleting an element from a known position in a Linked List?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: 0
    },
    {
        question: "In Dynamic Programming, what is the 'Rod-Cutting Problem' trying to maximize?",
        options: ["Number of pieces", "Total revenue", "Length of the longest piece", "Number of cuts"],
        answer: 1
    },
    {
        question: "For a single source shortest path algorithm that ALLOWS negative-weight cycles and will output false if one exists, which algorithm should you use?",
        options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Bellman-Ford Algorithm", "BFS"],
        answer: 2
    },
    {
        question: "In Depth-First Search (DFS), what does the color BLACK signify for a vertex?",
        options: ["It has not been discovered yet", "It has been discovered, but not its neighbors", "It and its neighbors have been discovered", "It is the source node"],
        answer: 2
    }
];

// --- Navigation Logic ---
document.querySelectorAll('.nav-links a[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
        
        // Add active class to clicked link and target section
        e.target.classList.add('active');
        const targetId = e.target.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-section');
    });
});


// --- Flashcards Logic ---
let currentCardIndex = 0;
const flashcard = document.getElementById('flashcard');
const questionEl = document.getElementById('fc-question');
const answerEl = document.getElementById('fc-answer');
const counterEl = document.getElementById('card-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateCard() {
    // Reset flip
    flashcard.classList.remove('is-flipped');
    
    // Slight delay to allow flip animation to reset before changing text
    setTimeout(() => {
        questionEl.textContent = flashcardsData[currentCardIndex].q;
        answerEl.textContent = flashcardsData[currentCardIndex].a;
        counterEl.textContent = `${currentCardIndex + 1} / ${flashcardsData.length}`;
    }, 150);
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateCard();
    }
});

// Initialize first card
updateCard();


// --- Quiz Logic ---
let currentQuizIndex = 0;
let score = 0;

const quizQuestionEl = document.getElementById('quiz-question-text');
const quizOptionsEl = document.getElementById('quiz-options');
const quizFeedbackEl = document.getElementById('quiz-feedback');
const nextQuizBtn = document.getElementById('next-quiz-btn');
const quizScoreEl = document.getElementById('quiz-score');

function loadQuiz() {
    const currentQ = quizData[currentQuizIndex];
    quizQuestionEl.textContent = `${currentQuizIndex + 1}. ${currentQ.question}`;
    quizOptionsEl.innerHTML = '';
    quizFeedbackEl.textContent = '';
    nextQuizBtn.classList.add('hidden');
    
    currentQ.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.classList.add('quiz-option');
        div.textContent = opt;
        div.addEventListener('click', () => selectAnswer(index, div));
        quizOptionsEl.appendChild(div);
    });

    updateScoreDisplay();
}

function selectAnswer(selectedIndex, optionDiv) {
    // Prevent multiple clicks
    if (!nextQuizBtn.classList.contains('hidden')) return;

    const correctIndex = quizData[currentQuizIndex].answer;
    const allOptions = document.querySelectorAll('.quiz-option');

    if (selectedIndex === correctIndex) {
        optionDiv.classList.add('correct');
        quizFeedbackEl.textContent = "Correct! 🎉";
        quizFeedbackEl.style.color = "var(--accent-color)";
        score++;
    } else {
        optionDiv.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        quizFeedbackEl.textContent = "Incorrect.";
        quizFeedbackEl.style.color = "var(--danger)";
    }
    
    updateScoreDisplay();
    
    if (currentQuizIndex < quizData.length - 1) {
        nextQuizBtn.classList.remove('hidden');
    } else {
        quizFeedbackEl.textContent += ` Quiz Complete! Final Score: ${score}/${quizData.length}`;
    }
}

function updateScoreDisplay() {
    quizScoreEl.textContent = `Score: ${score} / ${quizData.length}`;
}

nextQuizBtn.addEventListener('click', () => {
    currentQuizIndex++;
    loadQuiz();
});

// Initialize first quiz question
loadQuiz();
