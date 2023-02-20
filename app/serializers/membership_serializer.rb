class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :club_id, :user_id
  belongs_to :user
end
