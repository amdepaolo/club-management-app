class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true
    has_many :memberships, dependent: :destroy
    has_many :clubs, through: :memberships
    has_many :administrations, :class_name => "Club", :foreign_key => "admin_id"
end
