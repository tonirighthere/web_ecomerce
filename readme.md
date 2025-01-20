# MERN E-commerce Application (Local PC)

## User Credentials

### User Account  
- **Username**: demo@demo  
- **Password**: demo  

### Admin Account  
- **Username**: admin@admin  
- **Password**: admin  

---

## Technologies Used  

### Frontend  
- **UI Library**: Shadcn-UI  
- **Framework**: React (Vite)  
- **Styling**: Tailwind CSS  
- **State Management**: Redux Toolkit  

### Backend  
- **Runtime**: Node.js  
- **Framework**: Express  
- **Image Hosting**: Cloudinary  

### Database  
- **MongoDB**  

### Payment Integration  
- **PayPal**  

---

## How to Run the Application Locally  

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**  
   - For the Backend:  
     ```bash
     cd Server
     npm install
     ```
   - For the Frontend:  
     ```bash
     cd Client
     npm install
     ```

3. **Set Up Environment Variables**  
   - Create a `.env` file in the `backend` folder with the following variables:  
     ```env
     DBURL=<your-mongodb-connection-string>
     CLOUDINARY_NAME=<your-cloudinary-cloud-name>
     CLOUDINARY_API_KEY=<your-cloudinary-api-key>
     CLOUDINARY_SECRET=<your-cloudinary-api-secret>
     PAYPAL_CLIENT_ID=<your-paypal-client-id>
     PORT=5000
     ```


4. **Run the Backend Server**  
   ```bash
   cd Server
   npm run dev
   ```

5. **Run the Frontend Application**  
   ```bash
   cd Client
   npm run dev
   ```

6. **Access the Application**  
   Open your browser and navigate to:  
   - **Frontend**: `http://localhost:5173`  
   - **Backend API**: `http://localhost:5000/api`(Changed)  

---

### Notes  
- Ensure that **MongoDB** is running locally or use a cloud-based instance.  
- Replace placeholders in `.env` files with your actual credentials and API keys. 
- Make Sure That you Have Node and npm Installed in your PC. 
---
Made with Love❤️
