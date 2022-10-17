export function renderPost(post) {
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.description;

    const img = document.createElement('img');
    img.src = post.image_url;

    const h6 = document.createElement('h6');
    h6.textContent = post.contact;

    li.append(h2, p, img, h6);

    return li;
}
