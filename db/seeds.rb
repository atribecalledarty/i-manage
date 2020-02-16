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
    },
    {
        username: "severus_snape",
        manager_status: "false",
        email: "severus222@owl.com", 
        password: "ilovelily",
        phone_number: "547-561-9842"
    }
])

units = Unit.create([
    {
        unit_number: 101,
        type_of_unit: 'Studio',
        sq_ft: 372,
        rent_cost_per_month: 510
    },
    {
        unit_number: 102,
        type_of_unit: '1 Bedroom',
        sq_ft: 517,
        rent_cost_per_month: 620
    }
])

residencies = Residency.create([
    {
        start_date: DateTime.now,
        curr_balance: 0,
        user_id: 2,
        unit_id: 1
    },
    {
        start_date: DateTime.now,
        curr_balance: 0,
        user_id: 3,
        unit_id: 2
    }
])