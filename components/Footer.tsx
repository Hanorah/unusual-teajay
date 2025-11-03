import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	return (
		<footer className="w-full padding-x z-30 relative pt-[80px] pb-[60px] bg-background">
			<div className="w-full flex flex-col gap-[40px]">
				<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[40px]">
					{/* Logo and Description */}
					<div className="flex flex-col">
						<Link href={"/"} className="mb-[20px]">
							<Image src={logo} alt="Logo" width={100} height={100} />
						</Link>
						<p className="paragraph font-NeueMontreal text-secondry opacity-70 max-w-[300px]">
							Empowering you to live your best life through personalized coaching and guidance.
						</p>
					</div>

					{/* Navigation Links */}
					<div className="flex flex-col">
						<nav className="flex flex-col gap-[15px]">
							{footernavbarItems.map((item) => (
								<Link
									key={item.id}
									href={item.href.startsWith("#") ? item.href : `/${item.href}`}
									className="paragraph font-medium font-NeueMontreal text-secondry hover"
								>
									{item.title}
								</Link>
							))}
						</nav>
					</div>

					{/* Contact Information */}
					<div className="flex flex-col">
						<div className="flex flex-col gap-[20px]">
							<div>
								<p className="paragraph font-medium font-NeueMontreal text-secondry mb-[5px]">Email</p>
								<a
									href="mailto:unusualteajay@gmail.com"
									className="paragraph font-NeueMontreal text-secondry hover"
								>
									unusualteajay@gmail.com
								</a>
							</div>
							<div>
								<p className="paragraph font-medium font-NeueMontreal text-secondry mb-[5px]">Phone</p>
								<a
									href="tel:+2345678910"
									className="paragraph font-NeueMontreal text-secondry hover"
								>
									+234 567 891 012
								</a>
								<br />
								<a
									href="tel:+2345678910"
									className="paragraph font-NeueMontreal text-secondry hover"
								>
									+234 567 891 012
								</a>
							</div>
						</div>
					</div>

					{/* Social Media Links */}
					<div className="flex flex-col">
						<p className="paragraph font-medium font-NeueMontreal text-secondry mb-[20px]">Follow</p>
						<div className="flex flex-wrap gap-[20px] max-w-[250px]">
							{footerItems.map((item) => (
								<a
									key={item.id}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-[60px] h-[60px] flex items-center justify-center hover:opacity-70 transition-opacity"
								>
									<Image src={item.img} alt={item.title} width={60} height={60} />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Footer Bottom: Copyright */}
				<div className="pt-[40px] border-t border-[#21212120] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
					<p className="paragraph font-NeueMontreal text-secondry opacity-60">
						© {new Date().getFullYear()} Life Coach. All rights reserved.
					</p>
					<div className="flex gap-[30px] sm:flex-col xm:flex-col sm:gap-[15px] xm:gap-[15px]">
						<Link href="/" className="paragraph font-NeueMontreal text-secondry opacity-60 hover">
							Privacy Policy
						</Link>
						<Link href="/" className="paragraph font-NeueMontreal text-secondry opacity-60 hover">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
