class RenameAdminToAdminId < ActiveRecord::Migration[7.0]
  def change
    rename_column :clubs, :admin, :admin_id
  end
end
