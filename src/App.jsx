// // import './App.css'

// import { Route, Routes } from "react-router-dom";
// import Layout from "./Components/Layout/layout";
// import Signup from "./Pages/Signup&Login/Signup";
// import Login from "./Pages/Signup&Login/Login";
// import About from "./Pages/About/about";
// import Home from "./Pages/Home/home";
// import Contact from "./Pages/Contact/contact";
// import Services from "./Pages/Services/services";

// function App() {

//   if (performance.navigation.type === 1) {
//     window.location.href = "/";
//   }

//   return (
//     <>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Signup/>} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/services" element={<Services />} />
//         </Routes>
//       </Layout>
//     </>
//   );
// }

// export default App;


// import { Routes, Route } from "react-router-dom";
// import Layout from "./Components/Layout/layout";

// import Signup from "./Pages/Signup&Login/Signup";
// import Login from "./Pages/Signup&Login/Login";
// import Home from "./Pages/Home/home";
// import About from "./Pages/About/about";
// import Contact from "./Pages/Contact/contact"
// import Services from "./Pages/Services/services";
// import SignUp from "./Pages/Auth/SignUp";
// import LOgin from "./Pages/Auth/Login";

// function App({data}) {
//   // console.log(data);

//     if (performance.navigation.type === 1) {
//     window.location.href = "/";

//   }

//   const token = false;
//   return (
//     token?
//     <Routes>
//     //   {/* AUTH PAGES */}
//     {/* //   <Route path="/" element={<SignUp />} />
//     //   <Route path="/login" element={<Login />} /> */}

//       {/* MAIN PROJECT */}
//       <Route
//         path="/"
//         element={
//           <Layout >
//             <Home />
//           </Layout>
//         }
//       />

//       <Route
//         path="/about"
//         element={
//           <Layout>
//             <About />
//           </Layout>
//         }
//       />

//       <Route
//         path="/services"
//         element={
//           <Layout>
//             <Services data={data} />
//           </Layout>
//         }
//       />

//       <Route
//         path="/contact"
//         element={
//           <Layout>
//             <Contact />
//           </Layout>
//         }
//       />
//     </Routes>

//     :

//     <Routes>
//         //   <Route path="/" element={<SignUp />} />
//     //   <Route path="/login" element={<LOgin />} />
//     </Routes>
//   );
// }

// export default App;


import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";

import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";

import Home from "./Pages/UserSide/Home/home";
import About from "./Pages/UserSide/About/about";
import Services from "./Pages/UserSide/Services/services";
import Contact from "./Pages/UserSide/Contact/contact";
import Admin from "./Pages/AdminSide/admin";
import AdminLaoyut from "./Components/AdminLayout/adminLaoyut";
import Dashboard from "./Pages/AdminSide/Dashboard";
import Users from "./Pages/AdminSide/Users/User";
import Doctors from "./Pages/AdminSide/Doctors/Doctor";
import { useEffect } from "react";


const adminData = {
  name: "admin",
  email: "admin@gmail.com",
  role: "admin",
  password: "test@123",
}



function App({ data }) {

  useEffect(()=>{
    localStorage.setItem("adminData",JSON.stringify(adminData))

  },[])

  const adminToken = localStorage.getItem("adminToken");
  const userToken = localStorage.getItem("userToken");

  return (
    adminToken ? (
      <AdminLaoyut>
      <Routes>
        <Route path="/*" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/doctors" element={<Doctors />} />
      </Routes>
      </AdminLaoyut>

    ) : userToken ? (
      // 🟢 MAIN APP (WITH LAYOUT)
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services data={data} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    ) : (
      // 🔵 AUTH ROUTES
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lOgin" element={<Login />} />
      </Routes>
    )
  );
}

export default App;

    