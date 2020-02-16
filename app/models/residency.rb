class Residency < ApplicationRecord
    belongs_to :resident, class_name: 'User', foreign_key: 'user_id'
    belongs_to :unit
end
