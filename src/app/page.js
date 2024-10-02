import Image from "next/image";
import styles from './style/style.css';
export default function Home() {
  return (
    <div>
      <header>
        <img src="/images/logo.jpg" alt="logo" width="100" height="100" />
        <h1>
          Welcome to My Travel Page
        </h1>
      </header>

      <h2><strong><em>For those who are considering to have a happy holiday travel, here are some good choices for
        you:</em></strong></h2>
      <nav>
        <ul>
          <li id="Greece">
            <a href='./two'>Greece</a>
          </li>
          <li id="Manchester">
            <a href="./three">Manchester</a>
          </li>
          <li id="Tokyo">
            <a href="./four">Tokyo</a>
          </li>
          <li id="HongKong">
            <a href="./five">Hong Kong</a>
          </li>
        </ul>
      </nav>
      <div>
        <img src="/images/Greece.jpg" alt="Greece" width="260" height="153" />
        <img src="/images/Manchester.JPG" alt="Manchester" width="260" height="153" />
        <img src="/images/Japan.jpg" alt="Japan" width="260" height="153" />
        <img src="/images/hongkong.jpg" alt="hongkong" width="260" height="153" />

      </div>
      <iframe width="260" height="135" src="https://www.youtube.com/embed/fL3Cy7VJEHU"
        title="Visit Greece | Athens (Full version)" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="260" height="135" src="https://www.youtube.com/embed/4IZZ9xd7cKc"
        title="48 hours in MANCHESTER, England | UK Travel Vlog | things to see and where to eat" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="260" height="135" src="https://www.youtube.com/embed/JtR5q5Fb1lQ"
        title="TOP 24 BEST THINGS to do in TOKYO in 2023 | Japan travel guide" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="260" height="135" src="https://www.youtube.com/embed/wC7uTbvcQ_4?si=NI8eHmsDqYArW7FS"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div>
        <audio controls autoplay>
          <source src="western-classical.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}
