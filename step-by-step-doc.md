# Step By Step
Document outlining the project structure

## Project structure

![image](https://github.com/user-attachments/assets/1f8b1881-d859-4e57-9a69-bbda74df175e)

![image](https://github.com/user-attachments/assets/0634728b-b057-441d-a746-c0f553a1fd65)

The **`main`** file contains the entry point of the application and wraps the **`app`** component which contains the different paths of the application

> **`/home`** and **`/transactions`**.

## components folder

The 'components' folder contains all the **components** that are reused in the app.

## pages folder


The 'pages' folder contains the application paths. There are only two paths in this project:

- home -> `/`
	> The `/home` page is where the user can see the list of products
- transactions -> `/transactions`
	> The `/transactions` page is where the user can see the shopping cart

## contexts folder

I make use of the **`useContext`** hook to create a **CartContext** and make the shopping cart state accessible to each component. You can find the **`CartContext`** in this folder

## hooks folder

The hooks folder contains the two hooks I use in the app:

- useCart
	> Which use the `CartContext`
- useProducts
	> Which uses the `getProducts` service to query the products.

## layouts folder

I have created a `root-layout` to maintain **consistency** in the UI of the app

## lib folder

This folder contains files in which I add utility functions such as:

- apiQuery
	> To fetch products data
- toCurrencyString
	> To parse prices to currency format
- getFromLocalStorage
	> To get the cart saved into `LocalStorage`

It also contains a **`db.json`** file that I use as a **database** template for the **API** and then initialize with the [json-server](https://github.com/typicode/json-server) package.

## services folder

It contains the `products-service` file which I use to fetch products from the **API**.

## reducers folder

I use the `useReducer` hook to **manage the shopping cart state**. The reducer function is inside the **`cart.tsx`** file located in this folder

## types.d.ts file

Since I have used **TypeScript** for the development of this app. In this file is where some types are defined

> **Note:** Components props are defined by an **Interface** into each component file
