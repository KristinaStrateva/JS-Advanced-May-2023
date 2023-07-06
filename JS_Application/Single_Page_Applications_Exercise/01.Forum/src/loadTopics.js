async function loadTopics() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        const data = await response.json();


    } catch (err) {
        alert(err.message);
    }
}

module.exports = loadTopics;