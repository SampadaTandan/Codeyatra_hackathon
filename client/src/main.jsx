// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="dashboard" element={<Dashboard />}>
//         <Route index element={<RecentActivity />} />
//         <Route path="project/:id" element={<Project />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
import React from 'react';
import routes from './route/route.jsx';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <App />
          <RouterProvider router={router} />
  </React.StrictMode>
);