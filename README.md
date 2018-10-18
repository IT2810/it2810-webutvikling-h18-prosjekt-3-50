# Documentation

## The application
ExerciseMotivator is an app for planning your training sessions. In it, you can create a session that you plan to do, where you add date, time, a title, exercises and contacts. Exercises consists of a name, number of sets, reps and kg (last is optional). By adding contacts, you will (in the future), be able to synchronize sessions with other people, so that they can both track that you have done them, and participate at the planned time.
 
In addition to planning a session, you can mark it as done (MISSING), and see statistic over how many sessions you have done (MISSING) and how much you have lifted in total (MISSING).

The app also tracks your step, and shows you if you have reached the goal you have sat, and the statistics regarding your steps.

In the existing prototype, contacts consists only of a hardcoded list of names.
 
## Imported packages

### Expo (PEDER?)
Expo apps are React Native apps which contain the Expo SDK. The SDK is a native-and-JS library which provides access to the device's system functionality (things like the camera, contacts, local storage, and other hardware). That means you don't need to use Xcode or Android Studio, or write any native code, and it also makes your pure-JS project very portable because it can run in any native environment containing the Expo SDK.
Expo also provides UI components to handle a variety of use-cases that almost all apps will cover but are not baked into React Native core, e.g. icons, blur views, and more.
Finally, the Expo SDK provides access to services which typically are a pain to manage but are required by almost every app. Most popular among these: Expo can manage your Assets for you, it can take care of Push Notifications for you, and it can build native binaries which are ready to deploy to the app store.


### Pedometer from expo
The pedometer used uses pedometer information from Google Fit (on Android) or from Motion and Fitness (on iOS). This means you will have to allow access to, and log in to, your google account to get the information needed on Android, but for iOS you just have to give access to the Motion and Fitness app itself.
    
### Native base
Native base provided cross-platform components, which required the need for us to add styling to components.  
 
### React naviation
For navigation, we used react navigation. This required us to create a RootStack component, where we configured the differnet screens and their name, the styling on the header and the initialRouteName. In the different components, we could then alter trough using navigationOptions what the header value should be.

By using the nagivation props that is added to all its screen components, and manually sendt to other components, we could use functions as navigate() and goBack() to navigate between screens.

### Moment
Moment was used in the utils.js to manipulate, validate and handle dates.

### React Moment
Rect Moment was used in some of the components that displayed dates and times. By using it, we could format the dates much simplar, and also integrate functions as showing how long before or after the specific date/time it was.  

### React Native Calendars
As a calendar, we used the React Native Calendars. By giving it a map with dates and configuration maps, we could show what dates had a planned session. The user could also click on a date to see it's session, and a long press on a date would navigate the user to the CreateSession screen with the date pressed set as the planned date.

## Special components used (MARIUS?)

### KeyboardAvoidingView

### TouchableOpacity

### SafeAreaView
    
###ActionSheet
Native-base’s ActionSheet gives you a modal view of customizable options. In this project it is used when selecting the target number of steps.
 

## Structure of the app

 

## Testing
For testing, we used enzyme and jest.

### Jest
Jest is a javascript unit test framework, created and used by Facebook. It is one of the most used unit tests frameworks for javascript.

The tests files was put in `__tests__` folders. One file was made for each component, and the tests was put in a `describe` block with a `beforeEach` that created the wrapper before each tests and mocked navigation etc. Tests for the same method was also put in `describe` block, with their respective tests in separate `it` blocks.

The focus, as appropriate since jest was used, was unit testing, where the separate functions in components, actions and reducers was tested. Some tests also tested if the correct function was called when pressing a button. To test this, we could have used `simulate()`, but because of problems with it, we ended up rather just calling the prop `onPress()`.

The props from the store was mocked, so that we only tested if a dispatch was called, and not if the state also was changed (which would be closer to integration tests).

It find's the tests in the `__tests__` folders, and runs them when the command `npm test` is given.   After running the tests, it gives a code covereage that shows how much of the code is tested, what lines are missing, and what tests passed. This can be configured.

We chose to have the test-folders in the same folder as the code being tested. This resulted in a test folder in root, one in ./actions, one in ./reducers and one in ./src/components.
 
Instead of calling all the tests each time we tested, we ran specific files by using the command `npm test -f <path to testfile>`.



By adding the comment `@jest-environement jsdom`, the tests was run in a fake DOM implementation.


By using Jest, one can mock functions with jest.fn(), and thereby check if the function was called, with what arguments and mock its response. This makes it easier to fake the test environement. 
Wit expect one can assert if two values are the same, and by using `find()` one can find elements in the page based on normal css syntax. This did not work as it should in our project, probably because of another rendering, and we therefore made our own find function based on testID-props.
 
 

### Enzyme
Enzyme is a testing utility created by the AirBnb team, and offers an API for handling React components during tests. One of the main functionalities used from it, was the `shallow`. Instead of rendering the whole component with all it's children, only the main component is rendered when using `shallow`.

When testing the snapshots, we used `dive()` and `toJson`, the last one from `enzyme-to-json`, to format the snapshot. DOUBLECHECK
 
### Android and iOS
During the development, the app was tested on both Android and iOS. This was done by running the application on Android trough Nox and directly on smartphones, and trough an iOS simulator and on Iphones.  

### Testing with Redux
To simplify the testing with redux, in addition to export the connected component as default, the class component was exported as well, and this was used in the tests. We then only needed to mock the props that was set in the connect function and used, for example the dispatch functions and the mapping from state to props.

## Redux
Redux consists of actions and reducers. Actions are called trough dispatches of the actions, and return the action, which is then used by the reducer in a switch. Based on the action type, the correct function is called which then creates a new state based on the old, alters it appropriatly, and then returns it.

Structured it with a subpart ‘sessions’, which has date, time, name, exercises and contacts.

The App component was wrapped in a Provider from react-redux, which had the store. This was so accessed in child components through using connect, where we mapped states from the store to props and dispatch functions from the store to props. By doing this, the props always had the newest state version, so that it implicitly listened for changes in the store.

## Requirements

-   Can add new sessions and exercises
    
-   Saving state trough redux (AsyncStorage) so state it saved on entity between runs
    
-   Showing steps
    
-   Used expo-cli and expo init to start
    
-   Working on both android and ios
    
-   Structured code, logical commenting and navigation
    
-   Used git
    
-   Decomposed assignment to issues
    
-   Tested with jest (and enzyme)
    
-


