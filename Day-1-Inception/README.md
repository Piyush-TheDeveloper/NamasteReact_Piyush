> > ASSIGNMENT-1 <<

1. ### What is _Emmet_?

   **_Emmet_** is a toolkit which helps developers to write code snippets using some shortcuts allowing easier creation of boilterplate code in the applications. It allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.
   **_e.g.:_** div#page>div.logo+ul#navigation>li*5>a

2. ### Difference between _Library_ and _Framework_?
   A **_Library_** is a like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.
   A **_Framework_**, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

3. ### What is _CDN_? Why do we use it?
   _CDN_ is **_'Content Delivery Network'_** refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. It allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript  files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.
   We use **_CDN_** because to- 
   i) Improve Website Loading times
   ii) Reduce Bandwidth Cost
   iii) Increase content availablity and redundancy
   iv) Improve website security

4. ### Why is React known as React?
    "**_React_** really shines when your data changes over time."
    React is known as _'React'_ because of _its ability to react to changes in the data_. Whenever any data is changed in a React component, React automatically renders that component and the changes are reflected at each and every instance where the data was used.

5. ### What is _crossorigin_ in script tag?

    The **_'crossorigin'_** attribute sets the mode of the request to an HTTP _**CORS**_ Request. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. _CORS i.e. **Cross-Origin Resource Sharing**_ is used to manage cross-origin requests.

6. ### What is difference between _React_ and _ReactDOM_

    **_React_** is a Javascript Library which used to build _User Interfaces_ and **_ReactDOM_** is a Javascript Library which gives React the ability to interact which the _Browser DOM_. In short, Whenever we use component, classes, elements, etc. We’re using **React** and whenever we use methods like _render()_ or _findDOMNode()_ we’re using _**React-DOM**_.

7. ### What is difference between _react.development.js_ and _react.production.js_ files via CDN?

    In CDN link, the **_react.development.js_** is used when we want to use React on our local machine, inside the development environment where **_react.production.js_** is a minified/optimized version of React (because the debugger isn't present) which is used at the production environment.

8. ### What is _async_ and _defer_?

    **_async_** and **_defer_** are boolean attributes that are used in script tag to load external scripts efficiently into our code.
    When a page is loaded 2 things happen: **_HTML Parsing_** and **_Loading of the Scripts_**.
    In the normal scenario, while the browser is parsing the HTML line by line, if a script tag is encountered, the browser stops HTML parsing and fetches the script and runs it immediately. After this, the browser agains goes back to HTML parsing.

    When we use **_async_** attribute in script tag, in case the script tag in encountered, the browser asynchronously fetches the script, thus the HTML parsing and script fetching is happening simultaneously and as soon as the whole script is fetched, the browser stops HTML parsing and starts executing the script. Once the script is done executing, browser again goes back to parsing the HTML.

    Now when we use **_defer_** attribute is script tag, in case the script tag in encountered, the browser asynchronously fetches the script, thus the HTML parsing and script fetching is happening simultaneously but the script is executed only when the browser is done with HTML parsing.

    With **_async_** we can't be sure of the order in which the scripts maybe executed but with **_defer_** we can, so when we want to execute multiple scripts which are dependent on each other, we use **_defer_**. In scenarios where we want load some external script that is independent of our code(for example: _Google Analytics_), we use **_async_** attribute.
