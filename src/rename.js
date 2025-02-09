const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../../'); // Path to your images folder

// Read the contents of the images directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Filter only image files (you can adjust this to check specific extensions)
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file));

  // Loop through the image files and rename them
  imageFiles.forEach((file, index) => {
    const oldFilePath = path.join(imagesDir, file);
    const fileExtension = path.extname(file);
    const newFileName = `image_${index + 1}${fileExtension}`;
    const newFilePath = path.join(imagesDir, newFileName);

    // Rename the file
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        console.log(`${file} renamed to ${newFileName}`);
      }
    });
  });
});
