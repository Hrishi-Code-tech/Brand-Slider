//This models contains the schema for the user model
//In which some fields like faculty and club section uses array to store cludinary image/vids url as string to access them easily
//Also the homepage video is stored as string to access it easily

import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        //faculty Images array of imges 
        FacultyImg: {
            type: [String],
        },

        //videos of clubsection (array of Videos url as string)
        clubSectionVideo: {
            type: [String],
        },
        //video of homepage 
        homepageVideo: {
            type: String,
        },
        //recruitors Images array of images
        recruitorsImg: {
            type: [String],
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);


