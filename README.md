<h1>How to run app</h1>

1. Clone project.
```
git clone https://github.com/Goszila/task-management-app.git
```


2. Go to project folder.
```
cd task-management-app
```


3. Install package.
```
yarn install
```
or
```
npm install
```


4. Run project.
```
yarn start
```
or
```
npm run start
```

5. Press 'a' for Android and 'i' for IOS.

<mark>Recommend Node version >= 18</mark>

<h5>Remark: Before run project. You must have simulator or use app "EXPO GO" on android device.</h5>
<mark>If you need to run for IOS. You must run on MACOS.</mark>
<br/>

<hr/>

<h1>Project Structure</h1>
This project use the React Native and expo for implement.
<br/>
<ul>
  <li><a href="https://github.com/react-native-async-storage/async-storage#readme">react-native-async-storage</a>: Use for storage management.</li>
  <li><a href="https://archive.reactnative.dev/docs/picker">react-native-picker</a>: Use for picker list.</li>
  <li><a href="https://reactnavigation.org/">react-navigation</a>: Use for navigation and route.</li>
  <li><a href="https://www.npmjs.com/package/react-native-uuid">react-native-uuid</a>: Use for generate id for task.</li>
</ul>

<h3>Directory Structure</h3>
<div class="folder">
  <div>Project</div>
  <div>| -/components</div>
  <div>| -/constants</div>
  <div>| -/context</div>
  <div>| -/hooks</div>
  <div>| -/screens</div>
  <div>| -/styles</div>
  <div>| -/types</div>
  <div>| -/utils</div>
  <div>| -App.tsx</div>
</div>
<br/>
<p>
  The `App.tsx` file handles all navigation to the `/screens` folder. The `/screens` folder contains components for the pages, specifically `TaskDetail.tsx` file and `TaskList.tsx` file. `TaskList.tsx` file is the main page that displays the task list (TODO, IN PROGRESS, and DONE), while `TaskDetail.tsx` file shows the details of a task.
</p>
<br/>
<p>
  Since this project is a mini project, I chose to use React Native StyleSheet to manage CSS, storing all styles in the /styles folder and referencing them in various /screens and /components. However, if the project were to become larger, I might switch to using the styled-components library to better organize the different components.
</p>

  
