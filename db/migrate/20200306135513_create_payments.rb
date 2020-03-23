class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.date :transaction_date, :default => Date.today
      t.float :amount
      t.integer :residency_id

      t.timestamps
    end
  end
end
