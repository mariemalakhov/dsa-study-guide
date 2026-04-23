// --- Comprehensive Review Data ---
const flashcardsData = [
    { q: "What is the time complexity of Insertion Sort and when is it useful?", a: "O(n^2). It works like sorting poker cards in your hand; best for small or nearly sorted arrays." },
    { q: "Explain the Merge Sort algorithm.", a: "It is a Divide-and-Conquer algorithm. It recursively divides the sequence until length 1, then merges sorted subarrays. Time complexity: O(n log n)." },
    { q: "What makes Quick Sort the best in practice despite O(n^2) worst-case?", a: "Its average case is O(n log n) with very small hidden constant factors. It partitions the array around a pivot element." },
    { q: "When does Counting Sort run in O(n) time?", a: "When each of the n input elements is an integer in the range 0 to k, where k = O(n)." },
    { q: "Difference between Stack and Queue?", a: "Stack is LIFO (Last-In, First-Out). Queue is FIFO (First-In, First-Out)." },
    { q: "Write pseudocode to insert an element 'x' at the front of a Doubly Linked List 'L'.", a: "<pre>x.next = L.head\nif L.head != NIL:\n  L.head.prev = x\nL.head = x\nx.prev = NIL</pre>" },
    { q: "What is a Binary Search Tree (BST) property?", a: "For any node x, keys in its left subtree are <= x.key, and keys in its right subtree are >= x.key." },
    { q: "How do you find the minimum value in a BST?", a: "Keep following the 'left' child pointers until you reach a node that has no left child (left = NIL)." },
    { q: "What are the two core properties of Dynamic Programming?", a: "1. Optimal Substructure (optimal solution to problem contains optimal solutions to subproblems). 2. Overlapping Subproblems." },
    { q: "What is the recurrence relation for the Rod-Cutting DP problem?", a: "<pre>r_n = max(p_i + r_{n-i}) for 1 <= i <= n</pre>" },
    { q: "Explain the difference between BFS and DFS.", a: "BFS explores level-by-level using a Queue. DFS explores as deep as possible along a branch using a Stack (or recursion)." },
    { q: "In DFS, what do the timestamps u.d and u.f represent?", a: "u.d is the discovery time (node turns GRAY). u.f is the finishing time when its entire adjacency list is examined (node turns BLACK)." },
    { q: "What is a Minimum Spanning Tree (MST)?", a: "An acyclic subset of edges that connects all vertices in a weighted, undirected graph, minimizing the total edge weight." },
    { q: "What is the key idea behind Dijkstra's Algorithm?", a: "Maintain a set S of vertices whose shortest-path weights are determined. Repeatedly select the vertex u not in S with the minimum shortest-path estimate, add it to S, and relax all edges leaving u. Requires non-negative weights." },
    { q: "Which algorithm finds All-Pair Shortest Paths and what is its time complexity?", a: "Floyd-Warshall Algorithm. Time complexity is O(|V|^3)." }
];

