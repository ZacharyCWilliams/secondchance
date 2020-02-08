// import React from "react";
// import NavBar from "../containers/NavBar"
// import MainContainer from "../containers/MainContainer"
// import "../styles/Browse/BrowseProfiles.css"
// import { render } from "react-dom";

// const profile = [
//   {
//     name: "Sammy Seymore",
//     age: 24,
//     location: "Santa Rosa, California",
//     gender: "Female",
//     photos: ["https://i.imgur.com/NEc5Mb1.jpg"]
//   }
// ];


// const mapData = () => {
//   let data = profiles.map(profile => {
//     return (
//       <div className="profile-card">
//         <div className="profile-media">
//           <img
//             className="profile-media"
//             src={profile.photos[0]}
//             alt="profile-hero-thumb"
//           />
//         </div>
//         <div className="profile-info-section">
//           <li className="profile-li profile-name">
//             {profile.name}, {profile.age}
//           </li>
//           <li className="profile-li">{profile.location}</li>
//           <li className="profile-li profile-gender">{profile.gender}</li>
//         </div>
//       </div>
//     );
//   });

//   return data;
// }


// function BrowseProfiles() {

//   const handleLogIn = () => {
//     console.log('log in handled');
//   }

//   const handleSignUp = () => {
//     console.log('Sign up handled');
//   }

//   return (
//     <div className="browse-profiles-container">
//       <div className="home-container">
//         <div className="home-main-div">
//           <>
//             <div className="sticky-navbar-container">
//               <NavBar
//                 links={["Filter", "About"]}
//                 buttons={["Log In", "Sign Up"]}
//                 buttonStyles={["light", "dark"]}
//                 buttonActions={[handleLogIn, handleSignUp]}
//               />
//             </div> 
//             <div className="location-text-container">
//               <div className="location-text">
//                 <h2>All inmates, United States</h2>
//               </div>
//             </div>
//             <ul className="browse-profiles-container">{mapData()}</ul>
//           </>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BrowseProfiles;