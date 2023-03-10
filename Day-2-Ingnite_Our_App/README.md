>> ASSIGNMENT-2 <<

1. ### What is **_npm_**?
    **_NPM_** is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
    **npm** consists of three distinct components:
      * the website
      * the Command Line Interface (CLI)
      * the registry

2. ### What is _**Parcel/Webpack**_ ? Why do we need it?
    _**Parcel**_ and _**webpack**_ are the ***__bundlers__*** used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers _**parcel**_ and _**webpack**_ remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

3. ### What is **_.parcel-cache_**?
    **.parcel-cache** stores information about the project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

4. ### What is **_npx_** ?
    **npx** is a command allows you to run an arbitrary command from an npm package (either one installed locally, or fetched remotely), in a similar context as running it via npm run.
    _npx vs npm exec_
    When run via the **npx** binary, all flags and options must be set prior to any positional arguments. When run via npm exec, a double-hyphen -- flag can be used to suppress npm's parsing of switches and options that should be sent to the executed command.

5. ### What is difference between _**`dependencies`**_ vs _**`devDependencies`**_ ?
    To specify the packages your project depends on, you must list them as "_dependencies_" or "_devDependencies_" in your package's package.json file.
      * "**_dependencies_**": Packages required by your application in production.
      * "**_devDependencies_**": Packages that are only needed for local development and testing.

6. ### What is **Tree Shaking**?
    _**Tree shaking**_ is a term commonly used within a JavaScript context to describe the removal of dead code.
    _In modern JS applications, we use buldlers like Parcel or WebPack._

7. ### What is **Hot Module Replacement**?
    **_Hot Module Replacement (HMR)_** exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
      
      * Retain application state which is lost during a full reload.
      * Save valuable development time by only updating what's changed.
      * Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles    
        directly in the browser's dev tools.
8. ### List down your favourite 5 _superpowers_ of **Parcel** and describe any 3 of them in your own words.
    * Super Fast Build Algorithm
    * Caching While Development
    * Image Optimization
    * Compatible with older versions of browsers
    * Zero Config Bundler

    >Enables HTTPS on DEV Env:
      We can enable HTTPS on DEV env using parcel by the following command-
        `npx parcel index.html --https`
    >Tree-Shaking:
      Parcel can also do tree shaking which means it can remove all the unwanted codes from the project like removal of all the console.log's
    >Zero Config Bundler
      Parcel comes with _Zero Config_ bundler as in this we don't need to do any configuration to get the parcel work in our project. **_JUST INSTALL AND READY TO GO_**.

9. ### What is **_`.gitignore`_**? What should we add and not add into it?
    A `.gitignore` file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected. The great advantage of putiing them in *.gitignore* file is that those can be huge in size and those files can be generated with the help of package.json or package-lock.json file. It's very important to put `node_modules` in the .gitignore file since it contains a lot of packages which can be installed later by using package.json file. Other directories that should be placed in .gitignore file are `.parcel-cache` and dist. `package.json` and `package-lock.json` must not be put in `.gitignore` file.

10. ### What is the difference between **`package.json`** and **`package-lock.json`** ?
    | **_package.json_**    | **_package-lock.json_**    | 
    | -------------   |:-------------:       |
    | This file is created as soon as `npm init` command is fired | This file is automatically generated when npm modifies either `node_modules` tree or `package.json` |
    | It contains metadata about the project like name, version, author, scripts and dependencies required by the project  | It contains dependencies required by the project with the exact version with which it was created |
    | It contains only direct dependencies | It contains nested/transitive dependencies (dependencies of dependencies) | 
    | This file must not be put in `.gitignore` file |  This file must also not be put in `.gitignore` file |
    | During deployment, there is no gurantee that if the version number of the dependencies with which the project was developed (package.json file has the least version of dependencies), will be reproduced and thus the project might not be working as intended | During deployment, the exact version of dependencies will be reproduced and thus the project will be working as intended | 
    | ^ or ~ can be used in version of dependencies in package.json | Only exact version of dependencies must be used in package-lock.json |
    
11. ### Why should I not modify `package-lock.json`?
    The vulnerability scanner can end up seeing different versions of dependencies `package.json` file. Also, the project could be running in  different versions compared to what is running in production. That???s because `package.json` usually doesn???t specify exact versions, so depending on when/where you invoke npm install, you can see different versions than a vulnerability scanner. The `package-lock.json` file was introduced in npm version 5 to solve this problem. It is a generated file and is not designed to be manually edited. **_Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency._** That's the reason we should not modify `package-lock.json` file.

12. ### What is **`node_modules`** ? Is it a good idea to push that on git?
    In simple words, _`node_modules`_ holds the source code of the packages that are installed through npm. It is a very bad practice to push _`node_modules`_ to git (source control) since it is huge in size and blow up the project capacity and moreover all the packages in _`node_modules`_ can be re-generated using _`package.json`_ file. 

13. ### What is the **`dist`** folder?
    **_`dist`_** folder is created once the application is build using _`parcel`_ web application bundler. IT contains the output of the bundler i.e all js files, css files and html files bundled into a single js file, css file and html file that is compressed and minified.

14. ### What is **`browserlists`**?
    The  **_`browserslist`_** field in package.json can be used to specify which browsers/node.js versions the application supports. **_Browserslist_** helps you keep the right balance between browser compatibility and bundle size. With **_Browserslist_**, you will cover wider audience and have smaller bundle size.
    ```
    "browsersList" : ["last 2 Chrome versions", "> 5%", "not dead"]

    ```

15. ### Difference between **`^ - caret`** and **`~ - tilda`**?
    | Caret(^) Notation | Tilde(~) Notation | 
    | --- | :----: | 
    | In package.json, if a dependency's version is prefixed with ^, then it will be updated to all future minor versions and not any major version | In package.json, if a dependency's version is prefixed with ~, then it will be updated to all future versions and not minor versions | 
    | Used for Compatible with version | Used for Approximately equivalent to version |
    | It gives you backwards-compatible new functionality as well | It gives you bug fix releases |
    | `Eg:` **^1.2.4** will update all the future Minor and patch updates, for example, _^1.2.4_ will automatically change the dependency to _1.x.x_ if any update    occurs | `Eg:` **~1.2.0** will update all the future patch updates. We have to write just _~1.2.0_ and all the next patch update dependencies. For example, _1.2.1, 1.2.2, 1.2.5???????????????1.2.x_ |

