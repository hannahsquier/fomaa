class YelpAPI


  require 'yelp'


  def initialize
    @client = Yelp::Client.new({
             consumer_key: Rails.application.secrets.yelp_consumer_key,
            consumer_secret: Rails.application.secrets.yelp_consumer_secret,
            token: Rails.application.secrets.yelp_token,
            token_secret: Rails.application.secrets.yelp_token_secret
      })
    @params = {term: "bars", sort: 0, limit: 10, radius_filter: 1000, category_filter: "nightlife"}
  end

  def get_top_bars(neighborhood)
    coords = neighborhood.get_coords_from_location
    search_coords = {}
    search_coords[:longitude] = coords["lng"]
    search_coords[:latitude] = coords["lat"]
    top_ten = @client.search_by_coordinates(search_coords, @params)
  end




end