const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-name').value.trim();
  const content = document.querySelector('#blog-content').value.trim();


  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

const ButtonHandler = async (event) => {

  //delete
  if (event.target.hasAttribute('data-id') && event.target.id === 'delete') {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }

  //edit
  else if (event.target.hasAttribute('data-id') && event.target.id === 'edit') {


  }


};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', ButtonHandler);
