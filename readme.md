## 1. `useState()` hook
### `useState()` hook used to handle the statemanagement
#### let's take an example of a counter value
` const [counter,setCounter] = useState(0); `
#### in this line of code `counter` is the state variable that stores the value and `setCounter` is the setter function that updates the value of counter
## 2. tailwindcss
### tailwind is the utility first css framework
## 3. props
### props (properties) are the ways to pass data form parent to child
> eg-
```javascript
// 1. app.jsx
function App(){
    return(
        <Card shoesName="NIKE" />
    )
}
// 2. Card.jsx
function Card({shoesName,btnText}){
    return(
        <h1> Brand {shoesName},  
    )
}
```
> here the final output will be `Brand NIKE` 
`Parent: app.jsx`
`Child: Card.jsx`
## 4. `useCallback()` hook
### `useCallback()` hook it is used to optimize the function preventing it from unnecessary renders
`const functionName = useCallback(() => {},[])`
>#### here in `useCallback()`  <br>1. callback function<br>2. dependences array <br> function re-created only when if the things in dependcies array changes <br> eg-
```javascript
const copyPasswordToClip = useCallback(() => {
    // block of code
  }, [pass]);
```
>in this funciton named copyPasswordToClip it only runs when the pass gets changed
## 5. `useEffect()` hook
### `useEffect()` hook is used to handle side effects in functional components
`useEffect(() => {},[])`
>#### here in `useEffect()` <br>1. callback function<br>2. dependencies array <br> function re-renders only when if the things in dependencies array get changed <br> eg- 
```javascirpt
useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);
```
>in this `passGen();` run only when the (length,numAllow,charAllow,passGen) gets changed
## 6. custom hooks