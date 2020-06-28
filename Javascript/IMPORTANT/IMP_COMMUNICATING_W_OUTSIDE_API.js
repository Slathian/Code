console.log('Starting Fetch Call');
const postPromise = fetch('https://api.dailysmarty.com/posts');
console.log('After Fetch call');
console.log(postPromise);
console.log('after program has run');

postPromise
    .then(data => data.json())
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.url_for_post);
        })
    })
    .catch((err) => {
        console.log(err);
    });
