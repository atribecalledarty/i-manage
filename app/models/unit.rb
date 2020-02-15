class Unit < ApplicationRecord
    has_one :residency
    has_one :user, through: :residency
end
