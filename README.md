# useContext example

This serves as an example of useContext. It includes what I think is the best structure to create and consume that context.
This is heavily based on this blog post by Kent C. Dodds:
[How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

## Setup

simply clone and run:

```bash
npm install
```

to start the local server run:

```bash
npm run dev
```

## Explanation

In this example I am using context to manage the state of a counter. Note that I have kept this example as simple as possible to make it easy to understand. For the functionality in this example there is definitely a better solution that doesn't use context but hopefully the simplicity of this example helps to understand how to use context on more complicated use cases.

Everything that manages the state of that counter can be found within `src/context/counterContext.tsx`.

In this file we are doing three things:

1. We create the context object using createContext function from react. We save it in a variable and also give the type that we want the context to be. This type should be an object with the state itself and any functions we want to call within the application to update that state in anyway. In this example we have the counter itself as a number and then two functions(increaseCounter and decreaseCounter), which will either increase or decrease the value of counter.
2. We create the wrapping provider component (in this case CounterProvider) as a function component. This component houses the state management, so in this example we use the useState hook to create the counter state and then declare the increaseCounter and decreaseCounter functions which uses setCounter to update this state. This state and the functions then get passed into the jsx component that you get from the `Provider` property of the context object that we created in step 1.
3. We create a custom hook that returns everything we listed in the type in step 1. This state and any functions we expose to manage that state will only be available within components wrapped by the contextProvider we created in step2, so to prevent that being an issue, we check that the context was created and if not we send and error to the console stating that this hook can only be used within this provider wrapper.

To consume this context the home page (`src/app/page.tsx`) imports the provider and wraps the components which need to consume the state or need access to the functions that update this state. The components that have been wrapped can then use the custom hook we created and destructure the state and updating functions from the returned object. In this example CounterDisplay (`src/components/CounterDisplay.tsx`) uses counter, and CounterButtons (`src/components/CounterButtons.tsx`) uses the increaseCounter and decreaseCounter functions.

I have also placed a server component named Heading within the context provider to demonstrate the a server component is still created on the server even though it is wrapped by a client component. You can check this by checking where the console.log appears, because it is run on the server it will only appear in your terminal, and not in the browser console.

If you wish to compare this useContext example with how this same functionality is done simply with useState you can checkout the branch 'example/using-regular-useState' which only uses useState, no context. Note from the comparison which components or page is created on the server or on the browser. Also, see how few props are being passed down through components when context is used vs when useState is used.

## ways to extend this example

There are many examples where you might want to start with a default value, or change the state differently based on where you are getting the state or setters. For that you can try passing further arguments to the context provider or use context hook.
