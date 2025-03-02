import { upload } from "../middlewares/multer.middleware";
import { Router } from "express";

const router = Router();

router.route('/upload').post(upload.array('images', 11), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
    }
    res.status(200).json({ msg: "successful File upload" });
});