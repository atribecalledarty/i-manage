# iManage

iManage is a project I built to solidify my understanding of React & Redux. Using React and Redux, I wanted to build an application that hypothetically, my apartment manager, Dalia, could use. How could I build an application that would help my apartment manager track the tenants and units in her apartment complex? Lastly, I wanted tenants to be able to sign in to the website and make payments through the website.

iManage is used to help Luna manage her fellow wizards and witches that reside in her apartment complex, Luna's Cabins.

Luna's Cabins is an apartment complex with 12 units. The application calculates the tenant's balance based 
on previous payments and how many months have passed since the move-in date. Luna can login and assign/remove
users from units. Tenants/Residents can also login to their accounts, make payments to his/her balance, and 
see payment history.

iManage consists of a React front end (React files are located in /client) and Rails API back end.

Deployed Website: 

## Usage




## Cloning and running the application locally:

1. Install Ruby Gems

```bash
$ bundle install
```

2. Install JS node packages (package.json is in /client folder)

```bash
$ cd client
$ npm install
```

3. Migrate and seed database. (Seeding must be executed in that order***)

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

4. Run Rails server and React server using `rake start`

```bash
$ rake start
```



5. Navigate to localhost:3000 in your browser, login to either Luna (manager) or Nymphadora (resident)!

```bash
Luna 
email: itsluna@owl.com
password: nargles

Nymphadora
email: nymphaaaa@owl.com
password: icanchange
```

Thanks for checking out my project. Any feedback is welcomed!
