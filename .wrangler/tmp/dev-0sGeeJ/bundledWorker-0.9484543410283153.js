var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// .wrangler/tmp/bundle-aBsPaa/checked-fetch.js
function checkURL(request, init2) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init2) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-aBsPaa/checked-fetch.js"() {
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init2] = argArray;
        checkURL(request, init2);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/kleur_BcFxsYqz.mjs
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY, $, bold, dim, red, yellow, blue;
var init_kleur_BcFxsYqz = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/kleur_BcFxsYqz.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
      isTTY = process.stdout && process.stdout.isTTY;
    }
    $ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
    };
    bold = init(1, 22);
    dim = init(2, 22);
    red = init(31, 39);
    yellow = init(33, 39);
    blue = init(34, 39);
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/path-to-regexp_Xgx1vbKb.mjs
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode2 = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode2(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode2(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
var init_path_to_regexp_Xgx1vbKb = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/path-to-regexp_Xgx1vbKb.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/cookie_BTCaQS-K.mjs
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function parse2(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var parse_1, serialize_1, __toString, fieldContentRegExp;
var init_cookie_BTCaQS_K = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/cookie_BTCaQS-K.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    parse_1 = parse2;
    serialize_1 = serialize;
    __toString = Object.prototype.toString;
    fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/astrojs_internal-helpers_YHLPdyNb.mjs
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function collapseDuplicateSlashes(path) {
  return path.replace(/(?<!:)\/{2,}/g, "/");
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(?:http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}
function slash(path) {
  return path.replace(/\\/g, "/");
}
function fileExtension(path) {
  const ext = path.split(".").pop();
  return ext !== path ? `.${ext}` : "";
}
var init_astrojs_internal_helpers_YHLPdyNb = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/astrojs_internal-helpers_YHLPdyNb.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/clsx_CNI3IGC6.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var init_clsx_CNI3IGC6 = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/clsx_CNI3IGC6.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/astrojs_svelte_DVZoARO6.mjs
function check(Component) {
  return Component["render"] && Component["$$render"];
}
function needsHydration(metadata) {
  return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, slotted, metadata) {
  const tagName = needsHydration(metadata) ? "astro-slot" : "astro-static-slot";
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    slots[key] = () => `<${tagName}${key === "default" ? "" : ` name="${key}"`}>${value}</${tagName}>`;
  }
  const { html } = Component.render(props, { $$slots: slots });
  return { html };
}
var _renderer0;
var init_astrojs_svelte_DVZoARO6 = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/astrojs_svelte_DVZoARO6.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    _renderer0 = {
      check,
      renderToStaticMarkup,
      supportsAstroStaticSlot: true
    };
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/mime_D7CWmx-1.mjs
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null);
  this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
var Mime_1, standard, Mime, lite, mime;
var init_mime_D7CWmx_1 = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/mime_D7CWmx-1.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_cookie_BTCaQS_K();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    Mime$1.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error(
              'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
            );
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime$1.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime$1.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    Mime_1 = Mime$1;
    standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    Mime = Mime_1;
    lite = new Mime(standard);
    mime = /* @__PURE__ */ getDefaultExportFromCjs(lite);
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/html-escaper_ClQ6UWd1.mjs
var replace, ca, esca, pe, escape;
var init_html_escaper_ClQ6UWd1 = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/html-escaper_ClQ6UWd1.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    ({ replace } = "");
    ca = /[&<>'"]/g;
    esca = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    pe = (m) => esca[m];
    escape = (es) => replace.call(es, ca, pe);
  }
});

// .wrangler/tmp/pages-txxP7Z/chunks/cssesc_CJgb_aGe.mjs
var object, hasOwnProperty, merge, regexAnySingleEscape, regexSingleEscape, regexExcessiveSpaces, cssesc;
var init_cssesc_CJgb_aGe = __esm({
  ".wrangler/tmp/pages-txxP7Z/chunks/cssesc_CJgb_aGe.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    object = {};
    hasOwnProperty = object.hasOwnProperty;
    merge = function merge2(options, defaults) {
      if (!options) {
        return defaults;
      }
      var result = {};
      for (var key in defaults) {
        result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
      }
      return result;
    };
    regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
    cssesc = function cssesc2(string, options) {
      options = merge(options, cssesc2.options);
      if (options.quotes != "single" && options.quotes != "double") {
        options.quotes = "single";
      }
      var quote = options.quotes == "double" ? '"' : "'";
      var isIdentifier = options.isIdentifier;
      var firstChar = string.charAt(0);
      var output = "";
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        if (codePoint < 32 || codePoint > 126) {
          if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
            } else {
              counter--;
            }
          }
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else {
          if (options.escapeEverything) {
            if (regexAnySingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            }
          } else if (/[\t\n\f\r\x0B]/.test(character)) {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = character;
          }
        }
        output += value;
      }
      if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
          output = "\\-" + output.slice(1);
        } else if (/\d/.test(firstChar)) {
          output = "\\3" + firstChar + " " + output.slice(1);
        }
      }
      output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
          return $0;
        }
        return ($1 || "") + $2;
      });
      if (!isIdentifier && options.wrap) {
        return quote + output + quote;
      }
      return output;
    };
    cssesc.options = {
      "escapeEverything": false,
      "isIdentifier": false,
      "quotes": "single",
      "wrap": false
    };
    cssesc.version = "3.0.0";
  }
});

