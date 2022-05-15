function Header() {
  return (
    <section id="header">
      <a href="#"><img src="/logo.png" alt="" className="logo"/></a>  
        <div>
            <ul id="navbar">
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
            </ul>
        </div>
    </section>
  );
}

export default Header;
