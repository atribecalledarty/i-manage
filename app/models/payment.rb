class Payment < ApplicationRecord
    belongs_to :residency
    has_one :resident, through: :residency
end
