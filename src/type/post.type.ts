export interface Post {
    id: string,
    subreddit: string,
    user: string,
    content: string,
    title: string,
    upvotes: number,
    downvotes: number,
    avatarPath: string,
}