const User=require('../../models/user');
const bcrypt=require('bcryptjs');
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(409).json({
            status: false,
            message:'invalid email or password',
        });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    console.log(user);
    if (!matchPassword) {
        return res.status(409).json({
            status: false,
            message:'invalid email or password',
        });
    }
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
    })

}