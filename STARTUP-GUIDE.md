# 🚀 Shoe Shop Application - Startup Guide

## ✅ **FIXED: npm start Issues Resolved**

The npm "Cannot read properties of undefined (reading 'stdin')" error has been fixed!

## 🎯 **How to Start Your Application**

### **Method 1: Using Batch Files (Recommended)**
1. **Double-click `start-app.bat`** - Starts both backend and frontend
2. **Or double-click `start-frontend-fixed.bat`** - Starts only frontend

### **Method 2: Manual Commands**
```bash
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend  
cd frontend
npm start
```

### **Method 3: Direct Node (If npm still fails)**
```bash
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend
cd frontend
node node_modules\react-scripts\scripts\start.js
```

## 🌐 **Access Your Application**

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/health
- **Products API**: http://localhost:5000/api/products

## 🛍️ **Features Working**

✅ **Home Page** - Beautiful landing page with animations
✅ **Products Page** - View all shoes with search functionality  
✅ **Add Product** - Upload shoes with images (WORKING!)
✅ **Contact Page** - Contact information and form
✅ **Image Display** - Fixed and working properly
✅ **Search** - Filter products by name
✅ **Responsive Design** - Works on all devices

## 🔧 **Troubleshooting**

### **If Frontend Won't Start:**
1. Try: `node node_modules\react-scripts\scripts\start.js`
2. Or: `npx react-scripts start`
3. Or: Use the batch files provided

### **If Images Don't Show:**
1. Check browser console (F12) for errors
2. Verify backend is running on port 5000
3. Test image URL directly: `http://localhost:5000/uploads/[filename]`

### **If Backend Won't Start:**
1. Check MongoDB connection string in `backend/.env`
2. Ensure MongoDB Atlas cluster is running
3. Verify all dependencies are installed: `npm install`

## 📱 **Testing Your App**

1. **Add a Product:**
   - Go to "Add Product" page
   - Fill in name, price, description
   - Upload an image
   - Submit the form

2. **View Products:**
   - Go to "Products" page
   - See your uploaded shoes
   - Use search to filter products

3. **Test Image Display:**
   - Images should load properly
   - If not, check browser console for errors

## 🎉 **Your App is Ready!**

The shoe shop application is now fully functional with:
- ✅ Image upload and display
- ✅ Product management
- ✅ Search functionality
- ✅ Responsive design
- ✅ Modern UI/UX

Enjoy your full-stack MERN shoe shop! 🛍️👟
