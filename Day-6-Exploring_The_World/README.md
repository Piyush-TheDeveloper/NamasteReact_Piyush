
>> **ASSIGNMENT - 6 -** - *Exploring the World* - *_14-Jan-2023_*

1. ### What is **MircoServices** ? 
   - *_Microservices_* also known as the Microservice Architecture, is an architectural style that structures an application as a collection of services that are - 
      * Independently deployable
      * Loosely coupled
      * Organized around business capabilities
      * Owned by a small team
      * Highly maintainable and testable
   - The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.
   - It allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility. To serve a single user request, a microservices-based application can call on many internal microservices to compose its response.
   - _Example:_ **Containers** are a well-suited microservices architecture example, since they let you focus on developing the services without worrying about the dependencies. Modern cloud-native applications are usually built as microservices using containers.

2. ### What is **Monolithic Architecture** ? 
   - *_Monolithic architecture_* is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications.
   - It's like a big container, wherein all the software components of an app are assembled and tightly coupled, i.e., each component fully depends on each other.
   - Some Disadvantages of using Monolithic are -
      * Large and Complex Applications,
      * Slow Development,
      * Unscalable,
      * Unreliable,
      * Inflexible

3. ###  What is the difference between **Monolithic** & **Micorservice** ?
   | *_Parameters_*   | *_Monolith Architecture_*  | *_Microservices Architecture_*  |
   | ------------ | --------------------   | :-------------------------: |
   | _Development_ | When an application is built with one code base, it is easier to develop. This is true for small applications, but when the application takes larger, development becomes slower and complex    | Micro services add more complexity compared to monolith arch. If development sprawl isn’t properly managed, it results in slower development speed and poor operational performance.   |
   | _Testing_ | Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application. | Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual services. |
   | _Performance_ | In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices | Though performance could be an issue in microservices, it could be over come by various performance optimisation techniques | 
   | _Debugging_  | With all code located in one place, it’s easier to follow a request and find an issue. |  Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging. |
   | _Scalability_ | You can’t scale individual components |If a microservice reaches its load capacity, new instances of that service can rapidly be deployed to the accompanying cluster to help relieve pressure.|
   | _Relaibility_ | If there’s an error in any module, it could affect the entire application’s availability. | You can deploy changes for a specific service, without the threat of bringing down the entire application.|
   | _Tech Adoption_ | Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming. | Any new tech changes can eaily be adopted as an independent service | 
   | _Deployment_ |    One executable file or directory makes deployment easier. But, a small change to a monolithic application requires the redeployment of the entire monolith.      |  Microservices make it easier for teams to update code and accelerate release cycles with continuous integration and continuous delivery (CI/CD).   |
   | _Agility_ | There is no agility in monolith | Promote agile ways of working with small teams that deploy frequently. |

4. ### Why do we need a `useEffect` **Hook** ?
   * `useEffect()` Hook lets us perform side effects in function components. We typically want to perform our effects after React has updated the DOM. So in *React Classes*, we put side effects into `componentDidMount` and `componentDidUpdate`. Here we need to duplicate our code between these2 lifecycle methodsin Class Component. This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React `Class components` don’t have a method like this. We could extract a separate method but we would still have to call it in two places.
   * So, by using `useEffect` Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.

5. ### What is `Optional Chaining` ?
   * The **Optional Chaining (?.)** operator accesses an object's property or calls a function. If the object accessed or function called is `undefined` or `null`, it returns `undefined` instead of throwing an error.
   * It solves a very fundamental problem which is accessing the property from a dynamic deep object safely.
   * Eg.
   ```
      const deepObject = { 
         firstLevel: { 
            secondLevel: { 
               thirdLevel: 'value' 
            }
         }
      }

      // Accessing thirdLevel safely without optional chaining
      const thirdLevelValue = deepObject.firstLevel.secondLevel.thirdLevel.name //Output: Will throw an error

      // Accessing thirdLevel safely with optional chaining
      const thirdLevelValue = deepObject?.firstLevel?.secondLevel?.thirdLevel?.name //Output: undefined

   ```

6. ### What is `Shimmer UI` ?
   A `Shimmer` screen is a version of the UI that doesn’t contain actual content. It resembles the page’s actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what’s about to come and what’s happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. _It is essentially a wireframe of the page, with placeholder boxes for text and images._

7. ### What is the difference between JS Expression and JS Statement ?
   - **JS EXPRESSIONS:**
      * Any unit of code that can be evaluated to a value is an expression. Since expressions produce values, they can appear anywhere in a program where JavaScript expects a value such as the arguments of a function invocation.
      * JS Expressions has some categorie like -
         1. Arithematic Expression
         2. String Expression
         3. Logical Expression
         4. Left-Hand Side Expression, etc.
   
   - **JS STATEMENT:**
      * A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.
      * JS Statements has some categorie like -
         1. Declaration Statement -> Eg.: Let total = 10
         2. Expression Statement -> 
         3. Conditional Statement
   
   8. ### What is **Conditional Rendering** ? _Explain with Code_.
      * `Conditional rendering` in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
      * In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `Logical AND(&&)`, and `Ternary (? :)` operators.
      * _Eg._
      - *Using Ternary Operator:*
          ```
            //Instead of this:
         if (isPacked) {
            return <li className="item">{name} ✔</li>;
         }
            return <li className="item">{name}</li>;

            We can write:
         return(
            <li className="item">
               {isPacked ? name + ' ✔' : name} //Ternary operator
            </li>
         );
          ```
   `You can read it as “if isPacked is true, then (?) render name + ' ✔', otherwise (:) render name”.`

      - *Using Logical AND (&&):*
            ```
            //The above Ternary Example can also be written in Logical AND(&&)
         return (
           <li className="item">
               {name} {isPacked && '✔'}
            </li>
         ); 
            ```
   9. ### What is `CORS` ?
      `CORS` stands for **C**ross-**O**rigin **R**esource **S**haring. _It allows you to make requests from one website to another website in the browser_, which is normally prohibited by another browser policy called the `Same-Origin Policy (SOP)`.  It also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented.
      `CORS` also relies on a mechanism by which browsers make a "**preflight**" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that **preflight**, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

   10. ### What is `async` & `await` ?
      `JavaScript` is **Synchronous** in nature which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing.
      * `async` - It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
      * `await` - It is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
      * `Eg.`
      ```
      const getData = async() => {
         let a = await "Hello World"
         console.log(a);
      }
      console.log(1);
      getData();
      console.log(2);

      Output:
      1
      2
      Hello World
      ```
   11. ### What is the use of `const json = await data.json();` in getRestaurants() ?
      This is referring to working of `json` while fetching the data from API. Refer to [THIS LINK](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) for more information.