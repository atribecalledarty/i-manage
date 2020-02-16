class User < ApplicationRecord
    has_secure_password
    has_one :residency, inverse_of: 'resident'
    has_one :unit, through: :residency
end
