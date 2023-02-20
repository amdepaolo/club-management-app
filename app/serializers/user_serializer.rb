class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image, :bio
  has_many :clubs
end
