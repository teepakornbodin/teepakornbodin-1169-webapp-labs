import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css";

export default function GitHubInfo() {
  const userInfo = {
    url: "https://github.com/teepakornbodin",
    img_url: "https://avatars.githubusercontent.com/u/142275641?s=400&u=cb6db9b42d85a0cf5e4bb7a91bb89004f56c85ee&v=4",
    alt: "Teepakornbodin Intasoy",
  };
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar img_url={userInfo.img_url}/>
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}