# iManage

Welcome to my React/Rails Demo Project!

iManage is used to help Luna manage her fellow wizards and witches that reside in her apartment complex, Luna's Cabins.

Luna's Cabins is an apartment complex with 12 units. The application will calculate the tenant's balance based 
on previous payments and how many months have passed since the move-in date. Luna can login and assign/remove
users from units. Tenants/Residents can also login to their accounts, make payments to his/her balance, and 
see payment history.

iManage consists of a React front end (React files are located in /client) that communicates with Rails API backend.

## Installation

1. Install Ruby Gems

```bash
$ bundle install
```

2. Install JS node packages (package.json is in /client folder)

```bash
$ cd client
$ npm install
```

3. Migrate and seed database
```bash
$ rails db:migrate
$ rails db:seed:users
$ rails db:seed:units
$ rails db:seed:residencies
$ rails db:seed:payments_1
$ rails db:seed:payments_2
$ rails db:seed:payments_3
$ rails db:seed:payments_4
```

(Seeding must be executed in that order***). Seeds were separated in separate files for organization.

4. Run both Rails server and React server!
```bash
$ rake start
```

## Usage

Navigate to localhost:3000 in your browser, login to either Luna (manager) or Nymphadora (resident)!

```bash
Luna 
email: itsluna@owl.com
password: nargles

Nymphadora
email: nymphaaaa@owl.com
password: icanchange
```

Thanks for checking out my project. Any feedback is welcomed!
