export function GitHubAvatar({img_url}) {
    return <div className="avatar-img" style={{ backgroundImage: `url(${img_url})` }}></div>;
}

export function GitHubRepoURL({url}) {
    return <a href={url} target="_blank" rel="noreferrer" className="repoURL">My GitHub Repositary</a>;
}
