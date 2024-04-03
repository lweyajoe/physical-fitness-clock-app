# Building this Simple Fitness Clock App step by step:

## State Management:
1. The app uses React and functional components.
2. It defines several state variables using the ```useState``` hook:\
```breakLength```: Represents the duration of the break in minutes (initialized to 5).\
```sessionLength```: Represents the duration of the workout session in minutes (initialized to 25).\
```timeLeft```: Represents the remaining time in seconds for the current session or break.\
```timerLabel```: Indicates whether the timer is in “Session” or “Break” mode.\
```isRunning```: Tracks whether the timer is currently running.\
```audioRef```: A reference to an HTML audio element for playing a sound when the timer reaches zero.\

## Timer Logic:
The ```useEffect``` hook is used to manage the timer logic.\
When the timer is running (```isRunning``` is ```true```), an interval is set up to decrement the ```timeLeft``` every second.\
If ```timeLeft``` reaches zero, the audio beep is played, and the timer switches between “Session” and “Break” modes.\
The interval is cleared when the component unmounts or when the timer is paused.\

## Button Handlers:
There are several button handlers:


```handleBreakDecrement``` and ```handleBreakIncrement```: Adjust the break length (within bounds) based on the current mode.\
```handleSessionDecrement``` and ```handleSessionIncrement```: Adjust the session length (within bounds) based on the current mode.\
```handleReset```: Resets the timer and other state variables.\
```onClick={() => setIsRunning(!isRunning)}```: Toggles the timer between running and paused states.\

## Time Formatting:
The ```formatTime``` function converts the remaining ```timeLeft``` (in seconds) into a formatted string (MM:SS).

## HTML Structure:
The app renders a simple UI with various elements:


1. Break length controls (decrement, length display, increment).
2. Session length controls (decrement, length display, increment).
3. Timer label (either “Session” or “Break”).
4. Display of the remaining time.
5. Start/Pause button.
6. Reset button.
7. An audio element for playing the beep sound.

## Audio File:
The app uses an audio file (```beep-car-horn.mp3```) for the timer alert sound.\
The audio element is hidden from the UI but referenced using ```audioRef```.

Overall, this app provides a simple fitness timer with adjustable session and break lengths. When the timer reaches zero, it switches between session and break modes, playing an alert sound. Users can start, pause, reset, and adjust the timer lengths as needed. 🏋️‍♀️⏰🔊


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
