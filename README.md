React Car Viewer : view live [here]()
This project is a React-based interactive application that showcases a 360° view of a car using sequential images. It includes car image sliders, interactive navigation features, and car details.

Features
Exterior and Interior Image Sliders:

Navigate through car images with a smooth carousel slider using react-slick.
Separate sliders for exterior and interior views of the car.
360° Interactive Car View:

A 360° view implemented with sequential car images at different angles.
Allows mouse-driven rotation for an immersive experience.
Responsive Design:

Optimized for various screen sizes, ensuring a smooth experience on desktops and mobile devices.
Project Structure
plaintext
Copy code
src/
├── components/

│   ├── Carousel.js        # Handles car image sliders (exterior and interior views)

│   ├── CarOverview.js     # Displays car details and integrates the 360° view functionality

├── App.js                 # Main application component

├── App.css                # Global styles for the app

├── index.js               # Entry point of the React app

public/
├── images/
│   ├── exterior/          # Contains sequential images for the 360° view

│   └── interior/          # Images used for sliders

Setup and Installation

Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)
npm or Yarn

Steps :

Clone the repository:
git clone <repository_url>
cd <repository_name>

Install dependencies:
npm install

Start the development server:
npm start

Open the app in your browser at http://localhost:3000.
