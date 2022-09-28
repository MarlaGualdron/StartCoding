/*Construir la pagina para sacar el primer repositorio
insertar el avatar del usuario y debajo de repos listar
los 5 primeros del usuario*/

// Primero obtendré los repos

const baseUrl = "https://api.github.com";

const listAllRepos = async () => {
  const listRepos = await fetch(`${baseUrl}/repositories`);
  const parseResonse = await listRepos.json();
  return parseResonse;
};

const repoByOwner = async () => {
  const reposlist = await listAllRepos();
  const firstOwnerLogin = await reposlist[0].owner.login;
  return firstOwnerLogin;
};

const avatarUrl = async () => {
  const reposlist = await listAllRepos();
  const firstOwnerAvatar = await reposlist[0].owner.avatar_url;
  return firstOwnerAvatar;
};

const repoList = async () => {};

const userName = document.querySelector(".username");

const userNamechamge = async () => {
  userName.textContent = await repoByOwner();
};

userNamechamge();

const userAvatar = document.querySelector("#avatar");

const userAvatarChange = async () => {
  userAvatar.src = await avatarUrl();
};

userAvatarChange();

const listRepos = async () => {
  const userRepos = await fetch(
    `${baseUrl}/users/${await repoByOwner()}/repos`
  );
  const response = await userRepos.json();
  const resnponserepos = await response.slice(0, 5);

  resnponserepos.forEach((repo) => {
    const repoNode = document.createElement("a");
    const listNode = document.querySelector("#repos-list");
    repoNode.textContent = repo.html_url;
    repoNode.href = repo.html_url;
    listNode.appendChild(repoNode);
  });
};
listRepos();
