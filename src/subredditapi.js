export async function getSubreddit(subreddit) {
    let response = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);
    let posts = await response.json();
    return posts;
}