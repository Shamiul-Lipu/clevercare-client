"# b7a11-toy-marketplace-client-side-Shamiul-Lipu" 

CleverCare live link :   https://clevercare-8929f.web.app/

# CleverCare

A simple React app built with React & React Router Dom and authentication integrated with firebase, used databas as MongoDB, server side hosted in vercel. 

**CleverCare is a educational and learning toy seller website offers a wide range of toys that inspire learning and development in children. Additionally, we provide parenting resources and specialized courses tailored for children aged 4-8 years old, creating a comprehensive platform for educational growth.**

* The Home component setting the page title to "Home" using the useTitle hook and a navigation bar, main content rendered through the React Router's Outlet component, and a footer component.  It renders a banner, gallery, category tabs, and an extra section with courses and engagement features. The component is exported for use in the application.
* The NavBar component includes links and navigation styling based on the current route. The user display section shows the user's profile picture and name. The mobile menu button toggles the display of the navigation menu on smaller screens. The Main component renders the header, main content, and footer sections. 
* The Banner component renders a visually appealing banner with a message, description, and a button to get started. It also includes an animated book illustration.
* The Gallery component fetches toy data from an API and renders a visual showcase of available products using the GalleryCard component. The useEffect hook is used to fetch toy data from the specified API endpoint.The fetched toy data is stored in the "toys" state using the useState hook.The component renders a heading and a grid layout for displaying the toys. The toys array is mapped to create GalleryCard components for each toy in the gallery.
* The CategoryTab component creates a tabbed interface for browsing toy products by category using the Tab and TabPanel components from react-tabs. Each tab represents a specific toy category. The toyCategories array contains the names of different toy categories. The component renders a heading and a tabbed interface using the Tabs, TabList, and TabPanel components. Each toy category is mapped to create a Tab component for each category in the TabList. For each category, a TabPanel is created with the Category component to display the products within that category. Category component, which displays toy products for a specific category. It fetches data based on the provided category name and renders the product details. If a user is not logged in, a toast message is shown when attempting to view product details.
* The MyToys component sets the page title to "My Toys" using the useTitle hook. It defines state variables for storing the user's toy data (toys) and triggering a reload of data (reload).The component fetches the user's toy data from the server based on the user's email and updates the toys state.It provides a handleDelete function that displays a confirmation dialog using the swal library and deletes the toy when confirmed. Upon successful deletion, it shows a success toast message, a success swal alert, and triggers a reload of the data. The component renders a section with a heading, and a table displaying the toy data, with options to delete each toy using the UsersToy component. The UsersToy component is rendered for each toy in the toys state, passing the toy data and the handleDelete function as props.
* The UsersToy component represents a row in the MyToys table, displaying toy information and providing buttons for updating and deleting the toy. It receives props for toy data, index, and a delete function. The component renders a table row with columns displaying the toy details, including buttons for updating and deleting the toy.

**Exta section**
* The component sets up state variables using the useState hook. These variables include toys, isOpen, modalData, and quote to manage the component's state.There are two functions defined in the component: openModal and closeModal. openModal updates the modalData state and sets isOpen to true, while closeModal sets isOpen to false.The component fetches data from an API endpoint using the fetch function inside the useEffect hook. The fetched data is stored in the toys state variable.
* The component sets up a state variable courses using the useState hook to store the fetched course data. Two useEffect hooks are used: one to fetch data from an API endpoint and set the courses state, and another to initialize the AOS (Animate On Scroll) library for animations. The JSX structure consists of two main sections: "Explore our Parenting and Child Development Courses" and "Nurturing Future Stars, Future-Focused Courses for Children Ages 4-8". Each section contains a grid layout displaying course cards. The course data is mapped over and rendered dynamically within the course cards, including the course name, instructor, ratings, reviews, price, description, and an "Enroll Now" button. The course cards have fade-in animations applied using the AOS library.




## CleverCare Live Link
**Hosted in Firebase ->** [https://clevercare-8929f.web.app/](https://clevercare-8929f.web.app/)


**server hosted in vercel ->** [https://server-side-rho-one.vercel.app/](https://server-side-rho-one.vercel.app/)

## [CleverCare Live Link](https://clevercare-8929f.web.app/)

Github Repo -> [repo](https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Shamiul-Lipu)
