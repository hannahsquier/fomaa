# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  NEIGHBORHOODS = ["Mission District", "Castro District" , "Haight Ashbury", "Marina", "SOMA", "Financial District", "Chinatown" , "Hayes Valley", " Japantown", "Nob Hill", "Noe Valley", "North Beach", "Pacific Heights", "Potrero Hill", "Presidio", "Richmond", "Russian Hill", "Sunset", "Tenderloin"]

  NEIGHBORHOODS.each do |neighb|
    Neighborhood.create(name: neighb)
  end