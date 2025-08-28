

// const Navbar = () => {


//     return (
//         <div>
//             <div className="bg-img">
//                 <div className="container w3-hide-small w3-hide-medium">
//                     <div className="topnav" style={{ border: "10px solid deeppink" }}>
//                         <a href="./"><b><i>Home</i></b></a>
//                         <a href="./Services"><b><i>Services</i></b></a>
//                         <a href="./Team"><b><i>The Team</i></b></a>
//                         <a href="./Photos"><b><i>Photos</i></b></a>
//                         <a href="./Packages"><b><i>Packages</i></b></a>
//                         <a href="./Contact"><b><i>Contact Us</i></b></a>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }
// export default Navbar

const Navbar = () => {
    return (
             <div>
            <div className="bg-img">
                <div className="w3-container w3-center w3-hide-small w3-hide-medium">
                    <div className="topnav w3-center" style={{ 
                        border: "10px solid deeppink",
                        display: "inline-block"
                    }}>
                        <a href="./"><b><i>Home</i></b></a>
                        <a href="./Services"><b><i>Services</i></b></a>
                        <a href="./Team"><b><i>The Team</i></b></a>
                        <a href="./Photos"><b><i>Photos</i></b></a>
                        <a href="./Packages"><b><i>Packages</i></b></a>
                        <a href="./Contact"><b><i>Contact Us</i></b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar