# Require+React 

##### Exemplo prático utilizando React com Require.js.
Versões de módulos NPM utilizadas neste exemplo:

 * React-addons/React-DOM: ~0.14.7
 * RequireJS: 2.2.0

Este exemplo mostra como combinar módulos carregados via RequireJS e componentes React.

###  [Clique aqui](https://github.com/) e veja o exemplo.



Os componentes ReactJS são escritos de acordo com o formato JSX.
Veja um exemplo de componente abaixo:

```javascript
var Component = React.createClass({
		render: function(){
			return (
				<div>
					Este é um componente React =)
				</div>
			);
		}
	});
	ReactDOM.render(
		<Component/>, document.querySelector('main')
	);
```




### Referências:

* [npm](https://www.npmjs.com/) para dependências (package.json)
* [require.js](http://requirejs.org/docs/download.html) para carregar os módulos
* [react](https://facebook.github.io/react/) para criação de componentes em JSX
* [jsx-requirejs-plugin](https://github.com/philix/jsx-requirejs-plugin/) torna possível a integração de arquivos JSX e o framework requirejs