class Club < ApplicationRecord
    has_many :memberships, dependent: :destroy
    has_many :users, through: :memberships
    belongs_to :admin, :class_name => "User", :foreign_key => "admin_id"

    def current_memberships
        self.memberships.length
    end
end
