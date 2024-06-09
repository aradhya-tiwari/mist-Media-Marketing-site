globalThis.process ??= {}; globalThis.process.env ??= {};
const slag = "/foodphotography";
const title = "Food Photography, Video, Reel";
const base_image = "/imagePlaceholder.svg";
const images = [
	"/imagePlaceholder.svg"
];
const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?";
const sub_services = [
	{
		title: "Organic Marketing",
		image: "./imagePlaceholder.svg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?"
	},
	{
		title: "Advertisement",
		image: "./imagePlaceholder.svg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?"
	},
	{
		title: "Social Media Marketing",
		image: "./imagePlaceholder.svg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?"
	},
	{
		title: "Influencer Marketing",
		image: "./imagePlaceholder.svg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?"
	},
	{
		title: "Performance Marketing",
		image: "./imagePlaceholder.svg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?"
	},
	{
		title: "Content Marketing",
		image: "./imagePlaceholder.svg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ad reprehenderit distinctio dolor mollitia doloremque! Reiciendis ratione beatae veniam doloremque sunt provident perspiciatis, fugit totam aliquid, cupiditate consequatur nesciunt, quibusdam cum assumenda dolorem accusamus officiis a. Incidunt perspiciatis sunt consectetur neque corporis porro harum voluptate quod animi, est cumque?"
	}
];
const foodphotography = {
	slag: slag,
	title: title,
	base_image: base_image,
	images: images,
	desc: desc,
	sub_services: sub_services
};

export { base_image, foodphotography as default, desc, images, slag, sub_services, title };
