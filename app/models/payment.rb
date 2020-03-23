class Payment < ApplicationRecord
    belongs_to :residency
    has_one :resident, through: :residency

    validates :amount, :numericality => { :greater_than_or_equal_to => 1 }
    validates :amount, format: { with: /\A\d*\.?\d{0,2}\z/, message: "needs to be valid dollar amount" }
end
