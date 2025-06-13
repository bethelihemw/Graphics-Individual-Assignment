# 3D Product Viewer

A simple 3D product viewer built with Three.js that allows you to view and interact with a 3D model.

## Features
- Interactive 3D model viewing
- Part selection and highlighting
- Realistic shadows and lighting
- Responsive design
- Mouse controls for rotation and zoom

## Setup

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

2. Open the project folder in VS Code.

3. Install dependencies by running this command in the terminal:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. The application should automatically open in your default browser. If it doesn't, open:
   ```
   http://localhost:8080
   ```

## Controls
- Left click to select/deselect parts
- Left click and drag to rotate the view
- Right click and drag to pan
- Scroll wheel to zoom in/out

## File Structure
- `index.html` - Main HTML file
- `style.css` - Styling
- `main.js` - Main application entry point
- `scripts/` - Contains all the JavaScript modules
  - `initScene.js` - Sets up the 3D scene
  - `createProduct.js` - Creates the 3D model
  - `addLighting.js` - Sets up lighting
  - `interaction.js` - Handles user interaction 