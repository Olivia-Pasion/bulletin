const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export function renderPostIt(post) {
    const div = document.createElement('div');
    div.classList.add('post-card');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p1 = document.createElement('p');
    p1.textContent = post.description;

    const p2 = document.createElement('p');
    p2.textContent = post.contact;
    p2.classList.add('contact');

    const p3 = document.createElement('p');
    const createdDate = new Date(post.created_at);
    p3.textContent = createdDate;
    p3.classList.add('create-time');
    

    div.append(h3, p1, p2, p3);

    return div;
}

export async function getPostItList() {
    const response = await client
        .from('posts')
        .select(`
            title,
            description,
            contact,
            created_at
        `)
        .order('created_at', { ascending: false });

    return response.data;
}