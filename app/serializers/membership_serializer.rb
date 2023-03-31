class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :club_id, :user_id, :favorite
  belongs_to :user
  belongs_to :club
end
