const formELement = document.querySelector('.new-topic-border form');
const topicContainerElement = document.querySelector('.topic-container');

async function postTopic() {
    try {
        const formData = new FormData(formELement);

        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');

        console.log(title, username, post)
        
    } catch (err) {
        alert(err.message);
    }
}

export default postTopic;