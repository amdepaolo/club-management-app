class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :meeting_area, :meeting_time, :member_id

  def member_id
    membership = self.object.memberships.find_by(user_id: instance_options[:user_id])
    if membership
      membership.id
    else false
    end
  end

end
