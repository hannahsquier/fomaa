class AddImageToNeighb < ActiveRecord::Migration[5.0]
  def change
    add_column :neighborhoods, :image_url, :string
  end
end
