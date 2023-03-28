# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"

puts "seeding users"

User.create(first_name: 'Test', last_name: 'Test', email: 'test@example.net', password: 'testpassword')
20.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.safe_email, password: "jubjub" )
end

puts "seeding clubs"

Club.create(name: "Cooking Club", description: Faker::Lorem.paragraph, meeting_time: "Tuesdays from 2:30-4:30", meeting_area: "Cafeteria", max_membership: 30, admin_id: 1)
Club.create(name: "D&D/RPG meetup", description: Faker::Lorem.paragraph, meeting_time: "Fridays 4-7pm", meeting_area: "Room 203", max_membership: 10, admin_id: 1)
Club.create(name: "Book Club", description: Faker::Lorem.paragraph, meeting_time: "First Wednesday of the month, from 3-5", meeting_area: "Library", max_membership: 20, admin_id: 2)
Club.create(name: "Drama club", description: Faker::Lorem.paragraph, meeting_time: "TBA", meeting_area: "Auditorium", max_membership: 60, admin_id: 3)
Club.create(name: "Photography Club", description: Faker::Lorem.paragraph, meeting_time: "Every other Monday from 3:30-5", meeting_area: "Cafeteria", max_membership: 18, admin_id: 4)

puts "seeding membership"
Membership.create(club_id: 1, user_id: 1)
Membership.create(club_id: 3, user_id: 1)
Membership.create(club_id: 4, user_id: 1)
100.times do
    Membership.create(club_id: rand(1..5), user_id: rand(2..21))
end


puts "done seeding"