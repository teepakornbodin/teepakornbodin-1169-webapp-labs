import { GitHubAvatar, GitHubRepoURL }  from "./GitHubComponents";

export function GitHubInfo({userInfo}) {
    return <div className="GitHubInfo">
        <h1>{userInfo.alt}</h1>
        <GitHubAvatar img_url={userInfo.imgURL} alt={userInfo.alt} />
        <GitHubRepoURL url={userInfo.url} />
    </div>;
}