const SUPABASE_URL = 'https://dgzqjqnppkbmiwsbkzsq.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnenFqcW5wcGtibWl3c2JrenNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MDk0OTcsImV4cCI6MTk4MDQ4NTQ5N30.p1R8FJvgaE--c9d7or69n61XF_v2VJWxTbOPaK0Y_gs';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function createPost(post) {
    return await client.from('bulletin').insert(post);
}

export async function uploadImage(bucketName, imagePath, imageFile) {
    const bucket = client.storage.from(bucketName);
    console.log(imageFile);
    console.log(bucketName);
    console.log(imagePath);
    const response = await bucket.upload(imagePath, imageFile, {
        cacheControl: '3600',

        upsert: true,
    });
    if (response.error) {
        // eslint-disable-next-line no-console
        //console.log(response.error);
        return null;
    }

    const url = `${SUPABASE_URL}/storage/v1/object/public/${response.data.Key}`;

    return url;
}
