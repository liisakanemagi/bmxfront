# BMX Estonia - Vali IT! Final Project (Frontend)

🔗 **Backend Repository:** [https://github.com/liisakanemagi/bmxback](https://github.com/liisakanemagi/bmxback)

This repository contains the frontend application for a BMX Estonia community page, built as an educational project for the Vali IT! 6-week full stack development course.

**Team:** Collaborative project by 2 developers.

## Project Status: Work in Progress

> **Note:** Please note that this project is currently under development as an educational practice project. Some features are still being implemented or refactored.

### What Works
* **Interactive Map (Leaflet):** Publicly accessible map of riding spots with filtering by tags, spot types, and counties. Markers are color-coded by type, and spot details are available via a list or by clicking map pins.
* **Add New Spots:** Logged-in users can submit new riding spots via a form, including image upload functionality. Coordinates can be picked directly by clicking on the map (auto-filling latitude/longitude fields).
* **User Authentication:** Login and Register functionality *(Note: Simplified for educational purposes, no encryption implemented)*.
* **Favorites System:** Logged-in users can add locations to their personal favorites list or remove them by toggling the heart icon.

### Known Issues (Currently fixing)

* **Missing Seed Images:** The initial database script does not yet contain the image data for the pre-filled locations (these assets are currently local-only). As a result, the frontend falls back to a default placeholder image for these spots. *Note: The upload functionality for new user-submitted spots works.*
* **UI Inconsistency:** Location pins in the location list are displayed in gray; they need to be updated to match the color-coding logic of the map markers.
* **Styling:** General CSS refactoring is needed for better visual polish.

### Future Roadmap & To-Do
* **Full CRUD:** Implement **Edit** and **Delete** functionality for user-submitted locations.
* **Detailed View:** Develop a dedicated details page for each location to display extended information (currently viewing summary on map).
* **Admin Moderation:** Create a workflow where admins review and approve new spots before they are published.
* **Advanced Tagging:** Allow users to input custom tags (currently restricted to a predefined dropdown).
* **Multi-Image Support:** Enable uploading and viewing a gallery of images per location (currently limited to a single image).
* **Events Gallery:** A planned feature to showcase photos from community events.

## Tech Stack
**Frontend:**
* **Vue.js** 
* **JavaScript** 
* **HTML & CSS** 
* **Leaflet.js** - Interactive map integration

**Backend:**
* **Java** 
* **Spring Boot** 
* **RESTful API**
  
**Database:**
* **SQL** (PostgreSQL)
* 
## Project setup 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
