globalThis.process ??= {}; globalThis.process.env ??= {};
const ROUND = new Proxy({"src":"/_astro/ROUND.Be8_9ipc.png","width":2254,"height":2254,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aradh/git/MMM/public/brands/ROUND.png";
							}
							
							return target[name];
						}
					});

export { ROUND as default };
