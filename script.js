// Sample course data
const courses = {
    technology: [
        { title: 'Web Development Bootcamp', instructor: 'John Doe', duration: '12 weeks' },
        { title: 'Python Programming', instructor: 'Jane Smith', duration: '8 weeks' },
        { title: 'Data Science Fundamentals', instructor: 'Mike Johnson', duration: '10 weeks' }
    ],
    business: [
        { title: 'Digital Marketing', instructor: 'Sarah Wilson', duration: '6 weeks' },
        { title: 'Business Management', instructor: 'David Brown', duration: '8 weeks' },
        { title: 'Financial Analysis', instructor: 'Lisa Chen', duration: '10 weeks' }
    ],
    design: [
        { title: 'UI/UX Design', instructor: 'Alex Turner', duration: '8 weeks' },
        { title: 'Graphic Design', instructor: 'Emma Davis', duration: '6 weeks' },
        { title: 'Digital Art', instructor: 'Chris Martin', duration: '10 weeks' }
    ],
    languages: [
        { title: 'English Mastery', instructor: 'Maria Garcia', duration: '12 weeks' },
        { title: 'Spanish for Beginners', instructor: 'Carlos Rodriguez', duration: '8 weeks' },
        { title: 'French Conversation', instructor: 'Sophie Dubois', duration: '10 weeks' }
    ]
};

// Function to create course cards
function createCourseCard(course) {
    return `
        <div class="course-card">
            <h3>${course.title}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p>Duration: ${course.duration}</p>
            <button class="enroll-btn">Enroll Now</button>
        </div>
    `;
}

// Function to display courses
function displayCourses() {
    const coursesContainer = document.querySelector('.courses-container');
    if (!coursesContainer) return;

    // Check if we're on a category page
    const categoryId = coursesContainer.id;
    if (categoryId) {
        const category = categoryId.split('-')[0]; // e.g., "technology-courses" -> "technology"
        if (courses[category]) {
            coursesContainer.innerHTML = courses[category].map(course => createCourseCard(course)).join('');
            return;
        }
    }

    // If on main page, show all courses
    let allCourses = [];
    Object.values(courses).forEach(categoryCourses => {
        allCourses = allCourses.concat(categoryCourses);
    });
    coursesContainer.innerHTML = allCourses.map(course => createCourseCard(course)).join('');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayCourses();

    // Add hover effect to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click event to enroll buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('enroll-btn')) {
            alert('Thank you for your interest! Enrollment system coming soon.');
        }
    });
}); 