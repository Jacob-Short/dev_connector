const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const jwt = requre('jsonwebtoken');
const cofig = require('config');
const User = require('../../models/User')

// using async await rather than .then


// @route    POST api/users
// @desc     Register route
// @access   Public
router.get('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    const { name, email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({
            name,
            email,
            password,
        })

        // Ecrpyt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt)

        await user.save();

        // return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }
        // change back to 3600 for deployment
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});

module.exports = router;