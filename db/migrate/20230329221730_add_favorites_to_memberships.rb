class AddFavoritesToMemberships < ActiveRecord::Migration[7.0]
  def change
    add_column :memberships, :favorite, :boolean
  end
end
