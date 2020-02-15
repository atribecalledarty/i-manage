class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.integer :unit_number
      t.string :type_of_unit
      t.integer :sq_ft

      t.timestamps
    end
  end
end
