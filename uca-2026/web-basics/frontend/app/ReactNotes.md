# React is simple lightweight library that can:

## Integrate into any existing application

## With some part of the application not using React at all and partial application running on React

## Provides an easy way to segregate the functionalities in the form of modular components (Seperation of concerns)

## The components are much more efficinet than created using normal js. ?????

# React uses JSX

## Browser cannot natively understand JSX

## But browser understands JS only, so in order for JSX to work, this needs to be convert into JS

## So for that we need an additional library to convert JSX to JS

## One such popular library is babel

# React HTML

## In JSX we write complete HTML just like we can write a normal JS file

## Whatever HTML that we write in JSX is not native HTML. Every tag is wrapper on top of existing html tags

# React state

## State belongs to a component

## It is a data that is managed/used by that component and is rendered on the UI

# Virtual DOM

## Real DOM: In a normal scenario where we are updating the DOM without React, everyupdate that is coming is pushed to DOM directly. DOM operation is generally considered a heavy operation. In normal scenari, where UI is update very frequently, it will slow down the performance.

## Virtual DOM amd State Update

### Virtual DOM: react keeps a copy of normal DOM in the form virtual DOM. Any update that need to be pushed real DOM is first made to Virtual DOM. React then batches the updates and then calculate the deleta b/w Virtual vs real DOM and the pushes the batches in real DOM

# React hooks

## Are the functions use for dirrent puprposes
## useState() - refer React state section above
## useEffect
## useCallBack

# Components re-render

## Component re-render basically mean the component function is called again

## It doesn't re-initialze the state nor update the real DOM directly(unless there are any changes)

## Component re-render happens these 3 cases:

### state update
### props update
### parent component is re-rendered

## Memoization 
### React.memo (HOF - Higher Order Function) - Memoizing a component
### useMemo (React hook) - Used for memoizing the values
### useCallback (React hook): Memoizing a function 

## React data handling 
### component state - defined using a hook useState
#### Can be changed (setState methods) - This is why state is called as mutable
### props - incoming/input data - props are immutable (cannot be changed/modified)
#### Can we modify props OR should we even modify props 
### useRef - This is used for creating a stable reference to any local data (not state or props) or html element during re-rendering. The main purpose here to avoid re-initialization of local variable OR maintain the reference of jsx elements during the subsequent re-renders

### Sharing data between the components
#### Pass data from parent to child component - Can be done using props
#### Pass data from child to parent  component - Can be done using props
##### We can send data from child to parent using return - 
##### But in React component it has to return a JSX, and then it is not passing the data anymore
##### Another way is to send a callback function from parent component to child component using props and then calling the callback function in child coponent with any data that we want to share with parent

