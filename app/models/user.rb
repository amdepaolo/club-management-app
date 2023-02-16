class User < ApplicationRecord
    has_secure_password
    has_many :memberships, dependent: :destroy
    has_many :clubs, through: :memberships
end
