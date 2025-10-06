let avatar = "https://avatars.githubusercontent.com/u/142275641?s=400&u=cb6db9b42d85a0cf5e4bb7a91bb89004f56c85ee&v=4";
let repo_github = "https://github.com/teepakornbodin?tab=repositories";


export function GitHubAvatar() {
    return <div className="avatar-img" style={{ backgroundImage: `url(${avatar})`, width: "450px", height:"450px", backgroundSize:"cover", margin: "0 auto" }}></div>;
}

export function GitHubRepoURL() {
    return <a href={repo_github} target="_blank" rel="noreferrer" style={{ display: "block", marginTop: "20px", fontFamily: "sans-serif", fontWeight:"bold"}}>My GitHub Repositary</a>;
};

export default function GitHubInfo() {
    return <div style={{textAlign: "center"}}>
        <h1>My GitHub Information</h1>
        <GitHubAvatar />
        <GitHubRepoURL />
    </div>;
}