class User < ApplicationRecord
    has_secure_password
    has_one :residency
    has_one :unit, through: :residency
end