// .wrangler/tmp/pages-txxP7Z/renderers.mjs
var renderers_exports = {};
__export(renderers_exports, {
  $: () => $$Image,
  A: () => App,
  a: () => createComponent,
  b: () => addAttribute,
  c: () => createAstro,
  d: () => renderHead,
  e: () => renderSlot,
  f: () => renderComponent,
  g: () => deserializeManifest,
  h: () => generic___js,
  m: () => maybeRenderHead,
  r: () => renderTemplate,
  renderers: () => renderers
});
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new Unreachable();
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function toCodes(locales) {
  return locales.map((loopLocale) => {
    if (typeof loopLocale === "string") {
      return loopLocale;
    } else {
      return loopLocale.codes[0];
    }
  });
}
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of AstroCookies.consume(cookies)) {
    yield headerValue;
  }
  return [];
}
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
async function renderRedirect(renderContext) {
  const {
    request: { method },
    routeData
  } = renderContext;
  const { redirect, redirectRoute } = routeData;
  const status = redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
  const headers = { location: encodeURI(redirectRouteGenerate(renderContext)) };
  return new Response(null, { status, headers });
}
function redirectRouteGenerate(renderContext) {
  const {
    params,
    routeData: { redirect, redirectRoute }
  } = renderContext;
  if (typeof redirectRoute !== "undefined") {
    return redirectRoute?.generate(params) || redirectRoute?.pathname || "/";
  } else if (typeof redirect === "string") {
    let target = redirect;
    for (const param of Object.keys(params)) {
      const paramValue = params[param];
      target = target.replace(`[${param}]`, paramValue);
      target = target.replace(`[...${param}]`, paramValue);
    }
    return target;
  } else if (typeof redirect === "undefined") {
    return "/";
  }
  return redirect.destination;
}
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = toCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      if (a.qualityValue > b.qualityValue) {
        return -1;
      } else if (a.qualityValue < b.qualityValue) {
        return 1;
      }
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentLocale.path;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return locales.map((locale) => {
        if (typeof locale === "string") {
          return locale;
        } else {
          return locale.codes.at(0);
        }
      });
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(loopLocale.path);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales) {
  for (const segment of pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale))
          continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
}
async function renderEndpoint(mod, context, ssr, logger) {
  const { request, url } = context;
  const method = request.method.toUpperCase();
  const handler = mod[method] ?? mod["ALL"];
  if (!ssr && ssr === false && method !== "GET") {
    logger.warn(
      "router",
      `${url.pathname} ${bold(
        method
      )} requests are not available for a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` to enable.`
    );
  }
  if (handler === void 0) {
    logger.warn(
      "router",
      `No API Route handler exists for the method "${method}" for the route "${url.pathname}".
Found handlers: ${Object.keys(mod).map((exp) => JSON.stringify(exp)).join(", ")}
` + ("all" in mod ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : "")
    );
    return new Response(null, { status: 404 });
  }
  if (typeof handler !== "function") {
    logger.error(
      "router",
      `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`
    );
    return new Response(null, { status: 500 });
  }
  const response = await handler.call(mod, context);
  if (REROUTABLE_STATUS_CODES.includes(response.status)) {
    response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
  }
  return response;
}
function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult) => {
    if (typeof importMetaGlobResult === "string") {
      throw new AstroError({
        ...AstroGlobUsedOutside,
        message: AstroGlobUsedOutside.message(JSON.stringify(importMetaGlobResult))
      });
    }
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new AstroError({
        ...AstroGlobNoMatch,
        message: AstroGlobNoMatch.message(JSON.stringify(importMetaGlobResult))
      });
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    // TODO: this is no longer neccessary for `Astro.site`
    // but it somehow allows working around caching issues in content collections for some tests
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, {
    value: true
  });
}
function isRenderInstruction(chunk) {
  return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else if (value === void 0) {
        return [PROP_TYPE.Value];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {},
    propsWithoutTransitionAttributes: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else {
      extracted.props[key] = value;
      if (!transitionDirectivesToCopyOnIsland.includes(key)) {
        extracted.propsWithoutTransitionAttributes[key] = value;
      }
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
    extracted.propsWithoutTransitionAttributes[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new AstroError({
      ...NoMatchingImport,
      message: NoMatchingImport.message(metadata.displayName)
    });
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (typeof props[name] !== "undefined") {
      island.props[name] = props[name];
    }
  });
  return island;
}
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(result, directive)};${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}<\/script>`;
  }
  return "";
}
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)?.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(clsx(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (typeof value === "string" && value.includes("&") && urlCanParse(value)) {
    return markHTMLString(` ${key}="${toAttributeString(value, false)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function renderToBufferDestination(bufferRenderFunction) {
  const bufferChunks = [];
  const bufferDestination = {
    write: (chunk) => bufferChunks.push(chunk)
  };
  const renderPromise = bufferRenderFunction(bufferDestination);
  Promise.resolve(renderPromise).catch(() => {
  });
  return {
    async renderToFinalDestination(destination) {
      for (const chunk of bufferChunks) {
        destination.write(chunk);
      }
      bufferDestination.write = (chunk) => destination.write(chunk);
      await renderPromise;
    }
  };
}
function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function urlCanParse(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = styles.join("\n") + links.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead() {
  yield createRenderInstruction({ type: "head" });
}
function* maybeRenderHead() {
  yield createRenderInstruction({ type: "maybe-head" });
}
function isSlotString(str) {
  return !!str[slotString];
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk) {
      if (chunk instanceof SlotString) {
        content += chunk;
        if (chunk.instructions) {
          instructions ??= [];
          instructions.push(...chunk.instructions);
        }
      } else if (chunk instanceof Response)
        return;
      else if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunkToString(result, chunk);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
function stringifyChunk(result, chunk) {
  if (isRenderInstruction(chunk)) {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts } = result._metadata;
        const { rendererName } = instruction;
        if (!rendererSpecificHydrationScripts.has(rendererName)) {
          rendererSpecificHydrationScripts.add(rendererName);
          return instruction.render();
        }
        return "";
      }
      default: {
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else if (chunk instanceof Response) {
    return "";
  } else if (isSlotString(chunk)) {
    let out = "";
    const c = chunk;
    if (c.instructions) {
      for (const instr of c.instructions) {
        out += stringifyChunk(result, instr);
      }
    }
    out += chunk.toString();
    return out;
  }
  return chunk.toString();
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder$1.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}
async function renderChild(destination, child) {
  child = await child;
  if (child instanceof SlotString) {
    destination.write(child);
  } else if (isHTMLString(child)) {
    destination.write(child);
  } else if (Array.isArray(child)) {
    const childRenders = child.map((c) => {
      return renderToBufferDestination((bufferDestination) => {
        return renderChild(bufferDestination, c);
      });
    });
    for (const childRender of childRenders) {
      if (!childRender)
        continue;
      await childRender.renderToFinalDestination(destination);
    }
  } else if (typeof child === "function") {
    await renderChild(destination, child());
  } else if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
  } else if (!child && child !== 0)
    ;
  else if (isRenderInstance(child)) {
    await child.render(destination);
  } else if (isRenderTemplateResult(child)) {
    await child.render(destination);
  } else if (isAstroComponentInstance(child)) {
    await child.render(destination);
  } else if (ArrayBuffer.isView(child)) {
    destination.write(child);
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    for await (const value of child) {
      await renderChild(destination, value);
    }
  } else {
    destination.write(child);
  }
}
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory)) {
    result._metadata.propagators.add(instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response)
        return;
      str += chunkToString(result, chunk);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk instanceof Response) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e) {
          if (AstroError.is(e) && !e.loc) {
            e.setLocation({
              file: route?.component
            });
          }
          setTimeout(() => controller.error(e), 0);
        }
      })();
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
      location: {
        file: route?.component
      }
    });
  }
  return isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
}
async function bufferHeadContent(result) {
  const iterator = result._metadata.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(result);
    if (isHeadAndContent(returnValue)) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
}
async function renderToAsyncIterable(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  let error2 = null;
  let next = promiseWithResolvers();
  let cancelled = false;
  const buffer = [];
  const iterator = {
    async next() {
      if (cancelled)
        return { done: true, value: void 0 };
      await next.promise;
      if (error2) {
        throw error2;
      }
      let length = 0;
      for (let i = 0, len = buffer.length; i < len; i++) {
        length += buffer[i].length;
      }
      let mergedArray = new Uint8Array(length);
      let offset = 0;
      for (let i = 0, len = buffer.length; i < len; i++) {
        const item = buffer[i];
        mergedArray.set(item, offset);
        offset += item.length;
      }
      buffer.length = 0;
      const returnValue = {
        // The iterator is done if there are no chunks to return.
        done: length === 0,
        value: mergedArray
      };
      return returnValue;
    },
    async return() {
      cancelled = true;
      return { done: true, value: void 0 };
    }
  };
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          buffer.push(encoder.encode(doctype));
        }
      }
      if (chunk instanceof Response) {
        throw new AstroError(ResponseSentError);
      }
      const bytes = chunkToByteArray(result, chunk);
      if (bytes.length > 0) {
        buffer.push(bytes);
        next.resolve();
        next = promiseWithResolvers();
      }
    }
  };
  const renderPromise = templateResult.render(destination);
  renderPromise.then(() => {
    next.resolve();
  }).catch((err) => {
    error2 = err;
    next.resolve();
  });
  return {
    [Symbol.asyncIterator]() {
      return iterator;
    }
  };
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
function guessRenderers(componentUrl) {
  const extname = componentUrl?.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
function removeStaticAstroSlot(html, supportsAstroStaticSlot = true) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props, propsWithoutTransitionAttributes } = extractDirectives(
    _props,
    clientDirectives
  );
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r2) => r2.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r2 of renderers2) {
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children)) {
            renderer = r2;
            break;
          }
        } catch (e) {
          error2 ??= e;
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = metadata.componentUrl?.split(".").pop();
      renderer = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...NoClientOnlyHint,
        message: NoClientOnlyHint.message(metadata.displayName),
        hint: NoClientOnlyHint.hint(
          probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r2) => probableRendererNames.includes(r2.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          propsWithoutTransitionAttributes,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots?.fallback);
    } else {
      performance.now();
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        propsWithoutTransitionAttributes,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...NoClientEntrypoint,
      message: NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk) {
        if (chunk instanceof Response)
          return;
        html += chunkToString(result, chunk);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || renderer?.name === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(removeStaticAstroSlot(html, renderer?.ssr?.supportsAstroStaticSlot))
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = renderer?.ssr?.supportsAstroStaticSlot ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
    island.children += `<!--astro:end-->`;
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write(createRenderInstruction({ type: "directive", hydration }));
      if (hydration.directive !== "only" && renderer?.ssr.renderHydrationScript) {
        destination.write(
          createRenderInstruction({
            type: "renderer-hydration-script",
            rendererName: renderer.name,
            render: renderer.ssr.renderHydrationScript
          })
        );
      }
      const renderedElement = renderElement$1("astro-island", island, false);
      destination.write(markHTMLString(renderedElement));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots?.default);
  return {
    render(destination) {
      if (children == null)
        return;
      destination.write(children);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return {
    async render(destination) {
      await instance.render(destination);
    }
  };
}
async function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    Component = await Component;
  }
  if (isFragmentComponent(Component)) {
    return await renderFragmentComponent(result, slots);
  }
  props = normalizeProps(props);
  if (isHTMLComponent(Component)) {
    return await renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return renderAstroComponent(result, displayName, Component, props, slots);
  }
  return await renderFrameworkComponent(result, displayName, Component, props, slots);
}
function normalizeProps(props) {
  if (props["class:list"] !== void 0) {
    const value = props["class:list"];
    delete props["class:list"];
    props["class"] = clsx(props["class"], value);
    if (props["class"] === "") {
      delete props["class"];
    }
  }
  return props;
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (nonAstroPageNeedsHeadInjection(Component)) {
    for (const headChunk of maybeRenderHead()) {
      head += chunkToString(result, headChunk);
    }
  }
  try {
    const destination = {
      write(chunk) {
        if (isPage && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!result.partial && !/<!doctype html/i.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk instanceof Response)
          return;
        str += chunkToString(result, chunk);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    await renderInstance.render(destination);
  } catch (e) {
    if (AstroError.is(e) && !e.loc) {
      e.setLocation({
        file: route?.component
      });
    }
    throw e;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!pageComponent?.[needsHeadRenderingSymbol];
}
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2?.[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
async function renderPage(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    const str = await renderComponentToString(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      {},
      true,
      route
    );
    const bytes = encoder.encode(str);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
  let body;
  if (streaming) {
    if (isNode) {
      const nodeBody = await renderToAsyncIterable(
        result,
        componentFactory,
        props,
        children,
        true,
        route
      );
      body = nodeBody;
    } else {
      body = await renderToReadableStream(result, componentFactory, props, children, true, route);
    }
  } else {
    body = await renderToString(result, componentFactory, props, children, true, route);
  }
  if (body instanceof Response)
    return body;
  const init2 = result.response;
  const headers = new Headers(init2.headers);
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  if (route?.component.endsWith(".md")) {
    headers.set("Content-Type", "text/html; charset=utf-8");
  }
  const response = new Response(body, { ...init2, headers });
  return response;
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
async function callMiddleware(onRequest2, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest2(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function sequence(...handlers2) {
  const filtered = handlers2.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}
function defineMiddleware(fn) {
  return fn;
}
function pathnameHasLocale(pathname, locales) {
  const segments = pathname.split("/");
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function createI18nMiddleware(i18n, base, trailingSlash, buildFormat) {
  if (!i18n)
    return (_, next) => next();
  const prefixAlways = (url, response, context) => {
    if (url.pathname === base + "/" || url.pathname === base) {
      if (shouldAppendForwardSlash(trailingSlash, buildFormat)) {
        return context.redirect(`${appendForwardSlash(joinPaths(base, i18n.defaultLocale))}`);
      } else {
        return context.redirect(`${joinPaths(base, i18n.defaultLocale)}`);
      }
    } else if (!pathnameHasLocale(url.pathname, i18n.locales)) {
      return notFound(response);
    }
    return void 0;
  };
  const prefixOtherLocales = (url, response) => {
    let pathnameContainsDefaultLocale = false;
    for (const segment of url.pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(i18n.defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = url.pathname.replace(`/${i18n.defaultLocale}`, "");
      response.headers.set("Location", newLocation);
      return notFound(response);
    }
    return void 0;
  };
  const prefixAlwaysNoRedirect = (url, response) => {
    const isRoot = url.pathname === base + "/" || url.pathname === base;
    if (!(isRoot || pathnameHasLocale(url.pathname, i18n.locales))) {
      return notFound(response);
    }
    return void 0;
  };
  return async (context, next) => {
    const response = await next();
    const type = response.headers.get(ROUTE_TYPE_HEADER);
    if (type !== "page" && type !== "fallback") {
      return response;
    }
    const { url, currentLocale } = context;
    const { locales, defaultLocale, fallback, strategy } = i18n;
    switch (i18n.strategy) {
      case "domains-prefix-other-locales": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixOtherLocales(url, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-other-locales": {
        const result = prefixOtherLocales(url, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always-no-redirect": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlwaysNoRedirect(url, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-always-no-redirect": {
        const result = prefixAlwaysNoRedirect(url, response);
        if (result) {
          return result;
        }
        break;
      }
      case "pathname-prefix-always": {
        const result = prefixAlways(url, response, context);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlways(url, response, context);
          if (result) {
            return result;
          }
        }
        break;
      }
    }
    if (response.status >= 300 && fallback) {
      const fallbackKeys = i18n.fallback ? Object.keys(i18n.fallback) : [];
      const segments = url.pathname.split("/");
      const urlLocale = segments.find((segment) => {
        for (const locale of locales) {
          if (typeof locale === "string") {
            if (locale === segment) {
              return true;
            }
          } else if (locale.path === segment) {
            return true;
          }
        }
        return false;
      });
      if (urlLocale && fallbackKeys.includes(urlLocale)) {
        const fallbackLocale = fallback[urlLocale];
        const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
        let newPathname;
        if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
          newPathname = url.pathname.replace(`/${urlLocale}`, ``);
        } else {
          newPathname = url.pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
        }
        return context.redirect(newPathname);
      }
    }
    return response;
  };
}
function notFound(response) {
  if (response.headers.get(REROUTE_DIRECTIVE_HEADER) === "no")
    return response;
  return new Response(null, {
    status: 404,
    headers: response.headers
  });
}
function localeHasntDomain(i18n, currentLocale) {
  for (const domainLocale of Object.values(i18n.domainLookupTable)) {
    if (domainLocale === currentLocale) {
      return false;
    }
  }
  return true;
}
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logger, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    if (value !== void 0) {
      acc[key] = typeof value === "string" ? trimSlashes(value) : value.toString();
    }
    return acc;
  }, {});
  return JSON.stringify(route.generate(validatedParams));
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = correctIndexRoute(routeMatch.generate({ ...params }));
      const next = pageNum === lastPage ? void 0 : correctIndexRoute(routeMatch.generate({ ...params, page: String(pageNum + 1) }));
      const prev = pageNum === 1 ? void 0 : correctIndexRoute(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        })
      );
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev }
          }
        }
      };
    });
    return result;
  };
}
function correctIndexRoute(route) {
  if (route === "") {
    return "/";
  }
  return route;
}
async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  logger,
  ssr
}) {
  const cached = routeCache.get(route);
  if (!mod) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route)
  });
  validateGetStaticPathsResult(staticPaths, logger, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
function findPathItemByKey(staticPaths, params, route, logger) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
async function getProps(opts) {
  const { logger, mod, routeData: route, routeCache, pathname, serverLike } = opts;
  if (!route || route.pathname) {
    return {};
  }
  if (routeIsRedirect(route) || routeIsFallback(route) || route.component === DEFAULT_404_COMPONENT) {
    return {};
  }
  const params = getParams(route, pathname);
  if (mod) {
    validatePrerenderEndpointCollision(route, mod, params);
  }
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    logger,
    ssr: serverLike
  });
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger);
  if (!matchedStaticPath && (serverLike ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return props;
}
function getParams(route, pathname) {
  if (!route.params.length)
    return {};
  const paramsMatch = route.pattern.exec(decodeURIComponent(pathname));
  if (!paramsMatch)
    return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}
function getFunctionExpression(slot) {
  if (!slot)
    return;
  if (slot.expressions?.length !== 1)
    return;
  return slot.expressions[0];
}
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  if (!assetsPrefix)
    return "";
  if (typeof assetsPrefix === "string")
    return assetsPrefix;
  const dotLessFileExtension = fileExtension2.slice(1);
  if (assetsPrefix[dotLessFileExtension]) {
    return assetsPrefix[dotLessFileExtension];
  }
  return assetsPrefix.fallback;
}
function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    const pf = getAssetsPrefix(fileExtension(href), assetsPrefix);
    return joinPaths(pf, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}
function ensure404Route(manifest2) {
  if (!manifest2.routes.some((route) => route.route === "/404")) {
    manifest2.routes.push({
      component: DEFAULT_404_COMPONENT,
      generate: () => "",
      params: [],
      pattern: /\/404/,
      prerender: false,
      segments: [],
      type: "page",
      route: "/404",
      fallbackRoutes: [],
      isIndex: false
    });
  }
  return manifest2;
}
function matchRoute(pathname, manifest2) {
  const decodedPathname = decodeURI(pathname);
  return manifest2.routes.find((route) => {
    return route.pattern.test(decodedPathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(decodedPathname));
  });
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}
function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src))
    return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}
async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error2) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await Promise.resolve().then(() => noop).catch((e) => {
      const error2 = new AstroError(InvalidImageService);
      error2.cause = e;
      throw error2;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig2) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig2) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig2) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig2);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig2),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig2) : {}
  };
}
async function loadRemoteImage(src) {
  try {
    const res = await fetch(src);
    if (!res.ok) {
      return void 0;
    }
    return await res.arrayBuffer();
  } catch (err) {
    return void 0;
  }
}
var renderers, ClientAddressNotAvailable, StaticClientAddressNotAvailable, NoMatchingStaticPathFound, OnlyResponseCanBeReturned, MissingMediaQueryDirective, NoMatchingRenderer, NoClientEntrypoint, NoClientOnlyHint, InvalidGetStaticPathsEntry, InvalidGetStaticPathsReturn, GetStaticPathsExpectedParams, GetStaticPathsInvalidRouteParam, GetStaticPathsRequired, ReservedSlotName, NoMatchingImport, InvalidComponentArgs, PageNumberParamNotFound, ImageMissingAlt, InvalidImageService, MissingImageDimension, FailedToFetchRemoteImageDimensions, UnsupportedImageFormat, UnsupportedImageConversion, PrerenderDynamicEndpointPathCollide, ExpectedImage, ExpectedImageOptions, IncompatibleDescriptorOptions, ResponseSentError, MiddlewareNoDataOrNextCalled, MiddlewareNotAResponse, LocalsNotAnObject, AstroResponseHeadersReassigned, LocalImageUsedWrongly, AstroGlobUsedOutside, AstroGlobNoMatch, AstroError, Unreachable, ASTRO_VERSION, REROUTE_DIRECTIVE_HEADER, ROUTE_TYPE_HEADER, DEFAULT_404_COMPONENT, REROUTABLE_STATUS_CODES, clientAddressSymbol, clientLocalsSymbol, responseSentSymbol$1, DELETED_EXPIRATION, DELETED_VALUE, responseSentSymbol, AstroCookie, AstroCookies, astroCookiesSymbol, dateTimeFormat, levels, Logger, AstroIntegrationLogger, consoleLogDestination, RedirectComponentInstance, RedirectSinglePageBuiltModule, escapeHTML, HTMLString, markHTMLString, AstroJSX, RenderInstructionSymbol, PROP_TYPE, transitionDirectivesToCopyOnIsland, dictionary, binary, headAndContentSym, astro_island_prebuilt_default, ISLAND_STYLES, voidElementNames, htmlBooleanAttributes, htmlEnumAttributes, svgEnumAttributes, STATIC_DIRECTIVES, toIdent, toAttributeString, kebab, toStyleString, isNode, uniqueElements, slotString, SlotString, Fragment, Renderer, encoder, decoder$1, astroComponentInstanceSym, AstroComponentInstance, renderTemplateResultSym, RenderTemplateResult, DOCTYPE_EXP, needsHeadRenderingSymbol, rendererAliases, ASTRO_SLOT_EXP, ASTRO_STATIC_SLOT_EXP, ClientOnlyPlaceholder, Skip, originalConsoleError, consoleFilterRefs, VALID_PARAM_TYPES, RouteCache, Pipeline, Slots, RenderContext, AppPipeline, _manifest, _manifestData, _logger, _baseWithoutTrailingSlash, _pipeline, _adapterLogger, _renderOptionsDeprecationWarningShown, _createPipeline, createPipeline_fn, _getPathnameFromRequest, getPathnameFromRequest_fn, _computePathnameFromDomain, computePathnameFromDomain_fn, _logRenderOptionsDeprecationWarning, logRenderOptionsDeprecationWarning_fn, _renderError, renderError_fn, _mergeResponses, mergeResponses_fn, _getDefaultStatusCode, getDefaultStatusCode_fn, _getModuleForRoute, getModuleForRoute_fn, _App, App, page, generic___js, VALID_SUPPORTED_FORMATS, DEFAULT_OUTPUT_FORMAT, DEFAULT_HASH_PROPS, baseService, decoder, toUTF8String, toHexString, readInt16LE, readUInt16BE, readUInt16LE, readUInt24LE, readInt32LE, readUInt32BE, readUInt32LE, methods, BMP, TYPE_ICON, SIZE_HEADER$1, SIZE_IMAGE_ENTRY, ICO, TYPE_CURSOR, CUR, DDS, gifRegexp, GIF, brandMap, HEIF, SIZE_HEADER, FILE_LENGTH_OFFSET, ENTRY_LENGTH_OFFSET, ICON_TYPE_SIZE, ICNS, J2C, JP2, EXIF_MARKER, APP1_DATA_SIZE_BYTES, EXIF_HEADER_BYTES, TIFF_BYTE_ALIGN_BYTES, BIG_ENDIAN_BYTE_ALIGN, LITTLE_ENDIAN_BYTE_ALIGN, IDF_ENTRY_BYTES, NUM_DIRECTORY_ENTRIES_BYTES, JPG, KTX, pngSignature, pngImageHeaderChunkName, pngFriedChunkName, PNG, PNMTypes, handlers, PNM, PSD, svgReg, extractorRegExps, INCH_CM, units, unitsReg, SVG, TGA, signatures, TIFF, WEBP, typeHandlers, types, firstBytes, globalOptions, fnv1a52, etag, $$Astro$1, $$Image, $$Astro, $$Picture, imageConfig, outDir, getImage, GET, generic, noopService, noop_default, noop;
var init_renderers = __esm({
  ".wrangler/tmp/pages-txxP7Z/renderers.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_kleur_BcFxsYqz();
    init_path_to_regexp_Xgx1vbKb();
    init_cookie_BTCaQS_K();
    init_astrojs_internal_helpers_YHLPdyNb();
    init_clsx_CNI3IGC6();
    init_astrojs_svelte_DVZoARO6();
    init_mime_D7CWmx_1();
    init_html_escaper_ClQ6UWd1();
    init_cssesc_CJgb_aGe();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    renderers = [Object.assign({ "name": "@astrojs/svelte", "clientEntrypoint": "@astrojs/svelte/client.js", "serverEntrypoint": "@astrojs/svelte/server.js" }, { ssr: _renderer0 })];
    ClientAddressNotAvailable = {
      name: "ClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in current adapter.",
      message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
    };
    StaticClientAddressNotAvailable = {
      name: "StaticClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in static mode.",
      message: "`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information on how to enable SSR."
    };
    NoMatchingStaticPathFound = {
      name: "NoMatchingStaticPathFound",
      title: "No static path found for requested path.",
      message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
      hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
    };
    OnlyResponseCanBeReturned = {
      name: "OnlyResponseCanBeReturned",
      title: "Invalid type returned by Astro page.",
      message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
      hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
    };
    MissingMediaQueryDirective = {
      name: "MissingMediaQueryDirective",
      title: "Missing value for `client:media` directive.",
      message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
    };
    NoMatchingRenderer = {
      name: "NoMatchingRenderer",
      title: "No matching renderer found.",
      message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
      hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`
    };
    NoClientEntrypoint = {
      name: "NoClientEntrypoint",
      title: "No client entrypoint specified in renderer.",
      message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
      hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
    };
    NoClientOnlyHint = {
      name: "NoClientOnlyHint",
      title: "Missing hint on client:only directive.",
      message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
      hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
    };
    InvalidGetStaticPathsEntry = {
      name: "InvalidGetStaticPathsEntry",
      title: "Invalid entry inside getStaticPath's return value",
      message: (entryType) => `Invalid entry returned by getStaticPaths. Expected an object, got \`${entryType}\``,
      hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    InvalidGetStaticPathsReturn = {
      name: "InvalidGetStaticPathsReturn",
      title: "Invalid value returned by getStaticPaths.",
      message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsExpectedParams = {
      name: "GetStaticPathsExpectedParams",
      title: "Missing params property on `getStaticPaths` route.",
      message: "Missing or empty required `params` property on `getStaticPaths` route.",
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsInvalidRouteParam = {
      name: "GetStaticPathsInvalidRouteParam",
      title: "Invalid value for `getStaticPaths` route parameter.",
      message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
      hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsRequired = {
      name: "GetStaticPathsRequired",
      title: "`getStaticPaths()` function required for dynamic routes.",
      message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
      hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` or \`output: "hybrid"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
    };
    ReservedSlotName = {
      name: "ReservedSlotName",
      title: "Invalid slot name.",
      message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
    };
    NoMatchingImport = {
      name: "NoMatchingImport",
      title: "No import found for component.",
      message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
      hint: "Please make sure the component is properly imported."
    };
    InvalidComponentArgs = {
      name: "InvalidComponentArgs",
      title: "Invalid component arguments.",
      message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
      hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
    };
    PageNumberParamNotFound = {
      name: "PageNumberParamNotFound",
      title: "Page number param not found.",
      message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
      hint: "Rename your file to `[page].astro` or `[...page].astro`."
    };
    ImageMissingAlt = {
      name: "ImageMissingAlt",
      title: 'Image missing required "alt" property.',
      message: 'Image missing "alt" property. "alt" text is required to describe important images on the page.',
      hint: 'Use an empty string ("") for decorative images.'
    };
    InvalidImageService = {
      name: "InvalidImageService",
      title: "Error while loading image service.",
      message: "There was an error loading the configured image service. Please see the stack trace for more information."
    };
    MissingImageDimension = {
      name: "MissingImageDimension",
      title: "Missing image dimensions",
      message: (missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are required unless in order to avoid CLS.`,
      hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."
    };
    FailedToFetchRemoteImageDimensions = {
      name: "FailedToFetchRemoteImageDimensions",
      title: "Failed to retrieve remote image dimensions",
      message: (imageURL) => `Failed to get the dimensions for ${imageURL}.`,
      hint: "Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."
    };
    UnsupportedImageFormat = {
      name: "UnsupportedImageFormat",
      title: "Unsupported image format",
      message: (format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(
        ", "
      )} are supported by our image services.`,
      hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
    };
    UnsupportedImageConversion = {
      name: "UnsupportedImageConversion",
      title: "Unsupported image conversion",
      message: "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."
    };
    PrerenderDynamicEndpointPathCollide = {
      name: "PrerenderDynamicEndpointPathCollide",
      title: "Prerendered dynamic endpoint has path collision.",
      message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
      hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m) => `.json` + m)}\``
    };
    ExpectedImage = {
      name: "ExpectedImage",
      title: "Expected src to be an image.",
      message: (src, typeofOptions, fullOptions) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${src}\` (type: \`${typeofOptions}\`).

Full serialized options received: \`${fullOptions}\`.`,
      hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."
    };
    ExpectedImageOptions = {
      name: "ExpectedImageOptions",
      title: "Expected image options.",
      message: (options) => `Expected getImage() parameter to be an object. Received \`${options}\`.`
    };
    IncompatibleDescriptorOptions = {
      name: "IncompatibleDescriptorOptions",
      title: "Cannot set both `densities` and `widths`",
      message: "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
      hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."
    };
    ResponseSentError = {
      name: "ResponseSentError",
      title: "Unable to set response.",
      message: "The response has already been sent to the browser and cannot be altered."
    };
    MiddlewareNoDataOrNextCalled = {
      name: "MiddlewareNoDataOrNextCalled",
      title: "The middleware didn't return a `Response`.",
      message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
    };
    MiddlewareNotAResponse = {
      name: "MiddlewareNotAResponse",
      title: "The middleware returned something that is not a `Response` object.",
      message: "Any data returned from middleware must be a valid `Response` object."
    };
    LocalsNotAnObject = {
      name: "LocalsNotAnObject",
      title: "Value assigned to `locals` is not accepted.",
      message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
      hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
    };
    AstroResponseHeadersReassigned = {
      name: "AstroResponseHeadersReassigned",
      title: "`Astro.response.headers` must not be reassigned.",
      message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
      hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
    };
    LocalImageUsedWrongly = {
      name: "LocalImageUsedWrongly",
      title: "Local images must be imported.",
      message: (imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${imageFilePath}\`.`,
      hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."
    };
    AstroGlobUsedOutside = {
      name: "AstroGlobUsedOutside",
      title: "Astro.glob() used outside of an Astro file.",
      message: (globStr) => `\`Astro.glob(${globStr})\` can only be used in \`.astro\` files. \`import.meta.glob(${globStr})\` can be used instead to achieve a similar result.`,
      hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"
    };
    AstroGlobNoMatch = {
      name: "AstroGlobNoMatch",
      title: "Astro.glob() did not match any files.",
      message: (globStr) => `\`Astro.glob(${globStr})\` did not return any matching files.`,
      hint: "Check the pattern for typos."
    };
    AstroError = class extends Error {
      loc;
      title;
      hint;
      frame;
      type = "AstroError";
      constructor(props, options) {
        const { name, title, message, stack, location, hint, frame } = props;
        super(message, options);
        this.title = title;
        this.name = name;
        if (message)
          this.message = message;
        this.stack = stack ? stack : this.stack;
        this.loc = location;
        this.hint = hint;
        this.frame = frame;
      }
      setLocation(location) {
        this.loc = location;
      }
      setName(name) {
        this.name = name;
      }
      setMessage(message) {
        this.message = message;
      }
      setHint(hint) {
        this.hint = hint;
      }
      setFrame(source, location) {
        this.frame = codeFrame(source, location);
      }
      static is(err) {
        return err.type === "AstroError";
      }
    };
    Unreachable = class extends Error {
      constructor() {
        super(
          "Astro encountered an unexpected line of code.\nIn most cases, this is not your fault, but a bug in astro code.\nIf there isn't one already, please create an issue.\nhttps://astro.build/issues"
        );
      }
    };
    ASTRO_VERSION = "4.5.3";
    REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
    ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
    DEFAULT_404_COMPONENT = "astro-default-404";
    REROUTABLE_STATUS_CODES = [404, 500];
    clientAddressSymbol = Symbol.for("astro.clientAddress");
    clientLocalsSymbol = Symbol.for("astro.locals");
    responseSentSymbol$1 = Symbol.for("astro.responseSent");
    DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
    DELETED_VALUE = "deleted";
    responseSentSymbol = Symbol.for("astro.responseSent");
    AstroCookie = class {
      constructor(value) {
        this.value = value;
      }
      json() {
        if (this.value === void 0) {
          throw new Error(`Cannot convert undefined to an object.`);
        }
        return JSON.parse(this.value);
      }
      number() {
        return Number(this.value);
      }
      boolean() {
        if (this.value === "false")
          return false;
        if (this.value === "0")
          return false;
        return Boolean(this.value);
      }
    };
    AstroCookies = class {
      #request;
      #requestValues;
      #outgoing;
      #consumed;
      constructor(request) {
        this.#request = request;
        this.#requestValues = null;
        this.#outgoing = null;
        this.#consumed = false;
      }
      /**
       * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
       * in a Set-Cookie header added to the response.
       * @param key The cookie to delete
       * @param options Options related to this deletion, such as the path of the cookie.
       */
      delete(key, options) {
        const serializeOptions = {
          expires: DELETED_EXPIRATION
        };
        if (options?.domain) {
          serializeOptions.domain = options.domain;
        }
        if (options?.path) {
          serializeOptions.path = options.path;
        }
        this.#ensureOutgoingMap().set(key, [
          DELETED_VALUE,
          serialize_1(key, DELETED_VALUE, serializeOptions),
          false
        ]);
      }
      /**
       * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
       * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
       * from that set call, overriding any values already part of the request.
       * @param key The cookie to get.
       * @returns An object containing the cookie value as well as convenience methods for converting its value.
       */
      get(key, options = void 0) {
        if (this.#outgoing?.has(key)) {
          let [serializedValue, , isSetValue] = this.#outgoing.get(key);
          if (isSetValue) {
            return new AstroCookie(serializedValue);
          } else {
            return void 0;
          }
        }
        const values = this.#ensureParsed(options);
        if (key in values) {
          const value = values[key];
          return new AstroCookie(value);
        }
      }
      /**
       * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
       * part of the initial request or set via Astro.cookies.set(key)
       * @param key The cookie to check for.
       * @returns
       */
      has(key, options = void 0) {
        if (this.#outgoing?.has(key)) {
          let [, , isSetValue] = this.#outgoing.get(key);
          return isSetValue;
        }
        const values = this.#ensureParsed(options);
        return !!values[key];
      }
      /**
       * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
       * an object it will be stringified via JSON.stringify(value). Additionally you
       * can provide options customizing how this cookie will be set, such as setting httpOnly
       * in order to prevent the cookie from being read in client-side JavaScript.
       * @param key The name of the cookie to set.
       * @param value A value, either a string or other primitive or an object.
       * @param options Options for the cookie, such as the path and security settings.
       */
      set(key, value, options) {
        if (this.#consumed) {
          const warning = new Error(
            "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
          );
          warning.name = "Warning";
          console.warn(warning);
        }
        let serializedValue;
        if (typeof value === "string") {
          serializedValue = value;
        } else {
          let toStringValue = value.toString();
          if (toStringValue === Object.prototype.toString.call(value)) {
            serializedValue = JSON.stringify(value);
          } else {
            serializedValue = toStringValue;
          }
        }
        const serializeOptions = {};
        if (options) {
          Object.assign(serializeOptions, options);
        }
        this.#ensureOutgoingMap().set(key, [
          serializedValue,
          serialize_1(key, serializedValue, serializeOptions),
          true
        ]);
        if (this.#request[responseSentSymbol]) {
          throw new AstroError({
            ...ResponseSentError
          });
        }
      }
      /**
       * Astro.cookies.header() returns an iterator for the cookies that have previously
       * been set by either Astro.cookies.set() or Astro.cookies.delete().
       * This method is primarily used by adapters to set the header on outgoing responses.
       * @returns
       */
      *headers() {
        if (this.#outgoing == null)
          return;
        for (const [, value] of this.#outgoing) {
          yield value[1];
        }
      }
      /**
       * Behaves the same as AstroCookies.prototype.headers(),
       * but allows a warning when cookies are set after the instance is consumed.
       */
      static consume(cookies) {
        cookies.#consumed = true;
        return cookies.headers();
      }
      #ensureParsed(options = void 0) {
        if (!this.#requestValues) {
          this.#parse(options);
        }
        if (!this.#requestValues) {
          this.#requestValues = {};
        }
        return this.#requestValues;
      }
      #ensureOutgoingMap() {
        if (!this.#outgoing) {
          this.#outgoing = /* @__PURE__ */ new Map();
        }
        return this.#outgoing;
      }
      #parse(options = void 0) {
        const raw = this.#request.headers.get("cookie");
        if (!raw) {
          return;
        }
        this.#requestValues = parse_1(raw, options);
      }
    };
    astroCookiesSymbol = Symbol.for("astro.cookies");
    dateTimeFormat = new Intl.DateTimeFormat([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    levels = {
      debug: 20,
      info: 30,
      warn: 40,
      error: 50,
      silent: 90
    };
    if (typeof process !== "undefined") {
      let proc = process;
      if ("argv" in proc && Array.isArray(proc.argv)) {
        if (proc.argv.includes("--verbose"))
          ;
        else if (proc.argv.includes("--silent"))
          ;
        else
          ;
      }
    }
    Logger = class {
      options;
      constructor(options) {
        this.options = options;
      }
      info(label, message, newLine = true) {
        info(this.options, label, message, newLine);
      }
      warn(label, message, newLine = true) {
        warn(this.options, label, message, newLine);
      }
      error(label, message, newLine = true) {
        error(this.options, label, message, newLine);
      }
      debug(label, ...messages) {
        debug(label, ...messages);
      }
      level() {
        return this.options.level;
      }
      forkIntegrationLogger(label) {
        return new AstroIntegrationLogger(this.options, label);
      }
    };
    AstroIntegrationLogger = class {
      options;
      label;
      constructor(logging, label) {
        this.options = logging;
        this.label = label;
      }
      /**
       * Creates a new logger instance with a new label, but the same log options.
       */
      fork(label) {
        return new AstroIntegrationLogger(this.options, label);
      }
      info(message) {
        info(this.options, this.label, message);
      }
      warn(message) {
        warn(this.options, this.label, message);
      }
      error(message) {
        error(this.options, this.label, message);
      }
      debug(message) {
        debug(this.label, message);
      }
    };
    consoleLogDestination = {
      write(event) {
        let dest = console.error;
        if (levels[event.level] < levels["error"]) {
          dest = console.log;
        }
        if (event.label === "SKIP_FORMAT") {
          dest(event.message);
        } else {
          dest(getEventPrefix(event) + " " + event.message);
        }
        return true;
      }
    };
    RedirectComponentInstance = {
      default() {
        return new Response(null, {
          status: 301
        });
      }
    };
    RedirectSinglePageBuiltModule = {
      page: () => Promise.resolve(RedirectComponentInstance),
      onRequest: (_, next) => next(),
      renderers: []
    };
    escapeHTML = escape;
    HTMLString = class extends String {
      get [Symbol.toStringTag]() {
        return "HTMLString";
      }
    };
    markHTMLString = (value) => {
      if (value instanceof HTMLString) {
        return value;
      }
      if (typeof value === "string") {
        return new HTMLString(value);
      }
      return value;
    };
    AstroJSX = "astro:jsx";
    RenderInstructionSymbol = Symbol.for("astro:render");
    PROP_TYPE = {
      Value: 0,
      JSON: 1,
      // Actually means Array
      RegExp: 2,
      Date: 3,
      Map: 4,
      Set: 5,
      BigInt: 6,
      URL: 7,
      Uint8Array: 8,
      Uint16Array: 9,
      Uint32Array: 10
    };
    transitionDirectivesToCopyOnIsland = Object.freeze([
      "data-astro-transition-scope",
      "data-astro-transition-persist",
      "data-astro-transition-persist-props"
    ]);
    dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    binary = dictionary.length;
    headAndContentSym = Symbol.for("astro.headAndContent");
    astro_island_prebuilt_default = `(()=>{var v=Object.defineProperty;var A=(c,s,a)=>s in c?v(c,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[s]=a;var d=(c,s,a)=>(A(c,typeof s!="symbol"?s+"":s,a),a);var u;{let c={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},s=t=>{let[e,n]=t;return e in c?c[e](n):void 0},a=t=>t.map(s),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[e,s(n)]));customElements.get("astro-island")||customElements.define("astro-island",(u=class extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var f;if(!this.hydrator||!this.isConnected)return;let e=(f=this.parentElement)==null?void 0:f.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let n=this.querySelectorAll("astro-slot"),r={},l=this.querySelectorAll("template[data-astro-template]");for(let o of l){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(r[o.getAttribute("data-astro-template")||"default"]=o.innerHTML,o.remove())}for(let o of n){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(r[o.getAttribute("name")||"default"]=o.innerHTML)}let h;try{h=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(o){let i=this.getAttribute("component-url")||"<unknown>",b=this.getAttribute("component-export");throw b&&(i+=\` (export \${b})\`),console.error(\`[hydrate] Error parsing props for component \${i}\`,this.getAttribute("props"),o),o}let p;await this.hydrator(this)(this.Component,h,r,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),n.disconnect(),this.childrenConnectedCallback()},n=new MutationObserver(()=>{var r;((r=this.lastChild)==null?void 0:r.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});n.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),n=this.getAttribute("client");if(Astro[n]===void 0){window.addEventListener(\`astro:\${n}\`,()=>this.start(),{once:!0});return}try{await Astro[n](async()=>{let r=this.getAttribute("renderer-url"),[l,{default:h}]=await Promise.all([import(this.getAttribute("component-url")),r?import(r):()=>()=>{}]),p=this.getAttribute("component-export")||"default";if(!p.includes("."))this.Component=l[p];else{this.Component=l;for(let y of p.split("."))this.Component=this.Component[y]}return this.hydrator=h,this.hydrate},e,this)}catch(r){console.error(\`[astro-island] Error hydrating \${this.getAttribute("component-url")}\`,r)}}attributeChangedCallback(){this.hydrate()}},d(u,"observedAttributes",["props"]),u))}})();`;
    ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
    voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
    htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
    htmlEnumAttributes = /^(?:contenteditable|draggable|spellcheck|value)$/i;
    svgEnumAttributes = /^(?:autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
    STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
    toIdent = (k) => k.trim().replace(/(?!^)\b\w|\s+|\W+/g, (match, index) => {
      if (/\W/.test(match))
        return "";
      return index === 0 ? match : match.toUpperCase();
    });
    toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
    kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    toStyleString = (obj) => Object.entries(obj).filter(([_, v]) => typeof v === "string" && v.trim() || typeof v === "number").map(([k, v]) => {
      if (k[0] !== "-" && k[1] !== "-")
        return `${kebab(k)}:${v}`;
      return `${k}:${v}`;
    }).join(";");
    isNode = typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]";
    uniqueElements = (item, index, all) => {
      const props = JSON.stringify(item.props);
      const children = item.children;
      return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
    };
    slotString = Symbol.for("astro:slot-string");
    SlotString = class extends HTMLString {
      instructions;
      [slotString];
      constructor(content, instructions) {
        super(content);
        this.instructions = instructions;
        this[slotString] = true;
      }
    };
    Fragment = Symbol.for("astro:fragment");
    Renderer = Symbol.for("astro:renderer");
    encoder = new TextEncoder();
    decoder$1 = new TextDecoder();
    astroComponentInstanceSym = Symbol.for("astro.componentInstance");
    AstroComponentInstance = class {
      [astroComponentInstanceSym] = true;
      result;
      props;
      slotValues;
      factory;
      returnValue;
      constructor(result, props, slots, factory) {
        this.result = result;
        this.props = props;
        this.factory = factory;
        this.slotValues = {};
        for (const name in slots) {
          let didRender = false;
          let value = slots[name](result);
          this.slotValues[name] = () => {
            if (!didRender) {
              didRender = true;
              return value;
            }
            return slots[name](result);
          };
        }
      }
      async init(result) {
        if (this.returnValue !== void 0)
          return this.returnValue;
        this.returnValue = this.factory(result, this.props, this.slotValues);
        return this.returnValue;
      }
      async render(destination) {
        if (this.returnValue === void 0) {
          await this.init(this.result);
        }
        let value = this.returnValue;
        if (isPromise(value)) {
          value = await value;
        }
        if (isHeadAndContent(value)) {
          await value.content.render(destination);
        } else {
          await renderChild(destination, value);
        }
      }
    };
    renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
    RenderTemplateResult = class {
      [renderTemplateResultSym] = true;
      htmlParts;
      expressions;
      error;
      constructor(htmlParts, expressions) {
        this.htmlParts = htmlParts;
        this.error = void 0;
        this.expressions = expressions.map((expression) => {
          if (isPromise(expression)) {
            return Promise.resolve(expression).catch((err) => {
              if (!this.error) {
                this.error = err;
                throw err;
              }
            });
          }
          return expression;
        });
      }
      async render(destination) {
        const expRenders = this.expressions.map((exp) => {
          return renderToBufferDestination((bufferDestination) => {
            if (exp || exp === 0) {
              return renderChild(bufferDestination, exp);
            }
          });
        });
        for (let i = 0; i < this.htmlParts.length; i++) {
          const html = this.htmlParts[i];
          const expRender = expRenders[i];
          destination.write(markHTMLString(html));
          if (expRender) {
            await expRender.renderToFinalDestination(destination);
          }
        }
      }
    };
    DOCTYPE_EXP = /<!doctype html/i;
    needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
    rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
    ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
    ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
    ClientOnlyPlaceholder = "astro-client-only";
    Skip = class {
      constructor(vnode) {
        this.vnode = vnode;
        this.count = 0;
      }
      count;
      increment() {
        this.count++;
      }
      haveNoTried() {
        return this.count === 0;
      }
      isCompleted() {
        return this.count > 2;
      }
    };
    __publicField(Skip, "symbol", Symbol("astro:jsx:skip"));
    consoleFilterRefs = 0;
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
    "-0123456789_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
    VALID_PARAM_TYPES = ["string", "number", "undefined"];
    RouteCache = class {
      logger;
      cache = {};
      mode;
      constructor(logger, mode = "production") {
        this.logger = logger;
        this.mode = mode;
      }
      /** Clear the cache. */
      clearAll() {
        this.cache = {};
      }
      set(route, entry) {
        const key = this.key(route);
        if (this.mode === "production" && this.cache[key]?.staticPaths) {
          this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
        }
        this.cache[key] = entry;
      }
      get(route) {
        return this.cache[this.key(route)];
      }
      key(route) {
        return `${route.route}_${route.component}`;
      }
    };
    Pipeline = class {
      constructor(logger, manifest2, mode, renderers2, resolve, serverLike, streaming, adapterName = manifest2.adapterName, clientDirectives = manifest2.clientDirectives, inlinedScripts = manifest2.inlinedScripts, compressHTML = manifest2.compressHTML, i18n = manifest2.i18n, middleware = manifest2.middleware, routeCache = new RouteCache(logger, mode), site = manifest2.site ? new URL(manifest2.site) : void 0) {
        this.logger = logger;
        this.manifest = manifest2;
        this.mode = mode;
        this.renderers = renderers2;
        this.resolve = resolve;
        this.serverLike = serverLike;
        this.streaming = streaming;
        this.adapterName = adapterName;
        this.clientDirectives = clientDirectives;
        this.inlinedScripts = inlinedScripts;
        this.compressHTML = compressHTML;
        this.i18n = i18n;
        this.middleware = middleware;
        this.routeCache = routeCache;
        this.site = site;
        this.internalMiddleware = [
          createI18nMiddleware(i18n, manifest2.base, manifest2.trailingSlash, manifest2.buildFormat)
        ];
      }
      internalMiddleware;
    };
    Slots = class {
      #result;
      #slots;
      #logger;
      constructor(result, slots, logger) {
        this.#result = result;
        this.#slots = slots;
        this.#logger = logger;
        if (slots) {
          for (const key of Object.keys(slots)) {
            if (this[key] !== void 0) {
              throw new AstroError({
                ...ReservedSlotName,
                message: ReservedSlotName.message(key)
              });
            }
            Object.defineProperty(this, key, {
              get() {
                return true;
              },
              enumerable: true
            });
          }
        }
      }
      has(name) {
        if (!this.#slots)
          return false;
        return Boolean(this.#slots[name]);
      }
      async render(name, args = []) {
        if (!this.#slots || !this.has(name))
          return;
        const result = this.#result;
        if (!Array.isArray(args)) {
          this.#logger.warn(
            null,
            `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
          );
        } else if (args.length > 0) {
          const slotValue = this.#slots[name];
          const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
          const expression = getFunctionExpression(component);
          if (expression) {
            const slot = async () => typeof expression === "function" ? expression(...args) : expression;
            return await renderSlotToString(result, slot).then((res) => {
              return res;
            });
          }
          if (typeof component === "function") {
            return await renderJSX(result, component(...args)).then(
              (res) => res != null ? String(res) : res
            );
          }
        }
        const content = await renderSlotToString(result, this.#slots[name]);
        const outHTML = chunkToString(result, content);
        return outHTML;
      }
    };
    RenderContext = class {
      constructor(pipeline, locals, middleware, pathname, request, routeData, status, cookies = new AstroCookies(request), params = getParams(routeData, pathname), url = new URL(request.url)) {
        this.pipeline = pipeline;
        this.locals = locals;
        this.middleware = middleware;
        this.pathname = pathname;
        this.request = request;
        this.routeData = routeData;
        this.status = status;
        this.cookies = cookies;
        this.params = params;
        this.url = url;
      }
      static create({
        locals = {},
        middleware,
        pathname,
        pipeline,
        request,
        routeData,
        status = 200
      }) {
        return new RenderContext(
          pipeline,
          locals,
          sequence(...pipeline.internalMiddleware, middleware ?? pipeline.middleware),
          pathname,
          request,
          routeData,
          status
        );
      }
      /**
       * The main function of the RenderContext.
       *
       * Use this function to render any route known to Astro.
       * It attempts to render a route. A route can be a:
       *
       * - page
       * - redirect
       * - endpoint
       * - fallback
       */
      async render(componentInstance) {
        const { cookies, middleware, pathname, pipeline, routeData } = this;
        const { logger, routeCache, serverLike, streaming } = pipeline;
        const props = await getProps({
          mod: componentInstance,
          routeData,
          routeCache,
          pathname,
          logger,
          serverLike
        });
        const apiContext = this.createAPIContext(props);
        const { type } = routeData;
        const lastNext = type === "endpoint" ? () => renderEndpoint(componentInstance, apiContext, serverLike, logger) : type === "redirect" ? () => renderRedirect(this) : type === "page" ? async () => {
          const result = await this.createResult(componentInstance);
          const response2 = await renderPage(
            result,
            componentInstance?.default,
            props,
            {},
            streaming,
            routeData
          );
          response2.headers.set(ROUTE_TYPE_HEADER, "page");
          if (routeData.route === "/404" || routeData.route === "/500") {
            response2.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
          }
          return response2;
        } : type === "fallback" ? () => new Response(null, { status: 500, headers: { [ROUTE_TYPE_HEADER]: "fallback" } }) : () => {
          throw new Error("Unknown type of route: " + type);
        };
        const response = await callMiddleware(middleware, apiContext, lastNext);
        if (response.headers.get(ROUTE_TYPE_HEADER)) {
          response.headers.delete(ROUTE_TYPE_HEADER);
        }
        attachCookiesToResponse(response, cookies);
        return response;
      }
      createAPIContext(props) {
        const renderContext = this;
        const { cookies, params, pipeline, request, url } = this;
        const generator = `Astro v${ASTRO_VERSION}`;
        const redirect = (path, status = 302) => new Response(null, { status, headers: { Location: path } });
        return {
          cookies,
          get clientAddress() {
            return renderContext.clientAddress();
          },
          get currentLocale() {
            return renderContext.computeCurrentLocale();
          },
          generator,
          get locals() {
            return renderContext.locals;
          },
          // TODO(breaking): disallow replacing the locals object
          set locals(val) {
            if (typeof val !== "object") {
              throw new AstroError(LocalsNotAnObject);
            } else {
              renderContext.locals = val;
              Reflect.set(request, clientLocalsSymbol, val);
            }
          },
          params,
          get preferredLocale() {
            return renderContext.computePreferredLocale();
          },
          get preferredLocaleList() {
            return renderContext.computePreferredLocaleList();
          },
          props,
          redirect,
          request,
          site: pipeline.site,
          url
        };
      }
      async createResult(mod) {
        const { cookies, pathname, pipeline, routeData, status } = this;
        const { clientDirectives, inlinedScripts, compressHTML, manifest: manifest2, renderers: renderers2, resolve } = pipeline;
        const { links, scripts, styles } = await pipeline.headElements(routeData);
        const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest2.componentMetadata;
        const headers = new Headers({ "Content-Type": "text/html" });
        const partial = Boolean(mod.partial);
        const response = {
          status,
          statusText: "OK",
          get headers() {
            return headers;
          },
          // Disallow `Astro.response.headers = new Headers`
          set headers(_) {
            throw new AstroError(AstroResponseHeadersReassigned);
          }
        };
        const result = {
          clientDirectives,
          inlinedScripts,
          componentMetadata,
          compressHTML,
          cookies,
          /** This function returns the `Astro` faux-global */
          createAstro: (astroGlobal, props, slots) => this.createAstro(result, astroGlobal, props, slots),
          links,
          partial,
          pathname,
          renderers: renderers2,
          resolve,
          response,
          scripts,
          styles,
          _metadata: {
            hasHydrationScript: false,
            rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
            hasRenderedHead: false,
            renderedScripts: /* @__PURE__ */ new Set(),
            hasDirectives: /* @__PURE__ */ new Set(),
            headInTree: false,
            extraHead: [],
            propagators: /* @__PURE__ */ new Set()
          }
        };
        return result;
      }
      createAstro(result, astroGlobalPartial, props, slotValues) {
        const renderContext = this;
        const { cookies, locals, params, pipeline, request, url } = this;
        const { response } = result;
        const redirect = (path, status = 302) => {
          if (request[responseSentSymbol$1]) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          return new Response(null, { status, headers: { Location: path } });
        };
        const slots = new Slots(result, slotValues, pipeline.logger);
        const astroGlobalCombined = {
          ...astroGlobalPartial,
          cookies,
          get clientAddress() {
            return renderContext.clientAddress();
          },
          get currentLocale() {
            return renderContext.computeCurrentLocale();
          },
          params,
          get preferredLocale() {
            return renderContext.computePreferredLocale();
          },
          get preferredLocaleList() {
            return renderContext.computePreferredLocaleList();
          },
          props,
          locals,
          redirect,
          request,
          response,
          slots,
          site: pipeline.site,
          url
        };
        return astroGlobalCombined;
      }
      clientAddress() {
        const { pipeline, request } = this;
        if (clientAddressSymbol in request) {
          return Reflect.get(request, clientAddressSymbol);
        }
        if (pipeline.adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(pipeline.adapterName)
          });
        } else {
          throw new AstroError(StaticClientAddressNotAvailable);
        }
      }
      /**
       * API Context may be created multiple times per request, i18n data needs to be computed only once.
       * So, it is computed and saved here on creation of the first APIContext and reused for later ones.
       */
      #currentLocale;
      computeCurrentLocale() {
        const {
          url,
          pipeline: { i18n },
          routeData
        } = this;
        if (!i18n)
          return;
        const { defaultLocale, locales, strategy } = i18n;
        const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
        return this.#currentLocale ??= computeCurrentLocale(routeData.route, locales) ?? computeCurrentLocale(url.pathname, locales) ?? fallbackTo;
      }
      #preferredLocale;
      computePreferredLocale() {
        const {
          pipeline: { i18n },
          request
        } = this;
        if (!i18n)
          return;
        return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
      }
      #preferredLocaleList;
      computePreferredLocaleList() {
        const {
          pipeline: { i18n },
          request
        } = this;
        if (!i18n)
          return;
        return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
      }
    };
    AppPipeline = class extends Pipeline {
      static create({
        logger,
        manifest: manifest2,
        mode,
        renderers: renderers2,
        resolve,
        serverLike,
        streaming
      }) {
        return new AppPipeline(logger, manifest2, mode, renderers2, resolve, serverLike, streaming);
      }
      headElements(routeData) {
        const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
        const links = /* @__PURE__ */ new Set();
        const scripts = /* @__PURE__ */ new Set();
        const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
        for (const script of routeInfo?.scripts ?? []) {
          if ("stage" in script) {
            if (script.stage === "head-inline") {
              scripts.add({
                props: {},
                children: script.children
              });
            }
          } else {
            scripts.add(createModuleScriptElement(script));
          }
        }
        return { links, styles, scripts };
      }
      componentMetadata() {
      }
    };
    _App = class {
      constructor(manifest2, streaming = true) {
        /**
         * Creates a pipeline by reading the stored manifest
         *
         * @param streaming
         * @private
         */
        __privateAdd(this, _createPipeline);
        __privateAdd(this, _getPathnameFromRequest);
        __privateAdd(this, _computePathnameFromDomain);
        __privateAdd(this, _logRenderOptionsDeprecationWarning);
        /**
         * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
         * This also handles pre-rendered /404 or /500 routes
         */
        __privateAdd(this, _renderError);
        __privateAdd(this, _mergeResponses);
        __privateAdd(this, _getDefaultStatusCode);
        __privateAdd(this, _getModuleForRoute);
        __privateAdd(this, _manifest, void 0);
        __privateAdd(this, _manifestData, void 0);
        __privateAdd(this, _logger, new Logger({
          dest: consoleLogDestination,
          level: "info"
        }));
        __privateAdd(this, _baseWithoutTrailingSlash, void 0);
        __privateAdd(this, _pipeline, void 0);
        __privateAdd(this, _adapterLogger, void 0);
        __privateAdd(this, _renderOptionsDeprecationWarningShown, false);
        __privateSet(this, _manifest, manifest2);
        __privateSet(this, _manifestData, ensure404Route({
          routes: manifest2.routes.map((route) => route.routeData)
        }));
        __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _manifest).base));
        __privateSet(this, _pipeline, __privateMethod(this, _createPipeline, createPipeline_fn).call(this, streaming));
        __privateSet(this, _adapterLogger, new AstroIntegrationLogger(
          __privateGet(this, _logger).options,
          __privateGet(this, _manifest).adapterName
        ));
      }
      getAdapterLogger() {
        return __privateGet(this, _adapterLogger);
      }
      set setManifestData(newManifestData) {
        __privateSet(this, _manifestData, newManifestData);
      }
      removeBase(pathname) {
        if (pathname.startsWith(__privateGet(this, _manifest).base)) {
          return pathname.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1);
        }
        return pathname;
      }
      match(request) {
        const url = new URL(request.url);
        if (__privateGet(this, _manifest).assets.has(url.pathname))
          return void 0;
        let pathname = __privateMethod(this, _computePathnameFromDomain, computePathnameFromDomain_fn).call(this, request);
        if (!pathname) {
          pathname = prependForwardSlash(this.removeBase(url.pathname));
        }
        let routeData = matchRoute(pathname, __privateGet(this, _manifestData));
        if (!routeData || routeData.prerender)
          return void 0;
        return routeData;
      }
      async render(request, routeDataOrOptions, maybeLocals) {
        let routeData;
        let locals;
        let clientAddress;
        let addCookieHeader;
        if (routeDataOrOptions && ("addCookieHeader" in routeDataOrOptions || "clientAddress" in routeDataOrOptions || "locals" in routeDataOrOptions || "routeData" in routeDataOrOptions)) {
          if ("addCookieHeader" in routeDataOrOptions) {
            addCookieHeader = routeDataOrOptions.addCookieHeader;
          }
          if ("clientAddress" in routeDataOrOptions) {
            clientAddress = routeDataOrOptions.clientAddress;
          }
          if ("routeData" in routeDataOrOptions) {
            routeData = routeDataOrOptions.routeData;
          }
          if ("locals" in routeDataOrOptions) {
            locals = routeDataOrOptions.locals;
          }
        } else {
          routeData = routeDataOrOptions;
          locals = maybeLocals;
          if (routeDataOrOptions || locals) {
            __privateMethod(this, _logRenderOptionsDeprecationWarning, logRenderOptionsDeprecationWarning_fn).call(this);
          }
        }
        if (locals) {
          if (typeof locals !== "object") {
            __privateGet(this, _logger).error(null, new AstroError(LocalsNotAnObject).stack);
            return __privateMethod(this, _renderError, renderError_fn).call(this, request, { status: 500 });
          }
          Reflect.set(request, clientLocalsSymbol, locals);
        }
        if (clientAddress) {
          Reflect.set(request, clientAddressSymbol, clientAddress);
        }
        if (request.url !== collapseDuplicateSlashes(request.url)) {
          request = new Request(collapseDuplicateSlashes(request.url), request);
        }
        if (!routeData) {
          routeData = this.match(request);
        }
        if (!routeData) {
          return __privateMethod(this, _renderError, renderError_fn).call(this, request, { status: 404 });
        }
        const pathname = __privateMethod(this, _getPathnameFromRequest, getPathnameFromRequest_fn).call(this, request);
        const defaultStatus = __privateMethod(this, _getDefaultStatusCode, getDefaultStatusCode_fn).call(this, routeData, pathname);
        const mod = await __privateMethod(this, _getModuleForRoute, getModuleForRoute_fn).call(this, routeData);
        let response;
        try {
          const renderContext = RenderContext.create({
            pipeline: __privateGet(this, _pipeline),
            locals,
            pathname,
            request,
            routeData,
            status: defaultStatus
          });
          response = await renderContext.render(await mod.page());
        } catch (err) {
          __privateGet(this, _logger).error(null, err.stack || err.message || String(err));
          return __privateMethod(this, _renderError, renderError_fn).call(this, request, { status: 500 });
        }
        if (REROUTABLE_STATUS_CODES.includes(response.status) && response.headers.get(REROUTE_DIRECTIVE_HEADER) !== "no") {
          return __privateMethod(this, _renderError, renderError_fn).call(this, request, {
            response,
            status: response.status
          });
        }
        if (response.headers.has(REROUTE_DIRECTIVE_HEADER)) {
          response.headers.delete(REROUTE_DIRECTIVE_HEADER);
        }
        if (addCookieHeader) {
          for (const setCookieHeaderValue of _App.getSetCookieFromResponse(response)) {
            response.headers.append("set-cookie", setCookieHeaderValue);
          }
        }
        Reflect.set(response, responseSentSymbol$1, true);
        return response;
      }
      setCookieHeaders(response) {
        return getSetCookiesFromResponse(response);
      }
    };
    App = _App;
    _manifest = new WeakMap();
    _manifestData = new WeakMap();
    _logger = new WeakMap();
    _baseWithoutTrailingSlash = new WeakMap();
    _pipeline = new WeakMap();
    _adapterLogger = new WeakMap();
    _renderOptionsDeprecationWarningShown = new WeakMap();
    _createPipeline = new WeakSet();
    createPipeline_fn = function(streaming = false) {
      return AppPipeline.create({
        logger: __privateGet(this, _logger),
        manifest: __privateGet(this, _manifest),
        mode: "production",
        renderers: __privateGet(this, _manifest).renderers,
        resolve: async (specifier) => {
          if (!(specifier in __privateGet(this, _manifest).entryModules)) {
            throw new Error(`Unable to resolve [${specifier}]`);
          }
          const bundlePath = __privateGet(this, _manifest).entryModules[specifier];
          switch (true) {
            case bundlePath.startsWith("data:"):
            case bundlePath.length === 0: {
              return bundlePath;
            }
            default: {
              return createAssetLink(bundlePath, __privateGet(this, _manifest).base, __privateGet(this, _manifest).assetsPrefix);
            }
          }
        },
        serverLike: true,
        streaming
      });
    };
    _getPathnameFromRequest = new WeakSet();
    getPathnameFromRequest_fn = function(request) {
      const url = new URL(request.url);
      const pathname = prependForwardSlash(this.removeBase(url.pathname));
      return pathname;
    };
    _computePathnameFromDomain = new WeakSet();
    computePathnameFromDomain_fn = function(request) {
      let pathname = void 0;
      const url = new URL(request.url);
      if (__privateGet(this, _manifest).i18n && (__privateGet(this, _manifest).i18n.strategy === "domains-prefix-always" || __privateGet(this, _manifest).i18n.strategy === "domains-prefix-other-locales" || __privateGet(this, _manifest).i18n.strategy === "domains-prefix-always-no-redirect")) {
        let host = request.headers.get("X-Forwarded-Host");
        let protocol = request.headers.get("X-Forwarded-Proto");
        if (protocol) {
          protocol = protocol + ":";
        } else {
          protocol = url.protocol;
        }
        if (!host) {
          host = request.headers.get("Host");
        }
        if (host && protocol) {
          host = host.split(":")[0];
          try {
            let locale;
            const hostAsUrl = new URL(`${protocol}//${host}`);
            for (const [domainKey, localeValue] of Object.entries(
              __privateGet(this, _manifest).i18n.domainLookupTable
            )) {
              const domainKeyAsUrl = new URL(domainKey);
              if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
                locale = localeValue;
                break;
              }
            }
            if (locale) {
              pathname = prependForwardSlash(
                joinPaths(normalizeTheLocale(locale), this.removeBase(url.pathname))
              );
              if (url.pathname.endsWith("/")) {
                pathname = appendForwardSlash(pathname);
              }
            }
          } catch (e) {
            __privateGet(this, _logger).error(
              "router",
              `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`
            );
            __privateGet(this, _logger).error("router", `Error: ${e}`);
          }
        }
      }
      return pathname;
    };
    _logRenderOptionsDeprecationWarning = new WeakSet();
    logRenderOptionsDeprecationWarning_fn = function() {
      if (__privateGet(this, _renderOptionsDeprecationWarningShown))
        return;
      __privateGet(this, _logger).warn(
        "deprecated",
        `The adapter ${__privateGet(this, _manifest).adapterName} is using a deprecated signature of the 'app.render()' method. From Astro 4.0, locals and routeData are provided as properties on an optional object to this method. Using the old signature will cause an error in Astro 5.0. See https://github.com/withastro/astro/pull/9199 for more information.`
      );
      __privateSet(this, _renderOptionsDeprecationWarningShown, true);
    };
    _renderError = new WeakSet();
    renderError_fn = async function(request, { status, response: originalResponse, skipMiddleware = false }) {
      const errorRoutePath = `/${status}${__privateGet(this, _manifest).trailingSlash === "always" ? "/" : ""}`;
      const errorRouteData = matchRoute(errorRoutePath, __privateGet(this, _manifestData));
      const url = new URL(request.url);
      if (errorRouteData) {
        if (errorRouteData.prerender) {
          const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
          const statusURL = new URL(
            `${__privateGet(this, _baseWithoutTrailingSlash)}/${status}${maybeDotHtml}`,
            url
          );
          const response2 = await fetch(statusURL.toString());
          const override = { status };
          return __privateMethod(this, _mergeResponses, mergeResponses_fn).call(this, response2, originalResponse, override);
        }
        const mod = await __privateMethod(this, _getModuleForRoute, getModuleForRoute_fn).call(this, errorRouteData);
        try {
          const renderContext = RenderContext.create({
            pipeline: __privateGet(this, _pipeline),
            middleware: skipMiddleware ? (_, next) => next() : void 0,
            pathname: __privateMethod(this, _getPathnameFromRequest, getPathnameFromRequest_fn).call(this, request),
            request,
            routeData: errorRouteData,
            status
          });
          const response2 = await renderContext.render(await mod.page());
          return __privateMethod(this, _mergeResponses, mergeResponses_fn).call(this, response2, originalResponse);
        } catch {
          if (skipMiddleware === false) {
            return __privateMethod(this, _renderError, renderError_fn).call(this, request, {
              status,
              response: originalResponse,
              skipMiddleware: true
            });
          }
        }
      }
      const response = __privateMethod(this, _mergeResponses, mergeResponses_fn).call(this, new Response(null, { status }), originalResponse);
      Reflect.set(response, responseSentSymbol$1, true);
      return response;
    };
    _mergeResponses = new WeakSet();
    mergeResponses_fn = function(newResponse, originalResponse, override) {
      if (!originalResponse) {
        if (override !== void 0) {
          return new Response(newResponse.body, {
            status: override.status,
            statusText: newResponse.statusText,
            headers: newResponse.headers
          });
        }
        return newResponse;
      }
      const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
      try {
        originalResponse.headers.delete("Content-type");
      } catch {
      }
      return new Response(newResponse.body, {
        status,
        statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
        // If you're looking at here for possible bugs, it means that it's not a bug.
        // With the middleware, users can meddle with headers, and we should pass to the 404/500.
        // If users see something weird, it's because they are setting some headers they should not.
        //
        // Although, we don't want it to replace the content-type, because the error page must return `text/html`
        headers: new Headers([
          ...Array.from(newResponse.headers),
          ...Array.from(originalResponse.headers)
        ])
      });
    };
    _getDefaultStatusCode = new WeakSet();
    getDefaultStatusCode_fn = function(routeData, pathname) {
      if (!routeData.pattern.exec(pathname)) {
        for (const fallbackRoute of routeData.fallbackRoutes) {
          if (fallbackRoute.pattern.test(pathname)) {
            return 302;
          }
        }
      }
      const route = removeTrailingForwardSlash(routeData.route);
      if (route.endsWith("/404"))
        return 404;
      if (route.endsWith("/500"))
        return 500;
      return 200;
    };
    _getModuleForRoute = new WeakSet();
    getModuleForRoute_fn = async function(route) {
      if (route.component === DEFAULT_404_COMPONENT) {
        return {
          page: async () => ({ default: () => new Response(null, { status: 404 }) }),
          renderers: []
        };
      }
      if (route.type === "redirect") {
        return RedirectSinglePageBuiltModule;
      } else {
        if (__privateGet(this, _manifest).pageMap) {
          const importComponentInstance = __privateGet(this, _manifest).pageMap.get(route.component);
          if (!importComponentInstance) {
            throw new Error(
              `Unexpectedly unable to find a component instance for route ${route.route}`
            );
          }
          const pageModule = await importComponentInstance();
          return pageModule;
        } else if (__privateGet(this, _manifest).pageModule) {
          const importComponentInstance = __privateGet(this, _manifest).pageModule;
          return importComponentInstance;
        } else {
          throw new Error(
            "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
          );
        }
      }
    };
    /**
     * Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
     * For example,
     * ```ts
     * for (const cookie_ of App.getSetCookieFromResponse(response)) {
     *     const cookie: string = cookie_
     * }
     * ```
     * @param response The response to read cookies from.
     * @returns An iterator that yields key-value pairs as equal-sign-separated strings.
     */
    __publicField(App, "getSetCookieFromResponse", getSetCookiesFromResponse);
    page = () => Promise.resolve().then(() => generic);
    generic___js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      page,
      renderers
    }, Symbol.toStringTag, { value: "Module" }));
    VALID_SUPPORTED_FORMATS = [
      "jpeg",
      "jpg",
      "png",
      "tiff",
      "webp",
      "gif",
      "svg",
      "avif"
    ];
    DEFAULT_OUTPUT_FORMAT = "webp";
    DEFAULT_HASH_PROPS = ["src", "width", "height", "format", "quality"];
    baseService = {
      propertiesToHash: DEFAULT_HASH_PROPS,
      validateOptions(options) {
        if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
          throw new AstroError({
            ...ExpectedImage,
            message: ExpectedImage.message(
              JSON.stringify(options.src),
              typeof options.src,
              JSON.stringify(options, (_, v) => v === void 0 ? null : v)
            )
          });
        }
        if (!isESMImportedImage(options.src)) {
          if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
            throw new AstroError({
              ...LocalImageUsedWrongly,
              message: LocalImageUsedWrongly.message(options.src)
            });
          }
          let missingDimension;
          if (!options.width && !options.height) {
            missingDimension = "both";
          } else if (!options.width && options.height) {
            missingDimension = "width";
          } else if (options.width && !options.height) {
            missingDimension = "height";
          }
          if (missingDimension) {
            throw new AstroError({
              ...MissingImageDimension,
              message: MissingImageDimension.message(missingDimension, options.src)
            });
          }
        } else {
          if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
            throw new AstroError({
              ...UnsupportedImageFormat,
              message: UnsupportedImageFormat.message(
                options.src.format,
                options.src.src,
                VALID_SUPPORTED_FORMATS
              )
            });
          }
          if (options.widths && options.densities) {
            throw new AstroError(IncompatibleDescriptorOptions);
          }
          if (options.src.format === "svg") {
            options.format = "svg";
          }
          if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
            throw new AstroError(UnsupportedImageConversion);
          }
        }
        if (!options.format) {
          options.format = DEFAULT_OUTPUT_FORMAT;
        }
        if (options.width)
          options.width = Math.round(options.width);
        if (options.height)
          options.height = Math.round(options.height);
        return options;
      },
      getHTMLAttributes(options) {
        const { targetWidth, targetHeight } = getTargetDimensions(options);
        const { src, width, height, format, quality, densities, widths, formats, ...attributes } = options;
        return {
          ...attributes,
          width: targetWidth,
          height: targetHeight,
          loading: attributes.loading ?? "lazy",
          decoding: attributes.decoding ?? "async"
        };
      },
      getSrcSet(options) {
        const srcSet = [];
        const { targetWidth } = getTargetDimensions(options);
        const { widths, densities } = options;
        const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
        let imageWidth = options.width;
        let maxWidth = Infinity;
        if (isESMImportedImage(options.src)) {
          imageWidth = options.src.width;
          maxWidth = imageWidth;
        }
        const {
          width: transformWidth,
          height: transformHeight,
          ...transformWithoutDimensions
        } = options;
        const allWidths = [];
        if (densities) {
          const densityValues = densities.map((density) => {
            if (typeof density === "number") {
              return density;
            } else {
              return parseFloat(density);
            }
          });
          const densityWidths = densityValues.sort().map((density) => Math.round(targetWidth * density));
          allWidths.push(
            ...densityWidths.map((width, index) => ({
              maxTargetWidth: Math.min(width, maxWidth),
              descriptor: `${densityValues[index]}x`
            }))
          );
        } else if (widths) {
          allWidths.push(
            ...widths.map((width) => ({
              maxTargetWidth: Math.min(width, maxWidth),
              descriptor: `${width}w`
            }))
          );
        }
        for (const { maxTargetWidth, descriptor } of allWidths) {
          const srcSetTransform = { ...transformWithoutDimensions };
          if (maxTargetWidth !== imageWidth) {
            srcSetTransform.width = maxTargetWidth;
          } else {
            if (options.width && options.height) {
              srcSetTransform.width = options.width;
              srcSetTransform.height = options.height;
            }
          }
          srcSet.push({
            transform: srcSetTransform,
            descriptor,
            attributes: {
              type: `image/${targetFormat}`
            }
          });
        }
        return srcSet;
      },
      getURL(options, imageConfig2) {
        const searchParams = new URLSearchParams();
        if (isESMImportedImage(options.src)) {
          searchParams.append("href", options.src.src);
        } else if (isRemoteAllowed(options.src, imageConfig2)) {
          searchParams.append("href", options.src);
        } else {
          return options.src;
        }
        const params = {
          w: "width",
          h: "height",
          q: "quality",
          f: "format"
        };
        Object.entries(params).forEach(([param, key]) => {
          options[key] && searchParams.append(param, options[key].toString());
        });
        const imageEndpoint = joinPaths("/", "/_image");
        return `${imageEndpoint}?${searchParams}`;
      },
      parseURL(url) {
        const params = url.searchParams;
        if (!params.has("href")) {
          return void 0;
        }
        const transform = {
          src: params.get("href"),
          width: params.has("w") ? parseInt(params.get("w")) : void 0,
          height: params.has("h") ? parseInt(params.get("h")) : void 0,
          format: params.get("f"),
          quality: params.get("q")
        };
        return transform;
      }
    };
    decoder = new TextDecoder();
    toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
    toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
    readInt16LE = (input, offset = 0) => {
      const val = input[offset] + input[offset + 1] * 2 ** 8;
      return val | (val & 2 ** 15) * 131070;
    };
    readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
    readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
    readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
    readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
    readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
    readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
    methods = {
      readUInt16BE,
      readUInt16LE,
      readUInt32BE,
      readUInt32LE
    };
    BMP = {
      validate: (input) => toUTF8String(input, 0, 2) === "BM",
      calculate: (input) => ({
        height: Math.abs(readInt32LE(input, 22)),
        width: readUInt32LE(input, 18)
      })
    };
    TYPE_ICON = 1;
    SIZE_HEADER$1 = 2 + 2 + 2;
    SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
    ICO = {
      validate(input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0)
          return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
      },
      calculate(input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize = getImageSize$1(input, 0);
        if (nbImages === 1)
          return imageSize;
        const imgs = [imageSize];
        for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
          imgs.push(getImageSize$1(input, imageIndex));
        }
        return {
          height: imageSize.height,
          images: imgs,
          width: imageSize.width
        };
      }
    };
    TYPE_CURSOR = 2;
    CUR = {
      validate(input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0)
          return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
      },
      calculate: (input) => ICO.calculate(input)
    };
    DDS = {
      validate: (input) => readUInt32LE(input, 0) === 542327876,
      calculate: (input) => ({
        height: readUInt32LE(input, 12),
        width: readUInt32LE(input, 16)
      })
    };
    gifRegexp = /^GIF8[79]a/;
    GIF = {
      validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
      calculate: (input) => ({
        height: readUInt16LE(input, 8),
        width: readUInt16LE(input, 6)
      })
    };
    brandMap = {
      avif: "avif",
      mif1: "heif",
      msf1: "heif",
      // hief-sequence
      heic: "heic",
      heix: "heic",
      hevc: "heic",
      // heic-sequence
      hevx: "heic"
      // heic-sequence
    };
    HEIF = {
      validate(buffer) {
        const ftype = toUTF8String(buffer, 4, 8);
        const brand = toUTF8String(buffer, 8, 12);
        return "ftyp" === ftype && brand in brandMap;
      },
      calculate(buffer) {
        const metaBox = findBox(buffer, "meta", 0);
        const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
        const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
        if (ispeBox) {
          return {
            height: readUInt32BE(buffer, ispeBox.offset + 16),
            width: readUInt32BE(buffer, ispeBox.offset + 12),
            type: detectBrands(buffer, 8, metaBox.offset)
          };
        }
        throw new TypeError("Invalid HEIF, no size found");
      }
    };
    SIZE_HEADER = 4 + 4;
    FILE_LENGTH_OFFSET = 4;
    ENTRY_LENGTH_OFFSET = 4;
    ICON_TYPE_SIZE = {
      ICON: 32,
      "ICN#": 32,
      // m => 16 x 16
      "icm#": 16,
      icm4: 16,
      icm8: 16,
      // s => 16 x 16
      "ics#": 16,
      ics4: 16,
      ics8: 16,
      is32: 16,
      s8mk: 16,
      icp4: 16,
      // l => 32 x 32
      icl4: 32,
      icl8: 32,
      il32: 32,
      l8mk: 32,
      icp5: 32,
      ic11: 32,
      // h => 48 x 48
      ich4: 48,
      ich8: 48,
      ih32: 48,
      h8mk: 48,
      // . => 64 x 64
      icp6: 64,
      ic12: 32,
      // t => 128 x 128
      it32: 128,
      t8mk: 128,
      ic07: 128,
      // . => 256 x 256
      ic08: 256,
      ic13: 256,
      // . => 512 x 512
      ic09: 512,
      ic14: 512,
      // . => 1024 x 1024
      ic10: 1024
    };
    ICNS = {
      validate: (input) => toUTF8String(input, 0, 4) === "icns",
      calculate(input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER;
        let imageHeader = readImageHeader(input, imageOffset);
        let imageSize = getImageSize(imageHeader[0]);
        imageOffset += imageHeader[1];
        if (imageOffset === fileLength)
          return imageSize;
        const result = {
          height: imageSize.height,
          images: [imageSize],
          width: imageSize.width
        };
        while (imageOffset < fileLength && imageOffset < inputLength) {
          imageHeader = readImageHeader(input, imageOffset);
          imageSize = getImageSize(imageHeader[0]);
          imageOffset += imageHeader[1];
          result.images.push(imageSize);
        }
        return result;
      }
    };
    J2C = {
      // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
      validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
      calculate: (input) => ({
        height: readUInt32BE(input, 12),
        width: readUInt32BE(input, 8)
      })
    };
    JP2 = {
      validate(input) {
        if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
          return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox)
          return false;
        return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
      },
      calculate(input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
          return {
            height: readUInt32BE(input, ihdrBox.offset + 8),
            width: readUInt32BE(input, ihdrBox.offset + 12)
          };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
      }
    };
    EXIF_MARKER = "45786966";
    APP1_DATA_SIZE_BYTES = 2;
    EXIF_HEADER_BYTES = 6;
    TIFF_BYTE_ALIGN_BYTES = 2;
    BIG_ENDIAN_BYTE_ALIGN = "4d4d";
    LITTLE_ENDIAN_BYTE_ALIGN = "4949";
    IDF_ENTRY_BYTES = 12;
    NUM_DIRECTORY_ENTRIES_BYTES = 2;
    JPG = {
      validate: (input) => toHexString(input, 0, 2) === "ffd8",
      calculate(input) {
        input = input.slice(4);
        let orientation;
        let next;
        while (input.length) {
          const i = readUInt16BE(input, 0);
          if (input[i] !== 255) {
            input = input.slice(1);
            continue;
          }
          if (isEXIF(input)) {
            orientation = validateExifBlock(input, i);
          }
          validateInput(input, i);
          next = input[i + 1];
          if (next === 192 || next === 193 || next === 194) {
            const size = extractSize(input, i + 5);
            if (!orientation) {
              return size;
            }
            return {
              height: size.height,
              orientation,
              width: size.width
            };
          }
          input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
      }
    };
    KTX = {
      validate: (input) => {
        const signature = toUTF8String(input, 1, 7);
        return ["KTX 11", "KTX 20"].includes(signature);
      },
      calculate: (input) => {
        const type = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type === "ktx" ? 36 : 20;
        return {
          height: readUInt32LE(input, offset + 4),
          width: readUInt32LE(input, offset),
          type
        };
      }
    };
    pngSignature = "PNG\r\n\n";
    pngImageHeaderChunkName = "IHDR";
    pngFriedChunkName = "CgBI";
    PNG = {
      validate(input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
          let chunkName = toUTF8String(input, 12, 16);
          if (chunkName === pngFriedChunkName) {
            chunkName = toUTF8String(input, 28, 32);
          }
          if (chunkName !== pngImageHeaderChunkName) {
            throw new TypeError("Invalid PNG");
          }
          return true;
        }
        return false;
      },
      calculate(input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
          return {
            height: readUInt32BE(input, 36),
            width: readUInt32BE(input, 32)
          };
        }
        return {
          height: readUInt32BE(input, 20),
          width: readUInt32BE(input, 16)
        };
      }
    };
    PNMTypes = {
      P1: "pbm/ascii",
      P2: "pgm/ascii",
      P3: "ppm/ascii",
      P4: "pbm",
      P5: "pgm",
      P6: "ppm",
      P7: "pam",
      PF: "pfm"
    };
    handlers = {
      default: (lines) => {
        let dimensions = [];
        while (lines.length > 0) {
          const line = lines.shift();
          if (line[0] === "#") {
            continue;
          }
          dimensions = line.split(" ");
          break;
        }
        if (dimensions.length === 2) {
          return {
            height: parseInt(dimensions[1], 10),
            width: parseInt(dimensions[0], 10)
          };
        } else {
          throw new TypeError("Invalid PNM");
        }
      },
      pam: (lines) => {
        const size = {};
        while (lines.length > 0) {
          const line = lines.shift();
          if (line.length > 16 || line.charCodeAt(0) > 128) {
            continue;
          }
          const [key, value] = line.split(" ");
          if (key && value) {
            size[key.toLowerCase()] = parseInt(value, 10);
          }
          if (size.height && size.width) {
            break;
          }
        }
        if (size.height && size.width) {
          return {
            height: size.height,
            width: size.width
          };
        } else {
          throw new TypeError("Invalid PAM");
        }
      }
    };
    PNM = {
      validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
      calculate(input) {
        const signature = toUTF8String(input, 0, 2);
        const type = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
      }
    };
    PSD = {
      validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
      calculate: (input) => ({
        height: readUInt32BE(input, 14),
        width: readUInt32BE(input, 18)
      })
    };
    svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
    extractorRegExps = {
      height: /\sheight=(['"])([^%]+?)\1/,
      root: svgReg,
      viewbox: /\sviewBox=(['"])(.+?)\1/i,
      width: /\swidth=(['"])([^%]+?)\1/
    };
    INCH_CM = 2.54;
    units = {
      in: 96,
      cm: 96 / INCH_CM,
      em: 16,
      ex: 8,
      m: 96 / INCH_CM * 100,
      mm: 96 / INCH_CM / 10,
      pc: 96 / 72 / 12,
      pt: 96 / 72,
      px: 1
    };
    unitsReg = new RegExp(
      // eslint-disable-next-line regexp/prefer-d
      `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
    );
    SVG = {
      // Scan only the first kilo-byte to speed up the check on larger files
      validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
      calculate(input) {
        const root = toUTF8String(input).match(extractorRegExps.root);
        if (root) {
          const attrs = parseAttributes(root[0]);
          if (attrs.width && attrs.height) {
            return calculateByDimensions(attrs);
          }
          if (attrs.viewbox) {
            return calculateByViewbox(attrs, attrs.viewbox);
          }
        }
        throw new TypeError("Invalid SVG");
      }
    };
    TGA = {
      validate(input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
      },
      calculate(input) {
        return {
          height: readUInt16LE(input, 14),
          width: readUInt16LE(input, 12)
        };
      }
    };
    signatures = [
      // '492049', // currently not supported
      "49492a00",
      // Little endian
      "4d4d002a"
      // Big Endian
      // '4d4d002a', // BigTIFF > 4GB. currently not supported
    ];
    TIFF = {
      validate: (input) => signatures.includes(toHexString(input, 0, 4)),
      calculate(input) {
        const isBigEndian = determineEndianness(input) === "BE";
        const ifdBuffer = readIFD(input, isBigEndian);
        const tags = extractTags(ifdBuffer, isBigEndian);
        const width = tags[256];
        const height = tags[257];
        if (!width || !height) {
          throw new TypeError("Invalid Tiff. Missing tags");
        }
        return { height, width };
      }
    };
    WEBP = {
      validate(input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
      },
      calculate(input) {
        const chunkHeader = toUTF8String(input, 12, 16);
        input = input.slice(20, 30);
        if (chunkHeader === "VP8X") {
          const extendedHeader = input[0];
          const validStart = (extendedHeader & 192) === 0;
          const validEnd = (extendedHeader & 1) === 0;
          if (validStart && validEnd) {
            return calculateExtended(input);
          } else {
            throw new TypeError("Invalid WebP");
          }
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
          return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
          return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
      }
    };
    typeHandlers = /* @__PURE__ */ new Map([
      ["bmp", BMP],
      ["cur", CUR],
      ["dds", DDS],
      ["gif", GIF],
      ["heif", HEIF],
      ["icns", ICNS],
      ["ico", ICO],
      ["j2c", J2C],
      ["jp2", JP2],
      ["jpg", JPG],
      ["ktx", KTX],
      ["png", PNG],
      ["pnm", PNM],
      ["psd", PSD],
      ["svg", SVG],
      ["tga", TGA],
      ["tiff", TIFF],
      ["webp", WEBP]
    ]);
    types = Array.from(typeHandlers.keys());
    firstBytes = /* @__PURE__ */ new Map([
      [56, "psd"],
      [66, "bmp"],
      [68, "dds"],
      [71, "gif"],
      [73, "tiff"],
      [77, "tiff"],
      [82, "webp"],
      [105, "icns"],
      [137, "png"],
      [255, "jpg"]
    ]);
    globalOptions = {
      disabledTypes: []
    };
    fnv1a52 = (str) => {
      const len = str.length;
      let i = 0, t0 = 0, v0 = 8997, t1 = 0, v1 = 33826, t2 = 0, v2 = 40164, t3 = 0, v3 = 52210;
      while (i < len) {
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
      }
      return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
    };
    etag = (payload, weak = false) => {
      const prefix = weak ? 'W/"' : '"';
      return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
    };
    $$Astro$1 = createAstro();
    $$Image = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
      Astro2.self = $$Image;
      const props = Astro2.props;
      if (props.alt === void 0 || props.alt === null) {
        throw new AstroError(ImageMissingAlt);
      }
      if (typeof props.width === "string") {
        props.width = parseInt(props.width);
      }
      if (typeof props.height === "string") {
        props.height = parseInt(props.height);
      }
      const image = await getImage(props);
      const additionalAttributes = {};
      if (image.srcSet.values.length > 0) {
        additionalAttributes.srcset = image.srcSet.attribute;
      }
      return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
    }, "C:/Users/aradh/git/MMM/node_modules/.pnpm/astro@4.5.3_@types+node@20.12.7_typescript@5.4.2/node_modules/astro/components/Image.astro", void 0);
    $$Astro = createAstro();
    $$Picture = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
      Astro2.self = $$Picture;
      const defaultFormats = ["webp"];
      const defaultFallbackFormat = "png";
      const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
      const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
      if (props.alt === void 0 || props.alt === null) {
        throw new AstroError(ImageMissingAlt);
      }
      const optimizedImages = await Promise.all(
        formats.map(
          async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
        )
      );
      let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
      if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
        resultFallbackFormat = props.src.format;
      }
      const fallbackImage = await getImage({
        ...props,
        format: resultFallbackFormat,
        widths: props.widths,
        densities: props.densities
      });
      const imgAdditionalAttributes = {};
      const sourceAdditionalAttributes = {};
      if (props.sizes) {
        sourceAdditionalAttributes.sizes = props.sizes;
      }
      if (fallbackImage.srcSet.values.length > 0) {
        imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
      }
      return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
        const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
        return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
      })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
    }, "C:/Users/aradh/git/MMM/node_modules/.pnpm/astro@4.5.3_@types+node@20.12.7_typescript@5.4.2/node_modules/astro/components/Picture.astro", void 0);
    imageConfig = { "service": { "entrypoint": "astro/assets/services/noop", "config": {} }, "domains": [], "remotePatterns": [] };
    outDir = new URL("file:///C:/Users/aradh/git/MMM/dist/");
    new URL("_astro", outDir);
    getImage = async (options) => await getImage$1(options, imageConfig);
    GET = async ({ request }) => {
      try {
        const imageService = await getConfiguredImageService();
        if (!("transform" in imageService)) {
          throw new Error("Configured image service is not a local service");
        }
        const url = new URL(request.url);
        const transform = await imageService.parseURL(url, imageConfig);
        if (!transform?.src) {
          throw new Error("Incorrect transform returned by `parseURL`");
        }
        let inputBuffer = void 0;
        const sourceUrl = isRemotePath(transform.src) ? new URL(transform.src) : new URL(transform.src, url.origin);
        if (isRemotePath(transform.src) && isRemoteAllowed(transform.src, imageConfig) === false) {
          return new Response("Forbidden", { status: 403 });
        }
        inputBuffer = await loadRemoteImage(sourceUrl);
        if (!inputBuffer) {
          return new Response("Not Found", { status: 404 });
        }
        const { data, format } = await imageService.transform(
          new Uint8Array(inputBuffer),
          transform,
          imageConfig
        );
        return new Response(data, {
          status: 200,
          headers: {
            "Content-Type": mime.getType(format) ?? `image/${format}`,
            "Cache-Control": "public, max-age=31536000",
            ETag: etag(data.toString()),
            Date: (/* @__PURE__ */ new Date()).toUTCString()
          }
        });
      } catch (err) {
        console.error("Could not process image request:", err);
        return new Response(`Server Error: ${err}`, { status: 500 });
      }
    };
    generic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      GET
    }, Symbol.toStringTag, { value: "Module" }));
    noopService = {
      ...baseService,
      propertiesToHash: ["src"],
      async transform(inputBuffer, transformOptions) {
        return {
          data: inputBuffer,
          format: transformOptions.format
        };
      }
    };
    noop_default = noopService;
    noop = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: noop_default
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .wrangler/tmp/bundle-aBsPaa/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-aBsPaa/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-txxP7Z/bundledWorker-0.9484543410283153.mjs
init_checked_fetch();
init_modules_watch_stub();
init_renderers();

// .wrangler/tmp/pages-txxP7Z/manifest_BMm5HRHC.mjs
init_checked_fetch();
init_modules_watch_stub();
init_renderers();
init_kleur_BcFxsYqz();
globalThis.process ??= {};
globalThis.process.env ??= {};
var manifest = deserializeManifest({ "adapterName": "@astrojs/cloudflare", "routes": [{ "file": "contact/index.html", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/contact", "isIndex": false, "type": "page", "pattern": "^\\/contact\\/?$", "segments": [[{ "content": "contact", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/contact.astro", "pathname": "/contact", "prerender": true, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "services/index.html", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/services", "isIndex": true, "type": "page", "pattern": "^\\/services\\/?$", "segments": [[{ "content": "services", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/services/index.astro", "pathname": "/services", "prerender": true, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "test/index.html", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/test", "isIndex": false, "type": "page", "pattern": "^\\/test\\/?$", "segments": [[{ "content": "test", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/test.astro", "pathname": "/test", "prerender": true, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "index.html", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/", "isIndex": true, "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "prerender": true, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "endpoint", "isIndex": false, "route": "/_image", "pattern": "^\\/_image$", "segments": [[{ "content": "_image", "dynamic": false, "spread": false }]], "params": [], "component": "node_modules/.pnpm/astro@4.5.3_@types+node@20.12.7_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", "pathname": "/_image", "prerender": false, "fallbackRoutes": [], "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "trailingSlash": "ignore", "compressHTML": true, "componentMetadata": [["C:/Users/aradh/git/MMM/src/pages/contact.astro", { "propagation": "none", "containsHead": true }], ["C:/Users/aradh/git/MMM/src/pages/index.astro", { "propagation": "none", "containsHead": true }], ["C:/Users/aradh/git/MMM/src/pages/services/[slag].astro", { "propagation": "none", "containsHead": true }], ["C:/Users/aradh/git/MMM/src/pages/services/index.astro", { "propagation": "none", "containsHead": true }], ["C:/Users/aradh/git/MMM/src/pages/test.astro", { "propagation": "none", "containsHead": true }]], "renderers": [], "clientDirectives": [["idle", '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'], ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ["media", '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'], ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ["visible", '(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();']], "entryModules": { "\0@astro-renderers": "renderers.mjs", "\0@astrojs-ssr-virtual-entry": "index.js", "\0noop-middleware": "_noop-middleware.mjs", "\0@astrojs-manifest": "manifest_BMm5HRHC.mjs", "\0@astro-page:src/pages/contact@_@astro": "chunks/contact_Cl327dyX.mjs", "\0@astro-page:src/pages/services/[slag]@_@astro": "chunks/_slag__CjYyz7Gk.mjs", "\0@astro-page:src/pages/services/index@_@astro": "chunks/index_Cj3aQiN3.mjs", "\0@astro-page:src/pages/test@_@astro": "chunks/test_CagzJjQM.mjs", "\0@astro-page:src/pages/index@_@astro": "chunks/index_C8tjuS2a.mjs", "C:/Users/aradh/git/MMM/src/data/service/digi-marketing.json": "chunks/digi-marketing_Biv83qku.mjs", "C:/Users/aradh/git/MMM/src/data/service/foodphotography.json": "chunks/foodphotography_CXJFSJfD.mjs", "C:/Users/aradh/git/MMM/src/data/service/photography.json": "chunks/photography_BlBmn8pR.mjs", "C:/Users/aradh/git/MMM/src/data/service/portfolioshoot-.json": "chunks/portfolioshoot-_uajYLE7s.mjs", "C:/Users/aradh/git/MMM/src/data/service/wedding-shoot.json": "chunks/wedding-shoot_CWOkXirB.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of DJI_0559-min.JPG": "chunks/Copy of Copy of DJI_0559-min_Cwx5XhHq.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of DJI_0563-min.JPG": "chunks/Copy of Copy of DJI_0563-min_CSVUsqX8.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of DJI_0567-min.JPG": "chunks/Copy of Copy of DJI_0567-min_IKLPP9JE.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of DJI_0579-min.JPG": "chunks/Copy of Copy of DJI_0579-min_DdCADaNf.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of DJI_0599-min.JPG": "chunks/Copy of Copy of DJI_0599-min_0VFiFhfL.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of DJI_0611-min.JPG": "chunks/Copy of Copy of DJI_0611-min_DG_Q-_C9.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03182-min.jpg": "chunks/Copy of Copy of MKP03182-min_CN1Cn1uU.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03186-min.jpg": "chunks/Copy of Copy of MKP03186-min_DUS5QrNZ.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03187-min.jpg": "chunks/Copy of Copy of MKP03187-min_CGLSyu3X.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03188-min.jpg": "chunks/Copy of Copy of MKP03188-min_CYXjo5Zr.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03190-min.jpg": "chunks/Copy of Copy of MKP03190-min_nyvFP0ij.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03194-min.jpg": "chunks/Copy of Copy of MKP03194-min_D5ZYgpBX.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03229-min.jpg": "chunks/Copy of Copy of MKP03229-min_BpxNzf7K.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03231-min.jpg": "chunks/Copy of Copy of MKP03231-min_oYpTfcUw.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03303-min.jpg": "chunks/Copy of Copy of MKP03303-min_BInCkn3-.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03320-min.jpg": "chunks/Copy of Copy of MKP03320-min_BGqNEtkd.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03321-min.jpg": "chunks/Copy of Copy of MKP03321-min_Dajew-lq.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03327-min.jpg": "chunks/Copy of Copy of MKP03327-min_Bt8rpgL6.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of Copy of MKP03330-min.jpg": "chunks/Copy of Copy of MKP03330-min_DttMqRPx.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of MKP03682-min.jpg": "chunks/Copy of MKP03682-min_CkqMFzpJ.mjs", "C:/Users/aradh/git/MMM/src/assets/ambiance/Copy of MKP03684-min.jpg": "chunks/Copy of MKP03684-min_bx0CkgO6.mjs", "C:/Users/aradh/git/MMM/public/brands/At Ease Logo.png": "chunks/At Ease Logo_BH0arQRz.mjs", "C:/Users/aradh/git/MMM/public/brands/Bhanu_s Academny.png": "chunks/Bhanu_s Academny_T6IcyAs-.mjs", "C:/Users/aradh/git/MMM/public/brands/Logo PNG.png": "chunks/Logo PNG_DoIN2tdh.mjs", "C:/Users/aradh/git/MMM/public/brands/Logo R1.png": "chunks/Logo R1_8UXcQy7J.mjs", "C:/Users/aradh/git/MMM/public/brands/ROUND.png": "chunks/ROUND_nor_ItFF.mjs", "C:/Users/aradh/git/MMM/public/brands/The Hair Studio Logo 02.png": "chunks/The Hair Studio Logo 02_CNBEv3yY.mjs", "C:/Users/aradh/git/MMM/public/brands/panna logo 2.png": "chunks/panna logo 2_Bg4WsK6b.mjs", "/astro/hoisted.js?q=2": "_astro/hoisted.l0sNRNKZ.js", "C:/Users/aradh/git/MMM/src/components/Header.svelte": "_astro/Header.BIWSTSfg.js", "/astro/hoisted.js?q=1": "_astro/hoisted.DP2rzg_V.js", "/astro/hoisted.js?q=0": "_astro/hoisted.DJfhLmFB.js", "@astrojs/svelte/client.js": "_astro/client.Cx1FBVJX.js", "astro:scripts/before-hydration.js": "" }, "inlinedScripts": [], "assets": ["/_astro/Copy of Copy of DJI_0599-min.B8__RHmm.JPG", "/_astro/Copy of Copy of DJI_0559-min.CsXxfoBL.JPG", "/_astro/Copy of Copy of DJI_0567-min.ByFa1k4Z.JPG", "/_astro/Copy of Copy of DJI_0563-min.BaHok6tb.JPG", "/_astro/Copy of Copy of DJI_0611-min.xxLrEDb-.JPG", "/_astro/Copy of Copy of DJI_0579-min.CuS3rji5.JPG", "/_astro/Copy of Copy of MKP03188-min.Crdk_Fy4.jpg", "/_astro/Copy of Copy of MKP03187-min.Bm7-fDhz.jpg", "/_astro/Copy of Copy of MKP03182-min.Dpz0eQ0r.jpg", "/_astro/Copy of Copy of MKP03186-min.WuXzdqXc.jpg", "/_astro/Copy of Copy of MKP03194-min.5U8K0SHG.jpg", "/_astro/Copy of Copy of MKP03190-min.ChbORBCg.jpg", "/_astro/Copy of Copy of MKP03229-min.uhB49wDU.jpg", "/_astro/Copy of MKP03682-min.DxdYNub5.jpg", "/_astro/Copy of Copy of MKP03231-min.Lgdzb_bD.jpg", "/_astro/Copy of Copy of MKP03321-min.C7svR_04.jpg", "/_astro/Copy of Copy of MKP03303-min.BO-uyLjM.jpg", "/_astro/Copy of Copy of MKP03330-min.HN6QaoIk.jpg", "/_astro/Copy of Copy of MKP03320-min.Dj2gnr7C.jpg", "/_astro/Copy of Copy of MKP03327-min.DpQQdNs1.jpg", "/_astro/Copy of MKP03684-min.DJnuLfk7.jpg", "/_astro/Bhanu_s Academny.BhBcIpu6.png", "/_astro/At Ease Logo.CrjEmIn4.png", "/_astro/Logo PNG.BCU-oNiX.png", "/_astro/Logo R1.D3UlaMXE.png", "/_astro/ROUND.Be8_9ipc.png", "/_astro/The Hair Studio Logo 02.Cz2hiUYo.png", "/_astro/imagePlaceholder.DquXY3qs.svg", "/_astro/panna logo 2.gQdK_qI5.png", "/_astro/contact.eMrpWsEC.css", "/arrow.svg", "/drive-download-20240410T083027Z-001.zip", "/favicon.png", "/Hamburger.svg", "/imagePlaceholder.svg", "/logo_black.png", "/logo_white.png", "/logo_white.svg", "/mainBg.mp4", "/personImagePlaceholder.svg", "/Spacer1.jpg", "/brands/At Ease Logo.png", "/brands/Bhanu_s Academny.png", "/brands/Logo PNG.png", "/brands/Logo R1.png", "/brands/panna logo 2.png", "/brands/ROUND.png", "/brands/The Hair Studio Logo 02.png", "/_worker.js/index.js", "/_worker.js/renderers.mjs", "/_worker.js/_noop-middleware.mjs", "/_astro/client.Cx1FBVJX.js", "/_astro/contact.BZxupyi5.css", "/_astro/Header.BIWSTSfg.js", "/_worker.js/chunks/ansi-regex_nxDOIah1.mjs", "/_worker.js/chunks/astrojs_cloudflare_Bz2-lg0M.mjs", "/_worker.js/chunks/astrojs_internal-helpers_YHLPdyNb.mjs", "/_worker.js/chunks/astrojs_svelte_DVZoARO6.mjs", "/_worker.js/chunks/At Ease Logo_BH0arQRz.mjs", "/_worker.js/chunks/Bhanu_s Academny_T6IcyAs-.mjs", "/_worker.js/chunks/clsx_CNI3IGC6.mjs", "/_worker.js/chunks/contact_Cl327dyX.mjs", "/_worker.js/chunks/cookie_BTCaQS-K.mjs", "/_worker.js/chunks/Copy of Copy of DJI_0559-min_Cwx5XhHq.mjs", "/_worker.js/chunks/Copy of Copy of DJI_0563-min_CSVUsqX8.mjs", "/_worker.js/chunks/Copy of Copy of DJI_0567-min_IKLPP9JE.mjs", "/_worker.js/chunks/Copy of Copy of DJI_0579-min_DdCADaNf.mjs", "/_worker.js/chunks/Copy of Copy of DJI_0599-min_0VFiFhfL.mjs", "/_worker.js/chunks/Copy of Copy of DJI_0611-min_DG_Q-_C9.mjs", "/_worker.js/chunks/Copy of Copy of MKP03182-min_CN1Cn1uU.mjs", "/_worker.js/chunks/Copy of Copy of MKP03186-min_DUS5QrNZ.mjs", "/_worker.js/chunks/Copy of Copy of MKP03187-min_CGLSyu3X.mjs", "/_worker.js/chunks/Copy of Copy of MKP03188-min_CYXjo5Zr.mjs", "/_worker.js/chunks/Copy of Copy of MKP03190-min_nyvFP0ij.mjs", "/_worker.js/chunks/Copy of Copy of MKP03194-min_D5ZYgpBX.mjs", "/_worker.js/chunks/Copy of Copy of MKP03229-min_BpxNzf7K.mjs", "/_worker.js/chunks/Copy of Copy of MKP03231-min_oYpTfcUw.mjs", "/_worker.js/chunks/Copy of Copy of MKP03303-min_BInCkn3-.mjs", "/_worker.js/chunks/Copy of Copy of MKP03320-min_BGqNEtkd.mjs", "/_worker.js/chunks/Copy of Copy of MKP03321-min_Dajew-lq.mjs", "/_worker.js/chunks/Copy of Copy of MKP03327-min_Bt8rpgL6.mjs", "/_worker.js/chunks/Copy of Copy of MKP03330-min_DttMqRPx.mjs", "/_worker.js/chunks/Copy of MKP03682-min_CkqMFzpJ.mjs", "/_worker.js/chunks/Copy of MKP03684-min_bx0CkgO6.mjs", "/_worker.js/chunks/cssesc_CJgb_aGe.mjs", "/_worker.js/chunks/digi-marketing_Biv83qku.mjs", "/_worker.js/chunks/emoji-regex_nxDOIah1.mjs", "/_worker.js/chunks/foodphotography_CXJFSJfD.mjs", "/_worker.js/chunks/get-east-asian-width_nxDOIah1.mjs", "/_worker.js/chunks/html-escaper_ClQ6UWd1.mjs", "/_worker.js/chunks/index_C8tjuS2a.mjs", "/_worker.js/chunks/index_Cj3aQiN3.mjs", "/_worker.js/chunks/kleur_BcFxsYqz.mjs", "/_worker.js/chunks/Logo PNG_DoIN2tdh.mjs", "/_worker.js/chunks/Logo R1_8UXcQy7J.mjs", "/_worker.js/chunks/mime_D7CWmx-1.mjs", "/_worker.js/chunks/panna logo 2_Bg4WsK6b.mjs", "/_worker.js/chunks/path-to-regexp_Xgx1vbKb.mjs", "/_worker.js/chunks/photography_BlBmn8pR.mjs", "/_worker.js/chunks/portfolioshoot-_uajYLE7s.mjs", "/_worker.js/chunks/prerender_DOpUd5N6.mjs", "/_worker.js/chunks/ROUND_nor_ItFF.mjs", "/_worker.js/chunks/string-width_nxDOIah1.mjs", "/_worker.js/chunks/strip-ansi_nxDOIah1.mjs", "/_worker.js/chunks/svelte_BCRmTjIV.mjs", "/_worker.js/chunks/test_CagzJjQM.mjs", "/_worker.js/chunks/The Hair Studio Logo 02_CNBEv3yY.mjs", "/_worker.js/chunks/wedding-shoot_CWOkXirB.mjs", "/_worker.js/chunks/_slag__CjYyz7Gk.mjs", "/_worker.js/_astro/At Ease Logo.CrjEmIn4.png", "/_worker.js/_astro/Bhanu_s Academny.BhBcIpu6.png", "/_worker.js/_astro/contact.eMrpWsEC.css", "/_worker.js/_astro/Copy of Copy of DJI_0559-min.CsXxfoBL.JPG", "/_worker.js/_astro/Copy of Copy of DJI_0563-min.BaHok6tb.JPG", "/_worker.js/_astro/Copy of Copy of DJI_0567-min.ByFa1k4Z.JPG", "/_worker.js/_astro/Copy of Copy of DJI_0579-min.CuS3rji5.JPG", "/_worker.js/_astro/Copy of Copy of DJI_0599-min.B8__RHmm.JPG", "/_worker.js/_astro/Copy of Copy of DJI_0611-min.xxLrEDb-.JPG", "/_worker.js/_astro/Copy of Copy of MKP03182-min.Dpz0eQ0r.jpg", "/_worker.js/_astro/Copy of Copy of MKP03186-min.WuXzdqXc.jpg", "/_worker.js/_astro/Copy of Copy of MKP03187-min.Bm7-fDhz.jpg", "/_worker.js/_astro/Copy of Copy of MKP03188-min.Crdk_Fy4.jpg", "/_worker.js/_astro/Copy of Copy of MKP03190-min.ChbORBCg.jpg", "/_worker.js/_astro/Copy of Copy of MKP03194-min.5U8K0SHG.jpg", "/_worker.js/_astro/Copy of Copy of MKP03229-min.uhB49wDU.jpg", "/_worker.js/_astro/Copy of Copy of MKP03231-min.Lgdzb_bD.jpg", "/_worker.js/_astro/Copy of Copy of MKP03303-min.BO-uyLjM.jpg", "/_worker.js/_astro/Copy of Copy of MKP03320-min.Dj2gnr7C.jpg", "/_worker.js/_astro/Copy of Copy of MKP03321-min.C7svR_04.jpg", "/_worker.js/_astro/Copy of Copy of MKP03327-min.DpQQdNs1.jpg", "/_worker.js/_astro/Copy of Copy of MKP03330-min.HN6QaoIk.jpg", "/_worker.js/_astro/Copy of MKP03682-min.DxdYNub5.jpg", "/_worker.js/_astro/Copy of MKP03684-min.DJnuLfk7.jpg", "/_worker.js/_astro/imagePlaceholder.DquXY3qs.svg", "/_worker.js/_astro/Logo PNG.BCU-oNiX.png", "/_worker.js/_astro/Logo R1.D3UlaMXE.png", "/_worker.js/_astro/panna logo 2.gQdK_qI5.png", "/_worker.js/_astro/ROUND.Be8_9ipc.png", "/_worker.js/_astro/The Hair Studio Logo 02.Cz2hiUYo.png", "/contact/index.html", "/services/index.html", "/test/index.html", "/index.html"], "buildFormat": "directory" });

// .wrangler/tmp/pages-txxP7Z/chunks/astrojs_cloudflare_Bz2-lg0M.mjs
init_checked_fetch();
init_modules_watch_stub();
init_renderers();
globalThis.process ??= {};
globalThis.process.env ??= {};
function createExports(manifest2) {
  const app = new App(manifest2);
  const fetch2 = async (request, env, context) => {
    const { pathname } = new URL(request.url);
    if (manifest2.assets.has(pathname)) {
      return env.ASSETS.fetch(request.url.replace(/\.html$/, ""));
    }
    const routeData = app.match(request);
    if (!routeData) {
      const asset = await env.ASSETS.fetch(request.url.replace(/index.html$/, "").replace(/\.html$/, ""));
      if (asset.status !== 404) {
        return asset;
      }
    }
    Reflect.set(request, Symbol.for("astro.clientAddress"), request.headers.get("cf-connecting-ip"));
    process.env.ASTRO_STUDIO_APP_TOKEN ??= (() => {
      if (typeof env.ASTRO_STUDIO_APP_TOKEN === "string") {
        return env.ASTRO_STUDIO_APP_TOKEN;
      }
    })();
    const locals = {
      runtime: {
        env,
        cf: request.cf,
        caches,
        ctx: {
          waitUntil: (promise) => context.waitUntil(promise),
          passThroughOnException: () => context.passThroughOnException()
        }
      }
    };
    const response = await app.render(request, { routeData, locals });
    if (app.setCookieHeaders) {
      for (const setCookieHeader of app.setCookieHeaders(response)) {
        response.headers.append("Set-Cookie", setCookieHeader);
      }
    }
    return response;
  };
  return { default: { fetch: fetch2 } };
}
var serverEntrypointModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: "Module" }));

// .wrangler/tmp/pages-txxP7Z/_noop-middleware.mjs
init_checked_fetch();
init_modules_watch_stub();
globalThis.process ??= {};
globalThis.process.env ??= {};
var onRequest = (_, next) => next();

// .wrangler/tmp/pages-txxP7Z/bundledWorker-0.9484543410283153.mjs
globalThis.process ??= {};
globalThis.process.env ??= {};
var _page0 = () => Promise.resolve().then(() => (init_renderers(), renderers_exports)).then((n) => n.h);
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@4.5.3_@types+node@20.12.7_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0]
]);
var _manifest2 = Object.assign(manifest, {
  pageMap,
  renderers,
  middleware: onRequest
});
var _args = void 0;
var _exports = createExports(_manifest2);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest2, _args);
}

// ../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// ../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error2 = reduceError(e);
    return Response.json(error2, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-aBsPaa/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  ...void 0 ?? [],
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = __astrojsSsrVirtualEntry;

// ../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-aBsPaa/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
  pageMap
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! https://mths.be/cssesc v3.0.0 by @mathias */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//# sourceMappingURL=bundledWorker-0.9484543410283153.js.map
