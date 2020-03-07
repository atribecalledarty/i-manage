class Unit < ApplicationRecord
    has_one :residency
    has_one :resident, through: :residency
    has_many :payments, through: :residency
end
