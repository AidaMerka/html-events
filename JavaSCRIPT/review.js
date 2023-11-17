const reviewForm = document.querySelector('#review-form');
const reviewList = document.querySelector('#review-list');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = reviewForm.querySelector('#name').value;
    const email = reviewForm.querySelector('#email').value;
    const review = reviewForm.querySelector('#review').value;

    const reviewItem = document.createElement('li');
    reviewItem.classList.add('review');

    const reviewHeader = document.createElement('h3');
    reviewHeader.textContent = name;

    const reviewEmail = document.createElement('p');
    reviewEmail.textContent = email;

    const reviewBody = document.createElement('p');
    reviewBody.textContent = review;

    reviewItem.appendChild(reviewHeader);
    reviewItem.appendChild(reviewEmail);
    reviewItem.appendChild(reviewBody);

    reviewList.appendChild(reviewItem);

    reviewForm.reset();
});

const initialReviews = [
    {
        name: "Aida Merka",
        email: "aidamerka@gmail.com",
        review: "Great experience with this event organizing business!"
    },
    {
        name: "Reziona Kasa",
        email: "rezionakasa@gmail.com",
        review: "Highly recommend this business for any event planning needs."
    },
    {
        name: "Isabela Arranjaku",
        email: "isabelaarranjaku@gmail.com",
        review: "Highly recommend this business for any event planning needs."
    },
    {
        name: "Ramaldi Horanlli",
        email: "Ramaldihoranlli@gmail.com",
        review: "Highly recommend this business for any event planning needs."
    }
];

initialReviews.forEach((item) => {
    const reviewItem = document.createElement('li');
    reviewItem.classList.add('review');

    const reviewHeader = document.createElement('h3');
    reviewHeader.textContent = item.name;

    const reviewEmail = document.createElement('p');
    reviewEmail.textContent = item.email;

    const reviewBody = document.createElement('p');
    reviewBody.textContent = item.review;

    reviewItem.appendChild(reviewHeader);
    reviewItem.appendChild(reviewEmail);
    reviewItem.appendChild(reviewBody);

    reviewList.appendChild(reviewItem);
});
