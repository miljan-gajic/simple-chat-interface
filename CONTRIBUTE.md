## Adding new features and UI elements

### **Add a new feature**

To add a new feature create a new folder in `src/features/` and name it to be descriptive and to fit the function of the feature

All files related to data fetching and genrally around `api` should go into the `src/features/[your_feature]/api`

All strictly scoped and decoupled from the rest of the app components related to the feature should go into the `src/features/[your_feature]/components`

All hooks should go into the `src/features/[your_feature]/hooks`

Rest of the folder structure will be dictated by the complexity of the feature and robustness

Finally export all from the `src/features/[your_feature]/index.ts`

### **Add a new UI element**

To add a new UI element (aka a shared component) you should create a folder with the name of the Component in `src/components/[YOUR_COMPONENT_NAME]/[YOUR_COMPONENT_NAME].tsx`

To Add styling module in the same folder create a module names the same as the component `src/components/[YOUR_COMPONENT_NAME]/[YOUR_COMPONENT_NAME].module.css`

If testing is introduced, the test file should go here as well `src/components/[YOUR_COMPONENT_NAME]/[YOUR_COMPONENT_NAME].test/spec.tsx`

### **Configuration files**

All config files should be added at the root of the application folder
