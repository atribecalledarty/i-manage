class Payment < ApplicationRecord
    belongs_to :residency
    has_one :resident, through: :residency

    validates :amount, :numericality => { :greater_than_or_equal_to => 1 }
end
