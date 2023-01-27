const User=require('../../models/user');
const bcrypt=require('bcryptjs');
exports.registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const alreadyExists = await User.exists({ email });
    if (alreadyExists) {
        return res.status(409).json({
            status: false,
            message:'User Already Exists',
        });
    }
    const hashedPassedword=await bcrypt.hash(password,10);
    const user = await User.create({ name, email, password:hashedPassedword });
    if (!user) {
        return res.status(404).json({
            status: false,
            message:'Something went wrong',
        });
    }
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
    });
}
