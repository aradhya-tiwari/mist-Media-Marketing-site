globalThis.process ??= {}; globalThis.process.env ??= {};
const The_Hair_Studio_Logo_02 = new Proxy({"src":"/_astro/The Hair Studio Logo 02.Cz2hiUYo.png","width":904,"height":185,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aradh/git/MMM/public/brands/The Hair Studio Logo 02.png";
							}
							
							return target[name];
						}
					});

export { The_Hair_Studio_Logo_02 as default };
