class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.integer :unit_number
      t.integer :sq_ft
      t.integer :number_of_bedrooms

      t.timestamps
    end
  end
end
