globalThis.process ??= {}; globalThis.process.env ??= {};
const At_Ease_Logo = new Proxy({"src":"/_astro/At Ease Logo.CrjEmIn4.png","width":4157,"height":4213,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/aradh/git/MMM/public/brands/At Ease Logo.png";
							}
							
							return target[name];
						}
					});

export { At_Ease_Logo as default };
