export const projects = [
  {
    title: "SpecsCart UI",
    description:
      "What a frontend developer doesn't build up a similar application? This app UI Application is make on HTML/CSS and tailwind css with mobile responsiveness",
    image: "images/jpgs/hex-color-1.jpg",
    imageWebp: "images/projects/spectcart/home.png",
    images: [
      {
        original: "images/projects/spectcart/hero.png",
        loading: "lazy",
        originalAlt: "hex-color-1",
      },
      {
        original: "images/projects/spectcart/product.png",
        loading: "lazy",
        originalAlt: "hex-color-2",
      },
    ],
    tags: ["JavaScript", "CSS", "HTML", "React", "Tailwind CSS"],
    id: 1,
    order: 100,
    mainType: "react",
    github:"https://github.com/parvej-khan-dev/specscart",
    live_link:"https://specscart.vercel.app/"
  },
  {
    title: "Train Reservation System",
    description:
      "The train seat reservation system allows users to reserve seats in a train coach, prioritizing booking seats in one row. It supports multiple ticket bookings and provides a visual representation of seat availability in the coach.",
    image: "images/jpgs/sleet.jpg",
    imageWebp: "images/projects/backend/home.png",
    images: [
      {
        original: "images/projects/tbs/home.png",
        loading: "lazy",
        originalAlt: "Home page",
      },
      {
        original: "images/projects/tbs/book_ticket.png",
        loading: "lazy",
        originalAlt: "Booking page",
      },
      {
        original: "images/projects/tbs/ticket_details.png",
        loading: "lazy",
        originalAlt: "ticket details page",
      },
    ],
    tags: [
      "React",
      "React Router",
      "JavaScript",
      "Semantic UI",
      "Nodejs",
      "Express JS",
      "MongoDB",
    ],
    id: 6,
    order: 98,
    mainType: "Nodejs",
    github: "https://github.com/parvej-khan-dev/bmc",
    live_link: "bmc-nine.vercel.app",
  },
  {
    title: "Course Referral Web App UI",
    description:
      "When I have commenced to learn React JS, I built this nice and cool React application. here user can check his referral code and referral amount  and available course refer for referral",
    image: "images/projects/tutedude/home.png",
    imageWebp: "images/projects/tutedude/home.png",
    images: [
      {
        original: "images/projects/tutedude/course.png",
        loading: "lazy",
        originalAlt: "React-todo-and-blog-home-1",
      },
    ],
    tags: [
      "React",
      "React hooks",
      "React router",
      "Tailwind CSS",
      "localstorage",
      "Breadcrumbs",
      "Sliders",
    ],
    id: 4,
    order: 94,
    mainType: "react",
    github: "https://github.com/parvej-khan-dev/tutdude",
    live_link: "https://tutdude.vercel.app/",
  },
  {
    title: "Blood Buddy Web App",
    description:
      "The blood donation app is a web application developed using React and Tailwind CSS for the frontend, and Express.js and MongoDB for the backend. The app aims to facilitate the process of connecting blood donors with individuals in need of blood in their nearby locality.",
    image: "images/jpgs/ReactCryptocurrencyApp.jpg",
    imageWebp: "images/projects/blood_buddy/home.png",
    images: [
      {
        original: "images/projects/blood_buddy/camp.png",
        loading: "lazy",
        originalAlt: "blood donation camp",
      },
      {
        original: "images/projects/blood_buddy/register.png",
        loading: "lazy",
        originalAlt: "register",
      },
      {
        original: "images/projects/blood_buddy/faq.png",
        loading: "lazy",
        originalAlt: "faq",
      },
      {
        original: "images/projects/blood_buddy/search.png",
        loading: "lazy",
        originalAlt: "search",
      },
    ],
    tags: [
      "React",
      "React Hooks",
      "Tailwind css",
      "Axios",
      "Nodejs ",
      "express js",
      "mongo db",
    ],
    id: 7,
    order: 93,
    mainType: "react",
    github: "https://github.com/parvej-khan-dev/Blood_Buddy",
    live_link: "https://blood-budy.vercel.app/",
  },
  {
    title: "Appointment Management Server",
    description:
      "This project is a simple Express application that integrates with Firebase for user authentication and implements CRUD operations for appointments. Only authenticated users with a JWT token can access the appointment endpoints.",
    image: "images/projects/backend/home.png",
    imageWebp: "images/projects/backend/home.png",
    // images: [
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryHomeDark.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary Home Dark",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryHomeLight.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary Home Light",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryHomeSignUpErrors.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary Home Sign uo Errors",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryViewLight.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary View Light",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryViewAddNewBook.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary View Add New Book",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryViewEditBook.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary View Edit Book",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryViewDeleteBook.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary View Delete Book",
    //   },
    //   {
    //     original: "images/projects/Rlibrary/ReactLibraryViewMobile.jpg",
    //     loading: "lazy",
    //     originalAlt: "RLibrary View Mobile",
    //   },
    // ],
    tags: [
      "Nodejs",
      "express js",
      "Authorization",
      "JWT",
      "Bcrypt",
      "Firebase/Firestore",
    ],
    id: 9,
    order: 91,
    mainType: "Nodejs",
    github:"https://github.com/parvej-khan-dev/firebase_authentication"
  },
  {
    title: "Event Management Server",
    description:
      "It provides CRUD (Create, Read, Update, Delete) operations for events, along with features like event categorization, searching, filtering, pagination, and user authentication. The application allows users to register, login, and book events based on their roles (editor or user). Data validation is implemented using Express Validators, and password hashing is used for enhanced security.",
    image: "images/jpgs/React-test Chat Room Intro dark.jpg",
    imageWebp: "images/projects/ems/home.png",
    images: [
      {
        original: "images/projects/ems/create_category.png",
        loading: "lazy",
        originalAlt: "create category",
      },
      {
        original: "images/projects/ems/create_events.png",
        loading: "lazy",
        originalAlt: "create_events",
      },
      {
        original: "images/projects/ems/event_page.png",
        loading: "lazy",
        originalAlt: "events page",
      },
      {
        original: "images/projects/ems/filter.png",
        loading: "lazy",
        originalAlt: "filter and pagination",
      },
    ],
    tags: ["React", "Redux", "Semantic UI", "Nodejs", "Expressjs", "MongoDB"],
    id: 12,
    order: 88,
    mainType: "Nodejs",
    github:"https://github.com/exponentsoftware/event-managment-server"
  },
];

export const TimeLineData = [
  {
    year: 2020,
    text: "Start Freelancing on wordpress website development.",
  },
  {
    year: 2021,
    text: "Starting my journey as a wordpress developer and SEO executive.",
  },
  { year: 2022, text: "Upskilling in Product Engineering From SOAL." },
  { year: 2022, text: "Starting my journey as a Backend Developer " },
];
