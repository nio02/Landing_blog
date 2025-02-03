const navigation = document.querySelector('.navigation')
const scrollableFilter = document.querySelector('.scroll-menu')

//Scrolling topic



//Pagination click events

navigation.addEventListener('click', (event) => {const selectedPage = event.target.closest('.page, .next, .prev');
    if (!selectedPage) return;

    event.preventDefault();

    if (selectedPage.classList.contains('page')){
        updateSelectedPage(selectedPage);
    } else if (selectedPage.classList.contains('prev')){
        navigatePage('prev');
    } else if (selectedPage.classList.contains('next')){
        navigatePage('next');
    }
});

//Update selected/active page

function updateSelectedPage(selectedPage) {
    navigation.querySelectorAll('.page').forEach(link => link.classList.remove('active'));
    selectedPage.classList.add('active');
}

//Previous and Next buttons

function navigatePage(direction) {
    const activePage = navigation.querySelector('.page.active');
    const siblingPage = direction === 'prev' ? activePage.previousElementSibling : activePage.nextElementSibling;

    if (siblingPage && siblingPage.classList.contains('page')) {
        updateSelectedPage(siblingPage);
    }
}