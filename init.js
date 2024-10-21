const User = require('./models/user');  // Assuming User model is in 'models/user.js'
const CropImage = require('./models/cropImage');  // Assuming CropImage model is in 'models/cropImage.js'

// Function to add a CropImage for a specific user
 const addCropImageForUser = async (userId, cropImageData) => {
    try {
        // Step 1: Create a new CropImage document
        const newCropImage = new CropImage({
            imageUrl: cropImageData.imageUrl,
            diseased: cropImageData.diseased,
            diseaseName: cropImageData.diseaseName,
            user: userId  // Associate with the user
        });

        // Step 2: Save the new CropImage document
        const savedCropImage = await newCropImage.save();

        // Step 3: Find the user by their ID and push the new CropImage's _id to the cropImages array
        const user = await User.findById(userId);
        if (user) {
            user.cropImages.push(savedCropImage._id);  // Add the new image's ID to the user's cropImages array

            // Step 4: Save the updated user document
            await user.save();

            console.log('CropImage added successfully!');
        } else {
            console.log('User not found.');
        }
    } catch (error) {
        console.error('Error adding crop image:', error);
    }
};

// Assuming you have a user ID and crop image data
 const userId = '67136a637c3f3d846987680b'; // Replace with actual user's ObjectId
 const cropImageData = [
    {
        imageUrl: 'https://media.istockphoto.com/id/1451566335/photo/paddy.jpg?s=612x612&w=0&k=20&c=cIxF8lDzeJdp5jydm6nwoL_qLdb-XwaLupWIqrUK8QQ=',
        diseased: false,
        diseaseName: '',
        userId : '67136a637c3f3d846987680b',
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2014/10/30/22/53/crop-509862_1280.jpg',
        diseased: true,
        diseaseName: 'Blight',
        userId : '67136a637c3f3d846987680b',
    },
    {
        imageUrl: 'https://media.istockphoto.com/id/1451566335/photo/paddy.jpg?s=612x612&w=0&k=20&c=cIxF8lDzeJdp5jydm6nwoL_qLdb-XwaLupWIqrUK8QQ=',
        diseased: false,
        diseaseName: '',
        userId : '67136a637c3f3d846987680b',
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2014/10/30/22/53/crop-509862_1280.jpg',
        diseased: true,
        diseaseName: 'Blight',
        userId : '67136a637c3f3d846987680b',
    },
    {
        imageUrl: 'https://media.istockphoto.com/id/1451566335/photo/paddy.jpg?s=612x612&w=0&k=20&c=cIxF8lDzeJdp5jydm6nwoL_qLdb-XwaLupWIqrUK8QQ=',
        diseased: false,
        diseaseName: '',
        userId : '67136a637c3f3d846987680b',
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2014/10/30/22/53/crop-509862_1280.jpg',
        diseased: true,
        diseaseName: 'Blight',
        userId : '67136a637c3f3d846987680b',
    },
    
]

// Call the function to add the crop image
// cropImageData.forEach(element => {
//     addCropImageForUser(userId, element);
// });
module.exports = {
    addCropImageForUser,
    userId,
    cropImageData,
};


