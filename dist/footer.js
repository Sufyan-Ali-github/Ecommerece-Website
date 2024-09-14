const footerHTML=`
<div class="container">
        <div class="footer-columns">
    
          <!-- About Us Section -->
          <div class="footer-column">
            <h4>About Us</h4>
            <p>We are a leading e-commerce store providing top  notch products worldwide. Our goal is to make shopping easy and accessible for everyone.</p>
          </div>
    
          <!-- Quick Links Section -->
          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
    
          <!-- Contact Info Section -->
          <div class="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><i class="fa-solid fa-phone"></i> +1 234 567 890</li>
              <li><i class="fa-solid fa-envelope"></i> info@example.com</li>
              <li><i class="fa-solid fa-map-marker-alt"></i> 1234 Street Name, City, Country</li>
            </ul>
          </div>
    
          <!-- Social Media Section -->
          <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          
        </div>
    
        <div class="footer-bottom">
          <p>@Design and Code by Sufyan Ali</p>
        </div>
      </div>
`

const footerElem = document.querySelector(".footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
