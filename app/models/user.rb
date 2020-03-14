class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/, message: "needs to be valid email" }
    validates :username, uniqueness: true
    validates :phone_number, format: { with: /\d{3}-\d{3}-\d{4}/, message: "needs to be in ###-###-#### format" }

    has_one :residency, inverse_of: 'resident'
    has_many :payments, through: :residency
    has_one :unit, through: :residency
end
