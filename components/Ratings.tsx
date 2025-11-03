import Link from "next/link";

export default function Ratings() {
	return (
		<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px] ">
			<div className="relative w-full h-0 pb-[56.25%] shadow-lg mt-6 mb-4 overflow-hidden rounded-2xl bg-black">	<video
				className="absolute w-full h-full top-0 left-0 border-none"
				controls
				autoPlay
				muted
				loop
			>
				<source src="/vid.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			</div>
		</div>
	);
}
