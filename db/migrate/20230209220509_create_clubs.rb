class CreateClubs < ActiveRecord::Migration[7.0]
  def change
    create_table :clubs do |t|
      t.string :name
      t.text :description
      t.string :meeting_time
      t.string :meeting_area
      t.integer :max_membership

      t.timestamps
    end
  end
end
