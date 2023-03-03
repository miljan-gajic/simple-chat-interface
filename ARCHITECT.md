## Project Architecture and Structure

Most of the code lives in the `src` folder and looks like this. The various config files fill be at the `root` of the app folder

_Src folder structure should look like below_:

- assets
- components
- config
- features
- hooks
- lib
- providers
- routes
- store
- test
- types
- utils

### Features folder

In order to scale the application in the easiest and most maintainable way, most of the code related to business logic will be kept in `features` folder, which should contain different feature-based things.

Every feature folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

_Feature folder structure should look like below at minimum_:

`src/features/your-feature/`

- api
- assets
- components
- hooks
- index.ts

The current app does not have most of the folders described here but it is orchestrated in a way that it can be up-scaled

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

_You should import stuff from other features only by using_:

```tsx
import { AwesomeComponent } from "@/features/awesome-feature";
```

and not

```tsx
import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent
```

This can also be configured in the ESLint configuration to disallow the later import by the following rule:

```ts
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```

Since this app is too small and have only one `feature` the `ESLint` is not necessary and the `tsc` can do the job properly
