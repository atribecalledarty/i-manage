class Residency < ApplicationRecord
    belongs_to :resident, class_name: 'User', foreign_key: 'user_id'
    belongs_to :unit
    has_many :payments

    # def sum_of_payments
    #     self.payments.reduce(0) { |sum, n | sum + n.amount }
    # end

    # def months_passed
    #     # (date2.year - date1.year) * 12 + date2.month - date1.month - (date2.day >= date1.day ? 0 : 1)
    #     (Date.today.year - self.start_date.year) * 12 + Date.today.month - self.start_date.month - (Date.today.day >= self.start_date.day ? 0 : 1)
    # end

    # def outstanding_balance
    #     (self.months_passed * self.unit.rent_cost_per_month) - self.sum_of_payments
    # end
end
