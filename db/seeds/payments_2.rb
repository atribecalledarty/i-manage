payments_for_rubeus = Payment.create([
    {
        transaction_date: Date.parse('08-08-2015'),
        amount: 30400,
        residency_id: 3
    }
    {
        transaction_date: Date.parse('08-09-2019'),
        amount: 608,
        residency_id: 3
    },
    {
        transaction_date: Date.parse('08-10-2019'),
        amount: 608,
        residency_id: 3
    },
    {
        transaction_date: Date.parse('12-11-2019'),
        amount: 608,
        residency_id: 3
    },
    {
        transaction_date: Date.parse('08-12-2019'),
        amount: 608,
        residency_id: 3
    },
    {
        transaction_date: Date.parse('08-01-2020'),
        amount: 500,
        residency_id: 3
    },
    {
        transaction_date: Date.parse('08-02-2020'),
        amount: 608,
        residency_id: 3
    }
])

payments_for_granger = Payment.create([
    {
        transaction_date: Date.parse('20-10-2019'),
        amount: 750,
        residency_id: 4
    },
    {
        transaction_date: Date.parse('20-11-2019'),
        amount: 750,
        residency_id: 4
    },
    {
        transaction_date: Date.parse('20-12-2019'),
        amount: 750,
        residency_id: 4
    },
    {
        transaction_date: Date.parse('20-01-2020'),
        amount: 750,
        residency_id: 4
    },
    {
        transaction_date: Date.parse('20-02-2020'),
        amount: 750,
        residency_id: 4
    }
])