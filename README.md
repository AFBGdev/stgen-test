# Resume
This is a project wich resolves a Test for a company.

## Tech Stack
- Vite
- React.js
- TypeScript
- TailwindCss
- pnpm [install if you need it](https://pnpm.io/es/installation)
- Node v20.18.0

## Run project
1. Clone the repository

2. Rename the `.env.template` file to `.env.local` or create following the template

3. Then run:
``` bash
  cd <proyect_clone_path>/stgen-test
  pnpm install
  pnpm run dev
```

> **NOTE:** Both app and API server will run automatically with the `pnpm run dev` command. Keep in mind that the API will be running on port **3000**.

## Change API PORT and URL

If you want to change the port on which the API runs, you must do the following steps:

1. Change the port number into the **`package.json`** file

  > 

2. Update the ENV variable with the new port into the **`.env.local`** file

  >