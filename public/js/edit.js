const editBlog = async (event) => {
    event.preventDefault();


    const title = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const id = event.target.value;

    if (title && content) {
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status(200)) {
            document.location.reload();
            alert('Updated blog!');
        } else if (response.status(304)) {
            alert('No changes made!');
        }
        else (alert('Failed to update blog'))
    }
};

document
    .querySelector('.update-blog')
    .addEventListener('click', editBlog);
