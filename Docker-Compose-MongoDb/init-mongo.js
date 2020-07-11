db.createUser(
    {
        user: 'username',
        pwd: 'pass',
        roles: [
            {
                role: 'readWrite',
                db:'myDatabase',
            }
        ]
    }
)