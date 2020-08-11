class Residency < ApplicationRecord
    belongs_to :resident, class_name: 'User', foreign_key: 'user_id'
    belongs_to :unit
    has_many :payments

    def as_json(options = {})
        super(methods: [:balance], include: [:resident, :unit])
    end 

    def balance
        totalPayments = self.payments.reduce(0) {|total, payment| total + payment.amount } 
        now = Time.now
        months_passed = (now.year - self.start_date.year) * 12 + now.month - self.start_date.month - (now.day >= self.start_date.day ? 0 : 1)
        months_passed * self.unit.rent_cost_per_month - totalPayments
    end
end
