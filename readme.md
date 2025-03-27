# MERN E-commerce Application (Local Setup)

## User Credentials

### Customer Account  
- **Email**: `demo@demo`  
- **Password**: `demo`  

### Admin Account  
- **Email**: `admin@admin`  
- **Password**: `admin`  

---

## Tech Stack

### Frontend  
- **UI Library**: [Shadcn-UI](https://ui.shadcn.com/)  
- **Framework**: [React](https://vite.dev/) (Vite)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)  

### Backend  
- **Runtime**: [Node.js](https://nodejs.org/)  
- **Framework**: [Express](https://expressjs.com/)  
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)  

### Database  
- **Database**: [MongoDB](https://www.mongodb.com/)  

### Payment Integration  
- **Payment Gateway**: [PayPal](https://developer.paypal.com/)  

---

## Local Installation Guide  

### Step 1: Clone the Repository  
```bash
git clone <repository-url>
cd <repository-folder>
```

### Step 2: Install Dependencies  
- **Backend**:  
  ```bash
  cd Server
  npm install
  ```
- **Frontend**:  
  ```bash
  cd Client
  npm install
  ```

### Step 3: Configure Environment Variables  
- **Backend `.env`**: Create a `.env` file in the `Server` directory with the following keys:  
  ```env
  DBURL=<your-mongodb-connection-string>
  CLOUDINARY_NAME=<your-cloudinary-cloud-name>
  CLOUDINARY_API_KEY=<your-cloudinary-api-key>
  CLOUDINARY_SECRET=<your-cloudinary-api-secret>
  PAYPAL_CLIENT_ID=<your-paypal-client-id>
  PAYPAL_CLIENT_SECRET=<your-paypal-secret-key>
  PORT=5000
  FRONTEND_URL="http://localhost:5173"
  ```

- **Frontend `.env`**: Create a `.env` file in the `Client` directory with the following key:  
  ```env
  VITE_BASEURL_FOR_SERVER="http://localhost:5000"
  ```

### Step 4: Run MongoDB  
Ensure MongoDB is running locally or provide a cloud connection string in your `.env` file.

### Step 5: Start the Backend Server  
```bash
cd Server
npm run dev
```

### Step 6: Start the Frontend Application  
```bash
cd Client
npm run dev
```

### Step 7: Access the Application  
- **Frontend**: [http://localhost:5173](http://localhost:5173)  
- **Backend API**: [http://localhost:5000/](http://localhost:5000/)  

---

## Additional Notes  
- Ensure **Node.js** and **npm** are installed on your system.  
- Replace placeholders in `.env` files with actual credentials and API keys.  
- For production deployment, use a secure method to store environment variables, such as secret managers.  

---

### ❤️ Made with Love by Dinesh  
