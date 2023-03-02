import React from "react";

var currentdate=new Date();
var year=currentdate.getFullYear();

function Footer(){
    return <footer>
       <p> Copyright {year}</p>
    </footer>
}
export default Footer;