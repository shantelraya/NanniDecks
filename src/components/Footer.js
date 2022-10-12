import {FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapPin, FaPhoneAlt, FaTwitter,} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function footer({ button }) {
	return (
		<div className="wrapper">
			<div className="footer">
				<div className="footer-top">
					<div className="logo">
						<Link to="/">NanniDecks</Link>
						<span></span>
					</div>
					{button}
					<div className="social">
						<FaFacebookF className="social-icon" />
						<FaTwitter className="social-icon" />
						<FaLinkedinIn className="social-icon" />
					</div>
				</div>
				<div className="footer-bottom">
					<div className="copyright">
						<p>2022 NanniDecks. All Right Reserved</p>
					</div>
					<div className="contacts">
						<span>
							<FaPhoneAlt className="icon" />
							<span>+254 111 837 285</span>
						</span>
						<span>
							<FaEnvelope className="icon" />
							<span>parischax@gmail.com</span>
						</span>
						<span>
							<FaMapPin className="icon" />
							<span>Nairobi, Kenya</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default footer;