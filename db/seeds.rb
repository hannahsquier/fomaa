# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "csv"

Neighborhood.destroy_all
Art.destroy_all

  NEIGHBORHOODS = ["Mission", "Castro" , "Haight Ashbury", "Marina", "SoMa" , "Hayes Valley", "North Beach", "Pacific Heights", "Presidio"]

  NEIGHBORHOODS.each do |neighb|
    Neighborhood.create(name: neighb)
  end


CSV.foreach("public/art.csv") do |row|

  neighb = Neighborhood.find_by_name(row.first)
  neighb.arts << Art.create( {image_url: row[5], name: row[1], lat: row[3], lng: row[2], artist: row[4] } )
end

CSV.foreach("public/neighborhood_images.csv") do |row|
  p "test"
  neighb = Neighborhood.find_by_name(row.first)
  neighb.update( image_url: row[1] )
  neighb.save
end