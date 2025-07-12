import "../styles/Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar(){

    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        console.log(searchValue);
    }, [searchValue])
    return(
        <div className="Navbar">
            <nav>
                <label className="search_bar">
<input placeholder="Search Here" type="search" onChange={(e)=>setSearchValue(e.target.value)} defaultValue={searchValue} className="search_box"/>
<a href="" className="searchvg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</a>
                </label>

                <ul className="item-list">
                    <li className="item-holder">
                        <a href="" className="item">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="chat">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>   
                            New Arrivals
                            </a>
                        </li>
                    <li className="item-holder">
                       
                        <a href="" className="item">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dress">
                           <path d="M3.172 22.561A1 1 0 0 0 4 23h16a1 1 0 0 0 .929-1.372l-3.373-8.421A11.013 11.013 0 0 0 19 8V2a1 1 0 0 0-2 0v2.885a8.1 8.1 0 0 0-3-.44 2.882 2.882 0 0 0-2 1.2 2.882 2.882 0 0 0-2-1.2 8.1 8.1 0 0 0-3 .44V2a1 1 0 0 0-2 0v6a11.013 11.013 0 0 0 1.444 5.207l-3.373 8.421a1 1 0 0 0 .101.933zm5.361-9.189a1 1 0 0 0-.326-1.172C7.7 11.819 7 9.385 7 8c0-.91.215-1.555 2.92-1.566.28.111.97 1.077 1.577 1.43a1 1 0 0 0 1.006 0c.682-.4 1.155-1.166 1.5-1.419 2.785 0 3 .645 3 1.555 0 1.385-.7 3.819-1.207 4.2a1 1 0 0 0-.326 1.171L18.522 21H5.478z"/>
                           </svg>
                            Women's</a>
                        </li>
                    <li className="item-holder">
                       
                        <a href="" className="item">
                            <svg className="shirt"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 5h-.16667c-.86548 0-1.70761.28071-2.4.8L3.5 8l2 3.5L8 10v9h8v-9l2.5 1.5 2-3.5-2.9333-2.2c-.6924-.51929-1.5346-.8-2.4-.8H15M9 5c0 1.5 1.5 3 3 3s3-1.5 3-3M9 5h6"/>
</svg>

                            Men's</a>
                        </li>
                    <li className="item-holder">
                        <a href="" className="item">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="chat" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

                            Contact Us
                            </a>
                        </li>
                </ul>
            </nav>
        </div>
    )
}