class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :meeting_area, :meeting_time, :member_id, :favorited, :current_memberships, :max_membership, :admin_id
  has_many :users
  belongs_to :admin

  def member_id
    membership = self.object.memberships.find_by(user_id: instance_options[:user_id])
    if membership
      membership.id
    else false
    end
  end

  def favorited
    membership = self.object.memberships.find_by(user_id: instance_options[:user_id])
    if membership
      membership.favorite
    else false
    end
  end

end
