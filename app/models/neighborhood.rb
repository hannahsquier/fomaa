class Neighborhood < ApplicationRecord
  has_many :bars


  def get_coords_from_location
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{urlify(name)},San+Francisco,CA&key=AIzaSyBi_LAVQdQK86p7BcCxTxYuPr1lKVC5HAw"
    response = HTTParty.get(url, verify: false)["results"]
    return response.first["geometry"]["location"]

  end

  def urlify(location)
    location.gsub(" ", "+")
  end
end
