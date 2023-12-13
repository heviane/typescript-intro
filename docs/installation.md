# How to use typescript

Instalação local em um projeto Node.
Certifique-se de ter o Node e o npm instalados!

## Conferindo as versões instaladas

`npm -v`
`node -v`
`tsc -v`

## Inicializar um projeto Node

`npm init -y`

Este comando irá iniciar um projeto node e criar o arquivo `package.json` com as configurações padrão.

## Instalar TypeScript

Como dependência de desenvolvimento do projeto:

`npm install --save-dev typescript`

Globalmente:

`ǹpm install -g typescript`

## Configurar TypeScript (Opcional)

`npx tsc --init`

Este comando irá criar o arquivo básico de configuração: `tsconfig.json`

## Compilar Typescript

`npx tsc`

Este comando compilará os arquivos TypeScript (extensão `.ts`) no diretório configurado no seu `tsconfig.json` (ou no diretório raiz se nenhum arquivo de configuração estiver presente).

## Observações

Certifique-se de ajustar suas configurações conforme necessário e de adicionar scripts ao seu `package.json` para facilitar a execução de tarefas relacionadas ao TypeScript no seu projeto.

## References

[https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)
