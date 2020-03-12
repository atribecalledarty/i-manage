class CreateResidencies < ActiveRecord::Migration[6.0]
  def change
    create_table :residencies do |t|
      t.date :start_date, :default => Date.today
      t.integer :user_id
      t.integer :unit_id

      t.timestamps
    end
  end
end
