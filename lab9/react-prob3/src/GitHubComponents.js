export function GitHubAvatar({img_url, alt, size=50}) {
    return <div className="avatar-img" alt={alt} style={{ backgroundImage: `url(${img_url})`, width:size, height:size }}></div>;
}

export function GitHubRepoURL({url}) {
    return <a href={url} target="_blank" rel="noreferrer" className="repoURL">GitHub Repositary</a>;
}
