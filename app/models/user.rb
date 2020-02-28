class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :username, uniqueness: true

    has_one :residency, inverse_of: 'resident'
    has_one :unit, through: :residency
end
