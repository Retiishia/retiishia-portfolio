import { Carousel } from "flowbite-react";

const projects = [
	{
		title: "Datenshi Games Indonesia",
		image: "/projects/datenshi-site.webp",
		alt: "Datenshi Games Indonesia",
		link: "https://datenshi.pw/",
		stack: "next,react,tailwind,jquery,figma",
		icon: "bi bi-link",
		linkText: "Site",
	},
	{
		title: "Weather App Using OpenWeather API",
		image: "/projects/weatherapp-site.webp",
		alt: "Weather App",
		link: "https://weatherapp.retiishia.my.id/",
		stack: "react,tailwind,css",
		icon: "bi bi-link",
		linkText: "Site",
	},
	{
		title: "Portfolio Website",
		image: "/projects/portfolio-site.webp",
		alt: "Portfolio Website",
		link: "https://portfolio.retiishia.my.id/",
		stack: "react,tailwind",
		icon: "bi bi-link",
		linkText: "Site",
	},
	{
		title: "Old Portfolio Website Project",
		image: "/projects/oldportfolio-site.webp",
		alt: "Old Portfolio Website Project",
		link: "https://github.com/Retiishia/Portfolio-NextJS",
		stack: "next,react,tailwind",
		icon: "bi bi-github",
		linkText: "Link",
	}
];

export const ProjectsSection = () => {
	return (
		<section className="w-full px-4 md:px-24 flex justify-center items-center overflow-x-hidden">
			<div className="w-full md:w-[62%] px-5 py-5 bg-white/50 backdrop-blur-md rounded-lg shadow-lg mb-20 sm:mb-0">
				<div className="w-full px-4">
					<div className="mx-auto text-center">
						<h1 className="font-bold text-black text-xl md:text-3xl">
							Projects
						</h1>
					</div>
				</div>

				{/* --- Mobile Card View --- */}
				<div className="mt-5 w-full px-4 py-4 border-t-2 border-t-black block md:hidden space-y-5 max-h-[50vh] overflow-auto">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-white rounded-lg shadow-md overflow-hidden">
							<img
								src={project.image}
								alt={project.alt}
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<h2 className="font-bold text-lg">{project.title}</h2>
								<div className="mt-2">
									<img
										src={`https://skillicons.dev/icons?i=${project.stack}`}
										alt="Stack"
										className="h-6"
									/>
								</div>
								<div className="mt-4">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block text-sm bg-blue-500 text-white rounded-lg px-3 py-1 hover:bg-blue-600 transition duration-300">
										<i className={`mr-2 ${project.icon}`} />
										{project.linkText}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* --- Desktop Carousel --- */}
				<div className="text-center mt-5 w-full px-4 py-4 border-t-2 border-t-black text-white hidden md:block">
					<div className="h-72 w-full rounded-lg overflow-hidden">
						<Carousel
							className="overflow-hidden relative"
							indicators={false}
							slideInterval={5000}
							pauseOnHover
							loop
							leftControl={
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 md:hover:bg-white/50 ring-4 ring-white md:hover:scale-110 transition duration-300">
									<svg
										className="w-4 h-4 text-white rtl:rotate-180"
										viewBox="0 0 6 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M5 1 1 5l4 4"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							}
							rightControl={
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 md:hover:bg-white/50 ring-4 ring-white md:hover:scale-110 transition duration-300">
									<svg
										className="w-4 h-4 text-white ltr:rotate-180"
										viewBox="0 0 6 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M5 1 1 5l4 4"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							}>
							{projects.map((project, idx) => (
								<div key={idx} className="relative w-full h-full group">
									<img
										src={project.image}
										alt={project.alt}
										className="absolute block max-w-full max-h-full w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
									/>

									{/* Overlay (hanya desktop) */}
									<div className="absolute w-full h-full py-6 px-6 sm:py-10 sm:px-20 -translate-x-1/2 z-50 -translate-y-1/2 top-1/2 left-1/2 rounded-lg bg-white/70 backdrop-blur-md text-black opacity-0 group-hover:opacity-100 transition duration-300">
										<h2 className="font-bold text-lg md:text-2xl">
											{project.title}
										</h2>
										<div className="mt-2 flex justify-center">
											<img
												src={`https://skillicons.dev/icons?i=${project.stack}`}
												alt="Stack"
											/>
										</div>
										<div className="mt-6 md:mt-12 md:hover:scale-110 transition duration-300">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-block text-lg md:text-xl bg-white rounded-lg p-2 md:hover:bg-blue-400 md:hover:text-white md:hover:scale-110 transition duration-300">
												<i className={`text-2xl ${project.icon}`}></i>{" "}
												{project.linkText}
											</a>
										</div>
									</div>
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
};
