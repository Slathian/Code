// https://api.github.com/users/Slathian/repos
// https://api.dailysmarty.com/posts

async function queryApis() {
  try {
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);
  } catch (err) {
    console.log(err);
    console.log('There was an error with Daily Smarty');
  }

  try {
    const reposPromise = fetch('https://api.github.com/users/Slathian/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
  } catch (err) {
    console.log(err);
    console.log('There was an error with the github API');
  }
}

queryApis();

// Wrap them up if they NEED to be activated one after the other. If they are seperate, wrap them like this where they are seperate so that they can actually load even if one fails
