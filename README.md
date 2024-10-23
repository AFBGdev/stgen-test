# Resume
This is a project wich resolves a Test for a company which consists of a shopping cart with React.js and TailwindCSS.

📄[Step-By-Step Doc](https://github.com/AFBGdev/stgen-test/blob/main/step-by-step-doc.md)

![image](https://github.com/user-attachments/assets/0486b521-71a3-4525-88d5-a2d91625e6c7)

![image](https://github.com/user-attachments/assets/8b615604-472e-4db4-9d40-dc09518395ab)

![image](https://github.com/user-attachments/assets/b49f4b8d-8977-4240-b03d-bcfdc9efe6e4)

![image](https://github.com/user-attachments/assets/658cf179-84f5-4e4e-8259-4dd3c218614d)


## Tech Stack
- Vite
- React.js
- TypeScript
- TailwindCSS
- pnpm [install if you need it](https://pnpm.io/es/installation)
- Node v20.18.0

## 🚀 Run project
1. Clone the repository

2. Rename the `.env.template` file to `.env.local` or create following the template

3. Then run:
``` bash
  cd <proyect_clone_path>/stgen-test
  pnpm install
  pnpm run dev
```

  > **NOTE:** Both app and API server will run automatically with the `pnpm run dev` command. Keep in mind that the API will be running on port **3000**.

## 🛜 Change API PORT and URL

If you want to change the port on which the API runs, you must do the following steps:

1. Change the port number into the **`package.json`** file

  > ![port](https://github.com/user-attachments/assets/6eebd516-8bd8-48af-8848-8418d993f13f)


2. Update the ENV variable with the new port into the **`.env.local`** file

  > ![env-port](https://github.com/user-attachments/assets/25e9ee22-d4d1-4de1-b21d-7878af7c0034)
