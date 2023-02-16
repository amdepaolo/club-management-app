class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :meeting_area, :meeting_time, :is_member

  def is_member
    if self.object.memberships.find_by(user_id: instance_options[:user_id])
      true
    else false
    end
  end

end
