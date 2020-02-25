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
        first_name: "Luna",
        last_name: "Lovegood",
        manager_status: "true",
        email: "itsluna@owl.com", 
        password: "nargles",
        phone_number: "547-855-6975"
    },
    {
        username: "nymphy_tonks",
        first_name: "Nymphadora",
        last_name: "Tonks",
        manager_status: "false",
        email: "nymphaaaa@owl.com", 
        password: "icanchange",
        phone_number: "547-477-6122"
    },
    {
        username: "severus_snape",
        first_name: "Severus",
        last_name: "Snape",
        manager_status: "false",
        email: "severus222@owl.com", 
        password: "ilovelily",
        phone_number: "547-561-9842"
    },
    {
        username: "rebeus_hagrid",
        first_name: "Rubeus",
        last_name: "Hagrid",
        manager_status: "false",
        email: "hagrid2022@owl.com", 
        password: "ihaveadragon",
        phone_number: "547-442-7736"
    },
    {
        username: "hermione_granger",
        first_name: "Hermione",
        last_name: "Granger",
        manager_status: "false",
        email: "hermione123@owl.com", 
        password: "imverysmart",
        phone_number: "547-521-6658"
    },
    {
        username: "ginny_weasley",
        first_name: "Ginny",
        last_name: "Weasley",
        manager_status: "false",
        email: "gweasley77@owl.com", 
        password: "ohharry",
        phone_number: "547-464-7672"
    },
    {
        username: "fleur_delacour",
        first_name: "Fleur",
        last_name: "Delacour",
        manager_status: "false",
        email: "fdelacour555@owl.com", 
        password: "thanksron",
        phone_number: "547-655-2263"
    },
    {
        username: "seamus_finnigan",
        first_name: "Seamus",
        last_name: "Finnigan",
        manager_status: "false",
        email: "seamus1234@owl.com", 
        password: "icamearound",
        phone_number: "547-762-7223"
    },
    {
        username: "draco_malfoy",
        first_name: "Draco",
        last_name: "Malfoy",
        manager_status: "false",
        email: "draco444@owl.com", 
        password: "ineedtobeaccepted",
        phone_number: "547-966-4369"
    },
    {
        username: "bellatrix_lestrange",
        first_name: "Bellatrix",
        last_name: "Lestrange",
        manager_status: "false",
        email: "blestrange42@owl.com", 
        password: "imoutofmymind",
        phone_number: "547-855-8584"
    },
    {
        username: "barty_crouch_jr",
        first_name: "Barty",
        last_name: "Crouch Jr.",
        manager_status: "false",
        email: "crouchhh21@owl.com", 
        password: "immessedup",
        phone_number: "547-645-7442"
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
    },
    {
        unit_number: 103,
        type_of_unit: '1 Bedroom',
        sq_ft: 517,
        rent_cost_per_month: 620
    },
    {
        unit_number: 201,
        type_of_unit: 'Studio',
        sq_ft: 350,
        rent_cost_per_month: 608
    },
    {
        unit_number: 202,
        type_of_unit: '1 Bedroom',
        sq_ft: 530,
        rent_cost_per_month: 750
    },
    {
        unit_number: 203,
        type_of_unit: '1 Bedroom',
        sq_ft: 530,
        rent_cost_per_month: 750
    },
    {
        unit_number: 301,
        type_of_unit: 'Studio',
        sq_ft: 290,
        rent_cost_per_month: 870
    },
    {
        unit_number: 302,
        type_of_unit: '1 Bedroom',
        sq_ft: 520,
        rent_cost_per_month: 1080
    },
    {
        unit_number: 303,
        type_of_unit: '1 Bedroom',
        sq_ft: 520,
        rent_cost_per_month: 1080
    },
    {
        unit_number: 401,
        type_of_unit: 'Studio',
        sq_ft: 350,
        rent_cost_per_month: 1200
    },
    {
        unit_number: 402,
        type_of_unit: '1 Bedroom',
        sq_ft: 600,
        rent_cost_per_month: 1600
    },
    {
        unit_number: 403,
        type_of_unit: '1 Bedroom',
        sq_ft: 600,
        rent_cost_per_month: 1600
    }
])

residencies = Residency.create([
    {
        start_date: Date.parse('14-08-2019'),
        curr_balance: 0,
        user_id: 2,
        unit_id: 1
    },
    {
        start_date: Date.parse('02-02-2017'),
        curr_balance: 0,
        user_id: 3,
        unit_id: 2
    },
    {
        start_date: Date.parse('08-06-2015'),
        curr_balance: 0,
        user_id: 4,
        unit_id: 4
    },
    {
        start_date: Date.parse('20-09-2019'),
        curr_balance: 0,
        user_id: 5,
        unit_id: 5
    },
    {
        start_date: Date.parse('02-02-2020'),
        curr_balance: 0,
        user_id: 6,
        unit_id: 7
    },
    {
        start_date: Date.parse('27-03-2018'),
        curr_balance: 0,
        user_id: 7,
        unit_id: 8
    },
    {
        start_date: Date.parse('07-04-2019'),
        curr_balance: 0,
        user_id: 8,
        unit_id: 9
    },
    {
        start_date: Date.parse('19-08-2019'),
        curr_balance: 0,
        user_id: 9,
        unit_id: 10
    },
    {
        start_date: Date.parse('23-06-2017'),
        curr_balance: 0,
        user_id: 10,
        unit_id: 11
    },
    {
        start_date: Date.parse('06-10-2017'),
        curr_balance: 0,
        user_id: 11,
        unit_id: 12
    }
])