class Club < ApplicationRecord
    has_many :memberships, dependent: :destroy
    has_many :users, through: :memberships
    validates :name, presence: true
    validates :meeting_area, presence: true
    validates :meeting_time, presence: true
    validates :max_membership, presence: true
    validates :description, presence: true
    belongs_to :admin, :class_name => "User", :foreign_key => "admin_id"

    def current_memberships
        self.memberships.length
    end
end
