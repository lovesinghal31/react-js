## 1. `useState()` hook

### `useState()` hook used to handle the statemanagement

#### let's take an example of a counter value

`const [counter,setCounter] = useState(0);`

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
> `Parent: app.jsx`
> `Child: Card.jsx`

## 4. `useCallback()` hook

### `useCallback()` hook it is used to optimize the function preventing it from unnecessary renders

`const functionName = useCallback(() => {},[])`

> #### here in `useCallback()` <br>1. callback function<br>2. dependences array <br> function re-created only when if the things in dependcies array changes <br> eg-

```javascript
const copyPasswordToClip = useCallback(() => {
  // block of code
}, [pass]);
```

> in this funciton named copyPasswordToClip it only runs when the pass gets changed

## 5. `useEffect()` hook

### `useEffect()` hook is used to handle side effects in functional components

`useEffect(() => {},[])`

> #### here in `useEffect()` <br>1. callback function<br>2. dependencies array <br> function re-renders only when if the things in dependencies array get changed <br> eg-

```javascirpt
useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);
```

> in this `passGen();` run only when the (length,numAllow,charAllow,passGen) gets changed

## 6. custom hooks

### we can create our own hooks in react

```javascript
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}
```

> the hook `useCurrencyInfo()` is created to fetch the data from a api accpets parameter (currency). to get the exchange rates of the currency

## 7. React Router

### used to give the effect of multipage website in our react app

> #### first we need to define a layout of our webpage

```javascript
// Layout.jsx
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

> here our webpage consist mainly three parts <br> 1. `Header`: navbar of our page <br> 2. `Footer`: footer of our webpage <br> 3. `Outlet`: here comes our all the page content like `Home` page , `About` page, etc.

### now in `App.jsx`

```javascript
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route loader={githubLoaderInfo} path="github" element={<Github />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
```

> + a variable named `router` that handle all of our routing NOTE: the name of variable can be anything
> + `createBrowserRouter` that will create a router for webpage
> + `createRoutesFromElements` that will create routes elements for the webpage
> + `<Route path='' element={} />` the syntax to add elements
> + `<Route path='/' element={<Layout />}>` to create a skeleton of webpage
> + `<Route path="*" element={<NotFound />} />` to create a universal element for the path that are not declared
> + `<Route path="" element={<Home />} />` for our homepage and then respectively
> + `<RouterProvider router={router} />` `RouterProvider` provide the routes