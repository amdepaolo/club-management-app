class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :meeting_area, :meeting_time
end
