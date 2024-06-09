globalThis.process ??= {}; globalThis.process.env ??= {};
const panna_logo_2 = new Proxy({"src":"/_astro/panna logo 2.gQdK_qI5.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aradh/git/MMM/public/brands/panna logo 2.png";
							}
							
							return target[name];
						}
					});

export { panna_logo_2 as default };
