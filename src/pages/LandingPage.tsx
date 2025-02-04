import UseCase from '../components/UseCase';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HowItWorks />
			<UseCase />
			<Pricing />
			<Footer />
		</>
	);
};

export default LandingPage;
