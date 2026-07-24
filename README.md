# Transformando Figma em código

1. Copie o componente no Figma como SVG (selecione componente -> botão direito -> "Copy/Paste as" -> "Copy as SVG").
2. Cole o SVG no SVGR (https://react-svgr.com/playground/?native=true) com o React Native selecionado. Então, copie o código gerado pelo site (SVG adaptado para o React Native).
3. Faça correções necessárias.
3.5: Elementos não existentes no react-native:
         filter
         <feFlood>
         <feBlend>
         <feOffset>
         <feGaussianBlur>
         <feComposite>
         <feColorMatrix>
         <feDropShadow>
         <clipPath>
         <pattern>
4. Cole o código gerado pelo SVGR como componente (scr/components). 
5. Carregue o componente na página correspondente.

# Componentes

## Caminho: src\components

- start.jsx: tela inicial (figma: Iphone 17 - 12)
- welcome.jsx: bem-vindo (figma: Iphone 17 - 1)

# Páginas

## Caminho: src\app

- index.jsx: tela inicial (componente: start.jsx)
- home.jsx: bem vindo (componente: welcome.jsx)
