// Importing Dependencies //
import React from "react";
import Image from 'next/image';

// Importing Socials Icons SRC
import InstagramIcon from '../../content/images/icons/social-icons/instagram-icon.svg';
import XIcon from '../../content/images/icons/social-icons/x-icon.svg';
import TiktokIcon from '../../content/images/icons/social-icons/tiktok-icon.svg';

// Importing Music Icons SRC
import SpotifyIcon from '../../content/images/icons/music-icons/spotify-icon.svg';
import TidalIcon from '../../content/images/icons/music-icons/tidal-icon.svg';
import DeezerIcon from '../../content/images/icons/music-icons/deezer-icon.svg';
import AppleMusicIcon from '../../content/images/icons/music-icons/applemusic-icon.svg';
import YoutubeIcon from '../../content/images/icons/music-icons/youtube-icon.svg';

export function Footer() {

  return (
    <>

      {/* FOOTER PART */}
      <footer >
        <div className="container">
          <div className="container-block">
            {/* FOOTER ICONS PART */}
            <div className="footer-block">

              {/* SOCIAL & MUSIC ICONS */}
              <ul className="footer-icons-list">
                <li>
                  <a href="https://blurblur.link/instagram" target="_blank" rel="noreferrer">
                    <Image alt="Instagram Logo" className="footer-social-icon" src={InstagramIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/x" target="_blank" rel="noreferrer">
                    <Image alt="X Logo" className="footer-social-icon" src={XIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/tiktok" target="_blank" rel="noreferrer">
                    <Image alt="TikTok Logo" className="footer-social-icon" src={TiktokIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/spotify" target="_blank" rel="noreferrer">
                    <Image alt="Spotify Logo" className="footer-social-icon" src={SpotifyIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/tidal" target="_blank" rel="noreferrer">
                    <Image alt="Tidal Logo" className="footer-social-icon" src={TidalIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/deezer" target="_blank" rel="noreferrer">
                    <Image alt="Deezer Logo" className="footer-social-icon" src={DeezerIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/applemusic" target="_blank" rel="noreferrer">
                    <Image alt="Apple Music Logo" className="footer-social-icon" src={AppleMusicIcon}/>
                  </a>
                </li>
                <li>
                  <a href="https://blurblur.link/youtube" target="_blank" rel="noreferrer">
                    <Image alt="Youtube Logo" className="footer-social-icon" src={YoutubeIcon}/>
                  </a>
                </li>
            </ul>

            </div>

            {/* FOOTER COPYRIGHT */}
            <div className="footer-copyright">

              {/* COPYROGHT LINE */}
              <p className="footer-copyright">© 2024 Airval Studio, par POLYPHONIA MUSIC.</p>

            </div>
          </div>
        </div>
      </footer>
    
    </>
  );
}

export default Footer;
