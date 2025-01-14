/**
 * DOM tree có 3 node chính:
 * 1. Element node
 * 2. Attribute node
 * 3. Text node
 *  */

// console.log({ document });

const myDocument = {
	html: {
		head: {
			title: {
				textNode: "DOM",
			},
		},
		body: {
			h1: {
				textNode: "Tieu de cua web",
			},
			section: {
				h2: {},
			},
		},
	},
};

// console.log(myDocument);

// CRUD = Create Read Update Delete

/** Phương thức truy xuất phần tử của DOM
 *
 */

const h2ElementC1 = document.getElementById("title-1"); // Element/null
const h2ElementC2 = document.getElementsByTagName("h2"); // HTMLCollection
const h2ElementC3 = document.getElementsByClassName("title"); // HTMLCollection
const h2ElementC4 = document.querySelector("section > h2#title-1.title"); // Element/null
const h2ElementC5 = document.querySelectorAll("section > h2#title-1.title"); // NodeList

// console.log(h2ElementC1);
// console.log(h2ElementC2[0]);
// console.log(h2ElementC3[0]);

// for (let i = 0; i < h2ElementC2.length; i++) {
// 	console.log(h2ElementC2[i]);
// }

// for (value of h2ElementC2) {
// 	console.log(value);
// }

// console.log(Array.isArray(h2ElementC2));

// h2ElementC2.map((item) => item);

// h2ElementC2.forEach((item) => {
// 	console.log(item);
// });

// console.log(h2ElementC4);
// console.log(h2ElementC5[0]);

const olElement = document.getElementsByTagName("ol")[0];
console.log(olElement.children); // HTMLCollection
console.log(olElement.childNodes); // NodeList
console.log(olElement.attributes); //NamedNodeMap
console.log(olElement.classList); // DOMTokenList
console.log(olElement.className); // string

/**
 * createElement
 * appendChild
 * removeChild
 * replaceChild
 */

const liElement5 = document.createElement("li");

// liElement5.innerText = "<span>item 5<span>";

// olElement.appendChild(liElement5);
// olElement.removeChild(olElement.children[1]);
olElement.replaceChild(liElement5, olElement.children[0]);

liElement5.innerHTML = `
<strong>Alo</strong>
`;
