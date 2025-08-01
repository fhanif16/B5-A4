import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes'
import { Provider } from 'react-redux'
import {store} from "./redux/store"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store ={store}>
     <RouterProvider router={routes}></RouterProvider>
   </Provider>
   
  </StrictMode>,
)
