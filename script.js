document.addEventListener("DOMContentLoaded", function() {
    // Example: Display an alert when a photo is clicked
    const photos = document.querySelectorAll('.gallery img');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            alert('You clicked on a photo!');
        });
    });

    // Load more newsletters when "View More" button is clicked
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    viewMoreBtn.addEventListener('click', function() {
        const newsletterList2022 = document.createElement('div');
        newsletterList2022.className = 'year-section';
        newsletterList2022.innerHTML = `
            <h3>2022</h3>
            <div class="newsletter-list">
                <div class="newsletter-card">
                    <div class="newsletter-content">
                        <h4>Newsletter Spring 2022</h4>
                        <p>Catch up on all the latest news and events from Spring 2022.</p>
                        <a href="newsletter5.pdf" target="_blank" class="btn">Read More</a>
                    </div>
                </div>
                <div class="newsletter-card">
                    <div class="newsletter-content">
                        <h4>Newsletter Fall 2022</h4>
                        <p>Catch up on all the latest news and events from Fall 2022.</p>
                        <a href="newsletter6.pdf" target="_blank" class="btn">Read More</a>
                    </div>
                </div>
            </div>
        `;

        const newsletterList2021 = document.createElement('div');
        newsletterList2021.className = 'year-section';
        newsletterList2021.innerHTML = `
            <h3>2021</h3>
            <div class="newsletter-list">
                <div class="newsletter-card">
                    <div class="newsletter-content">
                        <h4>Newsletter Spring 2021</h4>
                        <p>Catch up on all the latest news and events from Spring 2021.</p>
                        <a href="newsletter7.pdf" target="_blank" class="btn">Read More</a>
                    </div>
                </div>
                <div class="newsletter-card">
                    <div class="newsletter-content">
                        <h4>Newsletter Fall 2021</h4>
                        <p>Catch up on all the latest news and events from Fall 2021.</p>
                        <a href="newsletter8.pdf" target="_blank" class="btn">Read More</a>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('newsletters').appendChild(newsletterList2022);
        document.getElementById('newsletters').appendChild(newsletterList2021);

        viewMoreBtn.style.display = 'none'; // Hide the button after loading more newsletters
    });
});