const allQuizData = {
    easy: [
        { id: "e1", topic: "Sorting", question: "Which sorting algorithm is essentially sorting playing cards in your hands?", options: ["Merge Sort", "Insertion Sort", "Heap Sort", "Counting Sort"], answer: 1, hint: "Think about how you build the final sorted array one item at a time.", explanations: ["Merge sort divides and conquers.", "Insertion sort works by taking elements and inserting them into their correct position, like playing cards.", "Heap sort uses a binary heap data structure.", "Counting sort counts occurrences of each unique element."] },
        { id: "e2", topic: "Structures", question: "A Queue implements which policy?", options: ["LIFO", "FIFO", "Random Access", "Priority Based"], answer: 1, hint: "Think of a line at a grocery store.", explanations: ["LIFO is Last-In, First-Out (Stack).", "FIFO is First-In, First-Out (Queue).", "Arrays provide Random Access.", "Priority Queues use Priority Based access."] },
        { id: "e3", topic: "Structures", question: "If the 'head' of a Linked List is NIL, what does that mean?", options: ["The list is full", "The list is empty", "Memory leak", "Circular reference"], answer: 1, hint: "The head points to the first node.", explanations: ["Lists don't typically get 'full' unless memory runs out.", "NIL means there is no first node, so it's empty.", "NIL is a valid state, not a leak.", "A circular reference would point to an actual node."] },
        { id: "e4", topic: "Graphs", question: "Which graph traversal uses a Queue data structure?", options: ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "Prim's Algorithm"], answer: 1, hint: "Level by level.", explanations: ["DFS uses a Stack.", "BFS uses a Queue to process nodes level by level.", "Dijkstra uses a Min-Priority Queue.", "Prim uses a Min-Priority Queue."] },
        { id: "e5", topic: "Trees", question: "In a Binary Tree, what is the maximum number of children a node can have?", options: ["1", "2", "3", "Unlimited"], answer: 1, hint: "Binary means two.", explanations: ["A binary tree can have up to 2 children.", "Correct. Left and Right child.", "Ternary trees have up to 3.", "General trees have unlimited."] }
    ],
    moderate: [
        { id: "m1", topic: "Structures", question: "What is the worst-case time complexity of finding an element in a Linked List (List-Search)?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: 1, hint: "You might have to look at every element.", explanations: ["Only array indexing by position is O(1).", "You must traverse from the head, taking O(n) worst-case.", "Binary Search on arrays is O(log n).", "O(n^2) is slower than necessary."] },
        { id: "m2", topic: "Trees", question: "Which traversal of a Binary Search Tree prints the keys in sorted order?", options: ["Preorder", "Inorder", "Postorder", "Level-order"], answer: 1, hint: "Left, Root, Right.", explanations: ["Preorder is Root, Left, Right.", "Inorder visits Left, Root, Right, which aligns with BST property.", "Postorder is Left, Right, Root.", "Level-order visits top-down, left-right."] },
        { id: "m3", topic: "Dynamic Programming", question: "In Dynamic Programming, what does 'Memoization' mean?", options: ["Breaking the problem into disjoint subproblems", "Solving subproblems recursively only once and storing the result", "Sorting the input before processing", "Using a memory-efficient data structure"], answer: 1, hint: "Think of keeping a 'memo'.", explanations: ["Divide and Conquer uses disjoint subproblems.", "Memoization caches recursive results to avoid redundant work.", "Sorting is unrelated to Memoization.", "Memoization actually uses MORE memory (table/cache) to save time."] },
        { id: "m4", topic: "Graphs", question: "Which algorithm allows negative-weight edges but outputs false if there is a negative-weight cycle?", options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "BFS"], answer: 1, hint: "It relaxes all edges |V|-1 times.", explanations: ["Dijkstra fails with negative edges.", "Bellman-Ford handles negative weights and detects cycles.", "Floyd-Warshall is all-pairs, not primarily used just for outputting false for cycles.", "BFS doesn't use weights."] },
        { id: "m5", topic: "Graphs", question: "What is the time complexity of Breadth-First Search (BFS)?", options: ["O(|V|)", "O(|E|)", "O(|V| + |E|)", "O(|V| * |E|)"], answer: 2, hint: "Every vertex and edge is processed.", explanations: ["Only considers vertices.", "Only considers edges.", "BFS examines every vertex and every edge once.", "Too slow, BFS is linear with respect to the graph size."] }
    ],
    advanced: [
        { id: "a1", topic: "Dynamic Programming", question: "What is the recurrence relation for the Longest Common Subsequence (LCS) if X[i] != Y[j]?", options: ["c[i,j] = 1 + c[i-1, j-1]", "c[i,j] = max(c[i-1, j], c[i, j-1])", "c[i,j] = c[i-1, j-1]", "c[i,j] = min(c[i-1, j], c[i, j-1])"], answer: 1, hint: "If they don't match, you take the best of skipping one or the other.", explanations: ["This applies when X[i] == Y[j].", "If characters don't match, we take the max of skipping either character.", "This is incorrect.", "We want the *longest* subsequence, so we use max, not min."] },
        { id: "a2", topic: "Graphs", question: "In Dijkstra's algorithm, what data structure is used to extract the node with the minimum distance?", options: ["Stack", "Hash Table", "Min-Priority Queue", "Adjacency Matrix"], answer: 2, hint: "You need the minimum value quickly.", explanations: ["Stack is LIFO.", "Hash table doesn't maintain order.", "A Min-Priority Queue efficiently extracts the minimum element.", "Adjacency Matrix represents the graph, not the processing queue."] },
        { id: "a3", topic: "Sorting", question: "What is the time complexity of Counting Sort where the elements are in range 0 to k?", options: ["O(n log n)", "O(n + k)", "O(n^2)", "O(k log n)"], answer: 1, hint: "It depends on both the number of elements and the range.", explanations: ["O(n log n) is for comparison sorts.", "Counting sort takes linear time proportional to input size n plus range k.", "O(n^2) is for elementary sorts like Insertion.", "This is not a standard complexity."] },
        { id: "a4", topic: "Graphs", question: "In DFS, a vertex is colored BLACK when:", options: ["It is first discovered", "It is placed in the queue", "It and all its neighbors have been discovered", "It has no edges"], answer: 2, hint: "Finished processing.", explanations: ["When discovered, it is colored GRAY.", "DFS doesn't use a queue.", "BLACK indicates the vertex is fully explored (finished).", "A vertex with no edges gets colored BLACK immediately after GRAY, but the definition applies to all vertices."] },
        { id: "a5", topic: "Dynamic Programming", question: "Which property is REQUIRED for a problem to be solved using Dynamic Programming?", options: ["Optimal Substructure", "Non-negative weights", "Acyclic graph", "Divide and conquer architecture"], answer: 0, hint: "Optimal solutions to the problem incorporate optimal solutions to subproblems.", explanations: ["DP requires Optimal Substructure and Overlapping Subproblems.", "Required for Dijkstra's, not DP generally.", "Required for some graph algorithms, not DP generally.", "Divide and Conquer has non-overlapping subproblems."] }
    ]
};

