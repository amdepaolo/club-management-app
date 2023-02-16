class Membership < ApplicationRecord
    belongs_to :user
    belongs_to :club
    validates :user_id, uniqueness: {scope: :club_id, message: "already a member of that club"}
    validate :cannot_exceed_max_membership

    def cannot_exceed_max_membership
        current_memberships = Club.find(self.club_id).current_memberships
        max_membership = Club.find(self.club_id).max_membership
        if current_memberships >= max_membership
            errors.add(:club_id, "Club cannot accept anymore members")
        end
    end
end
