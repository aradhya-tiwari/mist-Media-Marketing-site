globalThis.process ??= {}; globalThis.process.env ??= {};
const Logo_PNG = new Proxy({"src":"/_astro/Logo PNG.BCU-oNiX.png","width":866,"height":288,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aradh/git/MMM/public/brands/Logo PNG.png";
							}
							
							return target[name];
						}
					});

export { Logo_PNG as default };