// --- Dashboard Logic ---
let totalQuestionsAttempted = 0;
let totalQuestionsCorrect = 0;
let topicProgress = {};

function initDashboard() {
    // Populate topicProgress with 0s
    ['Sorting', 'Structures', 'Graphs', 'Trees', 'Dynamic Programming'].forEach(topic => {
        topicProgress[topic] = 0;
    });
    updateDashboardUI();
}

function updateDashboardUI() {
    // Update Mastery Ring
    const masteryPercent = totalQuestionsAttempted === 0 ? 0 : Math.round((totalQuestionsCorrect / totalQuestionsAttempted) * 100);
    const masteryRing = document.getElementById('mastery-ring');
    const masteryText = document.getElementById('mastery-text');
    masteryText.textContent = `${masteryPercent}%`;
    masteryRing.style.background = `conic-gradient(var(--success) ${masteryPercent}%, var(--surface) ${masteryPercent}%)`;

    // Update Heatmap
    const heatmapContainer = document.getElementById('heatmap-container');
    heatmapContainer.innerHTML = '';
    
    // We'll create 5 squares per topic to represent questions available
    Object.keys(topicProgress).forEach(topic => {
        const completed = topicProgress[topic];
        for(let i=0; i<5; i++) {
            const cell = document.createElement('div');
            cell.classList.add('heat-cell');
            cell.title = topic;
            if (i < completed) {
                cell.classList.add('mastered');
            }
            heatmapContainer.appendChild(cell);
        }
    });
}

function recordProgress(topic, isCorrect) {
    totalQuestionsAttempted++;
    if (isCorrect) {
        totalQuestionsCorrect++;
        if (!topicProgress[topic]) topicProgress[topic] = 0;
        topicProgress[topic]++;
    }
    updateDashboardUI();
}

