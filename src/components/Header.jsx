import React from "react";

function Header() {
  return (
    <header id="header">
    <div className="header_nav">
        <h2>Artek</h2>
        <ul>
            <li><a href="/">가구</a></li>
            <li><a href="/">조명</a></li>
            <li><a href="/">홈데코</a></li>
            <li><a href="/">키친</a></li>
            <li><a href="/">빠른배송</a></li>
        </ul>
    </div>
    <div className="header_search">
        <input type="text" id="search"/>
    </div>
    <a href="/"><i className="fas fa-search"></i></a>
</header>
  );
}

export default Header;
