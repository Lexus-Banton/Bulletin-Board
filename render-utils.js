export function renderPost(post) {
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const desc = document.createElement('p');
    desc.textContent = post.description;

    const img = document.createElement('img');
    img.src = post.image_url;

    const p = document.createElement('p');
    p.textContent = post.contact;

    const span = document.createElement('span');
    span.textContent = getCategoryEmoji(post.category);

    li.append(h2, span, desc, img, p);

    return li;
}

function getCategoryEmoji(category) {
    if (category === 'Gaming') return '🎮';
    if (category === 'Anime') return '🌸';
    if (category === 'Clothes') return '👘';
    if (category === 'Figures') return '🧸';
    if (category === 'Misc.') return '🍥';
}
