var p=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function v(e){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];var n=Array.from(typeof e=="string"?[e]:e);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var s=n.reduce(function(t,f){var o=f.match(/\n([\t ]+|(?!\s).)/g);return o?t.concat(o.map(function(u){var r,a;return(a=(r=u.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:0})):t},[]);if(s.length){var c=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");n=n.map(function(t){return t.replace(c,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var d=n[0];return l.forEach(function(t,f){var o=d.match(/(?:^|\n)( *)$/),u=o?o[1]:"",r=t;typeof t=="string"&&t.includes(`
`)&&(r=String(t).split(`
`).map(function(a,g){return g===0?a:""+u+a}).join(`
`)),d+=r+n[f+1]}),d}export{p as c,v as d,h as g};
