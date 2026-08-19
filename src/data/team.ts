export type Role = {
	org: string;
	title: string;
	period: string;
	blurb: string;
};

export type Person = {
	slug: string;
	name: string;
	title: string;
	accent: 'berry' | 'moss';
	bio: string;
	skills: string[];
	photo: string;
	primaryRole: Role;
	secondaryRoles: Role[];
	email: string;
	phone: string;
	linkedin: string;
	instagram: string;
};

export const team: Person[] = [
	{
		slug: 'lais',
		name: 'Muhammed Lais M',
		title: 'Co-Founder & Managing Director, Kaelo Solutions',
		accent: 'berry',
		bio: 'Technology entrepreneur building AI agents and digital solutions for businesses — customer support automation, lead qualification, business websites, and digital transformation.',
		skills: ['Corporate Management', 'Management Professional', 'Web Development'],
		photo: '/images/team/lais.png',
		primaryRole: {
			org: 'Kaelo Solutions',
			title: 'Co-Founder & Managing Director',
			period: 'Aug 2026 — Present',
			blurb:
				'Leading development of AI agents for customer enquiries and lead qualification, business websites and web applications, and digital transformation for clients.',
		},
		secondaryRoles: [
			{
				org: 'Seiko Epson Corporation',
				title: 'Hardware Support Engineer',
				period: 'Jun — Jul 2026',
				blurb: 'Installation, maintenance, and repair of printers, scanners, and projectors.',
			},
			{
				org: 'GJ Global IT Ventures',
				title: 'Python & AI Fundamentals',
				period: 'Jun — Jul 2025',
				blurb: 'Internship covering Python programming and core AI/ML concepts.',
			},
			{
				org: 'Freston Analytics',
				title: 'Python Fundamentals',
				period: 'Apr — May 2024',
				blurb: 'Training in AI fundamentals, data processing, and introductory ML workflows.',
			},
		],
		email: 'mhdlais2004@gmail.com',
		phone: '+91 80899 45464',
		linkedin: 'https://www.linkedin.com/in/mohammedlais786',
		instagram: 'https://www.instagram.com/mhdlais/',
	},
	{
		slug: 'hadi',
		name: 'Hadi Afnan',
		title: 'Co-Founder & Creative Lead, Kaelo Solutions',
		accent: 'moss',
		bio: 'Computer Engineering student building hands-on skills in Linux, cloud, and DevOps — and the creative and development side of Kaelo Solutions.',
		skills: ['Artificial Intelligence (AI)', 'Image Processing', 'Data Processing'],
		photo: '/images/team/hadi.png',
		primaryRole: {
			org: 'Kaelo Solutions',
			title: 'Co-Founder & Creative Lead & Developer',
			period: 'Present',
			blurb: 'Creative direction and development work across Kaelo Solutions client projects.',
		},
		secondaryRoles: [
			{
				org: 'ipsr solutions ltd',
				title: 'Cloud & DevOps Engineering Trainee',
				period: 'May 2026 — Present',
				blurb: 'Hands-on training in Linux administration, Bash, Git, and cloud fundamentals.',
			},
			{
				org: 'GJ Global IT Ventures',
				title: 'Python & AI Intern',
				period: 'Jun — Jul 2025',
				blurb: 'Foundation bootcamp in AI, machine learning, and Python programming.',
			},
		],
		email: 'haaddiie@gmail.com',
		phone: '+91 81579 99555',
		linkedin: 'https://www.linkedin.com/in/hadi-afnan-530966359',
		instagram: 'https://www.instagram.com/haddhiie',
	},
];

export type Achievement = {
	placement: string;
	event: string;
	detail: string;
};

export const achievements: Achievement[] = [
	{
		placement: '2nd Place',
		event: 'ENVI 8',
		detail:
			"Hackathon, National Technical Fest — St. Joseph's College (Autonomous), Devagiri, Calicut — as Team Algora",
	},
	{
		placement: '3rd Place',
		event: 'TECHBLAZE 3.0',
		detail: 'Hackathon, state-level inter-college tech fest — JDT Islam Polytechnic College',
	},
	{
		placement: '2nd Place',
		event: 'Tarang',
		detail:
			'Project Competition, National Level Techno-Cultural Fest — Government Polytechnic College, Kannur',
	},
];

export type CompanyPerson = {
	name: string;
	role: string;
	accent: 'berry' | 'moss';
};

export type Company = {
	name: string;
	logo: string;
	tagline: string;
	period: string;
	people: CompanyPerson[];
	linkedin: string;
	instagram: string;
	website?: string;
};

export const companies: Company[] = [
	{
		name: 'Kaelo Solutions',
		logo: '/images/companies/kaelo-logo.png',
		tagline:
			'An AI solutions company for businesses — AI agents, automation, and custom software built to solve real business problems.',
		period: 'Aug 2026 — Present',
		people: [
			{ name: 'Muhammed Lais M', role: 'Co-Founder & Managing Director', accent: 'berry' },
			{ name: 'Hadi Afnan', role: 'Co-Founder & Creative Lead', accent: 'moss' },
		],
		linkedin: 'https://www.linkedin.com/company/kaelosolutions-india',
		instagram: 'https://www.instagram.com/kaelosolutions/',
		website: 'https://www.kaelosolutions.com',
	},
	{
		name: 'Kodox Technologies',
		logo: '/images/companies/kodox-logo.png',
		tagline:
			'A services and development studio building websites and apps for businesses and people — started during college, and the stepping stone to Kaelo Solutions.',
		period: 'Present',
		people: [
			{ name: 'Muhammed Lais M', role: 'Co-Founder', accent: 'berry' },
			{ name: 'Hadi Afnan', role: 'Co-Founder', accent: 'moss' },
		],
		linkedin: 'https://www.linkedin.com/company/kodox-technologies',
		instagram: 'https://www.instagram.com/kodoxtech',
	},
];

export type Project = {
	title: string;
	summary: string;
	status: 'in-progress' | 'complete';
	tag?: string;
	categories: string[];
};

export const projects: Project[] = [
	{
		title: 'BuildTrack',
		summary:
			'Construction site management software built for civil engineers and contractors to track work and business.',
		status: 'complete',
		categories: ['Construction', 'Management Software'],
	},
	{
		title: 'WattWatch',
		summary: 'An IoT solution to monitor and manage energy consumption in homes and large buildings.',
		status: 'complete',
		categories: ['IoT', 'Energy'],
	},
	{
		title: 'College Store Tracking System',
		summary: 'A tracking system built for a college store.',
		status: 'complete',
		categories: ['Inventory Tracking'],
	},
	{
		title: 'Elo AI',
		summary: 'Automation SaaS for businesses.',
		status: 'complete',
		tag: 'Kaelo Solutions',
		categories: ['SaaS', 'Automation'],
	},
	{
		title: 'The Human Organizer',
		summary: 'A personal project to track money, important events, work, and duties.',
		status: 'in-progress',
		tag: 'Lais',
		categories: ['Productivity', 'Personal Finance'],
	},
	{
		title: 'PeerPods',
		summary: 'A career exploration platform for graduates.',
		status: 'in-progress',
		tag: 'Hadi',
		categories: ['Career Platform', 'EdTech'],
	},
];
