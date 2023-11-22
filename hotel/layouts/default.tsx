import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="flex flex-row">
				<div className="footer-content">
					<p>Dirección: </p>
					<div className="phone-icons">
					<span>La Pampa 69 // Villa Carlos Paz</span>
					</div>
				</div>
				<div className="footer-content2">
					<p>Contáctanos:</p>
					<div className="phone-icons">
					
					<p>+123456789</p>
					</div>
				</div>

			</footer>
		</div>
	);
}
