From the `/fractalu` directory

## Install Bun
curl -fsSL https://bun.sh/install | bash

## Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

exec /bin/zsh

## Set up NVM
nvm i
nvm use

## Go into FractalU Directory
cd fractalu

## Install Dependencies
bun install

## Set up .env
cp .env.example .env

## Start the Server
npm run dev