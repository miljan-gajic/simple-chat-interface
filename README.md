## This is a simple chat interface app bootstrapped with Vite

Vite bootstrap app is a modern and above all really fast solution to bootstrap your `React` app unlike the `create-react-app` where the boilerplate is huge and

### To start the app run

```sh
yarn dev
```

### To import the environmental variables

Vite is using `dotenv` under the hood so they have created their own wrapper/proxy and you do not have the access to `process` object so the env vars should be imported like it is shown below:

```ts
import.meta.env.[YOUR_VARIABLE]
```

### Packages used:

#### **React-Query**

Given the I chose to go with the client caching data fetching library that can hold the data in cache but on every data update invalidate the cache and auto-fetch. The `react-query` library from **tanstack** is one of the most popular solutions

#### **Date-Fns**

Since we are using timestamps to both display the relevant data and to fetch the time/date specific data, I used `date-fns` library to format and transform dates. This is mostly DX related

#### **React-datepicker**

The `react-datepicker` library is being used mostly because of the finished solution. For the sake of UX I have decided to have a date/time picker for users to choose they own timestamp to show the messages, so the finished solution seemed like a perfect one stop shop solution

#### **React-feather**

i have decided to give the users more freedom and options so I created the "toolbox" that will live above the messages and provide the users with the ability to reverse the order of messages, to select the date/time timestamp and to switch the user. So in order to create a better UI/UX I have decided to go with some **icons** library and `react-feathers` seemed like a good solution

### Notable dev. dependencies

#### **Vite-tsconfig-paths**

This `Vite` utility package is used to make the DX better so that you could define `baseUrl` in TS config compiler option, and instead of typing full relative path to a file, you shorten it

### Further improvements

#### **Testing**

[Vitest](https://vitest.dev) is by far the most popular library for testing the Vite.js apps

- Mock server running and server response
- Snapshot test the components
- Integration testing
- Unit testing (function in a component, util functions, hooks)
- Installing [vitest UI](https://vitest.dev/guide/ui.html) for QA team to monitor integration and unit tests

#### **Removing React context**

Further improvements could also encompass the removal of the `react context` and further leverage the `react-query` or if we'd have a hypothetical upscale of the app, introduction of some more robust solution like `Redux` | `Redux-Toolkit` would be a better solution

_More info about the architectural approach is in **ARCHITECT.md** and more info about the app coding approaches in **CONTRIBUTE.md**_
