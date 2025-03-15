export const createUser = (req, res) => {
    const {name, email, password, lastName, phone, role } = req.body;
    res.status(201).json({
        message: "User created sucessfully",
        body: req.body
    })
};

export const getUserById = (req, res) => {

};

export const updateUser = () => {

}

export const updatePassword = () => {

}

