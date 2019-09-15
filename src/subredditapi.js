export async function getSubreddit(subreddit) {
    let response = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);
    let repos = await response.json();
    return repos;
}