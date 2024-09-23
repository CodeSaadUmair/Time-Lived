# ⏳ Time Lived

**Time Lived** is a web-based application that calculates and displays the time you have spent on Earth since your birth date. It offers a sleek and interactive interface to input your Date of Birth and presents a dynamic, real-time countdown of your life’s timeline.

## 🌟 Overview

The **Time Lived** application allows users to input their date of birth and visually track how long they have been alive in real-time. The timer updates every second and uses `localStorage` to remember the user’s input even after refreshing the page.

## Features

- 📅 **Date Input**: Users can input their Date of Birth through an interactive date picker.
- ⏲️ **Live Timer**: Displays the time passed in years, months, days, hours, minutes, and seconds since the user’s birth.
- 📱 **Responsive Design**: The app adjusts well across different devices and screen sizes.
- 🖥️ **Full Screen Mode**: Users can toggle between full-screen mode for an immersive experience.
- 💾 **Persistent Storage**: Saves the entered date of birth in `localStorage` to retain data across page reloads.
- 🎨 **Interactive Elements**: Animated hover states and transitions, with an interactive settings icon.



## 🚀 Live Demo

Check out the live version here:  
[Time Lived - Live Demo](https://CodeSaadUmair.github.io/Time-Lived/)
## 🛠️ Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- A modern web browser.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeSaadUmair/Time-Lived.git
   ```

2. Navigate to the project directory:
    ```bash
    cd Time-Lived
    ```

3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```
    
That’s it! The application should be running on your local machine.
## 📂 Folder Structure

```bash
/time-lived
│
├── index.html         # Main HTML file
├── style.css          # CSS file for styling
├── app.js             # JavaScript file for logic
├── background.jpg     # Background image
├── setting.png        # Icon for settings
└── README.md          # Project documentation
```
## 🧠 How It Works

- Date Input: Users are prompted to enter their date of birth using a date picker. This can be accessed by clicking the settings icon.

- Local Storage: The entered date is saved in `localStorage`, allowing the app to remember the user’s input even if they close the tab or refresh the page.

- Live Time Calculation: The app calculates the time difference between the current time and the entered date of birth, updating every second.

- Full Screen: Users can enter or exit full-screen mode by clicking the fullscreen button, giving an immersive display of the timer.
## 🛠️ Technologies Used

- **HTML**: The structure and content of the page.

- **CSS**: For the visual styling of the app.

- **JavaScript**: Handles logic, DOM manipulation, and event handling.
## 🚧 Future Improvements


- 🎉 Milestone Notifications: Notify users when they reach important milestones (birthdays, etc.).

- 🖼️ Customization: Allow users to change the background or styling of the app.

- 🌐 Timezone Support: Add support for different timezones.

- 🌗 Dark Mode: Implement light/dark mode toggling for better accessibility.

- 🎥 Animated Transitions: Add more dynamic animations when time units update.