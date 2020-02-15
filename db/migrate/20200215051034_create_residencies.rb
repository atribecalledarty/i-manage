class CreateResidencies < ActiveRecord::Migration[6.0]
  def change
    create_table :residencies do |t|
      t.integer :rent_cost_per_month
      t.integer :curr_balance
      t.integer :user_id
      t.integer :unit_id

      t.timestamps
    end
  end
end
