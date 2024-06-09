globalThis.process ??= {}; globalThis.process.env ??= {};
const Logo_R1 = new Proxy({"src":"/_astro/Logo R1.D3UlaMXE.png","width":827,"height":631,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aradh/git/MMM/public/brands/Logo R1.png";
							}
							
							return target[name];
						}
					});

export { Logo_R1 as default };
