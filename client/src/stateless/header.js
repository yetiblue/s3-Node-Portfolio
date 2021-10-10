// import logo from "./logo.svg";
import "./header.css";

function Header() {
  return (
    <div class="header">
      <nav class="navbar">
        <ul class="navbar_list">
          <li>
            <a class="navbar_link" href="">
              Home
            </a>
            <a class="navbar_link" href="">
              Blog
            </a>
            <a class="navbar_link" href="">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
