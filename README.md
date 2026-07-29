# Transformando Figma em código

1. Copie o componente no Figma como SVG (selecione componente -> botão direito -> "Copy/Paste as" -> "Copy as SVG").
2. Cole o SVG no SVGR (https://react-svgr.com/playground/?native=true) com o React Native selecionado. Então, copie o código gerado pelo site (SVG adaptado para o React Native).
3. Faça correções necessárias.
3.1: mude as props de <Svg>  *width* e *height* para `width='100%', height='100%'`. Além disso, adicione a prop `viewBox="0 0 704 1524"`
3.5: Elementos não existentes no react-native:
         filter
         feFlood
         feBlend
         feOffset
         feGaussianBlur
         feComposite
         feColorMatrix
         feDropShadow
         clipPath
         pattern
4. Cole o código gerado pelo SVGR como o front-end da página. 

# Páginas

## Caminho: src\app

- index.jsx: tela inicial (figma: Iphone 17 - 12)
- home.jsx: bem vindo (figma: Iphone 17 - 1)
- signup.jsx: cadastro (figma: Iphone 17 - 2)
- signin.jsx: login (figma: Iphone 17 - 3)
- home: home (figma: Iphone 17 - 4)

# Rotas

index.jsx -> /welcome -> welcome.jsx (auto)
welcome.jsx -> /signin -> signin.jsx (login)
welcome.jsx -> /signup -> signup.jsx (cadastro)
signin.jsx -> /home -> home.jsx (logar)
signin.jsx -> /signup -> signup.jsx (Não tem uma conta?)
signup.jsx -> /signin -> signin.jsx (Já tem uma conta?)
signup.jsx -> /home -> home.jsx (cadastro)
pesquisa.jsx -> /produto-pesquisado -> produto-pesquisado.jsx
produto-pesquisados.jsx -> /mercados -> mercados.jsx
produto-pesquisado -> /mapa -> mapa.jsx

barra navegação:

1 (casa) -> /home -> home.jsx
2 (lupa) -> /pesquisa -> pesquisa.jsx
3 (mercado) -> /mercados -> mercados.jsx
4 (carrinho) -> /adicionar -> adicionar.jsx
5 (coração) -> /favoritos -> favoritos.jsx
6 (pessoa) -> /perfil -> perfil.jsx