// --- Navigation Logic ---
document.querySelectorAll('.nav-links a[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
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

function updateCard() {
    flashcard.classList.remove('is-flipped');
    setTimeout(() => {
        questionEl.innerHTML = flashcardsData[currentCardIndex].q;
        answerEl.innerHTML = flashcardsData[currentCardIndex].a;
        counterEl.textContent = `${currentCardIndex + 1} / ${flashcardsData.length}`;
    }, 200); 
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateCard();
    }
});

updateCard();

// --- Quiz Logic ---
let currentDifficulty = 'easy';
let currentQuizData = allQuizData[currentDifficulty];
let currentQuizIndex = 0;
let score = 0;
let weakPointsList = JSON.parse(localStorage.getItem('weakPoints')) || [];

const quizQuestionEl = document.getElementById('quiz-question-text');
const quizOptionsEl = document.getElementById('quiz-options');
const quizFeedbackEl = document.getElementById('quiz-feedback');
const nextQuizBtn = document.getElementById('next-quiz-btn');
const quizScoreEl = document.getElementById('quiz-score');
const hintBtn = document.getElementById('hint-btn');
const hintText = document.getElementById('hint-text');
const studyLaterBtn = document.getElementById('study-later-btn');
const postMortemDiv = document.getElementById('post-mortem');
const postMortemList = document.getElementById('post-mortem-list');
const quizActions = document.querySelector('.quiz-actions');

// Mock Exam Generator
function generateMockExam() {
    let allQ = [...allQuizData.easy, ...allQuizData.moderate, ...allQuizData.advanced];
    let topics = {};
    allQ.forEach(q => {
        if(!topics[q.topic]) topics[q.topic] = [];
        topics[q.topic].push(q);
    });
    
    let mockQuestions = [];
    
    // Pick at least 2 from every major topic (if available)
    for(const topic in topics) {
        // shuffle
        topics[topic] = topics[topic].sort(() => 0.5 - Math.random());
        mockQuestions.push(...topics[topic].splice(0, Math.min(2, topics[topic].length)));
    }
    
    // Fill the rest randomly from remaining pool up to 20 or all available
    let remainingPool = [].concat(...Object.values(topics)).sort(() => 0.5 - Math.random());
    while(mockQuestions.length < 20 && remainingPool.length > 0) {
        mockQuestions.push(remainingPool.pop());
    }
    
    // Shuffle final mock array
    return mockQuestions.sort(() => 0.5 - Math.random());
}

function loadWeakPoints() {
    let allQ = [...allQuizData.easy, ...allQuizData.moderate, ...allQuizData.advanced];
    return allQ.filter(q => weakPointsList.includes(q.id));
}

// Handle Difficulty Selection
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentDifficulty = e.target.getAttribute('data-diff');
        
        if (currentDifficulty === 'mock') {
            currentQuizData = generateMockExam();
        } else if (currentDifficulty === 'weak') {
            currentQuizData = loadWeakPoints();
            if(currentQuizData.length === 0) {
                alert("No weak points saved yet! Use 'Study Later' on questions.");
                return;
            }
        } else {
            currentQuizData = allQuizData[currentDifficulty];
        }
        
        currentQuizIndex = 0;
        score = 0;
        loadQuiz();
    });
});

