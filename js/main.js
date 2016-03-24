requirejs.config({
	baseUrl: "js",
	paths: {
		JSXTransformer: "../vendors/js/JSXTransformer",
		index: 'sections/index',
		about: 'sections/about',
		contact: 'sections/contact',
		indexComponent: 'components/indexComponent',
		aboutComponent: 'components/aboutComponent',
		contactComponent: 'components/contactComponent'
	},
	jsx: {
		fileExtension: '.jsx',
		harmony: true,
		stripTypes: true
	}
});


require(["index"]);