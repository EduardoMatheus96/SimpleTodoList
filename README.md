# Projeto Simples React Native com TypeScript

Este é um projeto básico de React Native com TypeScript que demonstra conceitos fundamentais como componentes funcionais, hooks e navegação.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js (versão 12 ou superior)
- npm ou yarn
- React Native CLI
- XCode (para iOS) ou Android Studio (para Android)

## Instalação

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

3. Instale as bibliotecas necessárias:
   ```
   npm install @react-navigation/native @react-navigation/stack
   ```
   ou
   ```
   yarn add @react-navigation/native @react-navigation/stack
   ```

## Executando o Projeto

Para iniciar o projeto no iOS:
```
npx react-native run-ios
```

Para iniciar o projeto no Android:
```
npx react-native run-android
```

## Estrutura do Projeto

- `App.tsx`: Componente principal e configuração de navegação
- `src/screens/HomeScreen.tsx`: Tela inicial com um contador e navegação
- `src/screens/DetailsScreen.tsx`: Tela de detalhes que recebe parâmetros

## Conceitos Demonstrados

1. **Componentes Funcionais**: Todas as telas são implementadas como componentes funcionais.
2. **Hooks**: Uso do `useState` para gerenciar o estado do contador na tela inicial.
3. **Navegação**: Utilização do React Navigation para navegar entre telas e passar parâmetros.
4. **TypeScript**: Uso de tipos para props, parâmetros de navegação e route.

## Bibliotecas Utilizadas

- `@react-navigation/native`: Núcleo da biblioteca de navegação
- `@react-navigation/stack`: Implementação de navegação em pilha

Para instalar estas bibliotecas, execute:
```
npm install @react-navigation/native @react-navigation/stack
```
ou
```
yarn add @react-navigation/native @react-navigation/stack
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra uma issue ou envie um pull request com suas sugestões de melhorias.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.