This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **use()** hook to async load a resource such as a promise or context
	- it could be used to replace **useEffect()** to fetch data
	- data can be streamed from the server to the client by passing a Promise as a prop from a Server Component to a Client Component.

