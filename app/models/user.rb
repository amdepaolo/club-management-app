class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    has_many :memberships, dependent: :destroy
    has_many :clubs, through: :memberships
    has_many :administrations, :class_name => "Club", :foreign_key => "admin_id"
end
