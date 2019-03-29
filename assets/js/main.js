{
    [...document.getElementsByClassName('reddit-user')].forEach((link) => {
        const username = link.dataset.user;
        link.href = `https://reddit.com/u/${username}`
        link.innerText = `/u/${username}`
        link.target = '_blank'
    })
}
