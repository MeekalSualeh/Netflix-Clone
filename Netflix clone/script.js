// movie thumbnail images location
const movieUrl1 = [
    'Assets/images/movie1-1.webp',
    'Assets/images/movie2-1.webp',
    'Assets/images/movie3-1.webp',
    'Assets/images/movie4-1.webp',
    'Assets/images/movie5-1.webp',
    'Assets/images/movie6-1.webp',
    'Assets/images/movie7-1.webp',
    'Assets/images/movie8-1.webp',
    'Assets/images/movie9-1.webp',
    'Assets/images/movie10-1.webp'
];

//movies odal popup logo and background, 2 - logo, 3 - background
const modalMovies = {
    movie1: {
        logo: 'Assets/images/movie1-2.webp',
        background: 'Assets/images/movie1-3.webp',
        genres: ['2025', '16+', 'Movie', 'Action', 'Thrillers'],
        content: 'In this high-octane battle of wits and wills, ingenious con artist Rehan devises a diamond heist while trying to outsmart Rajan, his sadistic adversary.',
        blurImage: 'Assets/images/movie1-1.webp',
    },

    movie2: {
        logo: 'Assets/images/movie2-2.webp',
        background: 'Assets/images/movie2-3.webp',
        genres: ['2025', '18+', 'Show', 'Thrillers', 'Dramas'],
        content: 'A dangerously charming, obsessive man goes to extreme measures to insert himself into the lives of women who fascinate him.',
        blurImage: 'Assets/images/movie2-1.webp',
    },

    movie3: {
        logo: 'Assets/images/movie3-2.webp',
        background: 'Assets/images/movie3-3.webp',
        genres: ['2025', '16+', 'Movie', 'Thrillers', 'Drama'],
        content: 'Working on a complicated case, a fierce young police officer goes rogue to dismantle a lethal web of corruption and deceit — one epic battle at a time.',
        blurImage: 'Assets/images/movie3-1.webp',
    },

    movie4: {
        logo: 'Assets/images/movie4-2.webp',
        background: 'Assets/images/movie4-3.webp',
        genres: ['2025', '18+', 'Movie', 'Acion', 'Thrillers'],
        content: "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        blurImage: 'Assets/images/movie4-1.webp',
    },

    movie5: {
        logo: 'Assets/images/movie5-2.webp',
        background: 'Assets/images/movie5-3.webp',
        genres: ['2025', '18+', 'Show', 'Action', 'Dramas'],
        content: "With the aid of unexpected friends, a gifted but introverted student confronts bullies and violent foes — unaware of how dangerous his world will become.",
        blurImage: 'Assets/images/movie5-1.webp',
    },

    movie6: {
        logo: 'Assets/images/movie6-2.webp',
        background: 'Assets/images/movie6-3.webp',
        genres: ['2025', '16+', 'Movie', 'Action', 'Dramas'],
        content: "As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new.",
        blurImage: 'Assets/images/movie6-1.webp',
    },

    movie7: {
        logo: 'Assets/images/movie7-2.webp',
        background: 'Assets/images/movie7-3.webp',
        genres: ['2025', '13+', 'Show', 'Thrillers'],
        content: "A team of dedicated men and women in the Crime Investigation Department will risk everything to solve Mumbai's toughest, most complicated crimes.",
        blurImage: 'Assets/images/movie7-1.webp',
    },

    movie8: {
        logo: 'Assets/images/movie8-2.webp',
        background: 'Assets/images/movie8-3.webp',
        genres: ['2025', '13+', 'Show', 'Romance', 'Dramas'],
        content: "In Jeju, a spirited girl and a steadfast boy's island story blossoms into a lifelong tale of setbacks and triumphs — proving love endures across time.",
        blurImage: 'Assets/images/movie8-1.webp',
    },

    movie9: {
        logo: 'Assets/images/movie9-2.webp',
        background: 'Assets/images/movie9-3.webp',
        genres: ['2025', '16+', 'show', 'Thrillers', 'Dramas'],
        content: "When a 13-year-old is accused of the murder of a classmate, his family, therapist and the detective in charge are all left asking: what really happened?",
        blurImage: 'Assets/images/movie9-1.webp',
    },

    movie10: {
        logo: 'Assets/images/movie10-2.webp',
        background: 'Assets/images/movie10-3.webp',
        genres: ['2024', '18+', 'Show', 'Thrillers', 'Dramas'],
        content: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        blurImage: 'Assets/images/movie10-1.webp',
    }
}