function loadQuiz() {
    if (currentQuizIndex >= currentQuizData.length) {
        quizQuestionEl.innerHTML = "Quiz Complete! 🎉";
        quizOptionsEl.innerHTML = "";
        quizFeedbackEl.textContent = `Final Score for ${currentDifficulty.toUpperCase()}: ${score}/${currentQuizData.length}`;
        nextQuizBtn.classList.add('hidden');
        quizActions.style.display = 'none';
        hintText.classList.add('hidden');
        postMortemDiv.classList.add('hidden');
        
        // If weak points cleared perfectly
        if (currentDifficulty === 'weak' && score === currentQuizData.length) {
            localStorage.setItem('weakPoints', JSON.stringify([]));
            weakPointsList = [];
            quizFeedbackEl.innerHTML += "<br>All weak points mastered and cleared! 🎯";
        }
        return;
    }

    quizActions.style.display = 'flex';
    const currentQ = currentQuizData[currentQuizIndex];
    quizQuestionEl.innerHTML = `<span style="font-size:0.8rem; color:var(--text-secondary); display:block; margin-bottom:5px;">Topic: ${currentQ.topic}</span> ${currentQuizIndex + 1}. ${currentQ.question}`;
    quizOptionsEl.innerHTML = '';
    quizFeedbackEl.textContent = '';
    nextQuizBtn.classList.add('hidden');
    hintText.classList.add('hidden');
    hintText.textContent = currentQ.hint || "No hint available.";
    postMortemDiv.classList.add('hidden');
    
    // Check if already in weak points
    if (weakPointsList.includes(currentQ.id)) {
        studyLaterBtn.innerHTML = "📌 Saved";
        studyLaterBtn.disabled = true;
    } else {
        studyLaterBtn.innerHTML = "📌 Study Later";
        studyLaterBtn.disabled = false;
    }
    
    currentQ.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.classList.add('quiz-option');
        div.innerHTML = opt;
        div.addEventListener('click', () => selectAnswer(index, div));
        quizOptionsEl.appendChild(div);
    });

    updateScoreDisplay();
}

function selectAnswer(selectedIndex, optionDiv) {
    if (!nextQuizBtn.classList.contains('hidden') && currentQuizIndex < currentQuizData.length) return; // Already answered

    const currentQ = currentQuizData[currentQuizIndex];
    const correctIndex = currentQ.answer;
    const allOptions = document.querySelectorAll('.quiz-option');

    let isCorrect = (selectedIndex === correctIndex);
    
    // Record Dashboard Progress
    recordProgress(currentQ.topic, isCorrect);

    if (isCorrect) {
        optionDiv.classList.add('correct');
        quizFeedbackEl.innerHTML = "✅ Correct!";
        quizFeedbackEl.style.color = "var(--success)";
        score++;
    } else {
        optionDiv.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        
        // Custom Error Types
        const errorType = Math.random() > 0.5 ? "Compilation Error" : "Logic Error";
        quizFeedbackEl.innerHTML = `❌ ${errorType}: Answer incorrect.`;
        quizFeedbackEl.style.color = "var(--danger)";
        
        // Show Post Mortem
        postMortemList.innerHTML = '';
        currentQ.options.forEach((opt, idx) => {
            if (idx !== correctIndex) {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${opt}:</strong> ${currentQ.explanations[idx]}`;
                postMortemList.appendChild(li);
            }
        });
        postMortemDiv.classList.remove('hidden');
    }
    
    updateScoreDisplay();
    nextQuizBtn.classList.remove('hidden');
}

function updateScoreDisplay() {
    quizScoreEl.textContent = `Score: ${score} / ${currentQuizData.length}`;
}

nextQuizBtn.addEventListener('click', () => {
    currentQuizIndex++;
    loadQuiz();
});

hintBtn.addEventListener('click', () => {
    hintText.classList.remove('hidden');
});

studyLaterBtn.addEventListener('click', () => {
    const currentQ = currentQuizData[currentQuizIndex];
    if (!weakPointsList.includes(currentQ.id)) {
        weakPointsList.push(currentQ.id);
        localStorage.setItem('weakPoints', JSON.stringify(weakPointsList));
        studyLaterBtn.innerHTML = "📌 Saved";
        studyLaterBtn.disabled = true;
    }
});

// Init
initDashboard();
loadQuiz();

// --- Particle Network Background ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = 'rgba(100, 100, 100, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    let numberOfParticles = (canvas.width * canvas.height) / 12000;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(100, 100, 100, ${0.2 * (1 - distance/100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        
        if (mouse.x != null) {
            let dx = particles[i].x - mouse.x;
            let dy = particles[i].y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(100, 100, 100, ${0.5 * (1 - distance/150)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

if (canvas) {
    resizeCanvas();
    initParticles();
    animateParticles();
}
