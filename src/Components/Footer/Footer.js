
import fb from '../../images/icon-facebook.svg';
import twit from '../../images/icon-twitter.svg';
import pin from '../../images/icon-pinterest.svg';
import insta from '../../images/icon-instagram.svg';

import './Footer.css'

function scrollTop(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function Footer() {
    return (
        <footer>
            <div className='footer_content'>
                <h2>Shortly</h2>
                <div className='features position'>
                    <h4>Features</h4>
                    <ul>
                        <li><button onClick={scrollTop}>Link Shortening</button></li>
                        <li><button onClick={scrollTop}>Branded Links</button></li>
                        <li><button onClick={scrollTop}>Analytics</button></li>
                    </ul>
                </div>
                <div className='resources position'>
                    <h4>Resources</h4>
                    <ul>
                        <li><button onClick={scrollTop}>Blog</button></li>
                        <li><button onClick={scrollTop}>Developers</button></li>
                        <li><button onClick={scrollTop}>Support</button></li>
                    </ul>
                </div>
                <div className='company position'>
                    <h4>Company</h4>
                    <ul>
                        <li><button onClick={scrollTop}>About</button></li>
                        <li><button onClick={scrollTop}>Our team</button></li>
                        <li><button onClick={scrollTop}>Careers</button></li>
                        <li><button onClick={scrollTop}>Contact</button></li>
                    </ul>
                </div>
                <div className='social'>
                    <img src={fb} alt='fb ico' />
                    <img src={twit} alt='twitter ico' />
                    <img src={pin} alt='pinterest ico' />
                    <img src={insta} alt='insta ico' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;