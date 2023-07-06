window.addEventListener('DOMContentLoaded', () => {
    const [cancelButtonElement, postButtonElement] = document.querySelectorAll('button');
    const topicContainerElement = document.querySelector('.topic-container');
    const formELement = document.querySelector('form');

    postButtonElement.addEventListener('click', (e) => {
        e.preventDefault()
        
        postTopic(formELement);
    })
})

async function postTopic(form) {
    try {
        const formData = new FormData(form);

        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');

        const bodyData = {
            title,
            username,
            post
        };

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        };

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', options);

        if (!res.ok) {
            const errorMessage = (await res.json()).message;

            throw new Error(errorMessage);
        }

        const data = await res.json();

        return data;

    } catch (err) {
        alert(err.message);
    }
}


