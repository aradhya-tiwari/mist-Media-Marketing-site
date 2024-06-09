globalThis.process ??= {}; globalThis.process.env ??= {};
const slag = "photography";
const title = "Photography";
const images = [
	"/imagePlaceholder.svg"
];
const desc = "This is a Big long Discription for photography";
const sub_services = [
	{
		title: "Wedding Photography",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	},
	{
		title: "Product Photography",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	},
	{
		title: "Lifestyle Photography",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	},
	{
		title: "Food Photography",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	},
	{
		title: "Industry Photography",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	},
	{
		title: "Corporate Photography",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photography very nice ..."
	},
	{
		title: "Shoot Strategy",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	},
	{
		title: "Video Editing",
		image: "./imagePlaceholder.svg",
		desc: "This is a discription of wedding photo graphy"
	}
];
const photography = {
	slag: slag,
	title: title,
	images: images,
	desc: desc,
	sub_services: sub_services
};

export { photography as default, desc, images, slag, sub_services, title };
