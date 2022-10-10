import Button from "./Button";
import Design from "./Design";

function HeaderLeft({ servicesRef }) {
	return (
		<div className="left">
			<Design />
			<div className="left-content">
				<h2>Talk to people who speak different languages?</h2>
				<p>
					We will find the most suitable nanny for your needs. Find your
					verified Nanny today through us.
				</p>
				<Button
					text1="Book an"
					text2="Interpreter"
					onClick={() => alert('You clicked button')}
				/>
				<div
					className="scroll-down"
					onClick={() => servicesRef.current.scrollIntoView()}
				>
					<span>Scroll Down</span>
				</div>
			</div>
		</div>
	);
}

export default HeaderLeft;