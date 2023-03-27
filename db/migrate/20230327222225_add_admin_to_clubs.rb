class AddAdminToClubs < ActiveRecord::Migration[7.0]
  def change
    add_column :clubs, :admin, :integer
    add_foreign_key :clubs, :users, column: :admin
  end
end
