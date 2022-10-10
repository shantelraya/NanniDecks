import './App.css';
import BackTop from './components/Backtop';
import Become from './components/Become';
import Button from './components/Button';
import Circles from './components/Circles';
import Design from './components/Design';
import Element from './components/Element';
import ElementData from './components/ElementContent';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderData from './components/HeaderData';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import index from './components/index';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import TestimonialData from './components/TestimonialData';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRef } from 'react';

function App() {
	const becomeRef = useRef();
	const servicesRef = useRef();
	const topRef = useRef();

	return (
		<Router>
			<div className="bg-section">
				<Navbar
					button={
						<Button
							text1="Become a"
							text2="Nanny"
							onClick={() => becomeRef.current.scrollIntoView()}
						/>
					}
				/>
				<Header servicesRef={servicesRef} ref={topRef} />
			</div>
			<Services
				ref={servicesRef}
				button={
					<Button
						text1="Sign up"
						text2=""
						onClick={() => alert('Thank you for clicking')}
					/>
				}
			/>
			<Testimonial
				design={
					<Design
						style={{
							left: '48%',
							right: '0',
							top: '-150px',
							transform: 'rotate(240deg)',
						}}
					/>
				}
				circles={<Circles />}
			/>
			<Become
				ref={becomeRef}
				button={
					<Button
						text1="Apply Now"
						text2=""
						onClick={() => alert('You clicked button!')}
					/>
				}
				design={
					<Design
						style={{
							left: '0',
							right: '0',
							top: '180px',
							transform: 'rotate(70deg)',
						}}
					/>
				}
				circles={
					<Circles
						style={{
							top: '82%',
							left: '9%',
							transformOrigin: 'center top',
							transform: 'rotate(180deg)',
						}}
					/>
				}
			/>
			<Footer
				button={
					<Button
						text1="Book a"
						text2="nanny"
						onClick={() => alert('You clicked button')}
					/>
				}
			/>
			<BackTop topRef={topRef} />
		</Router>
	);
}

export default App;