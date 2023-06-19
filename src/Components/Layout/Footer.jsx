import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <p>
            Copyright © {new Date().getFullYear()} ardamoin <a href="https://github.com/ardamoin" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
        </p>
    </footer>
  )
}

export default Footer;