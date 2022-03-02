const user = require('../models/User_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        if (user.exists(req.body.email) == true) return res.status(400).json({ message: 'Email already excises' })
        bcrypt.hash(req.body.password, 10, async (err, hashPassword) => {
            if (err) return res.status(500).json({ massage: 'Error' });
            req.body.password = hashPassword;
            await user.create(req.body)
                .then(result => res.status(200).json({ massage: "user added successfully", result }))
                .catch(err => res.status(500).json(err))
        })
    },
    login: async (req, res) => {
        if (user.exists(req.body.email) == true) return res.status(400).json({ massage: 'Email not found' })
        try {
            const User = await user.findOne({ email: req.body.email });
            bcrypt.compare(req.body.password, User.password, (err, isMatch) => {
                if (err) return res.status(500).json({ message: 'Error' });
                if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
                const token = jwt.sign({User}, process.env.SECRET_KEY, { expiresIn: '1h' });
                return res.status(200).json({ message: 'Login successful', token });
            })
        } catch (err) {
            return res.status(500).json(err);
        }
    }

}