class Club < ApplicationRecord
    has_many :memberships
    has_many :users, through: :memberships

    def current_memberships
        self.memberships.length
    end
end
