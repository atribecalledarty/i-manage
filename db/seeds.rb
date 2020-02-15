# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
    {
        username: "luna_lovegood",
        manager_status: "true",
        email: "itsluna@owl.com", 
        password: "nargles",
        phone_number: "547-855-6975"
    },
    {
        username: "nymphy_tonks",
        manager_status: "false",
        email: "nymphaaaa@owl.com", 
        password: "icanchange",
        phone_number: "547-477-6122"
    }
])

units = Unit.create([
    {
        
    }
])

