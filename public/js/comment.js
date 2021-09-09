const newComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#blog-comment').value.trim();

    // console.log("Comment:", content)
    const blog_id = idd;


    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                content,
                blog_id
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('.blog-comment')
    .addEventListener('click', newComment);