const movieSlider = document.getElementById('movieSlider');
const leftButtonContainer = document.getElementById('leftButtonContainer');
const rightButtonContainer = document.getElementById('rightButtonContainer');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// for dynamically placing thumnails in movie carousel slider
const movies = movieSlider.querySelectorAll(".movie");
let counter = 0;
movies.forEach(movieNo => {
    movieNo.style.backgroundImage = `url('${movieUrl1[counter++]}')`;
});

// to get amount of scroll to do on left or right click
function getScrollAmount() {
    const movie0 = movies[0];
    const movieStyle = window.getComputedStyle(movie0);
    const movieLength = movie0.offsetWidth + parseInt(movieStyle.marginLeft, 10);
    const noOfMovies = Math.floor(movieSlider.clientWidth / movieLength);
    return movieLength * noOfMovies - 25 * 2;
}

function updateSliderButtons() {
    const maxScroll = movieSlider.scrollWidth - movieSlider.clientWidth;
    const scrollLeft = movieSlider.scrollLeft;

    leftButtonContainer.classList.toggle('left-button-move', scrollLeft <= 0);
    rightButtonContainer.classList.toggle('right-button-move', scrollLeft >= maxScroll);

}

leftButton.addEventListener('click', () => {
    movieSlider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
    movieSlider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});


movieSlider.addEventListener('scroll', updateSliderButtons); //manually or programmatically
window.addEventListener('load', updateSliderButtons);
window.addEventListener('resize', updateSliderButtons);
//scroll resize leftbuttonclick rightbuttonclick load

// modal popup
const modalPopup = document.getElementById('modalPopup');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseButton = document.getElementById('modalCloseButton')

//popping modal
function openModal() {
    modalPopup.scrollTop = 0;

    modalOverlay.style.visibility = 'visible';
    modalOverlay.classList.add('modal-overlay-show');
    modalPopup.classList.add('modal-popup-show');
}

function closeModal() {
    modalPopup.classList.remove('modal-popup-show');

    setTimeout(() => {
        modalOverlay.classList.remove('modal-overlay-show');
        modalOverlay.addEventListener('transitionend', modalOverlay.style.visibility = 'hidden');
        // it hides visibility after transition of modal overlay ends
    }, 100);
}

// adding modal information dyynamically
movies.forEach(movie => {
    movie.addEventListener('click', () => {

        //calling everything we need from HTML
        const movieNo = movie.dataset.movie;
        const movieData = modalMovies[movieNo];
        if(!movieData) return;

        const modalMovieBackground = document.getElementById('modalMovieBackground');
        const modalMovieLogo = document.getElementById('modalMovieLogo');
        const modalMovieParagraph = document.getElementById('paragraph');
        const modalMovieGenreList = document.getElementById('genre-list');

        //putting data on modal-popup according to movie
        modalMovieBackground.style.backgroundImage = `url('${movieData.blurImage}')`;
        modalMovieBackground.style.filter = `blur(130px)`;
        modalMovieLogo.src = movieData.logo;
        modalMovieParagraph.textContent = movieData.content;

        modalMovieGenreList.innerHTML = '';
        movieData.genres.forEach(genre =>{
            const li = document.createElement('li');
            li.textContent = genre;
            modalMovieGenreList.appendChild(li);
        });
        
        openModal();
        
        setTimeout(()=>{
            modalMovieBackground.style.filter = `blur(0px)`;
            modalMovieBackground.style.backgroundImage = `url('${movieData.background}')`;
        }, 500);
    });
});

// closing on clicking cross button or outside modal
modalCloseButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (!modalPopup.contains(e.target)) {
        closeModal();
    }
});


// faq buttons
// question.rotate --- answer.answer-show

const questions = document.querySelectorAll('.question');
questions.forEach(question => {

    question.addEventListener('click', () => {

        questions.forEach(compQuestion => {

            if (compQuestion !== question) {
                const compAnswer = compQuestion.nextElementSibling;
                compAnswer.style.height = '0px';
                compAnswer.classList.remove('answer-show');
                compQuestion.classList.remove('rotate');
            }
        });

        const answer = question.nextElementSibling;
        question.classList.toggle('rotate');
        answer.style.height = answer.matches('.answer-show') ? '0px' : answer.scrollHeight+ 50 + 'px';
        answer.classList.toggle('answer-show');
    });
});

const dropdown = document.getElementById('dropdown');
const dropdownMenu1 = document.getElementById('dropdown-menu1');

dropdown.addEventListener('click', () =>{
    dropdown.classList.toggle('dropdown-click');
    dropdownMenu1.classList.toggle('dropdown-menu-show');
});