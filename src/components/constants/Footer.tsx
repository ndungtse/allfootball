import React from "react";
import { BiEnvelopeOpen, BiGlobe } from "react-icons/bi";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full flex flex-col tablet:flex-row mt-5 items-center justify-center">
			<p>&copy; Charles Hazard 2022. All right reserved</p>
			<div className="flex items-center tablet:ml-4">
				<a
					className="flex items-center px-2"
					href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"
					target="_blank"
				>
					<FaLinkedin className="text-xl" />
				</a>
				<a
					className="flex items-center px-2"
					href="https://github.com/NdungutseCharles103"
					target="_blank"
					rel="no-referrer"
				>
					<FaGithubSquare className="text-xl" />
				</a>
				<a
					className="flex items-center px-2"
					href="https://www.facebook.com/ishimwendungutsecharles"
					target="_blank"
					rel="no-referrer"
				>
					<FaFacebookSquare className="text-xl" />
				</a>
				<a
					className="flex items-center px-2"
					href="https://www.instagram.com/ndungutse_charles/"
					target="_blank"
					rel="no-referrer"
				>
					<FaInstagramSquare className="text-xl" />
				</a>
				<a
					className="flex items-center px-2"
					href="mailto:ndungutsecharles103@gmail.com"
					target="_blank"
					rel="no-referrer"
				>
					<BiEnvelopeOpen className="text-xl" />
				</a>
				<a
					className="flex items-center px-2"
					href="https://www.ndungutsecharles.me"
					target="_blank"
					rel="no-referrer"
				>
					<BiGlobe className="text-xl" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
